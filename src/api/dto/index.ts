export interface IMealDto {
  idMeal: string
  strMeal: string
  strMealThumb: string
}

export interface IMealResponseDto {
  meals: IMealDto[]
}

export interface IMealCategoryDto {
  strCategory: string
}

export interface IMealCategoryResponseDto {
  meals: IMealCategoryDto[]
}
