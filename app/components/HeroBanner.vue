<script setup lang="ts">
type Link = {
  text: string;
  url: string;
};

defineProps<{
  title: string;
  image?: string;
  content?: string;
  showCTA?: boolean;
  primaryCTA?: Link;
  secondaryCTA?: Link;
}>();
</script>

<template>
  <GridComponent element="section">
    <div
      class="grid min-h-screen grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 overflow-clip"
    >
      <div
        class="grid gap-8 md:gap-10 py-20 md:py-22 lg:mb-16 self-center lg:self-end"
      >
        <div>
          <AppTypography
            tag="h1"
            variant="heading-variable-large"
            class="capitalize mb-4"
          >
            {{ title }}
          </AppTypography>

          <AppContent
            v-if="content"
            :content="content"
            class="text-lg max-w-md"
          />
        </div>

        <div v-if="showCTA" class="flex gap-2 flex-wrap">
          <AppButton as-child size="xl" class="w-full sm:w-auto">
            <NuxtLink v-if="primaryCTA?.text" :to="primaryCTA.url"
              >{{ primaryCTA.text }}
            </NuxtLink>
          </AppButton>
          <AppButton
            variant="outline"
            as-child
            size="xl"
            class="w-full sm:w-auto"
          >
            <NuxtLink v-if="secondaryCTA?.text" :to="secondaryCTA.url"
              >{{ secondaryCTA.text }}
            </NuxtLink>
          </AppButton>
        </div>
      </div>
      <div class="grid grid-cols-3 grid-rows-3">
        <!-- <div
					class="row-end-4 col-start-1 z-10 w-[250px] h-auto bg-amber-300 p-4 self-end"
				>
					<p class="text-2xl font-gilda leading-none">
						Join us for team Prayer
					</p>
					<AppButton as-child>
						<NuxtLink to="team-prayer">Team Prayer</NuxtLink>
					</AppButton>
				</div> -->
        <NuxtImg
          :src="image"
          fit="cover"
          class="w-full h-full object-cover col-span-full row-span-full"
        />
      </div>
    </div>
  </GridComponent>
</template>

<style scoped>
p {
  font-size: 21px;
}
</style>
