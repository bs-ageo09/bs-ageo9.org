import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

/*
** デプロイ環境の判定
** Cloudflare Pages は build command を Preview/Production で分けられず、
** さらに nuxi build/generate は NODE_ENV を production へ強制変更するため、
** NODE_ENV だけではプレビュービルドを判別できない。
** Cloudflare Pages が自動設定する CF_PAGES_BRANCH でデプロイ先を判定する。
**   1. APP_ENV: 明示指定の最優先（ローカル検証用オーバーライド）
**   2. CF_PAGES_BRANCH が本番ブランチ(master)以外 → development（プレビューデプロイ）
**   3. それ以外（ローカル）は NODE_ENV を見て最終的に production へフォールバック
*/
function resolveAppEnv() {
  if (process.env.APP_ENV) return process.env.APP_ENV
  const cfBranch = process.env.CF_PAGES_BRANCH
  if (cfBranch && cfBranch !== 'master') return 'development'
  return process.env.NODE_ENV === 'development' ? 'development' : 'production'
}

/*
** backendApi の解決
** 運用側で NUXT_PUBLIC_BACKEND_API が明示指定されていれば最優先で使用し、
** なければ判定した環境に対応する .env.<env> の BACKEND_API を読み込む。
** ※ .env.<env> のキーは敢えて NUXT_PUBLIC_ プレフィックスを付けない。
**   将来 Nuxt が .env.<envName> を自動読込するようになっても、Nuxt 標準の
**   NUXT_PUBLIC_* 自動オーバーライドと衝突して resolveAppEnv() の判定が
**   バイパスされるのを防ぐため。
*/
function loadBackendApi() {
  if (process.env.NUXT_PUBLIC_BACKEND_API) return process.env.NUXT_PUBLIC_BACKEND_API
  try {
    const file = resolve(process.cwd(), `.env.${resolveAppEnv()}`)
    const content = readFileSync(file, 'utf-8')
    const match = content.match(/^\s*BACKEND_API\s*=\s*(.*)\s*$/m)
    return match ? match[1].trim().replace(/^['"]|['"]$/g, '') : ''
  } catch {
    return ''
  }
}

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
  ** public.backendApi は環境変数 NUXT_PUBLIC_BACKEND_API で上書き可能
  */
  runtimeConfig: {
    public: {
      backendApi: loadBackendApi(),
    },
  },
})
