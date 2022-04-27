const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.config")
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = merge(baseConfig, {
    output: {
        filename: "dev.[fullhash].js",
        sourceMapFilename: "[name].js.map"
    },
    devServer: {
        static: baseConfig.output.path,
        port: 8080,
        proxy: {
            "/": "http://localhost:3000"
        }
    },
    plugins: [
        new SourceMapDevToolPlugin({
            filename: "[file].map"
        }),
    ]
})


