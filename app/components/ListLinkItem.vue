<template>
  <li :key="item.text" class="bg-zinc-100 px-6 py-8 h-72">
    <div
      v-if="item.url"
      :to="item.url"
      class="text-balance flex flex-col justify-between h-full"
    >
      <Icon name="ph:books-thin" class="w-10 h-10" />
      <div>
        <AppTypography tag="h3" variant="heading-small" class="mb-2">
          {{ item.text }}
        </AppTypography>
        <AppContent v-if="item.content" :content="item.content" />
      </div>

      <AppButton
        variant="link"
        class="self-start p-0 text-base flex gap-2"
        v-if="item.url"
        :to="item.url"
        >Learn More <Icon name="ph:arrow-circle-up-right-light" class="w-8 h-8"
      /></AppButton>
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
