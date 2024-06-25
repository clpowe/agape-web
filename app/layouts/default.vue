<template>
	<header>
		<nav>
			<div class="logo">Logo</div>
			<ul>
				<li><NuxtLink to="/">Home</NuxtLink></li>
				<li><NuxtLink to="/about">About</NuxtLink></li>
				<li><NuxtLink to="/contact">Contact</NuxtLink></li>
				<li><NuxtLink to="/services">Services</NuxtLink></li>
			</ul>
		</nav>
	</header>
	<slot />
	<footer>
		<p>©Agape Christian Bar Prep {{ new Date().getFullYear() }}</p>
	</footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
