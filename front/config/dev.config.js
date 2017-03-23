const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
module.exports = {
    entry: {
        index: './src/js/widget/index.es',
        other: './src/js/widget/other.es',
        about: './src/js/widget/about.es'
    },
    output: {
        // filename: '[name].js',
        // path: __dirname + '/dist/js'
        path: path.join(__dirname, '../dist'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        // publicPath: '/dist/', //模板、样式、脚本、图片等资源对应的server上的路径
        filename: 'js/[name]-o.js', //每个页面对应的主js的生成配置
        chunkFilename: 'js/[id].chunk.js' //chunk生成的配置
    },
    plugins: [
        // 1,压缩css
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                }
            },
            canPrint: true
        }),
        // 2,压缩js
        // new UglifyJSPlugin({
        // 	test: /.js/i,
        // 	exclude: /node_modules|libs/
        // }),
        // 3,提取css 根据entry生成对应的css(如果该js文件使用了css的话)
        new ExtractTextPlugin('css/[name].css'),
        // 4,提取公共文件
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendors",
            filename: 'js/vendors.js',
            chunks: ['index', 'other']
        }),
        // 5,生成html文件
        new HtmlWebpackPlugin({
            template: './src/view/index.html',
            filename: 'index.html',
            inject: 'header',
            chunks: ['vendors', 'index'],
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        // 生成html文件
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            favicon: './src/images/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
            filename: 'about.html', //生成的html存放路径，相对于path
            template: './src/view/about.html', //html模板路径
            inject: 'body', //js插入的位置，true/'head'/'body'/false
            // hash: true, //为静态资源生成hash值
            chunks: ['vendors', 'about'], //需要引入的chunk，不配置就会引入所有页面的资源
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        // 生成html文件
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            favicon: './src/images/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
            filename: 'other.html', //生成的html存放路径，相对于path
            template: './src/view/other.html', //html模板路径
            inject: 'body', //js插入的位置，true/'head'/'body'/false
            // hash: true, //为静态资源生成hash值
            chunks: ['vendors', 'other'], //需要引入的chunk，不配置就会引入所有页面的资源
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }),
        // 6,热启动,跟dev-server配合使用
        new webpack.HotModuleReplacementPlugin(),
        new LiveReloadPlugin({
            appendScriptTag: true
        }),
        //  new webpack.DefinePlugin({
        //  		"process.env": {
        //  			NODE_ENV: "dev"
        //  		}
        //  })
    ],
    module: {
        rules: [
            // 7,配置babel presets: ['env'] 自动配置
            {
                test: /\.es$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            },
            // 提取css
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            // 8,配置less
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    fallback: "style-loader"
                })
            },
            {　　　　　　
                test: /\.(png|jpg|jpeg)$/,
                // 9,然你引用的图片一起带过去,小图片转为base64
                loader: 'url-loader?limit=8192&name=./images/[hash].[ext]'　　　
            },
            {
                //html模板加载器，可以处理引用的静态资源，默认配置参数attrs=img:src，处理图片的src引用的资源
                //比如你配置，attrs=img:src img:data-src就可以一并处理data-src引用的资源了，就像下面这样
                test: /\.html$/,
                loader: "html-loader?attrs=img:src img:data-src"
            }
        ]
    },
    // 10,启动一个开放服务
    devServer: {
        contentBase: './',
        host: 'localhost',
        port: 8080,
        inline: true,
        hot: true,
    }
}
