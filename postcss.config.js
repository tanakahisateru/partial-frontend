module.exports = {
    ident: 'postcss',
    plugins: [
        ["postcss-preset-env", {
            stage: 2,
            // https://preset-env.cssdb.org/features
            // https://github.com/csstools/postcss-preset-env#features
            features: {
                // ネスト記法は Stage 1 だけど便利なので特別に
                'nesting-rules': true,
            },
        }],
    ],
};
