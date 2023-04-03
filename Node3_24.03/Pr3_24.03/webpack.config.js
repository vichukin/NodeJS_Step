const webpack = require("webpack");
module.exports={
    context: __dirname,
    devtool: "sources-map",
    entry: "./timer.js",
    output: {
        path: __dirname +"/dist",
        filename: "app.js"
    },
    module:{
        rules: [{
            test: /\.css$/i,
            use: ["style-loader","css-loader"]
        },
        {
            test: /\.(png|jpg)$/i,
            type: 'asset/resource'  
        }
        ]
    }
};