<template>
	<GridComponent element="header" class="bg-[#fffbf8] border-b border-solid border-customBG sticky top-0 z-10">
		<div class="flex items-center p-2 py-4 ">
			<NuxtLink to="/" class="flex items-center gap-2">
				<AgapeLogoDark class="h-12" />
				<AppTypography tag="p" :variant="'heading-small'">
					Agape Christian Bar Prep
				</AppTypography>
			</NuxtLink>

			<nav class="ml-auto hidden md:block">
				<ul class="flex gap-4">
					<li v-for="link in data?.data?.links" :key="link.text">
						<NuxtLink :to="link.url" class="uppercase text-sm">{{
							link.text
						}}</NuxtLink>
					</li>
				</ul>
			</nav>
			<AppSheet v-model:open="open">
				<AppSheetTrigger as-child class="block ml-auto md:hidden">
					<AppButton variant="ghost" size="icon">
						<HamburgerMenuIcon class="w-4 h-4" />
					</AppButton>
				</AppSheetTrigger>
				<AppSheetContent side="top">
					<AppSheetTitle hidden>Navigation</AppSheetTitle>

					<nav class="mt-6">
						<ul class="flex flex-col gap-4">
							<li v-for="link in data?.data?.links" :key="link.text">
								<NuxtLink :to="link.url" class="uppercase text-2xl font-black">{{ link.text }}</NuxtLink>
							</li>
						</ul>
					</nav>
				</AppSheetContent>
			</AppSheet>
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
