// webpack.config.js
const path = require( 'path' );
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
module.exports = {
    context: __dirname,
    entry: {
        app: './js/app.js',
        header: './js/headerComponent.js',
        content: './js/contentComponent.js',
        add: './js/addToDoComponent.js'
      },
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: '[name].main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [ new HtmlWebPackPlugin({
        title: 'index',
        filename: 'index.html'
    }), new MiniCssExtractPlugin() ]
};