const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
}

module.exports = (env) => {
    const isProduction = env === 'production';

    return {
        entry: { main: './src/main/js/app.js' },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].[chunkhash:8].js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/,
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'eslint-loader'],
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                sourceMap: true,
                            }
                        },
                        'css-loader',
                        'sass-loader'
                    ]
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin('dist', {} ),
            new MiniCssExtractPlugin({
                filename: 'styles.[contenthash:8].css',
            }),
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
            }),
            new HtmlWebpackPlugin({
                inject: true,
                hash: true,
                template: './public/index.html',
                filename: './index.html'
                //TODO: index sumindo nas rotas
            }),
        ],
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            historyApiFallback: true,
            publicPath: '.',
            port: 3000,
            watchContentBase: true,
            watchOptions: {
                ignored: /node_modules/,
            },
        },
        resolve: {
            modules: [
                path.resolve('./src/main/js'),
                path.resolve('./src/main/css'),
                path.resolve('./node_modules'),
            ],
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendor",
                        chunks: "initial",
                        enforce: true
                    },
                    // styles: {
                    //     name: 'styles',
                    //     test: /\.scss$/,
                    //     chunks: 'all',
                    //     enforce: true
                    // }
                },
            },
            runtimeChunk: true,
        },
    };
};
