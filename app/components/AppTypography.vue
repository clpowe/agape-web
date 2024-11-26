<script setup lang="ts">
type Variant =
	| 'heading'
	| 'heading-large'
	| 'heading-medium'
	| 'heading-small'
	| 'text'
	| 'heading-variable-large'
	| 'heading-variable'

const props = defineProps<{
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
	variant: Variant
}>()

const VARIANT_CLASSES: Record<Variant, string> = {
	heading: 'heading',
	'heading-variable': 'heading-variable',
	'heading-large': 'heading-large',
	'heading-medium': 'heading-medium',
	'heading-small': 'heading-small',
	'heading-variable-large': 'heading-variable-large',
	text: 'text'
}

const variantClass = computed(() => {
	return VARIANT_CLASSES[props.variant]
})
</script>
<template>
	<component :is="tag" :class="variantClass">
		<slot />
	</component>
</template>

<style scoped>
.heading-variable-large {
	@apply text-h1clamp leading-none font-crimson text-balance font-light;
}

.heading-variable {
	@apply text-h2clamp leading-none font-crimson text-balance font-light;
}

.heading-small {
	@apply text-xl md:text-3xl font-crimson text-balance leading-tight font-light;
}

.heading {
	@apply text-5xl font-crimson text-balance leading-tight font-light;
}


.heading-medium {
	@apply text-3xl md:text-3xl font-crimson text-balance leading-tight font-light;
}

.heading-large {
	@apply text-4xl md:text-6xl font-crimson text-balance leading-tight font-light;
}

.text {
	@apply text-base;
}
</style>
