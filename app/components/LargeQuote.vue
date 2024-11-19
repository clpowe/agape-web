<template>
	<GridComponent v-once element="section">
		<div class="px-6 md:px-12 py-14 " :class="colorClass">
			<AppTypography tag="h2" variant="heading-variable" class="mb-12 md:mb-24">{{ quote }}</AppTypography>
			<AppDivider />
			<AppTypography tag="p" variant="text">{{ subtitle }}</AppTypography>
		</div>
	</GridComponent>
</template>

<script setup lang="ts">
type Color = 'blue' | 'green' | 'yellow' | 'purple' | 'pink'

const COLOR_CLASSES: Record<Color, string> = {
	blue: 'bg-aBlue',
	green: 'bg-aGreen',
	yellow: 'bg-aYellow',
	purple: 'bg-aPurple',
	pink: 'bg-aPink'
}


const { color = 'blue' } = defineProps<{
	quote: string
	subtitle: string
	color?: Color
}>()

const colorClass = computed(() => {
	return COLOR_CLASSES[color]
})
</script>

<style scoped></style>
