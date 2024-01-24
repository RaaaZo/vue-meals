import type { IMealCategoryResponseDto } from '@/api/dto'
import { mapCategoriesDtoIntoCategoriesModel } from '@/api/mappers/mapCategoriesDtoIntoCategoriesModel'
import type { IMealCategory } from '@/api/models'
import { useFetch } from '@/composables/useFetch'

export const useFetchCategoriesNames = () => {
  const { data, fetchData, isError, isLoading } = useFetch<
    IMealCategoryResponseDto,
    IMealCategory[]
  >()

  const fetchCategoriesNames = async () => {
    await fetchData(
      `https://www.themealdb.com/api/json/v1/1/list.php?c=list`,
      mapCategoriesDtoIntoCategoriesModel
    )
  }

  return {
    isLoading,
    data,
    isError,
    fetchData: fetchCategoriesNames
  }
}
