module.exports = {
  entry: ["./app/index.js"],
  output: {
    path: __dirname + '/build',
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3001,
    contentBase: './build',
    inline: true
  }
};
