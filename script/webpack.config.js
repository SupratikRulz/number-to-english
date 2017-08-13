var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/js/convert_click.js",
    output: {
        filename: "./build/bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.template.ejs"
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["es2015"]
            }
        }]
    }
};