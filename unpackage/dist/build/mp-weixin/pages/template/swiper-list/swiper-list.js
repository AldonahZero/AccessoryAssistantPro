(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/swiper-list/swiper-list"],{"3ee1":function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={components:{swiperPage:function(){a.e("pages/template/swiper-list/swiper-page").then(function(){return resolve(a("9f14"))}.bind(null,a)).catch(a.oe)}},data:function(){return{tabList:[],tabIndex:0,cacheTab:[],scrollInto:"",indicatorLineLeft:0,indicatorLineWidth:0,isTap:!1}},onLoad:function(){for(var t=0;t<6;t++)this.tabList.push({id:"tab"+t,name:"Tab "+(t+1),pageid:t+1})},onReady:function(){this._lastTabIndex=0,this.swiperWidth=0,this.tabbarWidth=0,this.tabListSize={},this._touchTabIndex=0,this.pageList=this.$refs.page,this.switchTab(this.tabIndex),this.getTabbarItemsSize()},methods:{ontabtap:function(t){var i=t.target.dataset.current||t.currentTarget.dataset.current;this.isTap=!0;var a=this.tabListSize[i];this.updateIndicator(a.left,a.width),this._touchTabIndex=i,this.switchTab(i)},onswiperchange:function(t){},onswiperscroll:function(t){if(!this.isTap){var i=t.detail.dx,a=this._lastTabIndex;if(i>1?a++:i<-1&&a--,!(a===this._lastTabIndex||a<0||a>this.pageList.length-1)){0===this.pageList[a].dataList.length&&this.loadTabData(a);var e=Math.abs(this.swiperWidth/i),s=this.tabListSize[this._lastTabIndex],n=this.tabListSize[a],c=s.left+(n.left-s.left)/e,h=s.width+(n.width-s.width)/e;this.updateIndicator(c,h)}}},animationfinish:function(t){var i=t.detail.current;this._touchTabIndex===i&&(this.isTap=!1),this._lastTabIndex=i,this.switchTab(i),this.updateIndicator(this.tabListSize[i].left,this.tabListSize[i].width)},getTabbarItemsSize:function(){var i=this;t.createSelectorQuery().in(this).select(".tab-view").fields({dataset:!0,size:!0},(function(t){i.swiperWidth=t.width})).exec(),t.createSelectorQuery().in(this).selectAll(".uni-tab-item").boundingClientRect((function(t){t.forEach((function(t){i.tabListSize[t.dataset.id]=t}))})).exec(),setTimeout((function(){i.updateIndicator(i.tabListSize[i.tabIndex].left,i.tabListSize[i.tabIndex].width)}),100)},updateIndicator:function(t,i){this.indicatorLineLeft=t,this.indicatorLineWidth=i},switchTab:function(t){if(0===this.pageList[t].dataList.length&&this.loadTabData(t),this.tabIndex!==t){if(this.pageList[this.tabIndex].dataList.length>100){var i=this.cacheTab.indexOf(this.tabIndex);i<0&&this.cacheTab.push(this.tabIndex)}if(this.tabIndex=t,this.scrollInto=this.tabList[t].id,this.cacheTab.length>3){var a=this.cacheTab[0];this.clearTabData(a),this.cacheTab.splice(0,1)}}},scrollTabTo:function(t){var i=this.$refs["tabitem"+t][0],a=0;t>0&&(a=this.tabbarWidth/2-this.tabListSize[t].width/2,this.tabListSize[t].right<this.tabbarWidth/2&&(a=this.tabListSize[0].width)),dom.scrollToElement(i,{offset:-a})},loadTabData:function(t){this.pageList[t].loadData()},clearTabData:function(t){this.pageList[t].clear()}}};i.default=e}).call(this,a("543d")["default"])},"400f":function(t,i,a){},4647:function(t,i,a){"use strict";var e=a("400f"),s=a.n(e);s.a},9319:function(t,i,a){"use strict";a.r(i);var e=a("fadd"),s=a("933f");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(i,t,(function(){return s[t]}))}(n);a("4647"),a("d3f5");var c=a("f0c5"),h=Object(c["a"])(s["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);i["default"]=h.exports},"933f":function(t,i,a){"use strict";a.r(i);var e=a("3ee1"),s=a.n(e);for(var n in e)["default"].indexOf(n)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(n);i["default"]=s.a},af0a:function(t,i,a){"use strict";(function(t,i){var e=a("4ea4");a("a93f"),a("4a2a");e(a("66fd"));var s=e(a("9319"));t.__webpack_require_UNI_MP_PLUGIN__=a,i(s.default)}).call(this,a("bc2e")["default"],a("543d")["createPage"])},d3f5:function(t,i,a){"use strict";var e=a("fe81"),s=a.n(e);s.a},fadd:function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){}));var e=function(){var t=this.$createElement;this._self._c},s=[]},fe81:function(t,i,a){}},[["af0a","common/runtime","common/vendor"]]]);