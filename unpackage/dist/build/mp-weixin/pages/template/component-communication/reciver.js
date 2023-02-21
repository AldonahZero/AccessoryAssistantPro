(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/component-communication/reciver"],{5817:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{msg:""}},created:function(){t.$on("cc",this.recive)},beforeDestroy:function(){t.$off("cc",this.recive)},methods:{recive:function(t){this.msg=t.msg}}};n.default=e}).call(this,e("543d")["default"])},"78e7":function(t,n,e){},"79ee":function(t,n,e){"use strict";e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){}));var c=function(){var t=this.$createElement;this._self._c},u=[]},"82fc":function(t,n,e){"use strict";var c=e("78e7"),u=e.n(c);u.a},9979:function(t,n,e){"use strict";e.r(n);var c=e("5817"),u=e.n(c);for(var i in c)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return c[t]}))}(i);n["default"]=u.a},cd46:function(t,n,e){"use strict";e.r(n);var c=e("79ee"),u=e("9979");for(var i in u)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("82fc");var r=e("f0c5"),f=Object(r["a"])(u["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],void 0);n["default"]=f.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/template/component-communication/reciver-create-component',
    {
        'pages/template/component-communication/reciver-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("cd46"))
        })
    },
    [['pages/template/component-communication/reciver-create-component']]
]);
