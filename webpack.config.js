const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    dotenv.config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: '.env.development' });
}

module.exports = (env) => {
    const isProduction = env === 'production';

    return {
        entry: { main: './src/main/js/app.js' },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: isProduction ? '[name].[chunkhash:8].js' : '[name].js',
            chunkFilename: isProduction ? '[name].[chunkhash:8].js' : '[name].js',
            publicPath: '/',
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
                            },
                        },
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin('dist', {}),
            new MiniCssExtractPlugin({
                filename: isProduction ? 'styles.[contenthash:8].css' : 'styles.css',
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
                inject: false,
                hash: true,
                template: './public/index.html',
                favicon: './src/images/football.png',
                filename: 'index.html',
            }),
            new MomentLocalesPlugin({
                localesToKeep: ['pt-br'],
            }),
            new AsyncChunkNames(),
        ],
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            historyApiFallback: true,
            port: 3000,
            watchContentBase: true,
            watchOptions: {
                ignored: /node_modules/,
            },
            publicPath: '/',
        },
        resolve: {
            modules: [
                path.resolve('./src/main/js'),
                path.resolve('./src/main/css'),
                path.resolve('./src/images'),
                path.resolve('./node_modules'),
            ],
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    default: false,
                    vendors: false,
                    vendor: {
                        name: 'vendor',
                        chunks: 'all',
                        test: /node_modules/,
                        priority: 20
                    },
                    common: {
                        name: 'common',
                        minChunks: 2,
                        chunks: 'async',
                        priority: 10,
                        reuseExistingChunk: true,
                        enforce: true
                    }
                }
            },
            runtimeChunk: true,
        }
    };
};
