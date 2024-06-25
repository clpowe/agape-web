<template>
	<section>
		<h2>
			<span>{{ pretext }}</span>
			{{ title }}
		</h2>
		<p>{{ text }}</p>
		<slot />
	</section>
</template>

<script setup lang="ts">
	defineProps<{
		pretext: string
		title: string
		text: string
	}>()
</script>

<style scoped></style>
