const webpack = require("webpack");
const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        secure: false
      }
    }
  },

  // transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    // Sass Scss Files
    config.module
      .rule("saas")
      .test(/\.s[ac]ss$/i)
      .use(["style-loader", "css-loader"])
      .loader("sass-loader")
      .end();
  }
};
