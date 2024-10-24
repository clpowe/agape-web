<script setup lang="ts">
	const props = defineProps<{
		element: string
	}>()
</script>

<template>
	<component :is="element" class="content-grid">
		<slot />
	</component>
</template>

<style>
	.content-grid {
		--padding-inline: 1rem;
		--content-max-width: 1700px;
		--breakout-max-width: 1900px;

		--breakout-size: calc(
			(var(--breakout-max-width) - var(--content-max-width)) / 2
		);

		row-gap: 10rem;

		display: grid;
		grid-template-columns:
			[full-width-start] minmax(var(--padding-inline), 1fr)
			[breakout-start] minmax(0, var(--breakout-size))
			[content-start] min(
				100% - (var(--padding-inline) * 2),
				var(--content-max-width)
			)
			[content-end]
			minmax(0, var(--breakout-size)) [breakout-end]
			minmax(var(--padding-inline), 1fr) [full-width-end];
	}

	.content-grid > :not(.breakout, .full-width),
	.full-width > :not(.breakout, .full-width) {
		grid-column: content;
	}

	.content-grid > .breakout {
		grid-column: breakout;
	}

	.content-grid > .full-width {
		grid-column: full-width;

		display: grid;
		grid-template-columns: inherit;
	}
</style>
