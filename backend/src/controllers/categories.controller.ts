import { Request, Response } from 'express';
import { CategoriesService } from '@/services/categories.service';
import { HTTP_STATUS, SUCCESS_MESSAGES } from '@/utils/constants';
import { asyncHandler } from '@/middleware/error.middleware';
import { AuthenticatedRequest } from '@/middleware/auth.middleware';

export class CategoriesController {
  private categoriesService: CategoriesService;

  constructor() {
    this.categoriesService = new CategoriesService();
  }

  // Get all categories
  getAllCategories = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const categories = await this.categoriesService.getAllCategories();

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        categories,
      },
    });
  });

  // Get official categories only
  getOfficialCategories = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const categories = await this.categoriesService.getOfficialCategories();

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        categories,
      },
    });
  });

  // Get category by ID
  getCategoryById = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { categoryId } = req.params;

    const category = await this.categoriesService.getCategoryById(categoryId as string);

    if (!category) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
        success: false,
        message: 'Category not found',
      });
      return;
    }

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        category,
      },
    });
  });

  // Get category by slug
  getCategoryBySlug = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { slug } = req.params;

    const category = await this.categoriesService.getCategoryBySlug(slug as string);

    if (!category) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
        success: false,
        message: 'Category not found',
      });
      return;
    }

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        category,
      },
    });
  });

  // Create new category (admin only)
  createCategory = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const categoryData = req.body;

    const category = await this.categoriesService.createCategory(categoryData);

    res.status(HTTP_STATUS.CREATED).json({
      success: true,
      message: 'Category created successfully',
      data: {
        category,
      },
    });
  });

  // Propose new category (community)
  proposeCategory = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const categoryData = req.body;

    const category = await this.categoriesService.proposeCategory(categoryData);

    res.status(HTTP_STATUS.CREATED).json({
      success: true,
      message: 'Category proposed successfully',
      data: {
        category,
      },
    });
  });

  // Update category (admin only)
  updateCategory = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { categoryId } = req.params;
    const updateData = req.body;

    const category = await this.categoriesService.updateCategory(categoryId as string, updateData);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: 'Category updated successfully',
      data: {
        category,
      },
    });
  });

  // Delete category (admin only)
  deleteCategory = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { categoryId } = req.params;

    await this.categoriesService.deleteCategory(categoryId as string);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: 'Category deleted successfully',
    });
  });

  // TAG MANAGEMENT

  // Get all tags
  getAllTags = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const tags = await this.categoriesService.getAllTags();

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        tags,
      },
    });
  });

  // Get tags by category
  getTagsByCategory = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { category } = req.params;

    const tags = await this.categoriesService.getTagsByCategory(category as string);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        tags,
      },
    });
  });

  // Get popular tags
  getPopularTags = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 20;

    const tags = await this.categoriesService.getPopularTags(limit);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        tags,
      },
    });
  });

  // Search tags
  searchTags = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const { q } = req.query;

    if (!q || typeof q !== 'string') {
      res.status(HTTP_STATUS.BAD_REQUEST).json({
        success: false,
        message: 'Search query is required',
      });
      return;
    }

    const tags = await this.categoriesService.searchTags(q);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        tags,
      },
    });
  });

  // Create new tag
  createTag = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const tagData = req.body;

    const tag = await this.categoriesService.createTag(tagData);

    res.status(HTTP_STATUS.CREATED).json({
      success: true,
      message: 'Tag created successfully',
      data: {
        tag,
      },
    });
  });

  // Update tag
  updateTag = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { tagId } = req.params;
    const updateData = req.body;

    const tag = await this.categoriesService.updateTag(tagId as string, updateData);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: 'Tag updated successfully',
      data: {
        tag,
      },
    });
  });

  // Delete tag
  deleteTag = asyncHandler(async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { tagId } = req.params;

    await this.categoriesService.deleteTag(tagId as string);

    res.status(HTTP_STATUS.OK).json({
      success: true,
      message: 'Tag deleted successfully',
    });
  });

  // Get category and tag statistics
  getCategoryStats = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const stats = await this.categoriesService.getCategoryStats();

    res.status(HTTP_STATUS.OK).json({
      success: true,
      data: {
        stats,
      },
    });
  });
}