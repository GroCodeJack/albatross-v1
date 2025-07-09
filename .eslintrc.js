module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'commitlint.config.cjs',
    'dist',
    'node_modules',
    '**/*.js', // We only want to lint .ts files for now
    'apps/web/.next',
  ],
};
