(function(t){function e(e){for(var s,a,c=e[0],o=e[1],u=e[2],p=0,d=[];p<c.length;p++)a=c[p],r[a]&&d.push(r[a][0]),r[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(s=!1)}s&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},r={app:0},i=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1bd1":function(t,e,n){},"1d98":function(t,e,n){"use strict";var s=n("7fab"),r=n.n(s);r.a},2856:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d"),n("a1a3");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("tour",{attrs:{steps:t.steps,text:t.text,theme:t.theme}})],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"navbar"},[n("div",{staticClass:"dummy dummy-logo"},[t._v("Logo")]),n("div",{staticClass:"dummy dummy-search"},[t._v("Search...")]),n("div",{staticClass:"dummy dummy-profile"}),n("div",{staticClass:"dummy dummy-profile-text"})]),n("div",{staticClass:"crumbs"},[n("div",{staticClass:"dummy dummy-crumb"}),n("div",{staticClass:"dummy dummy-crumb-text"}),n("div",{staticClass:"dummy dummy-btn"},[t._v("Create")])]),n("div",{staticClass:"page"},[n("div",{staticClass:"dummy dummy-item"}),n("div",{staticClass:"dummy dummy-item"}),n("div",{staticClass:"dummy dummy-item"}),n("div",{staticClass:"dummy dummy-item"})]),n("div",{staticClass:"footer"},[n("div",{staticClass:"dummy dummy-text"})])])}],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.open?n("div",{staticClass:"tour-preview",style:{"border-radius":t.theme.radius}},[t._l(t.steps,function(e,s){return[t.currentStep===s?n("div",{key:s,staticClass:"step"},[n("svg",{staticClass:"scale",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12"},on:{click:t.scale}},[n("g",[n("g",[n("g",[n("g",[n("path",{attrs:{fill:"#255fff",d:"M2.36 8.712l-.65-.649a.562.562 0 0 0-.96.398v2.227c0 .31.252.562.563.562h2.226a.563.563 0 0 0 .398-.96l-.65-.65 2.514-2.513a.281.281 0 0 0 0-.398l-.53-.53a.281.281 0 0 0-.398 0zM10.688.75H8.46a.562.562 0 0 0-.398.96l.65.65-2.514 2.513a.281.281 0 0 0 0 .398l.53.53c.11.11.288.11.398 0L9.64 3.288l.65.649c.354.354.96.103.96-.398V1.313a.563.563 0 0 0-.563-.563z"}})])])])])]),n("svg",{staticClass:"close",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 12"},on:{click:t.close}},[n("g",[n("g",[n("path",{attrs:{fill:"#333",d:"M6-1.2c.374 0 .678.303.678.678v5.844h5.844a.678.678 0 1 1 0 1.356H6.678v5.844a.678.678 0 1 1-1.356 0V6.678H-.522a.678.678 0 1 1 0-1.356h5.844V-.522c0-.375.304-.678.678-.678z"}})])])]),n("div",{staticClass:"teaser"},[n("img",{attrs:{src:e.preview,alt:e.title}})]),n("div",{staticClass:"content"},[n("p",{staticClass:"title",style:{color:t.theme.color}},[t._v(t._s(e.title))]),n("p",{staticClass:"description"},[t._v(t._s(e.description))]),n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-dots"},t._l(t.stepCount,function(e){return n("div",{key:e,staticClass:"dot",style:{background:e-1===t.currentStep?t.theme.color:"#e6eaee"}})})),n("div",{staticClass:"footer-link",on:{click:function(e){t.prev()}}},[t._v(t._s(t.text.prev_cta))]),n("div",{staticClass:"footer-btn",style:{background:t.theme.color,"border-radius":t.theme.radius},on:{click:function(e){t.next()}}},[t._v(t._s(t.text.next_cta))])])])]):t._e()]})],2):t._e()},c=[],o={props:{steps:{type:Array,default:function(){return[{preview:"/example-1.png",title:"Step 1",description:"I am an example step, click in the top right corner to enlarge me. Click next if you no longer want to see me. "},{preview:"/example-1.png",title:"Step 2",description:"Congratz, I am the second step in this 2 step tuturial. If you reached me that means you have reached the end."}]}},text:{type:Object,default:function(){return{next_cta:"Next",prev_cta:"Previous"}}},theme:{type:Object,default:function(){return{color:"#009de0",radius:"2px"}}}},data:function(){return{currentStep:0,open:!0}},mounted:function(){},methods:{next:function(){this.currentStep<this.steps.length-1?this.currentStep++:this.currentStep=0},prev:function(){this.currentStep>0?this.currentStep--:this.currentStep=this.steps.length-1},close:function(){this.open=!1},scale:function(){}},computed:{stepCount:function(){return this.steps.length}}},u=o,l=(n("1d98"),n("2877")),p=Object(l["a"])(u,a,c,!1,null,"ab11ccc2",null);p.options.__file="tour.vue";var d=p.exports,m={name:"app",components:{Tour:d},data:function(){return{steps:[{preview:"/example-1.png",title:"Step 1",description:"I am an example step, click in the top right corner to enlarge me. Click next if you no longer want to see me. "},{preview:"/example-1.png",title:"Step 2",description:"Congratz, I am the second step in this 2 step tuturial. If you reached me that means you have reached the end."}],text:{next_cta:"Next",prev_cta:"Previous"},theme:{color:"#009de0",radius:"2px"}}}},f=m,v=(n("5c0b"),n("66b6"),Object(l["a"])(f,r,i,!1,null,"499f41e2",null));v.options.__file="App.vue";var h=v.exports;new s["a"]({render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("2856"),r=n.n(s);r.a},"66b6":function(t,e,n){"use strict";var s=n("1bd1"),r=n.n(s);r.a},"7fab":function(t,e,n){},a1a3:function(t,e,n){}});
//# sourceMappingURL=app.f71b74c5.js.map