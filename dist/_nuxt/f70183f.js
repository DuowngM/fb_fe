(window.webpackJsonp=window.webpackJsonp||[]).push([[72,41,43],{550:function(t,e,n){"use strict";n.d(e,"a",(function(){return R})),n.d(e,"b",(function(){return V}));var o=n(571),c=n.n(o),r=n(572),l=n.n(r),d=n(573),f=n.n(d),v=n(574),h=n.n(v),m=n(575),x=n.n(m),w=n(576),_=n.n(w),k=n(577),C=n.n(k),y=n(578),L=n.n(y),P=n(579),I=n.n(P),j=n(580),U=n.n(j),$=n(581),B=n.n($),A=n(582),F=n.n(A),S=n(583),M=n.n(S),O=n(584),z=n.n(O),R=[{id:1,icon:c.a,name:"like"},{id:2,icon:_.a,name:"love"},{id:3,icon:h.a,name:"dear"},{id:4,icon:x.a,name:"haha"},{id:5,icon:l.a,name:"wow"},{id:6,icon:C.a,name:"sad"},{id:7,icon:f.a,name:"angry"}],V=[{id:1,icon:L.a,name:"like"},{id:2,icon:I.a,name:"love"},{id:3,icon:U.a,name:"dear"},{id:4,icon:B.a,name:"haha"},{id:5,icon:F.a,name:"wow"},{id:6,icon:M.a,name:"sad"},{id:7,icon:z.a,name:"angry"}]},565:function(t,e,n){"use strict";n.r(e);n(47);var o=n(22),c=n(550),r=n(622),l=o.a.get("likePostRepository"),d={name:"LikeButton",components:{IconLikePost:r.default},props:{post:{type:Object,default:function(){return{status:""}}}},data:function(){return{showFiveIconLike:!1,staticIcon:c.b,newPost:{},user:null}},watch:{post:{handler:function(t){this.newPost=t},immediate:!0,deep:!0},"$store.state.authModule.user":{handler:function(t){this.user=t},immediate:!0,deep:!0}},methods:{handleAddLike:function(t){"Unreact"===this.newPost.status&&(t.name?this.newPost.status=t.name:(t.icon="/_nuxt/assets/post/IconLike/like.gif",t.name="like",t.id=1,this.newPost.status="like"),this.$emit("addLike",t)),"Unreact"!==this.newPost.status&&(t.name?(this.newPost.status=t.name,this.$emit("addLike",t)):(this.newPost.status="Unreact",l.deleteLikePost({postId:this.newPost.post_id,userId:this.user.user_id})))},handleAddLike1:function(){this.newPost.status="like";var t={name:"like",icon:"/_nuxt/assets/post/IconLike/like.gif",id:1};l.postLike({userId:this.user.user_id,postId:this.newPost.post_id,type:t.name}),this.handleAddLike(t)},handleUnLike:function(){l.deleteLikePost({userId:this.user.user_id,postId:this.newPost.post_id}),this.$emit("Unlike"),this.newPost.status="Unreact"}}},f=n(8),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative text-[#65676B] text-[15px] font-semibold flex items-center gap-2 justify-center hover:bg-gray-200 py-2 rounded cursor-pointer",on:{mouseover:function(e){t.showFiveIconLike=!0},mouseleave:function(e){t.showFiveIconLike=!1}}},["Unreact"===t.newPost.status?e("div",{staticClass:"font-semibold flex items-center justify-center"},[e("i",{staticStyle:{color:"red","background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/WoftRVRTwaO.png')","background-position":"-130px -132px","background-size":"190px 204px",width:"18px",height:"18px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(40%)"}})]):t._e(),t._v(" "),"like"===t.newPost.status?e("div",{staticClass:"w-[18px] h-[18px] flex items-center justify-center overflow-hidden -ml-1 rounded-full"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.staticIcon[0].icon}})]):t._e(),t._v(" "),"love"===t.newPost.status?e("div",{staticClass:"w-[18px] h-[18px] flex items-center justify-center overflow-hidden -ml-1 rounded-full"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.staticIcon[1].icon}})]):t._e(),t._v(" "),"dear"===t.newPost.status?e("div",{staticClass:"w-[18px] h-[18px] flex items-center justify-center overflow-hidden -ml-1 rounded-full"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.staticIcon[2].icon}})]):t._e(),t._v(" "),"haha"===t.newPost.status?e("div",{staticClass:"w-[18px] h-[18px] flex items-center justify-center overflow-hidden -ml-1 rounded-full"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.staticIcon[3].icon}})]):t._e(),t._v(" "),"wow"===t.newPost.status?e("div",{staticClass:"w-[18px] h-[18px] flex items-center justify-center overflow-hidden -ml-1 rounded-full"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.staticIcon[4].icon}})]):t._e(),t._v(" "),"sad"===t.newPost.status?e("div",{staticClass:"w-[18px] h-[18px] flex items-center justify-center overflow-hidden -ml-1 rounded-full"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.staticIcon[5].icon}})]):t._e(),t._v(" "),"angry"===t.newPost.status?e("div",{staticClass:"w-[18px] h-[18px] flex items-center justify-center overflow-hidden -ml-1 rounded-full"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.staticIcon[6].icon}})]):t._e(),t._v(" "),"Unreact"===t.newPost.status?e("div",{staticClass:"text-[15px]",on:{click:t.handleAddLike1}},[t._v(t._s(t.$t("home.like")))]):t._e(),t._v(" "),"like"===t.newPost.status?e("div",{staticClass:"text-[rgb(32,120,244)] font-semibold text-[15px]",on:{click:t.handleUnLike}},[t._v("\n  "+t._s(t.$t("home.like"))+"\n  ")]):t._e(),t._v(" "),"love"===t.newPost.status?e("div",{staticClass:"text-[rgb(243,62,88)]",on:{click:t.handleUnLike}},[t._v("\n    "+t._s(t.$t("home.love"))+"\n  ")]):t._e(),t._v(" "),"dear"===t.newPost.status?e("div",{staticClass:"text-[rgb(247,177,37)]",on:{click:t.handleUnLike}},[t._v("\n    "+t._s(t.$t("home.care"))+"\n  ")]):t._e(),t._v(" "),"haha"===t.newPost.status?e("div",{staticClass:"text-[rgb(247,177,37)]",on:{click:t.handleUnLike}},[t._v("\n    "+t._s(t.$t("home.haha"))+"\n  ")]):t._e(),t._v(" "),"wow"===t.newPost.status?e("div",{staticClass:"text-[rgb(247,177,37)]",on:{click:t.handleUnLike}},[t._v("\n    "+t._s(t.$t("home.wow"))+"\n  ")]):t._e(),t._v(" "),"sad"===t.newPost.status?e("div",{staticClass:"text-[rgb(247,177,37)]",on:{click:t.handleUnLike}},[t._v("\n    "+t._s(t.$t("home.sad"))+"\n  ")]):t._e(),t._v(" "),"angry"===t.newPost.status?e("div",{staticClass:"text-[rgb(233,113,15)]",on:{click:t.handleUnLike}},[t._v("\n    "+t._s(t.$t("home.angry"))+"\n  ")]):t._e(),t._v(" "),t.showFiveIconLike?e("div",{staticClass:"absolute z-30 -top-[48px] left-0 bg-white rounded-3xl shadow-xl border border-gray-300",on:{mouseover:function(e){t.showFiveIconLike=!0},mouseleave:function(e){t.showFiveIconLike=!1}}},[e("IconLikePost",{attrs:{id:t.post.post_id},on:{handleAddLike:t.handleAddLike}})],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},571:function(t,e,n){t.exports=n.p+"img/like.32dd38e.gif"},572:function(t,e,n){t.exports=n.p+"img/wow.1408d28.gif"},573:function(t,e,n){t.exports=n.p+"img/angry.beb21df.gif"},574:function(t,e,n){t.exports=n.p+"img/care.464f2a6.gif"},575:function(t,e,n){t.exports=n.p+"img/haha.972b648.gif"},576:function(t,e,n){t.exports=n.p+"img/love.12b6320.gif"},577:function(t,e,n){t.exports=n.p+"img/sad.06da7b8.gif"},578:function(t,e,n){t.exports=n.p+"img/likeStatic.030d77c.svg"},579:function(t,e,n){t.exports=n.p+"img/loveStatic.1340f6c.svg"},580:function(t,e,n){t.exports=n.p+"img/dearStatic.24cb2ab.svg"},581:function(t,e,n){t.exports=n.p+"img/hahaStatic.3388777.svg"},582:function(t,e,n){t.exports=n.p+"img/wowStatic.ec53b1c.svg"},583:function(t,e,n){t.exports=n.p+"img/sadStatic.efb1470.svg"},584:function(t,e,n){t.exports=n.p+"img/angryStatic.791420f.svg"},622:function(t,e,n){"use strict";n.r(e);n(117),n(47);var o=n(550),c=n(22).a.get("likePostRepository"),r={props:{id:{type:Number,default:0}},data:function(){return{animatedIconLikePost:o.a,flag:!0}},computed:{userId:function(){var t;return null===(t=this.$store.state.authModule.user)||void 0===t?void 0:t.user_id}},methods:{handleLike:function(t){console.log(t),c.postLike({userId:this.userId,postId:this.id,type:t.name}),this.$emit("handleAddLike",t)}}},l=n(8),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex"},t._l(t.animatedIconLikePost,(function(n){return e("div",{key:n.id,staticClass:"w-12 h-12 flex items-center justify-center cursor-pointer",on:{click:function(e){return e.stopPropagation(),t.handleLike(n)}}},[e("img",{staticClass:"w-full h-full object-cover hover:scale-150 transition duration-300 ease-in-out",attrs:{src:n.icon}})])})),0)}),[],!1,null,null,null);e.default=component.exports},677:function(t,e,n){var content=n(717);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("031bd917",content,!0,{sourceMap:!1})},716:function(t,e,n){"use strict";n(677)},717:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,".shadow[data-v-6f4f77a1]{box-shadow:0 5px 15px rgba(0,0,0,.35)}",""]),o.locals={},t.exports=o},808:function(t,e,n){"use strict";n.r(e);var o={name:"VideoDetail",components:{LikeButton:n(565).default},props:{video:{type:Object,default:function(){}}}},c=(n(716),n(8)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"shadow w-[740px] mx-auto bg-white rounded-lg mt-4"},[e("div",{staticClass:"p-2"},[e("div",{staticClass:"flex gap-3 items-center"},[e("div",{staticClass:"w-12 h-12 flex items-center justify-center rounded-full overflow-hidden"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.video.avatar}})]),t._v(" "),e("div",[e("div",{staticClass:"text-[15px] font-semibold flex gap-1 items-center"},[e("span",{staticClass:"hover:underline cursor-pointer"},[t._v("\n            "+t._s(t.video.fullName)+"\n          ")]),t._v(" "),e("div",{staticClass:"text-gray-700"}),t._v(" "),e("span",{staticClass:"text-blue-500 font-semibold hover:underline cursor-pointer"},[t._v("\n            Theo dõi\n          ")])]),t._v(" "),e("div",{staticClass:"text-[#65676B] text-xs flex items-center gap-2"},[t._v("\n          26 tháng 4, 2022 \n        ")])])])]),t._v(" "),e("div",{staticClass:"px-2 text-[17px] pb-2",domProps:{innerHTML:t._s(t.video.content)}}),t._v(" "),e("div",[e("video",{staticClass:"aspect-video w-full h-full bg-black",attrs:{controls:""}},[e("source",{attrs:{src:t.video.url}})])]),t._v(" "),e("div",{staticClass:"flex items-center justify-between text-[13px] text-[#65676B]"},[e("div",{staticClass:"grid grid-cols-3 h-11 basis-[40%] mx-auto border-t border-gray-300 relative"},[e("div",[e("LikeButton")],1),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"text-gray-500 font-semibold flex items-center justify-center gap-2 cursor-pointer py-2 h-[80%] my-auto hover:bg-gray-300 rounded"},[t("div",{staticClass:"comment font-semibold"}),this._v("\n        Bình luận\n      ")])},function(){var t=this._self._c;return t("div",{staticClass:"text-gray-500 font-semibold flex items-center justify-center gap-2 cursor-pointer py-2 h-[80%] my-auto hover:bg-gray-300 rounded"},[t("div",{staticClass:"share font-semibold"}),this._v("\n        Chia sẻ\n      ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-1 flex items-center justify-end mr-4"},[e("div",{staticClass:"w-[18px] h-[18px] overflow-hidden mr-1"},[e("img",{staticClass:"object-cover w-full",attrs:{src:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"}})]),t._v(" "),e("div",{staticClass:"flex items-center gap-1"},[t._v("\n        4,9k .68 bình luận . 475k lượt xem\n      ")])])}],!1,null,"6f4f77a1",null);e.default=component.exports}}]);