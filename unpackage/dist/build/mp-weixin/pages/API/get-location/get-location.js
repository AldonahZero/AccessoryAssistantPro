(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/get-location/get-location"],{"1e76":function(t,e,n){"use strict";n.r(e);var o=n("3ca3"),i=n("76f5");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("2c94");var u=n("f0c5"),a=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=a.exports},"2c94":function(t,e,n){"use strict";var o=n("b7f8"),i=n.n(o);i.a},"33f7":function(t,e,n){"use strict";(function(t){var o=n("4ea4"),i=n("7037");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("2eee")),u=o(n("c973")),a=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==i(t)&&"function"!==typeof t)return{default:t};var n=c(e);if(n&&n.has(t))return n.get(t);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&Object.prototype.hasOwnProperty.call(t,u)){var a=r?Object.getOwnPropertyDescriptor(t,u):null;a&&(a.get||a.set)?Object.defineProperty(o,u,a):o[u]=t[u]}o.default=t,n&&n.set(t,o);return o}(n("4683"));function c(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(c=function(t){return t?n:e})(t)}var s=a.formatLocation,f={data:function(){return{title:"getLocation",hasLocation:!1,location:{},type:""}},methods:{togglePopup:function(t){this.type=t},showConfirm:function(){this.type="showpopup"},hideConfirm:function(){this.type=""},getLocation:function(){var t=this;return(0,u.default)(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getSetting();case 2:if(n=e.sent,2!==n){e.next=6;break}return t.showConfirm(),e.abrupt("return");case 6:t.doGetLocation();case 7:case"end":return e.stop()}}),e)})))()},doGetLocation:function(){var e=this;t.getLocation({success:function(t){e.hasLocation=!0,e.location=s(t.longitude,t.latitude)},fail:function(e){e.errMsg.indexOf("auth deny")>=0?t.showToast({title:"访问位置被拒绝"}):t.showToast({title:e.errMsg})}})},getSetting:function(){return new Promise((function(e,n){t.getSetting({success:function(t){void 0!==t.authSetting["scope.userLocation"]?t.authSetting["scope.userLocation"]?e(1):e(2):e(0)}})}))},openSetting:function(){var e=this;this.hideConfirm(),t.openSetting({success:function(t){t.authSetting&&t.authSetting["scope.userLocation"]&&e.doGetLocation()},fail:function(t){}})},checkPermission:function(){return(0,u.default)(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!permision.isIOS){e.next=6;break}return e.next=3,permision.requestIOS("location");case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,permision.requestAndroid("android.permission.ACCESS_FINE_LOCATION");case 8:e.t0=e.sent;case 9:return n=e.t0,null===n||1===n?n=1:2===n?t.showModal({content:"系统定位已关闭",confirmText:"确定",showCancel:!1,success:function(t){}}):n.code?t.showModal({content:n.message}):t.showModal({content:"需要定位权限",confirmText:"设置",success:function(t){t.confirm&&permision.gotoAppSetting()}}),e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})))()},clear:function(){this.hasLocation=!1}}};e.default=f}).call(this,n("543d")["default"])},"3ca3":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var o={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,"8fe2"))},uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,"6882"))}},i=function(){var t=this.$createElement;this._self._c},r=[]},"76f5":function(t,e,n){"use strict";n.r(e);var o=n("33f7"),i=n.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},"95a8":function(t,e,n){"use strict";(function(t,e){var o=n("4ea4");n("a93f"),n("4a2a");o(n("66fd"));var i=o(n("1e76"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},b7f8:function(t,e,n){}},[["95a8","common/runtime","common/vendor"]]]);