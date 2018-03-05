import path from 'path';
import webpack from 'webpack';
import jsonImporter from 'node-sass-json-importer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import postcssConfig from '../postcss.config';

import baseConfig, {
  paths,
  regex,
  loaderPostCSS,
  loaderSass,
  loaderImages,
} from './client.dev.config.babel';

const prodConfig = {
  target: 'node',
  
  externals: [nodeExternals()],
  
  entry: path.resolve(paths.src, 'server'),
  
  output: {
    path: paths.dist,
    filename: 'server.js',
    publicPath: '/',
  },

  module: baseConfig.module,

  resolve: baseConfig.resolve,

  // plugins: baseConfig.plugins,
};

export default prodConfig;