var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: [
		'webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:8080', './index.tsx'
	],
	output: {
		path: __dirname + '/public/bundle',
		filename: '[name].js'
	},
	// Turn on sourcemaps
	devtool: 'source-map',
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.tsx', '.scss'],
		modulesDirectories: ['components', 'node_modules', 'store', 'styles']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("[name].css")
	],
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader','style!css')
			},
			{
				test: /\.scss$/,
				loader:  ExtractTextPlugin.extract('style-loader',"css!sass")
			},
			{
				test: /\.ts(x?)$/,
				loader: 'ts-loader'
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url'
			},
			{
				test: /\.(woff|svg|ttf|eot)$/,
				loader: 'url?limit=100000'
			}
		]
	}
}