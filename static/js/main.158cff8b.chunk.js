(this["webpackJsonpecommerce-site"]=this["webpackJsonpecommerce-site"]||[]).push([[0],{108:function(t,e,n){},109:function(t,e,n){},110:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(21),i=n.n(c),r=n(20),s=n.n(r),o=n(31),l=n(27),j=n(50),d=new(n.n(j).a)(Object({NODE_ENV:"production",PUBLIC_URL:"/e-commerce",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CHEC_PUBLIC_KEY,!0),b=n(126),u=n(127),m=n(128),p=n(129),h=n(130),x=n(131),O=n.p+"static/media/default-logo.1643ab75.png",f=n(15),g=n(124),v=n(11),y=Object(g.a)((function(t){var e;return{appBar:(e={boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},Object(f.a)(e,t.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),Object(f.a)(e,"display","flex"),e),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px",alignSelf:"center"},menuButton:Object(f.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(f.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(v.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.a)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(f.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),w=n(19),C=n(2),_=function(t){var e=t.totalItems,n=y();return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(b.a,{position:"fixed",className:n.appBar,color:"inherit",children:Object(C.jsxs)(u.a,{children:[Object(C.jsxs)(m.a,{variant:"h6",className:n.appBar,color:"inherit",children:[Object(C.jsx)("img",{src:O,alt:"Marketing App",height:"25px",className:n.image}),"Marketing App"]}),Object(C.jsx)("div",{className:n.grow}),Object(C.jsxs)("div",{style:{width:"50%",display:"flex",justifyContent:"space-evenly"},children:[Object(C.jsx)(w.b,{to:"/clothing",children:"Clothing"}),Object(C.jsx)(w.b,{to:"/cart",children:"Cart"}),Object(C.jsx)(w.b,{to:"/products",children:"Products"}),Object(C.jsx)(w.b,{to:"/contact",children:"Contact"})]}),Object(C.jsx)("div",{className:n.button,children:Object(C.jsx)(p.a,{"aria-label":"Show cart items",color:"inherit",children:Object(C.jsx)(h.a,{badgeContent:e,color:"secondary",children:Object(C.jsx)(x.a,{})})})})]})})})},N=n(137),S=n(132),k=n(133),T=n(134),A=n(135),B=n(136),E=Object(g.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),R=function(t){var e=t.product,n=t.onAddToCart,a=E();return Object(C.jsxs)(S.a,{className:a.root,children:[Object(C.jsx)(k.a,{className:a.media,image:e.media.source,title:e.name}),Object(C.jsxs)(T.a,{children:[Object(C.jsxs)("div",{className:a.cardContent,children:[Object(C.jsx)(m.a,{variant:"h5",gutterBottom:!0,children:e.name}),Object(C.jsx)(m.a,{variant:"h5",children:e.price.formatted_with_symbol})]}),Object(C.jsx)(m.a,{dangerouslySetInnerHTML:{__html:e.description},variant:"body2",color:"textSecondary"})]}),Object(C.jsx)(A.a,{disableSpacing:!0,className:a.cardActions,children:Object(C.jsx)(p.a,{"aria-label":"Add to Cart",onClick:function(){return n(e.id,1)},children:Object(C.jsx)(B.a,{})})})]})},I=Object(g.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}})),D=function(t){var e=t.products,n=t.onAddToCart,a=I();return Object(C.jsxs)("main",{className:a.content,children:[Object(C.jsx)("div",{className:a.toolbar}),Object(C.jsx)(N.a,{container:!0,justifyContent:"center",spacing:4,children:e.map((function(t){return Object(C.jsx)(N.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(C.jsx)(R,{product:t,onAddToCart:n})},t.id)}))})]})},L=n(138),P=n(139),W=Object(g.a)((function(t){var e;return{toolbar:t.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(e={minWidth:"150px"},Object(f.a)(e,t.breakpoints.down("xs"),{marginBottom:"5px"}),Object(f.a)(e,t.breakpoints.up("xs"),{marginRight:"20px"}),e),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),F=Object(g.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space=between"},cardActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),H=function(t){var e=t.item,n=F();return Object(C.jsxs)(S.a,{children:[Object(C.jsx)(k.a,{image:e.media.source,alt:e.name,className:n.media}),Object(C.jsxs)(T.a,{className:n.cardContent,children:[Object(C.jsx)(m.a,{variant:"h4",children:e.name}),Object(C.jsx)(m.a,{variant:"h5",children:e.line_total.formatted_with_symbol})]}),Object(C.jsxs)(A.a,{className:n.cardActions,children:[Object(C.jsxs)("div",{className:n.buttons,children:[Object(C.jsx)(L.a,{type:"button",size:"small",children:"-"}),Object(C.jsx)(m.a,{children:e.quantity}),Object(C.jsx)(L.a,{type:"button",size:"small",children:"+"})]}),Object(C.jsx)(L.a,{variant:"contained",type:"button",color:"secondary",children:"Remove"})]})]})},M=function(t){var e=t.cart,n=W(),a=function(){return Object(C.jsx)(m.a,{variant:"subtitle1",children:"You have no items in cart, add some!"})},c=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(N.a,{container:!0,spacing:3,children:e.line_items.map((function(t){return Object(C.jsx)(N.a,{item:!0,xs:12,sm:4,children:Object(C.jsx)(H,{item:t})},t.id)}))}),Object(C.jsxs)("div",{className:n.cardDetails,children:[Object(C.jsxs)(m.a,{variant:"h4",children:["Subtotal: ",e.subtotal.formatted_with_symbol]}),Object(C.jsxs)("div",{children:[Object(C.jsx)(L.a,{className:n.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",children:"Empty Cart"}),Object(C.jsx)(L.a,{className:n.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Checkout"})]})]})]})};return e.line_items?Object(C.jsxs)(P.a,{children:[Object(C.jsx)("div",{className:n.toolbar}),Object(C.jsx)(m.a,{className:n.title,variant:"h3",children:"Your Shopping Cart"}),e.line_items.length?Object(C.jsx)(c,{}):Object(C.jsx)(a,{})]}):"Loading..."},z=(n(108),function(){return Object(C.jsx)("div",{className:"clothing",children:"This will be my clothing page where you can see all the clothing stuff."})}),G=(n(37),n(40),n(109),n(55)),K=function(){var t=Object(a.useState)({name:"",email:"",text:"",disabled:!1,emailSent:!1}),e=Object(l.a)(t,2);e[0],e[1];return Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{children:"This is where you can send me an email."}),Object(C.jsxs)("form",{onSubmit:function(t){t.preventDefault(),G.a.sendForm("service_7ayv5rs","template_moyb1q7",t.target,"user_2nkMBXhy5rWvJxNyjxVwU").then((function(t){console.log(t.text)})).catch((function(t){return console.log(t)})),t.target.reset()},className:"contact-form",children:[Object(C.jsx)("label",{children:"Name"}),Object(C.jsx)("input",{type:"text",name:"name"}),Object(C.jsx)("label",{children:"Email"}),Object(C.jsx)("input",{type:"text",name:"email"}),Object(C.jsx)("label",{children:"Comment"}),Object(C.jsx)("input",{type:"text",name:"text"}),Object(C.jsx)("label",{children:"Subject"}),Object(C.jsx)("input",{type:"text",name:"subject"}),Object(C.jsx)("input",{type:"submit",value:"Send Message"})]})]})},U=n(8),J=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)({}),r=Object(l.a)(i,2),j=r[0],b=r[1],u=function(){var t=Object(o.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.products.list();case 2:e=t.sent,n=e.data,c(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(o.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=b,t.next=3,d.cart.retrieve();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(o.a)(s.a.mark((function t(e,n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.cart.add(e,n);case 2:a=t.sent,b(a.cart);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){u(),m()}),[]),Object(C.jsx)("div",{children:Object(C.jsxs)(w.a,{children:[Object(C.jsx)(_,{totalItems:j.total_items}),Object(C.jsx)(U.a,{exact:!0,path:"/cart",children:Object(C.jsx)(M,{cart:j})}),Object(C.jsx)(U.a,{exact:!0,path:"/products",children:Object(C.jsx)(D,{products:n,onAddToCart:p})}),Object(C.jsx)(U.a,{exact:!0,path:"/clothing",component:z}),Object(C.jsx)(U.a,{exact:!0,path:"/contact",component:K})]})})};i.a.render(Object(C.jsx)(J,{}),document.getElementById("root"))}},[[110,1,2]]]);
//# sourceMappingURL=main.158cff8b.chunk.js.map