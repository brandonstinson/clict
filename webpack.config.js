const webpack = require(`webpack`);
const { resolve } = require(`path`);
const nodeExternals = require(`webpack-node-externals`);

module.exports = {
  target: `node`,
  entry: `./src/index.js`,
  output: {
    path: resolve(__dirname, `dist`),
    filename: `clict.js`,
  },
  mode: `production`,
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
          options: {
            presets: [`@babel/env`, `@babel/react`],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `#!/usr/bin/env node`,
      raw: true,
    }),
  ],
};
