(this.webpackJsonpcangokceaslan=this.webpackJsonpcangokceaslan||[]).push([[9,21],{100:function(e,i,t){"use strict";var l=t(2);i.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loaded:!1,size:125,thick:25};return Object(l.jsx)("div",{className:"justify-content-center align-items-center d-flex",children:Object(l.jsx)("div",{className:"loader-container",children:Object(l.jsx)("div",{className:"spinner-border text-white loader",style:{width:(null===e||void 0===e?void 0:e.size)||125,height:(null===e||void 0===e?void 0:e.size)||125,fontSize:(null===e||void 0===e?void 0:e.thick)||25},role:"status",children:Object(l.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})}},103:function(e,i,t){"use strict";t.r(i);var l=t(25),o=t(1),n=(t(104),t(100)),a=t(24),d=t(17),c=t.n(d),s=t(2);i.default=Object(a.b)((function(e){return{window:e.window.sizes,cms:e.cms}}),{})((function(e){var i,t,a,d,r,u,v,m,b,j,p,h,g,O,x,y,f,w,N,k,C,_=Object(o.useState)(null===e||void 0===e?void 0:e.courseNumber),D=Object(l.a)(_,2),S=D[0],z=D[1],W=function i(){var t,l,o,n=c.a.random(0,(null===e||void 0===e||null===(t=e.cms)||void 0===t?void 0:t.courses.length)-1);return null!==e&&void 0!==e&&null!==(l=e.cms)&&void 0!==l&&null!==(o=l.courses[n])&&void 0!==o&&o.free?i():n};Object(o.useEffect)((function(){var i,t;null!==e&&void 0!==e&&e.courseData||(null===e||void 0===e||null===(i=e.cms)||void 0===i||null===(t=i.courses)||void 0===t?void 0:t.length)>0&&z(void 0!==S?null===e||void 0===e?void 0:e.courseNumber:W())}),[null===e||void 0===e?void 0:e.courseNumber,null===e||void 0===e||null===(i=e.cms)||void 0===i||null===(t=i.courses)||void 0===t?void 0:t.length]);var E;E=(null===e||void 0===e?void 0:e.courseData)||(null===e||void 0===e||null===(a=e.cms)||void 0===a?void 0:a.courses[S||0]);var T,I=Object(o.useState)(!1),F=Object(l.a)(I,2),M=F[0],A=F[1],K=Object(o.useState)(""),L=Object(l.a)(K,2),G=L[0],H=L[1],B=Object(o.useState)(""),P=Object(l.a)(B,2),J=P[0],U=P[1],R=function(){var e,i,t=0;t=window.innerWidth<576?.529*window.screen.width:window.innerWidth>=576&&window.innerWidth<768?269:window.innerWidth>=768&&window.innerWidth<992?375:window.innerWidth>=992&&window.innerWidth<1200?230:(window.innerWidth,270),e="".concat(1.75*t,"px"),i="".concat(t,"px"),H(e),U(i),A(!0)};if(Object(o.useEffect)((function(){R()}),[]),Object(o.useLayoutEffect)((function(){R()}),[null===(d=e.window)||void 0===d?void 0:d.width,null===(r=e.window)||void 0===r?void 0:r.height]),!M)return Object(s.jsxs)("div",{className:"middle-content",style:{background:(null===(T=E)||void 0===T?void 0:T.primaryColor)||"#215733",padding:"10px 0px 10px 0px",minHeight:"350px",display:"flex",alignItems:"center",justifyContent:"center"},children:[" ",Object(s.jsx)(n.a,{loaded:!1})]});return 0===(null===e||void 0===e||null===(u=e.cms)||void 0===u||null===(v=u.courses)||void 0===v?void 0:v.length)?null:Object(s.jsx)("div",{className:"one-course",style:{background:(null===(m=E)||void 0===m?void 0:m.primaryColor)||"#215733"},children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"course-container",children:[Object(s.jsx)("div",{className:"course-video",children:null!==(b=E)&&void 0!==b&&b.youtubeEmbedUrl?Object(s.jsx)("div",{className:"video",children:Object(s.jsx)("div",{style:{maxHeight:"calc(".concat(J,")")},children:Object(s.jsx)("iframe",{width:G,height:J,src:"".concat((null===(j=E)||void 0===j?void 0:j.youtubeEmbedUrl)||"https://www.youtube.com/embed/h-Xx14d39vk","?fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&mute=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowFullScreen;",allowFullScreen:!0})})}):Object(s.jsx)("div",{className:"image",children:Object(s.jsx)("img",{src:(null===(p=E)||void 0===p||null===(h=p.thumbnail)||void 0===h||null===(g=h.data)||void 0===g||null===(O=g.attributes)||void 0===O?void 0:O.url.replace(".s3.eu-central-1.amazonaws.com","").replace("https://s3.eu-central-1.amazonaws.com/","https://"))||"https://via.placeholder.com/300x300",alt:"New Course",style:{width:G,height:J}})})}),Object(s.jsx)("div",{className:"course-description",children:Object(s.jsxs)("div",{className:"course",children:[Object(s.jsxs)("div",{className:"innerDetail",children:[Object(s.jsx)("div",{className:"tag",style:{border:"1px solid ".concat(null===(x=E)||void 0===x?void 0:x.secondaryColor)},children:null===(y=E)||void 0===y?void 0:y.tag}),Object(s.jsx)("div",{className:"title",style:{color:null===(f=E)||void 0===f?void 0:f.secondaryColor},children:null===(w=E)||void 0===w?void 0:w.title}),Object(s.jsx)("div",{className:"description",style:{color:null===(N=E)||void 0===N?void 0:N.secondaryColor},children:null===(k=E)||void 0===k?void 0:k.description}),Object(s.jsx)("div",{className:"link",children:Object(s.jsx)("p",{className:"paragraph",children:Object(s.jsx)("a",{href:function(){var e,i,t,l,o,n,a,d=null!==(e=E)&&void 0!==e&&e.referralCode?"?referralCode="+(null===(i=E)||void 0===i?void 0:i.referralCode):"?",c="";"?"===d?c=null!==(l=E)&&void 0!==l&&l.couponCode?"couponCode="+(null===(o=E)||void 0===o?void 0:o.couponCode):"":c=null!==(n=E)&&void 0!==n&&n.couponCode?"&couponCode="+(null===(a=E)||void 0===a?void 0:a.couponCode):"";return"".concat(null===(t=E)||void 0===t?void 0:t.url).concat(d).concat(c)}(),target:"_blank",className:"btn btn-course",style:{borderColor:null===(C=E)||void 0===C?void 0:C.secondaryColor},dangerouslySetInnerHTML:{__html:function(){var e,i,t;return null!==(e=E)&&void 0!==e&&e.free?"\xdccretsiz Olarak Kursa Kay\u0131t Ol":'<span style="text-decoration:line-through"}}>'.concat(null===(i=E)||void 0===i?void 0:i.price,"</span> yerine ").concat(null===(t=E)||void 0===t?void 0:t.discountedPrice,"'ye Kursa Kaydol")}()}})})})]}),Object(s.jsx)("div",{})]})})]})})})}))},104:function(e,i,t){},106:function(e,i,t){"use strict";t.d(i,"a",(function(){return o}));var l=t(6);function o(e,i){if(null==e)return{};var t,o,n=Object(l.a)(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}},107:function(e,i,t){"use strict";var l=t(25),o=t(1),n=(t(108),t(100)),a=t(24),d=t(17),c=t.n(d),s=t(125),r=t(2);i.a=Object(a.b)((function(e){return{window:e.window.sizes,scrolls:e.window.scrolls,cms:e.cms}}),{})((function(e){var i,t,a,d,u,v,m,b,j,p,h,g,O,x,y,f,w,N,k,C,_,D,S=Object(o.useState)(!1),z=Object(l.a)(S,2),W=z[0],E=z[1],T=Object(o.useState)(null===e||void 0===e?void 0:e.courseNumber),I=Object(l.a)(T,2),F=I[0],M=I[1],A=function i(){var t,l,o,n=c.a.random(0,(null===e||void 0===e||null===(t=e.cms)||void 0===t?void 0:t.courses.length)-1);return null!==e&&void 0!==e&&null!==(l=e.cms)&&void 0!==l&&null!==(o=l.courses[n])&&void 0!==o&&o.free?i():n};Object(o.useEffect)((function(){var i,t;null!==e&&void 0!==e&&e.courseData||(null===e||void 0===e||null===(i=e.cms)||void 0===i||null===(t=i.courses)||void 0===t?void 0:t.length)>0&&M(void 0!==F?null===e||void 0===e?void 0:e.courseNumber:A())}),[null===e||void 0===e?void 0:e.courseNumber,null===e||void 0===e||null===(i=e.cms)||void 0===i||null===(t=i.courses)||void 0===t?void 0:t.length]);var K;K=(null===e||void 0===e?void 0:e.courseData)||(null===e||void 0===e||null===(a=e.cms)||void 0===a?void 0:a.courses[F||0]);var L,G=Object(o.useState)(!1),H=Object(l.a)(G,2),B=H[0],P=H[1],J=Object(o.useState)(""),U=Object(l.a)(J,2),R=U[0],Y=U[1],X=Object(o.useState)(""),Q=Object(l.a)(X,2),q=Q[0],V=Q[1],Z=function(){var e,i,t=0;t=window.innerWidth<576?.529*window.screen.width:window.innerWidth>=576&&window.innerWidth<768?269:window.innerWidth>=768&&window.innerWidth<992?375:window.innerWidth>=992&&window.innerWidth<1200?230:(window.innerWidth,270),window.innerWidth<992||(t*=.85),e="".concat(1.75*t,"px"),i="".concat(t,"px"),Y(e),V(i),P(!0)};if(Object(o.useEffect)((function(){Z()}),[]),Object(o.useLayoutEffect)((function(){Z()}),[null===(d=e.window)||void 0===d?void 0:d.width,null===(u=e.window)||void 0===u?void 0:u.height]),!B)return Object(r.jsxs)("div",{className:"middle-content",style:{background:(null===(L=K)||void 0===L?void 0:L.primaryColor)||"#215733",padding:"10px 0px 10px 0px",minHeight:"350px",display:"flex",alignItems:"center",justifyContent:"center"},children:[" ",Object(r.jsx)(n.a,{loaded:!1})]});return W||0===(null===e||void 0===e||null===(v=e.cms)||void 0===v||null===(m=v.courses)||void 0===m?void 0:m.length)?null:Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"floating-course",style:{background:(null===(b=K)||void 0===b?void 0:b.primaryColor)||"#215733"},children:[Object(r.jsx)("div",{onClick:function(){E(!0)},style:{position:"absolute",top:0,right:0,height:65,width:65,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:Object(r.jsx)(s.a,{size:40,color:null===(j=K)||void 0===j?void 0:j.secondaryColor})}),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"course-container",children:[Object(r.jsx)("div",{className:"course-video",children:null!==(p=K)&&void 0!==p&&p.youtubeEmbedUrl?Object(r.jsx)("div",{className:"video",children:Object(r.jsx)("div",{style:{maxHeight:"calc(".concat(q,")")},children:Object(r.jsx)("iframe",{width:R,height:q,src:"".concat((null===(h=K)||void 0===h?void 0:h.youtubeEmbedUrl)||"https://www.youtube.com/embed/h-Xx14d39vk","?fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&mute=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowFullScreen;",allowFullScreen:!0})})}):Object(r.jsx)("div",{className:"image",children:Object(r.jsx)("img",{src:(null===(g=K)||void 0===g||null===(O=g.thumbnail)||void 0===O||null===(x=O.data)||void 0===x||null===(y=x.attributes)||void 0===y?void 0:y.url.replace(".s3.eu-central-1.amazonaws.com","").replace("https://s3.eu-central-1.amazonaws.com/","https://"))||"https://via.placeholder.com/300x300",alt:"New Course",style:{width:R,height:q}})})}),Object(r.jsx)("div",{className:"course-description",children:Object(r.jsxs)("div",{className:"course",children:[Object(r.jsxs)("div",{className:"innerDetail",children:[Object(r.jsx)("div",{className:"tag",style:{border:"1px solid ".concat(null===(f=K)||void 0===f?void 0:f.secondaryColor)},children:null===(w=K)||void 0===w?void 0:w.tag}),Object(r.jsx)("div",{className:"title",style:{color:null===(N=K)||void 0===N?void 0:N.secondaryColor},children:null===(k=K)||void 0===k?void 0:k.title}),Object(r.jsx)("div",{className:"description",style:{color:null===(C=K)||void 0===C?void 0:C.secondaryColor},children:null===(_=K)||void 0===_?void 0:_.description}),Object(r.jsx)("div",{className:"link",children:Object(r.jsx)("p",{className:"paragraph",children:Object(r.jsx)("a",{href:function(){var e,i,t,l,o,n,a,d=null!==(e=K)&&void 0!==e&&e.referralCode?"?referralCode="+(null===(i=K)||void 0===i?void 0:i.referralCode):"?",c="";"?"===d?c=null!==(l=K)&&void 0!==l&&l.couponCode?"couponCode="+(null===(o=K)||void 0===o?void 0:o.couponCode):"":c=null!==(n=K)&&void 0!==n&&n.couponCode?"&couponCode="+(null===(a=K)||void 0===a?void 0:a.couponCode):"";return"".concat(null===(t=K)||void 0===t?void 0:t.url).concat(d).concat(c)}(),target:"_blank",className:"btn btn-course",style:{borderColor:null===(D=K)||void 0===D?void 0:D.secondaryColor},dangerouslySetInnerHTML:{__html:function(){var e,i,t;return null!==(e=K)&&void 0!==e&&e.free?"\xdccretsiz Olarak Kursa Kay\u0131t Ol":'<span style="text-decoration:line-through"}}>'.concat(null===(i=K)||void 0===i?void 0:i.price,"</span> yerine ").concat(null===(t=K)||void 0===t?void 0:t.discountedPrice,"'ye Kursa Kaydol")}()}})})})]}),Object(r.jsx)("div",{})]})})]})})]})})}))},108:function(e,i,t){},130:function(e,i,t){"use strict";var l=t(3),o=t(25),n=t(1),a=t.n(n),d=t(131),c=t.n(d),s=t(34),r=t(162),u=t(2);i.a=function(e){var i=a.a.useState(null),t=Object(o.a)(i,2),n=t[0],d=t[1];return Object(u.jsx)("div",{className:c.a.social,children:[{title:"Udemy",link:"https://www.udemy.com/user/cangokceaslan",icon:s.m,styles:{background:"#A435EF"}},{title:"Instagram",link:"https://www.instagram.com/cangokceaslan",icon:s.d,styles:{background:"linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"}},{title:"Tiktok",link:"https://www.tiktok.com/@cangokceaslan",icon:s.j,styles:{background:"black"}},{title:"Youtube",link:"https://www.youtube.com/cangokceaslan?sub_confirmation=1",icon:s.n,styles:{background:"red"}},{title:"GitHub",link:"https://www.github.com/cangokceaslan",icon:s.c,styles:{background:"#333"}}].map((function(e,i){return Object(u.jsx)(r.a,{role:"a",href:null===e||void 0===e?void 0:e.link,className:c.a.button,onMouseOver:function(e){d(i)},onMouseLeave:function(e){d(null)},style:Object(l.a)({},n===i&&Object(l.a)({},e.styles)),target:"__blank",children:Object(u.jsx)("div",{className:c.a.icon,children:Object(u.jsx)(e.icon,{color:n===i?"white":"gray",size:30})})})}))})}},131:function(e,i,t){e.exports={social:"MinimalSocials_social__1BvdM",button:"MinimalSocials_button__1hzj0",icon:"MinimalSocials_icon__2S7SQ",title:"MinimalSocials_title__imd8S"}},162:function(e,i,t){"use strict";var l=t(3),o=t(25),n=t(106),a=t(18),d=t.n(a),c=t(1),s=t(2),r=["as","disabled"];function u(e){var i=e.tagName,t=e.disabled,l=e.href,o=e.target,n=e.rel,a=e.role,d=e.onClick,c=e.tabIndex,s=void 0===c?0:c,r=e.type;i||(i=null!=l||null!=o||null!=n?"a":"button");var u={tagName:i};if("button"===i)return[{type:r||"button",disabled:t},u];var v=function(e){(t||"a"===i&&function(e){return!e||"#"===e.trim()}(l))&&e.preventDefault(),t?e.stopPropagation():null==d||d(e)};return"a"===i&&(l||(l="#"),t&&(l=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:t?void 0:s,href:l,target:"a"===i?o:void 0,"aria-disabled":t||void 0,rel:"a"===i?n:void 0,onClick:v,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),v(e))}},u]}var v=c.forwardRef((function(e,i){var t=e.as,l=e.disabled,n=function(e,i){if(null==e)return{};var t,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],i.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r),a=u(Object.assign({tagName:t,disabled:l},n)),d=Object(o.a)(a,2),c=d[0],v=d[1].tagName;return Object(s.jsx)(v,Object.assign({},n,c,{ref:i}))}));v.displayName="Button";var m=["xxl","xl","lg","md","sm","xs"],b=c.createContext({prefixes:{},breakpoints:m,minBreakpoint:"xs"});b.Consumer,b.Provider;function j(e,i){var t=Object(c.useContext)(b).prefixes;return e||t[i]||i}var p=["as","bsPrefix","variant","size","active","disabled","className"],h=c.forwardRef((function(e,i){var t=e.as,a=e.bsPrefix,c=e.variant,r=void 0===c?"primary":c,v=e.size,m=e.active,b=void 0!==m&&m,h=e.disabled,g=void 0!==h&&h,O=e.className,x=Object(n.a)(e,p),y=j(a,"btn"),f=u(Object(l.a)({tagName:t,disabled:g},x)),w=Object(o.a)(f,2),N=w[0],k=w[1].tagName;return Object(s.jsx)(k,Object(l.a)(Object(l.a)(Object(l.a)({},N),x),{},{ref:i,disabled:g,className:d()(O,y,b&&"active",r&&"".concat(y,"-").concat(r),v&&"".concat(y,"-").concat(v),x.href&&g&&"disabled")}))}));h.displayName="Button";i.a=h},180:function(e,i,t){},510:function(e,i,t){"use strict";t.r(i);var l=t(25),o=t(1),n=t(30),a=t.n(n),d=t(5),c=t(14),s=t(24),r=t(33),u=t(26),v=(t(180),t(112)),m=t(99),b=t(103),j=t(130),p=t(107),h=t(2);i.default=Object(s.b)((function(e){return{cms:e.cms}}),{getCategoryDetails:u.f,getCategoryArticles:u.e})(Object(d.i)((function(e){var i,t,n,s,u,g,O,x,y,f,w,N,k,C,_,D,S,z,W,E,T,I,F,M,A,K,L,G,H,B,P,J,U,R,Y,X,Q,q,V,Z,$,ee,ie,te,le,oe,ne,ae,de,ce,se,re,ue,ve,me,be,je,pe,he,ge,Oe,xe,ye,fe,we,Ne,ke,Ce,_e,De,Se,ze,We,Ee,Te,Ie,Fe,Me,Ae,Ke,Le,Ge,He,Be,Pe,Je,Ue,Re,Ye,Xe,Qe,qe,Ve,Ze,$e,ei,ii,ti,li,oi,ni,ai,di,ci,si,ri,ui,vi,mi,bi,ji,pi,hi,gi,Oi,xi=Object(d.g)(),yi=Object(o.useState)(!1),fi=Object(l.a)(yi,2),wi=fi[0],Ni=fi[1];Object(o.useEffect)((function(){var i,t;e.getCategoryDetails({path:null===e||void 0===e||null===(i=e.match)||void 0===i||null===(t=i.params)||void 0===t?void 0:t.path,populate:"*"}).then((function(i){var t,l;e.getCategoryArticles({path:null===e||void 0===e||null===(t=e.match)||void 0===t||null===(l=t.params)||void 0===l?void 0:l.path,populate:"*",sort:"createdAt:desc"}).then((function(e){Ni(!0)})).catch((function(e){Ni(!0)}))})).catch((function(e){Ni(!0)}))}),[]);return!1===wi?Object(h.jsx)(r.a,{loaded:!1}):void 0===(null===e||void 0===e||null===(i=e.cms)||void 0===i||null===(t=i.categoryDetails)||void 0===t?void 0:t[null===e||void 0===e||null===(n=e.match)||void 0===n||null===(s=n.params)||void 0===s?void 0:s.path])&&!0===wi?(xi.push("/yazilarim"),Object(h.jsx)(r.a,{loaded:!1})):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p.a,{courseData:null===e||void 0===e||null===(u=e.cms)||void 0===u||null===(g=u.categoryDetails)||void 0===g||null===(O=g[null===e||void 0===e||null===(w=e.match)||void 0===w||null===(N=w.params)||void 0===N?void 0:N.path])||void 0===O||null===(x=O.attributes)||void 0===x||null===(y=x.education)||void 0===y||null===(f=y.data)||void 0===f?void 0:f.attributes}),Object(h.jsxs)("section",{className:"categoryArticle",id:"categoryArticle",children:[Object(h.jsx)(m.a,{docData:{title:null===e||void 0===e||null===(k=e.cms)||void 0===k||null===(C=k.categoryDetails)||void 0===C||null===(_=C[null===e||void 0===e||null===(S=e.match)||void 0===S||null===(z=S.params)||void 0===z?void 0:z.path])||void 0===_||null===(D=_.attributes)||void 0===D?void 0:D.title,description:null===e||void 0===e||null===(W=e.cms)||void 0===W||null===(E=W.categoryDetails)||void 0===E||null===(T=E[null===e||void 0===e||null===(F=e.match)||void 0===F||null===(M=F.params)||void 0===M?void 0:M.path])||void 0===T||null===(I=T.attributes)||void 0===I?void 0:I.description,image:null===e||void 0===e||null===(A=e.cms)||void 0===A||null===(K=A.categoryDetails)||void 0===K||null===(L=K[null===e||void 0===e||null===(J=e.match)||void 0===J||null===(U=J.params)||void 0===U?void 0:U.path])||void 0===L||null===(G=L.attributes)||void 0===G||null===(H=G.coverImage)||void 0===H||null===(B=H.data)||void 0===B||null===(P=B.attributes)||void 0===P?void 0:P.url,siteName:"https://www.cangokceaslan.com/kategori/".concat(null===e||void 0===e||null===(R=e.match)||void 0===R||null===(Y=R.params)||void 0===Y?void 0:Y.path),author:"Can G\xf6k\xe7easlan",keywords:null===e||void 0===e||null===(X=e.cms)||void 0===X||null===(Q=X.categoryDetails)||void 0===Q||null===(q=Q[null===e||void 0===e||null===(Z=e.match)||void 0===Z||null===($=Z.params)||void 0===$?void 0:$.path])||void 0===q||null===(V=q.attributes)||void 0===V?void 0:V.keywords,type:"article",publishedTime:null===e||void 0===e||null===(ee=e.cms)||void 0===ee||null===(ie=ee.categoryDetails)||void 0===ie||null===(te=ie[null===e||void 0===e||null===(oe=e.match)||void 0===oe||null===(ne=oe.params)||void 0===ne?void 0:ne.path])||void 0===te||null===(le=te.attributes)||void 0===le?void 0:le.publishedAt,modifiedTime:null===e||void 0===e||null===(ae=e.cms)||void 0===ae||null===(de=ae.categoryDetails)||void 0===de||null===(ce=de[null===e||void 0===e||null===(re=e.match)||void 0===re||null===(ue=re.params)||void 0===ue?void 0:ue.path])||void 0===ce||null===(se=ce.attributes)||void 0===se?void 0:se.updatedAt,section:null===e||void 0===e||null===(ve=e.cms)||void 0===ve||null===(me=ve.categoryDetails)||void 0===me||null===(be=me[null===e||void 0===e||null===(xe=e.match)||void 0===xe||null===(ye=xe.params)||void 0===ye?void 0:ye.path])||void 0===be||null===(je=be.attributes)||void 0===je||null===(pe=je.categories)||void 0===pe||null===(he=pe.data)||void 0===he||null===(ge=he[0])||void 0===ge||null===(Oe=ge.attributes)||void 0===Oe?void 0:Oe.path,tag:null===e||void 0===e||null===(fe=e.cms)||void 0===fe||null===(we=fe.categoryDetails)||void 0===we||null===(Ne=we[null===e||void 0===e||null===(ze=e.match)||void 0===ze||null===(We=ze.params)||void 0===We?void 0:We.path])||void 0===Ne||null===(ke=Ne.attributes)||void 0===ke||null===(Ce=ke.categories)||void 0===Ce||null===(_e=Ce.data)||void 0===_e||null===(De=_e[0])||void 0===De||null===(Se=De.attributes)||void 0===Se?void 0:Se.slug}}),wi&&Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("article",{className:"category-detail-article",children:[Object(h.jsx)("figure",{className:"category-image",children:Object(h.jsx)("img",{src:null===e||void 0===e||null===(Ee=e.cms)||void 0===Ee||null===(Te=Ee.categoryDetails)||void 0===Te||null===(Ie=Te[null===e||void 0===e||null===(Ge=e.match)||void 0===Ge||null===(He=Ge.params)||void 0===He?void 0:He.path])||void 0===Ie||null===(Fe=Ie.attributes)||void 0===Fe||null===(Me=Fe.coverImage)||void 0===Me||null===(Ae=Me.data)||void 0===Ae||null===(Ke=Ae.attributes)||void 0===Ke||null===(Le=Ke.url)||void 0===Le?void 0:Le.replace(".s3.eu-central-1.amazonaws.com","").replace("https://s3.eu-central-1.amazonaws.com/","https://"),width:"550px",height:"auto",alt:null===e||void 0===e||null===(Be=e.cms)||void 0===Be||null===(Pe=Be.categoryDetails)||void 0===Pe||null===(Je=Pe[null===e||void 0===e||null===(Qe=e.match)||void 0===Qe||null===(qe=Qe.params)||void 0===qe?void 0:qe.path])||void 0===Je||null===(Ue=Je.attributes)||void 0===Ue||null===(Re=Ue.coverImage)||void 0===Re||null===(Ye=Re.data)||void 0===Ye||null===(Xe=Ye.attributes)||void 0===Xe?void 0:Xe.alternativeText})}),Object(h.jsxs)("div",{className:"category-details-texts",children:[Object(h.jsx)("h1",{className:"category-title",children:null===e||void 0===e||null===(Ve=e.cms)||void 0===Ve||null===(Ze=Ve.categoryDetails)||void 0===Ze||null===($e=Ze[null===e||void 0===e||null===(ii=e.match)||void 0===ii||null===(ti=ii.params)||void 0===ti?void 0:ti.path])||void 0===$e||null===(ei=$e.attributes)||void 0===ei?void 0:ei.title}),Object(h.jsx)("p",{className:"category-description",children:Object(h.jsx)(v.a,{children:null===e||void 0===e||null===(li=e.cms)||void 0===li||null===(oi=li.categoryDetails)||void 0===oi||null===(ni=oi[null===e||void 0===e||null===(di=e.match)||void 0===di||null===(ci=di.params)||void 0===ci?void 0:ci.path])||void 0===ni||null===(ai=ni.attributes)||void 0===ai?void 0:ai.description})})]})]}),Object(h.jsx)("div",{style:{marginTop:"40px"}}),Object(h.jsx)("div",{children:Object(h.jsx)(j.a,{})})]})}),Object(h.jsx)("div",{className:"container-fluid top-container",children:Object(h.jsx)("div",{className:"blog-container",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"article-category-details"}),Object(h.jsx)("div",{className:"row justify-content-center d-flex align-items-center",children:((null===e||void 0===e||null===(si=e.cms)||void 0===si?void 0:si.categoryArticles[null===e||void 0===e||null===(ri=e.match)||void 0===ri||null===(ui=ri.params)||void 0===ui?void 0:ui.path])||[]).map((function(e,i){return function(e){var i,t,l,o,n,d,s,r,u,v,m,b,j,p,g,O,x;return Object(h.jsx)("div",{className:"col-lg-4 justify-content-center d-flex align-items-center",children:Object(h.jsx)(c.b,{to:"/yazi/".concat(null===e||void 0===e||null===(i=e.attributes)||void 0===i?void 0:i.path),style:{color:"black"},children:Object(h.jsxs)("div",{className:"card blog-card",style:{margin:"20px 0px"},children:[Object(h.jsx)("img",{src:(null===e||void 0===e||null===(t=e.attributes)||void 0===t||null===(l=t.coverImage)||void 0===l||null===(o=l.data)||void 0===o||null===(n=o[0])||void 0===n||null===(d=n.attributes)||void 0===d||null===(s=d.url)||void 0===s?void 0:s.replace(".s3.eu-central-1.amazonaws.com","").replace("https://s3.eu-central-1.amazonaws.com/","https://"))||"https://mapandan.gov.ph/wp-content/uploads/2018/03/no_image.jpg",className:"card-img-top",width:"100%",height:"auto",style:{objectFit:"cover",width:"100%",height:"220px"},alt:null===e||void 0===e||null===(r=e.attributes)||void 0===r?void 0:r.title}),Object(h.jsxs)("div",{className:"card-body blog-body",children:[Object(h.jsx)("h4",{className:"card-title blog-title",style:{cursor:"pointer"},children:null===e||void 0===e||null===(u=e.attributes)||void 0===u?void 0:u.title}),Object(h.jsx)("p",{className:"card-text blog-content",children:null===e||void 0===e||null===(v=e.attributes)||void 0===v?void 0:v.subtitle}),Object(h.jsxs)("div",{className:"blog-information",children:[Object(h.jsx)("div",{className:"blog-topic",children:null===e||void 0===e||null===(m=e.attributes)||void 0===m||null===(b=m.categories)||void 0===b||null===(j=b.data)||void 0===j||null===(p=j[0])||void 0===p||null===(g=p.attributes)||void 0===g?void 0:g.slug}),Object(h.jsx)("div",{className:"blog-pub-date",children:(null===e||void 0===e||null===(O=e.attributes)||void 0===O?void 0:O.createdAt)&&a()(new Date(null===e||void 0===e||null===(x=e.attributes)||void 0===x?void 0:x.createdAt)).format("LL")})]})]})]})})})}(e)}))})]})})}),Object(h.jsx)("div",{style:{marginBottom:"40px"}}),Object(h.jsx)(b.default,{courseData:null===e||void 0===e||null===(vi=e.cms)||void 0===vi||null===(mi=vi.categoryDetails)||void 0===mi||null===(bi=mi[null===e||void 0===e||null===(gi=e.match)||void 0===gi||null===(Oi=gi.params)||void 0===Oi?void 0:Oi.path])||void 0===bi||null===(ji=bi.attributes)||void 0===ji||null===(pi=ji.education)||void 0===pi||null===(hi=pi.data)||void 0===hi?void 0:hi.attributes})]})]})})))},98:function(e,i,t){"use strict";t.d(i,"a",(function(){return a}));var l=t(1),o=t(102),n=t(2),a={title:"Can G\xf6k\xe7easlan | Kurucu Ortak & FullStack Developer",description:"Merhabalar, ben Can G\xf6k\xe7easlan. \u015eu an bir giri\u015fimci ve online e\u011fitmenim. Benimle ilgili daha fazla bilgiye sahip olabilmek i\xe7in l\xfctfen sayfay\u0131 ziyaret edin.",keywords:"cangokceaslan, Can G\xf6k\xe7easlan, Can Gokceaslan, CanGokceaslan, Node.js, NodeJs, JavaScript, Fullstack Developer, CoFounder, Giri\u015fim",author:"Can G\xf6k\xe7easlan",image:"https://www.cangokceaslan.com/assets/jpg/courses/Iyzico.jpg?cache_delete=1",locale:"tr",siteName:"https://www.cangokceaslan.com",type:"website"};i.b=function(e){var i=e.docData,t=void 0===i?a:i,d=Object(l.useRef)(null),c="/assets/jpg/social.jpg";return Object(l.useEffect)((function(){if(void 0!==(null===t||void 0===t?void 0:t.structralData)){var e=document.createElement("script");e.type="application/ld+json",e.innerHTML=JSON.stringify(null===t||void 0===t?void 0:t.structralData),document.head.appendChild(e)}if(void 0!==(null===t||void 0===t?void 0:t.breadcrumb)){var i=document.createElement("script");i.type="application/ld+json",i.innerHTML=JSON.stringify(null===t||void 0===t?void 0:t.breadcrumb),document.head.appendChild(i)}}),[]),Object(n.jsxs)(o.a,{defer:!1,ref:d,children:[Object(n.jsx)("title",{children:null===t||void 0===t?void 0:t.title}),Object(n.jsx)("meta",{name:"description",content:null===t||void 0===t?void 0:t.description}),Object(n.jsx)("meta",{name:"keywords",content:null===t||void 0===t?void 0:t.keywords}),Object(n.jsx)("meta",{name:"author",content:null===t||void 0===t?void 0:t.author}),Object(n.jsx)("meta",{name:"image",content:(null===t||void 0===t?void 0:t.image)||c}),Object(n.jsx)("meta",{name:"locale",content:null===t||void 0===t?void 0:t.locale}),Object(n.jsx)("meta",{name:"siteName",content:null===t||void 0===t?void 0:t.siteName}),(null===t||void 0===t?void 0:t.video)&&Object(n.jsx)("meta",{name:"media:video",content:null===t||void 0===t?void 0:t.video}),(null===t||void 0===t?void 0:t.video)&&Object(n.jsx)("a",{href:null===t||void 0===t?void 0:t.video,style:{display:"none"},type:"video",target:"_blank",rel:"noopener noreferrer"}),!(null!==t&&void 0!==t&&t.video)&&Object(n.jsx)("meta",{name:"type",content:null!==t&&void 0!==t&&t.type?null===t||void 0===t?void 0:t.type:"website"}),(null===t||void 0===t?void 0:t.video)&&Object(n.jsx)("meta",{name:"type",content:"video"}),Object(n.jsx)("meta",{name:"og:title",content:null===t||void 0===t?void 0:t.title}),Object(n.jsx)("meta",{name:"og:description",content:null===t||void 0===t?void 0:t.description}),Object(n.jsx)("meta",{name:"og:image",content:(null===t||void 0===t?void 0:t.image)||c}),Object(n.jsx)("meta",{name:"og:locale",content:null===t||void 0===t?void 0:t.locale}),Object(n.jsx)("meta",{name:"og:site_name",content:null===t||void 0===t?void 0:t.siteName}),Object(n.jsx)("meta",{name:"og:type",content:"website"}),Object(n.jsx)("meta",{name:"og:author",content:null===t||void 0===t?void 0:t.author}),Object(n.jsx)("meta",{name:"og:type",content:null!==t&&void 0!==t&&t.type?null===t||void 0===t?void 0:t.type:"website"}),(null===t||void 0===t?void 0:t.video)&&Object(n.jsx)("meta",{name:"og:video",content:null===t||void 0===t?void 0:t.video}),(null===t||void 0===t?void 0:t.video)&&Object(n.jsx)("meta",{property:"og:video:secure_url",content:null===t||void 0===t?void 0:t.video}),(null===t||void 0===t?void 0:t.video)&&Object(n.jsx)("meta",{property:"og:video:type",content:"text/html"}),Object(n.jsx)("meta",{name:"twitter:title",content:null===t||void 0===t?void 0:t.title}),Object(n.jsx)("meta",{name:"twitter:description",content:null===t||void 0===t?void 0:t.description}),Object(n.jsx)("meta",{name:"twitter:image",content:(null===t||void 0===t?void 0:t.image)||c}),Object(n.jsx)("meta",{name:"twitter:site",content:null===t||void 0===t?void 0:t.siteName}),Object(n.jsx)("meta",{name:"twitter:creator",content:null===t||void 0===t?void 0:t.author}),null!==t&&void 0!==t&&t.video?Object(n.jsx)("meta",{name:"twitter:card",content:"player"}):Object(n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(null===t||void 0===t?void 0:t.video)&&Object(n.jsx)("meta",{name:"twitter:player",content:null===t||void 0===t?void 0:t.video}),(null===t||void 0===t?void 0:t.video)&&Object(n.jsx)("meta",{name:"twitter:video",content:null===t||void 0===t?void 0:t.video}),Object(n.jsx)("meta",{name:"twitter:type",content:null!==t&&void 0!==t&&t.type?null===t||void 0===t?void 0:t.type:"website"}),(null===t||void 0===t?void 0:t.publishedTime)&&Object(n.jsx)("meta",{name:"article:published_time",content:null===t||void 0===t?void 0:t.publishedTime}),(null===t||void 0===t?void 0:t.modifiedTime)&&Object(n.jsx)("meta",{name:"article:modified_time",content:null===t||void 0===t?void 0:t.modifiedTime}),(null===t||void 0===t?void 0:t.section)&&Object(n.jsx)("meta",{name:"article:section",content:null===t||void 0===t?void 0:t.section}),(null===t||void 0===t?void 0:t.tag)&&Object(n.jsx)("meta",{name:"article:tag",content:null===t||void 0===t?void 0:t.tag})]})}},99:function(e,i,t){"use strict";var l=t(98);i.a=l.b}}]);