<script setup lang="ts">
	type Link = {
		text: string
		url: string
	}

	const props = defineProps<{
		title: string
		image?: string
		content?: string
		showCTA?: boolean
		primaryCTA?: Link
		secondaryCTA?: Link
	}>()
</script>

<template>
	<GridComponent element="section">
		<div
			class="grid h-screen max-h-[800px] grid-rows-2 md:grid-rows-1 md:grid-cols-2 overflow-clip"
		>
			<div class="mt-auto grid gap-3 md:gap-6 p-4 md:p-8">
				<h1
					class="text-h1clamp leading-none font-gilda capitalize text-balance"
				>
					{{ title }}
				</h1>

				<AppContent :content="content" />

				<div v-if="showCTA" class="flex gap-2">
					<Button as-child>
						<NuxtLink v-if="primaryCTA.text" :to="primaryCTA.url"
							>{{ primaryCTA.text }}
						</NuxtLink>
					</Button>
					<Button variant="outline" as-child>
						<NuxtLink v-if="secondaryCTA.text" :to="secondaryCTA.url"
							>{{ secondaryCTA.text }}
						</NuxtLink>
					</Button>
				</div>
			</div>
			<div class="grid grid-cols-3 grid-rows-3">
				<div
					class="row-end-4 col-start-1 z-10 w-[250px] h-auto bg-amber-300 p-4 self-end"
				>
					<p class="text-2xl font-gilda leading-none">
						Join us for team Prayer
					</p>
					<Button as-child>
						<NuxtLink to="team-prayer">Team Prayer</NuxtLink>
					</Button>
				</div>
				<NuxtImg
					:src="image"
					fit="cover"
					class="w-full h-full object-cover col-span-full row-span-full"
				/>
			</div>
		</div>
	</GridComponent>
</template>
