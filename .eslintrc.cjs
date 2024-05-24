module.exports = {
  env: {
    browser: true,
    es2021: true,
    node:true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    tsconfigRootDir: __dirname,
    project: ['tsconfig.json'],
    extraFileExtensions: ['.vue'],
    ecmaVersion: 2021,
    sourceType: "module"
  },
  plugins: [
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "no-unused-vars": "off",
  }
}
