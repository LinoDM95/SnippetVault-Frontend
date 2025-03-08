import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import configPrettier from "eslint-config-prettier";
import pluginVitest from "eslint-plugin-vitest";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/__tests__/**/*.?(c|m)[jt]s?(x)"],
    plugins: { vitest: pluginVitest },
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        vi: true,
        describe: true,
        test: true,
        expect: true,
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  configPrettier, 
  {
    rules: {
      "prettier/prettier": "off", 
      "react/react-in-jsx-scope": "off", 
      "react/prop-types": "off", 
      "react/jsx-key": "warn", 
      "no-undef": "off", 
    },
  },
  {
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];