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


const carouselRef = useTemplateRef("carouselRef");

function next() {
  carouselRef.value?.next();
}

function prev() {
  carouselRef.value?.prev();
}


const sliderConfig = {
  itemsToShow: 1,
  wrapAround: true,
  transition: 500,
  breakpointMode: 'viewport',
  breakpoints: {
    400: {
      itemsToShow: 1,
    },
    600: {
      itemsToShow: 2,
    },
    1000: {
      itemsToShow: 3,
    }
  }
};
</script>

<template>
  <GridComponent element="section">
    <div>
      <div class="flex justify-between gap-4 items-center flex-wrap w-full">
        <AppTypography tag="h2" variant="heading">Testimonials</AppTypography>
        <div class="flex gap-4">
          <AppButton @click="next" class="swiper-button-next">next</AppButton>
          <AppButton @click="prev" class="swiper-button-prev">prev</AppButton>
        </div>
      </div>

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
  padding: 2rem;
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
  opacity: .5;
  transform: rotateY(-10deg) scale(0.90);
}

.carousel__slide.carousel__slide--next {
  opacity: .5;
  transform: rotateY(10deg) scale(0.90);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.2);
}
</style>
