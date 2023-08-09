const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, '', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'build/static'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'membersClient',
      filename: 'remoteEntry.js',
      remotes: {
        masterClient:
          'masterClient@https://codeclique.s3.amazonaws.com/masterclient/build/static/remoteEntry.js',
      },
      exposes: {
        './MembersContent': './src/MembersContent.jsx',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
  ]
};
