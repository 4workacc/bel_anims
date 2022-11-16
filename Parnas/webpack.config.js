const path = require('path')
const miniCss = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './assets/scripts/script.ts',

  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test:/\.(s*)css$/,
        use: [
           miniCss.loader,
           'css-loader',
           'sass-loader',
        ]
     }
    ],
  },
  plugins: [
    new miniCss({
      filename: 'style.css',
   }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/index_bundle.js'
  }
}