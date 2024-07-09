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
			<a link="/about">Learn more about Agape</a>
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
					<a :ghost="true" href="/">about our law school program</a>
				</li>
				<li>
					<SvgoIconCertificate class="icon" />
					<h3>Bar Prep</h3>
					<p
						>Agape Christian Bar Prep helps law graduates prepare to pass the
						bar exam.</p
					>
					<a ghost="true" href="/"> about our bar prep program </a>
				</li>
				<li>
					<SvgoIconBook class="icon" />
					<h3>Law School Prep</h3>
					<p
						>Agape Christian Bar Prep helps law students prepare for success in
						law school.</p
					>
					<a href="/">about our law school prep </a>
				</li>
			</ListContainer>
		</ContentSection>

		<ContentSection
			pretext="The Agape Way"
			title="Our Services"
			text="Agape Christian Bar Prep offers many services to help students prepare for success in law school and on the bar exam. Our services are customized to clearly identify and meet the individual needs of law graduates and law students."
			class="breakout"
		>
			<ul class="list">
				<li>Florida Bar Exam</li>
				<li>Uniform Bar Exam</li>
				<li>Multistate Bar Exam</li>
				<li>Writing Courses</li>
				<li>Consultations</li>
				<li>Law School Exam Prep</li>
				<li>Early Bar Exam Prep</li>
				<li>Tutoring Services</li>
			</ul>
		</ContentSection>

		<BannerSection />
	</main>
</template>

<script setup>
	useHead({
		title: 'Agape Christian Bar Prep'
	})

	const heroEl = ref(null)
</script>

<style scoped>
	.hero {
		display: grid;
	}

	.icon {
		color: oklch(var(--accent));
		font-size: 5rem;
	}

	.list {
		display: grid;
		gap: 1rem;
		list-style: none;
		width: 100%;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

		li {
			background-color: oklch(var(--accent));
			text-align: center;
			color: white;
			padding: 0.25em 0.5em;
			border-radius: 99999em;
		}
	}
</style>
