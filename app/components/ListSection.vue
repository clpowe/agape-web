<template>
	<GridComponent element="section">
		<div>
			<SectionHeader :title :content :showCTA :primaryCTA :price />

			<div>
				<ul class="grid-list px-0 md:px-6">
					<ListLinkItem v-for="{ item } in list" :item="item">
						<NuxtLink :to="item.url" class="text-balance hover:text-brand-500">
							<h3 class="text-2xl font-gilda">
								{{ item.text }}
							</h3>
							<AppDivider />
							<AppContent v-if="item.content" :content="item.content" />
						</NuxtLink>
					</ListLinkItem>
				</ul>
			</div>
		</div>
	</GridComponent>
</template>

<script setup lang="ts">
	type Item = {
		text: string
		url?: string
		content?: string
	}

	type Items = {
		item: Item
	}

	const props = defineProps<{
		title: string
		content?: string
		showCTA?: boolean
		primaryCTA?: Item
		price: string
		list: Items[]
	}>()
</script>

<style scoped>
	.grid-list {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}

	@media (min-width: 768px) {
		.grid-list {
			grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		}
	}
</style>
