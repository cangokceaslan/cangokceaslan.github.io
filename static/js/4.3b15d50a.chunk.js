(this.webpackJsonpcangokceaslan=this.webpackJsonpcangokceaslan||[]).push([[4,22],{100:function(e,o,i){"use strict";var t=i(2);o.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loaded:!1,size:125,thick:25};return Object(t.jsx)("div",{className:"justify-content-center align-items-center d-flex",children:Object(t.jsx)("div",{className:"loader-container",children:Object(t.jsx)("div",{className:"spinner-border text-white loader",style:{width:(null===e||void 0===e?void 0:e.size)||125,height:(null===e||void 0===e?void 0:e.size)||125,fontSize:(null===e||void 0===e?void 0:e.thick)||25},role:"status",children:Object(t.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})}},101:function(e,o,i){"use strict";i.r(o);var t=i(25),n=i(1),l=(i(103),i(100)),d=i(24),c=i(17),a=i.n(c),s=i(2);o.default=Object(d.b)((function(e){return{window:e.window.sizes,cms:e.cms}}),{})((function(e){var o,i,d,c,r,u,v,m,j,b,p,h,x,O,w,y,g,f,N,C,k,_=Object(n.useState)(null===e||void 0===e?void 0:e.courseNumber),S=Object(t.a)(_,2),z=S[0],W=S[1],E=function o(){var i,t,n,l=a.a.random(0,(null===e||void 0===e||null===(i=e.cms)||void 0===i?void 0:i.courses.length)-1);return null!==e&&void 0!==e&&null!==(t=e.cms)&&void 0!==t&&null!==(n=t.courses[l])&&void 0!==n&&n.free?o():l};Object(n.useEffect)((function(){var o,i;null!==e&&void 0!==e&&e.courseData||(null===e||void 0===e||null===(o=e.cms)||void 0===o||null===(i=o.courses)||void 0===i?void 0:i.length)>0&&W(void 0!==z?null===e||void 0===e?void 0:e.courseNumber:E())}),[null===e||void 0===e?void 0:e.courseNumber,null===e||void 0===e||null===(o=e.cms)||void 0===o||null===(i=o.courses)||void 0===i?void 0:i.length]);var D;D=(null===e||void 0===e?void 0:e.courseData)||(null===e||void 0===e||null===(d=e.cms)||void 0===d?void 0:d.courses[z||0]);var T,K=Object(n.useState)(!1),F=Object(t.a)(K,2),H=F[0],G=F[1],L=Object(n.useState)(""),I=Object(t.a)(L,2),J=I[0],M=I[1],U=Object(n.useState)(""),B=Object(t.a)(U,2),P=B[0],X=B[1],Y=function(){var e,o,i=0;i=window.innerWidth<576?.529*window.screen.width:window.innerWidth>=576&&window.innerWidth<768?269:window.innerWidth>=768&&window.innerWidth<992?375:window.innerWidth>=992&&window.innerWidth<1200?230:(window.innerWidth,270),e="".concat(1.75*i,"px"),o="".concat(i,"px"),M(e),X(o),G(!0)};if(Object(n.useEffect)((function(){Y()}),[]),Object(n.useLayoutEffect)((function(){Y()}),[null===(c=e.window)||void 0===c?void 0:c.width,null===(r=e.window)||void 0===r?void 0:r.height]),!H)return Object(s.jsxs)("div",{className:"middle-content",style:{background:(null===(T=D)||void 0===T?void 0:T.primaryColor)||"#215733",padding:"10px 0px 10px 0px",minHeight:"350px",display:"flex",alignItems:"center",justifyContent:"center"},children:[" ",Object(s.jsx)(l.a,{loaded:!1})]});return 0===(null===e||void 0===e||null===(u=e.cms)||void 0===u||null===(v=u.courses)||void 0===v?void 0:v.length)?null:Object(s.jsx)("div",{className:"one-course",style:{background:(null===(m=D)||void 0===m?void 0:m.primaryColor)||"#215733"},children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"course-container",children:[Object(s.jsx)("div",{className:"course-video",children:null!==(j=D)&&void 0!==j&&j.youtubeEmbedUrl?Object(s.jsx)("div",{className:"video",children:Object(s.jsx)("div",{style:{maxHeight:"calc(".concat(P,")")},children:Object(s.jsx)("iframe",{width:J,height:P,src:"".concat((null===(b=D)||void 0===b?void 0:b.youtubeEmbedUrl)||"https://www.youtube.com/embed/h-Xx14d39vk","?fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&mute=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowFullScreen;",allowFullScreen:!0})})}):Object(s.jsx)("div",{className:"image",children:Object(s.jsx)("img",{src:(null===(p=D)||void 0===p||null===(h=p.thumbnail)||void 0===h||null===(x=h.data)||void 0===x||null===(O=x.attributes)||void 0===O?void 0:O.url.replace(".s3.eu-central-1.amazonaws.com","").replace("https://s3.eu-central-1.amazonaws.com/","https://"))||"https://via.placeholder.com/300x300",alt:"New Course",style:{width:J,height:P}})})}),Object(s.jsx)("div",{className:"course-description",children:Object(s.jsxs)("div",{className:"course",children:[Object(s.jsxs)("div",{className:"innerDetail",children:[Object(s.jsx)("div",{className:"tag",style:{border:"1px solid ".concat(null===(w=D)||void 0===w?void 0:w.secondaryColor)},children:null===(y=D)||void 0===y?void 0:y.tag}),Object(s.jsx)("div",{className:"title",style:{color:null===(g=D)||void 0===g?void 0:g.secondaryColor},children:null===(f=D)||void 0===f?void 0:f.title}),Object(s.jsx)("div",{className:"description",style:{color:null===(N=D)||void 0===N?void 0:N.secondaryColor},children:null===(C=D)||void 0===C?void 0:C.description}),Object(s.jsx)("div",{className:"link",children:Object(s.jsx)("p",{className:"paragraph",children:Object(s.jsx)("a",{href:function(){var e,o,i,t,n,l,d,c=null!==(e=D)&&void 0!==e&&e.referralCode?"?referralCode="+(null===(o=D)||void 0===o?void 0:o.referralCode):"?",a="";"?"===c?a=null!==(t=D)&&void 0!==t&&t.couponCode?"couponCode="+(null===(n=D)||void 0===n?void 0:n.couponCode):"":a=null!==(l=D)&&void 0!==l&&l.couponCode?"&couponCode="+(null===(d=D)||void 0===d?void 0:d.couponCode):"";return"".concat(null===(i=D)||void 0===i?void 0:i.url).concat(c).concat(a)}(),target:"_blank",className:"btn btn-course",style:{borderColor:null===(k=D)||void 0===k?void 0:k.secondaryColor},dangerouslySetInnerHTML:{__html:function(){var e,o,i;return null!==(e=D)&&void 0!==e&&e.free?"\xdccretsiz Olarak Kursa Kay\u0131t Ol":'<span style="text-decoration:line-through"}}>'.concat(null===(o=D)||void 0===o?void 0:o.price,"</span> yerine ").concat(null===(i=D)||void 0===i?void 0:i.discountedPrice,"'ye Kursa Kaydol")}()}})})})]}),Object(s.jsx)("div",{})]})})]})})})}))},103:function(e,o,i){},112:function(e,o,i){"use strict";var t=i(3),n=i(25),l=i(1),d=(i(124),i(100)),c=i(24),a=i(17),s=i.n(a),r=i(146),u=i(2);o.a=Object(c.b)((function(e){return{window:e.window.sizes,scrolls:e.window.scrolls,cms:e.cms}}),{})((function(e){var o,i,c,a,v,m,j,b,p,h,x,O,w,y,g,f,N,C,k,_,S,z,W,E,D,T=Object(l.useState)(!1),K=Object(n.a)(T,2),F=K[0],H=K[1],G=Object(l.useState)(null===e||void 0===e?void 0:e.courseNumber),L=Object(n.a)(G,2),I=L[0],J=L[1],M=function o(){var i,t,n,l=s.a.random(0,(null===e||void 0===e||null===(i=e.cms)||void 0===i?void 0:i.courses.length)-1);return null!==e&&void 0!==e&&null!==(t=e.cms)&&void 0!==t&&null!==(n=t.courses[l])&&void 0!==n&&n.free?o():l};Object(l.useEffect)((function(){var o,i;null!==e&&void 0!==e&&e.courseData||(null===e||void 0===e||null===(o=e.cms)||void 0===o||null===(i=o.courses)||void 0===i?void 0:i.length)>0&&J(void 0!==I?null===e||void 0===e?void 0:e.courseNumber:M())}),[null===e||void 0===e?void 0:e.courseNumber,null===e||void 0===e||null===(o=e.cms)||void 0===o||null===(i=o.courses)||void 0===i?void 0:i.length]);var U;U=(null===e||void 0===e?void 0:e.courseData)||(null===e||void 0===e||null===(c=e.cms)||void 0===c?void 0:c.courses[I||0]);var B,P=Object(l.useState)(!1),X=Object(n.a)(P,2),Y=X[0],R=X[1],q=Object(l.useState)(""),A=Object(n.a)(q,2),Q=A[0],V=A[1],Z=Object(l.useState)(""),$=Object(n.a)(Z,2),ee=$[0],oe=$[1],ie=function(){var e,o,i=0;i=window.innerWidth<576?.529*window.screen.width:window.innerWidth>=576&&window.innerWidth<768?269:window.innerWidth>=768&&window.innerWidth<992?375:window.innerWidth>=992&&window.innerWidth<1200?230:(window.innerWidth,270),window.innerWidth<992||(i*=.85),e="".concat(1.75*i,"px"),o="".concat(i,"px"),V(e),oe(o),R(!0)};if(Object(l.useEffect)((function(){ie()}),[]),Object(l.useLayoutEffect)((function(){ie()}),[null===(a=e.window)||void 0===a?void 0:a.width,null===(v=e.window)||void 0===v?void 0:v.height]),!Y)return Object(u.jsxs)("div",{className:"middle-content",style:{background:(null===(B=U)||void 0===B?void 0:B.primaryColor)||"#215733",padding:"10px 0px 10px 0px",minHeight:"350px",display:"flex",alignItems:"center",justifyContent:"center"},children:[" ",Object(u.jsx)(d.a,{loaded:!1})]});return F||0===(null===e||void 0===e||null===(m=e.cms)||void 0===m||null===(j=m.courses)||void 0===j?void 0:j.length)?null:Object(u.jsxs)(u.Fragment,{children:[(null===e||void 0===e||null===(b=e.scrolls)||void 0===b?void 0:b.y)>500&&Object(u.jsx)("div",{className:"floating-course",style:{height:300}}),Object(u.jsxs)("div",{className:"floating-course",style:Object(t.a)({background:(null===(p=U)||void 0===p?void 0:p.primaryColor)||"#215733",position:(null===e||void 0===e||null===(h=e.scrolls)||void 0===h?void 0:h.y)<=500?"relative":"fixed",bottom:0},(null===e||void 0===e||null===(x=e.scrolls)||void 0===x?void 0:x.y)>500&&{"-webkit-box-shadow":"-2px -23px 100px -54px rgba(0,0,0,0.75)","-moz-box-shadow":"-2px -23px 100px -54px rgba(0,0,0,0.75)","box-shadow":"-2px -23px 100px -54px rgba(0,0,0,0.75)"}),children:[Object(u.jsx)("div",{onClick:function(){H(!0)},style:{position:"absolute",top:0,right:0,height:65,width:65,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:Object(u.jsx)(r.a,{size:40,color:null===(O=U)||void 0===O?void 0:O.secondaryColor})}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"course-container",children:[Object(u.jsx)("div",{className:"course-video",children:null!==(w=U)&&void 0!==w&&w.youtubeEmbedUrl?Object(u.jsx)("div",{className:"video",children:Object(u.jsx)("div",{style:{maxHeight:"calc(".concat(ee,")")},children:Object(u.jsx)("iframe",{width:Q,height:ee,src:"".concat((null===(y=U)||void 0===y?void 0:y.youtubeEmbedUrl)||"https://www.youtube.com/embed/h-Xx14d39vk","?fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&mute=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowFullScreen;",allowFullScreen:!0})})}):Object(u.jsx)("div",{className:"image",children:Object(u.jsx)("img",{src:(null===(g=U)||void 0===g||null===(f=g.thumbnail)||void 0===f||null===(N=f.data)||void 0===N||null===(C=N.attributes)||void 0===C?void 0:C.url.replace(".s3.eu-central-1.amazonaws.com","").replace("https://s3.eu-central-1.amazonaws.com/","https://"))||"https://via.placeholder.com/300x300",alt:"New Course",style:{width:Q,height:ee}})})}),Object(u.jsx)("div",{className:"course-description",children:Object(u.jsxs)("div",{className:"course",children:[Object(u.jsxs)("div",{className:"innerDetail",children:[Object(u.jsx)("div",{className:"tag",style:{border:"1px solid ".concat(null===(k=U)||void 0===k?void 0:k.secondaryColor)},children:null===(_=U)||void 0===_?void 0:_.tag}),Object(u.jsx)("div",{className:"title",style:{color:null===(S=U)||void 0===S?void 0:S.secondaryColor},children:null===(z=U)||void 0===z?void 0:z.title}),Object(u.jsx)("div",{className:"description",style:{color:null===(W=U)||void 0===W?void 0:W.secondaryColor},children:null===(E=U)||void 0===E?void 0:E.description}),Object(u.jsx)("div",{className:"link",children:Object(u.jsx)("p",{className:"paragraph",children:Object(u.jsx)("a",{href:function(){var e,o,i,t,n,l,d,c=null!==(e=U)&&void 0!==e&&e.referralCode?"?referralCode="+(null===(o=U)||void 0===o?void 0:o.referralCode):"?",a="";"?"===c?a=null!==(t=U)&&void 0!==t&&t.couponCode?"couponCode="+(null===(n=U)||void 0===n?void 0:n.couponCode):"":a=null!==(l=U)&&void 0!==l&&l.couponCode?"&couponCode="+(null===(d=U)||void 0===d?void 0:d.couponCode):"";return"".concat(null===(i=U)||void 0===i?void 0:i.url).concat(c).concat(a)}(),target:"_blank",className:"btn btn-course",style:{borderColor:null===(D=U)||void 0===D?void 0:D.secondaryColor},dangerouslySetInnerHTML:{__html:function(){var e,o,i;return null!==(e=U)&&void 0!==e&&e.free?"\xdccretsiz Olarak Kursa Kay\u0131t Ol":'<span style="text-decoration:line-through"}}>'.concat(null===(o=U)||void 0===o?void 0:o.price,"</span> yerine ").concat(null===(i=U)||void 0===i?void 0:i.discountedPrice,"'ye Kursa Kaydol")}()}})})})]}),Object(u.jsx)("div",{})]})})]})})]})]})}))},124:function(e,o,i){},98:function(e,o,i){"use strict";i.d(o,"a",(function(){return d}));var t=i(1),n=i(104),l=i(2),d={title:"Can G\xf6k\xe7easlan | Kurucu Ortak & FullStack Developer",description:"Merhabalar, ben Can G\xf6k\xe7easlan. \u015eu an bir giri\u015fimci ve online e\u011fitmenim. Benimle ilgili daha fazla bilgiye sahip olabilmek i\xe7in l\xfctfen sayfay\u0131 ziyaret edin.",keywords:"cangokceaslan, Can G\xf6k\xe7easlan, Can Gokceaslan, CanGokceaslan, Node.js, NodeJs, JavaScript, Fullstack Developer, CoFounder, Giri\u015fim",author:"Can G\xf6k\xe7easlan",image:"https://www.cangokceaslan.com/assets/jpg/courses/Iyzico.jpg?cache_delete=1",locale:"tr",siteName:"https://www.cangokceaslan.com",type:"website"};o.b=function(e){var o=e.docData,i=void 0===o?d:o,c=Object(t.useRef)(null),a="/assets/jpg/social.jpg";return Object(t.useEffect)((function(){if(void 0!==(null===i||void 0===i?void 0:i.structralData)){var e=document.createElement("script");e.type="application/ld+json",e.innerHTML=JSON.stringify(null===i||void 0===i?void 0:i.structralData),document.head.appendChild(e)}if(void 0!==(null===i||void 0===i?void 0:i.breadcrumb)){var o=document.createElement("script");o.type="application/ld+json",o.innerHTML=JSON.stringify(null===i||void 0===i?void 0:i.breadcrumb),document.head.appendChild(o)}}),[]),Object(l.jsxs)(n.a,{defer:!1,ref:c,children:[Object(l.jsx)("title",{children:null===i||void 0===i?void 0:i.title}),Object(l.jsx)("meta",{name:"description",content:null===i||void 0===i?void 0:i.description}),Object(l.jsx)("meta",{name:"keywords",content:null===i||void 0===i?void 0:i.keywords}),Object(l.jsx)("meta",{name:"author",content:null===i||void 0===i?void 0:i.author}),Object(l.jsx)("meta",{name:"image",content:(null===i||void 0===i?void 0:i.image)||a}),Object(l.jsx)("meta",{name:"locale",content:null===i||void 0===i?void 0:i.locale}),Object(l.jsx)("meta",{name:"siteName",content:null===i||void 0===i?void 0:i.siteName}),(null===i||void 0===i?void 0:i.video)&&Object(l.jsx)("meta",{name:"media:video",content:null===i||void 0===i?void 0:i.video}),(null===i||void 0===i?void 0:i.video)&&Object(l.jsx)("a",{href:null===i||void 0===i?void 0:i.video,style:{display:"none"},type:"video",target:"_blank",rel:"noopener noreferrer"}),!(null!==i&&void 0!==i&&i.video)&&Object(l.jsx)("meta",{name:"type",content:null!==i&&void 0!==i&&i.type?null===i||void 0===i?void 0:i.type:"website"}),(null===i||void 0===i?void 0:i.video)&&Object(l.jsx)("meta",{name:"type",content:"video"}),Object(l.jsx)("meta",{name:"og:title",content:null===i||void 0===i?void 0:i.title}),Object(l.jsx)("meta",{name:"og:description",content:null===i||void 0===i?void 0:i.description}),Object(l.jsx)("meta",{name:"og:image",content:(null===i||void 0===i?void 0:i.image)||a}),Object(l.jsx)("meta",{name:"og:locale",content:null===i||void 0===i?void 0:i.locale}),Object(l.jsx)("meta",{name:"og:site_name",content:null===i||void 0===i?void 0:i.siteName}),Object(l.jsx)("meta",{name:"og:type",content:"website"}),Object(l.jsx)("meta",{name:"og:author",content:null===i||void 0===i?void 0:i.author}),Object(l.jsx)("meta",{name:"og:type",content:null!==i&&void 0!==i&&i.type?null===i||void 0===i?void 0:i.type:"website"}),(null===i||void 0===i?void 0:i.video)&&Object(l.jsx)("meta",{name:"og:video",content:null===i||void 0===i?void 0:i.video}),(null===i||void 0===i?void 0:i.video)&&Object(l.jsx)("meta",{property:"og:video:secure_url",content:null===i||void 0===i?void 0:i.video}),(null===i||void 0===i?void 0:i.video)&&Object(l.jsx)("meta",{property:"og:video:type",content:"text/html"}),Object(l.jsx)("meta",{name:"twitter:title",content:null===i||void 0===i?void 0:i.title}),Object(l.jsx)("meta",{name:"twitter:description",content:null===i||void 0===i?void 0:i.description}),Object(l.jsx)("meta",{name:"twitter:image",content:(null===i||void 0===i?void 0:i.image)||a}),Object(l.jsx)("meta",{name:"twitter:site",content:null===i||void 0===i?void 0:i.siteName}),Object(l.jsx)("meta",{name:"twitter:creator",content:null===i||void 0===i?void 0:i.author}),null!==i&&void 0!==i&&i.video?Object(l.jsx)("meta",{name:"twitter:card",content:"player"}):Object(l.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(null===i||void 0===i?void 0:i.video)&&Object(l.jsx)("meta",{name:"twitter:player",content:null===i||void 0===i?void 0:i.video}),(null===i||void 0===i?void 0:i.video)&&Object(l.jsx)("meta",{name:"twitter:video",content:null===i||void 0===i?void 0:i.video}),Object(l.jsx)("meta",{name:"twitter:type",content:null!==i&&void 0!==i&&i.type?null===i||void 0===i?void 0:i.type:"website"}),(null===i||void 0===i?void 0:i.publishedTime)&&Object(l.jsx)("meta",{name:"article:published_time",content:null===i||void 0===i?void 0:i.publishedTime}),(null===i||void 0===i?void 0:i.modifiedTime)&&Object(l.jsx)("meta",{name:"article:modified_time",content:null===i||void 0===i?void 0:i.modifiedTime}),(null===i||void 0===i?void 0:i.section)&&Object(l.jsx)("meta",{name:"article:section",content:null===i||void 0===i?void 0:i.section}),(null===i||void 0===i?void 0:i.tag)&&Object(l.jsx)("meta",{name:"article:tag",content:null===i||void 0===i?void 0:i.tag})]})}},99:function(e,o,i){"use strict";var t=i(98);o.a=t.b}}]);