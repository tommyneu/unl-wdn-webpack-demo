const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Universal configs for both dev and prod
let config = {
    entry: [
        './src/ts/main.ts',
        './src/scss/main.scss',
    ],
    output: {
        filename: 'js/[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                exclude: /node_modules/,
                use: [
                    'ts-loader',
                ],
            },
            
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: []
};

module.exports = (env, argv) => {

    // Dev specific configs
    if (argv.mode == "development" || argv.mode == undefined) {
        config.mode = "development";
        config.devtool = 'eval-source-map';

        config.devServer = {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            watchFiles: ["src/*.html"],
            open: true,
            hot: true,
            compress: true,
            historyApiFallback: true,
            port: 9000,
        };

        // MiniCssExtractPlugin has issues running with the dev server
        // We will use style-loader instead
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        });

        config.plugins.push(
            new HtmlWebpackPlugin({
                filename: "debug.html",
                template: "src/debug.html",
            })
        );
    }


    // Prod specific configs
    if (argv.mode == "production") {
        config.mode = "production";

        config.module.rules.push({
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        });

        config.plugins.push(
            new HtmlWebpackPlugin({
                filename: "debug.html",
                template: "src/debug.html",
                minify: true,
            })
        );
        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash].css",
            })
        );
    }

    return config;
}