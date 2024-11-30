<template>
	<div class="parent">
		<AppHeader />
		<slot />
		<AppFooter />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.parent {
	@apply bg-[#fffbf8];
	grid-template-rows: auto 1fr auto;
}
</style>
