/**
 * Created by pomy on 10/12/2016.
 * webpack dev server
 */

'use strict';

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');

let config = require('./webpack.config.js');

//对于AutoRefresh(代码更新时自动重新加载页面)，如果是CLI，则加 --hot --inline
//如果是Node.js API，因为没有inline这个配置，需要做三件事:
//1. hot设置成true 2. HotModuleReplacementPlugin()添加到plugins 3. 在入口中加入dev-server,代码如下
if(process.env.NODE_ENV === 'development'){
    config.entry.unshift("webpack/hot/dev-server","webpack-dev-server/client?http://localhost:8080/");
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    );
}

let compiler = webpack(config);
let server = new WebpackDevServer(compiler, {
    hot: true,
    noInfo: false,
    quite: false,
    port: 8080,
    debug: true,
    compress: true,
    progress: true,
    historyApiFallback: true,
    colors: true,
    stats: 'normal',
    contentBase:'./',
    publicPath:"http://localhost:8080/assets",
    devtool:'#cheap-module-eval-source-map'
});
server.listen(8080);
