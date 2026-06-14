/*
** バックエンド(GAS)への同一オリジンプロキシ。
** ブラウザから script.google.com を直接叩くと CORS で失敗するため、
** サーバー(Cloudflare Pages Functions)経由で取得して返す。
** リクエスト都度 GAS を取得するため、スプレッドシート更新が即時反映される。
**
** GAS の応答(content-type が一定でない/302リダイレクトを挟む)を確実に通すため、
** レスポンス本文はテキストとしてそのまま中継する。
*/
export default defineEventHandler(async (event) => {
  const { gasApi } = useRuntimeConfig(event)
  if (!gasApi) {
    throw createError({ statusCode: 500, statusMessage: 'gasApi is not configured' })
  }

  const query = getQuery(event)
  const params = new URLSearchParams()
  if (query.type) params.set('type', String(query.type))
  if (query.key) params.set('key', String(query.key))

  let upstream: Response
  try {
    upstream = await fetch(`${gasApi}?${params.toString()}`, {
      redirect: 'follow',
      headers: { accept: 'application/json' },
    })
  } catch (e) {
    throw createError({ statusCode: 502, statusMessage: `failed to reach backend: ${String(e)}` })
  }

  const body = await upstream.text()
  setResponseHeaders(event, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  })
  return body
})
