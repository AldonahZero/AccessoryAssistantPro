(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/download-file/download-file"],{"01c0":function(n,e,t){"use strict";t.r(e);var a=t("cf8c"),i=t.n(a);for(var c in a)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return a[n]}))}(c);e["default"]=i.a},"7dda":function(n,e,t){"use strict";t.r(e);var a=t("998e"),i=t("01c0");for(var c in i)["default"].indexOf(c)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(c);t("9df6");var o=t("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=u.exports},"964c":function(n,e,t){},"998e":function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return a}));var a={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,"dd4e"))}},i=function(){var n=this.$createElement;this._self._c},c=[]},"9df6":function(n,e,t){"use strict";var a=t("964c"),i=t.n(a);i.a},cf8c:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{title:"downloadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{downloadImage:function(){n.showLoading({title:"下载中"});var e=this;n.downloadFile({url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",success:function(t){console.log("downloadFile success, res is",t),e.imageSrc=t.tempFilePath,n.hideLoading()},fail:function(n){console.log("downloadFile fail, err is:",n)}})}}};e.default=t}).call(this,t("543d")["default"])},f70c:function(n,e,t){"use strict";(function(n,e){var a=t("4ea4");t("e9f3"),t("4a2a");a(t("66fd"));var i=a(t("7dda"));n.__webpack_require_UNI_MP_PLUGIN__=t,e(i.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])}},[["f70c","common/runtime","common/vendor"]]]);