<script setup lang="ts">
	import image from '../assets/HomeHero.png'
	const menubarheight = ref()
</script>

<template>
	<MainNav v-model="menubarheight" />

	<section class="hero">
		<div class="content">
			<p>Welcome to </p>
			<h1>Agape Christian Bar Prep</h1>
			<p>Personalized service with proven results</p>
			<a href="">discover more</a>
		</div>
		<div class="image">
			<img alt="Home Hero" height="100" :src="image" />
		</div>
	</section>
</template>

<style scoped>
	.hero {
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		place-content: center;
		justify-items: center;
		height: 800px;
		overflow: hidden;
		margin-top: v-bind((menubarheight * -1)+ 'px');

		.content {
			grid-column: 1/-1;
			text-align: center;
			display: grid;
			flex-direction: column;
			grid-row: 1/-1;
			width: 100%;
			content: center;
			color: white;
			justify-content: center;

			h1 {
				font-family: 'Gilda Display';
				text-transform: uppercase;
				font-size: var(--font-5xl);
				max-width: 18ch;
				font-weight: 400;
			}
		}

		.image {
			object-fit: cover;
			grid-column: 1/-1;
			grid-row: 1/-1;
			z-index: -1;
			overflow: hidden;

			img {
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>
