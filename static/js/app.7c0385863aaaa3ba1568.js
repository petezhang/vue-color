webpackJsonp([1,0],[function(e,o,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var n=t(57),a=s(n),r=t(35),l=s(r);console.log(a.default.version),new a.default({el:"#app-wrap",render:function(e){return e(l.default)}})},function(e,o,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function n(e,o){var t,s=e&&e.a;t=e&&e.hsl?(0,r.default)(e.hsl):e&&e.hex&&e.hex.length>0?(0,r.default)(e.hex):(0,r.default)(e),t&&t.setAlpha(s||1);var n=t.toHsl(),a=t.toHsv();return 0===n.s&&(n.h=e.h||o||0,a.h=e.h||o||0),{hsl:n,hex:t.toHexString().toUpperCase(),rgba:t.toRgb(),hsv:a,oldHue:e.h||o||n.h,source:e.source,a:e.a||t.getAlpha()}}Object.defineProperty(o,"__esModule",{value:!0});var a=t(34),r=s(a);o.default={props:["value"],data:function(){return{val:n(this.value)}},computed:{colors:{get:function(){return this.val},set:function(e){this.val=e,this.$emit("change-color",e)}}},watch:{value:function(e){this.val=n(e)}},methods:{colorChange:function(e,o){this.oldHue=this.colors.hsl.h,this.colors=n(e,o||this.oldHue)},isValidHex:function(e){return(0,r.default)(e).isValid()},simpleCheckForValidColor:function(e){for(var o=["r","g","b","a","h","s","a","v"],t=0,s=0,n=0;n<o.length;n++){var a=o[n];e[a]&&(t++,isNaN(e[a])||s++)}if(t===s)return e}}}},function(e,o,t){var s,n;t(31),s=t(16);var a=t(56);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,e.exports=s},function(e,o,t){var s,n;t(22),s=t(17);var a=t(47);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,e.exports=s},function(e,o,t){var s,n;t(21),s=t(14);var a=t(46);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,e.exports=s},function(e,o,t){var s,n;t(20),s=t(18);var a=t(45);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,e.exports=s},function(e,o,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var n=t(38),a=s(n),r=t(37),l=s(r),c=t(42),i=s(c),u=t(41),h=s(u),d=t(40),_=s(d),v=t(36),f=s(v),p=t(39),g=s(p),C={hex:"#194d33",hsl:{h:150,s:.5,l:.2,a:1},hsv:{h:150,s:.66,v:.3,a:1},rgba:{r:25,g:77,b:51,a:1},a:1};o.default={components:{"material-picker":a.default,"compact-picker":l.default,"swatches-picker":i.default,"slider-picker":h.default,"sketch-picker":_.default,"chrome-picker":f.default,"photoshop-picker":g.default},data:function(){return{colors:C}},computed:{bgc:function(){return this.colors.hex}},methods:{onOk:function(){console.log("ok")},onCancel:function(){console.log("cancel")},onChange:function(e){this.colors=e}},created:function(){}}},function(e,o,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var n=t(1),a=s(n),r=t(2),l=s(r),c=t(5),i=s(c),u=t(3),h=s(u),d=t(4),_=s(d);o.default={name:"Chrome",mixins:[a.default],props:{},components:{saturation:i.default,hue:h.default,alpha:_.default,"ed-in":l.default},data:function(){return{fields:["hex","rgba","hsla"],fieldsIndex:0,highlight:!1}},computed:{activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))},toggleViews:function(){return this.fieldsIndex>=2?void(this.fieldsIndex=0):void this.fieldsIndex++},showHighlight:function(){this.highlight=!0},hideHighlight:function(){this.highlight=!1}}}},function(e,o,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var n=t(1),a=s(n),r=t(2),l=s(r),c=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];o.default={name:"Compact",mixins:[a.default],props:{},components:{"ed-in":l.default},computed:{pick:function(){return this.colors.hex}},data:function(){return{defaultColors:c}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})},onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var n=t(2),a=s(n),r=t(1),l=s(r);o.default={name:"Material",mixins:[l.default],components:{"ed-in":a.default},methods:{onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var n=t(1),a=s(n),r=t(2),l=s(r),c=t(5),i=s(c),u=t(3),h=s(u),d=t(4),_=s(d);o.default={name:"Photoshop",mixins:[a.default],props:{head:{type:String,default:"Color Picker"}},components:{saturation:i.default,hue:h.default,alpha:_.default,"ed-in":l.default},data:function(){return{currentColor:"#FFF"}},created:function(){this.currentColor=this.colors.hex},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e["#"]?this.isValidHex(e["#"])&&this.colorChange({hex:e["#"],source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))},handleAccept:function(){this.$emit("ok")},handleCancel:function(){this.$emit("cancel")}}}},function(e,o,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var n=t(1),a=s(n),r=t(2),l=s(r),c=t(5),i=s(c),u=t(3),h=s(u),d=t(4),_=s(d),v=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"];o.default={name:"Sketch",mixins:[a.default],components:{saturation:i.default,hue:h.default,alpha:_.default,"ed-in":l.default},data:function(){return{presetColors:v}},computed:{activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,o,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var n=t(1),a=s(n),r=t(3),l=s(r);o.default={name:"Slider",mixins:[a.default],props:{direction:String},components:{hue:l.default},computed:{activeOffset:function(){return Math.round(100*this.colors.hsl.s)/100===.5?Math.round(100*this.colors.hsl.l)/100:0}},data:function(){return{swatches:[".80",".65",".50",".35",".20"]}},methods:{hueChange:function(e){this.colorChange(e)},handleSwClick:function(e,o){this.colorChange({h:this.colors.hsl.h,s:.5,l:o,source:"hsl"})}}}},function(e,o,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var n=t(33),a=s(n),r=t(1),l=s(r),c=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey"],i=["900","700","500","300","100"],u=function(){var e=[];return c.forEach(function(o){var t=[];i.forEach(function(e){t.push(a.default[o][e].toUpperCase())}),e.push(t)}),e}();o.default={name:"Swatches",mixins:[l.default],computed:{pick:function(){return this.colors.hex}},data:function(){return{defaultColors:u}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,o,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var n=t(43),a=s(n);o.default={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:a.default},computed:{colors:function(){return this.value},gradientColor:function(){var e=this.colors.rgba,o=[e.r,e.g,e.b].join(",");return"linear-gradient(to right, rgba("+o+", 0) 0%, rgba("+o+", 1) 100%)"}},methods:{handleChange:function(e,o){!o&&e.preventDefault();var t,s=this.$refs.container,n=s.clientWidth,a=s.getBoundingClientRect().left+window.pageXOffset,r=e.pageX||(e.touches?e.touches[0].pageX:0),l=r-a;t=l<0?0:l>n?1:Math.round(100*l/n)/100,this.colors.a!==t&&this.$emit("on-change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:t,source:"rgba"})},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o){"use strict";function t(e,o,t){if("undefined"==typeof document)return null;var s=document.createElement("canvas");s.width=s.height=2*t;var n=s.getContext("2d");return n?(n.fillStyle=e,n.fillRect(0,0,s.width,s.height),n.fillStyle=o,n.fillRect(0,0,t,t),n.translate(t,t),n.fillRect(0,0,t,t),s.toDataURL()):null}function s(e,o,s){var a=e+","+o+","+s;if(n[a])return n[a];var r=t(e,o,s);return n[a]=r,r}Object.defineProperty(o,"__esModule",{value:!0});var n={};o.default={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle:function(){return"url("+s(this.white,this.grey,this.size)+") center left"}}}},function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={name:"editableInput",props:{label:String,value:[String,Number],max:Number,arrowOffset:{type:Number,default:1}},computed:{val:function(){return this.value}},filters:{maxFilter:{read:function(e){return this.max&&e>this.max?this.max:e},write:function(e,o){return e}}},methods:{update:function(e){this.handleChange(e.target.value)},handleChange:function(e){var o={};o[this.label]=e,this.$emit("on-change",o)},handleBlur:function(e){console.log(e)},handleKeyDown:function(e){var o=this.val,t=Number(o);if(t){var s=this.arrowOffset||1;38===e.keyCode&&(o=t+s,this.handleChange(o),e.preventDefault()),40===e.keyCode&&(o=t-s,this.handleChange(o),e.preventDefault())}},handleDrag:function(e){console.log(e)},handleMouseDown:function(e){console.log(e)}}}},function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},computed:{colors:function(){return this.value},directionClass:function(){return{"vue-color__c-hue--horizontal":"horizontal"===this.direction,"vue-color__c-hue--vertical":"vertical"===this.direction}},pointerTop:function(){return"vertical"===this.direction?-(100*this.colors.hsl.h/360)+100+"%":0},pointerLeft:function(){return"vertical"===this.direction?0:100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(e,o){!o&&e.preventDefault();var t,s,n=this.$refs.container,a=n.clientWidth,r=n.clientHeight,l=n.getBoundingClientRect().left+window.pageXOffset,c=n.getBoundingClientRect().top+window.pageYOffset,i=e.pageX||(e.touches?e.touches[0].pageX:0),u=e.pageY||(e.touches?e.touches[0].pageY:0),h=i-l,d=u-c;"vertical"===this.direction?(d<0?t=359:d>r?t=0:(s=-(100*d/r)+100,t=360*s/100),this.colors.hsl.h!==t&&this.$emit("on-change",{h:t,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(h<0?t=0:h>a?t=359:(s=100*h/a,t=360*s/100),this.colors.hsl.h!==t&&this.$emit("on-change",{h:t,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(o,"__esModule",{value:!0});var n=t(32),a=s(n);o.default={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsl.h+", 100%, 50%)"},pointerTop:function(){return-(100*this.colors.hsv.v)+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,a.default)(function(e,o){e(o)},20,{leading:!0,trailing:!1}),handleChange:function(e,o){!o&&e.preventDefault();var t=this.$refs.container,s=t.clientWidth,n=t.clientHeight,a=t.getBoundingClientRect().left+window.pageXOffset,r=t.getBoundingClientRect().top+window.pageYOffset,l=e.pageX||(e.touches?e.touches[0].pageX:0),c=e.pageY||(e.touches?e.touches[0].pageY:0),i=l-a,u=c-r;i<0?i=0:i>s?i=s:u<0?u=0:u>n&&(u=n);var h=100*i/s,d=-(100*u/n)+100;this.throttle(this.onChange,{h:this.colors.hsl.h,s:h,v:d>0?d:.01,a:this.colors.hsl.a,source:"hsva"})},onChange:function(e){this.$emit("on-change",e)},handleMouseDown:function(e){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,o){},19,19,19,19,19,19,19,19,19,19,19,19,,,,function(e,o,t){var s,n;t(19),s=t(6);var a=t(44);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,e.exports=s},function(e,o,t){var s,n;t(29),s=t(7);var a=t(54);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,e.exports=s},function(e,o,t){var s,n;t(26),s=t(8);var a=t(51);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,e.exports=s},function(e,o,t){var s,n;t(25),s=t(9);var a=t(50);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,e.exports=s},function(e,o,t){var s,n;t(30),s=t(10);var a=t(55);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,e.exports=s},function(e,o,t){var s,n;t(27),s=t(11);var a=t(52);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,e.exports=s},function(e,o,t){var s,n;t(28),s=t(12);var a=t(53);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,e.exports=s},function(e,o,t){var s,n;t(24),s=t(13);var a=t(49);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,e.exports=s},function(e,o,t){var s,n;t(23),s=t(15);var a=t(48);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,e.exports=s},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"app"}},[t("a",{staticClass:"github-fork-ribbon",attrs:{href:"https://github.com/xiaokaike/vue-color",title:"Fork me on GitHub"}},[e._v("Fork me on GitHub")]),e._v(" "),t("div",{staticClass:"header-container"},[t("div",{staticClass:"header-bg",style:{"background-color":e.bgc}}),e._v(" "),t("header",{staticClass:"header"},[e._m(0),e._v(" "),t("div",{staticClass:"demo-item"},[t("chrome-picker",{on:{"change-color":e.onChange},model:{value:e.colors,callback:function(o){e.colors=o},expression:"colors"}}),e._v(" "),t("h6",[e._v("Chrome")])],1)])]),e._v(" "),t("div",{staticClass:"demo-container"},[t("div",{staticClass:"demo-list"},[t("div",{staticClass:"demo-item"},[t("sketch-picker",{on:{"change-color":e.onChange},model:{value:e.colors,callback:function(o){e.colors=o},expression:"colors"}}),e._v(" "),t("h6",[e._v("Sketch")])],1),e._v(" "),t("div",{staticClass:"demo-item"},[t("photoshop-picker",{on:{"change-color":e.onChange,ok:e.onOk,cancel:e.onCancel},model:{value:e.colors,callback:function(o){e.colors=o},expression:"colors"}}),e._v(" "),t("h6",[e._v("Photoshop")])],1)]),e._v(" "),t("div",{staticClass:"demo-list"},[t("div",{staticClass:"demo-item"},[t("material-picker",{on:{"change-color":e.onChange},model:{value:e.colors,callback:function(o){e.colors=o},expression:"colors"}}),e._v(" "),t("h6",[e._v("Material")])],1),e._v(" "),t("div",{staticClass:"demo-item"},[t("slider-picker",{on:{"change-color":e.onChange},model:{value:e.colors,callback:function(o){e.colors=o},expression:"colors"}}),e._v(" "),t("h6",[e._v("Slider")])],1)]),e._v(" "),t("div",{staticClass:"demo-list"},[t("div",{staticClass:"demo-item"},[t("compact-picker",{on:{"change-color":e.onChange},model:{value:e.colors,callback:function(o){e.colors=o},expression:"colors"}}),e._v(" "),t("h6",[e._v("Compact")])],1),e._v(" "),t("div",{staticClass:"demo-item"},[t("swatches-picker",{on:{"change-color":e.onChange},model:{value:e.colors,callback:function(o){e.colors=o},expression:"colors"}}),e._v(" "),t("h6",[e._v("Swatches")])],1)])])])},staticRenderFns:[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"intro-wrap"},[t("div",{staticClass:"intro"},[t("h1",[e._v("Vue-color")]),e._v(" "),t("p",[e._v("A Collection of Color Pickers from Sketch, Photoshop, Chrome, Github, Twitter, Material Design & more")])])])}]}},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{ref:"container",staticClass:"vue-color__saturation",style:{background:e.bgColor},on:{mousedown:e.handleMouseDown}},[t("div",{staticClass:"vue-color__saturation--white"}),e._v(" "),t("div",{staticClass:"vue-color__saturation--black"}),e._v(" "),t("div",{staticClass:"vue-color__saturation--pointer",style:{top:e.pointerTop,left:e.pointerLeft}},[t("div",{staticClass:"vue-color__saturation--circle"})])])},staticRenderFns:[]}},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"vue-color__c-alpha"},[t("div",{staticClass:"vue-color__c-alpha__checkboard-wrap"},[t("checkboard")],1),e._v(" "),t("div",{staticClass:"vue-color__c-alpha__gradient",style:{background:e.gradientColor}}),e._v(" "),t("div",{ref:"container",staticClass:"vue-color__c-alpha__container",on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[t("div",{staticClass:"vue-color__c-alpha__pointer",style:{left:100*e.colors.a+"%"}},[t("div",{staticClass:"vue-color__c-alpha__picker"})])])])},staticRenderFns:[]}},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{class:["vue-color__c-hue",e.directionClass]},[t("div",{ref:"container",staticClass:"vue-color__c-hue__container",on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[t("div",{staticClass:"vue-color__c-hue__pointer",style:{top:e.pointerTop,left:e.pointerLeft}},[t("div",{staticClass:"vue-color__c-hue__picker"})])])])},staticRenderFns:[]}},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"vue-color__c-checkerboard",style:{background:e.bgStyle}})},staticRenderFns:[]}},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"vue-color__swatches",attrs:{"data-pick":e.pick}},[t("div",{staticClass:"vue-color__swatches__box"},e._l(e.defaultColors,function(o){return t("div",{staticClass:"vue-color__swatches__color-group"},e._l(o,function(o){return t("div",{staticClass:"vue-color__swatches__color-it",style:{background:o},attrs:{"data-color":o},on:{click:function(t){e.handlerClick(o)}}},[t("div",{directives:[{name:"show",rawName:"v-show",value:o==e.pick,expression:"c == pick"}],staticClass:"vue-color__swatches__pick"},[t("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])])])}))}))])},staticRenderFns:[]}},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"vue-color__material"},[t("ed-in",{staticClass:"vue-color__material__hex",style:{borderColor:e.colors.hex},attrs:{label:"hex"},on:{"on-change":e.onChange},model:{value:e.colors.hex,callback:function(o){e.colors.hex=o},expression:"colors.hex"}}),e._v(" "),t("div",{staticClass:"vue-color__material__split"},[t("div",{staticClass:"vue-color__material__third"},[t("ed-in",{attrs:{label:"r"},on:{"on-change":e.onChange},model:{value:e.colors.rgba.r,callback:function(o){e.colors.rgba.r=o},expression:"colors.rgba.r"}})],1),e._v(" "),t("div",{staticClass:"vue-color__material__third"},[t("ed-in",{attrs:{label:"g"},on:{"on-change":e.onChange},model:{value:e.colors.rgba.g,callback:function(o){e.colors.rgba.g=o},expression:"colors.rgba.g"}})],1),e._v(" "),t("div",{staticClass:"vue-color__material__third"},[t("ed-in",{attrs:{label:"b"},on:{"on-change":e.onChange},model:{value:e.colors.rgba.b,callback:function(o){e.colors.rgba.b=o},expression:"colors.rgba.b"}})],1)])],1)},staticRenderFns:[]}},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"vue-color__compact"},[t("ul",{staticClass:"vue-color__compact__colors"},e._l(e.defaultColors,function(o){return t("li",{staticClass:"vue-color__compact__color-item",class:{"vue-color__compact__color-item--white":"#FFFFFF"===o},style:{background:o},on:{click:function(t){e.handlerClick(o)}}},[t("div",{directives:[{name:"show",rawName:"v-show",value:o===e.pick,expression:"c === pick"}],staticClass:"vue-color__compact__dot"})])}))])},staticRenderFns:[]}},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"vue-color__sketch"},[t("div",{staticClass:"vue-color__sketch__saturation-wrap"},[t("saturation",{on:{"on-change":e.childChange},model:{value:e.colors,callback:function(o){e.colors=o},expression:"colors"}})],1),e._v(" "),t("div",{staticClass:"vue-color__sketch__controls"},[t("div",{staticClass:"vue-color__sketch__sliders"},[t("div",{staticClass:"vue-color__sketch__hue-wrap"},[t("hue",{on:{"on-change":e.childChange},model:{value:e.colors,callback:function(o){e.colors=o},expression:"colors"}})],1),e._v(" "),t("div",{staticClass:"vue-color__sketch__alpha-wrap"},[t("alpha",{on:{"on-change":e.childChange},model:{value:e.colors,callback:function(o){e.colors=o},expression:"colors"}})],1)]),e._v(" "),t("div",{staticClass:"vue-color__sketch__color-wrap"},[t("div",{staticClass:"vue-color__sketch__active-color",style:{background:e.activeColor}})])]),e._v(" "),t("div",{staticClass:"vue-color__sketch__field"},[t("div",{staticClass:"vue-color__sketch__field--double"},[t("ed-in",{attrs:{label:"hex"},on:{"on-change":e.inputChange},model:{value:e.colors.hex,callback:function(o){e.colors.hex=o},expression:"colors.hex"}})],1),e._v(" "),t("div",{staticClass:"vue-color__sketch__field--single"},[t("ed-in",{attrs:{label:"r"},on:{"on-change":e.inputChange},model:{value:e.colors.rgba.r,callback:function(o){e.colors.rgba.r=o},expression:"colors.rgba.r"}})],1),e._v(" "),t("div",{staticClass:"vue-color__sketch__field--single"},[t("ed-in",{attrs:{label:"g"},on:{"on-change":e.inputChange},model:{value:e.colors.rgba.g,callback:function(o){e.colors.rgba.g=o},expression:"colors.rgba.g"}})],1),e._v(" "),t("div",{staticClass:"vue-color__sketch__field--single"},[t("ed-in",{attrs:{label:"b"},on:{"on-change":e.inputChange},model:{value:e.colors.rgba.b,callback:function(o){e.colors.rgba.b=o},expression:"colors.rgba.b"}})],1),e._v(" "),t("div",{staticClass:"vue-color__sketch__field--single"},[t("ed-in",{attrs:{label:"a","arrow-offset":.01,max:1},on:{"on-change":e.inputChange},model:{value:e.colors.a,callback:function(o){e.colors.a=o},expression:"colors.a"}})],1)]),e._v(" "),t("div",{staticClass:"vue-color__sketch__presets"},e._l(e.presetColors,function(o){return t("div",{staticClass:"vue-color__sketch__presets-color",style:{background:o},on:{click:function(t){e.handlePreset(o)}}})}))])},staticRenderFns:[]}},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"vue-color__slider"},[t("div",{staticClass:"vue-color__slider__hue-warp"},[t("hue",{on:{"on-change":e.hueChange},model:{value:e.colors,callback:function(o){e.colors=o},expression:"colors"}})],1),e._v(" "),t("div",{staticClass:"vue-color__slider__swatches"},e._l(e.swatches,function(o,s){return t("div",{staticClass:"vue-color__slider__swatch",attrs:{"data-index":s},on:{click:function(t){e.handleSwClick(s,o)}}},[t("div",{staticClass:"vue-color__slider__swatch-picker",class:{"vue-color__slider__swatch-picker--active":o==e.activeOffset},style:{background:"hsl("+e.colors.hsl.h+", 50%, "+100*o+"%)"}})])}))])},staticRenderFns:[]}},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"vue-color__chrome"},[t("div",{staticClass:"vue-color__chrome__saturation-wrap"},[t("saturation",{on:{"on-change":e.childChange},model:{value:e.colors,callback:function(o){e.colors=o},expression:"colors"}})],1),e._v(" "),t("div",{staticClass:"vue-color__chrome__chrome-body"},[t("div",{staticClass:"vue-color__chrome__controls"},[t("div",{staticClass:"vue-color__chrome__color-wrap"},[t("div",{staticClass:"vue-color__chrome__active-color",style:{background:e.activeColor}})]),e._v(" "),t("div",{staticClass:"vue-color__chrome__sliders"},[t("div",{staticClass:"vue-color__chrome__hue-wrap"},[t("hue",{on:{"on-change":e.childChange},model:{value:e.colors,callback:function(o){e.colors=o},expression:"colors"}})],1),e._v(" "),t("div",{staticClass:"vue-color__chrome__alpha-wrap"},[t("alpha",{on:{"on-change":e.childChange},model:{value:e.colors,callback:function(o){e.colors=o},expression:"colors"}})],1)])]),e._v(" "),t("div",{staticClass:"vue-color__chrome__fields-wrap"},[t("div",{directives:[{name:"show",rawName:"v-show",value:0===e.fieldsIndex,expression:"fieldsIndex === 0"}],staticClass:"vue-color__chrome__fields"},[t("div",{staticClass:"vue-color__chrome__field"},[t("ed-in",{attrs:{label:"hex"},on:{"on-change":e.inputChange},model:{value:e.colors.hex,callback:function(o){e.colors.hex=o},expression:"colors.hex"}})],1)]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:1===e.fieldsIndex,expression:"fieldsIndex === 1"}],staticClass:"vue-color__chrome__fields"},[t("div",{staticClass:"vue-color__chrome__field"},[t("ed-in",{attrs:{label:"r"},on:{"on-change":e.inputChange},model:{value:e.colors.rgba.r,callback:function(o){e.colors.rgba.r=o},expression:"colors.rgba.r"}})],1),e._v(" "),t("div",{staticClass:"vue-color__chrome__field"},[t("ed-in",{attrs:{label:"g"},on:{"on-change":e.inputChange},model:{value:e.colors.rgba.g,callback:function(o){e.colors.rgba.g=o},expression:"colors.rgba.g"}})],1),e._v(" "),t("div",{staticClass:"vue-color__chrome__field"},[t("ed-in",{attrs:{label:"b"},on:{"on-change":e.inputChange},model:{value:e.colors.rgba.b,callback:function(o){e.colors.rgba.b=o},expression:"colors.rgba.b"}})],1),e._v(" "),t("div",{staticClass:"vue-color__chrome__field"},[t("ed-in",{attrs:{label:"a","arrow-offset":.01,max:1},on:{"on-change":e.inputChange},model:{value:e.colors.a,callback:function(o){e.colors.a=o},expression:"colors.a"}})],1)]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:2===e.fieldsIndex,expression:"fieldsIndex === 2"}],staticClass:"vue-color__chrome__fields"},[t("div",{staticClass:"vue-color__chrome__field"},[t("ed-in",{attrs:{label:"h"},on:{"on-change":e.inputChange},model:{value:e.colors.hsl.h,callback:function(o){e.colors.hsl.h=o},expression:"colors.hsl.h"}})],1),e._v(" "),t("div",{staticClass:"vue-color__chrome__field"},[t("ed-in",{attrs:{label:"s"},on:{"on-change":e.inputChange},model:{value:e.colors.hsl.s,callback:function(o){e.colors.hsl.s=o},expression:"colors.hsl.s"}})],1),e._v(" "),t("div",{staticClass:"vue-color__chrome__field"},[t("ed-in",{attrs:{label:"l"},on:{"on-change":e.inputChange},model:{value:e.colors.hsl.l,callback:function(o){e.colors.hsl.l=o},expression:"colors.hsl.l"}})],1),e._v(" "),t("div",{staticClass:"vue-color__chrome__field"},[t("ed-in",{attrs:{label:"a","arrow-offset":.01,max:1},on:{"on-change":e.inputChange},model:{value:e.colors.a,callback:function(o){e.colors.a=o},expression:"colors.a"}})],1)]),e._v(" "),t("div",{staticClass:"vue-color__chrome__toggle-btn",on:{click:e.toggleViews}},[t("div",{staticClass:"vue-color__chrome__icon"},[t("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"},on:{mouseover:e.showHighlight,mouseenter:e.showHighlight,mouseout:e.hideHighlight}},[t("path",{attrs:{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}})])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.highlight,expression:"highlight"}],staticClass:"vue-color__chrome__icon-highlight"})])])])])},staticRenderFns:[]}},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"vue-color__photoshop"},[t("div",{staticClass:"vue-color__photoshop__head"},[e._v(e._s(e.head))]),e._v(" "),t("div",{staticClass:"vue-color__photoshop__body"},[t("div",{staticClass:"vue-color__photoshop__saturation-wrap"},[t("saturation",{on:{"on-change":e.childChange},model:{value:e.colors,callback:function(o){e.colors=o},expression:"colors"}})],1),e._v(" "),t("div",{staticClass:"vue-color__photoshop__hue-wrap"},[t("hue",{attrs:{direction:"vertical"},on:{"on-change":e.childChange},model:{value:e.colors,callback:function(o){e.colors=o},expression:"colors"}},[t("div",{staticClass:"vue-color__photoshop__hue-pointer"},[t("i",{staticClass:"vue-color__photoshop__hue-pointer--left"}),t("i",{staticClass:"vue-color__photoshop__hue-pointer--right"})])])],1),e._v(" "),t("div",{staticClass:"vue-color__photoshop__controls"},[t("div",{staticClass:"vue-color__photoshop__previews"
},[t("div",{staticClass:"vue-color__photoshop__previews__label"},[e._v("new")]),e._v(" "),t("div",{staticClass:"vue-color__photoshop__previews__swatches"},[t("div",{staticClass:"vue-color__photoshop__previews__pr-color",style:{background:e.colors.hex}}),e._v(" "),t("div",{staticClass:"vue-color__photoshop__previews__pr-color",style:{background:e.currentColor}})]),e._v(" "),t("div",{staticClass:"vue-color__photoshop__previews__label"},[e._v("current")])]),e._v(" "),t("div",{staticClass:"vue-color__photoshop__actions"},[t("div",{staticClass:"vue-color__photoshop__ac-btn",on:{click:e.handleAccept}},[e._v("OK")]),e._v(" "),t("div",{staticClass:"vue-color__photoshop__ac-btn",on:{click:e.handleCancel}},[e._v("Cancel")]),e._v(" "),t("div",{staticClass:"vue-color__photoshop__fields"},[t("ed-in",{attrs:{label:"h"},on:{"on-change":e.inputChange},model:{value:e.colors.hsl.h,callback:function(o){e.colors.hsl.h=o},expression:"colors.hsl.h"}}),e._v(" "),t("ed-in",{attrs:{label:"s"},on:{"on-change":e.inputChange},model:{value:e.colors.hsl.s,callback:function(o){e.colors.hsl.s=o},expression:"colors.hsl.s"}}),e._v(" "),t("ed-in",{attrs:{label:"v"},on:{"on-change":e.inputChange},model:{value:e.colors.hsl.l,callback:function(o){e.colors.hsl.l=o},expression:"colors.hsl.l"}}),e._v(" "),t("div",{staticClass:"vue-color__photoshop__fields__divider"}),e._v(" "),t("ed-in",{attrs:{label:"r"},on:{"on-change":e.inputChange},model:{value:e.colors.rgba.r,callback:function(o){e.colors.rgba.r=o},expression:"colors.rgba.r"}}),e._v(" "),t("ed-in",{attrs:{label:"g"},on:{"on-change":e.inputChange},model:{value:e.colors.rgba.g,callback:function(o){e.colors.rgba.g=o},expression:"colors.rgba.g"}}),e._v(" "),t("ed-in",{attrs:{label:"b"},on:{"on-change":e.inputChange},model:{value:e.colors.rgba.b,callback:function(o){e.colors.rgba.b=o},expression:"colors.rgba.b"}}),e._v(" "),t("div",{staticClass:"vue-color__photoshop__fields__divider"}),e._v(" "),t("ed-in",{staticClass:"vue-color__photoshop__fields__hex",attrs:{label:"#"},on:{"on-change":e.inputChange},model:{value:e.colors.hex,callback:function(o){e.colors.hex=o},expression:"colors.hex"}})],1)])])])])},staticRenderFns:[]}},function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"vue-color__editable-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],staticClass:"vue-color__editable-input__input",domProps:{value:e.val},on:{keydown:e.handleKeyDown,input:[function(o){o.target.composing||(e.val=o.target.value)},e.update]}}),e._v(" "),t("span",{staticClass:"vue-color__editable-input__label"},[e._v(e._s(e.label))])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.7c0385863aaaa3ba1568.js.map