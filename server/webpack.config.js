const path = require('path');
var nodeExternals = require('webpack-node-externals')

module.exports = {
    mode: 'development',
    target: "node",
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
    ]
},
resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
},
output: {
    filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
}
};