(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/clipboard/clipboard"],{"0dfb":function(t,a,n){"use strict";n.r(a);var e=n("8a15"),o=n.n(e);for(var c in e)["default"].indexOf(c)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(c);a["default"]=o.a},"61ed":function(t,a,n){"use strict";(function(t,a){var e=n("4ea4");n("a93f"),n("4a2a");e(n("66fd"));var o=e(n("753b"));t.__webpack_require_UNI_MP_PLUGIN__=n,a(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"753b":function(t,a,n){"use strict";n.r(a);var e=n("a5f4"),o=n("0dfb");for(var c in o)["default"].indexOf(c)<0&&function(t){n.d(a,t,(function(){return o[t]}))}(c);var i=n("f0c5"),u=Object(i["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);a["default"]=u.exports},"8a15":function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{title:"get/setClipboardData",data:""}},methods:{dataChange:function(t){this.data=t.detail.value},getClipboard:function(){t.getClipboardData({success:function(a){console.log(a.data);var n=a.data?"剪贴板内容为:"+a.data:"剪贴板暂无内容";t.showModal({content:n,title:"读取剪贴板",showCancel:!1})},fail:function(){t.showModal({content:"读取剪贴板失败!",showCancel:!1})}})},setClipboard:function(){var a=this.data;0===a.length?t.showModal({title:"设置剪贴板失败",content:"内容不能为空",showCancel:!1}):t.setClipboardData({data:a,success:function(){},fail:function(){}})}}};a.default=n}).call(this,n("543d")["default"])},a5f4:function(t,a,n){"use strict";n.d(a,"b",(function(){return o})),n.d(a,"c",(function(){return c})),n.d(a,"a",(function(){return e}));var e={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,"8fe2"))}},o=function(){var t=this.$createElement;this._self._c},c=[]}},[["61ed","common/runtime","common/vendor"]]]);