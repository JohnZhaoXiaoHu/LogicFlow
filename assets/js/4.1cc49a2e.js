(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{323:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},324:function(e,t,r){var i=r(25),n=r(20),a="["+r(323)+"]",s=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),f=function(e){return function(t){var r=n(i(t));return 1&e&&(r=r.replace(s,"")),2&e&&(r=r.replace(o,"")),r}};e.exports={start:f(1),end:f(2),trim:f(3)}},326:function(e,t,r){var i=r(4),n=r(72);e.exports=function(e,t,r){var a,s;return n&&"function"==typeof(a=t.constructor)&&a!==r&&i(s=a.prototype)&&s!==r.prototype&&n(e,s),e}},345:function(e,t,r){},378:function(e,t,r){"use strict";var i=r(7),n=r(1),a=r(97),s=r(13),o=r(6),f=r(27),u=r(326),c=r(49),h=r(177),m=r(2),p=r(28),l=r(48).f,d=r(26).f,I=r(8).f,N=r(324).trim,g=n.Number,v=g.prototype,w="Number"==f(p(v)),b=function(e){if(c(e))throw TypeError("Cannot convert a Symbol value to a number");var t,r,i,n,a,s,o,f,u=h(e,"number");if("string"==typeof u&&u.length>2)if(43===(t=(u=N(u)).charCodeAt(0))||45===t){if(88===(r=u.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+u}for(s=(a=u.slice(2)).length,o=0;o<s;o++)if((f=a.charCodeAt(o))<48||f>n)return NaN;return parseInt(a,i)}return+u};if(a("Number",!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var E,y=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof y&&(w?m((function(){v.valueOf.call(r)})):"Number"!=f(r))?u(new g(b(t)),r,y):b(t)},x=i?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;x.length>A;A++)o(g,E=x[A])&&!o(y,E)&&I(y,E,d(g,E));y.prototype=v,v.constructor=y,s(n,"Number",y)}},379:function(e,t,r){"use strict";r(345)},386:function(e,t,r){"use strict";r.r(t);r(378),r(50),r(47),r(71),r(186);var i={props:{href:{type:String},width:{type:String|Number,default:"100%"},height:{type:Number,default:600},iframeId:{type:String,default:"example-iframe"+Math.random()}},data:function(){return{iframeLink:"",showIframe:!1}},computed:{iframeHeight:function(){return this.height,600}},mounted:function(){var e=this,t=this.$router.options.base;this.href?this.iframeLink=""+t.slice(0,-1)+this.href:this.iframeLink=""+location.pathname.replace("guide","examples/#").replace(".html",""),document.getElementById(this.iframeId).onload=function(){e.showIframe=!0},setTimeout((function(){e.showIframe=!0}),1e3)}},n=(r(379),r(24)),a=Object(n.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"example",style:{width:this.width,height:this.height+"px"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!this.showIframe,expression:"!showIframe"}],staticClass:"mask"}),this._v(" "),t("iframe",{staticClass:"iframe",attrs:{id:this.iframeId,src:this.iframeLink}})])}),[],!1,null,"778a7c7f",null);t.default=a.exports}}]);