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
			<SectionHeader
				:title
				:content="maincontent"
				:showCTA
				:primaryCTA
				:price
			/>
			<section
				class="grid md:grid-cols-2 px-4 md:px-6 py-12 gap-8 md:gap-8 rounded-2xl"
			>
				<article
					class="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full"
				>
					<div
						class="flex flex-col w-full max-md:max-w-full"
						v-for="section in sections"
					>
						<h2
							v-if="section.section.title"
							class="text-2xl leading-none text-zinc-950 max-md:max-w-full"
						>
							{{ section.section.title }}
						</h2>
						<AppDivider />
						<AppContent
							v-if="section.section.content"
							:content="section.section.content"
						/>
					</div>
				</article>
				<aside role="complementary" aria-label="Additional content">
					<NuxtImg
						:src="image"
						fit="cover"
						class="w-full h-full object-cover col-span-full row-span-full"
					/>
				</aside>
			</section>
		</div>
	</GridComponent>
</template>
