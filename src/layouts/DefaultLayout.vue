<template>
  <NavigationComponent />

  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">
import NavigationComponent from '@/components/Navigation/NavigationComponent.vue'
</script>
