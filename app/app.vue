<script setup lang="ts">
	useHead({
		htmlAttrs: {
			lang: 'en'
		}
	})
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style>
	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	button {
		font: inherit;
		cursor: pointer;
		border: none;
	}

	.content-grid,
	.full-width {
		--padding-inline: 1rem;
		--content-max-width: 80ch;
		--breakout-max-width: 95ch;

		--breakout-size: calc(
			(var(--breakout-max-width) - var(--content-max-width)) / 2
		);

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
	}

	:root {
		--_hue: 24.64;
		--_easing: cubic-bezier(0.66, -0.2, 0.27, 1.15);
		--_transitonSpeed: 400ms;

		/* light */
		--bg--light: 96.12% 0 var(--_hue);
		--txt--light: 10.82% 0 var(--_hue);
		--accent--light: 41.66% 0.165 var(--_hue);
		--secondary--light: 30.59% 0.056 calc(var(--_hue) + 206.06);

		/* dark */
		--bg--dark: 10.82% 0 var(--_hue);
		--txt--dark: 96.12% 0 var(--_hue);
		--accent--dark: 41.66% 0.165 var(--_hue);
		--secondary--dark: 30.59% 0.056 calc(var(--_hue) + 206.06);

		/* defaults */
		--bg: var(--bg--light);
		--txt: var(--txt--light);
		--accent: var(--accent--light);
		--secondary: var(--secondary--light);
		color-scheme: light;

		--red: oklch(41.66% 0.165 26.64);
		--blue: oklch(30.59% 0.056 230.7);

		--font-xs: 0.64rem;
		--font-s: 0.833rem;
		--font-m: 1rem;
		--font-l: 1.2rem;
		--font-xl: 1.44rem;
		--font-2xl: 1.728rem;
		--font-3xl: 2.074rem;
		--font-4xl: 2.488rem;
		--font-5xl: 2.986rem;
	}

	/* @media (prefers-color-scheme: dark) {
		:root {
			--bg: var(--bg--dark);
			--txt: var(--txt--dark);
			--accent: var(--accent--dark);
			--secondary: var(--secondary--dark);
			color-scheme: dark;
		}
	} */

	@media (prefers-reduced-motion: reduced) {
		:root {
			--_transitionSpeed: 0ms;
		}
	}

	html {
		scrollbar-gutter: stable;
	}

	body {
		margin: 0;
		padding: 0;
		background-color: oklch(var(--bg));
		color: oklch(var(--txt));
		font-family: 'Inter';
	}

	h2 {
		font-family: 'Gilda Display';
		font-weight: 400;
		text-transform: uppercase;
		font-size: clamp(var(--font-4xl), 1px + 10vw, var(--font-5xl));
		line-height: 0.9em;
		margin: 0;

		span {
			color: var(--red);
			font-size: 1.5rem;
		}
	}

	p {
		font-family: 'Inter';
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.5em;
	}
</style>
