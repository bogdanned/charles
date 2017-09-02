import path from 'path'
import webpack from 'webpack'
import fs from "fs"
import qs from 'querystring'
import reloadable from "express-reloadable"
import HtmlWebpackPlugin from "html-webpack-plugin"
import CompressionWebpackPlugin from "compression-webpack-plugin"
import AssetsPlugin from 'assets-webpack-plugin'

const isDev = process.env.NODE_ENV === "development",
      [host,port=80] = process.env.CDN_DOMAIN.split(":")

const vendor = [
  "react",
  "react-dom",
  "redux",
  "react-redux",
  "redux-first-router",
  "history",
  "recompose",
]

export default {
  devtool: isDev ? 'inline-source-map' : "hidden-source-map",
  bail: false,
  node: {
    fs: false,
    process: false,
    Buffer: false
  },
  entry: isDev ? {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      `webpack-dev-server/client?https://${host}:${port}`,
      'webpack/hot/only-dev-server',
      path.join(__dirname, '/src/client/index.js')
    ],
    vendor
  } : { app: [
    'babel-polyfill',
    path.join(__dirname, '/src/client/index.js')
  ],
  vendor
},
  output: {
    path: path.join(__dirname, "public"),
    filename: isDev ? 'bundle-[name].js' : 'bundle-[name]-[hash].js',
    publicPath: `https://${process.env.CDN_DOMAIN}/`
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "public"),
    host: "0.0.0.0",
    disableHostCheck: true,
    port,
    overlay: true,
    https: {
      cert: fs.readFileSync("./lokalleads.de-wildcard.cer"),
      key: fs.readFileSync("./lokalleads.de-wildcard.key"),
    },
    setup(app){
      let srcDir = path.resolve(__dirname, "src", "server")
      reloadable(app, {
        requireFile: path.join(srcDir, "./setup"),
        watch: srcDir,
        watchOpts: {
          ignoreInitial: true,
        }
      })
    },
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    }),
    ...(isDev ? [new webpack.HotModuleReplacementPlugin()] : []),
    new webpack.EnvironmentPlugin(Object.keys(process.env)),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html.ejs",
      chunks: ["vendor","app"],
    }),
    new CompressionWebpackPlugin({
      asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.(js|html)$/,
			threshold: 10240,
			minRatio: 0.8
    }),
    new AssetsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
          test: /highcharts\/highcharts-more\.src\.js/,
          use: ['imports-loader?module=>undefined,Highcharts=highcharts'],
      },
      {
        test: /\.css$/,
        loader: [
          "style-loader",
          'css-loader?' + qs.stringify({
            modules: false,
            importLoaders: 1,
            localIdentName: '[path][name]-[local]'
          }),
        ].join("!")
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: 'file-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.js']
  },
  stats: "verbose"
}
