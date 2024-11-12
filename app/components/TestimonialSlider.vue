<script setup lang="ts">
	import { fetchEntries } from '@builder.io/sdk-vue'
	import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue'

	// Import Swiper styles
	import 'swiper/css'

	const onSwiper = (swiper: any) => {
		console.log(swiper)
	}
	const onSlideChange = () => {
		console.log('slide change')
	}

	const config = useRuntimeConfig()

	const { data } = await useAsyncData(
		'testimonials',
		() =>
			fetchEntries({
				model: 'testimonials',
				apiKey: config.public.builderApiKey
			}),
		{
			transform: (data) => {
				const res = []
				if (!data) return
				for (const item of data) {
					res.push({ text: item.data?.name, content: item.data?.testimonial })
				}

				return res
			}
		}
	)
</script>

<template>
	<GridComponent element="section">
		<div>
			<div>
				<AppTypography tag="h2" variant="heading">Testimonials</AppTypography>
			</div>

			<swiper
				:slides-per-view="1"
				:breakpoints="{
					640: {
						slidesPerView: 2
					},
					1024: {
						slidesPerView: 3
					}
				}"
				,
				:space-between="50"
				@swiper="onSwiper"
				@slideChange="onSlideChange"
				:centered-slides="true"
				:loop="true"
			>
				<swiper-slide
					v-for="item in data"
					v-slot="{ isActive, isPrev, isNext }"
				>
					<AppTestimonial :item />
				</swiper-slide>
			</swiper>
		</div>
	</GridComponent>
</template>

<style>
	.swiper-slide-active {
		transition: transform 0.5s ease-in-out;
	}
	.swiper-slide-prev,
	.swiper-slide-next {
		transform: scale(0.8);
	}
</style>
