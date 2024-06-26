<script setup lang="ts">
	import image from '../assets/HomeHero.png'
</script>

<template>
	<header>
		<MainNav />
	</header>
	<section class="Hero">
		<h1>Welcome to Agape Christian Bar Prep</h1>
		<p>Personalized service with proven results</p>
		<a href="">discover more</a>
		<img alt="Home Hero" height="100" :src="image" />
	</section>
</template>

<style scoped>
	img {
		width: 100%;
		height: 100%;
	}
</style>
