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
		:class="{ 'btn--secondary': secondary, 'btn--ghost': ghost }"
		@click="$emit('event')"
		><slot></slot
	></button>
</template>

<script setup lang="ts">
	defineProps<{ link?: string; secondary?: boolean; ghost?: boolean }>()
</script>

<style scoped>
	.btn {
		font-size: var(--font-s);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5em;
		background-color: oklch(var(--accent));
		color: oklch(var(--bg));
		text-decoration: none;
		padding: 0.4em 1.4em;
		border-radius: 0.2em;
		text-transform: uppercase;
		box-shadow:
			0.05em 0.1em 0.9em oklch(var(--accent) / 0.3),
			0 0 0 -0.1em oklch(var(--bg)),
			0 0 0 -0.2em oklch(var(--accent));
		transition:
			box-shadow var(--_transitionSpeed) var(--_easing),
			background-color var(--_transitionSpeed) var(--_easing);
	}

	.btn--secondary {
		--accent: var(--secondary);
	}

	.btn--ghost {
		box-shadow: none;
		background-color: transparent;
		color: oklch(var(--bg));
	}

	.btn :where(svg, img) {
		width: var(--font-s);
	}

	.btn :where(svg, img, span) {
		pointer-events: none;
	}

	.btn:where(:hover, :active) {
		background-color: oklch(var(--accent) / 0.8);
		box-shadow:
			0 0 0 oklch(var(--accent) / 0.3),
			0 0 0 -0.1em oklch(var(--bg)),
			0 0 0 -0.2em oklch(var(--accent));
	}

	.btn:focus-visible,
	.btn:focus {
		outline: 0.2em solid oklch(var(--accent));
		outline-offset: 0.2em;
		box-shadow: 0 0 0 oklch(var(--accent) / 0.3);
	}
</style>
