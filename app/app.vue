<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style>
	:root {
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

	*,
	* > * {
		margin: 0;
		box-sizing: border-box;
	}

	html {
		scrollbar-gutter: stable;
	}

	body {
		margin: 0;
		padding: 0;
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
