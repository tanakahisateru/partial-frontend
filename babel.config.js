module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react'
    ],
    plugins: [
        // async/await 使うと regeneratorRuntime is not defined
        // エラーになるのを回避するおまじない
        '@babel/plugin-transform-runtime',
        // class のプロパティ宣言やるとき用
        '@babel/plugin-proposal-class-properties',
    ],
};
