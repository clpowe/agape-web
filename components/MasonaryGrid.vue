<script setup>
	const testimonials = [
		{
			id: 1,
			name: 'Justin Bell',
			testimonial:
				'Agape is the reason I passed the bar exam. Not only did the Agape family provide amazing resources and strategies that equipped me with the knowledge to conquer the bar exam, but Agape also provided me with the confidence by incorporating additional exercises and sessions that prepared mentally, spiritually and physically. The Agape family not only made me a better bar taker- they made me a better Attorney.'
		},
		{
			id: 2,
			name: 'Dana Ahmad',
			testimonial: `If you are looking for a customized, detail-oriented, and truly personalized bar prep experience, look no further! Agape offers customized schedules to fit YOUR needs, amazing weekly writing workshops, multiple choice workshops, lectures, and best of all personal time with your own private tutor. They are also available by text, phone, email at ALL times. The Agape team is not only there for you academically, but are truly emotionally invested in your journey to pass the bar exam. I am happy to say that I now have a life-long friend and mentor in Tishia. Tishia’s positive attitude, support, and encouragement was the best gift I could have received during bar prep.`
		},

		{
			id: 3,
			name: 'Ashley Palmer',
			testimonial:
				'Agape has truly been a blessing to me! I learned so much from my tutors. The one-on-one sessions that I had with my tutor not only helped me with the bar exam but with my spiritual growth as well. I am so happy that I was a part of the group for the February 2022 bar exam. Now I can say that I am one and done!'
		},
		{
			id: 4,
			name: 'Tiffany Young',
			testimonial:
				'Beyond Grateful for the Agape Christian Bar Preparation Program, the Agape Christian Bar Preparation Staff, and the Agape Christian Bar Preparation Support Family!! This Review alone is not enough to express my gratitude!! Not only was I able to receive the necessary skills and knowledge to achieve passing results on my bar exam, but most importantly I was able to reclaim my relationship with GOD!!'
		},
		{
			id: 5,
			name: 'Nico Castiello',
			testimonial:
				' The Agape process and guidance is unmatched, and I will gladly recommend Agape to anyone who wants to put the bar exam behind them. As a repeat taker, Agape is the blessing that I needed in my life to put the bar behind me while also gaining back my confidence in myself.'
		},
		{
			id: 6,
			name: 'Luis Banzer',
			testimonial:
				'Agape provided the tools I needed to pass the bar exam. Their coaches and tutors, in addition to the personalized bar study program are the best. Tisha I can’t thank you enough!!!!'
		},
		{
			id: 8,
			name: 'Christa Chanpak',
			testimonial: `You're not a customer at Agape.  You're a person with goals and dreams and Agape gets on your team to help you succeed.  Agape personalizes a plan for your success.  And Agape will change that plan if it's not working.  Agape is not bar prep.  Agape is all about you.  Preparing you for the Bar exactly the way you need to be prepared.  The Bar is an exam like no other.  It's not just about knowing the material.  It's about applying the material and showing up to do the work.  Agape tutors are invested in their students and teach them how to truly understand and apply the material.  Agape has experts in each subject area that you can contact at any time with any question.  If you want to pass the bar, hire Agape!`
		}
	]
</script>

<template>
	<div class="masonary-grid">
		<blockquote class="grid-item" v-for="{ testimonial, name } in testimonials">
			<p>{{ testimonial }}</p>
			<h4>{{ name }}</h4>
		</blockquote>
	</div>
</template>

<style>
	.masonary-grid {
		font-family:;
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.5rem;
	}

	.grid-item {
		text-align: left;
		padding: 1rem;
	}

	.grid-item > h4 {
		font-family: 'Gilda Display';
		font-size: var(--font-md);
	}

	.grid-item:nth-child(7n + 1) {
		grid-column: span 1;
	}

	.grid-item:nth-child(7n + 2) {
		grid-column: span 1;
	}

	.grid-item:nth-child(7n + 4) {
		grid-column: span 1;
	}

	.grid-item:nth-child(7n + 5) {
		grid-column: span 1;
	}

	@media (min-width: 768px) {
		.masonary-grid {
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		}
		.grid-item:nth-child(7n + 1) {
			grid-column: span 2;
			grid-row: span 1;
		}

		.grid-item:nth-child(7n + 2) {
			grid-column: span 1;
			grid-row: span 2;
		}

		.grid-item:nth-child(7n + 3) {
			grid-column: span 1;
		}

		.grid-item:nth-child(7n + 4) {
			grid-column: span 1;
			grid-row: span 2;
		}
		.grid-item:nth-child(7n + 7) {
			grid-column: span 3;
			grid-row: span 1;
		}
	}
</style>
