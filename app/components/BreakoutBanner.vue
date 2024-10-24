<template>
	<GridComponent element="section" class="full-width bg-red-800 text-white">
		<div>
			<MainSectionContent :title :showCTA :primaryCTA />
		</div>
	</GridComponent>
</template>

<script setup lang="ts">
	type Link = {
		text: string
		url: string
	}

	defineProps<{
		title: string
		showCTA?: boolean
		primaryCTA?: Link
	}>()
</script>

<style scoped></style>
