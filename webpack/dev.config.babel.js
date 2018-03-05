import path from 'path';
import webpack from 'webpack';
import jsonImporter from 'node-sass-json-importer';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import postcssConfig from '../postcss.config';

const paths = {
  root: path.resolve(__dirname, '..'),
  src: path.resolve(__dirname, '..', 'src'),
  dist: path.resolve(__dirname, '..', 'dist'),
}

const regex = {
  js: /\.jsx?$/,
  css: /\.s?css$/,
  img: /\.(png|jpe?g|JPE?G|gif|ico|svg)$/,
  fonts: /\.(woff|woff2|ttf|eot|svg)$/,
  html: /\.html$/,
  json: /\.json$/,
  manifest: /manifest\.json|browserconfig\.xml$/
};

const loaderPostCSS = {
  loader: 'postcss-loader',
  options: {
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
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          loaderPostCSS,
          loaderSass,
        ],
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
