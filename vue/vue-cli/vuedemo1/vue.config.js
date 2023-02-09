const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    open: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        utils: "@/utils",
      },
    },
  },
});
