(this.webpackJsonpcangokceaslan=this.webpackJsonpcangokceaslan||[]).push([[16,21],{100:function(e,i,a){"use strict";var t=a(2);i.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loaded:!1,size:125,thick:25};return Object(t.jsx)("div",{className:"justify-content-center align-items-center d-flex",children:Object(t.jsx)("div",{className:"loader-container",children:Object(t.jsx)("div",{className:"spinner-border text-white loader",style:{width:(null===e||void 0===e?void 0:e.size)||125,height:(null===e||void 0===e?void 0:e.size)||125,fontSize:(null===e||void 0===e?void 0:e.thick)||25},role:"status",children:Object(t.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})}},103:function(e,i,a){"use strict";a.r(i);var t=a(25),n=a(1),o=(a(104),a(100)),l=a(24),s=a(17),c=a.n(s),d=a(2);i.default=Object(l.b)((function(e){return{window:e.window.sizes,cms:e.cms}}),{})((function(e){var i,a,l,s,r,u,v,m,j,b,p,h,y,g,f,k,w,O,x,C,I,N=Object(n.useState)(null===e||void 0===e?void 0:e.courseNumber),z=Object(t.a)(N,2),G=z[0],S=z[1],D=function i(){var a,t,n,o=c.a.random(0,(null===e||void 0===e||null===(a=e.cms)||void 0===a?void 0:a.courses.length)-1);return null!==e&&void 0!==e&&null!==(t=e.cms)&&void 0!==t&&null!==(n=t.courses[o])&&void 0!==n&&n.free?i():o};Object(n.useEffect)((function(){var i,a;null!==e&&void 0!==e&&e.courseData||(null===e||void 0===e||null===(i=e.cms)||void 0===i||null===(a=i.courses)||void 0===a?void 0:a.length)>0&&S(void 0!==G?null===e||void 0===e?void 0:e.courseNumber:D())}),[null===e||void 0===e?void 0:e.courseNumber,null===e||void 0===e||null===(i=e.cms)||void 0===i||null===(a=i.courses)||void 0===a?void 0:a.length]);var E;E=(null===e||void 0===e?void 0:e.courseData)||(null===e||void 0===e||null===(l=e.cms)||void 0===l?void 0:l.courses[G||0]);var U,R=Object(n.useState)(!1),T=Object(t.a)(R,2),q=T[0],H=T[1],W=Object(n.useState)(""),A=Object(t.a)(W,2),K=A[0],F=A[1],Y=Object(n.useState)(""),L=Object(t.a)(Y,2),V=L[0],X=L[1],Z=function(){var e,i,a=0;a=window.innerWidth<576?.529*window.screen.width:window.innerWidth>=576&&window.innerWidth<768?269:window.innerWidth>=768&&window.innerWidth<992?375:window.innerWidth>=992&&window.innerWidth<1200?230:(window.innerWidth,270),e="".concat(1.75*a,"px"),i="".concat(a,"px"),F(e),X(i),H(!0)};if(Object(n.useEffect)((function(){Z()}),[]),Object(n.useLayoutEffect)((function(){Z()}),[null===(s=e.window)||void 0===s?void 0:s.width,null===(r=e.window)||void 0===r?void 0:r.height]),!q)return Object(d.jsxs)("div",{className:"middle-content",style:{background:(null===(U=E)||void 0===U?void 0:U.primaryColor)||"#215733",padding:"10px 0px 10px 0px",minHeight:"350px",display:"flex",alignItems:"center",justifyContent:"center"},children:[" ",Object(d.jsx)(o.a,{loaded:!1})]});return 0===(null===e||void 0===e||null===(u=e.cms)||void 0===u||null===(v=u.courses)||void 0===v?void 0:v.length)?null:Object(d.jsx)("div",{className:"one-course",style:{background:(null===(m=E)||void 0===m?void 0:m.primaryColor)||"#215733"},children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"course-container",children:[Object(d.jsx)("div",{className:"course-video",children:null!==(j=E)&&void 0!==j&&j.youtubeEmbedUrl?Object(d.jsx)("div",{className:"video",children:Object(d.jsx)("div",{style:{maxHeight:"calc(".concat(V,")")},children:Object(d.jsx)("iframe",{width:K,height:V,src:"".concat((null===(b=E)||void 0===b?void 0:b.youtubeEmbedUrl)||"https://www.youtube.com/embed/h-Xx14d39vk","?fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&mute=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowFullScreen;",allowFullScreen:!0})})}):Object(d.jsx)("div",{className:"image",children:Object(d.jsx)("img",{src:(null===(p=E)||void 0===p||null===(h=p.thumbnail)||void 0===h||null===(y=h.data)||void 0===y||null===(g=y.attributes)||void 0===g?void 0:g.url.replace(".s3.eu-central-1.amazonaws.com","").replace("https://s3.eu-central-1.amazonaws.com/","https://"))||"https://via.placeholder.com/300x300",alt:"New Course",style:{width:K,height:V}})})}),Object(d.jsx)("div",{className:"course-description",children:Object(d.jsxs)("div",{className:"course",children:[Object(d.jsxs)("div",{className:"innerDetail",children:[Object(d.jsx)("div",{className:"tag",style:{border:"1px solid ".concat(null===(f=E)||void 0===f?void 0:f.secondaryColor)},children:null===(k=E)||void 0===k?void 0:k.tag}),Object(d.jsx)("div",{className:"title",style:{color:null===(w=E)||void 0===w?void 0:w.secondaryColor},children:null===(O=E)||void 0===O?void 0:O.title}),Object(d.jsx)("div",{className:"description",style:{color:null===(x=E)||void 0===x?void 0:x.secondaryColor},children:null===(C=E)||void 0===C?void 0:C.description}),Object(d.jsx)("div",{className:"link",children:Object(d.jsx)("p",{className:"paragraph",children:Object(d.jsx)("a",{href:function(){var e,i,a,t,n,o,l,s=null!==(e=E)&&void 0!==e&&e.referralCode?"?referralCode="+(null===(i=E)||void 0===i?void 0:i.referralCode):"?",c="";"?"===s?c=null!==(t=E)&&void 0!==t&&t.couponCode?"couponCode="+(null===(n=E)||void 0===n?void 0:n.couponCode):"":c=null!==(o=E)&&void 0!==o&&o.couponCode?"&couponCode="+(null===(l=E)||void 0===l?void 0:l.couponCode):"";return"".concat(null===(a=E)||void 0===a?void 0:a.url).concat(s).concat(c)}(),target:"_blank",className:"btn btn-course",style:{borderColor:null===(I=E)||void 0===I?void 0:I.secondaryColor},dangerouslySetInnerHTML:{__html:function(){var e,i,a;return null!==(e=E)&&void 0!==e&&e.free?"\xdccretsiz Olarak Kursa Kay\u0131t Ol":'<span style="text-decoration:line-through"}}>'.concat(null===(i=E)||void 0===i?void 0:i.price,"</span> yerine ").concat(null===(a=E)||void 0===a?void 0:a.discountedPrice,"'ye Kursa Kaydol")}()}})})})]}),Object(d.jsx)("div",{})]})})]})})})}))},104:function(e,i,a){},178:function(e,i,a){},515:function(e,i,a){"use strict";a.r(i);var t=a(3),n=a(25),o=a(1),l=a.n(o),s=a(24),c=a(99),d=a(103),r=a(34),u=a(43),v=(a(178),a(42)),m=a(2),j=[{className:"facebook",logoText:"Facebook",icon:r.b,link:"https://www.facebook.com/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Facebook sayfama ula\u015fabilirsin"},{className:"twitter",logoText:"Twitter",icon:r.l,link:"https://www.twitter.com/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Twitter sayfama ula\u015fabilirsin"},{className:"instagram",logoText:"Instagram",icon:r.d,link:"https://www.instagram.com/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Instagram sayfama ula\u015fabilirsin"},{className:"twitch",logoText:"Twitch",icon:r.k,link:"https://www.twitch.tv/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Twitch sayfama ula\u015fabilirsin"},{className:"youtube",logoText:"Youtube",icon:r.n,link:"https://www.youtube.com/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Youtube sayfama ula\u015fabilirsin"},{className:"udemy",logoText:"Udemy",icon:r.m,link:"https://www.udemy.com/user/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Udemy sayfama ula\u015fabilirsin"},{className:"discord",logoText:"Discord",icon:r.a,link:"https://discord.gg/stNxrjtSgD",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Discord sunucuma ula\u015fabilirsin"},{className:"github",logoText:"GitHub",icon:r.c,link:"https://www.github.com/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek GitHub sayfama ula\u015fabilirsin"},{className:"linkedin",logoText:"LinkedIn",icon:r.e,link:"https://www.linkedin.com/in/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Linkedin sayfama ula\u015fabilirsin"},{className:"medium",logoText:"Medium",icon:r.f,link:"https://cangokceaslan.medium.com",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Medium sayfama ula\u015fabilirsin"},{className:"patreon",logoText:"Patreon",icon:r.g,link:"https://www.patreon.com/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Patreon sayfama ula\u015fabilirsin"},{className:"superpeer",logoText:"SuperPeer",iconImage:"data:image/png;base64,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",link:"https://www.superpeer.com/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek SuperPeer sayfama ula\u015fabilirsin"},{className:"stackoverflow",logoText:"StackOverflow",icon:r.i,link:"https://stackoverflow.com/users/10800488/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek StackOverflow sayfama ula\u015fabilirsin"},{className:"kaggle",logoText:"Kaggle",icon:v.b,link:"https://www.kaggle.com/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Kaggle sayfama ve projelerime ula\u015fabilirsin"},{className:"spotify",logoText:"Spotify",icon:r.h,link:"https://open.spotify.com/user/phcud8bvk15le3v01q9y30prr",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Spotify kanal\u0131ma ula\u015fabilirsin"}],b=window.innerWidth;i.default=Object(s.b)((function(e){return{}}),{})((function(e){var i=l.a.useState(!1),a=Object(n.a)(i,2),s=a[0],r=a[1];return Object(o.useEffect)((function(){r(!0)}),[]),s?Object(m.jsxs)(l.a.Fragment,{children:[Object(m.jsx)(c.a,{docData:{title:"\u0130leti\u015fim | Can G\xf6k\xe7easlan",description:"Bu sayfada bana ait t\xfcm profil linklerine ula\u015fabilirsiniz.",keywords:"cangokceaslan, Can G\xf6k\xe7easlan, Can Gokceaslan, CanGokceaslan, Node.js, NodeJs, JavaScript, Fullstack Developer, CoFounder, Giri\u015fim",author:"Can G\xf6k\xe7easlan",locale:"tr",siteName:"https://www.cangokceaslan.com/social"}}),Object(m.jsx)("h1",{style:{display:"none"},children:"\u0130leti\u015fim"}),Object(m.jsx)("div",{className:"social",style:Object(t.a)({paddingTop:"40px",marginBottom:"20px"},b<992&&{marginTop:"-40px"}),children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:j.map((function(e,i){return function(e){return Object(m.jsx)("div",{className:"item",onClick:function(){window.open(null===e||void 0===e?void 0:e.link,"__blank")},children:Object(m.jsxs)("div",{className:"social-item",children:[Object(m.jsxs)("div",{className:"logo-container ".concat(null===e||void 0===e?void 0:e.className),children:[Object(m.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(null===e||void 0===e?void 0:e.icon)&&Object(m.jsx)(e.icon,{size:30,color:"white",style:{marginRight:"8px"}}),e.iconImage&&Object(m.jsx)("img",{src:e.iconImage,width:"30px",height:"30px",alt:null===e||void 0===e?void 0:e.logoText}),Object(m.jsx)("div",{style:{fontSize:"20px",fontWeight:"bold",fontFamily:"Cairo",color:"white"},children:null===e||void 0===e?void 0:e.logoText})]}),Object(m.jsx)("div",{className:"profilePhotoContainer",children:Object(m.jsx)("img",{src:u.a,width:"100px",height:"100px",alt:"Can G\xf6k\xe7easlan'\u0131n ana resimi"})})]}),Object(m.jsx)("div",{className:"name",children:null===e||void 0===e?void 0:e.name}),Object(m.jsx)("div",{className:"description",children:null===e||void 0===e?void 0:e.description})]})})}(e)}))})})}),Object(m.jsx)(d.default,{})]}):Object(m.jsx)("div",{className:"loading",children:"Y\xfckleniyor"})}))},98:function(e,i,a){"use strict";a.d(i,"a",(function(){return l}));var t=a(1),n=a(102),o=a(2),l={title:"Can G\xf6k\xe7easlan | Kurucu Ortak & FullStack Developer",description:"Merhabalar, ben Can G\xf6k\xe7easlan. \u015eu an bir giri\u015fimci ve online e\u011fitmenim. Benimle ilgili daha fazla bilgiye sahip olabilmek i\xe7in l\xfctfen sayfay\u0131 ziyaret edin.",keywords:"cangokceaslan, Can G\xf6k\xe7easlan, Can Gokceaslan, CanGokceaslan, Node.js, NodeJs, JavaScript, Fullstack Developer, CoFounder, Giri\u015fim",author:"Can G\xf6k\xe7easlan",image:"https://www.cangokceaslan.com/assets/jpg/courses/Iyzico.jpg?cache_delete=1",locale:"tr",siteName:"https://www.cangokceaslan.com",type:"website"};i.b=function(e){var i=e.docData,a=void 0===i?l:i,s=Object(t.useRef)(null),c="/assets/jpg/social.jpg";return Object(t.useEffect)((function(){if(void 0!==(null===a||void 0===a?void 0:a.structralData)){var e=document.createElement("script");e.type="application/ld+json",e.innerHTML=JSON.stringify(null===a||void 0===a?void 0:a.structralData),document.head.appendChild(e)}if(void 0!==(null===a||void 0===a?void 0:a.breadcrumb)){var i=document.createElement("script");i.type="application/ld+json",i.innerHTML=JSON.stringify(null===a||void 0===a?void 0:a.breadcrumb),document.head.appendChild(i)}}),[]),Object(o.jsxs)(n.a,{defer:!1,ref:s,children:[Object(o.jsx)("title",{children:null===a||void 0===a?void 0:a.title}),Object(o.jsx)("meta",{name:"description",content:null===a||void 0===a?void 0:a.description}),Object(o.jsx)("meta",{name:"keywords",content:null===a||void 0===a?void 0:a.keywords}),Object(o.jsx)("meta",{name:"author",content:null===a||void 0===a?void 0:a.author}),Object(o.jsx)("meta",{name:"image",content:(null===a||void 0===a?void 0:a.image)||c}),Object(o.jsx)("meta",{name:"locale",content:null===a||void 0===a?void 0:a.locale}),Object(o.jsx)("meta",{name:"siteName",content:null===a||void 0===a?void 0:a.siteName}),(null===a||void 0===a?void 0:a.video)&&Object(o.jsx)("meta",{name:"media:video",content:null===a||void 0===a?void 0:a.video}),(null===a||void 0===a?void 0:a.video)&&Object(o.jsx)("a",{href:null===a||void 0===a?void 0:a.video,style:{display:"none"},type:"video",target:"_blank",rel:"noopener noreferrer"}),!(null!==a&&void 0!==a&&a.video)&&Object(o.jsx)("meta",{name:"type",content:null!==a&&void 0!==a&&a.type?null===a||void 0===a?void 0:a.type:"website"}),(null===a||void 0===a?void 0:a.video)&&Object(o.jsx)("meta",{name:"type",content:"video"}),Object(o.jsx)("meta",{name:"og:title",content:null===a||void 0===a?void 0:a.title}),Object(o.jsx)("meta",{name:"og:description",content:null===a||void 0===a?void 0:a.description}),Object(o.jsx)("meta",{name:"og:image",content:(null===a||void 0===a?void 0:a.image)||c}),Object(o.jsx)("meta",{name:"og:locale",content:null===a||void 0===a?void 0:a.locale}),Object(o.jsx)("meta",{name:"og:site_name",content:null===a||void 0===a?void 0:a.siteName}),Object(o.jsx)("meta",{name:"og:type",content:"website"}),Object(o.jsx)("meta",{name:"og:author",content:null===a||void 0===a?void 0:a.author}),Object(o.jsx)("meta",{name:"og:type",content:null!==a&&void 0!==a&&a.type?null===a||void 0===a?void 0:a.type:"website"}),(null===a||void 0===a?void 0:a.video)&&Object(o.jsx)("meta",{name:"og:video",content:null===a||void 0===a?void 0:a.video}),(null===a||void 0===a?void 0:a.video)&&Object(o.jsx)("meta",{property:"og:video:secure_url",content:null===a||void 0===a?void 0:a.video}),(null===a||void 0===a?void 0:a.video)&&Object(o.jsx)("meta",{property:"og:video:type",content:"text/html"}),Object(o.jsx)("meta",{name:"twitter:title",content:null===a||void 0===a?void 0:a.title}),Object(o.jsx)("meta",{name:"twitter:description",content:null===a||void 0===a?void 0:a.description}),Object(o.jsx)("meta",{name:"twitter:image",content:(null===a||void 0===a?void 0:a.image)||c}),Object(o.jsx)("meta",{name:"twitter:site",content:null===a||void 0===a?void 0:a.siteName}),Object(o.jsx)("meta",{name:"twitter:creator",content:null===a||void 0===a?void 0:a.author}),null!==a&&void 0!==a&&a.video?Object(o.jsx)("meta",{name:"twitter:card",content:"player"}):Object(o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(null===a||void 0===a?void 0:a.video)&&Object(o.jsx)("meta",{name:"twitter:player",content:null===a||void 0===a?void 0:a.video}),(null===a||void 0===a?void 0:a.video)&&Object(o.jsx)("meta",{name:"twitter:video",content:null===a||void 0===a?void 0:a.video}),Object(o.jsx)("meta",{name:"twitter:type",content:null!==a&&void 0!==a&&a.type?null===a||void 0===a?void 0:a.type:"website"}),(null===a||void 0===a?void 0:a.publishedTime)&&Object(o.jsx)("meta",{name:"article:published_time",content:null===a||void 0===a?void 0:a.publishedTime}),(null===a||void 0===a?void 0:a.modifiedTime)&&Object(o.jsx)("meta",{name:"article:modified_time",content:null===a||void 0===a?void 0:a.modifiedTime}),(null===a||void 0===a?void 0:a.section)&&Object(o.jsx)("meta",{name:"article:section",content:null===a||void 0===a?void 0:a.section}),(null===a||void 0===a?void 0:a.tag)&&Object(o.jsx)("meta",{name:"article:tag",content:null===a||void 0===a?void 0:a.tag})]})}},99:function(e,i,a){"use strict";var t=a(98);i.a=t.b}}]);