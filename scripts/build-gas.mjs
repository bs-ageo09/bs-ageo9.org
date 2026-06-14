import { build } from 'esbuild'
import { mkdirSync, copyFileSync } from 'node:fs'

/*
** backend(GAS) の TypeScript を GAS 互換の JS にバンドルする。
** clasp v3 は TS の自動トランスパイルを廃止したため、push 前にこのスクリプトで
** dist-gas/ へバンドルする（.clasp.json の rootDir は ./dist-gas）。
** doGet などのエントリポイントは handler.ts 側で globalThis に公開しており、
** IIFE 実行時にグローバル登録されるため GAS から呼び出せる。
*/
const outdir = 'dist-gas'
mkdirSync(outdir, { recursive: true })

await build({
  entryPoints: ['backend/handler.ts'],
  bundle: true,
  format: 'iife',
  target: 'es2019',
  platform: 'neutral',
  outfile: `${outdir}/main.js`,
  sourcemap: false,
  legalComments: 'none',
})

copyFileSync('backend/appsscript.json', `${outdir}/appsscript.json`)

console.log(`GAS bundle built -> ${outdir}/main.js`)
