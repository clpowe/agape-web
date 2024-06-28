<script setup lang="ts">
	import image from '../assets/HomeHero.png'
</script>

<template>
	<header>
		<MainNav />
	</header>
	<section class="hero">
		<div class="content">
			<p>Welcome to </p>
			<h1
				>Agape Christian<br />
				<span>Bar Prep</span></h1
			>
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
		align-items: center;
		justify-items: center;
		height: 800px;
		overflow: hidden;

		.content {
			grid-column: 1/-1;
			text-align: center;
			grid-row: 1/-1;
			width: max-content;
			color: white;

			h1 {
				font-family: 'Gilda Display';
				text-transform: uppercase;
				font-size: var(--font-5xl);
				font-weight: 400;
			}
		}

		.image {
			object-fit: cover;
			grid-column: 1/-1;
			grid-row: 1/-1;
			z-index: -1;

			img {
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>
