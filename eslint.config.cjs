const js = require("@eslint/js")
const reactPlugin = require("eslint-plugin-react")
const reactHooksPlugin = require("eslint-plugin-react-hooks")
const prettierPlugin = require("eslint-plugin-prettier")
const prettierConfig = require("eslint-config-prettier")
const globals = require("globals")
console.log("eslint!!!!!!!!!!!!!!!!!!!!!!!!")
module.exports = [
  js.configs.recommended,
  reactPlugin.configs.flat.recommended,
  prettierConfig,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "warn",
      "react/prop-types": "off",
      "no-unused-vars": "warn",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      // react-hooks recommended rules 직접 추가
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]
