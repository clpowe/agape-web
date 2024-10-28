<template>
	<div id="home">
		<div element="main" v-if="content || isPreviewing()">
			<Content
				model="page"
				:content="content"
				:api-key="BUILDER_PUBLIC_API_KEY"
				:customComponents="REGISTERED_COMPONENTS"
			/>
		</div>
		<div v-else>Content not Found</div>
		<CarouselSlider />
	</div>
</template>

<script setup lang="ts">
	import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-vue'

	import HeroBanner from '@/components/HeroBanner.vue'
	import BannerTypeOne from '@/components/BannerTypeOne.vue'
	import ListSection from '@/components/ListSection.vue'
	import BreakoutBanner from '@/components/BreakoutBanner.vue'
	import TestimonialSlider from '../components/TestimonialSlider.vue'

	// Register your Builder components
	const REGISTERED_COMPONENTS = [
		{
			component: HeroBanner,
			name: 'Hero Banner',
			inputs: [
				{
					name: 'title',
					type: 'string'
				},
				{
					name: 'content',
					type: 'richText'
				},
				{
					name: 'image',
					type: 'file',
					allowedFileTypes: ['jpg', 'png', 'gif', 'svg']
				},
				{
					name: 'showCTA',
					type: 'boolean'
				},
				{
					name: 'primaryCTA',
					type: 'object',
					subFields: [
						{
							name: 'text',
							type: 'string'
						},
						{
							name: 'url',
							type: 'string'
						}
					]
				},
				{
					name: 'secondaryCTA',
					type: 'object',
					subFields: [
						{
							name: 'text',
							type: 'string'
						},
						{
							name: 'url',
							type: 'string'
						}
					]
				}
			]
		},
		{
			component: BannerTypeOne,
			name: 'Banner Type one',
			inputs: [
				{
					name: 'title',
					type: 'string'
				},
				{
					name: 'subtitle',
					type: 'string'
				},
				{
					name: 'content',
					type: 'richText'
				},
				{
					name: 'showCTA',
					type: 'boolean'
				},
				{
					name: 'primaryCTA',
					type: 'object',
					subFields: [
						{
							name: 'text',
							type: 'string'
						},
						{
							name: 'url',
							type: 'string'
						}
					]
				}
			]
		},
		{
			component: BreakoutBanner,
			name: 'Breakout Banner',
			inputs: [
				{
					name: 'title',
					type: 'string'
				},
				{
					name: 'showCTA',
					type: 'boolean'
				},
				{
					name: 'primaryCTA',
					type: 'object',
					subFields: [
						{
							name: 'text',
							type: 'string'
						},
						{
							name: 'url',
							type: 'string'
						}
					]
				},
				{
					name: 'image',
					type: 'file',
					allowedFileTypes: ['jpg', 'png', 'gif', 'svg']
				}
			]
		},
		{
			component: ListSection,
			name: 'List Section',
			inputs: [
				{
					name: 'title',
					type: 'string'
				},
				{
					name: 'content',
					type: 'richText'
				},
				{
					name: 'showCTA',
					type: 'boolean'
				},
				{
					name: 'price',
					type: 'text'
				},
				{
					name: 'primaryCTA',
					type: 'object',
					subFields: [
						{
							name: 'text',
							type: 'string'
						},
						{
							name: 'url',
							type: 'string'
						}
					]
				},
				{
					name: 'list',
					type: 'list',
					subFields: [
						{
							name: 'item',
							type: 'object',
							subFields: [
								{
									name: 'text',
									type: 'string'
								},
								{
									name: 'content',
									type: 'string'
								},
								{
									name: 'url',
									type: 'string'
								}
							]
						}
					]
				}
			]
		},
		{
			component: TestimonialSlider,
			name: 'Testimonial Slider'
		}
	]

	const config = useRuntimeConfig()
	// TODO: enter your public API key
	const BUILDER_PUBLIC_API_KEY = config.public.builderApiKey // ggignore

	const route = useRoute()

	// fetch builder content data
	const { data: content } = await useAsyncData('builderData', () =>
		fetchOneEntry({
			model: 'page',
			apiKey: BUILDER_PUBLIC_API_KEY,
			userAttributes: {
				urlPath: route.path
			}
		})
	)

	const title = computed(() => {
		return content.value?.name
	})

	useSeoMeta({
		title: title.value
	})
</script>
