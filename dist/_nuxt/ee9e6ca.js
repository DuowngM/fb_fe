(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{563:function(e,t,n){"use strict";n.r(t);var r={name:"InputComment",components:{Icon:n(213).default},data:function(){return{value:"",flag:!0,showIcon:!1,innerText:""}},methods:{hideIcon:function(){this.showIcons=!1},updateValue:function(e){this.value=e.target.innerHTML,this.innerText=e.target.innerText},focusInput:function(){var span=document.createElement("span");this.flag&&(span.style.minWidth="20px",span.style.minHeight="20px",span.style.display="inline-block",span.style.overflowWrap="break-word",this.$refs.inputRef.appendChild(span),this.flag=!1)},addIcon:function(e){var span=document.createElement("span");span.style.backgroundImage="url(".concat(e,")"),span.style.width="20px",span.style.height="20px",span.style.backgroundSize="cover",span.style.display="inline-block",span.style.paddingLeft="20px",this.$refs.inputRef.appendChild(span),this.value=this.$refs.inputRef.innerHTML,this.flag=!0},handleSendMessenger:function(){this.$emit("addMess",{value:this.value,innerText:this.innerText}),this.$refs.handleEnter.blur(),this.$refs.handleEnter.innerHTML="",this.value="",this.innerText=""}}},o=n(8),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",[e.showIcon?t("div",{staticClass:"fixed top-0 left-0 w-screen h-screen",on:{click:function(t){t.stopPropagation(),e.showIcon=!1}}}):e._e(),e._v(" "),t("div",{staticClass:"bg-[#F0F2F5] rounded-3xl min-h-fit dark:bg-[#3A3B3C]"},[t("div",{staticClass:"py-2 px-4 relative"},[t("div",{ref:"handleEnter",staticClass:"w-full min-h-[20px] outline-none flex items-center flex-wrap break-all max-w-[470px] bg-transparent relative z-20 dark:text-[#E4E6EB]",attrs:{contenteditable:""},on:{input:e.updateValue,focus:e.focusInput,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSendMessenger.apply(null,arguments)}}},[t("p",{ref:"inputRef",staticClass:"whitespace-pre-wrap break-all w-[466px] flex items-center"})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.value,expression:"!value"}],staticClass:"absolute text-gray-500 z-10 text-base font-normal top-2 left-3 dark:text-[#E4E6EB]"},[e._v("\n        "+e._s(e.$t("home.writeCmt"))+"\n      ")])]),e._v(" "),t("div",{staticClass:"px-2 flex justify-between"},[t("div",{staticClass:"flex items-center"},[e._m(0),e._v(" "),t("div",{staticClass:"w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer relative",on:{click:function(t){e.showIcon=!e.showIcon}}},[t("i",{staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/w5HRkHSSN-4.png')","background-position":"0px -224px","background-size":"26px 414px",width:"16px",height:"16px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(40%)"}}),e._v(" "),e.showIcon?t("div",{staticClass:"absolute -top-[270px] -left-[145px] -translate-x-1/2 w-[324px] h-[264px] rounded-md bg-white overflow-hidden pt-1 z-30",staticStyle:{"box-shadow":"rgba(0, 0, 0, 0.25) 0px 54px 55px"}},[t("Icon",{attrs:{"show-icon":e.showIcon},on:{"update:addIcon":e.addIcon}})],1):e._e()]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3)]),e._v(" "),e.value?e._e():t("div",{staticClass:"w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer"},[t("i",{staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/w5HRkHSSN-4.png')","background-position":"0px -278px","background-size":"26px 414px",width:"16px",height:"16px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(70%)"}})]),e._v(" "),e.value?t("div",{staticClass:"flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 cursor-pointer",on:{click:e.handleSendMessenger}},[e._m(4)]):e._e()])])])}),[function(){var e=this._self._c;return e("div",{staticClass:"w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer"},[e("i",{staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/w5HRkHSSN-4.png')","background-position":"0px -134px","background-size":"26px 414px",width:"16px",height:"16px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(40%)"}})])},function(){var e=this._self._c;return e("div",{staticClass:"w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer"},[e("i",{staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/w5HRkHSSN-4.png')","background-position":"0px -170px","background-size":"26px 414px",width:"16px",height:"16px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(40%)"}})])},function(){var e=this._self._c;return e("div",{staticClass:"w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer"},[e("i",{staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/w5HRkHSSN-4.png')","background-position":"0px -242px","background-size":"26px 414px",width:"16px",height:"16px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(40%)"}})])},function(){var e=this._self._c;return e("div",{staticClass:"w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer"},[e("i",{staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/w5HRkHSSN-4.png')","background-position":"0px -332px","background-size":"26px 414px",width:"16px",height:"16px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(40%)"}})])},function(){var e=this._self._c;return e("div",{staticClass:"w-6 h-6"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:"https://cdn4.iconfinder.com/data/icons/message-4-flat/512/26_Send-512.png"}})])}],!1,null,"37f3ad6c",null);t.default=component.exports}}]);