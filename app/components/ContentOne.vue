<script setup lang="ts">
type Item = {
	text: string
	url?: string
	content?: string
}

type Section = {
	title?: string
	content?: string
}

type El = {
	section: Section
}

defineProps<{
	title: string
	maincontent?: string
	image?: string
	showCTA?: boolean
	primaryCTA?: Item
	price?: string
	sections?: El[]
}>()
</script>

<template>
	<GridComponent element="section">
		<div>
			<SectionHeader :title :content="maincontent" :showCTA :primaryCTA :price />
			<div class="grid grid-cols-1 gap-10 md:gap-14 md:grid-cols-2">
				<article class="max-w-2xl  flex flex-col gap-10 mb:gap-14 px-0 md:px-6">
					<div class="flex flex-col gap-4" v-for="section in sections">
						<h3 v-if="section.section.title" class="font-gilda text-3xl leading-none text-zinc-950 max-md:max-w-full">
							{{ section.section.title }}
						</h3>
						<AppDivider  />
						<AppContent v-if="section.section.content" :content="section.section.content" />
					</div>
				</article>
				<aside role="complementary" aria-label="Additional content"
					class="overflow-hidden relative h-[560px] md:h-auto">
					<NuxtImg :src="image" fit="cover"
						class="w-full h-[115%] object-cover absolute top-0 left-0 bottom-0 right-0 max-w-full" />
				</aside>
			</div>
		</div>
	</GridComponent>
</template>

<style scoped>
div h3:not(:first-child) {
	margin-top: 2rem;
}
</style>
