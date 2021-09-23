const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  plugins: [].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          // Created 'style' nodes from JS strings or extract to separate file
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Traslates CSS into commonJS
          "css-loader",
          // Compiles SASS to CSS
          "sass-loader"
        ]
      }
    ]
  }
};
