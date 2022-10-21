const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.comm.config");
module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    hot: true, // 热更新默认开启,
    port: "9898",
    host: "local-ipv4",
    // compress: true,
    open: true,
  },
});
