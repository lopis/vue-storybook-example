const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const rootPath = path.resolve(__dirname, '../../');

module.exports = {
  stories: [
    '../stories/*.stories.@(js|mdx)',
  ],

  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        babelOptions: {
          presets: [
            [
              '@vue/cli-plugin-babel/preset',
              {
                jsx: false,
              },
            ],
          ],
        },
      },
    },
  ],

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ],
    });

    // Add a custom loader to load the source code of the
    // Vue files that contain an include-source block
    config.module.rules.push({
      resourceQuery: /blockType=include-source/,
      loader: path.resolve(__dirname, 'util/source-loader.js'),
    });

    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['~~'] = rootPath;
    config.resolve.alias['~storybook-util'] = path.resolve(__dirname, 'util');

    return config;
  },
};
