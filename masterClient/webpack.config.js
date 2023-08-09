const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'build/static'),
  },
  devServer: {
    port: 3004,
    hot: false,
    liveReload: true,
    open: true,
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
      name: 'masterClient',
      filename: 'remoteEntry.js',
      remotes: {
        masterClient: 'masterClient@http://localhost:3004/remoteEntry.js',
        boardClient: 'boardClient@http://localhost:3001/remoteEntry.js',
        specsClient: 'specsClient@http://localhost:3003/remoteEntry.js',
        dashboardClient: 'dashboardClient@http://localhost:3002/remoteEntry.js',
        membersClient: 'membersClient@http://localhost:3007/remoteEntry.js',
        settingsClient: 'settingsClient@http://localhost:3010/remoteEntry.js',
        calenderClient: 'calenderClient@http://localhost:3009/remoteEntry.js',
      },
      exposes: {
        './PageLayout': './src/App.jsx',
        './authContext': './src/contexts/AuthContext.jsx',
        './projectContext': './src/contexts/ProjectContext.jsx',
        './axiosContext': './src/contexts/AxiosContext.jsx',
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
