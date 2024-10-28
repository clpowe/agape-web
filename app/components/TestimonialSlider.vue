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

	console.log(data.value)
</script>

<template>
	<GridComponent element="section">
		<div>
			<div>
				<h2 class="header2"> Testimonials </h2>
			</div>

			<swiper
				:slides-per-view="3"
				:space-between="50"
				@swiper="onSwiper"
				@slideChange="onSlideChange"
			>
				<swiper-slide v-for="item in data">
					<ListLinkItem :item="item"></ListLinkItem>
				</swiper-slide>
			</swiper>
		</div>
	</GridComponent>
</template>
