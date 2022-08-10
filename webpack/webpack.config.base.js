/*
 * @Description: webpack.config.base.js
 * @Author: hyx
 * @Date: 2022-08-09 17:03:04
 */

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin")

const ROOT_PATH = path.resolve(__dirname, "../")
const isDevelopment = process.env.NODE_ENV === "development"
const isProduction = process.env.NODE_ENV === "production"

const myAntd = {
  "primary-color": "#1DA57A",
  "link-color": "#1DA57A",
  "border-radius-base": "8px",
}

const getCssLoaders = () => {
  const cssLoaders = [
    // 开发模式使用style-loader，生产模式MiniCssExtractPlugin.loader
    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        modules: {
          // 模块化类名，防止重复
          localIdentName: "[local]--[hash:base64:5]",
        },
        sourceMap: isDevelopment,
      },
    },
  ]

  // 加css前缀的loader配置
  const postcssLoader = {
    loader: "postcss-loader",
    options: {
      postcssOptions: {
        plugins: [
          isProduction && [
            "postcss-preset-env",
            {
              autoprefixer: {
                grid: true,
              },
            },
          ],
        ],
      },
    },
  }

  // 生产模式时，才需要加css前缀
  isProduction && cssLoaders.push(postcssLoader)

  return cssLoaders
}

const getAntdLessLoaders = () => [
  isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
  {
    loader: "css-loader",
    options: {
      sourceMap: isDevelopment,
    },
  },
  {
    loader: "less-loader",
    options: {
      sourceMap: isDevelopment,
      lessOptions: {
        // antd 自定义主题
        modifyVars: myAntd,
        javascriptEnabled: true,
      },
    },
  },
]

const baseConfig = {
  // 入口文件
  entry: {
    index: path.resolve(ROOT_PATH, "./src/index"),
  },
  output: {
    clean: true, // 在生成文件之前清空 dist 目录
  },
  // 所有loader的配置都在 module.rules 中
  module: {
    rules: [
      // 对css文件的处理
      // use里的loader如果有多个的情况下，切记执行顺序是：从下到上(或者从右到左)
      // MiniCssExtractPlugin插件和style-loader冲突，所以这里用MiniCssExtractPlugin插件替换了style-loader
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: getCssLoaders(),
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          ...getCssLoaders(),
          {
            loader: "less-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /src/,
        use: getAntdLessLoaders(),
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          ...getCssLoaders(),
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.(tsx?|js)$/, // ts\tsx\js
        loader: "babel-loader",
        options: { cacheDirectory: true }, // 缓存公共文件
        exclude: /node_modules/,
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        // 自动选择导出为单独文件还是url形式
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2?)$/,
        // 分割为单独文件，并导出url
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_PATH, "./public/index.html"),
      filename: "index.html",
      inject: "body",
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(ROOT_PATH, "./tsconfig.json"),
      },
    }),
    // 复制不用动态导入的资源
    new CopyWebpackPlugin({
      patterns: [
        {
          context: "public",
          from: "assets/*",
          to: path.resolve(ROOT_PATH, "./build"),
          toType: "dir",
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ["**/index.html"], // **表示任意目录下
          },
        },
      ],
    }),
    // 将antd中的moment.js替换为day.js
    new AntdDayjsWebpackPlugin(),
  ],
  // 路径配置别名
  resolve: {
    alias: {
      "@": path.resolve(ROOT_PATH, "./src"),
    },
    // 若没有写后缀时，依次从数组中查找相应后缀文件是否存在
    // 在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在
    // resolve.extensions用于配置在尝试过程中用到的后缀列表，默认是：js 和 json
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  // 缓存
  cache: {
    // 基于文件系统的持久化缓存
    type: "filesystem",
    buildDependencies: {
      // 当配置文件发生变化时，缓存失效
      config: [__filename],
    },
  },
}
module.exports = { baseConfig }
