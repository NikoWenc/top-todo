const { merge } = require('webpack-merge');
const common = require('./webpack.common,js');

module.export = merge(common, {
    mode: 'development',
    devtool: 'eval-souce-map',
    devServer: {
        watchFiles: ['./src/template.html'],
    },
});