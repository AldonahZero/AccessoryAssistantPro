(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/countdown/countdown"],{"2e3f":function(n,t,e){},4506:function(n,t,e){"use strict";var u=e("2e3f"),o=e.n(u);o.a},"45cf":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return u}));var u={uniCard:function(){return e.e("uni_modules/uni-card/components/uni-card/uni-card").then(e.bind(null,"419f"))},uniSection:function(){return e.e("uni_modules/uni-section/components/uni-section/uni-section").then(e.bind(null,"edb5"))},uniCountdown:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-countdown/components/uni-countdown/uni-countdown")]).then(e.bind(null,"269c"))}},o=function(){var n=this.$createElement;this._self._c},i=[]},"5cc2":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={components:{},data:function(){return{testHour:1,testMinute:0,testSecond:0,start:!1,timeupSecond:10}},mounted:function(){var n=this;setTimeout((function(){n.testHour=1,n.testMinute=1,n.testSecond=0,n.start=!0}),3e3),setTimeout((function(){n.start=!1}),1e4)},methods:{timeup:function(){n.showToast({title:"时间到"}),this.timeupSecond=29}}};t.default=e}).call(this,e("543d")["default"])},"69f3":function(n,t,e){"use strict";(function(n,t){var u=e("4ea4");e("a93f"),e("4a2a");u(e("66fd"));var o=u(e("6ae3"));n.__webpack_require_UNI_MP_PLUGIN__=e,t(o.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},"6ae3":function(n,t,e){"use strict";e.r(t);var u=e("45cf"),o=e("f44a");for(var i in o)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(i);e("4506");var c=e("f0c5"),r=Object(c["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],void 0);t["default"]=r.exports},f44a:function(n,t,e){"use strict";e.r(t);var u=e("5cc2"),o=e.n(u);for(var i in u)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(i);t["default"]=o.a}},[["69f3","common/runtime","common/vendor"]]]);