(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-popup/components/uni-popup-message/uni-popup-message"],{"7e8d":function(t,e,n){"use strict";n.r(e);var u=n("b3c2"),i=n("e975");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("e629");var a=n("f0c5"),s=Object(a["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],void 0);e["default"]=s.exports},b3c2:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var u=function(){var t=this.$createElement;this._self._c},i=[]},d1b0:function(t,e,n){"use strict";var u=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n("e45c")),o={name:"uniPopupMessage",mixins:[i.default],props:{type:{type:String,default:"success"},message:{type:String,default:""},duration:{type:Number,default:3e3},maskShow:{type:Boolean,default:!1}},data:function(){return{}},created:function(){this.popup.maskShow=this.maskShow,this.popup.messageChild=this},methods:{timerClose:function(){var t=this;0!==this.duration&&(clearTimeout(this.timer),this.timer=setTimeout((function(){t.popup.close()}),this.duration))}}};e.default=o},d81d:function(t,e,n){},e629:function(t,e,n){"use strict";var u=n("d81d"),i=n.n(u);i.a},e975:function(t,e,n){"use strict";n.r(e);var u=n("d1b0"),i=n.n(u);for(var o in u)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(o);e["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-popup/components/uni-popup-message/uni-popup-message-create-component',
    {
        'uni_modules/uni-popup/components/uni-popup-message/uni-popup-message-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7e8d"))
        })
    },
    [['uni_modules/uni-popup/components/uni-popup-message/uni-popup-message-create-component']]
]);