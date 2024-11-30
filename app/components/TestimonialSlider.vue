<script setup>
import emblaCarouselVue from 'embla-carousel-vue'

const [emblaRef] = emblaCarouselVue({ loop: true, dragFree: true })


import { fetchEntries } from "@builder.io/sdk-vue";

const config = useRuntimeConfig();

const { data } = await useAsyncData(
  "testimonials",
  () =>
    fetchEntries({
      model: "testimonials",
      apiKey: config.public.builderApiKey,
    }),
  {
    transform: (data) => {
      const res = [];
      if (!data) return;
      for (const item of data) {
        res.push({ text: item.data?.name, content: item.data?.testimonial });
      }

      return res;
    },
  },
);


</script>

<template>
  <GridComponent element="section">
    <div>
      <SectionHeader title="Student Testimonials" />
      <div class="embla" ref="emblaRef">
        <div class="embla__container">
          <div class="embla__slide" v-for="item in data" :key="item.text">
            <AppTestimonial :item />
          </div>
        </div>
      </div>
    </div>
  </GridComponent>
</template>

<style scoped>
.embla {
  overflow: hidden;
}

.embla__container {
  display: flex;
  gap: 1rem;
}

.embla__slide {
  flex: 0 0 auto;
  min-width: 0;
  margin-left: 1rem;
}
</style>
