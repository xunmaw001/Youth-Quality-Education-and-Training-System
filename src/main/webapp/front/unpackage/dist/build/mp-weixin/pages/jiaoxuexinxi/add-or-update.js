(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiaoxuexinxi/add-or-update"],{"2e9c":function(e,n,i){"use strict";i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return t})),i.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"ccbc"))}},a=function(){var e=this,n=e.$createElement;e._self._c},t=[]},"3ddb":function(e,n,i){"use strict";(function(e){i("5947");r(i("66fd"));var n=r(i("d522"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},5367:function(e,n,i){"use strict";var r=i("a917"),a=i.n(r);a.a},9606:function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(i("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function t(e,n,i,r,a,t,u){try{var o=e[t](u),c=o.value}catch(s){return void i(s)}o.done?n(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var n=this,i=arguments;return new Promise((function(r,a){var u=e.apply(n,i);function o(e){t(u,r,a,o,c,"next",e)}function c(e){t(u,r,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("ccbc"))}.bind(null,i)).catch(i.oe)},c={data:function(){return{cross:"",ruleForm:{kechengmingcheng:"",kemuleixing:"",shangkenianji:"",shangkedidian:"",shangkeshijian:"",kechengfeiyong:"",kechengjieshao:"",kechengtupian:"",jiaoshibianhao:"",jiaoshixingming:"",lianxidianhua:"",sfsh:"",shhf:""},user:{},ro:{kechengmingcheng:!1,kemuleixing:!1,shangkenianji:!1,shangkedidian:!1,shangkeshijian:!1,kechengfeiyong:!1,kechengjieshao:!1,kechengtupian:!1,jiaoshibianhao:!1,jiaoshixingming:!1,lianxidianhua:!1,sfsh:!1,shhf:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var i=this;return u(r.default.mark((function a(){var t,u,o,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t=e.getStorageSync("nowTable"),a.next=3,i.$api.session(t);case 3:if(u=a.sent,i.user=u.data,i.ruleForm.jiaoshibianhao=i.user.jiaoshibianhao,i.ro.jiaoshibianhao=!0,i.ruleForm.jiaoshixingming=i.user.jiaoshixingming,i.ro.jiaoshixingming=!0,i.ruleForm.lianxidianhua=i.user.lianxidianhua,i.ro.lianxidianhua=!0,i.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(i.ruleForm.refid=n.refid,i.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=19;break}return i.ruleForm.id=n.id,a.next=17,i.$api.info("jiaoxuexinxi",i.ruleForm.id);case 17:u=a.sent,i.ruleForm=u.data;case 19:if(i.cross=n.cross,!n.cross){a.next=79;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 23:if((a.t1=a.t0()).done){a.next=79;break}if(c=a.t1.value,"kechengmingcheng"!=c){a.next=29;break}return i.ruleForm.kechengmingcheng=o[c],i.ro.kechengmingcheng=!0,a.abrupt("continue",23);case 29:if("kemuleixing"!=c){a.next=33;break}return i.ruleForm.kemuleixing=o[c],i.ro.kemuleixing=!0,a.abrupt("continue",23);case 33:if("shangkenianji"!=c){a.next=37;break}return i.ruleForm.shangkenianji=o[c],i.ro.shangkenianji=!0,a.abrupt("continue",23);case 37:if("shangkedidian"!=c){a.next=41;break}return i.ruleForm.shangkedidian=o[c],i.ro.shangkedidian=!0,a.abrupt("continue",23);case 41:if("shangkeshijian"!=c){a.next=45;break}return i.ruleForm.shangkeshijian=o[c],i.ro.shangkeshijian=!0,a.abrupt("continue",23);case 45:if("kechengfeiyong"!=c){a.next=49;break}return i.ruleForm.kechengfeiyong=o[c],i.ro.kechengfeiyong=!0,a.abrupt("continue",23);case 49:if("kechengjieshao"!=c){a.next=53;break}return i.ruleForm.kechengjieshao=o[c],i.ro.kechengjieshao=!0,a.abrupt("continue",23);case 53:if("kechengtupian"!=c){a.next=57;break}return i.ruleForm.kechengtupian=o[c],i.ro.kechengtupian=!0,a.abrupt("continue",23);case 57:if("jiaoshibianhao"!=c){a.next=61;break}return i.ruleForm.jiaoshibianhao=o[c],i.ro.jiaoshibianhao=!0,a.abrupt("continue",23);case 61:if("jiaoshixingming"!=c){a.next=65;break}return i.ruleForm.jiaoshixingming=o[c],i.ro.jiaoshixingming=!0,a.abrupt("continue",23);case 65:if("lianxidianhua"!=c){a.next=69;break}return i.ruleForm.lianxidianhua=o[c],i.ro.lianxidianhua=!0,a.abrupt("continue",23);case 69:if("clicktime"!=c){a.next=73;break}return i.ruleForm.clicktime=o[c],i.ro.clicktime=!0,a.abrupt("continue",23);case 73:if("clicknum"!=c){a.next=77;break}return i.ruleForm.clicknum=o[c],i.ro.clicknum=!0,a.abrupt("continue",23);case 77:a.next=23;break;case 79:i.styleChange();case 80:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},shangkeshijianConfirm:function(e){console.log(e),this.ruleForm.shangkeshijian=e.result,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},kechengtupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.kechengtupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function i(){var a,t,u,o,c,s,l,h,g,f;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!n.ruleForm.kechengfeiyong||n.$validate.isNumber(n.ruleForm.kechengfeiyong)){i.next=3;break}return n.$utils.msg("课程费用应输入数字"),i.abrupt("return");case 3:if(!n.ruleForm.clicknum||n.$validate.isIntNumer(n.ruleForm.clicknum)){i.next=6;break}return n.$utils.msg("点击次数应输入整数"),i.abrupt("return");case 6:if(!n.cross){i.next=22;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){i.next=22;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){i.next=18;break}for(l in s)l==o&&(s[l]=c);return h=e.getStorageSync("crossTable"),i.next=16,n.$api.update("".concat(h),s);case 16:i.next=22;break;case 18:a=Number(e.getStorageSync("userid")),t=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 22:if(!t||!a){i.next=44;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=t,g={page:1,limit:10,crossuserid:a,crossrefid:t},i.next=28,n.$api.list("jiaoxuexinxi",g);case 28:if(f=i.sent,!(f.data.total>=u)){i.next=34;break}return n.$utils.msg(e.getStorageSync("tips")),i.abrupt("return",!1);case 34:if(!n.ruleForm.id){i.next=39;break}return i.next=37,n.$api.update("jiaoxuexinxi",n.ruleForm);case 37:i.next=41;break;case 39:return i.next=41,n.$api.add("jiaoxuexinxi",n.ruleForm);case 41:n.$utils.msgBack("提交成功");case 42:i.next=52;break;case 44:if(!n.ruleForm.id){i.next=49;break}return i.next=47,n.$api.update("jiaoxuexinxi",n.ruleForm);case 47:i.next=51;break;case 49:return i.next=51,n.$api.add("jiaoxuexinxi",n.ruleForm);case 51:n.$utils.msgBack("提交成功");case 52:case"end":return i.stop()}}),i)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(i,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,i("543d")["default"])},a917:function(e,n,i){},d522:function(e,n,i){"use strict";i.r(n);var r=i("2e9c"),a=i("f413");for(var t in a)"default"!==t&&function(e){i.d(n,e,(function(){return a[e]}))}(t);i("5367");var u,o=i("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"32d6bfc6",null,!1,r["a"],u);n["default"]=c.exports},f413:function(e,n,i){"use strict";i.r(n);var r=i("9606"),a=i.n(r);for(var t in r)"default"!==t&&function(e){i.d(n,e,(function(){return r[e]}))}(t);n["default"]=a.a}},[["3ddb","common/runtime","common/vendor"]]]);