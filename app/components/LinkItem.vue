<template>
  <li class="subgrid bg-customBG min-h-96 relative grid">
    <NuxtImg v-if="item.image" :src="item.image" class="w-full col-start-1 col-end-2 row-start-1 z-1" />
    <NuxtLink v-if="item.url" :to="item.url"
      class="text-balance p-6 text-white z-2 grid h-full items-start justify-end col-start-1 col-end-2 row-start-1 content-end">
      <div class="z-2">
        <AppTypography tag="h3" variant="heading-medium" class="z-2">
          {{ item.text }}
        </AppTypography>
        <AppDivider color="white" class="w-full py-3 z-2" />
        <AppContent v-if="item.content" :content="item.content" />
      </div>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
type Item = {
  text: string;
  url?: string;
  content?: string;
  image?: string;
};

const props = defineProps<{
  item: Item;
}>();
</script>

<style></style>
