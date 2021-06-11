const CopyPlugin = require('copy-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path')
const package = require('../package.json').dependencies
const componentExposes = require('../component.exposes.json')
module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@components': path.resolve(__dirname, '../src/components/'),
      '@shared': path.resolve(__dirname, '../src/shared-ui/')
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        use: 'asset/resource',
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
    new ModuleFederationPlugin({
      name: componentExposes.exposeName,
      filename: 'remoteEntry.js',
      exposes: {
        ...componentExposes.exposes,
      },
      remotes: {
        shell: 'shell@http://localhost:3002/remoteEntry.js',
      },
      /* Shared Packages, for this case is React but you can use yur owns */
      shared: {
        react: {
          eager: true,
          requiredVersion: package.react,
        },
        'react-dom': {
          eager: true,
          requiredVersion: package['react-dom'],
        },
        'react-router-dom': {
          eager: true,
          requiredVersion: package['react-router-dom'],
        },
      },
    }),
  ],
}
