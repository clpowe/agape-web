<template>
	<div v-html="content" class="prose max-w-[60ch]"></div>
</template>

<script setup lang="ts">
	defineProps<{
		content: string
	}>()
</script>

<style scoped></style>
