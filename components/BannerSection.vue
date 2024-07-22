<template>
	<div class="contact full-width">
		<div class="content">
			<p class="eyebrow">WE WELCOME YOU TO LEARN MORE ABOUT OUR PROCESS</p>
			<p class="title">We Are Always Happy to hear from you</p>
			<AppButton accent class="mx-auto">contact us</AppButton>
		</div>
		<img class="full-width" src="../assets/Graduate.png" />
	</div>
</template>

<script setup></script>
<style scoped>
	img {
		object-fit: cover;
		grid-column: 1/-1;
		grid-row: 1/-1;
		mix-blend-mode: luminosity;
		height: 100%;
		width: 100%;
	}

	.contact {
		position: relative;
		height: 450px;
		overflow: hidden;
		background-color: black;
		place-items: center;
	}

	.content {
		grid-row: 1/-1;
		grid-column: 1/-1;
		z-index: 1;
		color: white;
		text-align: center;
		font-family: 'Gilda Display';
		padding-inline: 1rem;
		display: grid;
		justify-items: center;
		gap: 1.5rem;
	}

	.eyebrow {
		font-size: var(--font-lg);
		font-family: 'Gilda Display';
	}

	.title {
		font-family: 'Gilda Display';
		font-size: var(--font-5xl);
		text-transform: uppercase;
		max-width: 25ch;
		line-height: 1em;
	}
</style>
