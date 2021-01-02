const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: 'bundle_client.js'
    },    
    module: {
        rules: [{
            test: /.js/,
            use: 'babel-loader'
        }]
    },
}