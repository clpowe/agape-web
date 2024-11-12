<script setup lang="ts">
	type Item = {
		text: string
		url?: string
		content?: string
	}

	type Items = {
		item: Item
	}

	defineProps<{
		title: string
		content?: string
		showCTA?: boolean
		primaryCTA?: Item
		price?: string
	}>()
</script>

<template>
	<div
		class="grid md:grid-cols-2 px-4 md:px-6 py-12 gap-8 md:gap-8 rounded-2xl"
	>
		<div>
			<AppTypography tag="h2" variant="heading">{{ title }}</AppTypography>
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
</template>
