<template>
  <section class="px-6 py-16">
    <h2 class="section-heading">How It Works</h2>

    <TransitionGroup tag="div" appear @enter="onEnter" class="grid grid-cols-3 gap-4">
      <div
        v-for="(section, index) in howItWorksSections"
        :key="section.title"
        :data-index="index"
        class="group flex flex-col gap-8 items-center justify-center relative w-full h-80 p-4 rounded-md bg-gray-900 overflow-hidden shadow-xl"
        @mouseover.stop="onMouseOver"
        @mouseout.stop="onMouseOut"
      >
        <h2 class="text-3xl font-bold text-center text-white pointer-events-none">
          {{ section.title }}
        </h2>
        <h3 class="text-2xl text-center text-white pointer-events-none">
          {{ section.description }}
        </h3>

        <img
          :src="section.icon"
          alt="how it works"
          class="w-full h-full object-cover object-center absolute top-0 left-0 -z-10 brightness-50 pointer-events-none"
        />
      </div>
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
import { howItWorksSections } from '@/constants/howItWorksSections'
import { gsap } from 'gsap'

const onEnter = (el: Element) => {
  gsap.fromTo(
    el,
    { opacity: 0, scale: 0 },
    // @ts-expect-error
    { opacity: 1, scale: 1, duration: 1, delay: el.dataset.index * 0.2 }
  )
}

const onMouseOver = (payload: MouseEvent) => {
  gsap.to(payload.target, { rotate: 4, scale: 1.05, duration: 0.5 })
}

const onMouseOut = (payload: MouseEvent) => {
  gsap.to(payload.target, { rotate: 0, scale: 1, duration: 0.5 })
}
</script>
