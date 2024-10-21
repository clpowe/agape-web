<template>
	<GridComponent element="section">
		<div>
			<div
				class="grid md:grid-cols-2 px-4 md:px-6 py-12 gap-8 md:gap-8 rounded-2xl"
			>
				<div>
					<h2 class="header2">{{ title }}</h2>
					<AppContent :content="content" />
				</div>
				<div
					v-if="showCTA"
					class="self-start place-self-start md:self-end md:place-self-end"
				>
					<Button as-child v-if="primaryCTA">
						<NuxtLink v-if="primaryCTA.text" :to="primaryCTA.url"
							>{{ primaryCTA.text }}
						</NuxtLink>
					</Button>
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
							<AppContent :content="item.content" />
						</NuxtLink>
					</ListLinkItem>
				</ul>
			</div>
		</div>
	</GridComponent>
</template>

<script setup lang="ts">
	type Items = {
		text: string
		url?: string
		content?: string
	}

	const props = defineProps<{
		title: string
		content?: string
		showCTA?: boolean
		primaryCTA?: Link
		price: string
		list: Items[]
	}>()
</script>

<style scoped></style>
