(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/swipe-action/swipe-action"],{"0fd3":function(n,t,e){"use strict";e.r(t);var o=e("2d85"),i=e.n(o);for(var c in o)["default"].indexOf(c)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(c);t["default"]=i.a},"1fb2":function(n,t,e){},"2d85":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={components:{},data:function(){return{show:!1,isOpened:"none",options1:[{text:"取消置顶"}],options2:[{text:"取消",style:{backgroundColor:"#007aff"}},{text:"确认",style:{backgroundColor:"#F56C6C"}}],swipeList:[{options:[{text:"添加",style:{backgroundColor:"#F56C6C"}}],id:0,content:"左滑点击添加新增一条数据"},{id:1,options:[{text:"置顶"},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"item2"},{id:2,options:[{text:"置顶"},{text:"标记为已读",style:{backgroundColor:"rgb(254,156,1)"}},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"item3"}]}},onReady:function(){var t=this;setTimeout((function(){t.isOpened="right"}),1e3),n.$on("update",(function(n){console.log(111),t.swipeClick({content:{text:"添加"}})}))},methods:{contentClick:function(){console.log("点击内容"),n.showToast({title:"点击内容",icon:"none"})},bindClick:function(t){console.log(t),n.showToast({title:"点击了".concat("left"===t.position?"左侧":"右侧"," ").concat(t.content.text,"按钮"),icon:"none"})},setOpened:function(){"none"!==this.isOpened?"left"!==this.isOpened?"right"!==this.isOpened||(this.isOpened="none"):this.isOpened="right":this.isOpened="left"},change:function(n){this.isOpened=n,console.log("返回：",n)},swipeChange:function(n,t){console.log("返回：",n),console.log("当前索引：",t)},swipeClick:function(t,e){var o=this,i=t.content;"删除"===i.text?n.showModal({title:"提示",content:"是否删除",success:function(n){n.confirm?o.swipeList.splice(e,1):n.cancel&&console.log("用户点击取消")}}):"添加"===i.text?this.swipeList.length<10?(this.swipeList.push({id:(new Date).getTime(),options:[{text:"置顶"},{text:"标记为已读",style:{backgroundColor:"rgb(254,156,1)"}},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"新增"+(new Date).getTime()}),n.showToast({title:"添加了一条数据",icon:"none"})):n.showToast({title:"最多添加十条数据",icon:"none"}):n.showToast({title:"点击了".concat(t.content.text,"按钮"),icon:"none"})}}};t.default=e}).call(this,e("543d")["default"])},"87ee":function(n,t,e){"use strict";e.r(t);var o=e("b5e4"),i=e("0fd3");for(var c in i)["default"].indexOf(c)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(c);e("9129");var s=e("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);t["default"]=u.exports},9129:function(n,t,e){"use strict";var o=e("1fb2"),i=e.n(o);i.a},"9af7":function(n,t,e){"use strict";(function(n,t){var o=e("4ea4");e("a93f"),e("4a2a");o(e("66fd"));var i=o(e("87ee"));n.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},b5e4:function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return o}));var o={uniCard:function(){return e.e("uni_modules/uni-card/components/uni-card/uni-card").then(e.bind(null,"419f"))},uniSection:function(){return e.e("uni_modules/uni-section/components/uni-section/uni-section").then(e.bind(null,"edb5"))},uniSwipeAction:function(){return e.e("uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action").then(e.bind(null,"6e2b"))},uniSwipeActionItem:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item")]).then(e.bind(null,"824b"))}},i=function(){var n=this.$createElement;this._self._c},c=[]}},[["9af7","common/runtime","common/vendor"]]]);