<template>
  <li :key="item.text" class="bg-customBG px-6 py-8">
    <div
      w
      v-if="item.url"
      :to="item.url"
      class="text-balance flex flex-col h-full justify-between items-start"
    >
      <div class="mt-auto">
        <Icon name="ph:books-thin" class="w-10 h-10 mb-10" />
        <div class="mb-8">
          <AppTypography tag="h3" variant="heading-medium" class="mb-4">
            {{ item.text }}
          </AppTypography>
          <AppContent v-if="item.content" :content="item.content" />
        </div>
      </div>
      <AppButton
        variant="link"
        class="mt-auto p-0 text-base"
        v-if="item.url"
        :to="item.url"
        >Learn More
        <Icon name="ph:arrow-circle-up-right-light" class="w-8 h-8" />
      </AppButton>
    </div>

    <div v-else class="text-balance">
      <h3 class="text-2xl font-gilda">
        {{ item.text }}
      </h3>
      <AppDivider />
      <AppContent v-if="item.content" :content="item.content" />
    </div>
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

<style scoped></style>
