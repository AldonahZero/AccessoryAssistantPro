(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/background-audio/background-audio"],{"21c9":function(a,e,t){"use strict";var n=t("3d74"),i=t.n(n);i.a},"3c7e":function(a,e,t){"use strict";t.r(e);var n=t("e20c"),i=t.n(n);for(var o in n)["default"].indexOf(o)<0&&function(a){t.d(e,a,(function(){return n[a]}))}(o);e["default"]=i.a},"3d74":function(a,e,t){},"49f5":function(a,e,t){"use strict";(function(a,e){var n=t("4ea4");t("a93f"),t("4a2a");n(t("66fd"));var i=n(t("bf2d"));a.__webpack_require_UNI_MP_PLUGIN__=t,e(i.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},bf2d:function(a,e,t){"use strict";t.r(e);var n=t("c0e5"),i=t("3c7e");for(var o in i)["default"].indexOf(o)<0&&function(a){t.d(e,a,(function(){return i[a]}))}(o);t("21c9");var r=t("f0c5"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=u.exports},c0e5:function(a,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return n}));var n={pageHead:function(){return t.e("components/page-head/page-head").then(t.bind(null,"8fe2"))}},i=function(){var a=this.$createElement;this._self._c},o=[]},e20c:function(a,e,t){"use strict";(function(a){var n=t("7037");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(a,e){if(!e&&a&&a.__esModule)return a;if(null===a||"object"!==n(a)&&"function"!==typeof a)return{default:a};var t=o(e);if(t&&t.has(a))return t.get(a);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in a)if("default"!==u&&Object.prototype.hasOwnProperty.call(a,u)){var c=r?Object.getOwnPropertyDescriptor(a,u):null;c&&(c.get||c.set)?Object.defineProperty(i,u,c):i[u]=a[u]}i.default=a,t&&t.set(a,i);return i}(t("4683"));function o(a){if("function"!==typeof WeakMap)return null;var e=new WeakMap,t=new WeakMap;return(o=function(a){return a?t:e})(a)}var r={data:function(){return{title:"backgroundAudio",bgAudioMannager:null,dataUrl:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3",playing:!1,playTime:0,formatedPlayTime:"00:00:00"}},onLoad:function(){var e=this;this.playing=this.$backgroundAudioData.playing,this.playTime=this.$backgroundAudioData.playTime,this.formatedPlayTime=this.$backgroundAudioData.formatedPlayTime;var t=a.getBackgroundAudioManager();t.title||(t.title="致爱丽丝"),t.singer||(t.singer="暂无"),t.coverImgUrl||(t.coverImgUrl="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/c517b410-5184-11eb-b997-9918a5dda011.jpeg"),t.onPlay((function(){console.log("开始播放"),e.$backgroundAudioData.playing=e.playing=!0})),t.onPause((function(){console.log("暂停播放"),e.$backgroundAudioData.playing=e.playing=!1})),t.onEnded((function(){e.playing=!1,e.$backgroundAudioData.playing=!1,e.$backgroundAudioData.playTime=e.playTime=0,e.$backgroundAudioData.formatedPlayTime=e.formatedPlayTime=i.formatTime(0)})),t.onTimeUpdate((function(a){Math.floor(t.currentTime)>Math.floor(e.playTime)&&(e.$backgroundAudioData.formatedPlayTime=e.formatedPlayTime=i.formatTime(Math.floor(t.currentTime))),e.$backgroundAudioData.playTime=e.playTime=t.currentTime})),this.bgAudioMannager=t},methods:{play:function(a){this.bgAudioMannager.src?(this.bgAudioMannager.seek(this.playTime),this.bgAudioMannager.play()):(this.bgAudioMannager.startTime=this.playTime,this.bgAudioMannager.src=this.dataUrl)},seek:function(a){this.bgAudioMannager.seek(a.detail.value)},pause:function(){this.bgAudioMannager.pause()},stop:function(){this.bgAudioMannager.stop(),this.$backgroundAudioData.playing=this.playing=!1,this.$backgroundAudioData.playTime=this.playTime=0,this.$backgroundAudioData.formatedPlayTime=this.formatedPlayTime=i.formatTime(0)}}};e.default=r}).call(this,t("543d")["default"])}},[["49f5","common/runtime","common/vendor"]]]);