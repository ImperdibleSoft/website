import path from 'path';
import webpack from 'webpack';
import jsonImporter from 'node-sass-json-importer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import updateAssets from './utils/update-assets';
import postcssConfig from '../postcss.config';

import baseConfig, {paths, regex, loaderPostCSS, loaderSass, loaderImages } from './client.dev.config.babel';

const prodConfig = {
  entry: baseConfig.entry,
  
  output: baseConfig.output,

  module: baseConfig.module,

  resolve: baseConfig.resolve,

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('prod'),
      },
    }),

    new ExtractTextPlugin({
      filename: '[name]-[hash].min.css',
    }),

    function updateAssetsWhenReady() {
      this.plugin('done', updateAssets);
    },
  ],
};

export default prodConfig;