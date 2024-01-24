<template>
  <header>
    <TransitionGroup
      appear
      tag="ul"
      @enter="onEnter"
      class="flex gap-6 items-center px-8 py-6 h-[72px] border-b border-gray-300"
    >
      <li v-for="(route, index) in navbarLinks" :key="route.name" :data-index="index">
        <router-link :to="route.path" class="link">
          {{ route.name }}
        </router-link>
      </li>
    </TransitionGroup>
  </header>
</template>

<script setup lang="ts">
import { routes } from '@/router/routes'
import { gsap } from 'gsap'

const navbarLinks = routes.filter((route) => route.isNavbarLink)

const onEnter = (el: Element, done: () => void) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: -20
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      // @ts-expect-error
      delay: el.dataset.index * 0.2,
      onComplete: done
    }
  )
}
</script>
