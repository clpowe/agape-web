<template>
	<NuxtLink
		v-if="link"
		:to="link"
		class="btn"
		:class="{ 'btn--secondary': secondary }"
		><slot></slot
	></NuxtLink>
	<button
		v-else
		class="btn"
		:aria-expanded="expanded ? expanded : 'false'"
		:class="{
			'btn--secondary': secondary,
			'btn--ghost': ghost,
			'btn--accent': accent
		}"
		@click="$emit('event')"
		><slot></slot
	></button>
</template>

<script setup lang="ts">
	defineProps<{
		link?: string
		secondary?: boolean
		ghost?: boolean
		expanded?: boolean
		accent?: boolean
	}>()
</script>

<style scoped>
	.btn {
		--bgClr: var(--txt);

		font-size: var(--font-s);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5em;
		background-color: oklch(var(--bgClr));
		color: oklch(var(--bg));
		text-decoration: none;
		padding: 0.4em 1.4em;
		width: max-content;
		border-radius: 0.2em;
		text-transform: uppercase;
		border-radius: 50rem;
		transition: background-color var(--_transitionSpeed) var(--_easing);
	}
	.btn--accent {
		--bgClr: var(--accent);
	}
	.btn--secondary {
		--bgClr: var(--secondary);
	}

	.btn--ghost {
		box-shadow: none;
		background-color: oklch(var(--bg) / 0.1);
		color: oklch(var(--bg));
	}

	.dark {
		color: oklch(var(--txt--light));
	}

	.btn :where(svg, img) {
		width: var(--font-s);
	}

	.btn :where(svg, img, span) {
		pointer-events: none;
	}

	.btn:where(:hover, :active) {
		background-color: oklch(var(--bgClr) / 0.8);
	}

	.btn--ghost:where(:hover, :active) {
		box-shadow: none;
		background-color: oklch(var(--bgClr) / 0.4);
	}

	.btn:focus-visible {
		outline: 0.2em solid oklch(var(--accent));
		outline-offset: 0.2em;
	}
</style>
