<template>
	<div>
		<h2 class="header2" :class="{ 'header2-lg': lgText }">
			{{ title }}
		</h2>
		<div v-if="showCTA" class="flex gap-2">
			<AppButton as-child>
				<NuxtLink v-if="primaryCTA?.text" :to="primaryCTA.url"
					>{{ primaryCTA.text }}
				</NuxtLink>
			</AppButton>
		</div>
	</div>
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
		lgText?: boolean
	}>()
</script>

<style scoped></style>
