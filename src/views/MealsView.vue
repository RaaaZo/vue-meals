<template>
  <CategoriesButtons :activeCategory="activeCategory" @setActiveCategory="setActiveCategory" />

  <section class="mx-6 my-12">
    <Transition :appear="!activeCategory" @enter="onEnter">
      <div v-if="!activeCategory" class="flex justify-center items-center">
        <h2 class="text-4xl text-blue-600 text-center">
          You have to choose one of the listed categories to proceed
        </h2>
      </div>
    </Transition>

    <TransitionGroup
      v-if="!shouldNotDisplayData"
      :appear="!!data?.length"
      @enter="onEnter"
      tag="div"
      class="flex gap-6 items-center flex-wrap"
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
import { getCardsAnimation } from '@/animations'
import { useFetchMealByCategory } from '@/api/composables/useFetchMealByCategory'
import CategoriesButtons from '@/components/CategoriesButtons/CategoriesButtons.vue'
import MealCard from '@/components/MealCard/MealCard.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'

const activeCategory = ref<string | null>(null)

const { replace } = useRouter()

const setActiveCategory = (categoryName: string) => {
  activeCategory.value = categoryName
  replace({ query: { category: categoryName }, force: true })
}

const { data, fetchData, isError, isLoading } = useFetchMealByCategory()

const shouldNotDisplayData = computed(
  () => !isError && !isLoading && !!data.value?.length && activeCategory
)

const onEnter = (el: Element) => {
  // @ts-ignore
  const cardsAnimation = getCardsAnimation(el.dataset.index)

  gsap.fromTo(el, cardsAnimation.from, cardsAnimation.to)
}

onMounted(async () => {
  await fetchData(activeCategory.value || '')
})

watch(activeCategory, async (newValue, oldValue) => {
  if (newValue !== oldValue) {
    await fetchData(newValue || '')
  }
})
</script>
