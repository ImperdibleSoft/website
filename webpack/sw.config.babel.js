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
  entry: path.resolve(paths.src, 'service-worker.js'),

  output: {
    path: path.resolve(paths.dist, 'src'),
    filename: 'service-worker.js',
    publicPath: '/src/',
  },

  module: {
    rules: [
      // JS
      {
        test: regex.js,
        include: paths.src,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.json'],
  },
};

export default wsConfig;
