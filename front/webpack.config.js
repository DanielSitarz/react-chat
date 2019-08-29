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
        use: [
          { loader: "style-loader" },
          {
            loader: "typings-for-css-modules-loader",
            options: {
              namedexport: true,
              camelcase: true,
              modules: true
            }
          },
          { loader: "sass-loader" }
        ]
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