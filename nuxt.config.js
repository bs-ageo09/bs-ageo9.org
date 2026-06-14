
// Cloudflare Pages は build command を Preview/Production で分けられないため、
// デプロイ環境を環境変数で判定してバックエンドを切り替える。
// - APP_ENV: 明示指定の最優先（ローカル検証用）
// - CF_PAGES_BRANCH: Cloudflare Pages が自動設定するデプロイ元ブランチ。
//   本番ブランチ(master)以外のプレビューデプロイは development を使う。
// - それ以外（ローカル）は NODE_ENV を見て最終的に production へフォールバック。
//   なお nuxi build/generate は NODE_ENV を production へ強制変更する。
function resolveAppEnv() {
  if (process.env.APP_ENV) return process.env.APP_ENV
  const cfBranch = process.env.CF_PAGES_BRANCH
  if (cfBranch && cfBranch !== 'master') return 'development'
  return process.env.NODE_ENV === 'development' ? 'development' : 'production'
}
const envSet = require(`./env.${resolveAppEnv()}.js`)

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
