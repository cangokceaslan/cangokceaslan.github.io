(this.webpackJsonpcangokceaslan=this.webpackJsonpcangokceaslan||[]).push([[11,19,21],{100:function(e,i,t){"use strict";var o=t(2);i.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loaded:!1,size:125,thick:25};return Object(o.jsx)("div",{className:"justify-content-center align-items-center d-flex",children:Object(o.jsx)("div",{className:"loader-container",children:Object(o.jsx)("div",{className:"spinner-border text-white loader",style:{width:(null===e||void 0===e?void 0:e.size)||125,height:(null===e||void 0===e?void 0:e.size)||125,fontSize:(null===e||void 0===e?void 0:e.thick)||25},role:"status",children:Object(o.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})}},103:function(e,i,t){"use strict";t.r(i);var o=t(25),a=t(1),n=(t(104),t(100)),l=t(24),r=t(17),d=t.n(r),s=t(2);i.default=Object(l.b)((function(e){return{window:e.window.sizes,cms:e.cms}}),{})((function(e){var i,t,l,r,c,u,v,m,p,b,j,h,y,w,g,f,O,x,k,C,N,_=Object(a.useState)(null===e||void 0===e?void 0:e.courseNumber),z=Object(o.a)(_,2),E=z[0],S=z[1],F=function i(){var t,o,a,n=d.a.random(0,(null===e||void 0===e||null===(t=e.cms)||void 0===t?void 0:t.courses.length)-1);return null!==e&&void 0!==e&&null!==(o=e.cms)&&void 0!==o&&null!==(a=o.courses[n])&&void 0!==a&&a.free?i():n};Object(a.useEffect)((function(){var i,t;null!==e&&void 0!==e&&e.courseData||(null===e||void 0===e||null===(i=e.cms)||void 0===i||null===(t=i.courses)||void 0===t?void 0:t.length)>0&&S(void 0!==E?null===e||void 0===e?void 0:e.courseNumber:F())}),[null===e||void 0===e?void 0:e.courseNumber,null===e||void 0===e||null===(i=e.cms)||void 0===i||null===(t=i.courses)||void 0===t?void 0:t.length]);var D;D=(null===e||void 0===e?void 0:e.courseData)||(null===e||void 0===e||null===(l=e.cms)||void 0===l?void 0:l.courses[E||0]);var T,G=Object(a.useState)(!1),U=Object(o.a)(G,2),J=U[0],A=U[1],B=Object(a.useState)(""),P=Object(o.a)(B,2),I=P[0],L=P[1],H=Object(a.useState)(""),K=Object(o.a)(H,2),R=K[0],M=K[1],V=function(){var e,i,t=0;t=window.innerWidth<576?.529*window.screen.width:window.innerWidth>=576&&window.innerWidth<768?269:window.innerWidth>=768&&window.innerWidth<992?375:window.innerWidth>=992&&window.innerWidth<1200?230:(window.innerWidth,270),e="".concat(1.75*t,"px"),i="".concat(t,"px"),L(e),M(i),A(!0)};if(Object(a.useEffect)((function(){V()}),[]),Object(a.useLayoutEffect)((function(){V()}),[null===(r=e.window)||void 0===r?void 0:r.width,null===(c=e.window)||void 0===c?void 0:c.height]),!J)return Object(s.jsxs)("div",{className:"middle-content",style:{background:(null===(T=D)||void 0===T?void 0:T.primaryColor)||"#215733",padding:"10px 0px 10px 0px",minHeight:"350px",display:"flex",alignItems:"center",justifyContent:"center"},children:[" ",Object(s.jsx)(n.a,{loaded:!1})]});return 0===(null===e||void 0===e||null===(u=e.cms)||void 0===u||null===(v=u.courses)||void 0===v?void 0:v.length)?null:Object(s.jsx)("div",{className:"one-course",style:{background:(null===(m=D)||void 0===m?void 0:m.primaryColor)||"#215733"},children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"course-container",children:[Object(s.jsx)("div",{className:"course-video",children:null!==(p=D)&&void 0!==p&&p.youtubeEmbedUrl?Object(s.jsx)("div",{className:"video",children:Object(s.jsx)("div",{style:{maxHeight:"calc(".concat(R,")")},children:Object(s.jsx)("iframe",{width:I,height:R,src:"".concat((null===(b=D)||void 0===b?void 0:b.youtubeEmbedUrl)||"https://www.youtube.com/embed/h-Xx14d39vk","?fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&mute=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowFullScreen;",allowFullScreen:!0})})}):Object(s.jsx)("div",{className:"image",children:Object(s.jsx)("img",{src:(null===(j=D)||void 0===j||null===(h=j.thumbnail)||void 0===h||null===(y=h.data)||void 0===y||null===(w=y.attributes)||void 0===w?void 0:w.url.replace(".s3.eu-central-1.amazonaws.com","").replace("https://s3.eu-central-1.amazonaws.com/","https://"))||"https://via.placeholder.com/300x300",alt:"New Course",style:{width:I,height:R}})})}),Object(s.jsx)("div",{className:"course-description",children:Object(s.jsxs)("div",{className:"course",children:[Object(s.jsxs)("div",{className:"innerDetail",children:[Object(s.jsx)("div",{className:"tag",style:{border:"1px solid ".concat(null===(g=D)||void 0===g?void 0:g.secondaryColor)},children:null===(f=D)||void 0===f?void 0:f.tag}),Object(s.jsx)("div",{className:"title",style:{color:null===(O=D)||void 0===O?void 0:O.secondaryColor},children:null===(x=D)||void 0===x?void 0:x.title}),Object(s.jsx)("div",{className:"description",style:{color:null===(k=D)||void 0===k?void 0:k.secondaryColor},children:null===(C=D)||void 0===C?void 0:C.description}),Object(s.jsx)("div",{className:"link",children:Object(s.jsx)("p",{className:"paragraph",children:Object(s.jsx)("a",{href:function(){var e,i,t,o,a,n,l,r=null!==(e=D)&&void 0!==e&&e.referralCode?"?referralCode="+(null===(i=D)||void 0===i?void 0:i.referralCode):"?",d="";"?"===r?d=null!==(o=D)&&void 0!==o&&o.couponCode?"couponCode="+(null===(a=D)||void 0===a?void 0:a.couponCode):"":d=null!==(n=D)&&void 0!==n&&n.couponCode?"&couponCode="+(null===(l=D)||void 0===l?void 0:l.couponCode):"";return"".concat(null===(t=D)||void 0===t?void 0:t.url).concat(r).concat(d)}(),target:"_blank",className:"btn btn-course",style:{borderColor:null===(N=D)||void 0===N?void 0:N.secondaryColor},dangerouslySetInnerHTML:{__html:function(){var e,i,t;return null!==(e=D)&&void 0!==e&&e.free?"\xdccretsiz Olarak Kursa Kay\u0131t Ol":'<span style="text-decoration:line-through"}}>'.concat(null===(i=D)||void 0===i?void 0:i.price,"</span> yerine ").concat(null===(t=D)||void 0===t?void 0:t.discountedPrice,"'ye Kursa Kaydol")}()}})})})]}),Object(s.jsx)("div",{})]})})]})})})}))},104:function(e,i,t){},109:function(e,i,t){},110:function(e,i,t){e.exports={course:"Course_course__2Eyuw",url:"Course_url__FORuT",card:"Course_card__1wfTA",body:"Course_body__1DZO9",author:"Course_author___yjD4",information:"Course_information__Df8LL",price:"Course_price__2S15T",registered:"Course_registered__3ujv4",rating:"Course_rating__2gH-S",number:"Course_number__4NTap",stars:"Course_stars__27gjc","course-star":"Course_course-star__299oz"}},113:function(e,i,t){"use strict";t.r(i),t.d(i,"urlFromItem",(function(){return p}));var o=t(3),a=(t(1),t.p+"static/media/udemy.ac64b9eb.svg"),n=(t(109),t(24)),l=t(114),r=t(2);var d=function(e){var i=null===e||void 0===e?void 0:e.value,t=i,o=!1;i%1<.25?t=Math.floor(i):i%1>.75?t=Math.ceil(i):(t=Math.floor(i),o=!0);for(var a=new Array,n=0;n<t;n++)a.push(Object(r.jsx)(l.c,{className:"course-star"}));for(var d=new Array,s=0;s<5-(!0===o?1:0)-t;s++)d.push(Object(r.jsx)(l.b,{className:"course-star"}));for(var c=new Array,u=0;u<(!0===o?1:0);u++)c.push(Object(r.jsx)(l.d,{className:"course-star"}));return Object(r.jsx)("span",{children:[].concat(a,c,d)})},s=t(110),c=t.n(s),u=t(18),v=t.n(u),m=(window.innerWidth,Object(n.b)((function(e){return{cms:e.cms}}),{})((function(e){var i,t,o,a,n,l,s,u,m,p,b,j,h,y,w,g,f,O=null===e||void 0===e?void 0:e.item,x=function(e){var i=e.url,t=e.referralCode,o=e.couponCode,a=t?"referralCode="+t+"&":"",n=o?"couponCode="+o:"";return"".concat(i,"?").concat(a).concat(n)}(O);return Object(r.jsx)("div",{className:v()(c.a.course,(null===e||void 0===e?void 0:e.className)&&(null===e||void 0===e?void 0:e.className)),children:Object(r.jsx)("a",{className:c.a.url,href:x,target:"_blank",children:Object(r.jsxs)("div",{className:v()("card",c.a.card),style:{border:(null===e||void 0===e?void 0:e.border)||"none"},children:[Object(r.jsx)("img",{src:(null===O||void 0===O||null===(i=O.attributes)||void 0===i||null===(t=i.thumbnail)||void 0===t||null===(o=t.data)||void 0===o||null===(a=o.attributes)||void 0===a?void 0:a.url.replace(".s3.eu-central-1.amazonaws.com","").replace("https://s3.eu-central-1.amazonaws.com/","https://"))||"https://mapandan.gov.ph/wp-content/uploads/2018/03/no_image.jpg",width:"100%",height:"auto",style:{objectFit:"contain",background:null===O||void 0===O||null===(n=O.attributes)||void 0===n?void 0:n.primaryColor},alt:"..."}),Object(r.jsxs)("div",{className:v()("card-body",c.a.body),children:[Object(r.jsx)("h1",{children:null===O||void 0===O||null===(l=O.attributes)||void 0===l?void 0:l.title}),Object(r.jsx)("p",{className:c.a.author,onClick:function(){var e;window.open(null===O||void 0===O||null===(e=O.attributes)||void 0===e?void 0:e.authorUrl,"__blank")},children:null===O||void 0===O||null===(s=O.attributes)||void 0===s?void 0:s.author}),Object(r.jsxs)("p",{className:c.a.rating,children:[Object(r.jsx)("span",{className:c.a.number,children:null===O||void 0===O||null===(u=O.attributes)||void 0===u?void 0:u.star}),Object(r.jsx)("span",{className:c.a.stars,children:Object(r.jsx)(d,{value:null===O||void 0===O||null===(m=O.attributes)||void 0===m?void 0:m.starValue})})]}),Object(r.jsxs)("p",{className:c.a.information,children:["Toplam ",null===O||void 0===O||null===(p=O.attributes)||void 0===p?void 0:p.totalHours," - ",null===O||void 0===O||null===(b=O.attributes)||void 0===b?void 0:b.totalCourses," Ders - ",null===O||void 0===O||null===(j=O.attributes)||void 0===j?void 0:j.courseLevel]}),Object(r.jsxs)("p",{className:c.a.price,children:[null===O||void 0===O||null===(h=O.attributes)||void 0===h?void 0:h.discountedPrice,null!==O&&void 0!==O&&null!==(y=O.attributes)&&void 0!==y&&y.discountedPrice?Object(r.jsx)("span",{style:{textDecoration:"line-through",color:"#A7A7A7",marginLeft:"5px",marginTop:"-7px",fontSize:17},children:null===O||void 0===O||null===(w=O.attributes)||void 0===w?void 0:w.price}):null===O||void 0===O||null===(g=O.attributes)||void 0===g?void 0:g.price]}),Object(r.jsxs)("p",{className:c.a.registered,children:[null===O||void 0===O||null===(f=O.attributes)||void 0===f?void 0:f.registered," kay\u0131t"]})]})]})})})}))),p=function(e){var i=e.url,t=e.referralCode,o=e.couponCode,a=t?"referralCode="+t+"&":"",n=o?"couponCode="+o:"";return"".concat(i,"?").concat(a).concat(n)},b=window.innerWidth;i.default=Object(n.b)((function(e){return{cms:e.cms}}),{})((function(e){var i,t;return Object(r.jsxs)("section",{className:"courses",id:"courses",children:[!(null!==e&&void 0!==e&&e.hideTitle)&&Object(r.jsx)("h2",{className:"courses-header",children:Object(r.jsx)("img",{src:a,width:"128px",height:"58px",style:{marginRight:"5px"}})}),Object(r.jsx)("div",{className:"container-fluid top-container",children:Object(r.jsx)("div",{className:"courses container",style:Object(o.a)({},(null===e||void 0===e?void 0:e.hideTitle)&&(b<992?{marginTop:"-150px"}:{marginTop:"-148px"})),children:null===e||void 0===e||null===(i=e.cms)||void 0===i||null===(t=i.courses)||void 0===t?void 0:t.map((function(e,i){return Object(r.jsx)(m,{item:e},i)}))})})]})}))},142:function(e,i,t){"use strict";var o=t.p+"static/media/Iyzico.6a349551.webp",a=t.p+"static/media/NodeJs.631fe5f6.webp",n=t.p+"static/media/GitHub.ee3fbf50.webp",l=t.p+"static/media/Udemy.b294c6c9.webp",r=t.p+"static/media/Redis.dcebd759.webp";var d=[{id:"udemy",url:"https://www.udemy.com/user/cangokceaslan",thumbnail:l,primaryColor:"#7A0089",secondaryColor:"#000000",title:"Daha Fazla E\u011fitime Ula\u015fmak \u0130\xe7in Hemen Ziyaret Et",description:"Udemy Profili",author:"Can G\xf6k\xe7easlan",authorUrl:"https://www.udemy.com/user/cangokceaslan",star:"4.7",starValue:4.7,details:"Toplam 41 saat - 5 Kurs",free:!0,price:"\xdccretsiz",tag:"T\xfcm E\u011fitimler",discountedPrice:null,referralCode:"0017AFE73990096201B4",couponCode:null,registered:"41.000+",youtubeEmbedUrl:"https://www.youtube.com/embed/h-Xx14d39vk",promotionCover:null},{id:"github",url:"https://www.udemy.com/course/github-egitimi/",thumbnail:n,primaryColor:"#c9510c",secondaryColor:"white",title:"GitHub Nedir? GitHub Nas\u0131l Kullan\u0131l\u0131r? ( Github E\u011fitimi )",description:"GitHub'\u0131 \xf6\u011frenmek seni yaz\u0131l\u0131m alan\u0131nda en tepelere do\u011fru g\xf6t\xfcrecek. Hali haz\u0131rda GitHub \xfczerinde bulunan milyonlarca kod sayesinde hem bu i\u015fin nas\u0131l yap\u0131ld\u0131\u011f\u0131n\u0131 \xf6\u011frenecek hem de buradaki kodlardan yard\u0131m alarak kendini profesyonel bir geli\u015ftirici haline getireceksin.",author:"Can G\xf6k\xe7easlan",authorUrl:"https://www.udemy.com/user/cangokceaslan",star:"4,8",starValue:4.8,details:"Toplam 1,5 saat - 9 ders - Ba\u015flang\u0131\xe7",free:!0,price:"\xdccretsiz",tag:"\xdccretsiz E\u011fitim",discountedPrice:null,referralCode:"0017AFE73990096201B4",couponCode:null,registered:"7000+",youtubeEmbedUrl:"https://www.youtube.com/embed/wchDeesL_G0",promotionCover:null},{id:"javascript",url:"https://www.udemy.com/course/javascript-temelden-profesyonele-kurs-1/",thumbnail:t.p+"static/media/JavaScript.7bea7549.webp",primaryColor:"linear-gradient(90deg, rgba(255,252,0,1) 0%, rgba(247,225,25,1) 59%)",secondaryColor:"#000000",title:"JavaScript - S\u0131f\u0131rdan JavaScript Programlamaya Giri\u015f",description:"Bu e\u011fitimde sizler i\xe7in JavaScript'in \xf6nemli konular\u0131n\u0131 s\u0131ralayarak ve \xfczerinde durarak i\u015fledim. Bu sayede sizler JavaScript'e kolayca adapte olabilecek ve gitmek istedi\u011finiz noktaya zorluk ya\u015famadan gidebileceksiniz.",author:"Can G\xf6k\xe7easlan",authorUrl:"https://www.udemy.com/user/cangokceaslan",star:"4,0",starValue:4,details:"Toplam 8 saat - 55 Ders - Ba\u015flang\u0131\xe7",free:!1,price:"229,99 \u20ba",tag:"JavaScript E\u011fitimi",discountedPrice:"69,99 \u20ba",referralCode:"0017AFE73990096201B4",couponCode:"JAVASCRIPT4",registered:"36000+",youtubeEmbedUrl:"https://www.youtube.com/embed/DUyoVGirCLY",promotionCover:null,coupon:null},{id:"nodejs",url:"https://www.udemy.com/course/nodejs-egitimi-sifirdan-profesyonele/",thumbnail:a,primaryColor:"#215733",secondaryColor:"#FFFFFF",title:"Node.js E\u011fitimi - S\u0131f\u0131rdan Profesyonele NodeJs ve Javascript",description:"NodeJs, JavaScript, BabelJS, ExpressJs, PM2 gibi paketlerin kullan\u0131mlar\u0131n\u0131 sa\u011flayaca\u011f\u0131z. NPM \xfczerinden kodlar\u0131m\u0131z\u0131 a\xe7\u0131k kaynak hale getirip bunlar\u0131 kendi projelerimiz \xfcst\xfcnde kullanabilece\u011fiz. Bu sayede bir paketi belki de onlarca projede kullan\u0131rken tek bir yerden y\xf6netmeyi sa\u011flayaca\u011f\u0131z. ",author:"Can G\xf6k\xe7easlan",authorUrl:"https://www.udemy.com/user/cangokceaslan",star:"4.5",starValue:4.5,details:"Toplam 13,5 saat - 55 ders - Ba\u015flang\u0131\xe7",free:!1,price:"269,99 \u20ba",tag:"Node.js E\u011fitimi",discountedPrice:"69,99 \u20ba",referralCode:"0017AFE73990096201B4",couponCode:"NODEJS4",registered:"150+",youtubeEmbedUrl:"https://www.youtube.com/embed/Y4QYo27evbQ",promotionCover:null},{id:"iyzico",url:"https://www.udemy.com/course/iyzico-egitimi/",thumbnail:o,primaryColor:"linear-gradient(90deg, #340B99 0%, rgba(138,4,168,1) 100%)",secondaryColor:"#FFFFFF",title:"Iyzico ve Node.js ile \xd6deme Sistemi API Geli\u015ftirme Kursu",description:"Bu kursta Online \xd6deme Sistemlerinin nas\u0131l \xe7al\u0131\u015ft\u0131\u011f\u0131n\u0131 anlayacaks\u0131n. Teknoloji olarak Node.js kullanarak hem web hem de mobil / desktop uygulamalar\u0131 ile \xe7al\u0131\u015fabilen bir RESTful API yazaca\u011f\u0131z. Iyzico, Node.js, ExpressJs, MongoDb, Docker ve Heroku kullanaca\u011f\u0131z",author:"Can G\xf6k\xe7easlan",authorUrl:"https://www.udemy.com/user/cangokceaslan",star:"4.9",starValue:4.9,details:"Toplam 12 saat - 70 ders - Orta Seviye",free:!1,price:"269,99 \u20ba",tag:"Yeni ve Pop\xfcler E\u011fitim",discountedPrice:"69,99 \u20ba",referralCode:"AB661E934794EE4680F8",couponCode:"IYZICO4",registered:"100+",youtubeEmbedUrl:"https://www.youtube.com/embed/kaklCqcx3lg",promotionCover:t.p+"static/media/iyzico.780fae32.jpg"},{id:"redis",url:"https://www.udemy.com/course/redis-egitimi/",thumbnail:r,primaryColor:"#7A0D01",secondaryColor:"#FFFFFF",title:"Redis E\u011fitimi - Node.js ile Cache, Redis, Redis Pub/Sub",description:'Remote Dictionary Server (Uzak S\xf6zl\xfck Sunucusu) ifadesinin k\u0131saltmas\u0131 olan Redis h\u0131zl\u0131, a\xe7\u0131k kaynakl\u0131, bellek i\xe7i anahtar-de\u011fer veri deposudur. Stack Overflow\'dan be\u015f y\u0131l art arda "En Sevilen" veritaban\u0131 unvan\u0131n\u0131 alan Redis, bug\xfcn en pop\xfcler a\xe7\u0131k kaynakl\u0131 altyap\u0131lardan biridir.',author:"Can G\xf6k\xe7easlan",authorUrl:"https://www.udemy.com/user/cangokceaslan",star:"4.8",starValue:4.8,details:"Toplam 5,5 saat - 46 ders - Orta Seviye",free:!1,price:"229,99 \u20ba",tag:"Yeni ve Pop\xfcler E\u011fitim",discountedPrice:"69,99 \u20ba",referralCode:"D927ADC9CB3FEA5B1ABB",couponCode:"REDIS4",registered:"Yeni",youtubeEmbedUrl:"https://www.youtube.com/embed/egBLr3KjEn8",promotionCover:null}].reverse().map((function(e){var i=new Date,t=12*(i.getFullYear()-2022),o=i.getMonth()+1+t;return e.currentCouponCodeNumber=o,e.couponCode=e.id.toUpperCase()+o,e}));i.a=d},508:function(e,i,t){"use strict";t.r(i);var o=t(1),a=t.n(o),n=t(5),l=t(113),r=t(142),d=t(103),s=t(99),c=t(2),u=function(){var e={"@context":"http://schema.org","@type":"ItemList",itemListElement:[]},i=(r.a||[]).map((function(e,i){return{"@type":"ListItem",position:i+1,url:"https://www.cangokceaslan.com/course/"+e.id}}));return e.itemListElement=i,e};i.default=Object(n.i)((function(e){var i={title:"E\u011fitimlerim | Can G\xf6k\xe7easlan",description:"En son online e\u011fitimlerime bu sayfadan ula\u015fabilirsiniz",keywords:"Udemy kurslar\u0131m, Udemy, Node.js, Video Kurs, Video Kurslar\u0131m, Udemy, Udemy JavaScript, Udemy \xdccretsiz Kurslar, Node.js, NodeJs, JavaScript, Fullstack Developer, CoFounder, Giri\u015fim",author:"Can G\xf6k\xe7easlan",locale:"tr",image:"https://www.cangokceaslan.com/assets/jpg/courses/Iyzico.jpg",siteName:"https://www.cangokceaslan.com/courses",snippetData:u()};return Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)(s.a,{docData:i}),Object(c.jsx)("h1",{style:{display:"none"},children:"Kurslar\u0131m"}),Object(c.jsx)(l.default,{hideTitle:!0}),Object(c.jsx)(d.default,{})]})}))},98:function(e,i,t){"use strict";t.d(i,"a",(function(){return l}));var o=t(1),a=t(102),n=t(2),l={title:"Can G\xf6k\xe7easlan | Kurucu Ortak & FullStack Developer",description:"Merhabalar, ben Can G\xf6k\xe7easlan. \u015eu an bir giri\u015fimci ve online e\u011fitmenim. Benimle ilgili daha fazla bilgiye sahip olabilmek i\xe7in l\xfctfen sayfay\u0131 ziyaret edin.",keywords:"cangokceaslan, Can G\xf6k\xe7easlan, Can Gokceaslan, CanGokceaslan, Node.js, NodeJs, JavaScript, Fullstack Developer, CoFounder, Giri\u015fim",author:"Can G\xf6k\xe7easlan",image:"https://www.cangokceaslan.com/assets/jpg/courses/Iyzico.jpg?cache_delete=1",locale:"tr",siteName:"https://www.cangokceaslan.com",type:"website"};i.b=function(e){var i=e.docData,t=void 0===i?l:i,r=Object(o.useRef)(null),d="/assets/jpg/social.jpg";return Object(o.useEffect)((function(){if(void 0!==(null===t||void 0===t?void 0:t.structralData)){var e=document.createElement("script");e.type="application/ld+json",e.innerHTML=JSON.stringify(null===t||void 0===t?void 0:t.structralData),document.head.appendChild(e)}if(void 0!==(null===t||void 0===t?void 0:t.breadcrumb)){var i=document.createElement("script");i.type="application/ld+json",i.innerHTML=JSON.stringify(null===t||void 0===t?void 0:t.breadcrumb),document.head.appendChild(i)}}),[]),Object(n.jsxs)(a.a,{defer:!1,ref:r,children:[Object(n.jsx)("title",{children:null===t||void 0===t?void 0:t.title}),Object(n.jsx)("meta",{name:"description",content:null===t||void 0===t?void 0:t.description}),Object(n.jsx)("meta",{name:"keywords",content:null===t||void 0===t?void 0:t.keywords}),Object(n.jsx)("meta",{name:"author",content:null===t||void 0===t?void 0:t.author}),Object(n.jsx)("meta",{name:"image",content:(null===t||void 0===t?void 0:t.image)||d}),Object(n.jsx)("meta",{name:"locale",content:null===t||void 0===t?void 0:t.locale}),Object(n.jsx)("meta",{name:"siteName",content:null===t||void 0===t?void 0:t.siteName}),(null===t||void 0===t?void 0:t.video)&&Object(n.jsx)("meta",{name:"media:video",content:null===t||void 0===t?void 0:t.video}),(null===t||void 0===t?void 0:t.video)&&Object(n.jsx)("a",{href:null===t||void 0===t?void 0:t.video,style:{display:"none"},type:"video",target:"_blank",rel:"noopener noreferrer"}),!(null!==t&&void 0!==t&&t.video)&&Object(n.jsx)("meta",{name:"type",content:null!==t&&void 0!==t&&t.type?null===t||void 0===t?void 0:t.type:"website"}),(null===t||void 0===t?void 0:t.video)&&Object(n.jsx)("meta",{name:"type",content:"video"}),Object(n.jsx)("meta",{name:"og:title",content:null===t||void 0===t?void 0:t.title}),Object(n.jsx)("meta",{name:"og:description",content:null===t||void 0===t?void 0:t.description}),Object(n.jsx)("meta",{name:"og:image",content:(null===t||void 0===t?void 0:t.image)||d}),Object(n.jsx)("meta",{name:"og:locale",content:null===t||void 0===t?void 0:t.locale}),Object(n.jsx)("meta",{name:"og:site_name",content:null===t||void 0===t?void 0:t.siteName}),Object(n.jsx)("meta",{name:"og:type",content:"website"}),Object(n.jsx)("meta",{name:"og:author",content:null===t||void 0===t?void 0:t.author}),Object(n.jsx)("meta",{name:"og:type",content:null!==t&&void 0!==t&&t.type?null===t||void 0===t?void 0:t.type:"website"}),(null===t||void 0===t?void 0:t.video)&&Object(n.jsx)("meta",{name:"og:video",content:null===t||void 0===t?void 0:t.video}),(null===t||void 0===t?void 0:t.video)&&Object(n.jsx)("meta",{property:"og:video:secure_url",content:null===t||void 0===t?void 0:t.video}),(null===t||void 0===t?void 0:t.video)&&Object(n.jsx)("meta",{property:"og:video:type",content:"text/html"}),Object(n.jsx)("meta",{name:"twitter:title",content:null===t||void 0===t?void 0:t.title}),Object(n.jsx)("meta",{name:"twitter:description",content:null===t||void 0===t?void 0:t.description}),Object(n.jsx)("meta",{name:"twitter:image",content:(null===t||void 0===t?void 0:t.image)||d}),Object(n.jsx)("meta",{name:"twitter:site",content:null===t||void 0===t?void 0:t.siteName}),Object(n.jsx)("meta",{name:"twitter:creator",content:null===t||void 0===t?void 0:t.author}),null!==t&&void 0!==t&&t.video?Object(n.jsx)("meta",{name:"twitter:card",content:"player"}):Object(n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(null===t||void 0===t?void 0:t.video)&&Object(n.jsx)("meta",{name:"twitter:player",content:null===t||void 0===t?void 0:t.video}),(null===t||void 0===t?void 0:t.video)&&Object(n.jsx)("meta",{name:"twitter:video",content:null===t||void 0===t?void 0:t.video}),Object(n.jsx)("meta",{name:"twitter:type",content:null!==t&&void 0!==t&&t.type?null===t||void 0===t?void 0:t.type:"website"}),(null===t||void 0===t?void 0:t.publishedTime)&&Object(n.jsx)("meta",{name:"article:published_time",content:null===t||void 0===t?void 0:t.publishedTime}),(null===t||void 0===t?void 0:t.modifiedTime)&&Object(n.jsx)("meta",{name:"article:modified_time",content:null===t||void 0===t?void 0:t.modifiedTime}),(null===t||void 0===t?void 0:t.section)&&Object(n.jsx)("meta",{name:"article:section",content:null===t||void 0===t?void 0:t.section}),(null===t||void 0===t?void 0:t.tag)&&Object(n.jsx)("meta",{name:"article:tag",content:null===t||void 0===t?void 0:t.tag})]})}},99:function(e,i,t){"use strict";var o=t(98);i.a=o.b}}]);