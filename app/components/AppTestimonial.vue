<script setup lang="ts">
type Item = {
  text: string;
  url?: string;
  content?: string;
};

const id = useId();

defineProps<{
  item: Item;
}>();
</script>

<template>
  <div class="flex h-full ">
    <div class="flex flex-col bg-customBG p-4 dark:bg-neutral-900">
      <div class="p-4 rounded-b-xl md:px-7 dark:bg-neutral-800">
        <div class="flex text-left gap-x-3">
          <div class="grow">
            <AppTypography tag="p" variant="heading-small">
              {{ item.text }}
            </AppTypography>
          </div>
        </div>
      </div>
      <AppDivider class="mx-6" />
      <div class="flex-auto p-4 md:p-6">
        <AppTypography tag="p" variant="text" class="max-w-xs font-xs text-left text-gray-800">
          {{ item.content }}
        </AppTypography>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
