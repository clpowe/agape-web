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
	}

	h2 {
		font-family: 'Gilda Display';
		font-weight: 400;
		text-transform: uppercase;
		font-size: clamp(2.5rem, 1px + 10vw, 3rem);
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
