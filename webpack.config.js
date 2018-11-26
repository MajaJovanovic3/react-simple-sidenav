const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const DEMO_DIR = path.resolve(__dirname, 'demo');

const config = {
  entry: {
    'simple-sidenav': `${SRC_DIR}/index.jsx`,
    demo: `${DEMO_DIR}/src/index.jsx`
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [require('@babel/plugin-proposal-class-properties')]
          }
        }
      }
    ]
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
    config.devServer = {
      contentBase: DIST_DIR,
      compress: true,
      port: 9000
    };
  }

  if (argv.mode === 'production') {
    config.optimization = {
      minimizer: [new UglifyJsPlugin({
        parallel: true,
        text: /\.(js|jsx)$/i,
        exclude: /node_modules/
      })]
    };
  }

  return config;
};
