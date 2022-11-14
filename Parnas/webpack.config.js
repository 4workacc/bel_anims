const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './assets/scripts/script.ts',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    })
  ],
  module: {
    rules: [
      // { test: /\.svg$/, use: 'svg-inline-loader' },
      // { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            // Creates `style` nodes from JS strings
            // "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },    
    ],    
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/index_bundle.js'
  }
}