(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{292:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__138dG",messages:"Dialogs_messages__2fdGH",newPostForm:"Dialogs_newPostForm__3cKfp"}},293:function(e,t,s){e.exports={dialog:"DialogItem_dialog__1PT_6",avatar:"DialogItem_avatar__FvezV",name:"DialogItem_name__2d71-",text:"DialogItem_text__1YSlu",dialogItems:"DialogItem_dialogItems__3ZvVf",visited:"DialogItem_visited__27oVx",active:"DialogItem_active__4_naQ"}},294:function(e,t,s){e.exports={message:"Message_message__2tEl7"}},296:function(e,t,s){"use strict";s.r(t);var a=s(123),i=s(292),n=s.n(i),c=s(293),o=s.n(c),r=s(14),d=s(0),l=function(e){var t="/dialogs/"+e.id;return Object(d.jsxs)("div",{className:o.a.dialog+" "+o.a.active,children:[Object(d.jsx)("div",{className:o.a.avatar,children:Object(d.jsx)("img",{src:e.img,alt:e.name})}),Object(d.jsx)("div",{className:o.a.name,children:Object(d.jsx)(r.b,{to:t,children:e.name})}),Object(d.jsx)("div",{className:o.a.text,children:"\u0422\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})]})},j=s(294),m=s.n(j),b=s(1),g=s.n(b),u=function(e){return Object(d.jsx)("div",{className:m.a.message,children:e.text})},O=s(124),_=s(125),x=s(39),v=s(38),h=Object(v.a)(5),f=function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsxs)("label",{children:["Add new message ",Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsx)(O.a,{component:x.b,name:"newMessageBody",validate:[v.b,h]})})]}),Object(d.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})},p=function(e){var t=e.dialogs.map((function(e){return Object(d.jsx)(l,{id:e.id,name:e.name,img:e.img},e.id)})),s=e.messages.map((function(e){return Object(d.jsx)(u,{text:e.text},e.id)})),a=Object(_.a)({form:"Message"})(f);return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:n.a.dialogs,children:[Object(d.jsx)("div",{className:n.a.dialogItems,children:t}),Object(d.jsxs)("div",{className:n.a.messages,children:[Object(d.jsx)("div",{children:s}),Object(d.jsx)("div",{className:n.a.newPostForm,children:Object(d.jsx)(a,{onSubmit:function(t){e.onSendMessageClick(t.newMessageBody)}})})]})]})})},D=s(10),I=s(3),N=s(15),w=s(16),y=s(18),M=s(17),P=s(7),S=function(e){return{isAuth:e.auth.isAuth}},k=s(8);t.default=Object(k.compose)(Object(D.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),(function(e){return{onSendMessageClick:function(t){e(Object(a.a)(t))}}})),(function(e){var t=function(t){Object(y.a)(a,t);var s=Object(M.a)(a);function a(){return Object(N.a)(this,a),s.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(I.a)({},this.props)):Object(d.jsx)(P.a,{to:"/login"})}}]),a}(g.a.Component);return Object(D.b)(S)(t)}))(p)}}]);
//# sourceMappingURL=3.6fdabfa6.chunk.js.map