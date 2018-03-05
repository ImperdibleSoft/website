import path from 'path';
import webpack from 'webpack';
import jsonImporter from 'node-sass-json-importer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import updateAssets from './utils/update-assets';
import postcssConfig from '../postcss.config';

const paths = {
  root: path.resolve(__dirname, '..'),
  src: path.resolve(__dirname, '..', 'src'),
  dist: path.resolve(__dirname, '..', 'dist'),
}

const regex = {
  img: /\.(png|jpe?g|JPE?G|gif|ico|svg)$/,
  fonts: /\.(woff|woff2|ttf|eot|svg)$/,
  manifest: /manifest\.json|browserconfig\.xml$/,
  css: /\.s?css$/,
  js: /\.jsx?$/,
  html: /\.html$/,
};

const loaderPostCSS = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: true,
    plugins: [ ...postcssConfig.plugins ],
  },
};

const loaderSass = {
  loader: 'sass-loader',
  options: {
    sourceMap: true,
    importer: jsonImporter,
  },
};

const loaderImages = {
  loader: 'image-webpack-loader',
  query: {
    // mozjpeg
    mozjpeg: {
      progressive: true,
      quality: 65,
    },
    // gifsicle
    gifsicle: {
      interlaced: true,
    },
    // optipng
    optipng: {
      optimizationLevel: 7,
    },
    // pngquant
    pngquant: {
      quality: '50-90',
      speed: 3,
      verbose: true,
    },
    // SVGO
    svgo: {
      plugins: [
        {cleanupIDs: false},
      ],
    },
  },
};

const baseConfig = {
  devtool: 'source-map',

  entry: path.resolve(paths.src, 'client'),

  output: {
    path: paths.dist,
    filename: '[name]-[hash].js',
    publicPath: '/',
  },

  module: {
    rules: [
      // Images
      {
        test: regex.img,
        include: paths.root,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
          loaderImages,
        ],
      },

      // Fonts
      {
        test: regex.fonts,
        include: paths.root,
        loader: 'file-loader',
        options: {
          name: '[path][name]_[hash].[ext]',
        },
      },

      // Manifest
      {
        test: regex.manifest,
        include: paths.src,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },

      // CSS
      {
        test: regex.css,
        include: paths.src,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: true },
            },
            loaderPostCSS,
            loaderSass,
          ],
        }),
      },

      // JSX
      {
        test: regex.js,
        include: paths.src,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          sourceMap: true,
        },
      },

      // HTML
      {
        test: regex.html,
        include: paths.src,
        exclude: /node_modules/,
        loader: 'html-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
    alias: {
      App: path.resolve(paths.src, 'app'),
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('dev'),
      },
    }),

    new ExtractTextPlugin({
      filename: '[name]-[hash].min.css',
    }),

    function updateAssetsWhenReady() {
      this.plugin('done', updateAssets);
    },

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ]
};

export {
  baseConfig as default,
  paths,
  regex,
  loaderPostCSS,
  loaderSass,
  loaderImages,
};
