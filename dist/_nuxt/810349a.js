(window.webpackJsonp=window.webpackJsonp||[]).push([[125,15,39],{1056:function(t,e,r){"use strict";r.r(e);r(32),r(48),r(44),r(23),r(63),r(49),r(64);var n=r(11),o=r(28),c=(r(27),r(57),r(72)),l=r(22),d=r(639),h=r(570);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v=l.a.get("search"),x={components:{SearchNotFound:d.default,ExternalPost:h.default},layout:"layoutSearch",data:function(){return{searchResult:void 0,posts:void 0}},computed:m(m({searchQuery:function(){return this.$route.query.q||""}},Object(c.b)(["getUser"])),{},{user:function(){return this.getUser}}),watch:{"$store.state.searchModule.searchResult":{handler:function(t,e){console.log("Giá trị mới: ".concat(t,", Giá trị cũ: ").concat(e)),this.searchResult=t,t.postsWithMedia&&t.postsWithMedia.length>0&&(this.posts=t.postsWithMedia)},deep:!0,immediate:!0}},created:function(){this.handleSearchValue()},methods:{handleSearchValue:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.searchUser({value:t.searchQuery,userId:t.user.user_id},{search_type:"Post"});case 3:r=e.sent,t.$store.commit("setSearchResult",r.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},_=(r(949),r(8)),component=Object(_.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-center items-center flex-col mt-5"},[t._l(t.posts,(function(t){return e("div",{key:t.post_id,staticClass:"search-block p-5"},[e("external-post",{attrs:{post:t}})],1)})),t._v(" "),t.peoples||t.groups||t.pages||t.posts?t._e():e("div",[e("search-not-found")],1)],2)}),[],!1,null,"6b115e96",null);e.default=component.exports},570:function(t,e,r){"use strict";r.r(e);r(46),r(32),r(48),r(63),r(64);var n=r(11),o=r(28),c=(r(27),r(23),r(49),r(47),r(82),r(138),r(44),r(212),r(368),r(16)),l=r(550),d=r(22),h=r(551),f=r(567),m=r(623),v=r(565),x=r(563),_=r(609);function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var w=d.a.get("posts"),C={name:"ExternalPost",components:{ArrangePhotos:f.default,HeaderExternalPost:m.default,LikeButton:v.default,InputComment:x.default,CommentDetail:_.default,PostDetail:h.default},middleware:"darkMode",props:{post:{type:Object,default:function(){return{background:"",content:""}}},isGroups:{type:Boolean}},data:function(){return{list:["https://thibanglaixemay360.com/wp-content/uploads/2023/05/a4dd8599ac65f84eebce0091404a6ee4.jpg"],showFiveIconLike:!1,staticIcon:l.b,showSetting:!1,totalLike:0,listImages:[],listVideos:[],checkLike:!1,postCopy:null,threeLike:[],comments:[],showPostDetail:!1,user:null,firstPost:null,userId:null,showRecomment:!1}},watch:{post:{handler:"handleListMedia",deep:!0,immediate:!0},postCopy:{handler:"handleThreeLike",deep:!0},"$store.state.authModule.user":{handler:function(t){this.user=t,this.userId=t.user_id},deep:!0,immediate:!0}},created:function(){var t=this;this.postCopy=this.post.reactions,this.fetchGetComment(),this.firstPost=this.post,console.log(this.post),this.post.reactions.forEach((function(e){t.totalLike=e.user_id.length+t.totalLike})),this.checkLike=this.post.reactions.some((function(e){return e.user_id.some((function(e){return+e==+t.userId}))})),this.handleThreeLike()},methods:{handleListMedia:function(){var t,e=this;this.postCopy=this.post.reactions,null===(t=this.post.media)||void 0===t||t.forEach((function(t){"image"===t.media_type&&e.listImages.push({url:t.url,postId:t.post_id}),"video"===t.media_type&&e.listVideos.push({url:t.url,postId:t.post_id})}))},addLike:function(t){var e=this;c.a.emit("react_post_notification",{postId:this.post.post_id,ownerId:this.userId,ownerAction:t.name}),console.log(t.name),this.checkLike||(this.totalLike+=1,this.checkLike=!0),this.postCopy=this.postCopy.map((function(r){var n=r.user_id.indexOf(e.userId);return n>-1&&r.user_id.splice(n,1),r.type===t.name&&r.user_id.push(e.userId),r}))},Unlike:function(){var t=this;this.totalLike=this.totalLike-1,this.threeLike=this.threeLike.map((function(e){return e.user_id.filter((function(e){return e!==t.userId}))}))},handleThreeLike:function(){var t=this,e=l.b.map((function(e){var r=t.postCopy.find((function(t){return t.type===e.name}));return k(k({},e),r)}));this.threeLike=e.sort((function(a,b){return b.user_id.length-a.user_id.length})).slice(0,3)},addMess:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.value,t.innerText,r.next=3,w.createComment({commentValue:n,postId:e.post.post_id,userId:e.userId});case 3:o=r.sent,c.a.emit("comment_notification",{commentId:o.data.id,postId:e.post.post_id}),console.log("comment ===> ",o.data),e.fetchGetComment();case 7:case"end":return r.stop()}}),r)})))()},fetchGetComment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getComment({postId:t.post.post_id});case 2:r=e.sent,t.comments=r.data.allComments;case 4:case"end":return e.stop()}}),e)})))()},handleShowPostDetailt:function(t){this.showPostDetail=t}}},j=r(8),component=Object(j.a)(C,(function(){var t,e,r=this,n=r._self._c;return n("div",{},[r.showPostDetail?n("div",[n("PostDetail",{attrs:{post:r.post},on:{showPostDetailt:r.handleShowPostDetailt}})],1):r._e(),r._v(" "),"Gợi ý"===r.post.title?n("div",{staticClass:"px-4 pt-4 pb-2 text-[15px] text-[#65676B] font-medium"},[r._v("\n  "+r._s(r.$t("home.goiy"))+"\n    "),n("div",{staticClass:"w-full mx-auto border-b border-gray-300 mt-4"})]):r._e(),r._v(" "),n("HeaderExternalPost",{attrs:{post:r.post}}),r._v(" "),null!==(t=r.post)&&void 0!==t&&t.background?n("div",{staticClass:"w-full h-[410px] bg-cover bg-center flex items-center justify-center text-center",style:{backgroundImage:null===(e=r.post)||void 0===e?void 0:e.background}},[n("div",{staticClass:"px-4 pt-1 pb-4 text-white font-semibold text-3xl flex items-center justify-center text-center",domProps:{innerHTML:r._s(r.post.content)}})]):n("div",[n("div",{staticClass:"px-4 pt-1 pb-4 text-base dark:text-[#E4E6EB]",domProps:{innerHTML:r._s(r.post.content)}})]),r._v(" "),n("div",[n("ArrangePhotos",{attrs:{"list-images":r.listImages,"list-videos":r.listVideos,height:"700"}})],1),r._v(" "),n("div",{staticClass:"mx-4 py-3 flex items-center justify-between"},[n("div",{staticClass:"flex gap-4"},[n("div",{staticClass:"flex items-center -gap-1"},r._l(r.threeLike,(function(t,e){return n("div",{key:e,class:{"-ml-[6px]":e>0},style:{zIndex:8-e}},[t.user_id.length>0?n("div",{staticClass:"w-[22px] h-[22px] flex items-center justify-center border-2 border-white rounded-full relative"},[n("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.icon}})]):r._e()])})),0),r._v(" "),r.totalLike>0?n("div",{staticClass:"text-[#65676B] text-[15px] hover:underline cursor-pointer"},[r._v("\n        "+r._s(r.totalLike)+"\n      ")]):r._e()]),r._v(" "),n("div",{staticClass:"flex items-center gap-4"},[n("div",{staticClass:"text-[#65676B] text-sm hover:underline cursor-pointer"},[r._v("\n        "+r._s(r.comments.length)+" "+r._s(r.$t("home.comment1"))+"\n      ")]),r._v(" "),n("div",{staticClass:"text-[#65676B] text-sm hover:underline cursor-pointer"},[r._v("\n        3 "+r._s(r.$t("home.share1"))+"\n      ")])])]),r._v(" "),n("div",{staticClass:"mx-3 border-t dark:border-[#65676B] :border-[#3E4042]"},[n("div",{staticClass:"relative grid grid-cols-3 items-center justify-between h-11"},[n("LikeButton",{attrs:{post:r.post},on:{addLike:r.addLike,Unlike:r.Unlike}}),r._v(" "),n("div",{staticClass:"text-[#65676B] text-[15px] font-semibold flex items-center gap-2 justify-center hover:bg-gray-200 py-2 rounded cursor-pointer"},[r._m(0),r._v(" "),n("div",[r._v(r._s(r.$t("home.comment")))])]),r._v(" "),n("div",{staticClass:"text-[#65676B] text-[15px] font-semibold flex items-center gap-2 justify-center hover:bg-gray-200 py-2 rounded cursor-pointer"},[r._m(1),r._v(" "),n("div",[r._v(r._s(r.$t("home.share")))])])],1)]),r._v(" "),n("div",{staticClass:"mb-2"},[r.showRecomment?r._e():n("div",{staticClass:"mx-4 text-[#65676B] text-[15px] font-medium cursor-pointer hover:underline dark:text-[#B0B3B8]",on:{click:function(t){r.showPostDetail=!0}}},[r._v("\n    "+r._s(r.$t("home.moreComment"))+"\n    ")]),r._v(" "),r._l(r.comments.slice(0,1),(function(t,e){return n("div",{key:e},[n("CommentDetail",{attrs:{comment:t},on:{showPostDetail:function(t){r.showPostDetail=!0}}})],1)})),r._v(" "),n("div",{staticClass:"p-4 pt-1"},[n("InputComment",{on:{addMess:r.addMess}})],1)],2)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"font-semibold flex items-center justify-center"},[t("i",{staticClass:"x1b0d499 x1d69dk1",staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/WoftRVRTwaO.png')","background-position":"-170px -62px","background-size":"190px 204px",width:"18px",height:"18px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(40%)"},attrs:{"data-visualcompletion":"css-img"}})])},function(){var t=this._self._c;return t("div",{staticClass:"font-semibold flex items-center justify-center"},[t("i",{staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/WoftRVRTwaO.png')","background-position":"-150px -132px","background-size":"190px 204px",width:"18px",height:"18px","background-repeat":"no-repeat",display:"inline-block",filter:"invert(40%)"}})])}],!1,null,"cf245536",null);e.default=component.exports;installComponents(component,{PostDetail:r(551).default})},639:function(t,e,r){"use strict";r.r(e);var n={name:"SearchNotFound"},o=r(8),component=Object(o.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full h-[635px] flex justify-center items-center"},[e("div",{staticClass:"w-[500px] flex flex-col justify-center items-center"},[e("div",{staticClass:"w-[112px] h-[112px] overflow-hidden mb-5"},[e("img",{staticClass:"w-full h-full",attrs:{src:"https://static.xx.fbcdn.net/rsrc.php/y_/r/Krj1JsX3uTI.svg",alt:""}})]),t._v(" "),e("div",{staticClass:"text-[#65676b] text-[20px] font-bold"},[t._v("\n      Chúng tôi không tìm thấy kết quả nào\n    ")]),t._v(" "),e("div",{staticClass:"text-[#65676b] text-[16px]"},[t._v("\n      Đảm bảo tất cả các từ đều đúng chính tả hoặc thử từ khóa\n    ")]),t._v(" "),e("div",{staticClass:"text-[#65676b] text-[16px] mb-16"},[t._v("khác.")])])])}],!1,null,"681d6242",null);e.default=component.exports},787:function(t,e,r){var content=r(950);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("46e1d754",content,!0,{sourceMap:!1})},949:function(t,e,r){"use strict";r(787)},950:function(t,e,r){var n=r(19)((function(i){return i[1]}));n.push([t.i,".search-block[data-v-6b115e96]{background-color:#fff;border:1px solid #e4e4e4;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,.16);margin:10px;width:62%}",""]),n.locals={},t.exports=n}}]);