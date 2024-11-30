<template>
	<div class="divider"> </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.divider {
	@apply flex relative items-center my-0 h-2 whitespace-nowrap;
}

.divider:before {
	content: '';
	@apply absolute block top-1/2 left-0 w-full border-t border-solid border-black;
}
</style>
