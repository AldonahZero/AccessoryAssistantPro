(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/websocket-global/websocket-global"],{"662c":function(n,e,o){"use strict";o.r(e);var t=o("d90d"),c=o.n(t);for(var a in t)["default"].indexOf(a)<0&&function(n){o.d(e,n,(function(){return t[n]}))}(a);e["default"]=c.a},a464:function(n,e,o){},bbd3:function(n,e,o){"use strict";var t=o("a464"),c=o.n(t);c.a},d90d:function(n,e,o){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n.getSystemInfoSync().platform,t={data:function(){return{connected:!1,connecting:!1,msg:!1,roomId:""}},computed:{showMsg:function(){return this.connected?this.msg?"收到消息："+this.msg:"等待接收消息":"尚未连接"}},onUnload:function(){n.closeSocket(),n.hideLoading()},methods:{connect:function(){var e=this;if(this.connected||this.connecting)return n.showModal({content:"正在连接或者已经连接，请勿重复连接",showCancel:!1}),!1;this.connecting=!0,n.showLoading({title:"连接中..."}),n.connectSocket({url:"wss://echo.websocket.org",data:function(){return{msg:"Hello"}},header:{"content-type":"application/json"},method:"GET",success:function(n){},fail:function(n){}}),n.onSocketOpen((function(o){e.connecting=!1,e.connected=!0,n.hideLoading(),n.showToast({icon:"none",title:"连接成功"}),console.log("onOpen",o)})),n.onSocketError((function(o){e.connecting=!1,e.connected=!1,n.hideLoading(),n.showModal({content:"连接失败，可能是websocket服务不可用，请稍后再试",showCancel:!1}),console.log("onError",o)})),n.onSocketMessage((function(n){e.msg=n.data,console.log("onMessage",n)})),n.onSocketClose((function(n){e.connected=!1,e.startRecive=!1,e.msg=!1,console.log("onClose",n)}))},send:function(){n.sendSocketMessage({data:"from "+o+" : "+parseInt(1e4*Math.random()).toString(),success:function(n){console.log(n)},fail:function(n){console.log(n)}})},close:function(){n.closeSocket()}}};e.default=t}).call(this,o("543d")["default"])},e387:function(n,e,o){"use strict";o.d(e,"b",(function(){return c})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return t}));var t={pageHead:function(){return o.e("components/page-head/page-head").then(o.bind(null,"8fe2"))}},c=function(){var n=this.$createElement;this._self._c},a=[]},ee83:function(n,e,o){"use strict";o.r(e);var t=o("e387"),c=o("662c");for(var a in c)["default"].indexOf(a)<0&&function(n){o.d(e,n,(function(){return c[n]}))}(a);o("bbd3");var i=o("f0c5"),s=Object(i["a"])(c["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],void 0);e["default"]=s.exports},fbf6:function(n,e,o){"use strict";(function(n,e){var t=o("4ea4");o("a93f"),o("4a2a");t(o("66fd"));var c=t(o("ee83"));n.__webpack_require_UNI_MP_PLUGIN__=o,e(c.default)}).call(this,o("bc2e")["default"],o("543d")["createPage"])}},[["fbf6","common/runtime","common/vendor"]]]);