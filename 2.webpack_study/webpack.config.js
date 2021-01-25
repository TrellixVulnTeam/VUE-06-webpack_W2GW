const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlguin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html'
})

module.exports = {
  // 编译模式
  mode: 'development', // development  production
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'), // 输出文件的存放路径
    filename: 'bundle.js' // 输出文件的名称
  },
  plugins: [htmlPlguin],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
    ]
  }
}
