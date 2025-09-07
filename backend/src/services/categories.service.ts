import { db } from '@/config/database.config';
import { ERROR_MESSAGES } from '@/utils/constants';
import { generateSlug } from '@/utils/validation.util';

export interface CategoryWithStats {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  color: string;
  isOfficial: boolean;
  proposalCount: number;
  approvalThreshold: number;
  createdAt: string;
  updatedAt: string;
  _count: {
    spots: number;
  };
}

export interface CreateCategoryRequest {
  name: string;
  description?: string;
  icon?: string;
  color?: string;
}

export interface ProposeCategoryRequest {
  name: string;
  description?: string;
  icon?: string;
  color?: string;
}

export interface TagWithStats {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  category: string;
  color: string;
  usageCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTagRequest {
  name: string;
  description?: string;
  category: 'surface' | 'difficulty' | 'features' | 'conditions' | 'accessibility' | 'other';
  color?: string;
}

export class CategoriesService {
  // Category Management
  async getAllCategories(): Promise<CategoryWithStats[]> {
    const categories = await db.category.findMany({
      include: {
        _count: {
          select: {
            spots: true,
          },
        },
      },
      orderBy: [
        { isOfficial: 'desc' },
        { name: 'asc' },
      ],
    });

    return categories.map(this.formatCategoryResponse);
  }

