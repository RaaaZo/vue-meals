import type { IMeal } from '@/api/models'
import type { IMealResponseDto } from '@/api/dto'

export const mapMealDtoIntoMealModel = (mealsDto: IMealResponseDto): IMeal[] =>
  mealsDto.meals.map((meal) => ({
    id: meal.idMeal,
    image: meal.strMealThumb,
    meal: meal.strMeal
  }))
