(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{680:function(e,t,c){var content=c(722);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(20).default)("41878b30",content,!0,{sourceMap:!1})},719:function(e,t,c){e.exports=c.p+"img/error-icon-transparent-21.11eaf60.jpg"},720:function(e,t,c){e.exports=c.p+"img/Flat_tick_icon.svg.1463c18.png"},721:function(e,t,c){"use strict";c(680)},722:function(e,t,c){var l=c(19)((function(i){return i[1]}));l.push([e.i,".spanFocus[data-v-b1dfac72]{color:#1876f2;font-size:12px;top:10px}.spanBlur[data-v-b1dfac72]{color:#65676b;left:16px;top:50%;transform:translateY(-50%)}.WrapdivFocus[data-v-b1dfac72]{border-radius:10px;outline:3px solid #3498db;padding:2px}.checkWrong[data-v-b1dfac72]{border:1px solid #f0284a}.readyCheck[data-v-b1dfac72]{border:1px solid #ced0d4}",""]),l.locals={},e.exports=l},811:function(e,t,c){"use strict";c.r(t);var l={name:"InputCreationPage",props:{check:{type:String,default:""},placeholder:{type:String,default:""}},data:function(){return{value:"",focusInput:!1}},computed:{checkValue:function(){return this.check}},watch:{check:function(e){this.checkValue=e}},methods:{handleBlur:function(){this.focusInput=!1,this.$emit("checkValue",this.value)},handleOnChange:function(e){"wrong"===this.checkValue&&(this.checkValue="ready"),this.value=e.target.value,this.$emit("setValue",this.value)}}},n=(c(721),c(8)),component=Object(n.a)(l,(function(){var e=this,t=e._self._c;return t("label",{attrs:{htmlFor:"input"}},[t("div",{staticClass:"w-full",class:{WrapdivFocus:e.focusInput&&"wrong"!==e.checkValue}},[t("div",{staticClass:"rounded-lg relative flex items-center justify-between",class:{readyCheck:"ready"===e.checkValue||"ok"===e.checkValue||""===e.checkValue,checkWrong:"wrong"===e.checkValue}},[t("div",{staticClass:"w-[92%]"},[t("span",{staticClass:"absolute left-4",class:{spanBlur:!e.focusInput&&!e.value,spanFocus:e.focusInput||e.value},style:{color:"wrong"===e.checkValue?"hsl(350, 87%, 55%)":""}},[e._v(e._s(e.placeholder))]),e._v(" "),t("input",{staticClass:"pt-[26px] px-4 pb-[10px] outline-none w-full",attrs:{id:"input"},domProps:{value:e.value},on:{input:function(t){return e.handleOnChange(t)},focus:function(t){e.focusInput=!0},blur:e.handleBlur}})]),e._v(" "),"wrong"===e.checkValue?t("div",{staticClass:"w-5 h-5 flex items-center justify-center mr-3"},[t("img",{staticClass:"w-full h-full object-cover",attrs:{src:c(719)}})]):e._e(),e._v(" "),"ok"===e.checkValue?t("div",{staticClass:"w-5 h-5 flex items-center justify-center mr-3"},[t("img",{staticClass:"w-full h-full object-cover",attrs:{src:c(720)}})]):e._e()])])])}),[],!1,null,"b1dfac72",null);t.default=component.exports}}]);