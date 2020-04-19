export default {
  mode: 'universal',
  env: {
    baseUrl: process.env.BASE_URL || 'https://localhost:3000'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/main.scss'],
  styleResources: {
    scss: [
      '~/assets/scss/vars/*.scss',
      '~/node_modules/bootstrap/scss/_functions.scss',
      '~/node_modules/bootstrap/scss/_variables.scss',
      '~/node_modules/bootstrap/scss/_mixins.scss',
      '~/node_modules/bootstrap/scss/_utilities.scss'
    ]
  },
  webfontloader: {
    google: {
      families: ['Lato:400,700'] // Loads Lato font with weights 400 and 700
    }
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  googleAnalytics: {
    id: 'UA-12301-2' // CHANGE: change this
  },
  // Redirect options here
  redirect: [
    // { from: '^/myoldurl/(.*)$', to: '/comeallhere' }, // Many urls to one
    // { from: '^/anotherold/(.*)$', to: '/new/$1' } // One to one mapping
  ],
  prismic: {
    endpoint: 'https://nuxt-boilerplate-lopermo.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer'
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/analytics-module
    '@nuxtjs/google-analytics',
    // Doc: https://github.com/aceforth/nuxt-optimized-images
    '@aceforth/nuxt-optimized-images',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',
    // Doc: https://github.com/Developmint/nuxt-purgecss
    'nuxt-purgecss',
    // Doc: https://github.com/nuxt-community/redirect-module
    '@nuxtjs/redirect-module',
    // Doc: https://prismic.io/docs/vuejs/getting-started/prismic-nuxt
    '@nuxtjs/prismic',
    // Doc: https://github.com/nuxt-community/nuxt-i18n
    [
      'nuxt-i18n',
      {
        parsePages: false, // Required
        rootRedirect: 'en',
        baseUrl: 'https://localhost:3000',
        strategy: 'prefix_and_default',
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            prismic: 'en-gb',
            name: 'English',
            file: 'en.js'
          },
          {
            code: 'pl',
            iso: 'pl-PL',
            prismic: 'pl',
            name: 'Polski',
            file: 'pl.js'
          },
          {
            code: 'es',
            iso: 'es-ES',
            prismic: 'es-es',
            name: 'Español',
            file: 'es.js'
          }
        ],
        defaultLocale: 'en',
        lazy: true,
        seo: false,
        langDir: 'lang/',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'language_cookie'
        }
      }
    ],
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://example.com',
    gzip: true,
    exclude: ['/']
  },
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true // Optimize in debug mode
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Doc: https://github.com/oliverfindl/vue-svg-inline-loader
      config.module.rules.push({
        test: /\.vue$/,
        loader: 'vue-svg-inline-loader', // in your project
        options: {
          /* ... */
        }
      })

      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1kB
          name: 'img/[name].[hash:7].[ext]'
        }
      })
      config.resolve.alias.vue = 'vue/dist/vue.common'
    }
  }
}
