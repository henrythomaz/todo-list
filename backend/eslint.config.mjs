import eslintPluginJs from "@eslint/js";

export default [
  {
    ignores: ["node_modules/**"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },

    plugins: {
      js: eslintPluginJs
    },

    rules: {
      "semi": ["error", "always"],                   // Ponto e vírgula
      "quotes": ["error", "double"],                 // Aspas duplas
      "padding-line-between-statements": [           // Linha em branco entre funções
        "error",
        { blankLine: "always", prev: "function", next: "*" },
        { blankLine: "always", prev: "*", next: "function" }
      ]
    }
  }
];
