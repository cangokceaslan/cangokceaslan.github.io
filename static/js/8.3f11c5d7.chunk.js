(this.webpackJsonpcangokceaslan=this.webpackJsonpcangokceaslan||[]).push([[8,20],{100:function(e,t,i){"use strict";i.r(t);var l=i(25),o=i(1),n=(i(101),i(99)),a=i(24),d=i(17),c=i.n(d),s=i(2);t.default=Object(a.b)((function(e){return{window:e.window.sizes,cms:e.cms}}),{})((function(e){var t,i,a,d,r,u,v,m,b,j,p,h,g,x,O,y,f,w,N,k,C,_=Object(o.useState)(null===e||void 0===e?void 0:e.courseNumber),D=Object(l.a)(_,2),S=D[0],T=D[1],z=function t(){var i,l,o,n=c.a.random(0,(null===e||void 0===e||null===(i=e.cms)||void 0===i?void 0:i.courses.length)-1);return null!==e&&void 0!==e&&null!==(l=e.cms)&&void 0!==l&&null!==(o=l.courses[n])&&void 0!==o&&o.free?t():n};Object(o.useEffect)((function(){var t,i;null!==e&&void 0!==e&&e.courseData||(null===e||void 0===e||null===(t=e.cms)||void 0===t||null===(i=t.courses)||void 0===i?void 0:i.length)>0&&T(void 0!==S?null===e||void 0===e?void 0:e.courseNumber:z())}),[null===e||void 0===e?void 0:e.courseNumber,null===e||void 0===e||null===(t=e.cms)||void 0===t||null===(i=t.courses)||void 0===i?void 0:i.length]);var E;E=(null===e||void 0===e?void 0:e.courseData)||(null===e||void 0===e||null===(a=e.cms)||void 0===a?void 0:a.courses[S||0]);var I,P=Object(o.useState)(!1),A=Object(l.a)(P,2),G=A[0],W=A[1],F=Object(o.useState)(""),J=Object(l.a)(F,2),K=J[0],L=J[1],B=Object(o.useState)(""),H=Object(l.a)(B,2),M=H[0],R=H[1],U=function(){var e,t,i=0;i=window.innerWidth<576?.529*window.screen.width:window.innerWidth>=576&&window.innerWidth<768?269:window.innerWidth>=768&&window.innerWidth<992?375:window.innerWidth>=992&&window.innerWidth<1200?230:(window.innerWidth,270),e="".concat(1.75*i,"px"),t="".concat(i,"px"),L(e),R(t),W(!0)};if(Object(o.useEffect)((function(){U()}),[]),Object(o.useLayoutEffect)((function(){U()}),[null===(d=e.window)||void 0===d?void 0:d.width,null===(r=e.window)||void 0===r?void 0:r.height]),!G)return Object(s.jsxs)("div",{className:"middle-content",style:{background:(null===(I=E)||void 0===I?void 0:I.primaryColor)||"#215733",padding:"10px 0px 10px 0px",minHeight:"350px",display:"flex",alignItems:"center",justifyContent:"center"},children:[" ",Object(s.jsx)(n.a,{loaded:!1})]});return 0===(null===e||void 0===e||null===(u=e.cms)||void 0===u||null===(v=u.courses)||void 0===v?void 0:v.length)?null:Object(s.jsx)("div",{className:"one-course",style:{background:(null===(m=E)||void 0===m?void 0:m.primaryColor)||"#215733"},children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"course-container",children:[Object(s.jsx)("div",{className:"course-video",children:null!==(b=E)&&void 0!==b&&b.youtubeEmbedUrl?Object(s.jsx)("div",{className:"video",children:Object(s.jsx)("div",{style:{maxHeight:"calc(".concat(M,")")},children:Object(s.jsx)("iframe",{width:K,height:M,src:"".concat((null===(j=E)||void 0===j?void 0:j.youtubeEmbedUrl)||"https://www.youtube.com/embed/h-Xx14d39vk","?fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&mute=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowFullScreen;",allowFullScreen:!0})})}):Object(s.jsx)("div",{className:"image",children:Object(s.jsx)("img",{src:(null===(p=E)||void 0===p||null===(h=p.thumbnail)||void 0===h||null===(g=h.data)||void 0===g||null===(x=g.attributes)||void 0===x?void 0:x.url.replace("https://s3.eu-central-1.amazonaws.com/","https://"))||"https://via.placeholder.com/300x300",alt:"New Course",style:{width:K,height:M}})})}),Object(s.jsx)("div",{className:"course-description",children:Object(s.jsxs)("div",{className:"course",children:[Object(s.jsxs)("div",{className:"innerDetail",children:[Object(s.jsx)("div",{className:"tag",style:{border:"1px solid ".concat(null===(O=E)||void 0===O?void 0:O.secondaryColor)},children:null===(y=E)||void 0===y?void 0:y.tag}),Object(s.jsx)("div",{className:"title",style:{color:null===(f=E)||void 0===f?void 0:f.secondaryColor},children:null===(w=E)||void 0===w?void 0:w.title}),Object(s.jsx)("div",{className:"description",style:{color:null===(N=E)||void 0===N?void 0:N.secondaryColor},children:null===(k=E)||void 0===k?void 0:k.description}),Object(s.jsx)("div",{className:"link",children:Object(s.jsx)("p",{className:"paragraph",children:Object(s.jsx)("a",{href:function(){var e,t,i,l,o,n,a,d=null!==(e=E)&&void 0!==e&&e.referralCode?"?referralCode="+(null===(t=E)||void 0===t?void 0:t.referralCode):"?",c="";"?"===d?c=null!==(l=E)&&void 0!==l&&l.couponCode?"couponCode="+(null===(o=E)||void 0===o?void 0:o.couponCode):"":c=null!==(n=E)&&void 0!==n&&n.couponCode?"&couponCode="+(null===(a=E)||void 0===a?void 0:a.couponCode):"";return"".concat(null===(i=E)||void 0===i?void 0:i.url).concat(d).concat(c)}(),target:"_blank",className:"btn btn-course",style:{borderColor:null===(C=E)||void 0===C?void 0:C.secondaryColor},dangerouslySetInnerHTML:{__html:function(){var e,t,i;return null!==(e=E)&&void 0!==e&&e.free?"\xdccretsiz Olarak Kursa Kay\u0131t Ol":'<span style="text-decoration:line-through"}}>'.concat(null===(t=E)||void 0===t?void 0:t.price,"</span> yerine ").concat(null===(i=E)||void 0===i?void 0:i.discountedPrice,"'ye Kursa Kaydol")}()}})})})]}),Object(s.jsx)("div",{})]})})]})})})}))},101:function(e,t,i){},105:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var l=i(6);function o(e,t){if(null==e)return{};var i,o,n=Object(l.a)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}},126:function(e,t,i){"use strict";var l=i(3),o=(i(1),i(127)),n=i.n(o),a=i(34),d=i(157),c=i(2);t.a=function(e){return Object(c.jsx)("div",{className:n.a.social,children:[{title:"Instagram",link:"https://www.instagram.com/cangokceaslan",icon:a.d,styles:{background:"linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"}},{title:"Tiktok",link:"https://www.tiktok.com/@cangokceaslan",icon:a.j,styles:{background:"black"}},{title:"Youtube",link:"https://www.youtube.com/cangokceaslan?sub_confirmation=1",icon:a.n,styles:{background:"red"}}].map((function(e,t){return Object(c.jsxs)(d.a,{role:"a",href:null===e||void 0===e?void 0:e.link,className:n.a.button,target:"__blank",style:Object(l.a)({},e.styles),variant:"primary",children:[Object(c.jsx)("div",{className:n.a.icon,children:Object(c.jsx)(e.icon,{size:30})}),Object(c.jsxs)("div",{className:n.a.buttonText,children:[e.title,"'da Takip Et"]})]})}))})}},127:function(e,t,i){e.exports={social:"PostSocials_social__KlRST",button:"PostSocials_button__2Q7aT",icon:"PostSocials_icon__22pMS",buttonText:"PostSocials_buttonText__3Jjht"}},157:function(e,t,i){"use strict";var l=i(3),o=i(25),n=i(105),a=i(19),d=i.n(a),c=i(1),s=i(2),r=["as","disabled"];function u(e){var t=e.tagName,i=e.disabled,l=e.href,o=e.target,n=e.rel,a=e.role,d=e.onClick,c=e.tabIndex,s=void 0===c?0:c,r=e.type;t||(t=null!=l||null!=o||null!=n?"a":"button");var u={tagName:t};if("button"===t)return[{type:r||"button",disabled:i},u];var v=function(e){(i||"a"===t&&function(e){return!e||"#"===e.trim()}(l))&&e.preventDefault(),i?e.stopPropagation():null==d||d(e)};return"a"===t&&(l||(l="#"),i&&(l=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:i?void 0:s,href:l,target:"a"===t?o:void 0,"aria-disabled":i||void 0,rel:"a"===t?n:void 0,onClick:v,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),v(e))}},u]}var v=c.forwardRef((function(e,t){var i=e.as,l=e.disabled,n=function(e,t){if(null==e)return{};var i,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)i=n[l],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,r),a=u(Object.assign({tagName:i,disabled:l},n)),d=Object(o.a)(a,2),c=d[0],v=d[1].tagName;return Object(s.jsx)(v,Object.assign({},n,c,{ref:t}))}));v.displayName="Button";var m=["xxl","xl","lg","md","sm","xs"],b=c.createContext({prefixes:{},breakpoints:m,minBreakpoint:"xs"});b.Consumer,b.Provider;function j(e,t){var i=Object(c.useContext)(b).prefixes;return e||i[t]||t}var p=["as","bsPrefix","variant","size","active","disabled","className"],h=c.forwardRef((function(e,t){var i=e.as,a=e.bsPrefix,c=e.variant,r=void 0===c?"primary":c,v=e.size,m=e.active,b=void 0!==m&&m,h=e.disabled,g=void 0!==h&&h,x=e.className,O=Object(n.a)(e,p),y=j(a,"btn"),f=u(Object(l.a)({tagName:i,disabled:g},O)),w=Object(o.a)(f,2),N=w[0],k=w[1].tagName;return Object(s.jsx)(k,Object(l.a)(Object(l.a)(Object(l.a)({},N),O),{},{ref:t,disabled:g,className:d()(x,y,b&&"active",r&&"".concat(y,"-").concat(r),v&&"".concat(y,"-").concat(v),O.href&&g&&"disabled")}))}));h.displayName="Button";t.a=h},175:function(e,t,i){},506:function(e,t,i){"use strict";i.r(t);var l=i(25),o=i(1),n=i(30),a=i.n(n),d=i(5),c=i(14),s=i(24),r=i(33),u=i(26),v=(i(175),i(108)),m=i(98),b=i(126),j=i(100),p=i(2);t.default=Object(s.b)((function(e){return{cms:e.cms}}),{getCategoryDetails:u.f,getCategoryArticles:u.e})(Object(d.h)((function(e){var t,i,n,s,u,h,g,x,O,y,f,w,N,k,C,_,D,S,T,z,E,I,P,A,G,W,F,J,K,L,B,H,M,R,U,Y,Q,X,q,V,Z,$,ee,te,ie,le,oe,ne,ae,de,ce,se,re,ue,ve,me,be,je,pe,he,ge,xe,Oe,ye,fe,we,Ne,ke,Ce,_e,De,Se,Te,ze,Ee,Ie,Pe,Ae,Ge,We,Fe,Je,Ke,Le,Be,He,Me,Re,Ue,Ye,Qe,Xe,qe,Ve,Ze,$e,et,tt,it,lt,ot,nt,at,dt,ct,st,rt=Object(d.f)(),ut=Object(o.useState)(!1),vt=Object(l.a)(ut,2),mt=vt[0],bt=vt[1];Object(o.useEffect)((function(){var t,i;e.getCategoryDetails({path:null===e||void 0===e||null===(t=e.match)||void 0===t||null===(i=t.params)||void 0===i?void 0:i.path,populate:"*"}).then((function(t){var i,l;e.getCategoryArticles({path:null===e||void 0===e||null===(i=e.match)||void 0===i||null===(l=i.params)||void 0===l?void 0:l.path,populate:"*",sort:"createdAt:desc"}).then((function(e){bt(!0)})).catch((function(e){bt(!0)}))})).catch((function(e){bt(!0)}))}),[]);return!1===mt?Object(p.jsx)(r.a,{loaded:!1}):void 0===(null===e||void 0===e||null===(t=e.cms)||void 0===t||null===(i=t.categoryDetails)||void 0===i?void 0:i[null===e||void 0===e||null===(n=e.match)||void 0===n||null===(s=n.params)||void 0===s?void 0:s.path])&&!0===mt?(rt.push("/yazilarim"),Object(p.jsx)(r.a,{loaded:!1})):Object(p.jsxs)("section",{className:"categoryArticle",id:"categoryArticle",children:[Object(p.jsx)(m.a,{docData:{title:null===e||void 0===e||null===(u=e.cms)||void 0===u||null===(h=u.categoryDetails)||void 0===h||null===(g=h[null===e||void 0===e||null===(O=e.match)||void 0===O||null===(y=O.params)||void 0===y?void 0:y.path])||void 0===g||null===(x=g.attributes)||void 0===x?void 0:x.title,description:null===e||void 0===e||null===(f=e.cms)||void 0===f||null===(w=f.categoryDetails)||void 0===w||null===(N=w[null===e||void 0===e||null===(C=e.match)||void 0===C||null===(_=C.params)||void 0===_?void 0:_.path])||void 0===N||null===(k=N.attributes)||void 0===k?void 0:k.description,image:null===e||void 0===e||null===(D=e.cms)||void 0===D||null===(S=D.categoryDetails)||void 0===S||null===(T=S[null===e||void 0===e||null===(A=e.match)||void 0===A||null===(G=A.params)||void 0===G?void 0:G.path])||void 0===T||null===(z=T.attributes)||void 0===z||null===(E=z.coverImage)||void 0===E||null===(I=E.data)||void 0===I||null===(P=I.attributes)||void 0===P?void 0:P.url,siteName:"https://www.cangokceaslan.com/yazilarim/".concat(null===e||void 0===e||null===(W=e.match)||void 0===W||null===(F=W.params)||void 0===F?void 0:F.path),author:"Can G\xf6k\xe7easlan",keywords:null===e||void 0===e||null===(J=e.cms)||void 0===J||null===(K=J.categoryDetails)||void 0===K||null===(L=K[null===e||void 0===e||null===(H=e.match)||void 0===H||null===(M=H.params)||void 0===M?void 0:M.path])||void 0===L||null===(B=L.attributes)||void 0===B?void 0:B.keywords,type:"article",publishedTime:null===e||void 0===e||null===(R=e.cms)||void 0===R||null===(U=R.categoryDetails)||void 0===U||null===(Y=U[null===e||void 0===e||null===(X=e.match)||void 0===X||null===(q=X.params)||void 0===q?void 0:q.path])||void 0===Y||null===(Q=Y.attributes)||void 0===Q?void 0:Q.publishedAt,modifiedTime:null===e||void 0===e||null===(V=e.cms)||void 0===V||null===(Z=V.categoryDetails)||void 0===Z||null===($=Z[null===e||void 0===e||null===(te=e.match)||void 0===te||null===(ie=te.params)||void 0===ie?void 0:ie.path])||void 0===$||null===(ee=$.attributes)||void 0===ee?void 0:ee.updatedAt,section:null===e||void 0===e||null===(le=e.cms)||void 0===le||null===(oe=le.categoryDetails)||void 0===oe||null===(ne=oe[null===e||void 0===e||null===(ue=e.match)||void 0===ue||null===(ve=ue.params)||void 0===ve?void 0:ve.path])||void 0===ne||null===(ae=ne.attributes)||void 0===ae||null===(de=ae.categories)||void 0===de||null===(ce=de.data)||void 0===ce||null===(se=ce[0])||void 0===se||null===(re=se.attributes)||void 0===re?void 0:re.path,tag:null===e||void 0===e||null===(me=e.cms)||void 0===me||null===(be=me.categoryDetails)||void 0===be||null===(je=be[null===e||void 0===e||null===(ye=e.match)||void 0===ye||null===(fe=ye.params)||void 0===fe?void 0:fe.path])||void 0===je||null===(pe=je.attributes)||void 0===pe||null===(he=pe.categories)||void 0===he||null===(ge=he.data)||void 0===ge||null===(xe=ge[0])||void 0===xe||null===(Oe=xe.attributes)||void 0===Oe?void 0:Oe.slug}}),mt&&Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("article",{className:"category-detail-article",children:[Object(p.jsx)("figure",{className:"category-image",children:Object(p.jsx)("img",{src:null===e||void 0===e||null===(we=e.cms)||void 0===we||null===(Ne=we.categoryDetails)||void 0===Ne||null===(ke=Ne[null===e||void 0===e||null===(Te=e.match)||void 0===Te||null===(ze=Te.params)||void 0===ze?void 0:ze.path])||void 0===ke||null===(Ce=ke.attributes)||void 0===Ce||null===(_e=Ce.coverImage)||void 0===_e||null===(De=_e.data)||void 0===De||null===(Se=De.attributes)||void 0===Se?void 0:Se.url,width:"550px",height:"auto",alt:null===e||void 0===e||null===(Ee=e.cms)||void 0===Ee||null===(Ie=Ee.categoryDetails)||void 0===Ie||null===(Pe=Ie[null===e||void 0===e||null===(Je=e.match)||void 0===Je||null===(Ke=Je.params)||void 0===Ke?void 0:Ke.path])||void 0===Pe||null===(Ae=Pe.attributes)||void 0===Ae||null===(Ge=Ae.coverImage)||void 0===Ge||null===(We=Ge.data)||void 0===We||null===(Fe=We.attributes)||void 0===Fe?void 0:Fe.alternativeText})}),Object(p.jsxs)("div",{className:"category-details-texts",children:[Object(p.jsx)("h1",{className:"category-title",children:null===e||void 0===e||null===(Le=e.cms)||void 0===Le||null===(Be=Le.categoryDetails)||void 0===Be||null===(He=Be[null===e||void 0===e||null===(Re=e.match)||void 0===Re||null===(Ue=Re.params)||void 0===Ue?void 0:Ue.path])||void 0===He||null===(Me=He.attributes)||void 0===Me?void 0:Me.title}),Object(p.jsx)("p",{className:"category-description",children:Object(p.jsx)(v.a,{children:null===e||void 0===e||null===(Ye=e.cms)||void 0===Ye||null===(Qe=Ye.categoryDetails)||void 0===Qe||null===(Xe=Qe[null===e||void 0===e||null===(Ve=e.match)||void 0===Ve||null===(Ze=Ve.params)||void 0===Ze?void 0:Ze.path])||void 0===Xe||null===(qe=Xe.attributes)||void 0===qe?void 0:qe.description})})]})]}),Object(p.jsx)("hr",{style:{marginTop:"40px"}}),Object(p.jsx)("div",{children:Object(p.jsx)(b.a,{})}),Object(p.jsx)("hr",{style:{marginTop:"-40px"}})]})}),Object(p.jsx)("div",{className:"container-fluid top-container",children:Object(p.jsx)("div",{className:"blog-container",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"article-category-details"}),Object(p.jsx)("div",{className:"row justify-content-center d-flex align-items-center",children:((null===e||void 0===e||null===($e=e.cms)||void 0===$e?void 0:$e.categoryArticles[null===e||void 0===e||null===(et=e.match)||void 0===et||null===(tt=et.params)||void 0===tt?void 0:tt.path])||[]).map((function(e,t){return function(e){var t,i,l,o,n,d,s,r,u,v,m,b,j,h,g,x;return Object(p.jsx)("div",{className:"col-lg-4 justify-content-center d-flex align-items-center",children:Object(p.jsx)(c.b,{to:"/yazi/".concat(null===e||void 0===e||null===(t=e.attributes)||void 0===t?void 0:t.path),style:{color:"black"},children:Object(p.jsxs)("div",{className:"card blog-card",style:{margin:"20px 0px"},children:[Object(p.jsx)("img",{src:(null===e||void 0===e||null===(i=e.attributes)||void 0===i||null===(l=i.coverImage)||void 0===l||null===(o=l.data)||void 0===o||null===(n=o[0])||void 0===n||null===(d=n.attributes)||void 0===d?void 0:d.url)||"https://mapandan.gov.ph/wp-content/uploads/2018/03/no_image.jpg",className:"card-img-top",width:"100%",height:"auto",style:{objectFit:"cover",width:"100%",height:"220px"},alt:null===e||void 0===e||null===(s=e.attributes)||void 0===s?void 0:s.title}),Object(p.jsxs)("div",{className:"card-body blog-body",children:[Object(p.jsx)("h4",{className:"card-title blog-title",style:{cursor:"pointer"},children:null===e||void 0===e||null===(r=e.attributes)||void 0===r?void 0:r.title}),Object(p.jsx)("p",{className:"card-text blog-content",children:null===e||void 0===e||null===(u=e.attributes)||void 0===u?void 0:u.subtitle}),Object(p.jsxs)("div",{className:"blog-information",children:[Object(p.jsx)("div",{className:"blog-topic",children:null===e||void 0===e||null===(v=e.attributes)||void 0===v||null===(m=v.categories)||void 0===m||null===(b=m.data)||void 0===b||null===(j=b[0])||void 0===j||null===(h=j.attributes)||void 0===h?void 0:h.slug}),Object(p.jsx)("div",{className:"blog-pub-date",children:(null===e||void 0===e||null===(g=e.attributes)||void 0===g?void 0:g.createdAt)&&a()(new Date(null===e||void 0===e||null===(x=e.attributes)||void 0===x?void 0:x.createdAt)).format("LL")})]})]})]})})})}(e)}))})]})})}),Object(p.jsx)("div",{style:{marginBottom:"40px"}}),Object(p.jsx)(j.default,{courseData:null===e||void 0===e||null===(it=e.cms)||void 0===it||null===(lt=it.categoryDetails)||void 0===lt||null===(ot=lt[null===e||void 0===e||null===(ct=e.match)||void 0===ct||null===(st=ct.params)||void 0===st?void 0:st.path])||void 0===ot||null===(nt=ot.attributes)||void 0===nt||null===(at=nt.education)||void 0===at||null===(dt=at.data)||void 0===dt?void 0:dt.attributes})]})})))},97:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var l=i(1),o=i(103),n=i(2),a={title:"Can G\xf6k\xe7easlan | Kurucu Ortak & FullStack Developer",description:"Merhabalar, ben Can G\xf6k\xe7easlan. \u015eu an bir giri\u015fimci ve online e\u011fitmenim. Benimle ilgili daha fazla bilgiye sahip olabilmek i\xe7in l\xfctfen sayfay\u0131 ziyaret edin.",keywords:"cangokceaslan, Can G\xf6k\xe7easlan, Can Gokceaslan, CanGokceaslan, Node.js, NodeJs, JavaScript, Fullstack Developer, CoFounder, Giri\u015fim",author:"Can G\xf6k\xe7easlan",image:"https://www.cangokceaslan.com/assets/jpg/courses/Iyzico.jpg?cache_delete=1",locale:"tr",siteName:"https://www.cangokceaslan.com",type:"website"};t.b=function(e){var t=e.docData,i=void 0===t?a:t,d=Object(l.useRef)(null),c="/assets/jpg/social.jpg";return Object(l.useEffect)((function(){if(void 0!==(null===i||void 0===i?void 0:i.structralData)){var e=document.createElement("script");e.type="application/ld+json",e.innerHTML=JSON.stringify(null===i||void 0===i?void 0:i.structralData),document.head.appendChild(e)}if(void 0!==(null===i||void 0===i?void 0:i.breadcrumb)){var t=document.createElement("script");t.type="application/ld+json",t.innerHTML=JSON.stringify(null===i||void 0===i?void 0:i.breadcrumb),document.head.appendChild(t)}}),[]),Object(n.jsxs)(o.a,{defer:!1,ref:d,children:[Object(n.jsx)("title",{children:null===i||void 0===i?void 0:i.title}),Object(n.jsx)("meta",{name:"description",content:null===i||void 0===i?void 0:i.description}),Object(n.jsx)("meta",{name:"keywords",content:null===i||void 0===i?void 0:i.keywords}),Object(n.jsx)("meta",{name:"author",content:null===i||void 0===i?void 0:i.author}),Object(n.jsx)("meta",{name:"image",content:(null===i||void 0===i?void 0:i.image)||c}),Object(n.jsx)("meta",{name:"locale",content:null===i||void 0===i?void 0:i.locale}),Object(n.jsx)("meta",{name:"siteName",content:null===i||void 0===i?void 0:i.siteName}),(null===i||void 0===i?void 0:i.video)&&Object(n.jsx)("meta",{name:"media:video",content:null===i||void 0===i?void 0:i.video}),(null===i||void 0===i?void 0:i.video)&&Object(n.jsx)("a",{href:null===i||void 0===i?void 0:i.video,style:{display:"none"},type:"video",target:"_blank",rel:"noopener noreferrer"}),!(null!==i&&void 0!==i&&i.video)&&Object(n.jsx)("meta",{name:"type",content:null!==i&&void 0!==i&&i.type?null===i||void 0===i?void 0:i.type:"website"}),(null===i||void 0===i?void 0:i.video)&&Object(n.jsx)("meta",{name:"type",content:"video"}),Object(n.jsx)("meta",{name:"og:title",content:null===i||void 0===i?void 0:i.title}),Object(n.jsx)("meta",{name:"og:description",content:null===i||void 0===i?void 0:i.description}),Object(n.jsx)("meta",{name:"og:image",content:(null===i||void 0===i?void 0:i.image)||c}),Object(n.jsx)("meta",{name:"og:locale",content:null===i||void 0===i?void 0:i.locale}),Object(n.jsx)("meta",{name:"og:site_name",content:null===i||void 0===i?void 0:i.siteName}),Object(n.jsx)("meta",{name:"og:type",content:"website"}),Object(n.jsx)("meta",{name:"og:author",content:null===i||void 0===i?void 0:i.author}),Object(n.jsx)("meta",{name:"og:type",content:null!==i&&void 0!==i&&i.type?null===i||void 0===i?void 0:i.type:"website"}),(null===i||void 0===i?void 0:i.video)&&Object(n.jsx)("meta",{name:"og:video",content:null===i||void 0===i?void 0:i.video}),(null===i||void 0===i?void 0:i.video)&&Object(n.jsx)("meta",{property:"og:video:secure_url",content:null===i||void 0===i?void 0:i.video}),(null===i||void 0===i?void 0:i.video)&&Object(n.jsx)("meta",{property:"og:video:type",content:"text/html"}),Object(n.jsx)("meta",{name:"twitter:title",content:null===i||void 0===i?void 0:i.title}),Object(n.jsx)("meta",{name:"twitter:description",content:null===i||void 0===i?void 0:i.description}),Object(n.jsx)("meta",{name:"twitter:image",content:(null===i||void 0===i?void 0:i.image)||c}),Object(n.jsx)("meta",{name:"twitter:site",content:null===i||void 0===i?void 0:i.siteName}),Object(n.jsx)("meta",{name:"twitter:creator",content:null===i||void 0===i?void 0:i.author}),null!==i&&void 0!==i&&i.video?Object(n.jsx)("meta",{name:"twitter:card",content:"player"}):Object(n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(null===i||void 0===i?void 0:i.video)&&Object(n.jsx)("meta",{name:"twitter:player",content:null===i||void 0===i?void 0:i.video}),(null===i||void 0===i?void 0:i.video)&&Object(n.jsx)("meta",{name:"twitter:video",content:null===i||void 0===i?void 0:i.video}),Object(n.jsx)("meta",{name:"twitter:type",content:null!==i&&void 0!==i&&i.type?null===i||void 0===i?void 0:i.type:"website"}),(null===i||void 0===i?void 0:i.publishedTime)&&Object(n.jsx)("meta",{name:"article:published_time",content:null===i||void 0===i?void 0:i.publishedTime}),(null===i||void 0===i?void 0:i.modifiedTime)&&Object(n.jsx)("meta",{name:"article:modified_time",content:null===i||void 0===i?void 0:i.modifiedTime}),(null===i||void 0===i?void 0:i.section)&&Object(n.jsx)("meta",{name:"article:section",content:null===i||void 0===i?void 0:i.section}),(null===i||void 0===i?void 0:i.tag)&&Object(n.jsx)("meta",{name:"article:tag",content:null===i||void 0===i?void 0:i.tag})]})}},98:function(e,t,i){"use strict";var l=i(97);t.a=l.b},99:function(e,t,i){"use strict";var l=i(2);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loaded:!1,size:125,thick:25};return Object(l.jsx)("div",{className:"justify-content-center align-items-center d-flex",children:Object(l.jsx)("div",{className:"loader-container",children:Object(l.jsx)("div",{className:"spinner-border text-white loader",style:{width:(null===e||void 0===e?void 0:e.size)||125,height:(null===e||void 0===e?void 0:e.size)||125,fontSize:(null===e||void 0===e?void 0:e.thick)||25},role:"status",children:Object(l.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})}}}]);
//# sourceMappingURL=8.3f11c5d7.chunk.js.map