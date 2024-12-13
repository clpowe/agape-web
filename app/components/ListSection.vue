<template>
  <GridComponent element="section">
    <div>
      <SectionHeader :title :content :showCTA :primaryCTA :price />

      <div>
        <ul class="grid-list px-0 md:px-6">
          <component
            :is="type == 'list' ? ListLinkItem : LinkItem"
            v-for="{ item } in list"
            :item="item"
          >
            <NuxtLink :to="item.url" class="text-balance hover:text-brand-500">
              <h3 class="text-2xl font-gilda">
                {{ item.text }}
              </h3>
              <AppDivider />
              <AppContent v-if="item.content" :content="item.content" />
            </NuxtLink>
          </component>
        </ul>
      </div>
    </div>
  </GridComponent>
</template>

<script setup lang="ts">
import ListLinkItem from "./ListLinkItem.vue";
import LinkItem from "./LinkItem.vue";

type Item = {
  text: string;
  url?: string;
  content?: string;
  image?: string;
};

type Type = "list" | "link";

type Items = {
  item: Item;
};

const { type = "list" } = defineProps<{
  title: string;
  content?: string;
  showCTA?: boolean;
  primaryCTA?: Item;
  price: string;
  type: Type;
  list: Items[];
}>();
</script>

<style scoped>
.grid-list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

@media (min-width: 768px) {
  .grid-list {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
}
</style>
