const webpack = require("webpack");

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        secure: false
      }
    }
  },
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule("saas")
      .test(/\.s[ac]ss$/i)
      .use(["style-loader", "css-loader"])
      .loader("sass-loader")
      .end();
  }
};
