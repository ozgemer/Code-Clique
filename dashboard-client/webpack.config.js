const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  watch: true,
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'build/static'),
  },
  devServer: {
    port: 3002, //
    hot: false,
    liveReload: true,
    historyApiFallback: true,
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
      name: 'dashboardClient',
      filename: 'remoteEntry.js',
      remotes: {
        masterClient: 'masterClient@https://codeclique.s3.amazonaws.com/masterclient/build/static/remoteEntry.js',
      },
      exposes: {
        './DashboardContent': './src/DashboardContent.jsx',
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
    }),
  ],
};
