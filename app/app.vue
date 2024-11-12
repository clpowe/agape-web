<script setup lang="ts">
	useServerHead({
		htmlAttrs: {
			lang: 'en'
		},
		bodyAttrs: {
			class: 'font-helvetica antialiased'
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
	:root {
		--_hue: 25.71;
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

		--border: 1px solid oklch(var(--txt));
	}

	.builder-blocks {
		gap: 10rem;
	}
</style>