  async getOfficialCategories(): Promise<CategoryWithStats[]> {
    const categories = await db.category.findMany({
      where: {
        isOfficial: true,
      },
      include: {
        _count: {
          select: {
            spots: true,
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });

    return categories.map(this.formatCategoryResponse);
  }

  async getCategoryById(categoryId: string): Promise<CategoryWithStats | null> {
    const category = await db.category.findUnique({
      where: { id: categoryId },
      include: {
        _count: {
          select: {
            spots: true,
          },
        },
      },
    });

    if (!category) {
      return null;
    }

    return this.formatCategoryResponse(category);
  }

  async getCategoryBySlug(slug: string): Promise<CategoryWithStats | null> {
    const category = await db.category.findUnique({
      where: { slug },
      include: {
        _count: {
          select: {
            spots: true,
          },
        },
      },
    });

    if (!category) {
      return null;
    }

    return this.formatCategoryResponse(category);
  }

  async createCategory(data: CreateCategoryRequest): Promise<CategoryWithStats> {
    const { name, description, icon, color = '#3B82F6' } = data;
    const slug = generateSlug(name);

    // Check if category with same name or slug exists
    const existing = await db.category.findFirst({
      where: {
        OR: [
          { name: { equals: name, mode: 'insensitive' } },
          { slug },
        ],
      },
    });

    if (existing) {
      throw new Error(ERROR_MESSAGES.CATEGORY_ALREADY_EXISTS);
    }

    const category = await db.category.create({
      data: {
        name,
        slug,
        description: description || null,
        icon: icon || null,
        color,
        isOfficial: true, // Admin-created categories are official by default
      },
      include: {
        _count: {
          select: {
            spots: true,
          },
        },
      },
    });

    return this.formatCategoryResponse(category);
  }

  async proposeCategory(data: ProposeCategoryRequest): Promise<CategoryWithStats> {
    const { name, description, icon, color = '#6B7280' } = data;
    const slug = generateSlug(name);

    // Check if category with same name or slug exists
    const existing = await db.category.findFirst({
      where: {
        OR: [
          { name: { equals: name, mode: 'insensitive' } },
          { slug },
        ],
      },
    });

    if (existing) {
      // If category exists but is not official, increment proposal count
      if (!existing.isOfficial) {
        const updated = await db.category.update({
          where: { id: existing.id },
          data: {
            proposalCount: {
              increment: 1,
            },
          },
          include: {
            _count: {
              select: {
                spots: true,
              },
            },
          },
        });

        // Check if it should become official
        await this.checkAndPromoteCategory(updated.id);

        return this.formatCategoryResponse(updated);
      } else {
        throw new Error(ERROR_MESSAGES.CATEGORY_ALREADY_EXISTS);
      }
    }

    // Create new proposed category
    const category = await db.category.create({
      data: {
        name,
        slug,
        description: description || null,
        icon: icon || null,
        color,
        isOfficial: false,
        proposalCount: 1,
        approvalThreshold: 10, // Needs 10 proposals to become official
      },
      include: {
        _count: {
          select: {
            spots: true,
          },
        },
      },
    });

    return this.formatCategoryResponse(category);
  }

  async updateCategory(categoryId: string, data: Partial<CreateCategoryRequest>): Promise<CategoryWithStats> {
    const existing = await db.category.findUnique({
      where: { id: categoryId },
    });

    if (!existing) {
      throw new Error(ERROR_MESSAGES.CATEGORY_NOT_FOUND);
    }

    const updateData: any = { ...data };

    // Update slug if name is being changed
    if (data.name && data.name !== existing.name) {
      updateData.slug = generateSlug(data.name);

      // Check for slug conflicts
      const slugConflict = await db.category.findFirst({
        where: {
          slug: updateData.slug,
          id: { not: categoryId },
        },
      });

      if (slugConflict) {
        throw new Error(ERROR_MESSAGES.CATEGORY_ALREADY_EXISTS);
      }
    }

    const category = await db.category.update({
      where: { id: categoryId },
      data: updateData,
      include: {
        _count: {
          select: {
            spots: true,
          },
        },
      },
    });

    return this.formatCategoryResponse(category);
  }

  async deleteCategory(categoryId: string): Promise<void> {
    const category = await db.category.findUnique({
      where: { id: categoryId },
      include: {
        _count: {
          select: {
            spots: true,
          },
        },
      },
    });

    if (!category) {
      throw new Error(ERROR_MESSAGES.CATEGORY_NOT_FOUND);
    }

    // Don't allow deletion if category has spots
    if (category._count.spots > 0) {
      throw new Error('Cannot delete category with existing spots');
    }

    await db.category.delete({
      where: { id: categoryId },
    });
  }

  private async checkAndPromoteCategory(categoryId: string): Promise<void> {
    const category = await db.category.findUnique({
      where: { id: categoryId },
    });

    if (category && !category.isOfficial && category.proposalCount >= category.approvalThreshold) {
      await db.category.update({
        where: { id: categoryId },
        data: {
          isOfficial: true,
        },
      });
    }
  }

  // Tag Management
  async getAllTags(): Promise<TagWithStats[]> {
    const tags = await db.tag.findMany({
      orderBy: [
        { usageCount: 'desc' },
        { name: 'asc' },
      ],
    });

    return tags.map(this.formatTagResponse);
  }

  async getTagsByCategory(category: string): Promise<TagWithStats[]> {
    const tags = await db.tag.findMany({
      where: { category },
      orderBy: [
        { usageCount: 'desc' },
        { name: 'asc' },
      ],
    });

    return tags.map(this.formatTagResponse);
  }

  async getPopularTags(limit: number = 20): Promise<TagWithStats[]> {
    const tags = await db.tag.findMany({
      orderBy: {
        usageCount: 'desc',
      },
      take: limit,
    });

    return tags.map(this.formatTagResponse);
  }

  async createTag(data: CreateTagRequest): Promise<TagWithStats> {
    const { name, description, category, color = '#6B7280' } = data;
    const slug = generateSlug(name);

    // Check if tag with same name or slug exists
    const existing = await db.tag.findFirst({
      where: {
        OR: [
          { name: { equals: name, mode: 'insensitive' } },
          { slug },
        ],
      },
    });

    if (existing) {
      throw new Error('Tag already exists');
    }

    const tag = await db.tag.create({
      data: {
        name,
        slug,
        description: description || null,
        category,
        color,
      },
    });

    return this.formatTagResponse(tag);
  }

  async updateTag(tagId: string, data: Partial<CreateTagRequest>): Promise<TagWithStats> {
    const existing = await db.tag.findUnique({
      where: { id: tagId },
    });

    if (!existing) {
      throw new Error('Tag not found');
    }

    const updateData: any = { ...data };

    // Update slug if name is being changed
    if (data.name && data.name !== existing.name) {
      updateData.slug = generateSlug(data.name);

      // Check for slug conflicts
      const slugConflict = await db.tag.findFirst({
        where: {
          slug: updateData.slug,
          id: { not: tagId },
        },
      });

      if (slugConflict) {
        throw new Error('Tag already exists');
      }
    }

    const tag = await db.tag.update({
      where: { id: tagId },
      data: updateData,
    });

    return this.formatTagResponse(tag);
  }

  async deleteTag(tagId: string): Promise<void> {
    const tag = await db.tag.findUnique({
      where: { id: tagId },
    });

    if (!tag) {
      throw new Error('Tag not found');
    }

    // Delete tag and all associated spot tags
    await db.tag.delete({
      where: { id: tagId },
    });
  }

  async searchTags(query: string): Promise<TagWithStats[]> {
    const tags = await db.tag.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
      orderBy: [
        { usageCount: 'desc' },
        { name: 'asc' },
      ],
      take: 20,
    });

    return tags.map(this.formatTagResponse);
  }

  async getCategoryStats(): Promise<{
    totalCategories: number;
    officialCategories: number;
    proposedCategories: number;
    totalTags: number;
    tagsByCategory: Array<{
      category: string;
      count: number;
    }>;
  }> {
    const [
      totalCategories,
      officialCount,
      proposedCount,
      totalTags,
      tagsByCategory,
    ] = await Promise.all([
      db.category.count(),
      db.category.count({ where: { isOfficial: true } }),
      db.category.count({ where: { isOfficial: false } }),
      db.tag.count(),
      db.tag.groupBy({
        by: ['category'],
        _count: {
          id: true,
        },
        orderBy: {
          _count: {
            id: 'desc',
          },
        },
      }),
    ]);

    return {
      totalCategories,
      officialCategories: officialCount,
      proposedCategories: proposedCount,
      totalTags,
      tagsByCategory: tagsByCategory.map((item: any) => ({
        category: item.category,
        count: item._count.id,
      })),
    };
  }

  private formatCategoryResponse(category: any): CategoryWithStats {
    return {
      ...category,
      createdAt: category.createdAt.toISOString(),
      updatedAt: category.updatedAt.toISOString(),
    };
  }

  private formatTagResponse(tag: any): TagWithStats {
    return {
      ...tag,
      createdAt: tag.createdAt.toISOString(),
      updatedAt: tag.updatedAt.toISOString(),
    };
  }
}