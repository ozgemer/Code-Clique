const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'build/static'),
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
          fullySpecified: false,
        },
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'masterClient',
      filename: 'remoteEntry.js',
      remotes: {
        boardClient:
          'boardClient@https://codeclique.s3.amazonaws.com/boardClient/build/static/remoteEntry.js',
        specsClient:
          'specsClient@https://codeclique.s3.amazonaws.com/specsClient/build/static/remoteEntry.js',
        dashboardClient:
          'dashboardClient@https://codeclique.s3.amazonaws.com/dashboardClient/build/static/remoteEntry.js',
        membersClient:
          'membersClient@https://codeclique.s3.amazonaws.com/membersClient/build/static/remoteEntry.js',
        rolesClient:
          'rolesClient@https://codeclique.s3.amazonaws.com/rolesClient/build/static/remoteEntry.js',
        calenderClient:
          'calenderClient@https://codeclique.s3.amazonaws.com/calenderClient/build/static/remoteEntry.js',
        settingsClient:
          'settingsClient@https://codeclique.s3.amazonaws.com/settingsClient/build/static/remoteEntry.js',
        masterClient:
          'masterClient@https://codeclique.s3.amazonaws.com/masterClient/build/static/remoteEntry.js',
      },
      exposes: {
        './PageLayout': './src/components/PageLayout/PageLayout.jsx',
        './authContext': './src/contexts/AuthContext.jsx',
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
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: path.join(__dirname, 'public', 'logo-small.svg'),
    }),
  ],
};
