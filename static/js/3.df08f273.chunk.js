(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{298:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__138dG",messages:"Dialogs_messages__2fdGH",newPostForm:"Dialogs_newPostForm__3cKfp"}},299:function(e,t,s){e.exports={dialog:"DialogItem_dialog__1PT_6",avatar:"DialogItem_avatar__FvezV",name:"DialogItem_name__2d71-",text:"DialogItem_text__1YSlu",dialogItems:"DialogItem_dialogItems__3ZvVf",visited:"DialogItem_visited__27oVx",active:"DialogItem_active__4_naQ"}},300:function(e,t,s){e.exports={message:"Message_message__2tEl7"}},302:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),n=s(127),c=s(298),o=s.n(c),r=s(299),d=s.n(r),l=s(13),j=s(0),m=function(e){var t="/dialogs/"+e.id;return Object(j.jsxs)("div",{className:d.a.dialog+" "+d.a.active,children:[Object(j.jsx)("div",{className:d.a.avatar,children:Object(j.jsx)("img",{src:e.img,alt:e.name})}),Object(j.jsx)("div",{className:d.a.name,children:Object(j.jsx)(l.b,{to:t,children:e.name})}),Object(j.jsx)("div",{className:d.a.text,children:"\u0422\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})]})},b=s(300),g=s.n(b),u=function(e){return Object(j.jsx)("div",{className:g.a.message,children:e.text})},O=s(128),_=s(129),x=s(38),v=s(37),h=Object(v.a)(5),f=function(e){return Object(j.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(j.jsxs)("label",{children:["Add new message ",Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)(O.a,{component:x.b,name:"newMessageBody",validate:[v.b,h]})})]}),Object(j.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})},p=function(e){var t=e.dialogs.map((function(e){return Object(j.jsx)(m,{id:e.id,name:e.name,img:e.img},e.id)})),s=e.messages.map((function(e){return Object(j.jsx)(u,{text:e.text},e.id)})),a=Object(_.a)({form:"Message"})(f);return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:o.a.dialogs,children:[Object(j.jsx)("div",{className:o.a.dialogItems,children:t}),Object(j.jsxs)("div",{className:o.a.messages,children:[Object(j.jsx)("div",{children:s}),Object(j.jsx)("div",{className:o.a.newPostForm,children:Object(j.jsx)(a,{onSubmit:function(t){e.onSendMessageClick(t.newMessageBody)}})})]})]})})},D=s(10),I=s(3),N=s(14),w=s(15),y=s(17),M=s(16),P=s(9),S=function(e){return{isAuth:e.auth.isAuth}},k=s(7);t.default=Object(k.compose)(Object(D.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),(function(e){return{onSendMessageClick:function(t){e(Object(n.a)(t))}}})),(function(e){var t=function(t){Object(y.a)(a,t);var s=Object(M.a)(a);function a(){return Object(N.a)(this,a),s.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(j.jsx)(e,Object(I.a)({},this.props)):Object(j.jsx)(P.a,{to:"/login"})}}]),a}(i.a.Component);return Object(D.b)(S)(t)}))(p)}}]);
//# sourceMappingURL=3.df08f273.chunk.js.map