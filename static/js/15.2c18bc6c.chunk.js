(this.webpackJsonpcangokceaslan=this.webpackJsonpcangokceaslan||[]).push([[15,3,20],{100:function(e,i,t){"use strict";t.r(i);var o=t(25),n=t(1),l=(t(101),t(99)),a=t(24),d=t(17),c=t.n(d),r=t(2);i.default=Object(a.b)((function(e){return{window:e.window.sizes,cms:e.cms}}),{})((function(e){var i,t,a,d,s,u,v,m,j,p,b,g,h,O,w,x,y,k,A,f,C,N=Object(n.useState)(null===e||void 0===e?void 0:e.courseNumber),D=Object(o.a)(N,2),S=D[0],H=D[1],M=function i(){var t,o,n,l=c.a.random(0,(null===e||void 0===e||null===(t=e.cms)||void 0===t?void 0:t.courses.length)-1);return null!==e&&void 0!==e&&null!==(o=e.cms)&&void 0!==o&&null!==(n=o.courses[l])&&void 0!==n&&n.free?i():l};Object(n.useEffect)((function(){var i,t;null!==e&&void 0!==e&&e.courseData||(null===e||void 0===e||null===(i=e.cms)||void 0===i||null===(t=i.courses)||void 0===t?void 0:t.length)>0&&H(void 0!==S?null===e||void 0===e?void 0:e.courseNumber:M())}),[null===e||void 0===e?void 0:e.courseNumber,null===e||void 0===e||null===(i=e.cms)||void 0===i||null===(t=i.courses)||void 0===t?void 0:t.length]);var B;B=(null===e||void 0===e?void 0:e.courseData)||(null===e||void 0===e||null===(a=e.cms)||void 0===a?void 0:a.courses[S||0]);var E,G=Object(n.useState)(!1),L=Object(o.a)(G,2),T=L[0],_=L[1],P=Object(n.useState)(""),z=Object(o.a)(P,2),F=z[0],K=z[1],I=Object(n.useState)(""),R=Object(o.a)(I,2),J=R[0],Y=R[1],V=function(){var e,i,t=0;t=window.innerWidth<576?.529*window.screen.width:window.innerWidth>=576&&window.innerWidth<768?269:window.innerWidth>=768&&window.innerWidth<992?375:window.innerWidth>=992&&window.innerWidth<1200?230:(window.innerWidth,270),e="".concat(1.75*t,"px"),i="".concat(t,"px"),K(e),Y(i),_(!0)};if(Object(n.useEffect)((function(){V()}),[]),Object(n.useLayoutEffect)((function(){V()}),[null===(d=e.window)||void 0===d?void 0:d.width,null===(s=e.window)||void 0===s?void 0:s.height]),!T)return Object(r.jsxs)("div",{className:"middle-content",style:{background:(null===(E=B)||void 0===E?void 0:E.primaryColor)||"#215733",padding:"10px 0px 10px 0px",minHeight:"350px",display:"flex",alignItems:"center",justifyContent:"center"},children:[" ",Object(r.jsx)(l.a,{loaded:!1})]});return 0===(null===e||void 0===e||null===(u=e.cms)||void 0===u||null===(v=u.courses)||void 0===v?void 0:v.length)?null:Object(r.jsx)("div",{className:"one-course",style:{background:(null===(m=B)||void 0===m?void 0:m.primaryColor)||"#215733"},children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"course-container",children:[Object(r.jsx)("div",{className:"course-video",children:null!==(j=B)&&void 0!==j&&j.youtubeEmbedUrl?Object(r.jsx)("div",{className:"video",children:Object(r.jsx)("div",{style:{maxHeight:"calc(".concat(J,")")},children:Object(r.jsx)("iframe",{width:F,height:J,src:"".concat((null===(p=B)||void 0===p?void 0:p.youtubeEmbedUrl)||"https://www.youtube.com/embed/h-Xx14d39vk","?fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&mute=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowFullScreen;",allowFullScreen:!0})})}):Object(r.jsx)("div",{className:"image",children:Object(r.jsx)("img",{src:(null===(b=B)||void 0===b||null===(g=b.thumbnail)||void 0===g||null===(h=g.data)||void 0===h||null===(O=h.attributes)||void 0===O?void 0:O.url.replace("https://s3.eu-central-1.amazonaws.com/","https://"))||"https://via.placeholder.com/300x300",alt:"New Course",style:{width:F,height:J}})})}),Object(r.jsx)("div",{className:"course-description",children:Object(r.jsxs)("div",{className:"course",children:[Object(r.jsxs)("div",{className:"innerDetail",children:[Object(r.jsx)("div",{className:"tag",style:{border:"1px solid ".concat(null===(w=B)||void 0===w?void 0:w.secondaryColor)},children:null===(x=B)||void 0===x?void 0:x.tag}),Object(r.jsx)("div",{className:"title",style:{color:null===(y=B)||void 0===y?void 0:y.secondaryColor},children:null===(k=B)||void 0===k?void 0:k.title}),Object(r.jsx)("div",{className:"description",style:{color:null===(A=B)||void 0===A?void 0:A.secondaryColor},children:null===(f=B)||void 0===f?void 0:f.description}),Object(r.jsx)("div",{className:"link",children:Object(r.jsx)("p",{className:"paragraph",children:Object(r.jsx)("a",{href:function(){var e,i,t,o,n,l,a,d=null!==(e=B)&&void 0!==e&&e.referralCode?"?referralCode="+(null===(i=B)||void 0===i?void 0:i.referralCode):"?",c="";"?"===d?c=null!==(o=B)&&void 0!==o&&o.couponCode?"couponCode="+(null===(n=B)||void 0===n?void 0:n.couponCode):"":c=null!==(l=B)&&void 0!==l&&l.couponCode?"&couponCode="+(null===(a=B)||void 0===a?void 0:a.couponCode):"";return"".concat(null===(t=B)||void 0===t?void 0:t.url).concat(d).concat(c)}(),target:"_blank",className:"btn btn-course",style:{borderColor:null===(C=B)||void 0===C?void 0:C.secondaryColor},dangerouslySetInnerHTML:{__html:function(){var e,i,t;return null!==(e=B)&&void 0!==e&&e.free?"\xdccretsiz Olarak Kursa Kay\u0131t Ol":'<span style="text-decoration:line-through"}}>'.concat(null===(i=B)||void 0===i?void 0:i.price,"</span> yerine ").concat(null===(t=B)||void 0===t?void 0:t.discountedPrice,"'ye Kursa Kaydol")}()}})})})]}),Object(r.jsx)("div",{})]})})]})})})}))},101:function(e,i,t){},116:function(e,i,t){"use strict";t.r(i);var o=t(3),n=(t(123),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhwAAADSAgMAAAB87fECAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAAADLODf///8EXxL6AAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAHdElNRQfhCAkCAi0o2YxVAAAAwElEQVR42u3asRGAIAxAURr3s7FxPxumtLHihMt5QS3er0PyBqBs/6hwcHBwcHBwcHBwcHBwcHCkO/Y66rimhkM1tKqzmYODg4ODg4ODg4ODg4ODY7qjOdxxNG+frOLg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OCY7Aj9M+Dg4ODg4ODg4ODg4ODg4PjKEev+cEYcHBwcHBwcHBwcHBwcHByJjlDLcMda3oqDg4ODg4ODg4ODg4ODgyPSCV7wh+HNgMmcAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTA4LTA5VDAyOjAyOjQ0KzAwOjAw39Y9SwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wOC0wOVQwMjowMjo0NCswMDowMK6LhfcAAAAASUVORK5CYII="),l=t.p+"static/media/github1.746ec8f0.png",a=t.p+"static/media/github-white.ad22d330.png",d=t(2),c={npm:{backgroundColor:"#C23231",color:"#fff",image:n,whiteImage:n,title:"NPM",height:"46px",whiteHeight:"50px"},github:{backgroundColor:"#24292e",color:"#fff",image:l,whiteImage:a,title:"GitHub",height:"55px",whiteHeight:"55px"}},r=[{key:"express-swagger-producer",title:"Express Swagger Producer",description:"express-swagger-producer express uygulamalar\u0131 i\xe7in yorum sat\u0131rlar\u0131n\u0131 kullanarak Swagger \xfcretebilmek i\xe7in kullan\u0131l\u0131r",type:"npm",link:"https://www.npmjs.com/package/express-swagger-producer"},{key:"mongoose-truck",title:"Mongoose Truck",description:"mongoose-truck ayn\u0131 veya farkl\u0131 MongoDb veritabanlar\u0131 aras\u0131nda veri ta\u015f\u0131nmas\u0131n\u0131 sa\u011flayan bir ara\xe7t\u0131r",type:"npm",link:"https://www.npmjs.com/package/mongoose-truck"},{key:"@techsmpl/cli",title:"Smpl CLI",description:"SMPL \u015firketinin geli\u015ftirme ak\u0131\u015flar\u0131ndaki i\u015fleri otomatize etmek i\xe7in geli\u015ftirilmi\u015f bir CLI arac\u0131d\u0131r",type:"npm",link:"https://www.npmjs.com/package/@techsmpl/cli"},{key:"techsmpl/smpl-swift-lib",title:"Smpl CLI",description:"SMPL \u015firketinin marketing otomasyonunun mobil uygulama taraf\u0131nda kullan\u0131lan bir Swift k\xfct\xfcphanesidir. Push bildirimleri ve Segmentasyon \xf6zellikleri i\xe7erir.",type:"github",link:"https://www.github.com/techsmpl/smpl-swift-lib"},{key:"onedocs/onpremise-storage-unit",title:"jetlexa-official/onpremise-storage-unit",description:"Onedocs uygulamas\u0131n\u0131n \u015firketlerinin dosyalar\u0131n\u0131 kendi sunucular\u0131nda saklamas\u0131n\u0131 sa\u011flayan a\xe7\u0131k kaynak kodlu bir sunucu alt yap\u0131s\u0131d\u0131r",type:"github",link:"https://github.com/jetlexa-official/onpremise-storage-unit"}],s=function(e){var i,t,o,n,l,a,r=c[null===e||void 0===e||null===(i=e.project)||void 0===i?void 0:i.type];return Object(d.jsx)("div",{className:"col-xl-4 col-lg-6 col-md-6 open-source-project-item",children:Object(d.jsx)("a",{href:null===e||void 0===e||null===(t=e.project)||void 0===t?void 0:t.link,target:"_blank",children:Object(d.jsxs)("div",{className:"item-container",style:{border:"2px solid ".concat(null===r||void 0===r?void 0:r.backgroundColor),backgroundColor:null===r||void 0===r?void 0:r.backgroundColor,color:"white"},children:[Object(d.jsx)("div",{className:"project-image-container",style:{backgroundColor:null===r||void 0===r?void 0:r.backgroundColor},children:Object(d.jsx)("img",{src:null===r||void 0===r?void 0:r.whiteImage,style:{height:null===r||void 0===r?void 0:r.whiteHeight}})}),Object(d.jsx)("div",{className:"project-key",children:null===e||void 0===e||null===(o=e.project)||void 0===o?void 0:o.key}),Object(d.jsx)("div",{className:"project-description",children:null===e||void 0===e||null===(n=e.project)||void 0===n?void 0:n.description}),Object(d.jsx)("div",{className:"project-link",children:Object(d.jsx)("a",{target:"_blank",style:{backgroundColor:null===r||void 0===r?void 0:r.backgroundColor,border:"2px solid white",color:null===r||void 0===r?void 0:r.color},href:null===e||void 0===e||null===(l=e.project)||void 0===l?void 0:l.link,children:null===e||void 0===e||null===(a=e.project)||void 0===a?void 0:a.key})})]})})})},u=window.innerWidth;i.default=function(e){return Object(d.jsxs)("div",{className:"container-fluid open-source-project-container",children:[Object(d.jsx)("h1",{style:Object(o.a)({},(null===e||void 0===e?void 0:e.hideTitle)&&{display:"none"}),children:"A\xe7\u0131k Kaynak Projelerim"}),Object(d.jsx)("div",{className:"container open-source-project",style:Object(o.a)({},(null===e||void 0===e?void 0:e.hideTitle)&&u<992&&{marginTop:"-40px"}),children:Object(d.jsx)("div",{className:"row open-source-project-row",children:(r||[]).map((function(e,i){return Object(d.jsx)(s,{project:e})}))})})]})}},123:function(e,i,t){},503:function(e,i,t){"use strict";t.r(i);var o=t(3),n=(t(1),t(116)),l=t(100),a=t(97),d=t(2);i.default=function(e){var i=Object(o.a)(Object(o.a)({},a.a),{},{title:"A\xe7\u0131k Kaynak Projelerim | Can G\xf6k\xe7easlan",description:"Bu sayfada a\xe7\u0131k kaynak olarak yay\u0131nlad\u0131\u011f\u0131m projelerime ula\u015fabilirsin",keywords:"cangokceaslan, Can G\xf6k\xe7easlan, Can Gokceaslan, CanGokceaslan, Node.js, NodeJs, JavaScript, Fullstack Developer, CoFounder, Giri\u015fim, Hakk\u0131mda, About Me",author:"Can G\xf6k\xe7easlan",locale:"tr",siteName:"https://www.cangokceaslan.com/open-source"});return Object(d.jsxs)("div",{children:[Object(d.jsx)(a.b,{docData:i}),Object(d.jsx)("h1",{style:{display:"none"},children:"A\xe7\u0131k Kaynak Projelerim"}),Object(d.jsx)(n.default,{hideTitle:!0}),Object(d.jsx)(l.default,{})]})}},97:function(e,i,t){"use strict";t.d(i,"a",(function(){return a}));var o=t(1),n=t(103),l=t(2),a={title:"Can G\xf6k\xe7easlan | Kurucu Ortak & FullStack Developer",description:"Merhabalar, ben Can G\xf6k\xe7easlan. \u015eu an bir giri\u015fimci ve online e\u011fitmenim. Benimle ilgili daha fazla bilgiye sahip olabilmek i\xe7in l\xfctfen sayfay\u0131 ziyaret edin.",keywords:"cangokceaslan, Can G\xf6k\xe7easlan, Can Gokceaslan, CanGokceaslan, Node.js, NodeJs, JavaScript, Fullstack Developer, CoFounder, Giri\u015fim",author:"Can G\xf6k\xe7easlan",image:"https://www.cangokceaslan.com/assets/jpg/courses/Iyzico.jpg?cache_delete=1",locale:"tr",siteName:"https://www.cangokceaslan.com",type:"website"};i.b=function(e){var i=e.docData,t=void 0===i?a:i,d=Object(o.useRef)(null),c="/assets/jpg/social.jpg";return Object(o.useEffect)((function(){if(void 0!==(null===t||void 0===t?void 0:t.structralData)){var e=document.createElement("script");e.type="application/ld+json",e.innerHTML=JSON.stringify(null===t||void 0===t?void 0:t.structralData),document.head.appendChild(e)}if(void 0!==(null===t||void 0===t?void 0:t.breadcrumb)){var i=document.createElement("script");i.type="application/ld+json",i.innerHTML=JSON.stringify(null===t||void 0===t?void 0:t.breadcrumb),document.head.appendChild(i)}}),[]),Object(l.jsxs)(n.a,{defer:!1,ref:d,children:[Object(l.jsx)("title",{children:null===t||void 0===t?void 0:t.title}),Object(l.jsx)("meta",{name:"description",content:null===t||void 0===t?void 0:t.description}),Object(l.jsx)("meta",{name:"keywords",content:null===t||void 0===t?void 0:t.keywords}),Object(l.jsx)("meta",{name:"author",content:null===t||void 0===t?void 0:t.author}),Object(l.jsx)("meta",{name:"image",content:(null===t||void 0===t?void 0:t.image)||c}),Object(l.jsx)("meta",{name:"locale",content:null===t||void 0===t?void 0:t.locale}),Object(l.jsx)("meta",{name:"siteName",content:null===t||void 0===t?void 0:t.siteName}),(null===t||void 0===t?void 0:t.video)&&Object(l.jsx)("meta",{name:"media:video",content:null===t||void 0===t?void 0:t.video}),(null===t||void 0===t?void 0:t.video)&&Object(l.jsx)("a",{href:null===t||void 0===t?void 0:t.video,style:{display:"none"},type:"video",target:"_blank",rel:"noopener noreferrer"}),!(null!==t&&void 0!==t&&t.video)&&Object(l.jsx)("meta",{name:"type",content:null!==t&&void 0!==t&&t.type?null===t||void 0===t?void 0:t.type:"website"}),(null===t||void 0===t?void 0:t.video)&&Object(l.jsx)("meta",{name:"type",content:"video"}),Object(l.jsx)("meta",{name:"og:title",content:null===t||void 0===t?void 0:t.title}),Object(l.jsx)("meta",{name:"og:description",content:null===t||void 0===t?void 0:t.description}),Object(l.jsx)("meta",{name:"og:image",content:(null===t||void 0===t?void 0:t.image)||c}),Object(l.jsx)("meta",{name:"og:locale",content:null===t||void 0===t?void 0:t.locale}),Object(l.jsx)("meta",{name:"og:site_name",content:null===t||void 0===t?void 0:t.siteName}),Object(l.jsx)("meta",{name:"og:type",content:"website"}),Object(l.jsx)("meta",{name:"og:author",content:null===t||void 0===t?void 0:t.author}),Object(l.jsx)("meta",{name:"og:type",content:null!==t&&void 0!==t&&t.type?null===t||void 0===t?void 0:t.type:"website"}),(null===t||void 0===t?void 0:t.video)&&Object(l.jsx)("meta",{name:"og:video",content:null===t||void 0===t?void 0:t.video}),(null===t||void 0===t?void 0:t.video)&&Object(l.jsx)("meta",{property:"og:video:secure_url",content:null===t||void 0===t?void 0:t.video}),(null===t||void 0===t?void 0:t.video)&&Object(l.jsx)("meta",{property:"og:video:type",content:"text/html"}),Object(l.jsx)("meta",{name:"twitter:title",content:null===t||void 0===t?void 0:t.title}),Object(l.jsx)("meta",{name:"twitter:description",content:null===t||void 0===t?void 0:t.description}),Object(l.jsx)("meta",{name:"twitter:image",content:(null===t||void 0===t?void 0:t.image)||c}),Object(l.jsx)("meta",{name:"twitter:site",content:null===t||void 0===t?void 0:t.siteName}),Object(l.jsx)("meta",{name:"twitter:creator",content:null===t||void 0===t?void 0:t.author}),null!==t&&void 0!==t&&t.video?Object(l.jsx)("meta",{name:"twitter:card",content:"player"}):Object(l.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(null===t||void 0===t?void 0:t.video)&&Object(l.jsx)("meta",{name:"twitter:player",content:null===t||void 0===t?void 0:t.video}),(null===t||void 0===t?void 0:t.video)&&Object(l.jsx)("meta",{name:"twitter:video",content:null===t||void 0===t?void 0:t.video}),Object(l.jsx)("meta",{name:"twitter:type",content:null!==t&&void 0!==t&&t.type?null===t||void 0===t?void 0:t.type:"website"}),(null===t||void 0===t?void 0:t.publishedTime)&&Object(l.jsx)("meta",{name:"article:published_time",content:null===t||void 0===t?void 0:t.publishedTime}),(null===t||void 0===t?void 0:t.modifiedTime)&&Object(l.jsx)("meta",{name:"article:modified_time",content:null===t||void 0===t?void 0:t.modifiedTime}),(null===t||void 0===t?void 0:t.section)&&Object(l.jsx)("meta",{name:"article:section",content:null===t||void 0===t?void 0:t.section}),(null===t||void 0===t?void 0:t.tag)&&Object(l.jsx)("meta",{name:"article:tag",content:null===t||void 0===t?void 0:t.tag})]})}},99:function(e,i,t){"use strict";var o=t(2);i.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loaded:!1,size:125,thick:25};return Object(o.jsx)("div",{className:"justify-content-center align-items-center d-flex",children:Object(o.jsx)("div",{className:"loader-container",children:Object(o.jsx)("div",{className:"spinner-border text-white loader",style:{width:(null===e||void 0===e?void 0:e.size)||125,height:(null===e||void 0===e?void 0:e.size)||125,fontSize:(null===e||void 0===e?void 0:e.thick)||25},role:"status",children:Object(o.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})}}}]);
//# sourceMappingURL=15.2c18bc6c.chunk.js.map