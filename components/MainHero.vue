<script setup lang="ts">
	import image from '../assets/HomeHero.png'
</script>

<template>
	<section class="hero">
		<div class="content">
			<div class="vertical-line light mt-auto"></div>
			<p class="eyebrow">Welcome to </p>
			<h1>Agape Christian Bar Prep</h1>
			<p>Personalized service with proven results</p>

			<a href="">discover more</a>
		</div>
		<div class="img-holder">
			<NuxtImg alt="Home Hero" src="/HomeHero.png" />
		</div>
	</section>
</template>

<style scoped>
	.mt-auto {
		margin-top: auto;
	}
	.hero {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		align-items: center;
		place-content: center;
		justify-items: center;
		height: 100dvh;
		min-height: 570px;
		max-height: 900px;
		overflow: hidden;
		margin-top: -96px;

		.content {
			grid-column: 1 / -1;
			grid-row: 1 / -1;
			text-align: center;
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			color: white;
			gap: 1.5rem;
			justify-items: center;
			font-family: 'Gilda Display';
			align-items: center;
			align-content: center;
			z-index: 1;

			.eyebrow {
				font-family: 'Gilda Display';
				text-transform: uppercase;
				font-size: 1.5rem;
			}

			h1 {
				text-transform: uppercase;
				font-size: clamp(3rem, calc(0.1rem + 15vw), 4rem);
				line-height: 90%;
				max-width: 18ch;
			}
		}
		a {
			margin-top: auto;
			margin-bottom: 2rem;
			color: white;
			text-transform: uppercase;
			text-decoration: none;
		}

		.img-holder {
			grid-column: 1/-1;
			grid-row: 1/-1;
			width: 100%;
			height: 100%;
			overflow: hidden;
		}

		img {
			height: 100%;
			width: 100%;
			grid-column: 1/-1;
			grid-row: 1/-1;
			object-fit: cover;
		}
	}
</style>
