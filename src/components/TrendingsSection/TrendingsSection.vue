<template>
  <section class="px-6 pb-12">
    <h2 class="section-heading">Trending Meals</h2>

    <TransitionGroup
      v-if="!isError && !isLoading"
      :appear="!!data?.length"
      @enter="onEnter"
      tag="div"
      class="flex gap-6 items-center overflow-x-auto"
    >
      <MealCard
        v-for="({ id, image, meal }, index) in data"
        :key="id"
        :data-index="index"
        :image="image"
        :meal="meal"
        :id="id"
      />
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
import { useFetchMealsByArea } from '@/api/composables/useFetchMealsByArea'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import MealCard from '@/components/MealCard/MealCard.vue'
import { getCardsAnimation } from '@/animations'

const { data, fetchData, isError, isLoading } = useFetchMealsByArea()

const mealsAreas = ['Polish', 'Italian', 'American', 'British', 'Canadian']
const randomArea = mealsAreas[Math.floor(Math.random() * mealsAreas.length)]

onMounted(async () => {
  await fetchData(randomArea)
})

const onEnter = (el: Element) => {
  // @ts-ignore
  const cardsAnimation = getCardsAnimation(el.dataset.index)

  gsap.fromTo(el, cardsAnimation.from, cardsAnimation.to)
}
</script>
