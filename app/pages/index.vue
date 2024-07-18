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

		<div class="breakout twoCol">
			<ContentSection
				pretext="The Agape Way"
				title="Our Services"
				text="Agape Christian Bar Prep offers many services to help students prepare for success in law school and on the bar exam. Our services are customized to clearly identify and meet the individual needs of law graduates and law students."
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
			<div class="imageSection">
				<NuxtImg
					src="../assets/two-multiracial-women-working-together-at-cowokri-2023-11-27-05-03-38-utc.JPG"
					alt=""
					class="img-1"
				/>
				<NuxtImg
					src="../assets/young-attractive-students-spending-time-in-library-2023-11-27-04-49-20-utc.jpg"
					alt=""
					class="img-2"
				/>
				<NuxtImg
					src="../assets/working-hard-for-a-bright-future-2024-04-30-20-11-51-utc.jpg"
					alt=""
					class="img-3"
				/>
			</div>
		</div>

		<BannerSection />
		<ContentSection pretext="Learning first" title="Student Testimonials">
			<MasonaryGrid />
		</ContentSection>
	</main>
</template>

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

	.imageSection {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);

		img {
			max-width: 100%;
			height: 100%;
			width: 100%;
			object-fit: cover;
			border: 1rem solid oklch(var(--bg));
		}

		.img-1 {
			grid-column: 1 / 4;
			grid-row: 1 / 4;
		}
		.img-2 {
			grid-column: 3 / 5;
			grid-row: 2 / 4;
		}
		.img-3 {
			grid-column: 2 / 4;
			grid-row: 3 / 5;
		}
	}

	.twoCol {
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr;
	}

	@media (min-width: 768px) {
		.twoCol {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
