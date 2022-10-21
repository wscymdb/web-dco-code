const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        // 告诉webpack匹配什么样的文件
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader", "postcss-loader"],
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        // type: "asset/resource",
        // type: "asset/inline",
        // type: "asset/source",
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 60 * 1024,
          },
        },
        generator: {
          // 占位符
          // name:指向原文件的名称
          // ext：拓展名
          // hash：webpack生成的hash值
          // [hash:8]:指定截取hash的数量
          // 还可以指定一个文件夹 在文件前面加文件夹名称即可
          filename: "images/[name]_[hash:8][ext]",
        },
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
        // use: [
        //   {
        //     loader: "babel-loader",
        //     options: {
        //       plugins: ["@babel/plugin-transform-arrow-functions"],
        //     },
        //   },
        // ],
      },
    ],
  },

  devServer: {
    hot: true, // 热更新默认开启
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "我是大帅逼",
      template: "./index.html",
    }),
    new DefinePlugin({
      named: "'Jack'",
    }),
  ],
};
