const path = require('path');
const webpack = require('webpack');

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
        devtool: prod ? 'source-map' : 'eval',
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    };
};
