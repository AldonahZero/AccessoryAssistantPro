(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/upload-file/upload-file"],{"2ec9":function(e,n,t){"use strict";t.r(n);var o=t("8b3d"),a=t("da7e");for(var c in a)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(c);t("6bcb");var u=t("f0c5"),i=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=i.exports},"6bcb":function(e,n,t){"use strict";var o=t("9046"),a=t.n(o);a.a},"8b3d":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return o}));var o={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,"8fe2"))}},a=function(){var e=this.$createElement;this._self._c},c=[]},9046:function(e,n,t){},"9f32":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{title:"uploadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{chooseImage:function(){var n=this;e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){console.log("chooseImage success, temp path is",t.tempFilePaths[0]);var o=t.tempFilePaths[0];e.uploadFile({url:"https://unidemo.dcloud.net.cn/upload",filePath:o,fileType:"image",name:"data",success:function(t){console.log("uploadImage success, res is:",t),e.showToast({title:"上传成功",icon:"success",duration:1e3}),n.imageSrc=o},fail:function(n){console.log("uploadImage fail",n),e.showModal({content:n.errMsg,showCancel:!1})}})},fail:function(n){console.log("chooseImage fail",n),e.getSetting({success:function(n){var t=n.authSetting["scope.album"];t||e.showModal({title:"授权失败",content:"Hello uni-app需要从您的相册获取图片，请在设置界面打开相关权限",success:function(n){n.confirm&&e.openSetting()}})}})}})}}};n.default=t}).call(this,t("543d")["default"])},d976:function(e,n,t){"use strict";(function(e,n){var o=t("4ea4");t("a93f"),t("4a2a");o(t("66fd"));var a=o(t("2ec9"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(a.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},da7e:function(e,n,t){"use strict";t.r(n);var o=t("9f32"),a=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(c);n["default"]=a.a}},[["d976","common/runtime","common/vendor"]]]);