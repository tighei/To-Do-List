const { merge } = require("webpack-merge");
const path = require("path");

const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    watch: true,

    devServer: {
        static: {
            directory: path.join(__dirname, "/dist"),
        },
        compress: true,
        port: 9000,
    },
});
