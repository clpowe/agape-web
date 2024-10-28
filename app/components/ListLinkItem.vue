<template>
	<li
		:key="item.text"
		class="bg-zinc-200 px-6 py-8 h-72"
		:class="{ 'hover:bg-zinc-100 cursor-pointer': item.url }"
	>
		<NuxtLink
			v-if="item.url"
			:to="item.url"
			class="text-balance hover:text-brand-500"
		>
			<h3 class="text-2xl font-gilda">
				{{ item.text }}
			</h3>
			<AppDivider />
			<AppContent v-if="item.content" :content="item.content" />
		</NuxtLink>

		<div v-else class="text-balance">
			<h3 class="text-2xl font-gilda">
				{{ item.text }}
			</h3>
			<AppDivider />
			<AppContent v-if="item.content" :content="item.content" />
		</div>
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
