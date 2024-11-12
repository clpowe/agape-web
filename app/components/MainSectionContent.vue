<template>
	<div>
		<AppTypography tag="h2" :variant="text">
			{{ title }}
		</AppTypography>
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

	const props = defineProps<{
		title: string
		showCTA?: boolean
		primaryCTA?: Link
		lgText?: boolean
	}>()

	const text = computed(() => (props.lgText ? 'heading' : 'heading-large'))
</script>

<style scoped></style>
