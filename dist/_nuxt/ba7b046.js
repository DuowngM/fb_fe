(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3,28,41,42,43,44],{550:function(t,e,n){"use strict";n.d(e,"a",(function(){return z})),n.d(e,"b",(function(){return T}));var o=n(571),r=n.n(o),c=n(572),l=n.n(c),d=n(573),h=n.n(d),f=n(574),m=n.n(f),v=n(575),x=n.n(v),w=n(576),_=n.n(w),k=n(577),y=n.n(k),C=n(578),I=n.n(C),P=n(579),L=n.n(P),j=n(580),S=n.n(j),R=n(581),O=n.n(R),B=n(582),E=n.n(B),M=n(583),$=n.n(M),H=n(584),D=n.n(H),z=[{id:1,icon:r.a,name:"like"},{id:2,icon:_.a,name:"love"},{id:3,icon:m.a,name:"dear"},{id:4,icon:x.a,name:"haha"},{id:5,icon:l.a,name:"wow"},{id:6,icon:y.a,name:"sad"},{id:7,icon:h.a,name:"angry"}],T=[{id:1,icon:I.a,name:"like"},{id:2,icon:L.a,name:"love"},{id:3,icon:S.a,name:"dear"},{id:4,icon:O.a,name:"haha"},{id:5,icon:E.a,name:"wow"},{id:6,icon:$.a,name:"sad"},{id:7,icon:D.a,name:"angry"}]},551:function(t,e,n){"use strict";n.r(e);var o={components:{qqqq2:n(702).default},props:{post:{type:Object,default:function(){}}},methods:{handleHidePostDetailt:function(){this.$emit("showPostDetailt",!1)}}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"fixed w-[700px] h-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden z-[61] rounded-xl bg-white border border-gray-200 shadow-xl"},[e("div",{staticClass:"relative"},[e("div",{staticClass:"w-full h-[60px] bg-white fixed top-0 text-xl font-bold text-center flex justify-center items-center border-b border-gray-300 z-50"},[t._v("\n        Bài viết của "+t._s(t.post.fullName)+"\n      ")]),t._v(" "),e("div",{staticClass:"w-9 h-9 rounded-full flex items-center justify-center bg-[#E4E6EB] absolute right-5 top-4 hover:bg-gray-300 cursor-pointer z-[51]",on:{click:t.handleHidePostDetailt}},[e("svg",{staticClass:"x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo",attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",width:"20",height:"20"}},[e("path",{attrs:{d:"M18.707 5.293a1 1 0 0 0-1.414 0L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 0 0 0-1.414z",fill:"#050505"}})])])]),t._v(" "),e("div",{staticClass:"overflow-y-auto w-full h-full pt-[60px]"},[e("qqqq2",{attrs:{post:t.post}})],1)]),t._v(" "),e("div",{staticClass:"fixed w-screen h-screen bg-[rgba(244,244,244,0.8)] top-0 left-0 z-[60]"})])}),[],!1,null,null,null);e.default=component.exports},563:function(t,e,n){"use strict";n.r(e);var o={name:"InputComment",components:{Icon:n(213).default},data:function(){return{value:"",flag:!0,showIcon:!1,innerText:""}},methods:{hideIcon:function(){this.showIcons=!1},updateValue:function(t){this.value=t.target.innerHTML,this.innerText=t.target.innerText},focusInput:function(){var span=document.createElement("span");this.flag&&(span.style.minWidth="20px",span.style.minHeight="20px",span.style.display="inline-block",span.style.overflowWrap="break-word",this.$refs.inputRef.appendChild(span),this.flag=!1)},addIcon:function(t){var span=document.createElement("span");span.style.backgroundImage="url(".concat(t,")"),span.style.width="20px",span.style.height="20px",span.style.backgroundSize="cover",span.style.display="inline-block",span.style.paddingLeft="20px",this.$refs.inputRef.appendChild(span),this.value=this.$refs.inputRef.innerHTML,this.flag=!0},handleSendMessenger:function(){this.$emit("addMess",{value:this.value,innerText:this.innerText}),this.$refs.handleEnter.blur(),this.$refs.handleEnter.innerHTML="",this.value="",this.innerText=""}}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t.showIcon?e("div",{staticClass:"fixed top-0 left-0 w-screen h-screen",on:{click:function(e){e.stopPropagation(),t.showIcon=!1}}}):t._e(),t._v(" "),e("div",{staticClass:"bg-[#F0F2F5] rounded-3xl min-h-fit dark:bg-[#3A3B3C]"},[e("div",{staticClass:"py-2 px-4 relative"},[e("div",{ref:"handleEnter",staticClass:"w-full min-h-[20px] outline-none flex items-center flex-wrap break-all max-w-[470px] bg-transparent relative z-20 dark:text-[#E4E6EB]",attrs:{contenteditable:""},on:{input:t.updateValue,focus:t.focusInput,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSendMessenger.apply(null,arguments)}}},[e("p",{ref:"inputRef",staticClass:"whitespace-pre-wrap break-all w-[466px] flex items-center"})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.value,expression:"!value"}],staticClass:"absolute text-gray-500 z-10 text-base font-normal top-2 left-3 dark:text-[#E4E6EB]"},[t._v("\n        "+t._s(t.$t("home.writeCmt"))+"\n      ")])]),t._v(" "),e("div",{staticClass:"px-2 flex justify-between"},[e("div",{staticClass:"flex items-center"},[t._m(0),t._v(" "),e("div",{staticClass:"w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer relative",on:{click:function(e){t.showIcon=!t.showIcon}}},[e("i",{staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/w5HRkHSSN-4.png')","background-position":"0px -224px","background-size":"26px 414px",width:"16px",height:"16px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(40%)"}}),t._v(" "),t.showIcon?e("div",{staticClass:"absolute -top-[270px] -left-[145px] -translate-x-1/2 w-[324px] h-[264px] rounded-md bg-white overflow-hidden pt-1 z-30",staticStyle:{"box-shadow":"rgba(0, 0, 0, 0.25) 0px 54px 55px"}},[e("Icon",{attrs:{"show-icon":t.showIcon},on:{"update:addIcon":t.addIcon}})],1):t._e()]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),t.value?t._e():e("div",{staticClass:"w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer"},[e("i",{staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/w5HRkHSSN-4.png')","background-position":"0px -278px","background-size":"26px 414px",width:"16px",height:"16px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(70%)"}})]),t._v(" "),t.value?e("div",{staticClass:"flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200 cursor-pointer",on:{click:t.handleSendMessenger}},[t._m(4)]):t._e()])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer"},[t("i",{staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/w5HRkHSSN-4.png')","background-position":"0px -134px","background-size":"26px 414px",width:"16px",height:"16px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(40%)"}})])},function(){var t=this._self._c;return t("div",{staticClass:"w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer"},[t("i",{staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/w5HRkHSSN-4.png')","background-position":"0px -170px","background-size":"26px 414px",width:"16px",height:"16px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(40%)"}})])},function(){var t=this._self._c;return t("div",{staticClass:"w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer"},[t("i",{staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/w5HRkHSSN-4.png')","background-position":"0px -242px","background-size":"26px 414px",width:"16px",height:"16px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(40%)"}})])},function(){var t=this._self._c;return t("div",{staticClass:"w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center cursor-pointer"},[t("i",{staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/w5HRkHSSN-4.png')","background-position":"0px -332px","background-size":"26px 414px",width:"16px",height:"16px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(40%)"}})])},function(){var t=this._self._c;return t("div",{staticClass:"w-6 h-6"},[t("img",{staticClass:"w-full h-full object-cover",attrs:{src:"https://cdn4.iconfinder.com/data/icons/message-4-flat/512/26_Send-512.png"}})])}],!1,null,"37f3ad6c",null);e.default=component.exports},565:function(t,e,n){"use strict";n.r(e);n(47);var o=n(22),r=n(550),c=n(622),l=o.a.get("likePostRepository"),d={name:"LikeButton",components:{IconLikePost:c.default},props:{post:{type:Object,default:function(){return{status:""}}}},data:function(){return{showFiveIconLike:!1,staticIcon:r.b,newPost:{},user:null}},watch:{post:{handler:function(t){this.newPost=t},immediate:!0,deep:!0},"$store.state.authModule.user":{handler:function(t){this.user=t},immediate:!0,deep:!0}},methods:{handleAddLike:function(t){"Unreact"===this.newPost.status&&(t.name?this.newPost.status=t.name:(t.icon="/_nuxt/assets/post/IconLike/like.gif",t.name="like",t.id=1,this.newPost.status="like"),this.$emit("addLike",t)),"Unreact"!==this.newPost.status&&(t.name?(this.newPost.status=t.name,this.$emit("addLike",t)):(this.newPost.status="Unreact",l.deleteLikePost({postId:this.newPost.post_id,userId:this.user.user_id})))},handleAddLike1:function(){this.newPost.status="like";var t={name:"like",icon:"/_nuxt/assets/post/IconLike/like.gif",id:1};l.postLike({userId:this.user.user_id,postId:this.newPost.post_id,type:t.name}),this.handleAddLike(t)},handleUnLike:function(){l.deleteLikePost({userId:this.user.user_id,postId:this.newPost.post_id}),this.$emit("Unlike"),this.newPost.status="Unreact"}}},h=n(8),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative text-[#65676B] text-[15px] font-semibold flex items-center gap-2 justify-center hover:bg-gray-200 py-2 rounded cursor-pointer",on:{mouseover:function(e){t.showFiveIconLike=!0},mouseleave:function(e){t.showFiveIconLike=!1}}},["Unreact"===t.newPost.status?e("div",{staticClass:"font-semibold flex items-center justify-center"},[e("i",{staticStyle:{color:"red","background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/WoftRVRTwaO.png')","background-position":"-130px -132px","background-size":"190px 204px",width:"18px",height:"18px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(40%)"}})]):t._e(),t._v(" "),"like"===t.newPost.status?e("div",{staticClass:"w-[18px] h-[18px] flex items-center justify-center overflow-hidden -ml-1 rounded-full"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.staticIcon[0].icon}})]):t._e(),t._v(" "),"love"===t.newPost.status?e("div",{staticClass:"w-[18px] h-[18px] flex items-center justify-center overflow-hidden -ml-1 rounded-full"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.staticIcon[1].icon}})]):t._e(),t._v(" "),"dear"===t.newPost.status?e("div",{staticClass:"w-[18px] h-[18px] flex items-center justify-center overflow-hidden -ml-1 rounded-full"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.staticIcon[2].icon}})]):t._e(),t._v(" "),"haha"===t.newPost.status?e("div",{staticClass:"w-[18px] h-[18px] flex items-center justify-center overflow-hidden -ml-1 rounded-full"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.staticIcon[3].icon}})]):t._e(),t._v(" "),"wow"===t.newPost.status?e("div",{staticClass:"w-[18px] h-[18px] flex items-center justify-center overflow-hidden -ml-1 rounded-full"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.staticIcon[4].icon}})]):t._e(),t._v(" "),"sad"===t.newPost.status?e("div",{staticClass:"w-[18px] h-[18px] flex items-center justify-center overflow-hidden -ml-1 rounded-full"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.staticIcon[5].icon}})]):t._e(),t._v(" "),"angry"===t.newPost.status?e("div",{staticClass:"w-[18px] h-[18px] flex items-center justify-center overflow-hidden -ml-1 rounded-full"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.staticIcon[6].icon}})]):t._e(),t._v(" "),"Unreact"===t.newPost.status?e("div",{staticClass:"text-[15px]",on:{click:t.handleAddLike1}},[t._v(t._s(t.$t("home.like")))]):t._e(),t._v(" "),"like"===t.newPost.status?e("div",{staticClass:"text-[rgb(32,120,244)] font-semibold text-[15px]",on:{click:t.handleUnLike}},[t._v("\n  "+t._s(t.$t("home.like"))+"\n  ")]):t._e(),t._v(" "),"love"===t.newPost.status?e("div",{staticClass:"text-[rgb(243,62,88)]",on:{click:t.handleUnLike}},[t._v("\n    "+t._s(t.$t("home.love"))+"\n  ")]):t._e(),t._v(" "),"dear"===t.newPost.status?e("div",{staticClass:"text-[rgb(247,177,37)]",on:{click:t.handleUnLike}},[t._v("\n    "+t._s(t.$t("home.care"))+"\n  ")]):t._e(),t._v(" "),"haha"===t.newPost.status?e("div",{staticClass:"text-[rgb(247,177,37)]",on:{click:t.handleUnLike}},[t._v("\n    "+t._s(t.$t("home.haha"))+"\n  ")]):t._e(),t._v(" "),"wow"===t.newPost.status?e("div",{staticClass:"text-[rgb(247,177,37)]",on:{click:t.handleUnLike}},[t._v("\n    "+t._s(t.$t("home.wow"))+"\n  ")]):t._e(),t._v(" "),"sad"===t.newPost.status?e("div",{staticClass:"text-[rgb(247,177,37)]",on:{click:t.handleUnLike}},[t._v("\n    "+t._s(t.$t("home.sad"))+"\n  ")]):t._e(),t._v(" "),"angry"===t.newPost.status?e("div",{staticClass:"text-[rgb(233,113,15)]",on:{click:t.handleUnLike}},[t._v("\n    "+t._s(t.$t("home.angry"))+"\n  ")]):t._e(),t._v(" "),t.showFiveIconLike?e("div",{staticClass:"absolute z-30 -top-[48px] left-0 bg-white rounded-3xl shadow-xl border border-gray-300",on:{mouseover:function(e){t.showFiveIconLike=!0},mouseleave:function(e){t.showFiveIconLike=!1}}},[e("IconLikePost",{attrs:{id:t.post.post_id},on:{handleAddLike:t.handleAddLike}})],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},571:function(t,e,n){t.exports=n.p+"img/like.32dd38e.gif"},572:function(t,e,n){t.exports=n.p+"img/wow.1408d28.gif"},573:function(t,e,n){t.exports=n.p+"img/angry.beb21df.gif"},574:function(t,e,n){t.exports=n.p+"img/care.464f2a6.gif"},575:function(t,e,n){t.exports=n.p+"img/haha.972b648.gif"},576:function(t,e,n){t.exports=n.p+"img/love.12b6320.gif"},577:function(t,e,n){t.exports=n.p+"img/sad.06da7b8.gif"},578:function(t,e,n){t.exports=n.p+"img/likeStatic.030d77c.svg"},579:function(t,e,n){t.exports=n.p+"img/loveStatic.1340f6c.svg"},580:function(t,e,n){t.exports=n.p+"img/dearStatic.24cb2ab.svg"},581:function(t,e,n){t.exports=n.p+"img/hahaStatic.3388777.svg"},582:function(t,e,n){t.exports=n.p+"img/wowStatic.ec53b1c.svg"},583:function(t,e,n){t.exports=n.p+"img/sadStatic.efb1470.svg"},584:function(t,e,n){t.exports=n.p+"img/angryStatic.791420f.svg"},609:function(t,e,n){"use strict";n.r(e);var o=n(11),r=(n(27),n(22)),c=n(664),l=n(563),d=r.a.get("posts"),h={components:{RecommentDetail:c.default,InputComment:l.default},props:{comment:{type:Object,default:function(){}}},data:function(){return{showRecomment:!1,reComments:[],showInput:!1,user:null}},watch:{"$store.state.authModule.user":{handler:function(t){this.user=t},immediate:!0,deep:!0}},created:function(){this.fetchRecomment()},methods:{handleShowPost:function(){this.$emit("showPostDetail")},fetchRecomment:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.getReComment({commentId:t.comment.id});case 3:n=e.sent,t.reComments=n.data,console.log(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},handleShowRecomment:function(){this.showRecomment=!0,this.fetchRecomment()},addMess:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.createReComment({commentId:e.comment.id,content:t.value,userId:e.user.user_id});case 3:o={avatar:e.user.avatar,content:t.value,fullName:e.user.fullName,user_id:e.user.user_id},e.reComments.unshift(o),e.showRecomment=!0,n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}}},f=n(8),component=Object(f.a)(h,(function(){var t,e=this,n=e._self._c;return n("div",[n("div",{staticClass:"pl-4 pt-1 flex gap-2 my-1"},[n("div",{staticClass:"w-8 h-8 rounded-full overflow-hidden"},[n("img",{staticClass:"w-full h-full object-cover",attrs:{src:e.comment.avatar}})]),e._v(" "),n("div",{},[n("div",{staticClass:"px-3 py-1 bg-[#F0F2F5] rounded-2xl overflow-hidden dark:bg-[#3A3B3C]"},[n("div",{staticClass:"text-[13px] font-semibold dark:text-[#E4E6EB]"},[n("nuxt-link",{attrs:{to:"/".concat(e.comment.user_id)}},[e._v(e._s(e.comment.fullName))])],1),e._v(" "),n("div",{staticClass:"text-sm font-normal dark:text-[#E4E6EB]",domProps:{innerHTML:e._s(e.comment.content)}})]),e._v(" "),n("div",{staticClass:"flex"},[n("div",{staticClass:"text-[#65676B] font-bold text-[11px] cursor-pointer hover:underline ml-3"},[e._v("\n          Thích\n        ")]),e._v(" "),n("div",{staticClass:"text-[#65676B] font-bold text-[11px] cursor-pointer hover:underline ml-3",on:{click:function(t){e.showInput=!0}}},[e._v("\n          Phản hồi\n        ")]),e._v(" "),n("div",{staticClass:"text-[#65676B] font-bold text-[11px] cursor-pointer hover:underline ml-3"},[e._v("\n          Chia sẻ\n        ")]),e._v(" "),n("div",{staticClass:"text-[#65676B] text-[11px] cursor-pointer hover:underline ml-3"},[e._v("\n          "+e._s(e.comment.created_at)+"\n        ")])]),e._v(" "),n("div",{staticClass:"ml-3 text-[#65676B] text-sm font-semibold hover:underline cursor-pointer flex items-center mt-1"},[(null===(t=e.reComments)||void 0===t?void 0:t.length)>0&&!e.showRecomment?n("div",{staticClass:"flex items-center gap-2",on:{click:e.handleShowRecomment}},[n("i",{staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/mMPDyvofC5V.png')","background-position":"0px -404px","background-size":"26px 422px",width:"16px",height:"16px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(40%)"}}),e._v("\n          Xem thêm "+e._s(e.reComments.length)+" phản hồi\n        ")]):e._e()]),e._v(" "),e.showRecomment?n("div",e._l(e.reComments,(function(t,e){return n("div",{key:e},[n("RecommentDetail",{attrs:{"re-comment":t}})],1)})),0):e._e(),e._v(" "),e.showInput||e.showRecomment?n("div",[n("InputComment",{on:{addMess:e.addMess}})],1):e._e()])])])}),[],!1,null,null,null);e.default=component.exports},622:function(t,e,n){"use strict";n.r(e);n(117),n(47);var o=n(550),r=n(22).a.get("likePostRepository"),c={props:{id:{type:Number,default:0}},data:function(){return{animatedIconLikePost:o.a,flag:!0}},computed:{userId:function(){var t;return null===(t=this.$store.state.authModule.user)||void 0===t?void 0:t.user_id}},methods:{handleLike:function(t){console.log(t),r.postLike({userId:this.userId,postId:this.id,type:t.name}),this.$emit("handleAddLike",t)}}},l=n(8),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex"},t._l(t.animatedIconLikePost,(function(n){return e("div",{key:n.id,staticClass:"w-12 h-12 flex items-center justify-center cursor-pointer",on:{click:function(e){return e.stopPropagation(),t.handleLike(n)}}},[e("img",{staticClass:"w-full h-full object-cover hover:scale-150 transition duration-300 ease-in-out",attrs:{src:n.icon}})])})),0)}),[],!1,null,null,null);e.default=component.exports},655:function(t,e,n){var content=n(679);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("1a8cce31",content,!0,{sourceMap:!1})},664:function(t,e,n){"use strict";n.r(e);var o={props:{reComment:{type:Object,default:function(){}}},created:function(){console.log(this.reComment)}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pl-4 pt-1 flex gap-2 my-1"},[e("div",{staticClass:"w-8 h-8 rounded-full overflow-hidden"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.reComment.avatar}})]),t._v(" "),e("div",{},[e("div",{staticClass:"px-3 py-1 bg-[#F0F2F5] rounded-2xl overflow-hidden"},[e("div",{staticClass:"text-[13px] font-semibold"},[t._v(t._s(t.reComment.fullName))]),t._v(" "),e("div",{staticClass:"text-sm font-normal",domProps:{innerHTML:t._s(t.reComment.content)}})]),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"text-[#65676B] font-bold text-[11px] cursor-pointer hover:underline ml-3"},[t._v("\n        Thích\n      ")]),t._v(" "),e("div",{staticClass:"text-[#65676B] font-bold text-[11px] cursor-pointer hover:underline ml-3"},[t._v("\n        Phản hồi\n      ")]),t._v(" "),e("div",{staticClass:"text-[#65676B] font-bold text-[11px] cursor-pointer hover:underline ml-3"},[t._v("\n        Chia sẻ\n      ")]),t._v(" "),e("div",{staticClass:"text-[#65676B] text-[11px] cursor-pointer hover:underline ml-3"},[t._v("\n        "+t._s(t.reComment.created_at)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},678:function(t,e,n){"use strict";n(655)},679:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,".comment[data-v-cd0ccbb0]{box-shadow:0 0 16px rgba(17,17,26,.1)}",""]),o.locals={},t.exports=o},702:function(t,e,n){"use strict";n.r(e);n(32),n(48),n(44),n(63),n(64);var o=n(11),r=n(28),c=(n(27),n(23),n(49),n(82),n(138),n(47),n(212),n(46),n(368),n(551)),l=n(16),d=n(550),h=n(22),f=n(567),m=n(623),v=n(565),x=n(563),w=n(609);function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y=h.a.get("posts"),C={name:"ExternalPost",components:{ArrangePhotos:f.default,HeaderExternalPost:m.default,LikeButton:v.default,InputComment:x.default,CommentDetail:w.default,PostDetail:c.default},props:{post:{type:Object,default:function(){return{background:"",content:""}}}},data:function(){return{list:["https://thibanglaixemay360.com/wp-content/uploads/2023/05/a4dd8599ac65f84eebce0091404a6ee4.jpg"],showFiveIconLike:!1,staticIcon:d.b,showSetting:!1,totalLike:0,listImages:[],listVideos:[],checkLike:!1,postCopy:null,threeLike:[],comments:[],showPostDetail:!1,userId:null}},watch:{post:{handler:"handleListMedia",deep:!0,immediate:!0},postCopy:{handler:"handleThreeLike",deep:!0},comments:{handler:"fetchGetComment",deep:!0,immediate:!0},"$store.state.authModule.user":{handler:function(t){this.userId=t.user_id},deep:!0,immediate:!0}},created:function(){var t=this;console.log("thss",this.post),this.postCopy=this.post.reactions,this.post.reactions.forEach((function(e){t.totalLike=e.user_id.length+t.totalLike})),this.checkLike=this.post.reactions.some((function(e){return e.user_id.some((function(e){return+e==+t.userId}))})),this.handleThreeLike()},methods:{handleListMedia:function(){var t,e=this;null===(t=this.post.media)||void 0===t||t.forEach((function(t){"image"===t.media_type&&e.listImages.push({url:t.url,postId:t.post_id}),"video"===t.media_type&&e.listVideos.push({url:t.url,postId:t.post_id})}))},addLike:function(t){var e=this;this.checkLike||(this.totalLike+=1,this.checkLike=!0),this.postCopy=this.postCopy.map((function(n){var o=n.user_id.indexOf(e.userId);return o>-1&&n.user_id.splice(o,1),n.type===t.name&&n.user_id.push(e.userId),n}))},handleThreeLike:function(){var t=this,e=d.b.map((function(e){var n=t.postCopy.find((function(t){return t.type===e.name}));return k(k({},e),n)}));this.threeLike=e.sort((function(a,b){return b.user_id.length-a.user_id.length})).slice(0,3)},addMess:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.value,t.innerText,n.next=3,y.createComment({commentValue:o,postId:e.post.post_id,userId:e.userId});case 3:r=n.sent,l.a.emit("comment_notification",{commentId:r.data.id,postId:e.post.post_id}),console.log("comment ===> ",r.data),e.fetchGetComment();case 7:case"end":return n.stop()}}),n)})))()},fetchGetComment:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getComment({postId:t.post.post_id});case 2:n=e.sent,t.comments=n.data.allComments;case 4:case"end":return e.stop()}}),e)})))()},handleShowPostDetailt:function(t){this.showPostDetail=t}}},I=(n(678),n(8)),component=Object(I.a)(C,(function(){var t,e,n=this,o=n._self._c;return o("div",{staticClass:"relative"},[n.showPostDetail?o("div",[o("PostDetail",{attrs:{post:n.post},on:{showPostDetailt:n.handleShowPostDetailt}})],1):n._e(),n._v(" "),o("HeaderExternalPost",{attrs:{post:n.post}}),n._v(" "),null!==(t=n.post)&&void 0!==t&&t.background?o("div",{staticClass:"w-full h-[410px] bg-cover bg-center flex items-center justify-center text-center",style:{backgroundImage:null===(e=n.post)||void 0===e?void 0:e.background}},[o("div",{staticClass:"px-4 pt-1 pb-4 text-white font-semibold text-3xl flex items-center justify-center text-center",domProps:{innerHTML:n._s(n.post.content)}})]):o("div",[o("div",{staticClass:"px-4 pt-1 pb-4 text-sm",domProps:{innerHTML:n._s(n.post.content)}})]),n._v(" "),o("div",[o("ArrangePhotos",{attrs:{"list-images":n.listImages,"list-videos":n.listVideos,height:"700"}})],1),n._v(" "),o("div",{staticClass:"mx-4 py-3 flex items-center justify-between"},[o("div",{staticClass:"flex gap-2"},[o("div",{staticClass:"flex items-center"},n._l(n.threeLike,(function(t,e){return o("div",{key:e},[t.user_id.length>0?o("div",{staticClass:"w-[18px] h-[18px] flex items-center justify-center overflow-hidden border border-white rounded-full relative z-20"},[o("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.icon}})]):n._e()])})),0),n._v(" "),n.totalLike>0?o("div",{staticClass:"text-[#65676B] text-sm hover:underline cursor-pointer"},[n._v("\n        "+n._s(n.totalLike)+"\n      ")]):n._e()]),n._v(" "),o("div",{staticClass:"flex items-center gap-4"},[o("div",{staticClass:"text-[#65676B] text-sm hover:underline cursor-pointer"},[n._v("\n        "+n._s(n.comments.length)+" bình luận\n      ")]),n._v(" "),o("div",{staticClass:"text-[#65676B] text-sm hover:underline cursor-pointer"},[n._v("\n        3 lượt chia sẻ\n      ")])])]),n._v(" "),o("div",{staticClass:"mx-3 border-t dark:border-[#65676B] :border-[#3E4042]"},[o("div",{staticClass:"relative grid grid-cols-3 items-center justify-between h-11"},[o("LikeButton",{attrs:{post:n.post},on:{addLike:n.addLike}}),n._v(" "),n._m(0),n._v(" "),n._m(1)],1)]),n._v(" "),o("div",{staticClass:"mb-[88px]"},[o("div",{staticClass:"mx-4 text-[#65676B] text-[15px] font-medium cursor-pointer hover:underline dark:text-[#B0B3B8]",on:{click:function(t){n.showPostDetail=!0}}},[n._v("\n    "+n._s(n.$t("home.moreComment"))+"\n    ")]),n._v(" "),n._l(n.comments,(function(t,e){return o("div",{key:e},[o("CommentDetail",{attrs:{comment:t}})],1)})),n._v(" "),o("div",{staticClass:"comment p-4 pt-1 fixed bottom-0 w-full bg-white"},[o("InputComment",{on:{addMess:n.addMess}})],1)],2)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-[#65676B] text-[15px] font-semibold flex items-center gap-2 justify-center hover:bg-gray-200 py-2 rounded cursor-pointer"},[e("div",{staticClass:"font-semibold flex items-center justify-center"},[e("i",{staticClass:"x1b0d499 x1d69dk1",staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/WoftRVRTwaO.png')","background-position":"-170px -62px","background-size":"190px 204px",width:"18px",height:"18px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(40%)"},attrs:{"data-visualcompletion":"css-img"}})]),t._v(" "),e("div",[t._v("Bình Luận")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-[#65676B] text-[15px] font-semibold flex items-center gap-2 justify-center hover:bg-gray-200 py-2 rounded cursor-pointer"},[e("div",{staticClass:"font-semibold flex items-center justify-center"},[e("i",{staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/WoftRVRTwaO.png')","background-position":"-150px -132px","background-size":"190px 204px",width:"18px",height:"18px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(40%)"}})]),t._v(" "),e("div",[t._v("Chia sẻ")])])}],!1,null,"cd0ccbb0",null);e.default=component.exports;installComponents(component,{PostDetail:n(551).default})}}]);