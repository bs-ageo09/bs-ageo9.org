// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    // backend(GAS)は clasp による別管理のため、frontend の lint 対象から除外する
    // （Phase 4 で backend 専用の lint を別途整備する）
    ignores: ['backend/**'],
  },
  {
    rules: {
      // ルート/単機能のページコンポーネントは単語1つの命名を許容する
      'vue/multi-word-component-names': 'off',
      // 日本語テキスト中の全角スペースを許容する
      'no-irregular-whitespace': 'off',
    },
  },
)
