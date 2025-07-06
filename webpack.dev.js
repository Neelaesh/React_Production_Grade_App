const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const publicPath = require("./publicPath");

const devConfig = () => {
    // Development-specific configuration
    return {
        mode: "development",
        devtool: "inline-source-map", // Enable source maps for easier debugging
        devServer: {
            static: path.join(__dirname, "dist"), // Serve files from the dist directory
            compress: true, // Enable gzip compression for better performance
            port: 3000, // Port for the development server
        },
    };
};

module.exports = (env) => merge(commonConfig(), devConfig)