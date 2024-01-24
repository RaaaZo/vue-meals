<template>
  <div
    class="group w-72 h-72 flex-shrink-0 flex-grow-0 rounded-md flex justify-center items-center cursor-pointer relative overflow-hidden"
    @click="onClickHandler(id)"
  >
    <img
      :src="image"
      :alt="meal"
      class="absolute top-0 left-0 w-full h-full object-cover object-center -z-10"
    />

    <div
      class="bg-transparent group-hover:bg-black transition-all duration-300 absolute w-full h-full top-0 left-0 opacity-60"
    />

    <h4
      class="scale-0 group-hover:scale-100 text-white font-bold text-xl transition-all duration-300 text-center"
    >
      {{ meal }}
    </h4>
  </div>
</template>

<script setup lang="ts">
import { RouteNames } from '@/router/routes'
import { useRouter } from 'vue-router'

defineProps<{
  image: string
  meal: string
  id: string
}>()

const { push } = useRouter()

const onClickHandler = (id: string) => {
  push({ name: RouteNames.MEALS_DETAIL, params: { id } })
}
</script>
