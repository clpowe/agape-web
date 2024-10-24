<template>
	<div>Hello {{ text }}!</div>
</template>

<script setup lang="ts">
	defineProps<{
		text: string
	}>()
</script>
