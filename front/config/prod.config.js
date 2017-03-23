const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');
module.exports = {
	entry: {
		index: './src/js/widget/index.es',
		// add: './src/js/widget/add.es',
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
		// 根据entry生成对应的css(如果该js文件引用了css的话) 
		new ExtractTextPlugin('css/[name].css'),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendors",
			filename: 'js/vendors.js'
		}),
		new HtmlWebpackPlugin({
			template: 'src/view/index.html',
			filename: 'index.html',
			inject: 'header',
			chunks: ['vendors', 'index']
		}),
		// 第二个入口
		new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
			favicon: './src/images/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
			filename: 'about.html', //生成的html存放路径，相对于path
			template: './src/view/about.html', //html模板路径
			inject: 'body', //js插入的位置，true/'head'/'body'/false
			// hash: true, //为静态资源生成hash值
			chunks: ['vendors', 'index'], //需要引入的chunk，不配置就会引入所有页面的资源
			minify: { //压缩HTML文件
				removeComments: true, //移除HTML中的注释
				collapseWhitespace: false //删除空白符与换行符
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new LiveReloadPlugin({
            appendScriptTag: true
        }),
        new webpack.DefinePlugin({
        		"process.env": {
        			NODE_ENV: "prod"
        		}
        })
	],
	module: {
		rules: [{
				test: /\.es$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['env']
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					use: [{
						loader: "css-loader"
					}, {
						loader: "less-loader"
					}],
					// use style-loader in development
					fallback: "style-loader"
				})
			}
		]
	},
	devServer: {
		contentBase: './',
		host: 'localhost',
		port: 8080,
		inline: true,
		hot: true,
	}
}