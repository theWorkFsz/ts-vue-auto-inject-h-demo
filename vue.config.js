const { resolve } = require("path");

module.exports = {
  parallel: true,
  lintOnSave: "error",
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  /**
   * @param config {import('webpack-chain') }
   */
  chainWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // for production
      config.optimization.minimize(false);
    } else {
      // 为开发环境修改配置...
    }
  }
};
