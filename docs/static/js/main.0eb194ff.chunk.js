(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{41:function(t,e,a){},47:function(t,e,a){"use strict";a.r(e);var n=a(2),i=a(0),r=a(11),c=a.n(r),s=(a(41),a(13)),o=a(31),u=a(21),l=a(70),d=a(78),j=Object(l.a)((function(t){return{root:{"& > *":{margin:t.spacing(1),width:"25ch"}},input:{marginLeft:t.spacing(1),flex:1},inputRoot:{color:"inherit"},inputInput:Object(u.a)({position:"relative",top:"1px",padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),h=function(t){var e=t.setCategory,a=j(),r=Object(i.useState)(""),c=Object(s.a)(r,2),u=c[0],l=c[1];return Object(n.jsx)("form",{className:a.root,onSubmit:function(t){t.preventDefault(),u.length>2&&e((function(t){return[u].concat(Object(o.a)(t))}))},children:Object(n.jsx)(d.a,{id:"CustomInput",placeholder:"Search",inputProps:{"aria-label":"Search"},classes:{root:a.inputRoot,input:a.inputInput},value:u,onChange:function(t){l(t.target.value)}})})},p=a(29),b=a(72),m=a(77),g=a(73),x=Object(l.a)({root:{maxWidth:"95%"},text:{height:80},card:{width:"100%"}}),O=function(t){var e=t.title,a=t.url,i=x();return Object(n.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[" ",Object(n.jsx)(b.a,{className:i.root,children:Object(n.jsx)(m.a,{className:i.card,children:Object(n.jsx)(g.a,{component:"img",alt:e,height:"190",image:a,title:e})})})]})},f=a(26),v=a.n(f),N=a(30),w=function(){var t=Object(N.a)(v.a.mark((function t(e){var a,n,i,r,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="https://api.giphy.com/v1/gifs/search?api_key=ZibnH83SPe7Ce8dt77UDTX2n287iYEhg&q=".concat(encodeURI(e),"&limit=20"),t.next=3,fetch(a);case 3:return n=t.sent,t.next=6,n.json();case 6:return i=t.sent,r=i.data,c=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",c);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=a(74),C=function(t){var e=function(t){var e=Object(i.useState)({data:[],loading:!0}),a=Object(s.a)(e,2),n=a[0],r=a[1];return w(t).then((function(t){r({data:t,loading:!1})})),n}(t.category),a=e.data,r=e.loading;return Object(n.jsx)("div",{className:"dis",children:Object(n.jsxs)("div",{className:"subDis",children:[" ",r?Object(n.jsx)(y.a,{id:"textLoading",variant:"h6",className:"animate__animated animate__flash",children:"Cargarndo..."}):a.map((function(t){return Object(n.jsx)(O,Object(p.a)({},t),t.id)}))]})})},_=a(75),R=a(76),S=Object(l.a)((function(t){return{root:{flexGrow:1,width:"100%"},NavBar:{backgroundColor:"#101124"},MuiToolbarRegular:{minHeight:"48px"},menuButton:{marginRight:t.spacing(2)},title:{}}})),k=function(t){var e=t.title,a=t.setCategory,i=S();return Object(n.jsx)("div",{className:i.root,children:Object(n.jsx)(_.a,{className:i.NavBar,position:"static",children:Object(n.jsxs)(R.a,{className:i.MuiToolbarRegular,children:[Object(n.jsx)(y.a,{variant:"h6",className:i.title,children:e}),Object(n.jsx)(h,{setCategory:a})]})})})},I=function(){return Object(n.jsx)("div",{className:"footer",children:Object(n.jsxs)("p",{children:["Copyright \xa9 ",(new Date).getFullYear()," All Rights Reserved by"]})})},B=Object(l.a)({text:{margin:15}}),D=function(){B();var t=Object(i.useState)(["One Punch"]),e=Object(s.a)(t,2),a=e[0],r=e[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{children:Object(n.jsx)(k,{setCategory:r,title:"Gif Expert"})}),Object(n.jsx)("main",{children:Object(n.jsx)("ol",{children:a.map((function(t){return Object(n.jsx)(C,{category:t},t)}))})}),Object(n.jsx)("footer",{children:Object(n.jsx)(I,{})})]})};c.a.render(Object(n.jsx)(D,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.0eb194ff.chunk.js.map