<script setup lang="ts">
	type Link = {
		text: string
		url: string
	}

	defineProps<{
		title: string
		showCTA?: boolean
		primaryCTA?: Link
		image?: string
	}>()
</script>

<template>
	<GridComponent element="section" class="full-width bg-red-800 text-white">
		<div class="grid grid-cols-1 md:grid-cols-2">
			<div class="py-8">
				<MainSectionContent :lgText="false" :title :showCTA :primaryCTA />
			</div>
			<div class="-mt-24 md:-mt-60 object-fill place-content-end">
				<NuxtImg :src="image" class="w-full" />
			</div>
		</div>
	</GridComponent>
</template>
