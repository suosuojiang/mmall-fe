'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _mm     = require('util/mm.js');

$(function(){
    //将获取到的URL参数键值对里的value赋值给type变量
    var type    = _mm.getUrlParam('type') || 'default',
    element     = $('.' + type + '-success');
    // 显示对应的提示元素
    element.show();

    
})
