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
			<AppButton link="/about">Learn more about Agape</AppButton>
		</ContentSection>

		<ContentSection
			title="Our Programs"
			text="At Agape Christian, we focus on you. We offer programs that meet your goals and needs."
		>
			<ListContainer>
				<li>
					<SvgoIconGraduationhat class="icon" />
					<h3>Law School</h3>
					<p
						>Agape Christian Bar Prep partners with law schools to help prepare
						their students for success in law school and on the bar exam.</p
					>
					<AppButton link="/">about our law school program</AppButton>
				</li>
				<li>
					<SvgoIconCertificate class="icon" />
					<h3>Bar Prep</h3>
					<p
						>Agape Christian Bar Prep helps law graduates prepare to pass the
						bar exam.</p
					>
					<AppButton link="/"> about our bar prep program </AppButton>
				</li>
				<li>
					<SvgoIconBook class="icon" />
					<h3>Law School Prep</h3>
					<p
						>Agape Christian Bar Prep helps law students prepare for success in
						law school.</p
					>
					<AppButton link="/">about our law school prep </AppButton>
				</li>
			</ListContainer>
		</ContentSection>
	</main>
</template>

<script setup>
	import IconLawSchool from '~/assets/icons/icon-lawschool.svg'
	useHead({
		title: 'Agape Christian Bar Prep'
	})

	const heroEl = ref(null)
</script>

<style scoped>
	img {
		width: 100%;
		height: 100%;
	}

	.hero {
		display: grid;
	}

	.icon {
		color: oklch(var(--accent));
		font-size: 5rem;
	}
</style>
