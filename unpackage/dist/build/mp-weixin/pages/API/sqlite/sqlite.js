(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/sqlite/sqlite"],{"030d":function(e,t,n){},"0b17":function(e,t,n){"use strict";(function(e,t){var a=n("4ea4");n("a93f"),n("4a2a");a(n("66fd"));var s=a(n("bb84"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(s.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"158c":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={pageHead:function(){return n.e("components/page-head/page-head").then(n.bind(null,"8fe2"))}},s=function(){var e=this.$createElement;this._self._c},i=[]},"354a":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{title:"SQLite"}},methods:{openDB:function(){plus.sqlite.openDatabase({name:"first",path:"_doc/test.db",success:function(e){plus.nativeUI.alert("打开数据库test.db成功 ")},fail:function(e){plus.nativeUI.alert("打开数据库test.db失败: "+JSON.stringify(e))}})},executeSQL:function(){plus.sqlite.executeSql({name:"first",sql:'create table if not exists database("name" CHAR(110),"sex" CHAR(10),"age" INT(11))',success:function(e){plus.sqlite.executeSql({name:"first",sql:"insert into database values('彦','女','7000')",success:function(e){plus.nativeUI.alert("创建表table和插入数据成功")},fail:function(e){plus.nativeUI.alert("创建表table成功但插入数据失败: "+JSON.stringify(e))}})},fail:function(e){plus.nativeUI.alert("创建表table失败: "+JSON.stringify(e))}})},selectSQL:function(){plus.sqlite.selectSql({name:"first",sql:"select * from database",success:function(e){plus.nativeUI.alert("查询SQL语句成功: "+JSON.stringify(e))},fail:function(e){plus.nativeUI.alert("查询SQL语句失败: "+JSON.stringify(e))}})},droptable:function(){plus.sqlite.executeSql({name:"first",sql:"drop table database",success:function(e){plus.nativeUI.alert("删除表database成功")},fail:function(e){plus.nativeUI.alert("删除表database失败: "+JSON.stringify(e))}})},closeDB:function(){plus.sqlite.closeDatabase({name:"first",success:function(e){plus.nativeUI.alert("关闭数据库成功")},fail:function(e){plus.nativeUI.alert("关闭数据库失败: "+JSON.stringify(e))}})},isOpenDB:function(){plus.sqlite.isOpenDatabase({name:"first",path:"_doc/test.db"})?plus.nativeUI.alert("Opened!"):plus.nativeUI.alert("Unopened!")}}};t.default=a},"5b1b":function(e,t,n){"use strict";var a=n("030d"),s=n.n(a);s.a},"5b4e":function(e,t,n){"use strict";n.r(t);var a=n("354a"),s=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=s.a},bb84:function(e,t,n){"use strict";n.r(t);var a=n("158c"),s=n("5b4e");for(var i in s)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(i);n("5b1b");var u=n("f0c5"),l=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=l.exports}},[["0b17","common/runtime","common/vendor"]]]);