<script setup>
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

console.log(data);

const carouselRef = useTemplateRef("carouselRef");

function next() {
  carouselRef.value?.next();
}

function prev() {
  carouselRef.value?.prev();
}


const sliderConfig = {
  itemsToShow: 2.5,
  wrapAround: true,
  transition: 500,
};
</script>

<template>
  <GridComponent element="section">
    <div>
      <div>
        <AppTypography tag="h2" variant="heading">Testimonials</AppTypography>
      </div>
      <AppButton @click="next" class="swiper-button-next">next</AppButton>
      <AppButton @click="prev" class="swiper-button-prev">prev</AppButton>

      <Carousel ref="carouselRef" v-bind="sliderConfig">
        <Slide v-for="item in data" :key="item.text">
          <AppTestimonial class="carousel__item" :item />
        </Slide>
      </Carousel>
    </div>
  </GridComponent>
</template>

<style>
.carousel__slide {
  padding: 5;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}
</style>
