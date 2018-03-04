import path from 'path';
import webpack from 'webpack';
import jsonImporter from 'node-sass-json-importer';

import updateAssets from './utils/update-assets';
import postcssConfig from '../postcss.config';

import baseConfig, {paths, regex, loaderPostCSS, loaderSass, loaderImages } from './dev.config.babel';

const prodConfig = {
  entry: baseConfig.entry,
  
  output: {
    path: path.resolve(paths.dist, 'assets'),
    filename: baseConfig.output.filename,
    publicPath: '/assets/',
  },

  module: baseConfig.module,

  resolve: baseConfig.resolve,

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('prod'),
      },
    }),

    function updateAssetsWhenReady() {
      this.plugin('done', updateAssets);
    },
  ],
};

export default prodConfig;