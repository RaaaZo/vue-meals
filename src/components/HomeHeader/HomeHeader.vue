<template>
  <section class="flex flex-col gap-8 items-center justify-center relative w-full h-[1024px]">
    <img
      :src="heroImg"
      alt="hero"
      class="absolute top-0 left-0 -z-10 w-full h-[1024px] object-cover object-center brightness-50"
    />

    <h1 class="text-6xl font-bold text-center text-white heading">
      Discover Your Next Favorite Meal!
    </h1>

    <h3 class="text-4xl text-center text-white sub-heading">
      Explore thousands of recipes, find nutritional information, and customize your search to fit
      your taste.
    </h3>

    <form @submit.prevent="onSubmitHandler" class="input flex">
      <input
        v-model="inputValue"
        type="text"
        class="w-96 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-md rounded-e-none focus:ring-blue-500 focus:border-blue-500 block p-4"
        placeholder="Enter Dish Name"
      />
      <button class="rounded-e-md btn disabled:bg-gray-300" :disabled="!inputValue">Search</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import heroImg from '@/assets/images/hero.png'
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'
import { scaleInAnimation } from '@/animations'
import { useRouter } from 'vue-router'
import { RouteNames } from '@/router/routes'

const { push } = useRouter()

const inputValue = ref('')

const onSubmitHandler = () => {
  push({ name: RouteNames.MEALS, query: { dishName: inputValue.value } })
}

onMounted(() => {
  let tl = gsap.timeline()

  tl.fromTo('.heading', scaleInAnimation.from, scaleInAnimation.to)
    .fromTo('.sub-heading', scaleInAnimation.from, scaleInAnimation.to, '-=0.5')
    .fromTo('.input', scaleInAnimation.from, scaleInAnimation.to, '-=0.5')
})
</script>
