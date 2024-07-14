<template>
	<MainNav class="full-width content-grid" />
	<slot />
	<footer>
		<p>©Agape Christian Bar Prep {{ new Date().getFullYear() }}</p>
	</footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
