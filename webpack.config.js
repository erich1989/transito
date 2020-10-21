const path = require('path');
const webpack = require('webpack');

const config = {
    entry: {
        home: path.resolve(__dirname, "src/js/pages/index.js")
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "docs"),
        publicPath:"https://erich1989.github.io/transito/"
        },

    mode: 'production',    

    module: {
        rules:[
            {
                test: /\.html$/,
                loader: "html-loader",
              },
              { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
              {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
              },
              {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: { loader: "url-loader", options: { limit: 90000000 } },
              },
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
      ]
}

module.exports = config;

