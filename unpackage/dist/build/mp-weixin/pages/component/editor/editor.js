(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/editor/editor"],{1861:function(t,e,n){"use strict";(function(t,e){var o=n("4ea4");n("e9f3"),n("4a2a");o(n("66fd"));var i=o(n("e2f98"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"33f1":function(t,e,n){"use strict";n.r(e);var o=n("d793"),i=n.n(o);for(var c in o)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e["default"]=i.a},"97b4":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this.$createElement;this._self._c},i=[]},a1a9:function(t,e,n){},d4d0:function(t,e,n){"use strict";var o=n("a1a9"),i=n.n(o);i.a},d793:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{readOnly:!1,formats:{}}},methods:{readOnlyChange:function(){this.readOnly=!this.readOnly},onEditorReady:function(){var e=this;t.createSelectorQuery().select("#editor").context((function(t){e.editorCtx=t.context})).exec()},undo:function(){this.editorCtx.undo()},redo:function(){this.editorCtx.redo()},format:function(t){var e=t.target.dataset,n=e.name,o=e.value;n&&this.editorCtx.format(n,o)},onStatusChange:function(t){var e=t.detail;this.formats=e},insertDivider:function(){this.editorCtx.insertDivider({success:function(){console.log("insert divider success")}})},clear:function(){this.editorCtx.clear({success:function(t){console.log("clear success")}})},removeFormat:function(){this.editorCtx.removeFormat()},insertDate:function(){var t=new Date,e="".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.getDate());this.editorCtx.insertText({text:e})},insertImage:function(){var e=this;t.chooseImage({count:1,success:function(t){e.editorCtx.insertImage({src:t.tempFilePaths[0],alt:"图像",success:function(){console.log("insert image success")}})}})}},onLoad:function(){t.loadFontFace({family:"Pacifico",source:'url("https://sungd.github.io/Pacifico.ttf")'})}};e.default=n}).call(this,n("543d")["default"])},e2f98:function(t,e,n){"use strict";n.r(e);var o=n("97b4"),i=n("33f1");for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("d4d0");var a=n("f0c5"),r=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=r.exports}},[["1861","common/runtime","common/vendor"]]]);