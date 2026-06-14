# bs-ageo9.org
![frontend-ci](https://github.com/bs-ageo09/bs-ageo9.org/actions/workflows/frontend-ci.yml/badge.svg?branch=master)
![backend-prod](https://github.com/bs-ageo09/bs-ageo9.org/actions/workflows/backend-prod.yml/badge.svg?branch=master)

website of 9th Ageo Group, Saitama Scout Council, SAJ

## frontend

Nuxt 3（SPA）+ Cloudflare Pages。

バックエンド（GAS）へは CORS を回避するため、同一オリジンのサーバープロキシ
`server/api/backend`（Cloudflare Pages Functions として動作）経由でアクセスする。
データは実行時に取得するため、スプレッドシートの更新が再ビルドなしで反映される。

```bash
# 依存インストール
$ npm i

# 開発サーバ（http://localhost:3000）
$ npm run dev

# ビルド（Cloudflare Pages 向け。dist/ に _worker.js を含む成果物を出力）
$ npm run generate

# lint / 型チェック / 整形
$ npm run lint
$ npm run typecheck
$ npm run format
```

バックエンド接続先は `.env.development` / `.env.production` の `BACKEND_API` で設定する。
デプロイ環境（dev/prod）は Cloudflare が自動設定する `CF_PAGES_BRANCH` で判定し、
master 以外のプレビューは dev バックエンドを参照する（`APP_ENV` で明示上書きも可能）。

## backend

Google Apps Script + TypeScript + clasp（v3）。

clasp v3 は TypeScript を自動トランスパイルしないため、esbuild で GAS 互換の JS に
バンドル（`backend/` → `dist-gas/`）してから push する。`doGet` などのエントリポイントは
バンドル時に `globalThis` へ公開している。

```bash
# バンドル
$ npm run build:backend

# 型チェック / lint（ソースに対して実行）
$ npm run typecheck:backend
$ npm run lint:backend

# 手動デプロイする場合
$ npm i -g @google/clasp
$ clasp login
$ npm run build:backend
$ clasp push   # .clasp.json の rootDir は ./dist-gas
```

デプロイは GitHub Actions が自動実行する（`backend-dev.yml` = PR で dev、
`backend-prod.yml` = master push で prod）。
