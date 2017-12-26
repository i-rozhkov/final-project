const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},

	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'ForestLib',
			favicon: './src/img/favicon.ico',
			filename: 'index.html',
			inject: 'body',
		}),
	],

	resolve: {
		modules: ['node_modules'],
		extensions: ['*', '.js'],
	},

	resolveLoader: {
		modules: ['node_modules'],
		moduleExtensions: ['*-loader', '*'],
		extensions: ['*', '.js'],
	},

	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader',
				'eslint-loader',
			],
		},
		{
			test: /\.css$/,
			use: ['style-loader',
				'css-loader',
			],
		},
		{
			test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts/',
				},
			}],
		},
		{
			test: /.(svg)(\?[a-z0-9]+)?$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'svg/',
				},
			}],
		},
		{
			test: /.(ico)(\?[a-z0-9]+)?$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'img/',
				},
			}],
		}],
	},
	devServer: {
		historyApiFallback: true,
	},
};
