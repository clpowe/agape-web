<template>
  <div class="flex flex-col gap-4">
    <div v-html="content" class="max-w-[60ch] text-xl" v-bind="$attrs"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: string;
}>();
</script>

<style scoped>
div :deep(h3) {
  @apply text-3xl;
}

p {
  margin-bottom: 0;
  margin-top: 0;
  font-size: 1rem;
  line-height: 144%;
}
</style>
