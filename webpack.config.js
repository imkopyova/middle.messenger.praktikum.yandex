const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    plugins: [
        new HtmlWebpackPlugin({
            templateParameters: {
                "title": "Messenger"
              },
        }),
    ],
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        port: 3000
        
    },
    module: {
        rules: [
            { test: /\.ts$/, use: "ts-loader" },
            { test: /\.handlebars$/, use: "handlebars-loader" },
            { test: /\.css$/i, use: ["style-loader", "css-loader"]},
            { test: /\.(png|svg|jpg|jpeg)$/i, type: "asset/resource" }
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
        fallback: {
            childComponent: path.join(__dirname, "src/handlebars-helpers/childComponent.js"),
            childComponentArray: path.join(__dirname, "src/handlebars-helpers/childComponentArray.js"),
            isEqual: path.join(__dirname, "src/handlebars-helpers/isEqual.js")
        }
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
};