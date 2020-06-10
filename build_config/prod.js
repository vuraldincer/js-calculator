const path = require('path');
const webpack = require('webpack');
const rootDir = path.resolve(__dirname, '../');
const pckg = require(path.join(rootDir, 'package.json'));

console.log(rootDir);

// inject JS version number
const jsVersionPlugin = new webpack.DefinePlugin({
    __VERSION__: JSON.stringify(pckg.version)
});

module.exports = {
    mode: "development",
    devtool: 'source-map',
    entry: {
        simple: path.join(rootDir, 'src/org/example', 'simple.js')
    },
    performance: {
        hints: false
    },
    output: {
        filename: '[name].js',
        path: path.join(rootDir, 'dist'),
        libraryTarget: 'var',
        library: 'Simple'
    },
    optimization: {
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            }
        ]
    },
    plugins: [jsVersionPlugin]
};