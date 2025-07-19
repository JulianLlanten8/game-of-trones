import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'

export default [
  // 🧹 Ignorar carpetas generadas
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'coverage/**',
      'playwright-report/**',
      '.vite/**',
      'test-results/**'
    ]
  },

  // 🧠 Reglas JS básicas (solo si usas archivos .js)
  js.configs.recommended,

  // 🧠 Reglas TypeScript
  ...tseslint.configs.recommended,

  // 🎨 Reglas Vue 3
  ...pluginVue.configs['flat/recommended'],

  // 🌍 Config global de entorno y lenguaje
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },

  // 📦 Configuración específica para archivos Vue
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: pluginVue.parser,
      parserOptions: {
        parser: tseslint.parser
      }
    },
    rules: {
      // 🔕 Desactivar reglas que entran en conflicto con Prettier
      'vue/html-indent': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/first-attribute-linebreak': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-self-closing': 'off',
      'vue/html-closing-bracket-newline': 'off'
    }
  },

  // 📏 Reglas personalizadas
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    rules: {
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/component-name-in-template-casing': ['error', 'PascalCase']
    }
  },

  // ✨ Integración con Prettier
  {
    plugins: {
      prettier
    },
    rules: {
      'prettier/prettier': 'warn'
    }
  },

  // 🧪 Entorno para tests
  {
    files: ['**/*.{test,spec}.{js,ts,vue}', 'e2e/**/*.{js,ts}'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly'
      }
    }
  }
]
