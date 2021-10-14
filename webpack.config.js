const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');

module.exports = (env, argv) => {

    const prod = argv.mode === 'production';
    const enablePreact = false;

    return {
        entry: {
            bundle: './assets/index.js'
        },
        output: {
            path: path.resolve(__dirname, 'public/assets/dist'),
            publicPath: 'auto',
            filename: prod ? '[name]-[contenthash].js' : '[name].js',
            clean: true,
        },
        devtool: prod ? 'source-map' : 'cheap-module-source-map',
        // devtool: 'eval' では css ファイルにソースマップ付かない
        module: {
            rules: [
                {
                    test: /\.jsx?$/i,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader',
                    ],
                },
                {
                    test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader'
                    ]
                }
            ]
        },
        resolve: {
            extensions: ["*", ".js", ".jsx", ".json"],
            alias: enablePreact ? {
                "react": "preact/compat",
                "react-dom/test-utils": "preact/test-utils",
                "react-dom": "preact/compat",  // Must be below test-utils
                "react/jsx-runtime": "preact/jsx-runtime"
            } : {},
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            }),
            new MiniCssExtractPlugin({
                filename: prod ? '[name]-[contenthash].min.css' : '[name].css',
            }),
            new WebpackManifestPlugin({
                fileName: "manifest.json",
                publicPath: '/assets/dist/',
                writeToFileEmit: true
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
