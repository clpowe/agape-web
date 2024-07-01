<template>
	<MainNav class="full-width content-grid" v-model="menubarheight" />
	<slot />
	<footer>
		<p>©Agape Christian Bar Prep {{ new Date().getFullYear() }}</p>
	</footer>
</template>

<script setup lang="ts">
	const menubarheight = ref()

	provide('menubarheight', menubarheight)
</script>

<style scoped></style>
