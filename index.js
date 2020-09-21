module.exports = {
  printWidth: 90,
  trailingComma: 'es5',
  semi: true,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.json',
      options: {
        tabWidth: 2,
        singleQuote: false,
      },
    },
  ],
};
