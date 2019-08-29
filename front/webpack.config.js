module.exports = {
  mode: "production",
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }, {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};