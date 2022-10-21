const path = require("path");
module.exports = {
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
        // 详细写法
        // use: [{ loader: "style-loader" }, { loader: "css-loader" }],
        // 简写一：只有一个loader的情况
        // loader: "css-loader",
        // 简写二:多个loader不需要其他属性
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
          "postcss-loader",
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: ["autoprefixer"],
          //     },
          //   },
          // },
        ],
      },
    ],
  },
};
