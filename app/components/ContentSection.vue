<template>
	<section>
		<div class="vertical-line"></div>
		<div>
			<h2>
				<template v-if="pretext">
					<span>{{ pretext }}</span
					><br />
				</template>
				{{ title }}
			</h2>
			<p>{{ text }}</p>
		</div>
		<slot />
	</section>
</template>

<script setup lang="ts">
	defineProps<{
		pretext: string
		title: string
		text: string
	}>()
</script>

<style scoped>
	section {
		display: grid;
		align-items: left;
		justify-items: left;
		text-align: left;
		max-width: 85ch;
		margin: auto;
		gap: 1.5rem;
		padding-block: 2rem;
	}

	h2 {
		max-inline-size: 20ch;
		text-wrap: balance;
		margin-bottom: 1rem;
		margin-inline: 0;
	}

	p {
		text-align: left;
		max-width: 60ch;
	}

	@media (min-width: 768px) {
		section {
			text-align: center;
			justify-items: center;
		}

		h2 {
			margin-inline: auto;
		}
	}
</style>
