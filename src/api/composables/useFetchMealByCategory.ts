import type { IMealResponseDto } from '@/api/dto'
import { mapMealDtoIntoMealModel } from '@/api/mappers/mapMealDtoIntoMealModel'
import type { IMealByCategory } from '@/api/models'
import { useFetch } from '@/composables/useFetch'

export const useFetchMealByCategory = () => {
  const { data, fetchData, isError, isLoading } = useFetch<IMealResponseDto, IMealByCategory[]>()

  const fetchMeals = async (category: string) => {
    await fetchData(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
      mapMealDtoIntoMealModel
    )
  }

  return {
    isLoading,
    data,
    isError,
    fetchData: fetchMeals
  }
}
