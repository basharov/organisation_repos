const webpack = require('webpack');
const path = require('path');

const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './build');

// plugins
const WebpackNotifierPlugin = require('webpack-notifier');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
    mode: 'development',
    context: sourcePath,
    entry: './main.tsx',

    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].chunk.js',
        path: outPath,
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        publicPath: '/'
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            src: path.resolve(__dirname, 'src')
        }
    },
    devtool: 'source-map',
    module: {
        // noParse: /(mapbox-gl)\.js$/,
        rules: [

            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            getCustomTransformers: () => ({before: [styledComponentsTransformer]})
                        }
                    }
                ]
            },

            {test: /\.html$/, use: 'html-loader'}
        ]
    },
    plugins: [
        /*
                new BundleAnalyzerPlugin({
                    analyzerMode: 'static'
                }),
        */
        new WebpackNotifierPlugin({alwaysNotify: true}),

        new webpack.optimize.AggressiveMergingPlugin(),

        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ],
    node: {
        // workaround for webpack-dev-server issue
        // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
        fs: 'empty',
        net: 'empty',
        child_process: 'empty'
    }
};

module.exports.serve = {
    content: [__dirname],
    add: (app, middleware, options) => {
        app.use(convert(history({})));
    },
};