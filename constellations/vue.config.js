/*
 * @Author: xiancheng
 * @Date:   2020-10-13 18:16:51
 * @Last Modified by:   xiancheng
 * @Last Modified time: 2020-10-13 18:16:51
 */
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://web.juhe.cn:8080/",
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          '^/api': ''
        }
      },
    },
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: false
};