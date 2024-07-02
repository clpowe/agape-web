<script setup lang="ts">
	import image from '../assets/HomeHero.png'

	const menubarheight = inject('menubarheight')
</script>

<template>
	<section class="hero">
		<div class="content">
			<div class="vertical-line light"></div>
			<p>Welcome to </p>
			<h1>Agape Christian Bar Prep</h1>
			<p>Personalized service with proven results</p>
		</div>
		<a href="">discover more</a>
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
			color: white;
			gap: 1.5rem;

			justify-items: center;
			font-family: 'Gilda Display';

			h1 {
				text-transform: uppercase;
				font-size: 4rem;
				line-height: 90%;
				max-width: 18ch;
			}
		}
		a {
			grid-column: 1/-1;
			grid-row: 1/-1;
			margin-top: auto;
			color: white;
			text-transform: uppercase;
			text-decoration: none;
			margin-bottom: 3rem;
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
