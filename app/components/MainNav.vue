<template>
	<nav>
		<ul role="menubar">
			<li role="none"><NuxtLink role="menuitem" to="/">Home</NuxtLink></li>
			<li role="none"
				><NuxtLink role="menuitem" to="/about">About</NuxtLink></li
			>
			<li role="none" class="logo"><AgapeLogo /> </li>
			<li role="none"
				><NuxtLink role="menuitem" to="/contact">Contact</NuxtLink></li
			>
			<li role="none"
				><NuxtLink role="menuitem" to="/services">Services</NuxtLink></li
			>
		</ul>
	</nav>
</template>

<script setup lang="ts">
	import AgapeLogo from './AgapeLogo.vue'
</script>

<style>
	ul {
		list-style-type: none;
		display: flex;
		width: max-content;
		margin-inline: auto;
		align-items: center;
		gap: 3rem;
	}
	.logo {
		justify-self: center;
	}
</style>
