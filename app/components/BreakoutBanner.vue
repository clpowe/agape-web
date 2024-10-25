<template>
	<GridComponent element="section" class="full-width bg-red-800 text-white">
		<div>
			<MainSectionContent :title :showCTA :primaryCTA />
		</div>
		<div>
			<NuxtImg :src="image" />
		</div>
	</GridComponent>
</template>

<script setup lang="ts">
	import { NuxtImg } from '~/.nuxt/components'

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

<style scoped></style>
