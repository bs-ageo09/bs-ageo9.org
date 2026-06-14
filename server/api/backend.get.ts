/*
** バックエンド(GAS)への同一オリジンプロキシ。
** ブラウザから script.google.com を直接叩くと CORS で失敗するため、
** サーバー(Cloudflare Pages Functions)経由で取得して返す。
** リクエスト都度 GAS を取得するため、スプレッドシート更新が即時反映される。
*/
export default defineEventHandler(async (event) => {
  const { gasApi } = useRuntimeConfig(event)
  if (!gasApi) {
    return null
  }

  const query = getQuery(event)
  const params = new URLSearchParams()
  if (query.type) params.set('type', String(query.type))
  if (query.key) params.set('key', String(query.key))

  try {
    return await $fetch(`${gasApi}?${params.toString()}`, { responseType: 'json' })
  } catch {
    return null
  }
})
