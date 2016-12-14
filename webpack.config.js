// `CheckerPlugin` is optional. Use it if you want async error reporting.
// We need this plugin to detect a `--watch` mode. It may be removed later
// after https://github.com/webpack/webpack/issues/3460 will be resolved.
const { CheckerPlugin, TsConfigPathsPlugin } = require("awesome-typescript-loader");

module.exports = {
  entry: [
    "./src/index.ts"
  ],

  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },

  devServer: {
    contentBase: './dist'
  },

  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  // Add the loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
      new CheckerPlugin(),
      new TsConfigPathsPlugin({
        tsconfig: "tsconfig.json",
        compiler: "typescript"
      })
  ]
};
