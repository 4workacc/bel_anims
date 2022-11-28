const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './assets/scripts/script.ts',
  plugins: [new MiniCssExtractPlugin({
    filename: 'assets/style/[name].css'   
  })],
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
     
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,             
        }, 
        {
            loader: "css-loader",   
            options: { url: true, sourceMap: true }      
        },       
        {
          loader: "sass-loader", 
          options: { sourceMap: true }
        }
        ]
      },      
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: { outputPath: 'assets/images', publicPath: '../images', useRelativePaths: true }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: { outputPath: 'assets/fonts', publicPath: '../fonts', useRelativePaths: true }
      }       
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/scripts/index_bundle.js',
  },
  watch: true
}