# Code-Clique- Master Client 

# Module federation 

### Follow the steps:
- Create a new component called ExampleContent.jsx (Replace Example with your project name). **Place the component in the root folder**
- Cut everything you return in App.jsx and paste it inside the new file.
  ```js
  // App.jsx
  function App() {
    return <></>
  }

  export default App;
  ```

  ```js
  // ExampleContent.jsx
  import Component from './src/components/Component'; // the component you returned in app.jsx

  function ExampleContent() {
    return <Component />
  }

  export default ExampleContent;
  ```

- Rename index.jsx to bootstrap.jsx
- create a new index.jsx file and paste:
  ```js
    import('./bootstrap');
  ```
___ 

### Install 

```js
npm i webpack webpack-cli html-webpack-plugin babel-loader webpack-dev-server @babel/preset-react @babel/preset-env @babel/core @svgr/webpack file-loader
```
___ 

### webpack.config.js
In your root folder create webpack.config.js file.
```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "build/static"),
  },
  devServer: {
    port: 300x, // replace x with your phase number
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
          extensions: [".js", ".jsx"],
          fullySpecified: false,
        },
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { "runtime": "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Example",
      filename: "remoteEntry.js",
      remotes: {
        masterClient: "masterClient@http://localhost:3004/remoteEntry.js",
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
```
- **port:** 'x' should be your phase number.
- **Inside module federation plugin:** change the name to your project name as it appears inside package.json. **If your project name inside package.json conatins "-", make it inside the module federation plugin js valid name. For example: example-content -> exampleContent**
- **Change your npm start script to "webpack serve --mode development"**
- **Change your npm build script to "webpack --mode production"**

___

### Import
Paste the following line inside your App.jsx file:
```js
const PageLayout = React.lazy(() => import('masterClient/PageLayout'));
```

___ 

### PageLayout
App.jsx component needs to return:
```js
// App.js
<React.Suspense fallback='Loading...'>
  <PageLayout>
    <ExampleContent />
  </PageLayout>
</React.Suspense>
```
**Replace the example with your project name** 

___

### Export your content
Inside webpack.config.js look for the module federation plugin.
Inside the exposes object paste the following line:
```js
"./ExampleContent": "./src/ExampleContent.jsx"
```
**Replace Example with your project name** 
___

## npm start
For everything to work, you need to run the "npm start" script on both your project and masterClinet project.

<br />
<br />
<br />
<br />
<br />


# eslint

### Install
```js
npm i -D eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-styled-components-a11y 
```
___

### .prettierrc
- Create **.prettierrc** file inside your root folder.
- Copy the following code:
```js
{
    "arrowParens": "always",
    "bracketSpacing": true,
    "embeddedLanguageFormatting": "auto",
    "enable": true,
    "enableDebugLogs": false,
    "endOfLine": "auto",
    "htmlWhitespaceSensitivity": "css",
    "ignorePath": ".prettierignore",
    "insertPragma": false,
    "jsxBracketSameLine": false,
    "jsxSingleQuote": true,
    "printWidth": 80,
    "proseWrap": "preserve",
    "quoteProps": "as-needed",
    "requireConfig": false,
    "requirePragma": false,
    "resolveGlobalModules": false,
    "semi": true,
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "useTabs": false,
    "vueIndentScriptAndStyle": false,
    "withNodeModules": false

}
```
**If you have the prettier extension installed, you can adjust its settings to these settings.**
___

### .eslintrc.json
- Create **.eslint.json** file inside your root folder.
- Copy the following code:
```js
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "react-app",
    "react-app/jest",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:styled-components-a11y/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "prettier", "styled-components-a11y"],
  "rules": {
    "react/jsx-uses-react": ["off"],
    "react/react-in-jsx-scope": ["off"],
    "react/jsx-props-no-spreading": ["warn"],
    "no-shadow": "off",
    "prettier/prettier": "error",
    "no-unused-vars": "error",
    "no-console": "warn",
    "func-names": "off",
    "no-process-exit": "off",
    "class-methods-use-this": "off",
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "no-unused-expressions": "off",
    "default-case": "off",
    "no-duplicate-imports": ["error", { "includeExports": true }],
    "prefer-const": "error",
    "no-var": "error",
    "arrow-spacing": "error",
    "func-call-spacing": ["error", "never"],
    "no-extra-parens": "error"
  }
}
```
___

### package.json scripts
Add the following scripts to your package.json:
```js
"lint": "eslint \"**/*.{js,jsx}\"",
"lint:fix": "eslint --fix \"**/*.{js,jsx}\""
```
- **npm lint** will check your code for errors and warnings.
- **npm lint:fix** will fix for you most of the errors and warnings.

### *****Errors and warnings
**We can customize the errors and warnings!** If you find errors and warnings that you think we should ignore, tell me and we will check with everyone what they think about that.
