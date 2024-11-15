<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

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

function next() {
  //swiperEL.value.slideNext();
}
</script>

<template>
  <GridComponent element="section">
    <div>
      <div>
        <AppTypography tag="h2" variant="heading">Testimonials</AppTypography>
      </div>
      <AppButton @click="next" class="swiper-button-next">next</AppButton>
      <ClientOnly>
        <carousel ref="swiperEl" :items-to-show="1.5">
          <slide v-for="item in data" :key="item.text">
            <AppTestimonial :item :key="item.text" />
          </slide>
        </carousel>
      </ClientOnly>
    </div>
  </GridComponent>
</template>

<style></style>
