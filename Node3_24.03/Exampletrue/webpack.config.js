const webpack = require("webpack");
module.exports={
    context: __dirname,
    devtool: "sources-map",
    entry: "./js/Profiles.js",
    output: {
        path: __dirname +"/dist",
        filename: "bundle.js"
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