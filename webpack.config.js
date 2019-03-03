

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
console.log(WEBPACK_ENV);
//获取HtmlWebpackPlugin参数的方法
var getHtmlConfig = function(name,title){
    return {
        template : './src/view/' + name + '.html',
        filename : 'view/' + name + '.html',
        title    : title,
        inject   : true,
        hash     : true,
        chunks   : ["common",name]
    }
};

var config = {
    entry:{
        'common':['./src/page/common/index.js'],
        'index':['./src/page/index/index.js'],
        'login':['./src/page/login/index.js']
    },
    output:{
        path:'./dist',
        publicPath: '/dist',
        filename:'js/[name].js'
    },
    externals:{
        'jquery':'window.jQuery'
    },
    module: {
        loaders:[
        {test: /\.css$/, loader:ExtractTextPlugin.extract("style-loader","css-loader") },
        {test: /\.(gif|png|jpg|jpeg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' }
        //{test: /\.string$/, loader: 'html-loader'}
        ]
    },
    plugins:[
        //独立通用模块到js/base.js  
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "js/base.js"
        }),
        //把CSS单独打包到文件 
        new ExtractTextPlugin("css/[name].css"),
        //html模板的处理
        new HtmlWebpackPlugin(getHtmlConfig('index')),
        new HtmlWebpackPlugin(getHtmlConfig('login'))
    ]
};

if (WEBPACK_ENV === 'dev') {
    config.entry.common.push('webpack-dev-server/client?http://localhost:8088/')
};

module.exports = config;