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
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    devtool: "source-map"
};