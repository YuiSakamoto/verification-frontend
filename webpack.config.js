module.exports = {
  entry: "./assets/js/main.js",
  output: {
    path: "dist",
    filename: "main.js"
  },
  module: {
    loaders: [{                     // require('**.js'); jsxのコンパイル設定
      test  : /\.js$/,
      loader: 'jsx-loader?harmony'  //es6の記法を使いたいのでharmonyを追加する
    }]
  }
};