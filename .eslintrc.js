module.exports = {
  extends: ['@nurmarief/eslint-config', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'webpack.common.js',
          'webpack.dev.js',
          'webpack.prod.js',
        ],
      },
    ],
  },
};
