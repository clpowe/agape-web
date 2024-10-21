<template>
	<li
		:key="item.text"
		class="bg-zinc-200 hover:bg-zinc-100 px-6 py-8 h-72 cursor-pointer"
	>
		<NuxtLink :to="item.url" class="text-balance hover:text-brand-500">
			<h3 class="text-2xl font-gilda">
				{{ item.text }}
			</h3>
			<AppDivider />
			<AppContent :content="item.content" />
		</NuxtLink>
	</li>
</template>

<script setup lang="ts">
	type Item = {
		text: string
		url?: string
		content?: string
	}

	defineProps<{
		item: Item
	}>()
</script>

<style scoped></style>
