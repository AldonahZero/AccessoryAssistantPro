(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar"],{"028a":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(t){return"number"===typeof t?t+"px":t},o={name:"UniNavBar",components:{statusBar:function(){e.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar").then(function(){return resolve(e("1965b"))}.bind(null,e)).catch(e.oe)}},emits:["clickLeft","clickRight","clickTitle"],props:{dark:{type:Boolean,default:!1},title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:""},backgroundColor:{type:String,default:""},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0},height:{type:[Number,String],default:44},leftWidth:{type:[Number,String],default:60},rightWidth:{type:[Number,String],default:60},stat:{type:[Boolean,String],default:""}},computed:{themeBgColor:function(){return this.dark?this.backgroundColor?this.backgroundColor:this.dark?"#333":"#FFF":this.backgroundColor||"#FFF"},themeColor:function(){return this.dark?this.color?this.color:this.dark?"#fff":"#333":this.color||"#333"},navbarHeight:function(){return i(this.height)},leftIconWidth:function(){return i(this.leftWidth)},rightIconWidth:function(){return i(this.rightWidth)}},mounted:function(){t.report&&this.stat&&""!==this.title&&t.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")},onClickTitle:function(){this.$emit("clickTitle")}}};n.default=o}).call(this,e("543d")["default"])},1901:function(t,n,e){},"1b34":function(t,n,e){"use strict";var i=e("1901"),o=e.n(i);o.a},"9d6e":function(t,n,e){"use strict";e.r(n);var i=e("028a"),o=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=o.a},b096:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var i={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(e.bind(null,"e2c8"))}},o=function(){var t=this,n=t.$createElement,e=(t._self._c,t.leftIcon.length),i=t.leftText.length,o=i?t.leftIcon.length:null,r=t.title.length,u=t.rightIcon.length,l=t.rightText.length&&!t.rightIcon.length;t.$mp.data=Object.assign({},{$root:{g0:e,g1:i,g2:o,g3:r,g4:u,g5:l}})},r=[]},dce5:function(t,n,e){"use strict";e.r(n);var i=e("b096"),o=e("9d6e");for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(r);e("1b34");var u=e("f0c5"),l=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"3d68f7c6",null,!1,i["a"],void 0);n["default"]=l.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar-create-component',
    {
        'uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("dce5"))
        })
    },
    [['uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar-create-component']]
]);
