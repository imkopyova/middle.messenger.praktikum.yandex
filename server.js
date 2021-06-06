const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const historyApiFallback = require("connect-history-api-fallback");

const app = express();
const config = require("./webpack.config.js");
const compiler = webpack(config);

const HOSTNAME = "0.0.0.0";
const PORT = process.env.PORT || 3000;

const instance = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
});

app.use(instance);
app.use(historyApiFallback());
app.use(instance);

app.listen(PORT, HOSTNAME, function() {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});