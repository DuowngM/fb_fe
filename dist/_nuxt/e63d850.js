(window.webpackJsonp=window.webpackJsonp||[]).push([[36,34],{558:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkAgMAAACcbnALAAAADFBMVEVHcExgZ3FgZ3FgZ3Fy6Du5AAAAA3RSTlMAYO+vPlCQAAAAY0lEQVR42q2PsQ3AIAwEDU12SMMqZDIYJgPRsQgtck4i0oueLx5bPsxjhxRe7M5YnFipWPRswanwZhcdKsMSBOKgQYweAATYFwboYAt0sB9sqrapbmiLNus1JVAqJVV6/eiMPjtRNQOOPls9AAAAAElFTkSuQmCC"},707:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(27),n(22).a.get("storage")),c={props:{showModal:Boolean,post:{type:Object,default:function(){}}},data:function(){return{userId:0,postId:0}},watch:{"$store.state.authModule.user":{handler:function(t){this.userId=t?t.user_id:null,console.log("userId ở lưu",this.userId)},immediate:!0,deep:!0},"$store.state.postUserDetail.postId":{handler:function(t){this.idPost=t.post_id},immediate:!0,deep:!0}},created:function(){console.log("đây là id post lưu",this.post.post_id)},methods:{closeModal:function(){this.$emit("close-modal")},savePost:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{n=o.savePost({id:t.userId,postId:t.post.post_id}),console.log("lưu thành công rồi",n)}catch(t){console.log(t)}t.closeModal();case 2:case"end":return e.stop()}}),e)})))()}}},d=n(8),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.showModal?e("div",{staticClass:"fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-50 opacity-70"}):t._e(),t._v(" "),t.showModal?e("div",{staticClass:"fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[548px] bg-white rounded-lg",staticStyle:{"box-shadow":"rgba(0, 0, 0, 0.24) 0px 3px 8px"}},[e("div",[e("div",{staticClass:"px-4 py-[10px] border-b border-gray-300 pt-1 mb-2"},[e("div",{staticClass:"flex justify-end absolute right-[10px] top-3 w-6 h-6 cursor-pointer",on:{click:t.closeModal}},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:n(558)}})]),t._v(" "),e("div",{staticClass:"text-[#1c1e21] text-center text-[20px] leading-[38px] mb-0 font-bold"},[t._v("\n          Lưu bài viết\n        ")])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"border-t-[2px] border-gray-200 w-full px-3 py-4 ml-[1px] bg-white"},[e("div",{staticClass:"flex justify-end"},[e("nuxt-link",{attrs:{to:"/saved/".concat(t.userId)}},[e("button",{staticClass:"w-[108px] h-[36px] bg-[#1B74E4] px-5 rounded-md font-semibold text-white hover:bg-[#2467b9]",attrs:{disabled:t.postSaved},on:{click:t.savePost}},[t._v("\n          Xong\n        ")])])],1)])]):t._e()])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"scrollable-content max-h-[400px] overflow-y-auto px-5 py-2"},[e("div",{staticClass:"flex justify-between"},[e("div",{staticClass:"flex gap-3"},[e("div",{staticClass:"w-[48px] h-[48px]"},[e("img",{staticClass:"w-full h-full object-cover rounded-lg border-1 border-gray-300",attrs:{src:"https://i.pinimg.com/550x/a7/8d/8a/a78d8ab6dbfb7293daefbb63ea1a9ea0.jpg"}})]),t._v(" "),e("div",{staticClass:"font-semibold text-[18px]"},[t._v("\n              Yêu thích\n              "),e("p",{staticClass:"text-gray-400 text-[12px]"},[e("i",{staticStyle:{"background-image":'url("https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/LLdZ2PbE6Vi.png")',"background-position":"-18px -266px","background-size":"34px 324px",width:"12px",height:"12px","background-repeat":"no-repeat",display:"inline-block","margin-right":"5px","margin-top":"2px"}}),t._v("chỉ mình tôi")])])]),t._v(" "),e("div",{staticClass:"mt-2"},[e("input",{staticClass:"w-4 h-4 text-blue-500 border-2 border-blue-500 rounded-full",attrs:{type:"radio"}})])])])}],!1,null,null,null);e.default=component.exports},809:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(27),n(707)),c={name:"SettingPost",props:{post:{type:Object,default:function(){}}},components:{ModalSavePost:o.default},computed:{status:function(){return this.$store.state.idFriendModule.status}},data:function(){return{showModalSavePost:!1}},methods:{modalSavePost:function(){this.showModalSavePost=!0},closeModalSavePost:function(){this.showModalSavePost=!1},deletePost:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("deletePost",{postId:t.post.post_id});case 2:case"end":return e.stop()}}),e)})))()}}},d=n(8),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-2 text-[0.9375rem] font-medium"},[e("div",{staticClass:"mx-2 p-2 flex gap-2 items-center hover:bg-gray-200 rounded-md cursor-pointer"},[t._m(0),t._v(" "),e("div",{on:{click:t.modalSavePost}},[e("div",{},[t._v("Lưu bài viết")]),t._v(" "),e("div",{staticClass:"text-[#65676B] text-xs font-normal"},[t._v("\n        Thêm vào mục danh sách đã lưu\n      ")])])]),t._v(" "),e("modal-save-post",{attrs:{"show-modal":t.showModalSavePost,post:t.post},on:{"close-modal":t.closeModalSavePost}}),t._v(" "),e("hr",{staticClass:"bg-[#CED0D4] mx-4 my-2"}),t._v(" "),t._m(1),t._v(" "),e("hr",{staticClass:"bg-[#CED0D4] mx-4 my-2 h-[2px]"}),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"mx-2 p-2 flex gap-2 items-center hover:bg-gray-200 rounded-md cursor-pointer"},[t._m(3),t._v(" "),t.status&&"Myself"===t.status?e("div",{on:{click:t.deletePost}},[e("div",{},[t._v("Xóa bài viết")]),t._v(" "),e("div",{staticClass:"text-[#65676B] text-xs font-normal"},[t._v("\n        Ẩn bớt các bài viết tương tự.\n      ")])]):t._e()]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)],1)}),[function(){var t=this._self._c;return t("div",[t("i",{staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/s-G5CX6lFzb.png')","background-position":"0px -70px","background-size":"26px 224px",width:"20px",height:"20px","background-repeat":"no-repeat",display:"inline-block"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-2 p-2 flex gap-2 items-center hover:bg-gray-200 rounded-md cursor-pointer"},[e("div",[e("i",{staticClass:"x1b0d499 xep6ejk",staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/R3EOcUzJPv5.png')","background-position":"0px -154px","background-size":"22px 1044px",width:"20px",height:"20px","background-repeat":"no-repeat",display:"inline-block"},attrs:{"data-visualcompletion":"css-img"}})]),t._v(" "),e("div",{},[e("div",{},[t._v("Bật thông báo về bài viết này")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-2 p-2 flex gap-2 items-center hover:bg-gray-200 rounded-md cursor-pointer"},[e("div",[e("i",{staticClass:"x1b0d499 xep6ejk",staticStyle:{"background-image":"url('https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/1Iv9Oayr05d.png')","background-position":"0px -22px","background-size":"22px 110px",width:"20px",height:"20px","background-repeat":"no-repeat",display:"inline-block"},attrs:{"data-visualcompletion":"css-img"}})]),t._v(" "),e("div",{},[e("div",{},[t._v("Báo cáo bài viết với quản trị viên nhóm")])])])},function(){var t=this._self._c;return t("div",{staticClass:"w-5 h-5 overflow-hidden"},[t("img",{staticClass:"object-cover",attrs:{src:"https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/A_NcMeki4UO.png"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-2 p-2 flex gap-2 items-center hover:bg-gray-200 rounded-md cursor-pointer"},[e("div",{staticClass:"w-5 h-5 overflow-hidden"},[e("img",{staticClass:"object-cover",attrs:{src:"https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/h15jrhghvUR.png"}})]),t._v(" "),e("div",{},[e("div",{},[t._v("Tạm ẩn Luke trong 30 ngày")]),t._v(" "),e("div",{staticClass:"text-[#65676B] text-xs font-normal"},[t._v("\n        Tạm thời không nhìn thấy bài viết nữa.\n      ")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-2 p-2 flex gap-2 items-center hover:bg-gray-200 rounded-md cursor-pointer"},[e("div",{staticClass:"w-5 h-5 overflow-hidden"},[e("img",{staticClass:"object-cover",attrs:{src:"https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/KHqkjYOwBTc.png"}})]),t._v(" "),e("div",{},[e("div",{},[t._v("Ẩn tất cả từ Luke")]),t._v(" "),e("div",{staticClass:"text-[#65676B] text-xs font-normal"},[t._v("\n        Không xem bài viết từ người này nữa.\n      ")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-2 p-2 flex gap-2 items-center hover:bg-gray-200 rounded-md cursor-pointer"},[e("div",{staticClass:"w-5 h-5 overflow-hidden"},[e("img",{staticClass:"object-cover",attrs:{src:"https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/h15jrhghvUR.png"}})]),t._v(" "),e("div",{},[e("div",{},[t._v("Tạm ẩn Fan MU Việt Nam trong 30 ngày")]),t._v(" "),e("div",{staticClass:"text-[#65676B] text-xs font-normal"},[t._v("\n        Tạm thời không nhìn thấy bài viết nữa.\n      ")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-2 p-2 flex gap-2 items-center hover:bg-gray-200 rounded-md cursor-pointer"},[e("div",{staticClass:"w-5 h-5 overflow-hidden"},[e("img",{staticClass:"object-cover",attrs:{src:"https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/KHqkjYOwBTc.png"}})]),t._v(" "),e("div",{},[e("div",{},[t._v("Bỏ theo dõi Fan MU Việt Nam")]),t._v(" "),e("div",{staticClass:"text-[#65676B] text-xs font-normal"},[t._v("\n        Không xem bài viết từ người này nữa.\n      ")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-2 p-2 flex gap-2 items-center hover:bg-gray-200 rounded-md cursor-pointer"},[e("div",{staticClass:"w-5 h-5 overflow-hidden"},[e("img",{staticClass:"object-cover",attrs:{src:"https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/BNdV7yOMsDU.png"}})]),t._v(" "),e("div",{},[e("div",{},[t._v("Báo cáo bài viết")]),t._v(" "),e("div",{staticClass:"text-[#65676B] text-xs font-normal"},[t._v("\n        Chúng tôi sẽ không cho Luke biết ai đã báo cáo.\n      ")])])])}],!1,null,null,null);e.default=component.exports}}]);