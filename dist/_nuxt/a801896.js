(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{567:function(t,l,e){"use strict";e.r(l);var o=e(645),r=(e(57),e(23),e(49),{name:"ArrangePhotos",props:{listImages:{type:Array,default:function(){return[]}},listVideos:{type:Array,default:function(){return[]}},height:{type:String,default:"466"}},data:function(){return{landscape:[],portrait:[],listMedia:[]}},created:function(){var t=this;this.listMedia=[].concat(Object(o.a)(this.listImages),Object(o.a)(this.listVideos)),this.listImages.forEach((function(l){if(l.url){var img=new Image;img.src=l.url,img.onload=function(){img.naturalWidth>=img.naturalHeight?t.landscape.push({url:l.url,type:"image",postId:null==l?void 0:l.postId}):t.portrait.push({url:l.url,type:"image",postId:null==l?void 0:l.postId})}}})),this.listVideos.forEach((function(l){if(l.url){var video=document.createElement("video");video.src=l.url,video.onloadedmetadata=function(){video.videoWidth>=video.videoHeight?t.landscape.push({url:l.url,type:"video",postId:null==l?void 0:l.postId}):t.portrait.push({url:l.url,type:"video",postId:null==l?void 0:l.postId})}}}))},methods:{handlePostDetailt:function(t){this.$router.push("/photo/".concat(t))}}}),c=e(8),component=Object(c.a)(r,(function(){var t,l,e,o,r,c,n,d,v,f,h,m,y,w,C,j,x,_,k,I,P,D,M,z,O,A,E,V,H,J,S,W,N,T,$,B,F,G,K,L,Q,R,U,X,Y,Z,tt,lt,et,st,it,at,ot,ct,nt,ut,vt,ft,pt,ht,mt,gt,yt,wt,Ct,jt,bt,xt,_t,kt,It,Pt,Dt,Mt,zt,Ot,At,Et,Vt,Ht,Jt,St,Wt,Nt,Tt,$t,qt,Bt,Ft,Gt,Kt,Lt,Qt,Rt,Ut,Xt,Yt,Zt,tl,ll,el,sl,il,al,rl,cl,nl,vl,fl,pl,hl,ml,gl,yl,wl,Cl,jl,bl,xl,_l,kl,Il,Pl,Dl,Ml,zl,Ol,Al,El,Vl,Hl,Jl,Sl,Wl,Nl=this,Tl=Nl._self._c;return Tl("div",{staticClass:"w-full h-full cursor-pointer"},[1===Nl.listMedia.length?Tl("div",[1===Nl.landscape.length?Tl("div",Nl._l(Nl.landscape,(function(t,l){return Tl("div",{key:l,staticClass:"w-full h-full flex items-center justify-center"},["image"===t.type?Tl("img",{staticClass:"object-cover w-full",attrs:{src:t.url},on:{click:function(l){return Nl.handlePostDetailt(t.postId)}}}):Tl("video",{staticClass:"object-cover w-full",attrs:{controls:""}},[Tl("source",{attrs:{src:t.url,type:"video/mp4"}})])])})),0):Tl("div",Nl._l(Nl.portrait,(function(t,l){return Tl("div",{key:l,staticClass:"w-full h-full flex items-center justify-center bg-black",on:{click:function(l){return Nl.handlePostDetailt(t.postId)}}},["image"===t.type?Tl("img",{staticClass:"object-cover w-full",attrs:{src:t.url},on:{click:function(l){return Nl.handlePostDetailt(t.postId)}}}):Tl("video",{staticClass:"object-cover w-3/5",attrs:{controls:""}},[Tl("source",{attrs:{src:t.url,type:"video/mp4"}})])])})),0)]):Nl._e(),Nl._v(" "),2===Nl.listMedia.length?Tl("div",[2===Nl.landscape.length?Tl("div",{staticClass:"w-full flex flex-col items-center gap-1",style:"height:"+Nl.height+"px"},Nl._l(Nl.landscape,(function(t,l){return Tl("div",{key:l,staticClass:"w-full flex items-center justify-center",style:"height:"+Nl.height/2+"px"},["image"===(null==t?void 0:t.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null==t?void 0:t.url},on:{click:function(l){return Nl.handlePostDetailt(t.postId)}}}):Nl._e(),Nl._v(" "),"video"===(null==t?void 0:t.type)?Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null==t?void 0:t.url,type:"video/mp4"}})]):Nl._e()])})),0):Nl._e(),Nl._v(" "),1===Nl.landscape.length&&1===Nl.portrait.length?Tl("div",{staticClass:"w-full flex items-center gap-1",style:"height:"+Nl.height/2+"px"},[Tl("div",{staticClass:"w-1/2 h-full flex items-center justify-center"},["image"===Nl.landscape[0].type?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:Nl.landscape[0].url},on:{click:function(t){return Nl.handlePostDetailt(Nl.landscape[0].postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:Nl.landscape[0].url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-1/2 h-full flex items-center justify-center"},["image"===Nl.portrait[0].type?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:Nl.portrait[0].url},on:{click:function(t){return Nl.handlePostDetailt(Nl.portrait[0].postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:Nl.portrait[0].url,type:"video/mp4"}})])])]):Nl._e(),Nl._v(" "),0===Nl.landscape.length?Tl("div",{staticClass:"w-full flex items-center gap-1",style:"height:"+Nl.height+"px"},Nl._l(Nl.portrait,(function(t,l){return Tl("div",{key:l,staticClass:"w-1/2 flex items-center justify-center",style:"height:"+Nl.height+"px"},["image"===(null==t?void 0:t.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null==t?void 0:t.url},on:{click:function(l){return Nl.handlePostDetailt(t.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null==t?void 0:t.url,type:"video/mp4"}})])])})),0):Nl._e()]):Nl._e(),Nl._v(" "),3===Nl.listMedia.length?Tl("div",[2===Nl.landscape.length?Tl("div",{staticClass:"w-full flex flex-col items-center gap-1",style:"height:"+Nl.height+"px"},[Nl._l(Nl.portrait,(function(t,l){return Tl("div",{key:l,staticClass:"w-full flex items-center justify-center gap-1",style:"height:"+Nl.height/2+"px"},["image"===t.type?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:t.url},on:{click:function(l){return Nl.handlePostDetailt(t.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:t.url,type:"video/mp4"}})])])})),Nl._v(" "),Tl("div",{staticClass:"w-full flex items-center gap-1",style:"height:"+Nl.height/2+"px"},Nl._l(Nl.landscape,(function(t,l){return Tl("div",{key:l,staticClass:"w-1/2 h-full flex items-center justify-center gap-1"},["image"===t.type?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:t.url},on:{click:function(l){return Nl.handlePostDetailt(t.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:t.url,type:"video/mp4"}})])])})),0)],2):Nl._e(),Nl._v(" "),3===Nl.landscape.length?Tl("div",{staticClass:"w-full flex flex-col items-center gap-1",style:"height:"+Nl.height+"px"},[Tl("div",{staticClass:"w-full flex items-center justify-center",style:"height:"+Nl.height/2+"px"},["image"===(null===(t=Nl.landscape[0])||void 0===t?void 0:t.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(l=Nl.landscape[0])||void 0===l?void 0:l.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[0])||void 0===l?void 0:l.postId)}}}):Nl._e(),Nl._v(" "),Tl("video",{directives:[{name:"show",rawName:"v-show",value:"video"===(null===(e=Nl.landscape[0])||void 0===e?void 0:e.type),expression:"landscape[0]?.type === 'video'"}],staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(o=Nl.landscape[0])||void 0===o?void 0:o.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-full flex items-center gap-1",style:"height:"+Nl.height/2+"px"},[Tl("div",{staticClass:"w-1/2 h-full flex items-center justify-center"},["image"===(null===(r=Nl.landscape[1])||void 0===r?void 0:r.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(c=Nl.landscape[1])||void 0===c?void 0:c.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[1])||void 0===l?void 0:l.postId)}}}):Nl._e(),Nl._v(" "),"video"===(null===(n=Nl.landscape[1])||void 0===n?void 0:n.type)?Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(d=Nl.landscape[1])||void 0===d?void 0:d.url,type:"video/mp4"}})]):Nl._e()]),Nl._v(" "),Tl("div",{staticClass:"w-1/2 h-full flex items-center justify-center"},["image"===(null===(v=Nl.landscape[2])||void 0===v?void 0:v.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(f=Nl.landscape[2])||void 0===f?void 0:f.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[2])||void 0===l?void 0:l.postId)}}}):Nl._e(),Nl._v(" "),"video"===(null===(h=Nl.landscape[2])||void 0===h?void 0:h.type)?Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(m=Nl.landscape[2])||void 0===m?void 0:m.url,type:"video/mp4"}})]):Nl._e()])])]):Nl._e(),Nl._v(" "),1===Nl.landscape.length?Tl("div",{staticClass:"w-full flex items-center gap-1",style:"height:"+Nl.height+"px"},[Tl("div",{staticClass:"w-1/2 h-full flex items-center justify-center"},["image"===(null===(y=Nl.portrait[0])||void 0===y?void 0:y.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(w=Nl.portrait[0])||void 0===w?void 0:w.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[0])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(C=Nl.portrait[0])||void 0===C?void 0:C.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-1/2 h-full flex flex-col items-center gap-1"},[Tl("div",{staticClass:"w-full h-1/2 flex items-center justify-center"},["image"===(null===(j=Nl.landscape[0])||void 0===j?void 0:j.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(x=Nl.landscape[0])||void 0===x?void 0:x.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[0])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(_=Nl.landscape[0])||void 0===_?void 0:_.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-full h-1/2 flex items-center justify-center"},["image"===(null===(k=Nl.portrait[1])||void 0===k?void 0:k.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(I=Nl.portrait[1])||void 0===I?void 0:I.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[1])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(P=Nl.portrait[1])||void 0===P?void 0:P.url,type:"video/mp4"}})])])])]):Nl._e(),Nl._v(" "),0===Nl.landscape.length?Tl("div",{staticClass:"w-full flex items-center gap-1",style:"height:"+Nl.height+"px"},[Tl("div",{staticClass:"w-2/3 h-full flex items-center justify-center"},["image"===(null===(D=Nl.portrait[0])||void 0===D?void 0:D.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(M=Nl.portrait[0])||void 0===M?void 0:M.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[0])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(z=Nl.portrait[0])||void 0===z?void 0:z.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-1/3 h-full flex flex-col items-center gap-1"},[Tl("div",{staticClass:"w-full h-1/2 flex items-center justify-center"},["image"===(null===(O=Nl.portrait[1])||void 0===O?void 0:O.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(A=Nl.portrait[1])||void 0===A?void 0:A.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[1])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(E=Nl.portrait[1])||void 0===E?void 0:E.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-full h-1/2 flex items-center justify-center"},["image"===(null===(V=Nl.portrait[2])||void 0===V?void 0:V.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(H=Nl.portrait[2])||void 0===H?void 0:H.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[2])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:"",autoplay:""}},[Tl("source",{attrs:{src:null===(J=Nl.portrait[2])||void 0===J?void 0:J.url,type:"video/mp4"}})])])])]):Nl._e()]):Nl._e(),Nl._v(" "),4===Nl.listMedia.length?Tl("div",[4===Nl.landscape.length?Tl("div",{style:"height:"+Nl.height+"px"},[Tl("div",{staticClass:"w-full h-2/3 flex items-center justify-center"},["image"===(null===(S=Nl.landscape[3])||void 0===S?void 0:S.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(W=Nl.landscape[3])||void 0===W?void 0:W.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[3])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(N=Nl.landscape[3])||void 0===N?void 0:N.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"flex items-center"},Nl._l(Nl.landscape,(function(t,l){return Tl("div",{key:l,staticClass:"w-1/3 h-1/3 flex items-center justify-center"},[l<=2&&"image"===t.type?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:t.url},on:{click:function(l){return Nl.handlePostDetailt(t.postId)}}}):Nl._e(),Nl._v(" "),l<=2&&"video"===t.type?Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:t.url,type:"video/mp4"}})]):Nl._e()])})),0)]):Nl._e(),Nl._v(" "),3===Nl.landscape.length?Tl("div",{style:"height:"+Nl.height+"px"},[Tl("div",{staticClass:"w-full h-2/3 flex items-center justify-center"},["image"===(null===(T=Nl.landscape[2])||void 0===T?void 0:T.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===($=Nl.landscape[2])||void 0===$?void 0:$.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[2])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(B=Nl.landscape[2])||void 0===B?void 0:B.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"flex items-center w-1/3 h-1/3"},[Tl("div",{staticClass:"w-full h-full flex items-center justify-center"},["image"===(null===(F=Nl.landscape[1])||void 0===F?void 0:F.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(G=Nl.landscape[1])||void 0===G?void 0:G.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[1])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(K=Nl.landscape[1])||void 0===K?void 0:K.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-full h-full flex items-center justify-center"},["image"===(null===(L=Nl.landscape[0])||void 0===L?void 0:L.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(Q=Nl.landscape[0])||void 0===Q?void 0:Q.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[0])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(R=Nl.landscape[0])||void 0===R?void 0:R.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-full h-full flex items-center justify-center"},["image"===(null===(U=Nl.portrait[0])||void 0===U?void 0:U.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(X=Nl.portrait[0])||void 0===X?void 0:X.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[0])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(Y=Nl.portrait[0])||void 0===Y?void 0:Y.url,type:"video/mp4"}})])])])]):Nl._e(),Nl._v(" "),2===Nl.landscape.length?Tl("div",{style:"height:"+Nl.height+"px"},[Tl("div",{staticClass:"w-full h-2/3 flex items-center justify-center"},["image"===(null===(Z=Nl.landscape[1])||void 0===Z?void 0:Z.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(tt=Nl.landscape[1])||void 0===tt?void 0:tt.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[1])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(lt=Nl.landscape[1])||void 0===lt?void 0:lt.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"flex w-1/3 h-1/3 items-center"},[Tl("div",{staticClass:"w-full h-full flex items-center justify-center"},["image"===(null===(et=Nl.landscape[0])||void 0===et?void 0:et.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(st=Nl.landscape[0])||void 0===st?void 0:st.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[0])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(it=Nl.landscape[0])||void 0===it?void 0:it.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-full h-full flex items-center justify-center"},["image"===(null===(at=Nl.portrait[1])||void 0===at?void 0:at.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(ot=Nl.portrait[1])||void 0===ot?void 0:ot.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[1])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(ct=Nl.portrait[1])||void 0===ct?void 0:ct.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-full h-full flex items-center justify-center"},["image"===(null===(nt=Nl.portrait[0])||void 0===nt?void 0:nt.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(ut=Nl.portrait[0])||void 0===ut?void 0:ut.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[0])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(vt=Nl.portrait[0])||void 0===vt?void 0:vt.url,type:"video/mp4"}})])])])]):Nl._e(),Nl._v(" "),1===Nl.landscape.length?Tl("div",{staticClass:"w-full flex items-center gap-1",style:"height:"+Nl.height+"px"},[Tl("div",{staticClass:"w-2/3 h-full flex items-center justify-center"},["image"===(null===(ft=Nl.portrait[2])||void 0===ft?void 0:ft.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(pt=Nl.portrait[2])||void 0===pt?void 0:pt.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[2])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(ht=Nl.portrait[2])||void 0===ht?void 0:ht.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-1/3 h-full flex flex-col items-center gap-1"},[Tl("div",{staticClass:"w-full h-1/3 flex items-center justify-center"},["image"===(null===(mt=Nl.landscape[0])||void 0===mt?void 0:mt.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(gt=Nl.landscape[0])||void 0===gt?void 0:gt.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[0])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(yt=Nl.landscape[0])||void 0===yt?void 0:yt.url,type:"video/mp4"}})])]),Nl._v(" "),Nl._l(Nl.portrait,(function(t,l){return Tl("div",{key:l,staticClass:"w-full h-1/3 flex items-center justify-center"},[l<2&&"image"===t.type?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:t.url},on:{click:function(l){return Nl.handlePostDetailt(t.postId)}}}):Nl._e(),Nl._v(" "),l<2&&"video"===t.type?Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:t.url,type:"video/mp4"}})]):Nl._e()])}))],2)]):Nl._e(),Nl._v(" "),0===Nl.landscape.length?Tl("div",{staticClass:"w-full flex items-center gap-1",style:"height:"+Nl.height+"px"},[Tl("div",{staticClass:"w-2/3 h-full flex items-center justify-center"},["image"===(null===(wt=Nl.portrait[3])||void 0===wt?void 0:wt.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(Ct=Nl.portrait[3])||void 0===Ct?void 0:Ct.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[3])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(jt=Nl.portrait[3])||void 0===jt?void 0:jt.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-1/3 h-full flex flex-col items-center gap-1"},Nl._l(Nl.portrait,(function(t,l){return Tl("div",{key:l,staticClass:"w-full h-1/3 flex items-center justify-center"},[l<3&&"image"===t.type?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:t.url},on:{click:function(l){return Nl.handlePostDetailt(t.postId)}}}):Nl._e(),Nl._v(" "),l<3&&"video"===t.type?Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:t.url,type:"video/mp4"}})]):Nl._e()])})),0)]):Nl._e()]):Nl._e(),Nl._v(" "),Nl.listMedia.length>=5?Tl("div",[Nl.landscape.length>=5?Tl("div",{staticClass:"flex gap-1",style:"height:"+Nl.height+"px"},[Tl("div",{staticClass:"flex flex-col items-center w-1/2 gap-1"},[Tl("div",{staticClass:"w-full h-1/2 flex items-center justify-center"},["image"===(null===(bt=Nl.landscape[4])||void 0===bt?void 0:bt.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(xt=Nl.landscape[4])||void 0===xt?void 0:xt.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[4])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(_t=Nl.landscape[4])||void 0===_t?void 0:_t.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-full h-1/2 flex items-center justify-center"},["image"===(null===(kt=Nl.landscape[3])||void 0===kt?void 0:kt.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(It=Nl.landscape[3])||void 0===It?void 0:It.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[3])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(Pt=Nl.landscape[3])||void 0===Pt?void 0:Pt.url,type:"video/mp4"}})])])]),Nl._v(" "),Tl("div",{staticClass:"flex flex-col items-center w-1/2 gap-1 relative"},[Tl("div",{staticClass:"w-full h-1/3 flex items-center justify-center"},["image"===(null===(Dt=Nl.landscape[2])||void 0===Dt?void 0:Dt.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(Mt=Nl.landscape[2])||void 0===Mt?void 0:Mt.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[2])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(zt=Nl.landscape[2])||void 0===zt?void 0:zt.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-full h-1/3 flex items-center justify-center"},["image"===(null===(Ot=Nl.landscape[1])||void 0===Ot?void 0:Ot.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(At=Nl.landscape[1])||void 0===At?void 0:At.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[1])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(Et=Nl.landscape[1])||void 0===Et?void 0:Et.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-full h-1/3 flex items-center justify-center relative"},["image"===(null===(Vt=Nl.landscape[0])||void 0===Vt?void 0:Vt.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(Ht=Nl.landscape[0])||void 0===Ht?void 0:Ht.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[0])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(Jt=Nl.landscape[0])||void 0===Jt?void 0:Jt.url,type:"video/mp4"}})]),Nl._v(" "),Tl("div",{staticClass:"absolute z-20 text-white font-semibold text-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"},[Nl._v("\n            +"+Nl._s(Nl.listMedia.length-5)+"\n          ")]),Nl._v(" "),Tl("div",{staticClass:"absolute bg-black z-10 w-full h-full opacity-50"})])])]):Nl._e(),Nl._v(" "),4===Nl.landscape.length?Tl("div",{staticClass:"flex flex-col gap-1",style:"height:"+Nl.height+"px"},[Tl("div",{staticClass:"flex items-center w-1/2 h-1/2 gap-1"},[Tl("div",{staticClass:"w-full h-full flex items-center justify-center"},["image"===(null===(St=Nl.landscape[Nl.landscape.length-1])||void 0===St?void 0:St.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(Wt=Nl.landscape[Nl.landscape.length-1])||void 0===Wt?void 0:Wt.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[Nl.landscape.length-1])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(Nt=Nl.landscape[Nl.landscape.length-1])||void 0===Nt?void 0:Nt.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-full h-full flex items-center justify-center"},["image"===(null===(Tt=Nl.landscape[Nl.landscape.length-2])||void 0===Tt?void 0:Tt.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===($t=Nl.landscape[Nl.landscape.length-2])||void 0===$t?void 0:$t.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[Nl.landscape.length-2])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(qt=Nl.landscape[Nl.landscape.length-2])||void 0===qt?void 0:qt.url,type:"video/mp4"}})])])]),Nl._v(" "),Tl("div",{staticClass:"flex items-center w-full h-1/2 gap-1 relative"},[Tl("div",{staticClass:"w-1/3 h-full flex items-center justify-center"},["image"===(null===(Bt=Nl.portrait[0])||void 0===Bt?void 0:Bt.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(Ft=Nl.portrait[0])||void 0===Ft?void 0:Ft.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[0])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(Gt=Nl.portrait[0])||void 0===Gt?void 0:Gt.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-1/3 h-full flex items-center justify-center"},["image"===(null===(Kt=Nl.landscape[1])||void 0===Kt?void 0:Kt.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(Lt=Nl.landscape[1])||void 0===Lt?void 0:Lt.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[1])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(Qt=Nl.landscape[1])||void 0===Qt?void 0:Qt.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-1/3 h-full flex items-center justify-center relative"},["image"===(null===(Rt=Nl.landscape[0])||void 0===Rt?void 0:Rt.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(Ut=Nl.landscape[0])||void 0===Ut?void 0:Ut.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[0])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(Xt=Nl.landscape[0])||void 0===Xt?void 0:Xt.url,type:"video/mp4"}})]),Nl._v(" "),Tl("div",{staticClass:"absolute z-20 text-white font-semibold text-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"},[Nl._v("\n            +"+Nl._s(Nl.listMedia.length-5)+"\n          ")]),Nl._v(" "),Tl("div",{staticClass:"absolute bg-black z-10 w-full h-full opacity-50"})])])]):Nl._e(),Nl._v(" "),3===Nl.landscape.length?Tl("div",{staticClass:"flex gap-1",style:"height:"+Nl.height+"px"},[Tl("div",{staticClass:"flex flex-col w-1/2 h-full gap-1"},[Tl("div",{staticClass:"w-full h-1/2 flex items-center justify-center"},["image"===(null===(Yt=Nl.portrait[0])||void 0===Yt?void 0:Yt.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(Zt=Nl.portrait[0])||void 0===Zt?void 0:Zt.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[0])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(tl=Nl.portrait[0])||void 0===tl?void 0:tl.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-full h-1/2 flex items-center justify-center"},["image"===(null===(ll=Nl.portrait[1])||void 0===ll?void 0:ll.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(el=Nl.portrait[1])||void 0===el?void 0:el.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[1])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(sl=Nl.portrait[1])||void 0===sl?void 0:sl.url,type:"video/mp4"}})])])]),Nl._v(" "),Tl("div",{staticClass:"flex flex-col items-center w-1/2 h-full gap-1"},[Tl("div",{staticClass:"w-full h-1/3 flex items-center justify-center"},["image"===(null===(il=Nl.landscape[0])||void 0===il?void 0:il.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(al=Nl.landscape[0])||void 0===al?void 0:al.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[0])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(rl=Nl.landscape[0])||void 0===rl?void 0:rl.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-full flex items-center justify-center",style:"height:"+Nl.height/3+"px"},["image"===(null===(cl=Nl.landscape[1])||void 0===cl?void 0:cl.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(nl=Nl.landscape[1])||void 0===nl?void 0:nl.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[1])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(vl=Nl.landscape[1])||void 0===vl?void 0:vl.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-full h-1/3 flex items-center justify-center relative"},["image"===(null===(fl=Nl.portrait[2])||void 0===fl?void 0:fl.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(pl=Nl.portrait[2])||void 0===pl?void 0:pl.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[2])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(hl=Nl.portrait[2])||void 0===hl?void 0:hl.url,type:"video/mp4"}})]),Nl._v(" "),Tl("div",{staticClass:"absolute z-20 text-white font-semibold text-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"},[Nl._v("\n            +"+Nl._s(Nl.listMedia.length-5)+"\n          ")]),Nl._v(" "),Tl("div",{staticClass:"absolute bg-black z-10 w-full h-full opacity-50"})])])]):Nl._e(),Nl._v(" "),2===Nl.landscape.length?Tl("div",{staticClass:"flex flex-col gap-1",style:"height:"+Nl.height+"px"},[Tl("div",{staticClass:"w-full h-1/2 flex gap-1 items-center justify-center"},[Tl("div",{staticClass:"w-1/2 h-full"},["image"===(null===(ml=Nl.landscape[1])||void 0===ml?void 0:ml.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(gl=Nl.landscape[1])||void 0===gl?void 0:gl.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[1])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(yl=Nl.landscape[1])||void 0===yl?void 0:yl.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-1/2 h-full"},["image"===(null===(wl=Nl.landscape[0])||void 0===wl?void 0:wl.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(Cl=Nl.landscape[0])||void 0===Cl?void 0:Cl.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[0])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(jl=Nl.landscape[0])||void 0===jl?void 0:jl.url,type:"video/mp4"}})])])]),Nl._v(" "),Tl("div",{staticClass:"flex items-center gap-1 h-1/2"},[Tl("div",{staticClass:"w-1/3 h-full flex gap-1 items-center justify-center"},["image"===(null===(bl=Nl.portrait[2])||void 0===bl?void 0:bl.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(xl=Nl.portrait[2])||void 0===xl?void 0:xl.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[2])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(_l=Nl.portrait[2])||void 0===_l?void 0:_l.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-1/3 h-full flex gap-1 items-center justify-center"},["image"===(null===(kl=Nl.portrait[1])||void 0===kl?void 0:kl.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(Il=Nl.portrait[1])||void 0===Il?void 0:Il.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[1])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(Pl=Nl.portrait[1])||void 0===Pl?void 0:Pl.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-1/3 h-full flex gap-1 items-center justify-center relative"},["image"===(null===(Dl=Nl.portrait[0])||void 0===Dl?void 0:Dl.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(Ml=Nl.portrait[0])||void 0===Ml?void 0:Ml.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[0])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(zl=Nl.portrait[0])||void 0===zl?void 0:zl.url,type:"video/mp4"}})]),Nl._v(" "),Tl("div",{staticClass:"absolute z-20 text-white font-semibold text-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"},[Nl._v("\n            +"+Nl._s(Nl.listMedia.length-5)+"\n          ")]),Nl._v(" "),Tl("div",{staticClass:"absolute bg-black z-10 w-full h-full opacity-50"})])])]):Nl._e(),Nl._v(" "),1===Nl.landscape.length?Tl("div",{staticClass:"w-full flex items-center gap-1",style:"height:"+Nl.height+"px"},[Tl("div",{staticClass:"w-2/3 h-full flex items-center justify-center"},["image"===(null===(Ol=Nl.portrait[2])||void 0===Ol?void 0:Ol.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(Al=Nl.portrait[2])||void 0===Al?void 0:Al.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[2])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(El=Nl.portrait[2])||void 0===El?void 0:El.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-1/3 h-full flex flex-col items-center gap-1"},[Tl("div",{staticClass:"w-full h-1/3 flex items-center justify-center"},["image"===(null===(Vl=Nl.landscape[0])||void 0===Vl?void 0:Vl.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(Hl=Nl.landscape[0])||void 0===Hl?void 0:Hl.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.landscape[0])||void 0===l?void 0:l.postId)}}}):Nl._e()]),Nl._v(" "),Nl._l(Nl.portrait,(function(t,l){return Tl("div",{key:l,staticClass:"w-full h-1/3 flex items-center justify-center"},[l<2&&"image"===t.type?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:t.url},on:{click:function(l){return Nl.handlePostDetailt(t.postId)}}}):Nl._e(),Nl._v(" "),l<2&&"video"===t.type?Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:t.url,type:"video/mp4"}})]):Nl._e()])}))],2)]):Nl._e(),Nl._v(" "),0===Nl.landscape.length?Tl("div",{staticClass:"w-full flex items-center gap-1",style:"height:"+Nl.height+"px"},[Tl("div",{staticClass:"w-2/3 h-full flex items-center justify-center"},["image"===(null===(Jl=Nl.portrait[3])||void 0===Jl?void 0:Jl.type)?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:null===(Sl=Nl.portrait[3])||void 0===Sl?void 0:Sl.url},on:{click:function(t){var l;return Nl.handlePostDetailt(null===(l=Nl.portrait[3])||void 0===l?void 0:l.postId)}}}):Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:null===(Wl=Nl.portrait[3])||void 0===Wl?void 0:Wl.url,type:"video/mp4"}})])]),Nl._v(" "),Tl("div",{staticClass:"w-1/3 h-full flex flex-col items-center gap-1"},Nl._l(Nl.portrait,(function(t,l){return Tl("div",{key:l,staticClass:"w-full h-1/3 flex items-center justify-center"},[l<3&&"image"===t.type?Tl("img",{staticClass:"object-cover w-full h-full",attrs:{src:t.url},on:{click:function(l){return Nl.handlePostDetailt(t.postId)}}}):Nl._e(),Nl._v(" "),l<3&&"video"===t.type?Tl("video",{staticClass:"object-cover w-full h-full",attrs:{controls:""}},[Tl("source",{attrs:{src:t.url,type:"video/mp4"}})]):Nl._e()])})),0)]):Nl._e()]):Nl._e()])}),[],!1,null,null,null);l.default=component.exports},645:function(t,l,e){"use strict";e.d(l,"a",(function(){return n}));var o=e(188);var r=e(280),c=e(156);function n(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||Object(r.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);