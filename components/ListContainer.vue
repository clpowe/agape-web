<template>
	<ul class="list-container">
		<slot />
	</ul>
</template>

<script setup lang="ts"></script>

<style scoped>
	.list-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		list-style: none;
		gap: 1.5rem;
	}
</style>
