/*
 * @Description: 
 * @Author: hyx
 * @Date: 2022-08-10 14:33:26
 */

module.exports = {
  root: true,
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false
  },
  extends: ["alloy", "alloy/react", "alloy/typescript"],
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@typescript-eslint/no-require-imports': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/member-ordering': 0,
    'no-param-reassign': 0,
  },
}
