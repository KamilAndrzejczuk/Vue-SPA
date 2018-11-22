const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
    entry: {
        app: path.resolve(__dirname, '../src/client-entry.js')
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /(\.js$)/,
                loader: 'eslint-loader',
                exclude: '/node_modules/'
            },



            // {
            //   test: /\.vue$/,
            //   loader: 'vue-loader',
            //   use: [
            //     process.env.NODE_ENV !== 'production'
            //       ? 'vue-style-loader'
            //       : MiniCssExtractPlugin.loader,
            //       'vue-style-loader',
            //       'css-loader',
            //       'sass-loader?indentedSyntax'
            //   ],
            //   options: {
            //     loaders: {
            //       // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            //       // the "scss" and "sass" values for the lang attribute to the right configs here.
            //       // other preprocessors should work out of the box, no loader config like this necessary.
            //       'scss': [
            //         'vue-style-loader',
            //         'css-loader',
            //         'sass-loader'
            //       ],
            //       'sass': [
            //         'vue-style-loader',
            //         'css-loader',
            //         'sass-loader?indentedSyntax'
            //       ]
            //     }
            //     // other vue-loader options go here
            //   }
            // },
            {
              test: /\.vue$/,
              loader: 'vue-loader',
              // use: [
              //   'vue-style-loader',
              //   'css-loader',
              //   'sass-loader'
              // ],
            },
                      
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader'
                ],
              },
              {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
                ],
              },
              {
                test: /\.sass$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader?indentedSyntax'
                ],
              },
              {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
              }
        ]
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: '/',
        filename: "assets/js/[name].js"
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
          filename: 'assets/styles.css'
        })
    ],
    mode: 'development',

}

module.exports = config;