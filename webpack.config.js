const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
    },
    module: {
        rules: [
            { test: /\.ts$/, use: "ts-loader" },
            { test: /\.handlebars$/, use: "handlebars-loader" },
            { test: /\.css$/i, use: ['style-loader', 'css-loader']},
            { test: /\.(png|svg|jpg|jpeg)$/i, type: 'asset/resource' }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        fallback: {
            childComponent: path.join(__dirname, "src/handlebars-helpers/childComponent.js"),
            childComponentArray: path.join(__dirname, "src/handlebars-helpers/childComponentArray.js"),
            isEqual: path.join(__dirname, "src/handlebars-helpers/isEqual.js")
        }
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};