(this.webpackJsonpcangokceaslan=this.webpackJsonpcangokceaslan||[]).push([[12,15],{109:function(e,i,o){"use strict";var t=o(1);i.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loaded:!1,size:125,thick:25};return Object(t.jsx)("div",{className:"justify-content-center align-items-center d-flex",children:Object(t.jsx)("div",{className:"loader-container",children:Object(t.jsx)("div",{className:"spinner-border text-white loader",style:{width:(null===e||void 0===e?void 0:e.size)||125,height:(null===e||void 0===e?void 0:e.size)||125,fontSize:(null===e||void 0===e?void 0:e.thick)||25},role:"status",children:Object(t.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})}},110:function(e,i,o){"use strict";o.r(i);var t=o(15),n=o(2),l=o(27),c=(o(111),o(109)),d=o(26),a=o(1);l.a[0];i.default=Object(d.b)((function(e){return{window:e.window.sizes}}),{})((function(e){var i,o,d,r,s,u,v,h,j,m,b,p,w,y=null;if(void 0!==(null===e||void 0===e?void 0:e.courseNumber))y=l.a[null===e||void 0===e?void 0:e.courseNumber];else{var x=l.a.filter((function(e){return null===e||void 0===e||!e.free}));y=x[Math.floor(Math.random()*x.length)]}var f,O=Object(n.useState)(!1),g=Object(t.a)(O,2),N=g[0],C=g[1],k=Object(n.useState)(""),z=Object(t.a)(k,2),S=z[0],E=z[1],K=Object(n.useState)(""),W=Object(t.a)(K,2),L=W[0],U=W[1],_=function(){var e,i,o=0;o=window.innerWidth<576?.529*window.screen.width:window.innerWidth>=576&&window.innerWidth<768?269:window.innerWidth>=768&&window.innerWidth<992?375:window.innerWidth>=992&&window.innerWidth<1200?230:(window.innerWidth,270),e="".concat(1.75*o,"px"),i="".concat(o,"px"),E(e),U(i),C(!0)};if(Object(n.useEffect)((function(){_()}),[]),Object(n.useLayoutEffect)((function(){_()}),[null===(i=e.window)||void 0===i?void 0:i.width,null===(o=e.window)||void 0===o?void 0:o.height]),!N)return Object(a.jsxs)("div",{className:"middle-content",style:{background:(null===(f=y)||void 0===f?void 0:f.primaryColor)||"#215733",padding:"10px 0px 10px 0px",minHeight:"350px",display:"flex",alignItems:"center",justifyContent:"center"},children:[" ",Object(a.jsx)(c.a,{loaded:!1})]});return Object(a.jsx)("div",{className:"one-course",style:{background:(null===(d=y)||void 0===d?void 0:d.primaryColor)||"#215733"},children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"course-container",children:[Object(a.jsx)("div",{className:"course-video",children:null!==(r=y)&&void 0!==r&&r.youtubeEmbedUrl?Object(a.jsx)("div",{className:"video",children:Object(a.jsx)("div",{style:{maxHeight:"calc(".concat(L,")")},children:Object(a.jsx)("iframe",{width:S,height:L,src:"".concat((null===(s=y)||void 0===s?void 0:s.youtubeEmbedUrl)||"https://www.youtube.com/embed/h-Xx14d39vk","?fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&mute=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowFullScreen;",allowFullScreen:!0})})}):Object(a.jsx)("div",{className:"image",children:Object(a.jsx)("img",{src:(null===(u=y)||void 0===u?void 0:u.thumbnail)||"https://via.placeholder.com/300x300",alt:"New Course",style:{width:S,height:L}})})}),Object(a.jsx)("div",{className:"course-description",children:Object(a.jsxs)("div",{className:"course",children:[Object(a.jsxs)("div",{className:"innerDetail",children:[Object(a.jsx)("div",{className:"tag",style:{border:"1px solid ".concat(null===(v=y)||void 0===v?void 0:v.secondaryColor)},children:null===(h=y)||void 0===h?void 0:h.tag}),Object(a.jsx)("div",{className:"title",style:{color:null===(j=y)||void 0===j?void 0:j.secondaryColor},children:null===(m=y)||void 0===m?void 0:m.title}),Object(a.jsx)("div",{className:"description",style:{color:null===(b=y)||void 0===b?void 0:b.secondaryColor},children:null===(p=y)||void 0===p?void 0:p.description}),Object(a.jsx)("div",{className:"link",children:Object(a.jsx)("p",{className:"paragraph",children:Object(a.jsx)("a",{href:function(){var e,i,o,t,n,l,c,d=null!==(e=y)&&void 0!==e&&e.referralCode?"?referralCode="+(null===(i=y)||void 0===i?void 0:i.referralCode):"?",a="";"?"===d?a=null!==(t=y)&&void 0!==t&&t.couponCode?"couponCode="+(null===(n=y)||void 0===n?void 0:n.couponCode):"":a=null!==(l=y)&&void 0!==l&&l.couponCode?"&couponCode="+(null===(c=y)||void 0===c?void 0:c.couponCode):"";return"".concat(null===(o=y)||void 0===o?void 0:o.url).concat(d).concat(a)}(),target:"_blank",className:"btn btn-course",style:{borderColor:null===(w=y)||void 0===w?void 0:w.secondaryColor},dangerouslySetInnerHTML:{__html:function(){var e,i,o;return null!==(e=y)&&void 0!==e&&e.free?"\xdccretsiz Olarak Kursa Kay\u0131t Ol":'<span style="text-decoration:line-through"}}>'.concat(null===(i=y)||void 0===i?void 0:i.price,"</span> yerine ").concat(null===(o=y)||void 0===o?void 0:o.discountedPrice,"'ye Kursa Kaydol")}()}})})})]}),Object(a.jsx)("div",{})]})})]})})})}))},111:function(e,i,o){},492:function(e,i,o){"use strict";o.r(i);var t=o(2),n=o.n(t),l=o(6),c=o(43),d=o(27),a=o(110),r=o(40),s=o(1),u=function(){var e={"@context":"http://schema.org","@type":"ItemList",itemListElement:[]},i=(d.a||[]).map((function(e,i){return{"@type":"ListItem",position:i+1,url:"https://www.cangokceaslan.com/course/"+e.id}}));return e.itemListElement=i,e};i.default=Object(l.h)((function(e){var i={title:"E\u011fitimlerim | Can G\xf6k\xe7easlan",description:"En son online e\u011fitimlerime bu sayfadan ula\u015fabilirsiniz",keywords:"Udemy kurslar\u0131m, Udemy, Node.js, Video Kurs, Video Kurslar\u0131m, Udemy, Udemy JavaScript, Udemy \xdccretsiz Kurslar, Node.js, NodeJs, JavaScript, Fullstack Developer, CoFounder, Giri\u015fim",author:"Can G\xf6k\xe7easlan",locale:"tr",image:"https://www.cangokceaslan.com/assets/jpg/courses/Iyzico.jpg",siteName:"https://www.cangokceaslan.com/courses",snippetData:u()};return Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)(r.a,{docData:i}),Object(s.jsx)("h1",{style:{display:"none"},children:"Kurslar\u0131m"}),Object(s.jsx)(c.default,{hideTitle:!0}),Object(s.jsx)(a.default,{})]})}))}}]);
//# sourceMappingURL=12.2b79a725.chunk.js.map