(this.webpackJsonpcangokceaslan=this.webpackJsonpcangokceaslan||[]).push([[11,21],{100:function(e,a,i){"use strict";function t(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}i.d(a,"a",(function(){return t}))},101:function(e,a,i){"use strict";i.d(a,"a",(function(){return o}));var t=i(35);function n(e,a){for(var i=0;i<a.length;i++){var n=a[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Object(t.a)(n.key),n)}}function o(e,a,i){return a&&n(e.prototype,a),i&&n(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}},102:function(e,a,i){"use strict";i.r(a);var t=i(24),n=i(1),o=i(97),l=(i(103),i(99)),r=i(25),s=i(17),c=i.n(s),d=i(2);o.a[0];a.default=Object(r.b)((function(e){return{window:e.window.sizes}}),{})((function(e){var a,i,r,s,u,m,v,p,b,y,j,g,h,f=Object(n.useState)(null===e||void 0===e?void 0:e.courseNumber),w=Object(t.a)(f,2),k=w[0],O=w[1],x=o.a.filter((function(e){return null===e||void 0===e||!e.free}));Object(n.useEffect)((function(){O(void 0!==k?null===e||void 0===e?void 0:e.courseNumber:c.a.random(0,x.length-1))}),[]);var C;C=x[k||0];var N,z=Object(n.useState)(!1),G=Object(t.a)(z,2),S=G[0],E=G[1],T=Object(n.useState)(""),B=Object(t.a)(T,2),F=B[0],P=B[1],D=Object(n.useState)(""),J=Object(t.a)(D,2),U=J[0],_=J[1],R=function(){var e,a,i=0;i=window.innerWidth<576?.529*window.screen.width:window.innerWidth>=576&&window.innerWidth<768?269:window.innerWidth>=768&&window.innerWidth<992?375:window.innerWidth>=992&&window.innerWidth<1200?230:(window.innerWidth,270),e="".concat(1.75*i,"px"),a="".concat(i,"px"),P(e),_(a),E(!0)};if(Object(n.useEffect)((function(){R()}),[]),Object(n.useLayoutEffect)((function(){R()}),[null===(a=e.window)||void 0===a?void 0:a.width,null===(i=e.window)||void 0===i?void 0:i.height]),!S)return Object(d.jsxs)("div",{className:"middle-content",style:{background:(null===(N=C)||void 0===N?void 0:N.primaryColor)||"#215733",padding:"10px 0px 10px 0px",minHeight:"350px",display:"flex",alignItems:"center",justifyContent:"center"},children:[" ",Object(d.jsx)(l.a,{loaded:!1})]});return Object(d.jsx)("div",{className:"one-course",style:{background:(null===(r=C)||void 0===r?void 0:r.primaryColor)||"#215733"},children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"course-container",children:[Object(d.jsx)("div",{className:"course-video",children:null!==(s=C)&&void 0!==s&&s.youtubeEmbedUrl?Object(d.jsx)("div",{className:"video",children:Object(d.jsx)("div",{style:{maxHeight:"calc(".concat(U,")")},children:Object(d.jsx)("iframe",{width:F,height:U,src:"".concat((null===(u=C)||void 0===u?void 0:u.youtubeEmbedUrl)||"https://www.youtube.com/embed/h-Xx14d39vk","?fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&mute=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowFullScreen;",allowFullScreen:!0})})}):Object(d.jsx)("div",{className:"image",children:Object(d.jsx)("img",{src:(null===(m=C)||void 0===m?void 0:m.thumbnail)||"https://via.placeholder.com/300x300",alt:"New Course",style:{width:F,height:U}})})}),Object(d.jsx)("div",{className:"course-description",children:Object(d.jsxs)("div",{className:"course",children:[Object(d.jsxs)("div",{className:"innerDetail",children:[Object(d.jsx)("div",{className:"tag",style:{border:"1px solid ".concat(null===(v=C)||void 0===v?void 0:v.secondaryColor)},children:null===(p=C)||void 0===p?void 0:p.tag}),Object(d.jsx)("div",{className:"title",style:{color:null===(b=C)||void 0===b?void 0:b.secondaryColor},children:null===(y=C)||void 0===y?void 0:y.title}),Object(d.jsx)("div",{className:"description",style:{color:null===(j=C)||void 0===j?void 0:j.secondaryColor},children:null===(g=C)||void 0===g?void 0:g.description}),Object(d.jsx)("div",{className:"link",children:Object(d.jsx)("p",{className:"paragraph",children:Object(d.jsx)("a",{href:function(){var e,a,i,t,n,o,l,r=null!==(e=C)&&void 0!==e&&e.referralCode?"?referralCode="+(null===(a=C)||void 0===a?void 0:a.referralCode):"?",s="";"?"===r?s=null!==(t=C)&&void 0!==t&&t.couponCode?"couponCode="+(null===(n=C)||void 0===n?void 0:n.couponCode):"":s=null!==(o=C)&&void 0!==o&&o.couponCode?"&couponCode="+(null===(l=C)||void 0===l?void 0:l.couponCode):"";return"".concat(null===(i=C)||void 0===i?void 0:i.url).concat(r).concat(s)}(),target:"_blank",className:"btn btn-course",style:{borderColor:null===(h=C)||void 0===h?void 0:h.secondaryColor},dangerouslySetInnerHTML:{__html:function(){var e,a,i;return null!==(e=C)&&void 0!==e&&e.free?"\xdccretsiz Olarak Kursa Kay\u0131t Ol":'<span style="text-decoration:line-through"}}>'.concat(null===(a=C)||void 0===a?void 0:a.price,"</span> yerine ").concat(null===(i=C)||void 0===i?void 0:i.discountedPrice,"'ye Kursa Kaydol")}()}})})})]}),Object(d.jsx)("div",{})]})})]})})})}))},103:function(e,a,i){},106:function(e,a,i){"use strict";i.d(a,"a",(function(){return n}));var t=i(33);function n(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&Object(t.a)(e,a)}},107:function(e,a,i){"use strict";function t(e){return t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},t(e)}i.d(a,"a",(function(){return t}))},108:function(e,a,i){"use strict";function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}i.d(a,"a",(function(){return t}))},109:function(e,a,i){"use strict";function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}i.d(a,"a",(function(){return t}))},110:function(e,a,i){"use strict";i.d(a,"a",(function(){return r}));var t=i(107),n=i(108),o=i(18),l=i(109);function r(e){var a=Object(n.a)();return function(){var i,n=Object(t.a)(e);if(a){var r=Object(t.a)(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return function(e,a){if(a&&("object"===Object(o.a)(a)||"function"===typeof a))return a;if(void 0!==a)throw new TypeError("Derived constructors may only return object or undefined");return Object(l.a)(e)}(this,i)}}},504:function(e,a,i){"use strict";i.r(a);var t=i(3),n=i(100),o=i(101),l=i(106),r=i(110),s=i(1),c=i.n(s),d=i(25),u=i(98),m=i(102),v=i(2),p=[{className:"facebook",logoText:"Facebook",icon:"assets/svg/social/facebook.svg",link:"https://www.facebook.com/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Facebook sayfama ula\u015fabilirsin"},{className:"twitter",logoText:"Twitter",icon:"assets/svg/social/twitter.svg",link:"https://www.twitter.com/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Twitter sayfama ula\u015fabilirsin"},{className:"instagram",logoText:"Instagram",icon:"assets/svg/social/instagram.svg",link:"https://www.instagram.com/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Instagram sayfama ula\u015fabilirsin"},{className:"twitch",logoText:"Twitch",icon:"assets/svg/social/twitch.svg",link:"https://www.twitch.tv/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Twitch sayfama ula\u015fabilirsin"},{className:"youtube",logoText:"Youtube",icon:"assets/svg/social/youtube.svg",link:"https://www.youtube.com/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Youtube sayfama ula\u015fabilirsin"},{className:"udemy",logoText:"Udemy",icon:"assets/svg/social/udemy.png",link:"https://www.udemy.com/user/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Udemy sayfama ula\u015fabilirsin"},{className:"discord",logoText:"Discord",icon:"assets/svg/social/discord.svg",link:"https://discord.gg/stNxrjtSgD",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Discord sunucuma ula\u015fabilirsin"},{className:"github",logoText:"GitHub",icon:"assets/svg/social/github.svg",link:"https://www.github.com/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek GitHub sayfama ula\u015fabilirsin"},{className:"linkedin",logoText:"LinkedIn",icon:"assets/svg/social/linkedin.svg",link:"https://www.linkedin.com/in/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Linkedin sayfama ula\u015fabilirsin"},{className:"medium",logoText:"Medium",icon:"assets/svg/social/medium.png",link:"https://cangokceaslan.medium.com",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Medium sayfama ula\u015fabilirsin"},{className:"patreon",logoText:"Patreon",icon:"assets/svg/social/patreon.svg",link:"https://www.patreon.com/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Patreon sayfama ula\u015fabilirsin"},{className:"superpeer",logoText:"SuperPeer",icon:"assets/svg/social/superpeer.png",link:"https://www.superpeer.com/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek SuperPeer sayfama ula\u015fabilirsin"},{className:"stackoverflow",logoText:"StackOverflow",icon:"assets/svg/social/stackoverflow.svg",link:"https://stackoverflow.com/users/10800488/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek StackOverflow sayfama ula\u015fabilirsin"},{className:"kaggle",logoText:"Kaggle",icon:"assets/svg/social/kaggle-blue.svg",link:"https://www.kaggle.com/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Kaggle sayfama ve projelerime ula\u015fabilirsin"},{className:"spotify",logoText:"Spotify",icon:"assets/svg/social/spotify.svg",link:"https://open.spotify.com/user/phcud8bvk15le3v01q9y30prr",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Spotify kanal\u0131ma ula\u015fabilirsin"}],b=window.innerWidth,y=function(e){Object(l.a)(i,e);var a=Object(r.a)(i);function i(e){var t;return Object(n.a)(this,i),(t=a.call(this,e)).state={loaded:!1},t.seo={title:"\u0130leti\u015fim | Can G\xf6k\xe7easlan",description:"Bu sayfada bana ait t\xfcm profil linklerine ula\u015fabilirsiniz.",keywords:"cangokceaslan, Can G\xf6k\xe7easlan, Can Gokceaslan, CanGokceaslan, Node.js, NodeJs, JavaScript, Fullstack Developer, CoFounder, Giri\u015fim",author:"Can G\xf6k\xe7easlan",locale:"tr",siteName:"https://www.cangokceaslan.com/social"},t}return Object(o.a)(i,[{key:"renderSocialItem",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{className:"facebook",logoText:"Facebook",icon:"assets/svg/social/facebook.svg",link:"https://www.facebook.com/cangokceaslan",name:"Can G\xf6k\xe7easlan",description:"Bu sayfay\u0131 ziyaret ederek Facebook sayfama ula\u015fabilirsin"};return Object(v.jsx)("div",{className:"col-lg-4 col-md-6 col-12 item",onClick:function(){window.open(null===e||void 0===e?void 0:e.link,"__blank")},children:Object(v.jsxs)("div",{className:"social-item",children:[Object(v.jsxs)("div",{className:"logo-container ".concat(null===e||void 0===e?void 0:e.className),children:[Object(v.jsxs)("div",{style:{display:"flex"},children:[Object(v.jsx)("img",{src:null===e||void 0===e?void 0:e.icon,style:{marginRight:"6px"},width:"30px",height:"30px"}),Object(v.jsx)("h3",{children:null===e||void 0===e?void 0:e.logoText})]}),Object(v.jsx)("div",{className:"profilePhotoContainer",children:Object(v.jsx)("img",{src:"assets/jpg/social.jpg",width:"100px",height:"100px",alt:"Can G\xf6k\xe7easlan'\u0131n ana resimi"})})]}),Object(v.jsx)("div",{className:"name",children:null===e||void 0===e?void 0:e.name}),Object(v.jsx)("div",{className:"description",children:null===e||void 0===e?void 0:e.description})]})})}},{key:"componentDidMount",value:function(){this.setState({loaded:!0})}},{key:"render",value:function(){var e=this;return this.state.loaded?Object(v.jsxs)(c.a.Fragment,{children:[Object(v.jsx)(u.a,{docData:this.seo}),Object(v.jsx)("h1",{style:{display:"none"},children:"\u0130leti\u015fim"}),Object(v.jsx)("div",{className:"social",style:Object(t.a)({paddingTop:"40px",marginBottom:"20px"},b<992&&{marginTop:"-40px"}),children:Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"row",children:p.map((function(a,i){return e.renderSocialItem(a)}))})})}),Object(v.jsx)(m.default,{})]}):Object(v.jsx)("div",{className:"loading",children:"Y\xfckleniyor"})}}]),i}(s.Component);a.default=Object(d.b)((function(e){return{}}),{})(y)},96:function(e,a,i){"use strict";i.d(a,"a",(function(){return l}));var t=i(1),n=i(105),o=i(2),l={title:"Can G\xf6k\xe7easlan | Kurucu Ortak & FullStack Developer",description:"Merhabalar, ben Can G\xf6k\xe7easlan. \u015eu an bir giri\u015fimci ve online e\u011fitmenim. Benimle ilgili daha fazla bilgiye sahip olabilmek i\xe7in l\xfctfen sayfay\u0131 ziyaret edin.",keywords:"cangokceaslan, Can G\xf6k\xe7easlan, Can Gokceaslan, CanGokceaslan, Node.js, NodeJs, JavaScript, Fullstack Developer, CoFounder, Giri\u015fim",author:"Can G\xf6k\xe7easlan",image:"https://www.cangokceaslan.com/assets/jpg/courses/Iyzico.jpg?cache_delete=1",locale:"tr",siteName:"https://www.cangokceaslan.com",type:"website"};a.b=function(e){var a=e.docData,i=void 0===a?l:a,r=Object(t.useRef)(null),s="/assets/jpg/social.jpg";return Object(t.useEffect)((function(){if(void 0!==(null===i||void 0===i?void 0:i.structralData)){var e=document.createElement("script");e.type="application/ld+json",e.innerHTML=JSON.stringify(null===i||void 0===i?void 0:i.structralData),document.head.appendChild(e)}if(void 0!==(null===i||void 0===i?void 0:i.breadcrumb)){var a=document.createElement("script");a.type="application/ld+json",a.innerHTML=JSON.stringify(null===i||void 0===i?void 0:i.breadcrumb),document.head.appendChild(a)}}),[]),Object(o.jsxs)(n.a,{defer:!1,ref:r,children:[Object(o.jsx)("title",{children:null===i||void 0===i?void 0:i.title}),Object(o.jsx)("meta",{name:"description",content:null===i||void 0===i?void 0:i.description}),Object(o.jsx)("meta",{name:"keywords",content:null===i||void 0===i?void 0:i.keywords}),Object(o.jsx)("meta",{name:"author",content:null===i||void 0===i?void 0:i.author}),Object(o.jsx)("meta",{name:"image",content:(null===i||void 0===i?void 0:i.image)||s}),Object(o.jsx)("meta",{name:"locale",content:null===i||void 0===i?void 0:i.locale}),Object(o.jsx)("meta",{name:"siteName",content:null===i||void 0===i?void 0:i.siteName}),(null===i||void 0===i?void 0:i.video)&&Object(o.jsx)("meta",{name:"media:video",content:null===i||void 0===i?void 0:i.video}),(null===i||void 0===i?void 0:i.video)&&Object(o.jsx)("a",{href:null===i||void 0===i?void 0:i.video,style:{display:"none"},type:"video",target:"_blank",rel:"noopener noreferrer"}),!(null!==i&&void 0!==i&&i.video)&&Object(o.jsx)("meta",{name:"type",content:null!==i&&void 0!==i&&i.type?null===i||void 0===i?void 0:i.type:"website"}),(null===i||void 0===i?void 0:i.video)&&Object(o.jsx)("meta",{name:"type",content:"video"}),Object(o.jsx)("meta",{name:"og:title",content:null===i||void 0===i?void 0:i.title}),Object(o.jsx)("meta",{name:"og:description",content:null===i||void 0===i?void 0:i.description}),Object(o.jsx)("meta",{name:"og:image",content:(null===i||void 0===i?void 0:i.image)||s}),Object(o.jsx)("meta",{name:"og:locale",content:null===i||void 0===i?void 0:i.locale}),Object(o.jsx)("meta",{name:"og:site_name",content:null===i||void 0===i?void 0:i.siteName}),Object(o.jsx)("meta",{name:"og:type",content:"website"}),Object(o.jsx)("meta",{name:"og:author",content:null===i||void 0===i?void 0:i.author}),Object(o.jsx)("meta",{name:"og:type",content:null!==i&&void 0!==i&&i.type?null===i||void 0===i?void 0:i.type:"website"}),(null===i||void 0===i?void 0:i.video)&&Object(o.jsx)("meta",{name:"og:video",content:null===i||void 0===i?void 0:i.video}),(null===i||void 0===i?void 0:i.video)&&Object(o.jsx)("meta",{property:"og:video:secure_url",content:null===i||void 0===i?void 0:i.video}),(null===i||void 0===i?void 0:i.video)&&Object(o.jsx)("meta",{property:"og:video:type",content:"text/html"}),Object(o.jsx)("meta",{name:"twitter:title",content:null===i||void 0===i?void 0:i.title}),Object(o.jsx)("meta",{name:"twitter:description",content:null===i||void 0===i?void 0:i.description}),Object(o.jsx)("meta",{name:"twitter:image",content:(null===i||void 0===i?void 0:i.image)||s}),Object(o.jsx)("meta",{name:"twitter:site",content:null===i||void 0===i?void 0:i.siteName}),Object(o.jsx)("meta",{name:"twitter:creator",content:null===i||void 0===i?void 0:i.author}),null!==i&&void 0!==i&&i.video?Object(o.jsx)("meta",{name:"twitter:card",content:"player"}):Object(o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(null===i||void 0===i?void 0:i.video)&&Object(o.jsx)("meta",{name:"twitter:player",content:null===i||void 0===i?void 0:i.video}),(null===i||void 0===i?void 0:i.video)&&Object(o.jsx)("meta",{name:"twitter:video",content:null===i||void 0===i?void 0:i.video}),Object(o.jsx)("meta",{name:"twitter:type",content:null!==i&&void 0!==i&&i.type?null===i||void 0===i?void 0:i.type:"website"}),(null===i||void 0===i?void 0:i.publishedTime)&&Object(o.jsx)("meta",{name:"article:published_time",content:null===i||void 0===i?void 0:i.publishedTime}),(null===i||void 0===i?void 0:i.modifiedTime)&&Object(o.jsx)("meta",{name:"article:modified_time",content:null===i||void 0===i?void 0:i.modifiedTime}),(null===i||void 0===i?void 0:i.section)&&Object(o.jsx)("meta",{name:"article:section",content:null===i||void 0===i?void 0:i.section}),(null===i||void 0===i?void 0:i.tag)&&Object(o.jsx)("meta",{name:"article:tag",content:null===i||void 0===i?void 0:i.tag})]})}},97:function(e,a,i){"use strict";var t=i.p+"static/media/Iyzico.6a349551.webp",n=i.p+"static/media/NodeJs.631fe5f6.webp",o=i.p+"static/media/GitHub.ee3fbf50.webp",l=i.p+"static/media/Udemy.b294c6c9.webp",r=i.p+"static/media/Redis.dcebd759.webp";var s=[{id:"udemy",url:"https://www.udemy.com/user/cangokceaslan",thumbnail:l,primaryColor:"#7A0089",secondaryColor:"#000000",title:"Daha Fazla E\u011fitime Ula\u015fmak \u0130\xe7in Hemen Ziyaret Et",description:"Udemy Profili",author:"Can G\xf6k\xe7easlan",authorUrl:"https://www.udemy.com/user/cangokceaslan",star:"4.7",starValue:4.7,details:"Toplam 41 saat - 5 Kurs",free:!0,price:"\xdccretsiz",tag:"T\xfcm E\u011fitimler",discountedPrice:null,referralCode:"0017AFE73990096201B4",couponCode:null,registered:"41.000+",youtubeEmbedUrl:"https://www.youtube.com/embed/h-Xx14d39vk",promotionCover:null},{id:"github",url:"https://www.udemy.com/course/github-egitimi/",thumbnail:o,primaryColor:"#c9510c",secondaryColor:"white",title:"GitHub Nedir? GitHub Nas\u0131l Kullan\u0131l\u0131r? ( Github E\u011fitimi )",description:"GitHub'\u0131 \xf6\u011frenmek seni yaz\u0131l\u0131m alan\u0131nda en tepelere do\u011fru g\xf6t\xfcrecek. Hali haz\u0131rda GitHub \xfczerinde bulunan milyonlarca kod sayesinde hem bu i\u015fin nas\u0131l yap\u0131ld\u0131\u011f\u0131n\u0131 \xf6\u011frenecek hem de buradaki kodlardan yard\u0131m alarak kendini profesyonel bir geli\u015ftirici haline getireceksin.",author:"Can G\xf6k\xe7easlan",authorUrl:"https://www.udemy.com/user/cangokceaslan",star:"4,8",starValue:4.8,details:"Toplam 1,5 saat - 9 ders - Ba\u015flang\u0131\xe7",free:!0,price:"\xdccretsiz",tag:"\xdccretsiz E\u011fitim",discountedPrice:null,referralCode:"0017AFE73990096201B4",couponCode:null,registered:"7000+",youtubeEmbedUrl:"https://www.youtube.com/embed/wchDeesL_G0",promotionCover:null},{id:"javascript",url:"https://www.udemy.com/course/javascript-temelden-profesyonele-kurs-1/",thumbnail:i.p+"static/media/JavaScript.7bea7549.webp",primaryColor:"linear-gradient(90deg, rgba(255,252,0,1) 0%, rgba(247,225,25,1) 59%)",secondaryColor:"#000000",title:"JavaScript - S\u0131f\u0131rdan JavaScript Programlamaya Giri\u015f",description:"Bu e\u011fitimde sizler i\xe7in JavaScript'in \xf6nemli konular\u0131n\u0131 s\u0131ralayarak ve \xfczerinde durarak i\u015fledim. Bu sayede sizler JavaScript'e kolayca adapte olabilecek ve gitmek istedi\u011finiz noktaya zorluk ya\u015famadan gidebileceksiniz.",author:"Can G\xf6k\xe7easlan",authorUrl:"https://www.udemy.com/user/cangokceaslan",star:"4,0",starValue:4,details:"Toplam 8 saat - 55 Ders - Ba\u015flang\u0131\xe7",free:!1,price:"229,99 \u20ba",tag:"JavaScript E\u011fitimi",discountedPrice:"69,99 \u20ba",referralCode:"0017AFE73990096201B4",couponCode:"JAVASCRIPT4",registered:"36000+",youtubeEmbedUrl:"https://www.youtube.com/embed/DUyoVGirCLY",promotionCover:null,coupon:null},{id:"nodejs",url:"https://www.udemy.com/course/nodejs-egitimi-sifirdan-profesyonele/",thumbnail:n,primaryColor:"#215733",secondaryColor:"#FFFFFF",title:"Node.js E\u011fitimi - S\u0131f\u0131rdan Profesyonele NodeJs ve Javascript",description:"NodeJs, JavaScript, BabelJS, ExpressJs, PM2 gibi paketlerin kullan\u0131mlar\u0131n\u0131 sa\u011flayaca\u011f\u0131z. NPM \xfczerinden kodlar\u0131m\u0131z\u0131 a\xe7\u0131k kaynak hale getirip bunlar\u0131 kendi projelerimiz \xfcst\xfcnde kullanabilece\u011fiz. Bu sayede bir paketi belki de onlarca projede kullan\u0131rken tek bir yerden y\xf6netmeyi sa\u011flayaca\u011f\u0131z. ",author:"Can G\xf6k\xe7easlan",authorUrl:"https://www.udemy.com/user/cangokceaslan",star:"4.5",starValue:4.5,details:"Toplam 13,5 saat - 55 ders - Ba\u015flang\u0131\xe7",free:!1,price:"269,99 \u20ba",tag:"Node.js E\u011fitimi",discountedPrice:"69,99 \u20ba",referralCode:"0017AFE73990096201B4",couponCode:"NODEJS4",registered:"150+",youtubeEmbedUrl:"https://www.youtube.com/embed/Y4QYo27evbQ",promotionCover:null},{id:"iyzico",url:"https://www.udemy.com/course/iyzico-egitimi/",thumbnail:t,primaryColor:"linear-gradient(90deg, #340B99 0%, rgba(138,4,168,1) 100%)",secondaryColor:"#FFFFFF",title:"Iyzico ve Node.js ile \xd6deme Sistemi API Geli\u015ftirme Kursu",description:"Bu kursta Online \xd6deme Sistemlerinin nas\u0131l \xe7al\u0131\u015ft\u0131\u011f\u0131n\u0131 anlayacaks\u0131n. Teknoloji olarak Node.js kullanarak hem web hem de mobil / desktop uygulamalar\u0131 ile \xe7al\u0131\u015fabilen bir RESTful API yazaca\u011f\u0131z. Iyzico, Node.js, ExpressJs, MongoDb, Docker ve Heroku kullanaca\u011f\u0131z",author:"Can G\xf6k\xe7easlan",authorUrl:"https://www.udemy.com/user/cangokceaslan",star:"4.9",starValue:4.9,details:"Toplam 12 saat - 70 ders - Orta Seviye",free:!1,price:"269,99 \u20ba",tag:"Yeni ve Pop\xfcler E\u011fitim",discountedPrice:"69,99 \u20ba",referralCode:"AB661E934794EE4680F8",couponCode:"IYZICO4",registered:"100+",youtubeEmbedUrl:"https://www.youtube.com/embed/kaklCqcx3lg",promotionCover:i.p+"static/media/iyzico.780fae32.jpg"},{id:"redis",url:"https://www.udemy.com/course/redis-egitimi/",thumbnail:r,primaryColor:"#7A0D01",secondaryColor:"#FFFFFF",title:"Redis E\u011fitimi - Node.js ile Cache, Redis, Redis Pub/Sub",description:'Remote Dictionary Server (Uzak S\xf6zl\xfck Sunucusu) ifadesinin k\u0131saltmas\u0131 olan Redis h\u0131zl\u0131, a\xe7\u0131k kaynakl\u0131, bellek i\xe7i anahtar-de\u011fer veri deposudur. Stack Overflow\'dan be\u015f y\u0131l art arda "En Sevilen" veritaban\u0131 unvan\u0131n\u0131 alan Redis, bug\xfcn en pop\xfcler a\xe7\u0131k kaynakl\u0131 altyap\u0131lardan biridir.',author:"Can G\xf6k\xe7easlan",authorUrl:"https://www.udemy.com/user/cangokceaslan",star:"4.8",starValue:4.8,details:"Toplam 5,5 saat - 46 ders - Orta Seviye",free:!1,price:"229,99 \u20ba",tag:"Yeni ve Pop\xfcler E\u011fitim",discountedPrice:"69,99 \u20ba",referralCode:"D927ADC9CB3FEA5B1ABB",couponCode:"REDIS4",registered:"Yeni",youtubeEmbedUrl:"https://www.youtube.com/embed/egBLr3KjEn8",promotionCover:null}].reverse().map((function(e){var a=new Date,i=12*(a.getFullYear()-2022),t=a.getMonth()+1+i;return e.currentCouponCodeNumber=t,e.couponCode=e.id.toUpperCase()+t,e}));a.a=s},98:function(e,a,i){"use strict";var t=i(96);a.a=t.b},99:function(e,a,i){"use strict";var t=i(2);a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loaded:!1,size:125,thick:25};return Object(t.jsx)("div",{className:"justify-content-center align-items-center d-flex",children:Object(t.jsx)("div",{className:"loader-container",children:Object(t.jsx)("div",{className:"spinner-border text-white loader",style:{width:(null===e||void 0===e?void 0:e.size)||125,height:(null===e||void 0===e?void 0:e.size)||125,fontSize:(null===e||void 0===e?void 0:e.thick)||25},role:"status",children:Object(t.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})}}}]);
//# sourceMappingURL=11.8977aa68.chunk.js.map