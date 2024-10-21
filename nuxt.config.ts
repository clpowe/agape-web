// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	postcss: {
		plugins: {
			cssnano: {},
			autoprefixer: {}
		}
	},
	runtimeConfig: {
		public: {
			builderApiKey: process.env.NUXT_PUBLIC_BUILDER_API_KEY
		}
	},
	modules: [
		'@nuxt/test-utils/module',
		'@nuxt/fonts',
		'@nuxt/image',
		'@vueuse/nuxt',
		'nuxt-svgo',
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@builder.io/sdk-vue/nuxt'
	],

	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1'
		}
	},

	svgo: {
		autoImportPath: '~/assets/icons'
	},

	image: {
		format: ['webp']
	},
	fonts: {
		experimental: {
			disableLocalFallbacks: false
		}
	},
	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: '',
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: './components/ui'
	},
	compatibilityDate: '2024-07-20'
})
