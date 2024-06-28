<template>
	<nav class="main-nav">
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
	.main-nav {
		position: fixed;
		width: 100%;
		background-color: hsla(0, 0%, 100%, 0);
		animation-timeline: view();
		animation-name: addBg;

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

			svg {
				width: 60px;
				animation-timeline: view();
				animation-name: shrink;
			}
		}

		a {
			text-decoration: none;
			color: white;
			text-transform: uppercase;
			font-family: 'Inter';
			font-size: 0.75rem;
		}
	}

	@keyframes addBg {
		to {
			background-color: hsla(0, 0%, 100%, 1);
			opacity: 0.5;
		}
	}

	@keyframes shrink {
		to {
			width: 90px;
		}
	}
</style>
