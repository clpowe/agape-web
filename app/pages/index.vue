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
				<li v-for="program in programs">
					<ListItem v-bind="program" />
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

	const programs = [
		{
			icon: 'SvgoIconCourt',
			title: 'Law School',
			text: 'Agape Christian Bar Prep partners with law schools to help prepare their students for success in law school and on the bar exam.',
			href: '/'
		},
		{
			icon: 'SvgoIconBarlaw',
			title: 'Bar Prep',
			text: 'Agape Christian Bar Prep helps law graduates prepare to pass the bar exam.',
			href: '/'
		},
		{
			icon: 'SvgoIconSchoolpreplaw',
			title: 'Law School Prep',
			text: 'Agape Christian Bar Prep helps law students prepare for success in law school.',
			href: '/'
		}
	]
</script>

<style scoped>
	.hero {
		display: grid;
	}

	.list {
		display: grid;
		gap: 1rem;
		list-style: none;
		width: 100%;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}
</style>
