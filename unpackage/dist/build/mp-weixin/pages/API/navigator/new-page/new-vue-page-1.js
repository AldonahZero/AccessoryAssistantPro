(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/navigator/new-page/new-vue-page-1"],{"27e4":function(e,t,n){"use strict";(function(e,t){var a=n("4ea4");n("e9f3"),n("4a2a");a(n("66fd"));var r=a(n("f602"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(r.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"4b12":function(e,t,n){"use strict";var a=n("c169"),r=n.n(a);r.a},"90be":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,"dd4e"))}},r=function(){var e=this.$createElement;this._self._c},o=[]},ad0a:function(e,t,n){"use strict";n.r(t);var a=n("d1ab"),r=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=r.a},c169:function(e,t,n){},d1ab:function(e,t,n){"use strict";(function(e){var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("9523")),o=n("26cb");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={data:function(){return{title:"新页面",data:""}},computed:u(u({},(0,o.mapState)(["colorIndex","colorList"])),(0,o.mapGetters)(["currentColor"])),onLoad:function(t){t.data&&(this.data=t.data),e.$on("postMsg",(function(t){e.showModal({content:"收到uni.$emit消息:".concat(t.msg),showCancel:!1})}))},onUnload:function(){e.$off("postMsg")},methods:u(u({},(0,o.mapMutations)(["setColorIndex"])),{},{navToNvue:function(){e.navigateTo({url:"new-nvue-page-1"})},navToVue:function(){e.navigateTo({url:"new-vue-page-2"})}})};t.default=i}).call(this,n("543d")["default"])},f602:function(e,t,n){"use strict";n.r(t);var a=n("90be"),r=n("ad0a");for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("4b12");var c=n("f0c5"),u=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=u.exports}},[["27e4","common/runtime","common/vendor"]]]);