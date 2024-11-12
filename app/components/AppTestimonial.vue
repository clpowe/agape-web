<template>
	<div class="flex h-auto">
		<div class="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
			<div class="flex-auto p-4 md:p-6">
				<p
					class="text-base italic md:text-lg text-gray-800 dark:text-neutral-200"
				>
					<AppContent v-if="item.content" :content="item.content" />
				</p>
			</div>

			<AppDivider />
			<div class="p-4 rounded-b-xl md:px-7 dark:bg-neutral-800">
				<div class="flex items-center gap-x-3">
					<div class="grow">
						<p
							class="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200"
						>
							{{ item.text }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	type Item = {
		text: string
		url?: string
		content?: string
	}

	defineProps<{
		item: Item
	}>()
</script>

<style scoped></style>
