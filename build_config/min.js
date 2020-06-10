const path = require('path');
const webpack = require('webpack');
const rootDir = path.resolve(__dirname, '../');

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "production",
    output: {
        filename: '[name].min.js',
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                sourceMap: true,
                parallel: true,                
                cache: path.join(rootDir, '.build_cache/terser'),
                extractComments: false,
                terserOptions: {
                    keep_fnames: true,
                    keep_classnames: true,
                    mangle: {
                        keep_fnames: true,
                        keep_classnames: true,
                    },
                    output: {
                        // preserve license comments
                        comments: /@license/i
                    }
                }
            })
        ],
    }
};