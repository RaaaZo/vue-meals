<template>
  <div>
    <pre>{{ params }}</pre>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const { params } = useRoute()
</script>
