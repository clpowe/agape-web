<template>
	<GridComponent element="section">
		<div>
			<div
				class="grid md:grid-cols-2 px-4 md:px-6 py-12 gap-8 md:gap-8 rounded-2xl"
			>
				<div>
					<h2 class="header2">{{ title }}</h2>
					<AppContent v-if="content" :content="content" />
				</div>
				<div
					v-if="showCTA"
					class="self-start place-self-start md:self-end md:place-self-end"
				>
					<AppButton as-child v-if="primaryCTA">
						<NuxtLink v-if="primaryCTA.text" :to="primaryCTA.url"
							>{{ primaryCTA.text }}
						</NuxtLink>
					</AppButton>
					<div v-if="price">
						<p class="font-bold text-3xl text-right">{{ price }}</p>
					</div>
				</div>
			</div>
			<div>
				<ul class="grid-list px-4 md:px-6">
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

<style scoped></style>
