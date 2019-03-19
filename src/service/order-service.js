 'use strict';

var _mm = require('util/mm.js');

var _order = {
    // 获取购物车列表
    getProductList : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/get_order_cart_product.do'),
            success : resolve,
            error   : reject
        });
    },
    // 提交订单
    createOrder : function(orderInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/create.do'),
            data    : orderInfo,
            success : resolve,
            error   : reject
        });
    },
    // 获取订单列表
    getOrderList : function(listParam, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/list.do'),
            data    : listParam,
            success : resolve,
            error   : reject
        });
    },
    // 获取订单详情
    getOrderDetail : function(orderNumber, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/detail.do'),
            data    : {
                // 左边的是服务端要求的字段，右边是前端自己定义的字段
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    },
    cancelOrder : function(orderNumber, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/order/cancel.do'),
            data    : {
                // 左边的是服务端要求的字段，右边是前端自己定义的字段
                orderNo : orderNumber
            },
            success : resolve,
            error   : reject
        });
    },  
}
module.exports = _order;