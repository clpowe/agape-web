<template>
	<GridComponent element="header" class="bg-white">
		<div class="flex items-center p-2">
			<NuxtLink to="/" class="flex items-center gap-2">
				<AgapeLogoDark class="h-12" />
				<span class="max-w-36 text-base text-balance leading-tight font-gilda">
					Agape Christian Bar Prep
				</span>
			</NuxtLink>

			<nav class="ml-auto hidden md:block">
				<ul class="flex gap-4">
					<li v-for="link in data.data.links" :key="link.text">
						<NuxtLink :to="link.url" class="uppercase text-sm">{{
							link.text
						}}</NuxtLink>
					</li>
				</ul>
			</nav>
			<Sheet v-model:open="open">
				<SheetTrigger as-child class="block ml-auto md:hidden">
					<Button variant="ghost" size="icon">
						<HamburgerMenuIcon class="w-4 h-4" />
					</Button>
				</SheetTrigger>
				<SheetContent side="top">
					<SheetTitle hidden>Navigation</SheetTitle>

					<nav class="mt-6">
						<ul class="flex flex-col gap-4">
							<li v-for="link in data.data.links" :key="link.text">
								<NuxtLink
									:to="link.url"
									class="uppercase text-2xl font-black"
									>{{ link.text }}</NuxtLink
								>
							</li>
						</ul>
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	</GridComponent>
</template>

<script setup lang="ts">
	import { fetchOneEntry } from '@builder.io/sdk-vue'
	import GridComponent from './GridComponent.vue'
	import { HamburgerMenuIcon } from '@radix-icons/vue'

	const open = ref(false)
	const config = useRuntimeConfig()

	const { data } = await useAsyncData('nav-links', () =>
		fetchOneEntry({
			model: 'navigation-links',
			apiKey: config.public.builderApiKey
		})
	)
</script>
