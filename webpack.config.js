const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {

    const prod = argv.mode === 'production';

    return {
        entry: {
            bundle: './assets/index.js'
        },
        output: {
            path: path.resolve(__dirname, 'public/assets/dist'),
            filename: prod ? '[name]-[contenthash].js' : '[name].js',
            clean: true,
        },
        devtool: prod ? 'source-map' : 'cheap-module-source-map',
        // devtool: 'eval' では css ファイルにソースマップ付かない
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                }
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }),
            new MiniCssExtractPlugin({
                filename: prod ? '[name]-[contenthash].min.css' : '[name].css',
            }),
        ],
        optimization: {
            minimize: prod,
            minimizer: [
                new TerserPlugin(),
                new CssMinimizerPlugin(),
            ],
        },
    };
};
