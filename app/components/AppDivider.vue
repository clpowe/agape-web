<template>
  <div class="divider"
    :class="{ 'before:border-white': color === 'white', 'before:border-black': color === 'black' }" />
</template>

<script setup lang="ts">

type Color = "white" | "black"

const { color = "black" } = defineProps<{
  color?: Color;
}>();
</script>

<style scoped>
.divider {
  @apply flex relative items-center my-0 h-2 whitespace-nowrap;
}

.divider:before {
  content: "";
  @apply absolute block top-1/2 left-0 w-full border-t border-solid;
}
</style>
