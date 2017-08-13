module.exports = {
    entry: "./src/js/convert_click.js",
    output: {
        filename: "./build/bundle.js"
    },
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