// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@stylistic/indent': 'off',
    'indent': 'off',
    'vue/script-indent': 'off',
    'vue/html-indent': 'off'
  }
})
