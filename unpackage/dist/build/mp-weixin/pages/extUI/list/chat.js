(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extUI/list/chat"],{"00e7":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var i={uniCard:function(){return e.e("uni_modules/uni-card/components/uni-card/uni-card").then(e.bind(null,"419f"))},uniSection:function(){return e.e("uni_modules/uni-section/components/uni-section/uni-section").then(e.bind(null,"edb5"))},uniList:function(){return e.e("uni_modules/uni-list/components/uni-list/uni-list").then(e.bind(null,"992d"))},uniListChat:function(){return e.e("uni_modules/uni-list/components/uni-list-chat/uni-list-chat").then(e.bind(null,"8a1c"))},uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(e.bind(null,"4b16"))}},a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.listData,(function(n,e){var i=t.__get_orig(n),a=t.avatar(e+1);return{$orig:i,m0:a}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},u=[]},"57dc":function(t,n,e){"use strict";var i=e("9e80"),a=e.n(i);a.a},"67dd":function(t,n,e){"use strict";e.r(n);var i=e("81a6"),a=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=a.a},"81a6":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={components:{},data:function(){return{UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},listData:[],avatarList:[{url:"/static/logo.png"},{url:"/static/logo.png"},{url:"/static/logo.png"}]}},onLoad:function(){this.getList()},methods:{onClick:function(){t.showToast({title:"列表被点击"})},avatar:function(t){var n=[];return this.avatarList.forEach((function(e,i){i<t&&n.push(e)})),n},getList:function(){var n=this;t.request({url:"https://unidemo.dcloud.net.cn/api/news",data:{column:"id,post_id,title,author_name,cover,published_at"},success:function(t){if(200==t.statusCode){var e=n.setTime(t.data);e=n.reload?e:n.listData.concat(e),e.map((function(t){return t.text=Math.floor(-19*Math.random()+20),t})),n.listData=n.getRandomArrayElements(e,3)}},fail:function(t,n){console.log("fail"+JSON.stringify(t))}})},getRandomArrayElements:function(t,n){var e,i,a=t.slice(0),u=t.length,o=u-n;while(u-- >o)i=Math.floor((u+1)*Math.random()),e=a[i],a[i]=a[u],a[u]=e;return a.slice(o)},setTime:function(t){var n=this,e=[];return t.forEach((function(t){e.push({author_name:t.author_name,cover:t.cover,id:t.id,post_id:t.post_id,published_at:n.format(t.published_at),title:t.title})})),e},format:function(t){var n=this.parse(t),e=Date.now()-n.getTime();if(e<this.UNITS["天"])return this.humanize(e);var i=function(t){return t<10?"0"+t:t};return n.getFullYear()+"-"+i(n.getMonth()+1)+"-"+i(n.getDate())+" "+i(n.getHours())+":"+i(n.getMinutes())},parse:function(t){var n=t.split(/[^0-9]/);return new Date(n[0],n[1]-1,n[2],n[3],n[4],n[5])}}};n.default=e}).call(this,e("543d")["default"])},"8fad":function(t,n,e){"use strict";e.r(n);var i=e("00e7"),a=e("67dd");for(var u in a)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("57dc");var o=e("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=r.exports},"9e80":function(t,n,e){},ca26:function(t,n,e){"use strict";(function(t,n){var i=e("4ea4");e("a93f"),e("4a2a");i(e("66fd"));var a=i(e("8fad"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(a.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])}},[["ca26","common/runtime","common/vendor"]]]);