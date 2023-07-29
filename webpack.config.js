const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PATH = require("./path");

module.exports = {
	entry: path.join(PATH.SRC, "index.js"),

	output: {
		filename: "[name][hash].js",
		path: path.resolve(PATH.DIST),
	},

	watchOptions: {
		aggregateTimeout: 100,
		ignored: ["node_modules/**"],
	},
	resolve: {
		extensions: [".js"],
		alias: {
			asserts: path.resolve(PATH.ASSETS),
			src: path.resolve(PATH.SRC),
		},
	},
	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env", { targets: "defaults" }]],
					},
				},
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",

					{
						loader: "css-loader",
						options: { sourceMap: true },
					},
					"sass-loader",
				],
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[hash].css",
		}),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.join(PATH.PUBLIC, "index.html"),
		}),
	],
};
