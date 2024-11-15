<template>
  <div>
    <div v-html="content" class="prose max-w-[60ch]"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: string;
}>();
</script>

<style scoped></style>
