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
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "@teamsupercell/typings-for-css-modules-loader",
          "css-loader"
        ]
      }, {
        enforce: "pre",
        exclude: /node_modules/,
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