<template>
	<div>
		<component :is="icon" class="icon" />
		<h3>{{ title }}</h3>
		<p>{{ text }}</p>
		<a :ghost="true" :href="href">about our law school program</a>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		icon: string
		title: string
		text: string
		href: string
	}>()
</script>

<style scoped>
	.icon {
		color: oklch(var(--accent));
		font-size: 5rem;
	}
</style>
