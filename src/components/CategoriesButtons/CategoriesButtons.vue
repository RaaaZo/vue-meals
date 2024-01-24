<template>
  <section>
    <TransitionGroup
      tag="ul"
      :appear="shouldShowButtons"
      class="flex flex-wrap gap-4 mt-8 mx-6 justify-center items-center"
      @enter="onEnter"
    >
      <li v-for="({ categoryName }, index) in data" :key="categoryName" :data-index="index">
        <button
          @click="$emit('setActiveCategory', categoryName)"
          class="px-4 py-2 border border-gray-300 rounded-2xl hover:bg-gray-100 flex-grow-0 flex-shrink-0"
          :class="{
            'bg-gray-100': activeCategory === categoryName
          }"
        >
          {{ categoryName }}
        </button>
      </li>
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'
import { useFetchCategoriesNames } from '@/api/composables/useFetchCategoriesNames'

defineProps<{
  activeCategory: string | null
}>()
const emit = defineEmits<{
  (e: 'setActiveCategory', categoryName: string): void
}>()

const { query } = useRoute()

const { data, fetchData, isError, isLoading } = useFetchCategoriesNames()

onMounted(() => {
  fetchData()
})

const shouldShowButtons = computed(() => !isError.value && !isLoading.value)

onMounted(() => {
  const category = query.category as string | undefined
  if (category) {
    emit('setActiveCategory', category)
  }
})

const onEnter = (el: Element, done: () => void) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: '-100%'
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      // @ts-ignore
      delay: el.dataset.index * 0.1,
      ease: 'bounce.out',
      done
    }
  )
}
</script>
