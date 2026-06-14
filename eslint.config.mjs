// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      // ルート/単機能のページコンポーネントは単語1つの命名を許容する
      'vue/multi-word-component-names': 'off',
      // 日本語テキスト中の全角スペースを許容する
      'no-irregular-whitespace': 'off',
    },
  },
  {
    // backend(GAS) は spreadsheet 由来の動的データや GAS のグローバル/
    // エントリポイントを扱うため、専用のルールを適用する
    files: ['backend/**/*.ts'],
    languageOptions: {
      globals: {
        SpreadsheetApp: 'readonly',
        ContentService: 'readonly',
        Logger: 'readonly',
      },
    },
    rules: {
      // GAS のシートデータは動的なため any を許容する
      '@typescript-eslint/no-explicit-any': 'off',
      // doGet / doPost は GAS ランタイムが呼び出すエントリポイント
      '@typescript-eslint/no-unused-vars': ['error', {
        varsIgnorePattern: '^(doGet|doPost|doPut)$',
        argsIgnorePattern: '^_',
      }],
    },
  },
)
