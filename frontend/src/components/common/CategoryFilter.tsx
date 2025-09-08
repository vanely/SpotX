import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Category } from '@/types/categories';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategories: string[];
  onCategoryToggle: (categoryId: string) => void;
  onClearAll: () => void;
  className?: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategories,
  onCategoryToggle,
  onClearAll,
  className = ''
}) => {
  const hasSelectedCategories = selectedCategories.length > 0;

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filter by Category</h3>
        {hasSelectedCategories && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClearAll}
            className="text-xs"
          >
            Clear All
          </Button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category.id);
          return (
            <Badge
              key={category.id}
              variant={isSelected ? "default" : "outline"}
              className={`cursor-pointer transition-colors hover:bg-primary/80 ${
                isSelected ? 'bg-primary text-primary-foreground' : ''
              }`}
              onClick={() => onCategoryToggle(category.id)}
            >
              {category.name}
            </Badge>
          );
        })}
      </div>

      {hasSelectedCategories && (
        <div className="text-sm text-gray-600">
          {selectedCategories.length} categor{selectedCategories.length === 1 ? 'y' : 'ies'} selected
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
