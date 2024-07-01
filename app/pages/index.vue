<template>
	<main class="content-grid">
		<MainHero class="full-width" />
		<ContentSection
			pretext="The Agape Way"
			title="How Our Program Is Different"
			text="Agape Christian Bar Prep helps students prepare for success on the bar
				exam and law school exams through personalized services that offer a
				holistic approach to exam preparation. Our tutoring programs are
				uniquely designed to meet the individual spiritual, mental, emotional
				and academic needs of students while simultaneously empowering them to
				conquer the bar exam and achieve their dreams of becoming attorneys."
			class="breakout"
		>
			<a href="">Learn more about Agape</a>
		</ContentSection>

		<section class="full-width">
			<ul
				><li
					><h3>Law School</h3>
					<p
						>Agape Christian Bar Prep partners with law schools to help prepare
						their students for success in law school and on the bar exam.</p
					></li
				>
				<a href="">learn more about our law school program</a>
				<li
					><h3>Bar Prep</h3>
					<p
						>Agape Christian Bar Prep helps law graduates prepare to pass the
						bar exam.</p
					></li
				>
				<a href="">learn more about our bar prep program</a>
				<li
					><h3>Law School Prep</h3>
					<p
						>Agape Christian Bar Prep helps law students prepare for success in
						law school.</p
					></li
				>
				<a href="">learn more about our law school prep</a>
			</ul>
		</section>
	</main>
</template>

<script setup>
	useHead({
		title: 'Agape Christian Bar Prep'
	})

	const heroEl = ref(null)

	import image from '../assets/HomeHero.png'
</script>

<style scoped>
	img {
		width: 100%;
		height: 100%;
	}

	.hero {
		display: grid;
	}
</style>
