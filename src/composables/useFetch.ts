import axios from 'axios'
import { ref, shallowRef } from 'vue'

export const useFetch = <TResponse, YTransformFnOutput>() => {
  const isLoading = ref(false)
  const isError = ref(false)
  const data = shallowRef<YTransformFnOutput | null>(null)

  const fetchData = async (url: string, transformFn?: (data: TResponse) => YTransformFnOutput) => {
    isLoading.value = true
    isError.value = false
    try {
      const res = await axios.get<TResponse>(url)

      if (transformFn) {
        data.value = transformFn(res.data)
      } else {
        data.value = res.data
      }
    } catch (err: any) {
      isError.value = true
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    data,
    isError,
    fetchData
  }
}
