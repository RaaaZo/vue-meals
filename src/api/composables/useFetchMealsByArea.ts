import type { IMealResponseDto } from '@/api/dto'
import { mapMealDtoIntoMealModel } from '@/api/mappers/mapMealDtoIntoMealModel'
import type { IMeal } from '@/api/models'
import { useFetch } from '@/composables/useFetch'

export const useFetchMealsByArea = () => {
  const { data, fetchData, isError, isLoading } = useFetch<IMealResponseDto, IMeal[]>()

  const fetchMealsByArea = async (area: string) => {
    await fetchData(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`,
      mapMealDtoIntoMealModel
    )
  }

  return {
    isLoading,
    data,
    isError,
    fetchData: fetchMealsByArea
  }
}
