const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const checkForChangesEvery_ms = 5000;
const devServerPort = 9001;

module.exports = {
    entry : './src/js/index.js',
    mode : 'development',
	target : 'web',
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/i,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                },
            },
            {
                test : /\.css$/i,
                use : [ 'style-loader', 'css-loader' ]
            }
        ],
    },
    resolve : {
		extensions : [ '.js', '.jsx' ],
        modules : [
            path.join(__dirname, 'src'), 
            'node_modules'
        ],
        alias : {
            react : path.join(__dirname, 'node_modules', 'react'),
        },
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : 'development',
            template : './src/index.html',
        }),
    ],
	watchOptions : {
        aggregateTimeout : 1000,
        poll: checkForChangesEvery_ms,
    },
    devServer : {
        static : './build',
        port : devServerPort,
    },
    output : {
        path : path.resolve(__dirname, 'public'),
        filename : 'bundle.js',
        clean : true,
    },
};