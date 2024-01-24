import type { IMealCategoryResponseDto } from '@/api/dto'
import type { IMealCategory } from '@/api/models'

export const mapCategoriesDtoIntoCategoriesModel = (
  dto: IMealCategoryResponseDto
): IMealCategory[] => {
  return dto.meals.map((meal) => ({
    categoryName: meal.strCategory
  }))
}
