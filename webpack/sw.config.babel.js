import path from 'path';
import webpack from 'webpack';

const paths = {
  root: path.resolve(__dirname, '..'),
  src: path.resolve(__dirname, '..', 'src'),
  dist: path.resolve(__dirname, '..', 'dist'),
}

const regex = {
  js: /\.jsx?$/,
  json: /\.json$/,
};

const wsConfig = {
  devtool: 'source-map',

  entry: path.resolve(paths.src, 'service-worker.js'),

  output: {
    path: paths.dist,
    filename: 'service-worker.js',
    publicPath: '/',
  },

  module: {
    rules: [
      // JS
      {
        test: regex.js,
        include: paths.src,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.json'],
  },
};

export default wsConfig;
