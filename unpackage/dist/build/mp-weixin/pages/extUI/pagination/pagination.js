(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/pagination/pagination"],{6428:function(n,t,e){"use strict";(function(n,t){var i=e("4ea4");e("a93f"),e("4a2a");i(e("66fd"));var u=i(e("a963"));n.__webpack_require_UNI_MP_PLUGIN__=e,t(u.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},a963:function(n,t,e){"use strict";e.r(t);var i=e("c485"),u=e("d8c8");for(var o in u)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(o);e("e4ad");var c=e("f0c5"),a=Object(c["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=a.exports},c485:function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}));var i={uniCard:function(){return e.e("uni_modules/uni-card/components/uni-card/uni-card").then(e.bind(null,"419f"))},uniSection:function(){return e.e("uni_modules/uni-section/components/uni-section/uni-section").then(e.bind(null,"edb5"))},uniPagination:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-pagination/components/uni-pagination/uni-pagination")]).then(e.bind(null,"d561"))}},u=function(){var n=this.$createElement;this._self._c},o=[]},cc29:function(n,t,e){},d8c8:function(n,t,e){"use strict";e.r(t);var i=e("fff1"),u=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=u.a},e4ad:function(n,t,e){"use strict";var i=e("cc29"),u=e.n(i);u.a},fff1:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={components:{},data:function(){return{current:3,total:10,pageSize:10}},mounted:function(){var n=this;setTimeout((function(){n.current=5}),3e3)},methods:{add:function(){this.total+=10},reset:function(){this.total=0,this.current=1},change:function(n){console.log(n),this.current=n.current}}};t.default=i}},[["6428","common/runtime","common/vendor"]]]);