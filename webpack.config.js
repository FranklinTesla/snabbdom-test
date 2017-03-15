/**
 * ------------------------------------
 * @param {}
 * @export 导出变量
 * ------------------------------------
 */
module.exports = {
    entry: './demo.js',
    output: {
        filename: 'bundle.js',
        path: './build',
        sourceMapFilename: "[file].map"
    },
    devtool: "source-map"
};