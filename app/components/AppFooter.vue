<script setup lang="ts">
import { fetchOneEntry } from '@builder.io/sdk-vue'

const open = ref(false)
const config = useRuntimeConfig()

const { data } = await useAsyncData('nav-links', () =>
	fetchOneEntry({
		model: 'navigation-links',
		apiKey: config.public.builderApiKey
	})
)
</script>

<template>
	<GridComponent element="footer" class="bg-customBG py-16">
		<div class="footer-continer">
			<div class="footer-section">
				<AppTypography tag="h3" variant="text" class="">
					Quick Links
				</AppTypography>
				<AppDivider />
				<ul>
					<li v-for="link in data?.data?.links" :key="link.text">
						<NuxtLink :to="link.url" class="capitalize text-sm">{{
							link.text
						}}</NuxtLink>
					</li>
				</ul>
			</div>
			<div class="footer-section">
				<AppTypography tag="h3" variant="text" class="">
					Services
				</AppTypography>
				<AppDivider />
				<ul>
					<li v-for="link in data?.data?.links" :key="link.text">
						<NuxtLink :to="link.url" class="capitalize text-sm">{{
							link.text
						}}</NuxtLink>
					</li>
				</ul>
			</div>
			<div class="footer-section address">
				<AppTypography tag="h3" variant="text" class="">
					Contact
				</AppTypography>
				<AppDivider />
				<address>
					<AppTypography tag="p" variant="text" class="">
						<span class="font-bold">Christopher Powe</span><br />
						<span>123 Main St.</span><br />
						<span>San Francisco, CA 94102</span><br />
						<span>Phone: 123-456-7890</span><br />
						<a href="mailto:webmaster@example.com">Email: christopher@example.com</a>
					</AppTypography>
				</address>
			</div>
			<p class="legal">©Agape Christian Bar Prep {{ new Date().getFullYear() }}</p>
		</div>
	</GridComponent>
</template>

<style scoped>
.footer-continer {
	display: grid;
	gap: 2rem;
}

.address {
	grid-column: 1/-1;
}

.legal {
	grid-column: 1/-1;
}

@media (min-width: 468px) {
	.footer-continer {
		grid-template-columns: repeat(2, 1fr);
	}

	.address {
		grid-column: span 2;
	}
}

@media (min-width: 868px) {
	.footer-continer {
		grid-template-columns: repeat(3, 1fr);
	}

	.address {
		grid-column: span 1;
	}
}

.footer-section {
	@apply flex flex-col gap-2;

	ul {
		@apply flex flex-col gap-2;
	}
}
</style>
