const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

  return {
    // Використовуємо абсолютний шлях до app.js
    entry: path.resolve(__dirname, "src/app.js"),

    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true, // очищає dist перед кожною збіркою
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.(scss|css)$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },

    plugins: [
      // абсолютний шлях до index.html
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
      }),

      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
    ],

    optimization: {
      minimize: isProd,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },

    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      port: 3000,
      open: true,
      hot: true,
    },

    watch: !isProd,
  };
};
