(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1022:function(e,t,r){"use strict";r.r(t);var n={name:"MessagesHome",components:{MessengerOtherInbox:r(1009).default},layout:"layoutMessenge",computed:{currentPath:function(){return this.$route.path},showOtherInbox:function(){return this.$store.state.headerModule.showOtherInbox},messengerOtherValue:function(){return this.$store.state.headerModule.messengerOtherValue}}},o=r(8),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-full h-full dark:bg-[#242526] dark:text-white"},[e.messengerOtherValue?e._e():t("div",{staticClass:"w-full h-full flex items-center justify-center p-2"},[t("div",{staticClass:"text-[20px] text-[#65676b] dark:bg-[#242526] dark:text-white font-bold"},[e._v("\n      Hãy chọn một đoạn chat hoặc bắt đầu cuộc trò chuyện mới\n    ")])]),e._v(" "),e.messengerOtherValue?t("div",{staticClass:"p-3"},[t("messenger-other-inbox",{attrs:{"messenger-other-value":e.messengerOtherValue}})],1):e._e()])}),[],!1,null,"66bd142e",null);t.default=component.exports}}]);