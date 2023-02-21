(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/request-payment/request-payment"],{"365d":function(e,n,t){"use strict";(function(e){var r=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t("2eee")),a=r(t("9523")),c=r(t("c973"));function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,a.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s={data:function(){return{title:"request-payment",loading:!1,price:1,providerList:[]}},onLoad:function(){},methods:{loginMpWeixin:function(){return new Promise((function(n,t){e.login({provider:"weixin",success:function(r){console.warn("此处使用uni-id处理微信小程序登录，详情参考: https://uniapp.dcloud.net.cn/uniCloud/uni-id"),e.request({url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/user-center",method:"POST",data:{action:"loginByWeixin",params:{code:r.code,platform:"mp-weixin"}},success:function(r){0===r.data.code?(e.setStorageSync("openid",r.data.openid),n(r.data.openid)):t(new Error("获取openid失败：",r.result.msg))},fail:function(e){t(new Error("获取openid失败："+e))}})},fail:function(e){t(e)}})}))},weixinPay:function(){var n=this;return(0,c.default)(o.default.mark((function t(){var r,a;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.getStorageSync("openid"),console.log("发起支付"),n.loading=!0,r){t.next=17;break}return t.prev=4,t.next=7,n.loginMpWeixin();case 7:r=t.sent,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](4),console.error(t.t0);case 13:if(r){t.next=17;break}return e.showModal({content:"获取openid失败",showCancel:!1}),n.loading=!1,t.abrupt("return");case 17:return n.openid=r,t.next=20,n.getOrderInfo("wxpay");case 20:if(a=t.sent,a){t.next=24;break}return e.showModal({content:"获取支付信息失败",showCancel:!1}),t.abrupt("return");case 24:e.requestPayment(u(u({},a),{},{success:function(n){e.showToast({title:"感谢您的赞助!"})},fail:function(n){e.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})},complete:function(){n.loading=!1}}));case 25:case"end":return t.stop()}}),t,null,[[4,10]])})))()},requestPayment:function(n,t){var r=this;return(0,c.default)(o.default.mark((function a(){var c,i;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return r.providerList[t].loading=!0,c=n.id,o.next=4,r.getOrderInfo(c);case 4:if(i=o.sent,i){o.next=8;break}return e.showModal({content:"获取支付信息失败",showCancel:!1}),o.abrupt("return");case 8:console.log("--------orderInfo--------"),console.log(i),e.requestPayment({provider:c,orderInfo:i,success:function(n){console.log("success",n),e.showToast({title:"感谢您的赞助!"})},fail:function(n){console.log("fail",n),e.showModal({content:"支付失败,原因为: "+n.errMsg,showCancel:!1})},complete:function(){r.providerList[t].loading=!1}});case 11:case"end":return o.stop()}}),a)})))()},getOrderInfo:function(n){var t=this;return new Promise((function(r,o){t.price||o(new Error("请输入金额")),console.warn("此处使用uni-pay处理支付，详情参考: https://uniapp.dcloud.io/uniCloud/unipay"),e.request({method:"POST",url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/pay",data:{provider:n,openid:t.openid,totalFee:100*Number(t.price),platform:"mp-weixin"},success:function(e){0===e.data.code?r(e.data.orderInfo):o(new Error("获取支付信息失败"+e.data.msg))},fail:function(e){o(new Error("请求支付接口失败"+e))}})}))},priceChange:function(e){console.log(e.detail.value),this.price=e.detail.value}}};n.default=s}).call(this,t("543d")["default"])},"4ee3":function(e,n,t){"use strict";t.r(n);var r=t("606c"),o=t("8209");for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t("9f69");var c=t("f0c5"),i=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);n["default"]=i.exports},"606c":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var r={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,"8fe2"))}},o=function(){var e=this.$createElement;this._self._c},a=[]},8209:function(e,n,t){"use strict";t.r(n);var r=t("365d"),o=t.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},"9f69":function(e,n,t){"use strict";var r=t("d34d"),o=t.n(r);o.a},a4647:function(e,n,t){"use strict";(function(e,n){var r=t("4ea4");t("a93f"),t("4a2a");r(t("66fd"));var o=r(t("4ee3"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},d34d:function(e,n,t){}},[["a4647","common/runtime","common/vendor"]]]);