require("@babel/register");
const webpackConfig = require("./client.config");

webpackConfig.serve = {
  dev: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    publicPath: webpackConfig.output.path,
    logLevel: "silent",
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 1000
    }
  },
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 6500,
  hot: {
    host: process.env.HOST || "localhost",
    port: parseInt(process.env.PORT, 10) + 1 || 6501
  }
};

module.exports = webpackConfig;
