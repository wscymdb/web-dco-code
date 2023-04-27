module.exports = {
  // 默认情况下 使用babel-loader 不会转换es6的代码，需要配置
  // plugins: ['@babel/plugin-transform-arrow-functions'],
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: 3, // corejs的版本
        useBuiltIns: 'entry',
      },
    ],
    // 给typescript设置polyfill
    [
      '@babel/preset-typescript',
      {
        corejs: 3, // corejs的版本
        useBuiltIns: 'entry',
      },
    ],
  ],
}
