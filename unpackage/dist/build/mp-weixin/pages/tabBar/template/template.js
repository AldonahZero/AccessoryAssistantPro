(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/template/template"],{1236:function(t,e,n){"use strict";var a=n("c508"),i=n.n(a);i.a},"479b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{hasLeftWin:{type:Boolean},leftWinActive:{type:String}},data:function(){return{hideList:["ucharts","nav-city-dropdown"],list:[{name:"顶部选项卡",url:"tabbar"},{name:"组件通讯",url:"component-communication"},{name:"列表到详情示例",url:"list2detail-list"},{name:"GlobalData和vuex",url:"global"}]}},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/template/template"}},onNavigationBarButtonTap:function(e){t.navigateTo({url:"/pages/about/about"})},methods:{triggerCollapse:function(t,e){if(this.list[t].pages)for(var n=0;n<this.list.length;++n)this.list[n].open=t===n&&!this.list[n].open;else this.goDetailPage(this.list[t].url)},goDetailPage:function(e){var n=e.url?e.url:e,a=~n.indexOf("platform")?n:"/pages/template/"+n+"/"+n;return this.hasLeftWin?t.reLaunch({url:a}):t.navigateTo({url:a}),!1}}};e.default=n}).call(this,n("543d")["default"])},"4fe3":function(t,e,n){},"69a8":function(t,e,n){"use strict";var a=n("4fe3"),i=n.n(a);i.a},c4c1:function(t,e,n){"use strict";n.r(e);var a=n("479b"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},c508:function(t,e,n){},e852:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uLink:function(){return n.e("components/u-link/u-link").then(n.bind(null,"82c5"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.list,(function(e,n){var a=t.__get_orig(e),i=-1!==t.hideList.indexOf(e.url)&&t.hasLeftWin,r=e.open?t.__map(e.pages,(function(e,n){var a=t.__get_orig(e),i=-1!==t.hideList.indexOf(e.url)&&t.hasLeftWin;return{$orig:a,g1:i}})):null;return{$orig:a,g0:i,l0:r}})));t.$mp.data=Object.assign({},{$root:{l1:n}})},r=[]},f169:function(t,e,n){"use strict";(function(t,e){var a=n("4ea4");n("a93f"),n("4a2a");a(n("66fd"));var i=a(n("fe82"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},fe82:function(t,e,n){"use strict";n.r(e);var a=n("e852"),i=n("c4c1");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("69a8"),n("1236");var u=n("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=o.exports}},[["f169","common/runtime","common/vendor"]]]);