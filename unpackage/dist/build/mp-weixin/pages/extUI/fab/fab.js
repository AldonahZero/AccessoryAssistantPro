(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/fab/fab"],{"1b76":function(t,n,e){},2757:function(t,n,e){"use strict";e.r(n);var i=e("78f2"),o=e("3dab");for(var c in o)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(c);e("379d");var a=e("f0c5"),r=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=r.exports},"379d":function(t,n,e){"use strict";var i=e("1b76"),o=e.n(i);o.a},"3dab":function(t,n,e){"use strict";e.r(n);var i=e("d9ec"),o=e.n(i);for(var c in i)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(c);n["default"]=o.a},"78f2":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return i}));var i={uniCard:function(){return e.e("uni_modules/uni-card/components/uni-card/uni-card").then(e.bind(null,"419f"))},uniSection:function(){return e.e("uni_modules/uni-section/components/uni-section/uni-section").then(e.bind(null,"edb5"))},uniFab:function(){return e.e("uni_modules/uni-fab/components/uni-fab/uni-fab").then(e.bind(null,"7128"))}},o=function(){var t=this.$createElement;this._self._c},c=[]},"7b1e":function(t,n,e){"use strict";(function(t,n){var i=e("4ea4");e("a93f"),e("4a2a");i(e("66fd"));var o=i(e("2757"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(o.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},d9ec:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={components:{},data:function(){return{title:"uni-fab",directionStr:"垂直",horizontal:"left",vertical:"bottom",direction:"horizontal",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#007AFF",iconColor:"#fff"},is_color_type:!1,content:[{iconPath:"/static/image.png",selectedIconPath:"/static/image-active.png",text:"相册",active:!1},{iconPath:"/static/home.png",selectedIconPath:"/static/home-active.png",text:"首页",active:!1},{iconPath:"/static/star.png",selectedIconPath:"/static/star-active.png",text:"收藏",active:!1}]}},onBackPress:function(){return!!this.$refs.fab.isShow&&(this.$refs.fab.close(),!0)},methods:{trigger:function(n){console.log(n),this.content[n.index].active=!n.item.active,t.showModal({title:"提示",content:"您".concat(this.content[n.index].active?"选中了":"取消了").concat(n.item.text),success:function(t){t.confirm?console.log("用户点击确定"):t.cancel&&console.log("用户点击取消")}})},fabClick:function(){t.showToast({title:"点击了悬浮按钮",icon:"none"})},switchBtn:function(t,n){0===t?(this.direction="horizontal"===this.direction?"vertical":"horizontal",this.directionStr="horizontal"===this.direction?"垂直":"水平"):(this.horizontal=t,this.vertical=n),this.$forceUpdate()},switchColor:function(){this.is_color_type=!this.is_color_type,this.is_color_type?(this.pattern.iconColor="#aaa",this.pattern.buttonColor="#fff"):(this.pattern.iconColor="#fff",this.pattern.buttonColor="#007AFF")}}};n.default=e}).call(this,e("543d")["default"])}},[["7b1e","common/runtime","common/vendor"]]]);