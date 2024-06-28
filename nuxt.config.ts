// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				devtools: { enabled: true },
				future: {
								compatibilityVersion: 4
				},
				modules: [
				 '@nuxt/test-utils/module',
				 '@nuxt/fonts',
				 '@nuxt/image',
				 '@vueuse/nuxt'
				],
				app: {
								head: {
												charset: 'utf-8',
												viewport: 'width=device-width, initial-scale=1'
								}
				},
				image: {
								provider: 'ipx'
				}
})