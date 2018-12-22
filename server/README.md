Backend App
===========
- express.js server
- socket.io
- typescript
- webpack for bundling resource
    *     "ts-loader": "^5.3.2",
          "typescript": "^2.5.3",
          "webpack": "^4.28.1",
          "webpack-cli": "^3.1.2",
          "webpack-node-externals": "^1.7.2"
           
    * configure a webpack.config.js, target : node configuration should be added to tell webpack that we are going to package a backend app
                                    const path = require('path');
                                    var nodeExternals = require('webpack-node-externals');

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
    * 