(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/voice/voice"],{"087a":function(e,t,n){},"360a":function(e,t,n){"use strict";(function(e,t){var r=n("4ea4");n("a93f"),n("4a2a");r(n("66fd"));var o=r(n("f590"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"6e1f":function(e,t,n){"use strict";n.r(t);var r=n("9324"),o=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},9324:function(e,t,n){"use strict";(function(e){var r=n("4ea4"),o=n("7037");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("2eee")),i=r(n("c973")),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=a?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(r,i,c):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n("4683"));function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}var u=null,f=null,d=null,s=null,p={data:function(){return{title:"start/stopRecord、play/stopVoice",recording:!1,playing:!1,hasRecord:!1,tempFilePath:"",recordTime:0,playTime:0,formatedRecordTime:"00:00:00",formatedPlayTime:"00:00:00"}},onUnload:function(){this.end()},onLoad:function(){var t=this;s=e.createInnerAudioContext(),s.onEnded((function(){clearInterval(u);console.log("play voice finished"),t.playing=!1,t.formatedPlayTime=c.formatTime(0),t.playTime=0})),d=e.getRecorderManager(),d.onStart((function(){console.log("recorder start"),t.recording=!0,f=setInterval((function(){t.recordTime+=1,t.formatedRecordTime=c.formatTime(t.recordTime)}),1e3)})),d.onStop((function(e){console.log("on stop"),s.src=e.tempFilePath,t.hasRecord=!0,t.recording=!1})),d.onError((function(){console.log("recorder onError")}))},methods:{startRecord:function(){return(0,i.default)(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:d.start({format:"mp3"});case 1:case"end":return e.stop()}}),e)})))()},stopRecord:function(){d.stop(),clearInterval(f)},playVoice:function(){var e=this;console.log("play voice"),this.playing=!0,u=setInterval((function(){e.playTime+=1,e.formatedPlayTime=c.formatTime(e.playTime)}),1e3),s.play()},stopVoice:function(){clearInterval(u),this.playing=!1,this.formatedPlayTime=c.formatTime(0),this.playTime=0,s.stop()},end:function(){s.stop(),d.stop(),clearInterval(f),clearInterval(u),this.recording=!1,this.playing=!1,this.hasRecord=!1,this.playTime=0,this.recordTime=0,this.formatedRecordTime="00:00:00",this.formatedRecordTime="00:00:00"},clear:function(){this.end()}}};t.default=p}).call(this,n("543d")["default"])},a133:function(e,t,n){"use strict";var r=n("087a"),o=n.n(r);o.a},ae34:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var r={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,"8fe2"))}},o=function(){var e=this.$createElement;this._self._c},a=[]},f590:function(e,t,n){"use strict";n.r(t);var r=n("ae34"),o=n("6e1f");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("a133");var i=n("f0c5"),c=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);t["default"]=c.exports}},[["360a","common/runtime","common/vendor"]]]);