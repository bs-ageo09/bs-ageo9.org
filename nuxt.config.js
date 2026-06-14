
// `nuxi build`/`generate` は NODE_ENV を強制的に production へ書き換えるため、
// バックエンド切り替えには NODE_ENV ではなく APP_ENV を優先して参照する。
const appEnv = process.env.APP_ENV || process.env.NODE_ENV || 'production'
const envSet = require(`./env.${appEnv}.js`)

export default defineNuxtConfig({
  mode: 'universal',
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/eslint',
  ],
  /*
  ** Build configuration
  */
  buildModules: [
  ],
  runtimeConfig: {
    public: envSet,
  },
})
