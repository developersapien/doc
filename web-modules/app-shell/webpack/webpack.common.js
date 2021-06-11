const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const componentExposes = require('../component.exposes.json')
module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@components': path.resolve(__dirname, '../src/components/'),
    },
  },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: 'bundle-loader',
        options: {
          lazy: true,
        },
      },

      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        use: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: `${componentExposes.exposeName}.bundle.js`,
  },
  mode: 'development',
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/assets', to: './assets' }],
    }),
  ],
}
