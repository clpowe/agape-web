<template>
	<div class="min-h-screen flex flex-col bg-[#fffbf8]">
		<AppHeader />
		<main class="flex-grow">
			<slot />
		</main>
		<AppFooter />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* The flex-col and flex-grow classes ensure footer stays at bottom */
</style>
