(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1058:function(t,e,n){"use strict";n.r(e);n(47);var r=n(11),o=(n(27),n(22)),svg=n(560),c=n(612),l=n(566),d=o.a.get("groupsRepository"),v={mixins:[l.a],data:function(){return{createChat:svg.e,statusCommulity:!1,statusBrowse:!0,dataGroup:{},featureNav:c.c}},created:function(){this.detailGroup()},methods:{handleToggleCommulity:function(t){"commulity"===t?(this.statusCommulity=!0,this.statusBrowse=!1):"manager"===t&&(this.statusBrowse=!0,this.statusCommulity=!1)},detailGroup:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.groupId),e.prev=1,e.next=4,d.getDetaiAdmin(t.groupId);case 4:n=e.sent,t.dataGroup=n.data,t.$store.commit("setDetailGroup",t.dataGroup),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}}},h=(n(953),n(8)),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-detail-gruops"},[e("div",{staticClass:"wp-nav-group"},[e("div",{staticClass:"head-nav"},[e("div",{staticClass:"infor-group"},[e("div",{staticClass:"wp-avatar"},[t.dataGroup.coverAvatar?e("img",{attrs:{src:t.dataGroup.coverAvatar,alt:""}}):e("img",{attrs:{src:t.imgGruop,alt:""}})]),t._v(" "),e("div",{staticClass:"wp-infor"},[e("p",{staticClass:"name-groups"},[t._v(t._s(t.dataGroup.groupName))]),t._v(" "),e("div",{staticClass:"wp-privacy"},[e("div",{staticClass:"icon-privarcy"}),t._v(" "),e("div",{staticClass:"privacy"},["Private"===t.dataGroup.privacy?e("p",[t._v("Nhóm riêng tư")]):t._e(),t._v(" "),"Public"===t.dataGroup.privacy?e("p",[t._v("Nhóm công khai")]):t._e(),t._v(" "),e("span",[t._v(t._s(t.dataGroup.memberCount)+" thành viên")])])])])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"body-nav"},[e("div",{staticClass:"wp-active-nav"},[e("div",{staticClass:"active-nav",on:{click:function(e){return t.handleToggleCommulity("commulity")}}},[e("div",{staticClass:"btn-active",style:{color:t.statusCommulity?"#1876f2":""}},[t._v("\n            Lướt xem\n          ")]),t._v(" "),e("div",{staticClass:"ranger-active",style:{backgroundColor:t.statusCommulity?"#1876f2":""}})]),t._v(" "),e("div",{staticClass:"active-nav",on:{click:function(e){return t.handleToggleCommulity("manager")}}},[e("div",{staticClass:"btn-active",style:{color:t.statusBrowse?"#1876f2":""}},[t._v("\n            Quản lí\n          ")]),t._v(" "),e("div",{staticClass:"ranger-active",style:{backgroundColor:t.statusBrowse?"#1876f2":""}})])]),t._v(" "),e("nuxt-link",{staticClass:"wp-home-group-home",attrs:{to:"/groups/1"}},[e("div",{staticClass:"icon-home"}),t._v(" "),e("p",{staticClass:"title-home"},[t._v("Trang chủ của cộng đồng")])]),t._v(" "),t.statusBrowse?e("div",{staticClass:"container-home-group"},[e("nuxt-link",{staticClass:"wp-home-group",attrs:{to:"/groups/1/overview"}},[e("div",{staticClass:"icon-overview"}),t._v(" "),e("p",{staticClass:"title-home"},[t._v("Tổng quan")])]),t._v(" "),e("div",{staticClass:"container-admin-setting"},t._l(t.featureNav,(function(n){return e("div",{key:n.id,staticClass:"wp-admin-tool"},[e("p",{staticClass:"title-tool"},[t._v(t._s(n.name))]),t._v(" "),e("div",{staticClass:"icon-dropdonw"})])})),0)],1):t._e()],1),t._v(" "),e("div",{staticClass:"footer-nav"},[e("div",{staticClass:"wp-btn-create-chat"},[e("div",{staticClass:"icon-create",domProps:{innerHTML:t._s(t.createChat)}}),t._v(" "),e("p",{},[t._v("Tạo phòng chat")])])])]),t._v(" "),e("nuxt")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"wp-invite"},[e("div",{staticClass:"btn-invite"},[e("div",{staticClass:"icon-add"}),t._v(" "),e("p",[t._v("Mời")])]),t._v(" "),e("div",{staticClass:"btn-more"},[e("div",{staticClass:"icon-more"})])])}],!1,null,"c8ec4a0c",null);e.default=component.exports},560:function(t,e,n){"use strict";n.d(e,"f",(function(){return d})),n.d(e,"g",(function(){return v})),n.d(e,"j",(function(){return c})),n.d(e,"h",(function(){return r})),n.d(e,"k",(function(){return l})),n.d(e,"i",(function(){return o})),n.d(e,"c",(function(){return k})),n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return x})),n.d(e,"d",(function(){return m})),n.d(e,"l",(function(){return f})),n.d(e,"e",(function(){return w}));var r='<svg xmlns:xlink="http://www.w3.org/1999/xlink" \nxmlns="http://www.w3.org/2000/svg" fill="currentColor" \nviewBox="0 0 20 20" \nclass="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1qx5ct2 xw4jnvo" width="20" \nheight="20"><g fill-rule="evenodd" transform="translate(-446 -350)" \nfill="#65676B"><path d="M454.59 355h4.18l-2.4-4h-3.28c-.22 0-.423.008-.624.017L454.59 \n355zm6.514 0h3.695c-.226-1.031-.65-1.79-1.326-2.489-1.061-1.025-2.248-1.488-4.392-1.511h-.379l2.401 4zm-8.78 \n0-1.942-3.64c-.73.247-1.315.63-1.868 1.165-.668.69-1.09 1.445-1.315 2.475h5.125zm7.043 7.989a.711.711 0 0 1-.22.202l-4.573 \n2.671-.05.027a.713.713 0 0 1-1.024-.643v-5.343l.002-.056a.714.714 0 0 1 1.072-.56l4.572 2.67.054.036a.714.714 0 0 1 \n.167.996zm-12.366-5.99V363.083l.001.03v.112l.005.048h.001c.05 2.02.513 3.176 1.506 4.203 1.102 1.066 2.324 1.525 4.577 \n1.525h5.99c2.144-.023 3.331-.486 4.392-1.511 1.005-1.04 1.467-2.198 1.517-4.217h.003c.003-.1.005-.1.006-.204l.001-.156V357h-18z" \nfill="#65676B"></path></g></svg>',o='<svg xmlns:xlink="http://www.w3.org/1999/xlink" \nxmlns="http://www.w3.org/2000/svg" fill="currentColor" \nviewBox="0 0 20 20" \nclass="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1qx5ct2 xw4jnvo" width="20" \nheight="20"><g fill-rule="evenodd" transform="translate(-446 -350)" \nfill="#3578e5"><path d="M454.59 355h4.18l-2.4-4h-3.28c-.22 0-.423.008-.624.017L454.59 \n355zm6.514 0h3.695c-.226-1.031-.65-1.79-1.326-2.489-1.061-1.025-2.248-1.488-4.392-1.511h-.379l2.401 4zm-8.78 \n0-1.942-3.64c-.73.247-1.315.63-1.868 1.165-.668.69-1.09 1.445-1.315 2.475h5.125zm7.043 7.989a.711.711 0 0 1-.22.202l-4.573 \n2.671-.05.027a.713.713 0 0 1-1.024-.643v-5.343l.002-.056a.714.714 0 0 1 1.072-.56l4.572 2.67.054.036a.714.714 0 0 1 \n.167.996zm-12.366-5.99V363.083l.001.03v.112l.005.048h.001c.05 2.02.513 3.176 1.506 4.203 1.102 1.066 2.324 1.525 4.577 \n1.525h5.99c2.144-.023 3.331-.486 4.392-1.511 1.005-1.04 1.467-2.198 1.517-4.217h.003c.003-.1.005-.1.006-.204l.001-.156V357h-18z" \nfill="#3578e5"></path></g></svg>',c='<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x1qq9wsj x1qx5ct2 xw4jnvo" width="20" height="20"><g fill-rule="evenodd" transform="translate(-446 -350)" fill="#65676B"><path d="M457 368.832a.5.5 0 0 0 .883.323l1.12-1.332a.876.876 0 0 1 .679-.323h3.522a2.793 2.793 0 0 0 2.796-2.784v-10.931a2.793 2.793 0 0 0-2.796-2.785h-3.454a2.75 2.75 0 0 0-2.75 2.75v15.082zm-1.5 0a.5.5 0 0 1-.883.323l-1.12-1.332a.876.876 0 0 0-.679-.323h-3.522a2.793 2.793 0 0 1-2.796-2.784v-10.931a2.793 2.793 0 0 1 2.796-2.785h3.454a2.75 2.75 0 0 1 2.75 2.75v15.082z" fill="#65676B"></path></g></svg>',l='<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x1qq9wsj x1qx5ct2 xw4jnvo" width="20" height="20"><g fill-rule="evenodd" transform="translate(-446 -350)" fill="#65676B"><path d="M457 368.832a.5.5 0 0 0 .883.323l1.12-1.332a.876.876 0 0 1 .679-.323h3.522a2.793 2.793 0 0 0 2.796-2.784v-10.931a2.793 2.793 0 0 0-2.796-2.785h-3.454a2.75 2.75 0 0 0-2.75 2.75v15.082zm-1.5 0a.5.5 0 0 1-.883.323l-1.12-1.332a.876.876 0 0 0-.679-.323h-3.522a2.793 2.793 0 0 1-2.796-2.784v-10.931a2.793 2.793 0 0 1 2.796-2.785h3.454a2.75 2.75 0 0 1 2.75 2.75v15.082z" fill="#1876f2"></path></g></svg>',d='<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x14ctfv x1qx5ct2 xw4jnvo" width="30" height="30"><g fill-rule="evenodd" transform="translate(-446 -350)" fill="#FFFFFF"><g fill-rule="nonzero" fill="#FFFFFF"><path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z" transform="translate(354.5 159.5)" fill="#FFFFFF"></path><path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z" transform="translate(354.5 159.5)" fill="#FFFFF"></path></g></g></svg>',v='<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x14ctfv x1qx5ct2 xw4jnvo" width="24" height="24"><g fill-rule="evenodd" transform="translate(-446 -350)" fill="#216fdb"><g fill-rule="nonzero" fill="#216fdb"><path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z" transform="translate(354.5 159.5)" fill="#216fdb"></path><path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z" transform="translate(354.5 159.5)" fill="#216fdb"></path></g></g></svg>',h='<svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xxk0z11 xvy4d1p"><path d="M14.791 5.207 8 12l6.793 6.793a1 1 0 1 1-1.415 1.414l-7.5-7.5a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 1 1 1.415 1.414z"></path></svg>',x='<svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xxk0z11 xvy4d1p"><path d="M9.209 5.207 16 12l-6.791 6.793a1 1 0 1 0 1.415 1.414l7.5-7.5a1 1 0 0 0 0-1.414l-7.5-7.5a1 1 0 1 0-1.415 1.414z"></path></svg>',m='<svg fill="currentColor" viewBox="0 0 24 24" width="24px" height="24px" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x14ctfv xxk0z11 xvy4d1p"><path d="M16.738 3H7.262A5.269 5.269 0 0 0 2 8.262v5.488a5.269 5.269 0 0 0 5 5.256v3.477a.854.854 0 0 0 .46.727.78.78 0 0 0 .331.07.838.838 0 0 0 .518-.171L13.4 19h3.343A5.258 5.258 0 0 0 22 13.75V8.262A5.269 5.269 0 0 0 16.738 3z"></path></svg>',f='<svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 xlup9mm x1kky2od"><g fill-rule="evenodd" transform="translate(-448 -544)"><g fill-rule="nonzero"><path d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z" transform="translate(448 544)"></path><path d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z" transform="translate(448 544)"></path><path d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z" transform="translate(448 544)"></path><path d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z" transform="translate(448 544)"></path></g></g></svg>',w='<svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x1qq9wsj xlup9mm x1kky2od"><g fill-rule="evenodd" transform="translate(-446 -350)"><g fill-rule="nonzero"><path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z" transform="translate(354.5 159.5)"></path><path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z" transform="translate(354.5 159.5)"></path></g></g></svg>',k='<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" class="x1lliihq x1k90msu x2h7rmj x1qfuztq x14ctfv x1qx5ct2 xw4jnvo" width="25" height="25"><g fill-rule="evenodd" transform="translate(-446 -350)" ><g fill-rule="nonzero" ><path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z" transform="translate(354.5 159.5)" ></path><path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z" transform="translate(354.5 159.5)" ></path></g></g></svg>'},564:function(t,e,n){t.exports=n.p+"img/imgGroups.0c47f0a.png"},566:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var r=n(11),o=(n(23),n(58),n(59),n(568),n(367),n(27),n(50)),c=n.n(o),l=n(22),d=n(564),v=n.n(d),h=l.a.get("groupsRepository"),x={watch:{"$store.state.groupModule.detailGroup":{handler:function(t){this.dataDetailGroup=t},immediate:!0,deep:!0},"$store.state.authModule.user":{handler:function(t){this.currentUser=t},immediate:!0,deep:!0},"$store.state.groupModule.statusImgCover":{handler:function(t){this.statusImgCover=t},immediate:!0,deep:!0}},computed:{groupId:function(){return this.$route.params.id}},data:function(){return{dataDetailGroup:null,popupListImg:!1,currentUser:"",isImgCover:"",dataImg:"",statusImgCover:!1,statusImg:!1,imgGruop:v.a,idAdmin:{}}},methods:{handlerApiPut:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.updateGroups(t,e);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))()},handleCoverImg:function(t){if(t instanceof Object){this.isImgCover=t;var e=t;e.preview=URL.createObjectURL(e),this.dataImg=this.dataDetailGroup.coverAvatar,this.dataDetailGroup.coverAvatar=e.preview,this.$store.commit("setStatusImgCover",!0),this.initialState()}else"string"==typeof t&&(this.popupListImg=!1,this.dataDetailGroup.coverAvatar=t,this.$store.commit("setStatusImgCover",!0),this.initialState());this.$store.commit("setStatusImgCover",!0),this.statusImg=!1},handleCancel:function(){this.$store.commit("setStatusImgCover",!1),this.dataDetailGroup.coverAvatar=this.dataImg},initialState:function(){this.popupListImg=!1,this.statusImgCover=!1,this.statusImg=!1},handleSave:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!=typeof t.dataDetailGroup.coverAvatar){e.next=5;break}return t.handlerApiPut(t.dataDetailGroup.groupId,{coverAvatar:t.dataDetailGroup.coverAvatar}),t.$store.commit("setStatusImgCover",!1),t.initialState(),e.abrupt("return");case 5:return t.dataDetailGroup.coverAvatar=t.isImgCover,(n=new FormData).append("file",t.dataDetailGroup.coverAvatar),n.append("upload_preset","dinoEnglish"),e.prev=9,e.next=12,c.a.post("https://api.cloudinary.com/v1_1/dlb1ac5xw/image/upload",n);case 12:r=e.sent,t.dataDetailGroup.coverAvatar=r.data.secure_url,t.handlerApiPut(t.dataDetailGroup.groupId,{coverAvatar:t.dataDetailGroup.coverAvatar}),t.$store.commit("setStatusImgCover",!1),t.initialState(),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(9),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[9,19]])})))()}}}},597:function(t,e,n){t.exports=n.p+"img/gymsCover.300e2d4.jpg"},612:function(t,e,n){"use strict";n.d(e,"c",(function(){return w})),n.d(e,"a",(function(){return k})),n.d(e,"d",(function(){return y})),n.d(e,"b",(function(){return content}));var r=n(613),o=n.n(r),c=n(614),l=n.n(c),d=n(615),v=n.n(d),h=n(597),x=n.n(h),m=n(616),f=n.n(m),w=[{id:1,name:"Công cụ quản trị"},{id:2,name:"Cài đặt"},{id:3,name:"Thông tin chi tiết"},{id:4,name:"Hỗ trợ"}],k=[{id:1,illustration:o.a},{id:2,illustration:l.a},{id:3,illustration:v.a},{id:4,illustration:x.a},{id:5,illustration:f.a}],y=[{id:0,icon:"icon-feels",name:"Bảng feel của bạn",path:"/groups/feed"},{id:1,icon:"icon-discover",name:"Khám phá",path:"/groups/feed/discover"},{id:2,icon:"icon-groups",name:"Nhóm của bạn",path:"/groups/feed/joins"}],content=[{id:1,img:"https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/dyUE00V7yM0.png",name:"Nội dung bị thành viên báo cáo",bacgroudColor:"#FB724B"},{id:2,img:"https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/9VvqLPfGC0H.png",name:"Thông báo kiểm duyệt",bacgroudColor:"#F7B928"},{id:3,img:"https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/SKGh9nTtBca.png",name:"Bài viết đang chờ",bacgroudColor:"#54C7EC"},{id:4,img:"https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/cPVVi0CPFhD.png",name:"Yêu cầu làm thành viên",bacgroudColor:"#45BD62"},{id:5,img:"https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/cdeXOR0jsEp.png",name:"Chất lượng nhóm",bacgroudColor:"#9360F7"}]},613:function(t,e,n){t.exports=n.p+"img/cleanImgCover.01d634f.jpg"},614:function(t,e,n){t.exports=n.p+"img/partyImgCover.61b8f56.jpg"},615:function(t,e,n){t.exports=n.p+"img/familyCover.48d0503.jpg"},616:function(t,e,n){t.exports=n.p+"img/musicCover.adc6eb8.jpg"},789:function(t,e,n){var content=n(954);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("a268afa6",content,!0,{sourceMap:!1})},953:function(t,e,n){"use strict";n(789)},954:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,".container-detail-gruops .wp-nav-group[data-v-c8ec4a0c]{background-color:#fff;bottom:0;box-shadow:0 1px 4px rgba(0,0,0,.16);height:100%;left:0;position:fixed;top:56px;width:360px}.container-detail-gruops .wp-nav-group .head-nav[data-v-c8ec4a0c]{padding:15px}.container-detail-gruops .wp-nav-group .head-nav .infor-group[data-v-c8ec4a0c]{display:flex;gap:10px}.container-detail-gruops .wp-nav-group .head-nav .infor-group .wp-avatar[data-v-c8ec4a0c]{border-radius:10px;height:48px;overflow:hidden;width:48px}.container-detail-gruops .wp-nav-group .head-nav .infor-group .wp-avatar img[data-v-c8ec4a0c]{height:48px;-o-object-fit:cover;object-fit:cover;width:48px}.container-detail-gruops .wp-nav-group .head-nav .infor-group .wp-infor .name-groups[data-v-c8ec4a0c]{font-size:17px;font-weight:600}.container-detail-gruops .wp-nav-group .head-nav .infor-group .wp-infor .wp-privacy[data-v-c8ec4a0c]{display:flex}.container-detail-gruops .wp-nav-group .head-nav .infor-group .wp-infor .wp-privacy .icon-privarcy[data-v-c8ec4a0c]{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/BBQhmh97rdP.png);background-position:0 -294px;background-repeat:no-repeat;background-size:22px 308px;display:inline-block;height:12px;margin:2px;width:12px}.container-detail-gruops .wp-nav-group .head-nav .infor-group .wp-infor .wp-privacy .privacy[data-v-c8ec4a0c]{align-items:center;display:flex;font-size:13px;gap:6px;opacity:.8}.container-detail-gruops .wp-nav-group .head-nav .infor-group .wp-infor .wp-privacy .privacy span[data-v-c8ec4a0c]{font-weight:600}.container-detail-gruops .wp-nav-group .head-nav .wp-invite[data-v-c8ec4a0c]{align-items:center;display:flex;justify-content:space-between;margin-top:12px}.container-detail-gruops .wp-nav-group .head-nav .wp-invite .btn-invite[data-v-c8ec4a0c]{align-items:center;background-color:#1b74e4;border-radius:8px;cursor:pointer;display:flex;gap:5px;height:36px;justify-content:center;width:80%}.container-detail-gruops .wp-nav-group .head-nav .wp-invite .btn-invite[data-v-c8ec4a0c]:hover{background-color:#1867c7}.container-detail-gruops .wp-nav-group .head-nav .wp-invite .btn-invite .icon-add[data-v-c8ec4a0c]{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QCj9H9Vf5Du.png);background-position:-144px -154px;background-repeat:no-repeat;background-size:190px 190px;display:inline-block;filter:invert(100%);height:16px;width:16px}.container-detail-gruops .wp-nav-group .head-nav .wp-invite .btn-invite p[data-v-c8ec4a0c]{color:#fff;font-size:15px;font-weight:600}.container-detail-gruops .wp-nav-group .head-nav .wp-invite .btn-more[data-v-c8ec4a0c]{align-items:center;background-color:#e4e6eb;border-radius:8px;display:flex;height:36px;justify-content:center;width:48px;width:15%}.container-detail-gruops .wp-nav-group .head-nav .wp-invite .btn-more[data-v-c8ec4a0c]:hover{background-color:#c6c7cd}.container-detail-gruops .wp-nav-group .head-nav .wp-invite .btn-more .icon-more[data-v-c8ec4a0c]{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QCj9H9Vf5Du.png);background-position:-72px -154px;background-repeat:no-repeat;background-size:190px 190px;display:inline-block;height:16px;width:16px}.container-detail-gruops .wp-nav-group .body-nav[data-v-c8ec4a0c]{height:100%;overflow-y:scroll}.container-detail-gruops .wp-nav-group .body-nav .wp-active-nav[data-v-c8ec4a0c]{align-items:center;border-bottom:1px solid #e4e6eb;display:flex;justify-content:center}.container-detail-gruops .wp-nav-group .body-nav .wp-active-nav .active-nav[data-v-c8ec4a0c]{cursor:pointer}.container-detail-gruops .wp-nav-group .body-nav .wp-active-nav .active-nav .btn-active[data-v-c8ec4a0c]{border:#fff;border-radius:8px;font-size:15px;font-weight:600;height:36px;line-height:36px;opacity:.7;text-align:center;width:156px}.container-detail-gruops .wp-nav-group .body-nav .wp-active-nav .active-nav .btn-active[data-v-c8ec4a0c]:hover{background-color:#e4e6eb}.container-detail-gruops .wp-nav-group .body-nav .wp-active-nav .active-nav .ranger-active[data-v-c8ec4a0c]{height:4px;width:100%}.container-detail-gruops .wp-nav-group .body-nav .wp-home-group-home[data-v-c8ec4a0c]{align-items:center;border-radius:8px;display:flex;gap:10px;height:44px;margin-left:8px;margin-top:16px;padding:0 8px;width:95%}.container-detail-gruops .wp-nav-group .body-nav .wp-home-group-home[data-v-c8ec4a0c]:hover{background-color:#e4e6eb}.container-detail-gruops .wp-nav-group .body-nav .wp-home-group-home .icon-home[data-v-c8ec4a0c]{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/_wRrwXp_OpM.png);background-position:0 -136px;background-repeat:no-repeat;background-size:26px 322px;display:inline-block;height:20px;width:20px}.container-detail-gruops .wp-nav-group .body-nav .nuxt-link-exact-active[data-v-c8ec4a0c]{background-color:#eaf3ff;color:#1876f2}.container-detail-gruops .wp-nav-group .body-nav .nuxt-link-exact-active .icon-home[data-v-c8ec4a0c]{background-color:#3578e5;height:20px;-webkit-mask-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/_wRrwXp_OpM.png);-webkit-mask-position:0 -114px;-webkit-mask-size:26px 322px;width:20px}.container-detail-gruops .wp-nav-group .body-nav .container-home-group .wp-home-group[data-v-c8ec4a0c]{align-items:center;border-radius:8px;display:flex;gap:10px;height:44px;margin-left:8px;padding:0 8px;width:95%}.container-detail-gruops .wp-nav-group .body-nav .container-home-group .wp-home-group[data-v-c8ec4a0c]:hover{background-color:#f5f6f7}.container-detail-gruops .wp-nav-group .body-nav .container-home-group .wp-home-group .icon-overview[data-v-c8ec4a0c]{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/-hQWGrG0T4W.png);background-position:0 -132px;background-repeat:no-repeat;background-size:22px 194px;display:inline-block;height:20px;width:20px}.container-detail-gruops .wp-nav-group .body-nav .container-home-group .nuxt-link-exact-active[data-v-c8ec4a0c]{background-color:#eaf3ff;color:#1876f2}.container-detail-gruops .wp-nav-group .body-nav .container-home-group .nuxt-link-exact-active .icon-overview[data-v-c8ec4a0c]{background-color:#3578e5;height:20px;-webkit-mask-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/_wRrwXp_OpM.png);-webkit-mask-position:0 -158px;-webkit-mask-size:26px 322px;width:20px}.container-detail-gruops .wp-nav-group .body-nav .container-admin-setting[data-v-c8ec4a0c]{display:flex;flex-direction:column;padding:14px 8px}.container-detail-gruops .wp-nav-group .body-nav .container-admin-setting .wp-admin-tool[data-v-c8ec4a0c]{align-items:center;border-radius:8px;display:flex;height:44px;justify-content:space-between;padding:0 8px;width:100%}.container-detail-gruops .wp-nav-group .body-nav .container-admin-setting .wp-admin-tool[data-v-c8ec4a0c]:hover{background-color:#f5f6f7}.container-detail-gruops .wp-nav-group .body-nav .container-admin-setting .wp-admin-tool .title-tool[data-v-c8ec4a0c]{font-size:15px;font-weight:600;opacity:.7}.container-detail-gruops .wp-nav-group .body-nav .container-admin-setting .wp-admin-tool .icon-dropdonw[data-v-c8ec4a0c]{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QCj9H9Vf5Du.png);background-position:0 -88px;background-repeat:no-repeat;background-size:190px 190px;display:inline-block;height:20px;opacity:.7;width:20px}.container-detail-gruops .wp-nav-group .footer-nav[data-v-c8ec4a0c]{background-color:#fff;bottom:0;box-shadow:0 1px 4px rgba(0,0,0,.16);left:0;padding:16px;position:fixed;width:360px}.container-detail-gruops .wp-nav-group .footer-nav .wp-btn-create-chat[data-v-c8ec4a0c]{align-items:center;background-color:#e7f3ff;border-radius:8px;cursor:pointer;display:flex;gap:5px;height:36px;justify-content:center;width:100%}.container-detail-gruops .wp-nav-group .footer-nav .wp-btn-create-chat .icon-create[data-v-c8ec4a0c]{color:#1b74e4}.container-detail-gruops .wp-nav-group .footer-nav .wp-btn-create-chat p[data-v-c8ec4a0c]{color:#1b74e4;font-weight:600}",""]),r.locals={},t.exports=r}}]);