<template>
	<GridComponent element="section">
		<div>
			<div
				class="grid md:grid-cols-2 px-4 md:px-6 py-12 bg-red-800 text-white gap-8 md:gap-8"
			>
				<div>
					<h2 class="header2">
						{{ title }}
					</h2>
					<div v-if="showCTA" class="flex gap-2">
						<AppButton as-child>
							<NuxtLink v-if="primaryCTA?.text" :to="primaryCTA.url"
								>{{ primaryCTA.text }}
							</NuxtLink>
						</AppButton>
					</div>
				</div>
				<div>
					<h3 class="text-4xl font-gilda text-balance mb-4">
						{{ subtitle }}
					</h3>
					<AppContent
						v-if="content"
						:content="content"
						class="text-balance text-white"
					/>
				</div>
			</div>
			<NuxtImg
				:src="image"
				class="w-full object-cover object-center w-full"
				alt="Banner image"
			/>
		</div>
	</GridComponent>
</template>

<script setup lang="ts">
	type Link = {
		text: string
		url: string
	}

	const props = defineProps<{
		title: string
		subtitle: string
		content?: string
		showCTA?: boolean
		primaryCTA?: Link
		image?: string
	}>()
</script>
