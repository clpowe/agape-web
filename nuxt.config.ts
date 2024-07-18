// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4
	},
	ssr: false,
	postcss: {
		plugins: {
			cssnano: {},
			autoprefixer: {}
		}
	},
	modules: [
		'@nuxt/test-utils/module',
		'@nuxt/fonts',
		'@nuxt/image',
		'@vueuse/nuxt',
		'nuxt-svgo'
	],
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1'
		}
	},
	svgo: {
		autoImportPath: '~/assets/icons'
	}
})