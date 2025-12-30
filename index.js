/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 90,
  trailingComma: 'all',
  semi: true,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',

  overrides: [
    {
      files: '*.jsonc',
      options: {
        trailingComma: 'none',
      },
    },
  ],
};

module.exports = config;
