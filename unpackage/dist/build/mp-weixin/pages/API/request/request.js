(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/request/request"],{"1a63":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,"8fe2"))}},s=function(){var e=this.$createElement;this._self._c},o=[]},5021:function(e,t,n){"use strict";(function(e,t){var a=n("4ea4");n("a93f"),n("4a2a");a(n("66fd"));var s=a(n("c6bf"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(s.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"5f3b":function(e,t,n){"use strict";n.r(t);var a=n("764f"),s=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=s.a},"764f":function(e,t,n){"use strict";(function(e){var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n("2eee")),o=a(n("278c")),r=a(n("c973")),u="https://unidemo.dcloud.net.cn/ajax/echo/text?name=uni-app",c={data:function(){return{title:"request",loading:!1,res:""}},methods:{sendRequest:function(e){switch(this.loading=!0,e){case"promise":this._requestPromise();break;case"await":this._requestAwait();break;default:this._request();break}},_request:function(){var t=this;e.request({url:u,dataType:"text",data:{noncestr:Date.now()},success:function(n){console.log("request success",n),e.showToast({title:"请求成功",icon:"success",mask:!0,duration:2e3}),t.res="请求结果 : "+JSON.stringify(n)},fail:function(t){console.log("request fail",t),e.showModal({content:t.errMsg,showCancel:!1})},complete:function(){t.loading=!1}})},_requestPromise:function(){var t=this;e.request({url:u,dataType:"text",data:{noncestr:Date.now()}}).then((function(n){console.log("request success",n[1]),e.showToast({title:"请求成功",icon:"success",mask:!0,duration:2e3}),t.res="请求结果 : "+JSON.stringify(n[1]),t.loading=!1})).catch((function(n){console.log("request fail",n),e.showModal({content:n.errMsg,showCancel:!1}),t.loading=!1}))},_requestAwait:function(){var t=this;return(0,r.default)(s.default.mark((function n(){var a,r,c,i;return s.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.request({url:u,dataType:"text",data:{noncestr:Date.now()}});case 2:c=n.sent,i=(0,o.default)(c,2),r=i[0],a=i[1],r?(console.log("request fail",r),e.showModal({content:r.errMsg,showCancel:!1})):(console.log("request success",a),e.showToast({title:"请求成功",icon:"success",mask:!0,duration:2e3}),t.res="请求结果 : "+JSON.stringify(a)),t.loading=!1;case 8:case"end":return n.stop()}}),n)})))()}}};t.default=c}).call(this,n("543d")["default"])},c6bf:function(e,t,n){"use strict";n.r(t);var a=n("1a63"),s=n("5f3b");for(var o in s)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(o);var r=n("f0c5"),u=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=u.exports}},[["5021","common/runtime","common/vendor"]]]);