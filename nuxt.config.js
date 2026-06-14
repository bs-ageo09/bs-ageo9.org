export default defineNuxtConfig({
  /*
  ** Headers of the page
  */
  app: {
    head: {
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: process.env.npm_package_description || '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  /*
  ** Nuxt modules
  */
  modules: [
    '@nuxt/eslint',
  ],
  /*
  ** Runtime config
  ** public.backendApi は環境変数 NUXT_PUBLIC_BACKEND_API で上書きする
  ** （.env.development / .env.production を各 npm script の --dotenv で読み込む）
  */
  runtimeConfig: {
    public: {
      backendApi: '',
    },
  },
})
