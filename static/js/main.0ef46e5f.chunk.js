(this.webpackJsonpcangokceaslan=this.webpackJsonpcangokceaslan||[]).push([[5],{102:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(15),o=a.n(r),c=a(24),l=a(31),s=a.n(l),d=(a(69),a(57)),u=(a(70),a(14)),b=a(5),p=a(29),h=a(2);var j=function(e){var t=Object(b.h)();return Object(n.useEffect)((function(){window.scrollY>0&&window.scrollTo(0,0),p.a.send({hitType:"pageview",page:t.pathname,title:document.title})}),[t]),Object(h.jsx)("div",{})},v=a(35),g=a(25),O=a(23),m=a(44),f=a(60),y=a.p+"static/media/logo9.c0fd3566.webp",S=(a(79),a(36)),x={Home:{id:"home-screen-click-link",title:"Ana Sayfa",internal:!0,pathname:"/",Icon:O.d},About:{id:"about-screen-click-link",title:"Hakk\u0131mda",internal:!0,pathname:"/hakkimda",Icon:O.b},Courses:{id:"courses-screen-click-link",title:"E\u011fitimlerim",internal:!0,pathname:"/egitimlerim",Icon:S.m},Blog:{id:"blogs-screen-click-link",title:"Yaz\u0131lar\u0131m",internal:!0,pathname:"/yazilarim",Icon:m.a},MessageMe:{id:"open-source-screen-click-link",title:"Projelerim",internal:!0,pathname:"/acik-kaynak-projelerim",Icon:f.a},Contact:{id:"contact-screen-click-link",title:"Sosyal Medya",internal:!0,pathname:"/sosyal-medya",Icon:O.a}},_=function(e,t,a){return Object.keys(x).map((function(n,i){var r=x[n];return Object(h.jsxs)("div",{className:"navbar-bottom-flex ".concat((null===r||void 0===r?void 0:r.pathname)===t&&"active"),onClick:function(t){null!==r&&void 0!==r&&r.internal?e.push(r.pathname):window.open(r.pathname,"_blank"),a()},children:[Object(h.jsx)(r.Icon,{size:"24px",color:"black"}),Object(h.jsx)("div",{className:"navbar-bottom-link",children:null===r||void 0===r?void 0:r.title})]},"navbar_item_"+i)}))},C=function(e,t,a,n){return Object.keys(x).map((function(i,r){var o=x[i];return Object(h.jsxs)("div",{className:"navbar-bottom-responsive-flex ".concat((null===o||void 0===o?void 0:o.pathname.includes)===a&&"active"),onClick:function(a){e.current.style.display="none",e.current.classList.remove("animate__slideInDown"),e.current.classList.add("animate__slideOutUp"),null!==o&&void 0!==o&&o.internal?t.push(o.pathname):window.open(o.pathname,"_blank"),n()},children:[Object(h.jsx)("div",{children:Object(h.jsx)(o.Icon,{size:"24px",color:"black"})}),Object(h.jsx)("div",{id:null===o||void 0===o?void 0:o.id,className:"navbar-bottom-responsive-link",children:null===o||void 0===o?void 0:o.title})]},"navbar_item_"+r)}))},E=function(e){var t=e.menuRef;return Object(h.jsx)("div",{onClick:function(e){t.current.style.display="block",t.current.classList.contains("animate__slideInDown")?(t.current.classList.remove("animate__slideInDown"),t.current.classList.add("animate__slideOutUp")):(t.current.classList.contains("animate__slideOutUp"),t.current.classList.remove("animate__slideOutUp"),t.current.classList.add("animate__slideInDown"))},className:"navbar-menu-toggler",children:Object(h.jsx)("div",{className:"navbar-menu-toggler-icon-container",children:Object(h.jsx)(O.c,{style:{marginTop:"10px"},size:"28px",color:"black"})})})},A=function(e){var t=Object(b.g)(),a=Object(n.useState)(t.location.pathname),r=Object(g.a)(a,2),o=r[0],c=r[1],l=Object(n.useState)(0),s=Object(g.a)(l,2),d=s[0],p=s[1],j=Object(n.useState)(!1),v=Object(g.a)(j,2),O=(v[0],v[1]);Object(n.useEffect)((function(){var e=function(e){p(e.target.documentElement.scrollTop),e.target.documentElement.scrollTop>190?O(!0):O(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[d]);var m=i.a.useRef(null);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("nav",{className:"navbar",children:[Object(h.jsxs)("div",{className:"container navbar-top-container",children:[Object(h.jsx)(E,{menuRef:m}),Object(h.jsx)("div",{onClick:function(){window.location.href="/"},className:"navbar-logo-container",children:Object(h.jsx)(u.b,{to:{pathname:"/"},children:Object(h.jsx)("img",{className:"logo",src:y})})})]}),Object(h.jsx)("div",{className:"seperator"}),Object(h.jsx)("div",{className:"container-fluid navbar-bottom-container",children:Object(h.jsx)("div",{className:"container navbar-bottom-container",style:{display:"flex"},children:_(t,o,(function(){c(t.location.pathname)}))})}),Object(h.jsx)("div",{ref:m,className:"container-fluid navbar-bottom-container-responsive animate__animated animate__fast",style:{display:"none"},children:C(m,t,o,(function(){c(t.location.pathname)}))})]})})},k=a(45),w=(a(80),function(e){return Object(h.jsxs)("footer",{className:"footer",style:{borderTop:"1px solid white"},children:[Object(h.jsx)("div",{className:"container-fluid",style:{marginBottom:"60px"},children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-lg-7 footerInfo",children:[Object(h.jsxs)("div",{className:"footerInfoRow",children:[Object(h.jsx)("img",{className:"photo",src:k.a,width:"100px",height:"100px",alt:"Can G\xf6k\xe7easlan'\u0131n ana resimi"}),Object(h.jsxs)("div",{className:"information",children:[Object(h.jsx)("b",{children:"Can G\xf6k\xe7easlan"}),Object(h.jsx)("p",{children:"Kurucu Ortak & FullStack Developer"})]})]}),Object(h.jsxs)("div",{className:"intro-text",style:{textAlign:"justify"},children:[Object(h.jsx)("p",{children:"Merhabalar, ben Can G\xf6k\xe7easlan"}),"Bilgisayar teknolojileri ile ADSL'in ilk y\u0131llar\u0131nda tan\u0131\u015ft\u0131m. Merak\u0131m \xf6nce bir tutkuya ve bu g\xfcnde her an\u0131ndan keyif ald\u0131\u011f\u0131m mesle\u011fime d\xf6n\xfc\u015ft\xfc. 2010'lu y\u0131llar\u0131n ilk \xe7eyre\u011finde geli\u015fmeye ba\u015flayan ",Object(h.jsx)("strong",{children:"web ve mobil uygulama"})," d\xfcnyas\u0131n\u0131n d\xf6n\xfc\u015f\xfcm\xfcne odakland\u0131m. Lise \xe7a\u011flar\u0131mda bu teknolojileri tam anlam\u0131yla kullanam\u0131yordum. \u0130yi bir e\u011fitim \u015fartt\u0131. Bu ama\xe7la 2013 y\u0131l\u0131nda ",Object(h.jsx)("strong",{children:"Bo\u011fazi\xe7i \xdcniversitesi Fizik B\xf6l\xfcm\xfc'ne"})," girdim. Uzun bir bocalama d\xf6neminden sonra teknolojileri daha sistematik \u015fekilde kavramay\u0131 \xf6\u011frendim. Bu s\xfcre\xe7te hedeflerim aras\u0131na web ve mobil teknoloji alan\u0131nda online e\u011fitim vermek eklendi. Heyecanl\u0131 bir a",Object(h.jsx)("strong",{children:"mat\xf6r olarak teknoloji i\xe7erikleri \xfcretmeye ba\u015flad\u0131m."}),"2020 y\u0131l\u0131nda, \xfcniversiteden mezun olurken teknoloji giri\u015fimcisi ve CTO oldum. Birbirimize her zaman destek oldu\u011fumuz sevgili ortaklar\u0131mla bu yolculu\u011fa ba\u015flad\u0131k ve hala devam ediyoru \u0130lk projemiz ",Object(h.jsx)("a",{href:"https://www.barty.app",children:"Barty"})," ad\u0131ndan c2c paras\u0131z al\u0131veri\u015fi sa\u011flayan bir Fintech giri\u015fimiydi. ",Object(h.jsx)("a",{href:"https://webrazzi.com/2021/09/01/parasiz-alisveris-platformu-barty-keiretsu-forum-turkiyeden-2-milyon-dolar-degerleme-uzerinden-yatirim-aldi/",children:"USD 2 mln"})," de\u011ferleme \xfczerinden 2 tur yat\u0131r\u0131m ald\u0131k ve 200.000 aktif kullan\u0131c\u0131ya ula\u015ft\u0131 \u015eirketimizi hedefledi\u011fimizin 3'te 1'i kadar b\xfcy\xfct\xfcnce yeni bir i\u015f modeline evrildik. ",Object(h.jsx)("a",{href:"http://Barty Digital",children:Object(h.jsx)("strong",{children:"Barty Digital"})})," yaz\u0131l\u0131m ajans\u0131 ile giri\u015fimlere ve \u015firketlere full stack mobil ve web deneyimleri yap\u0131yoruz. Buradan gelen fonla da yeni giri\u015fimler olu\u015fturmaya devam ediyoru Bu yolculuktaki hem teknik hem de ticari \xf6\u011frenimlerimi payla\u015fma zaman\u0131 geldi. Amat\xf6r olarak ba\u015flad\u0131\u011f\u0131m i\xe7erik \xfcretimini profesyonel bir seviyeye \xe7\u0131kard\u0131m. ",Object(h.jsx)("a",{href:"https://www.udemy.com/user/cangokceaslan",children:Object(h.jsx)("strong",{children:"Udemy"})})," platformunda ",Object(h.jsx)("strong",{children:"50.000 \xf6\u011frenciye"})," online e\u011fitim verme \u015fans\u0131m oldu. \u0130lerleyen s\xfcre\xe7te online e\u011fitimleri \u0130ngilizce olarak verece\u011fi Benimle ileti\u015fime ge\xe7mek i\xe7in sosyal medya kanallar\u0131m\u0131 rahatl\u0131kla kullanabilirsini Geli\u015fmeye ve \xfcretmeye devam!",Object(h.jsx)("p",{children:"-Can G\xf6k\xe7easlan"})]})]}),Object(h.jsx)("div",{className:"col-lg-1 d-none"}),Object(h.jsxs)("div",{className:"col-lg-4 spotify",children:[Object(h.jsx)("h5",{style:{marginTop:30,textAlign:"center"},children:"Kod yazarken dinleyebilece\u011fin bir oynatma listesi"}),Object(h.jsx)("div",{className:"justify-content-center align-items-center",children:Object(h.jsx)("iframe",{src:"https://open.spotify.com/embed/playlist/4oNpF23olYx1tp0gpD8bjC?theme=0",width:"100%",height:"550px",frameBorder:"0",allowFullScreen:!0,allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"})})]})]})})}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"col-12 d-flex justify-content-center align-items-center",children:Object(h.jsx)("div",{style:{height:"70px",alignItems:"center",display:"flex"},children:Object(h.jsxs)("div",{className:"copyright",children:[Object(h.jsx)("i",{className:"fa fa-copyright",style:{fontSize:"15px"}}),"\u24b8"," ",(new Date).getFullYear()," Bu Websitesinin T\xfcm haklar\u0131 sakl\u0131d\u0131r"]})})})]})}),L=i.a.lazy((function(){return Promise.all([a.e(0),a.e(17)]).then(a.bind(null,507))})),T=i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(12)]).then(a.bind(null,508))})),M=i.a.lazy((function(){return Promise.all([a.e(0),a.e(16)]).then(a.bind(null,520))})),F=i.a.lazy((function(){return Promise.all([a.e(0),a.e(3),a.e(10)]).then(a.bind(null,509))})),D=i.a.lazy((function(){return a.e(27).then(a.bind(null,510))})),z=i.a.lazy((function(){return a.e(26).then(a.bind(null,511))})),G=i.a.lazy((function(){return Promise.all([a.e(0),a.e(15)]).then(a.bind(null,512))})),I=i.a.lazy((function(){return a.e(29).then(a.bind(null,521))})),N=i.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(11)]).then(a.bind(null,513))})),P=i.a.lazy((function(){return Promise.all([a.e(0),a.e(18)]).then(a.bind(null,514))})),R=i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(3),a.e(9)]).then(a.bind(null,515))})),U=i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(7)]).then(a.bind(null,519))})),B=i.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(13)]).then(a.bind(null,516))})),W=i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(20)]).then(a.bind(null,517))})),Y=i.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(14)]).then(a.bind(null,522))})),H=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(A,{}),Object(h.jsx)("div",{className:"home-stack-component-root",children:Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.b,{path:"/",exact:!0,children:Object(h.jsx)(L,{})}),Object(h.jsx)(b.b,{path:["/social","/sosyal-medya"],children:Object(h.jsx)(M,{})}),Object(h.jsx)(b.b,{path:["/about","/hakkimda"],children:Object(h.jsx)(T,{})}),Object(h.jsx)(b.b,{path:["/courses","/egitimlerim"],exact:!0,children:Object(h.jsx)(N,{})}),Object(h.jsx)(b.b,{path:["/kategori/:path"],children:Object(h.jsx)(R,{})}),":",Object(h.jsx)(b.b,{path:["/yazilarim/:path"],component:function(e){return Object(h.jsx)(b.a,{to:"/kategori/"+e.match.params.path})}}),Object(h.jsx)(b.b,{path:["/articles","/yazilarim"],children:Object(h.jsx)(F,{})}),Object(h.jsx)(b.b,{path:["/post/:id","/yazi/:id"],children:Object(h.jsx)(U,{})}),Object(h.jsx)(b.b,{path:["/projects","/projelerim","/open-source","/acik-kaynak-projelerim"],children:Object(h.jsx)(G,{})}),Object(h.jsx)(b.b,{path:["/course/:key","/courses/:key","/egitimlerim/:key","/kurs/:key"],children:Object(h.jsx)(B,{})}),Object(h.jsx)(b.b,{path:["/video/latest"],children:Object(h.jsx)(W,{})}),Object(h.jsx)(b.b,{path:["/calendar"],children:Object(h.jsx)(P,{})}),Object(h.jsx)(b.b,{path:["/video/:id","/watch/:id","/izle/:id"],children:Object(h.jsx)(W,{})}),Object(h.jsx)(b.b,{path:"/stack",children:Object(h.jsx)(b.b,{path:["/stack/:stack/:key"],children:Object(h.jsx)(D,{})})}),Object(h.jsx)(b.b,{path:"/currency",children:Object(h.jsx)(b.b,{path:["/currency/:stack/:key"],children:Object(h.jsx)(z,{})})}),Object(h.jsx)(b.b,{path:"/shorts/:id",children:Object(h.jsx)(Y,{})}),Object(h.jsx)(b.b,{children:Object(h.jsx)(I,{})})]})}),Object(h.jsx)(w,{})]})},V=function(e){return Object(n.useEffect)((function(){window.addEventListener("load",(function(){var e=window;null!==e&&void 0!==e&&e.Superpeer&&(window.location.href.includes("/dashboard")||window.location.href.includes("/admin")||new e.Superpeer.Widget({embed:{type:"popup"},launcher:{type:"profile-avatar",options:{}},config:{username:"cangokceaslan",serviceSlug:""}}))}))}),[]),Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)(d.a,{}),Object(h.jsx)(i.a.Suspense,{fallback:Object(h.jsx)(v.a,{loaded:!0}),children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(j,{}),Object(h.jsx)(b.d,{children:Object(h.jsx)(b.b,{path:"/",children:Object(h.jsx)(H,{})})})]})})]})},q=(a(81),a(82),a(3)),J="WINDOW/UPDATE_WINDOW_SIZE",X="WINDOW/UPDATE_WINDOW_SCROLLS",Z={sizes:{width:window.innerWidth,height:window.innerHeight},scrolls:{y:window.scrollY,x:window.scrollX}},K=(a(46),a(83),a(26)),$=Object(c.b)((function(e){return{cms:e.cms}}),{updateWindowSize:function(e){return function(t){t({type:J,payload:e})}},updateWindowScrolls:function(e){return function(t){console.log(e),t({type:X,payload:e})}},getCourses:K.g})((function(e){return Object(n.useEffect)((function(){var t,a;return 0===(null===e||void 0===e||null===(t=e.cms)||void 0===t||null===(a=t.courses)||void 0===a?void 0:a.length)&&(null===e||void 0===e||e.getCourses({})),window.onresize=function(){e.updateWindowSize({width:window.innerWidth,height:window.innerHeight})},window.onscroll=function(){e.updateWindowScrolls({scrollX:window.scrollX,scrollY:window.scrollY})},s.a.locale("tr"),console.log=function(){},console.error=function(){},console.warn=function(){},console.table=function(){},function(){window.onresize=null,window.onscroll=null}}),[]),Object(n.useEffect)((function(){}),[]),Object(h.jsx)(V,{})})),Q=function(e){e&&e instanceof Function&&a.e(31).then(a.bind(null,518)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),r(e),o(e)}))},ee=a(16),te=a(62),ae=a(56),ne=Object(ee.b)({modals:ae.a,window:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(q.a)(Object(q.a)({},e),{},{sizes:t.payload});case X:return Object(q.a)(Object(q.a)({},e),{},{scrolls:Object(q.a)(Object(q.a)({},e.scrolls),{},{x:t.payload.scrollX,y:t.payload.scrollY})});default:return e}},cms:K.a}),ie=ne,re=ee.c;localStorage.getItem("reduxState")&&JSON.parse(function(e){var t=localStorage.getItem(e);if(!t)return null;var a=JSON.parse(t);return(new Date).getTime()>a.expiry?(localStorage.removeItem(e),{}):null===a||void 0===a?void 0:a.value}("reduxState"));var oe=re(Object(ee.a)(te.a)),ce=Object(ee.d)(ie,oe);ce.subscribe((function(){!function(e,t,a){new Date;var n={value:t};localStorage.setItem(e,JSON.stringify(n))}("reduxState",JSON.stringify(ce.getState()))}));Object(p.b)();var le=ce;o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(c.a,{store:le,children:Object(h.jsx)($,{})})}),document.getElementById("cangokceaslan")),Q()},12:function(e,t,a){e.exports={logoLoader:"LogoLoader_logoLoader__1-vLt",logoLoaderBackground:"LogoLoader_logoLoaderBackground__SVZxK",loaderContainer:"LogoLoader_loaderContainer__1Fyn9",logoCenter:"LogoLoader_logoCenter__2Evz4",spinner:"LogoLoader_spinner__oRjy0",loader:"LogoLoader_loader__rPioz",seperator:"LogoLoader_seperator__3_mvF",bottomLoader:"LogoLoader_bottomLoader__XHPIl",normalSpinner:"LogoLoader_normalSpinner__3WhqP"}},26:function(e,t,a){"use strict";a.d(t,"h",(function(){return W})),a.d(t,"c",(function(){return Y})),a.d(t,"i",(function(){return H})),a.d(t,"f",(function(){return V})),a.d(t,"e",(function(){return q})),a.d(t,"d",(function(){return J})),a.d(t,"j",(function(){return X})),a.d(t,"b",(function(){return Z})),a.d(t,"g",(function(){return K}));var n=a(10),i=a(13),r=a(3),o=a(61),c=a.n(o).a.create({baseURL:"https://services.cangokceaslan.com/api",withCredentials:!1,headers:{Authorization:"Bearer ".concat("fba9cf36130f166a0bd411e4b9b89d53f43d588ddefd2a0d91dd9ad6eb48249ae6388db5ff9b93225a79347d5aad9418fcc0adce3d1d450341940ec28d3a54fa050b0d57deadc6aea61c2d8f39e0a5c09efab614653657be64069c74b356b69114b8aaea1be1c004a149de0f635d8ca1c58c0de11cc29d419d020e310cba9c6d")}}),l=a(17),s=a.n(l),d="CMS/GET_MAIN_ARTICLES",u="CMS/GET_MAIN_ARTICLES_SUCCESS",b="CMS/GET_MAIN_ARTICLES_FAILED",p="CMS/GET_ARTICLE",h="CMS/GET_ARTICLE_SUCCESS",j="CMS/GET_ARTICLE_FAILED",v="CMS/GET_POPULAR_ARTICLES",g="CMS/GET_POPULAR_ARTICLES_SUCCESS",O="CMS/GET_POPULAR_ARTICLES_FAILED",m="CMS/GET_CATEGORY_DETAILS",f="CMS/GET_CATEGORY_DETAILS_SUCCESS",y="CMS/GET_CATEGORY_DETAILS_FAILED",S="CMS/GET_CATEGORY_ARTICLES",x="CMS/GET_CATEGORY_ARTICLES_SUCCESS",_="CMS/GET_CATEGORY_ARTICLES_FAILED",C="CMS/GET_CATEGORIES",E="CMS/GET_CATEGORIES_SUCCESS",A="CMS/GET_CATEGORIES_FAILED",k="CMS/GET_POPULAR_SHORTS",w="CMS/GET_POPULAR_SHORTS_SUCCESS",L="CMS/GET_POPULAR_SHORTS_FAILED",T="CMS/GET_SHORT",M="CMS/GET_SHORT_SUCCESS",F="CMS/GET_SHORT_FAILED",D="CMS/GET_VIDEO",z="CMS/GET_VIDEO_SUCCESS",G="CMS/GET_VIDEO_FAILED",I="CMS/GET_ABOUT_ME",N="CMS/GET_ABOUT_ME_SUCCESS",P="CMS/GET_ABOUT_ME_FAILED",R="CMS/GET_COURSES",U="CMS/GET_COURSES_SUCCESS",B="CMS/GET_COURSES_FAILED",W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{searchText:void 0,page:1,populate:"*",pagination:{pageSize:6,page:1,withCount:!0},sort:"createdAt:desc"};return function(t,a){var n,i,r;return t({type:d,payload:e}),c.get("/blogs",{params:{"pagination[pageSize]":null===e||void 0===e||null===(n=e.pagination)||void 0===n?void 0:n.pageSize,"pagination[page]":null===e||void 0===e||null===(i=e.pagination)||void 0===i?void 0:i.page,"pagination[withCount]":null===e||void 0===e||null===(r=e.pagination)||void 0===r?void 0:r.withCount,populate:null===e||void 0===e?void 0:e.populate,sort:null===e||void 0===e?void 0:e.sort}}).then((function(e){return t({type:u,payload:e.data}),e.data})).catch((function(e){var a;return t({type:b,payload:e}),null===(a=e.response)||void 0===a?void 0:a.data}))}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{path:void 0};return function(t,a){return t({type:p,payload:e}),c.get("/blogs/".concat(null===e||void 0===e?void 0:e.path),{params:{populate:["coverImage","categories","education","education.thumbnail"]}}).then((function(e){var a,n,i,o;return t({type:h,payload:{data:Object(r.a)({},null===(a=e.data)||void 0===a?void 0:a.data),path:null===e||void 0===e||null===(n=e.data)||void 0===n||null===(i=n.data)||void 0===i||null===(o=i.attributes)||void 0===o?void 0:o.path}}),e.data})).catch((function(a){var n;return t({type:j,payload:{error:a,path:null===e||void 0===e?void 0:e.path}}),null===(n=a.response)||void 0===n?void 0:n.data}))}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{searchText:void 0,page:1,populate:"*",pagination:{pageSize:51,page:1,withCount:!0},sort:"createdAt:desc"};return function(t,a){var n,i,r;return t({type:v,payload:e}),c.get("/blogs",{params:{"pagination[pageSize]":null===e||void 0===e||null===(n=e.pagination)||void 0===n?void 0:n.pageSize,"pagination[page]":null===e||void 0===e||null===(i=e.pagination)||void 0===i?void 0:i.page,"pagination[withCount]":null===e||void 0===e||null===(r=e.pagination)||void 0===r?void 0:r.withCount,populate:null===e||void 0===e?void 0:e.populate,sort:null===e||void 0===e?void 0:e.sort}}).then((function(e){return t({type:g,payload:e.data}),e.data})).catch((function(e){var a;return t({type:O,payload:e}),null===(a=e.response)||void 0===a?void 0:a.data}))}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{path:void 0};return function(t,a){return t({type:m,payload:e}),c.get("/categories/".concat(null===e||void 0===e?void 0:e.path),{params:{populate:["*"]}}).then((function(a){return t({type:f,payload:Object(r.a)(Object(r.a)({},null===a||void 0===a?void 0:a.data),{},{path:null===e||void 0===e?void 0:e.path})}),a.data})).catch((function(e){var a;return t({type:y,payload:e}),null===(a=e.response)||void 0===a?void 0:a.data}))}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{path:void 0,populate:"*",pagination:{pageSize:51,page:1,withCount:!0},sort:"createdAt:desc"};return function(t,a){var n,i,o;return t({type:S,payload:e}),c.get("/blogs",{params:{"filters[categories][path][$eq]":null===e||void 0===e?void 0:e.path,"pagination[pageSize]":(null===e||void 0===e||null===(n=e.pagination)||void 0===n?void 0:n.pageSize)||50,"pagination[page]":(null===e||void 0===e||null===(i=e.pagination)||void 0===i?void 0:i.page)||1,"pagination[withCount]":null===e||void 0===e||null===(o=e.pagination)||void 0===o?void 0:o.withCount,populate:["coverImage","categories","categories.coverImage"],sort:null===e||void 0===e?void 0:e.sort}}).then((function(a){return t({type:x,payload:Object(r.a)(Object(r.a)({},null===a||void 0===a?void 0:a.data),{},{path:null===e||void 0===e?void 0:e.path})}),a.data})).catch((function(e){var a;return t({type:_,payload:e}),null===(a=e.response)||void 0===a?void 0:a.data}))}},J=function(e){return function(t,a){return t({type:C,payload:e}),c.get("/categories",{params:{populate:["coverImage"],sort:"publishedAt:asc","pagination[pageSize]":100,"pagination[page]":1,"pagination[withCount]":!1}}).then((function(e){var a;return t({type:E,payload:{data:null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.data}}),e.data})).catch((function(e){var a;return t({type:A,payload:e}),null===(a=e.response)||void 0===a?void 0:a.data}))}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{path:void 0};return function(t,a){return t({type:T,payload:e}),c.get("/shorts/".concat(null===e||void 0===e?void 0:e.path),{params:{}}).then((function(e){var a,n,i,o;return t({type:M,payload:{data:Object(r.a)({},null===(a=e.data)||void 0===a?void 0:a.data),path:null===e||void 0===e||null===(n=e.data)||void 0===n||null===(i=n.data)||void 0===i||null===(o=i.attributes)||void 0===o?void 0:o.path}}),e.data})).catch((function(a){var n;return t({type:F,payload:{error:Object(r.a)({},a),path:null===e||void 0===e?void 0:e.path}}),null===(n=a.response)||void 0===n?void 0:n.data}))}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{path:void 0};return function(t,a){return t({type:I,payload:e}),c.get("/about",{params:{populate:"*"}}).then((function(e){var a;t({type:N,payload:{data:Object(r.a)({},null===(a=e.data)||void 0===a?void 0:a.data)}})})).catch((function(a){t({type:P,payload:{error:Object(r.a)({},a),path:null===e||void 0===e?void 0:e.path}})}))}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{path:void 0};return function(t,a){return t({type:R,payload:e}),c.get("/educations",{params:{populate:"*",sort:"createdAt:desc"}}).then((function(e){t({type:U,payload:e.data})})).catch((function(e){t({type:B,payload:e})}))}},$={fetchingAboutMe:!1,errorFetchingAboutMe:!1,aboutMe:void 0,fetchingMainArticles:!1,errorFetchingMainArticles:!1,mainArticles:[],fetchingPopularArticles:!1,errorFetchingPopularArticles:!1,popularArticles:[],fetchingArticle:!1,errorFetchingArticle:!1,articles:{},fetchingCategoryArticles:!1,errorFetchingCategoryArticles:!1,categoryArticles:{},fetchingCategoryDetails:!1,errorFetchingCategoryDetails:!1,categoryDetails:{},fetchingCategories:!1,errorFetchingCategories:!1,categories:[],fetchingPopularShorts:!1,errorFetchingPopularShorts:!1,popularShorts:[],fetchingShort:!1,errorFetchingShort:!1,shorts:{},fetchingVideo:!1,errorFetchingVideo:!1,videos:{},fetchingCourses:!1,errorFetchingCourses:!1,courses:[]};t.a=function(){var e,t,a,o,c,l,W,Y,H,V,q,J,X,Z,K,Q,ee,te,ae,ne,ie,re=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,oe=arguments.length>1?arguments[1]:void 0;switch(oe.type){case d:return Object(r.a)(Object(r.a)({},re),{},{fetchingMainArticles:!0,errorFetchingMainArticles:!1});case u:return Object(r.a)(Object(r.a)({},re),{},{fetchingMainArticles:!1,errorFetchingMainArticles:!1,mainArticles:s.a.uniqBy([].concat(Object(i.a)(null===re||void 0===re?void 0:re.mainArticles),Object(i.a)(null===(e=oe.payload)||void 0===e?void 0:e.data)),"id")});case b:return Object(r.a)(Object(r.a)({},re),{},{fetchingMainArticles:!1,errorFetchingMainArticles:!0,mainArticles:[]});case p:return Object(r.a)(Object(r.a)({},re),{},{fetchingArticle:!0,errorFetchingArticle:!1});case h:return Object(r.a)(Object(r.a)({},re),{},{fetchingArticle:!1,errorFetchingArticle:!1,articles:Object(r.a)(Object(r.a)({},re.articles),{},Object(n.a)({},null===(t=oe.payload)||void 0===t?void 0:t.path,null===(a=oe.payload)||void 0===a?void 0:a.data))});case j:return Object(r.a)(Object(r.a)({},re),{},{fetchingArticle:!1,errorFetchingArticle:!0,articles:Object(r.a)(Object(r.a)({},re.articles),{},Object(n.a)({},null===(o=oe.payload)||void 0===o?void 0:o.path,null))});case v:return Object(r.a)(Object(r.a)({},re),{},{fetchingPopularArticles:!0,errorFetchingPopularArticles:!1});case g:return Object(r.a)(Object(r.a)({},re),{},{fetchingPopularArticles:!1,errorFetchingPopularArticles:!1,popularArticles:s.a.uniqBy([].concat(Object(i.a)(null===re||void 0===re?void 0:re.popularArticles),Object(i.a)(null===(c=oe.payload)||void 0===c?void 0:c.data)),"id")});case O:return Object(r.a)(Object(r.a)({},re),{},{fetchingPopularArticles:!1,errorFetchingPopularArticles:!0,popularArticles:[]});case S:return Object(r.a)(Object(r.a)({},re),{},{fetchingCategoryArticles:!0,errorFetchingCategoryArticles:!1});case x:return Object(r.a)(Object(r.a)({},re),{},{fetchingCategoryArticles:!1,errorFetchingCategoryArticles:!1,categoryArticles:Object(r.a)(Object(r.a)({},re.categoryArticles),{},Object(n.a)({},null===(l=oe.payload)||void 0===l?void 0:l.path,null===(W=oe.payload)||void 0===W?void 0:W.data))});case _:return Object(r.a)(Object(r.a)({},re),{},{fetchingCategoryArticles:!1,errorFetchingCategoryArticles:!0,categoryArticles:Object(r.a)(Object(r.a)({},re.categoryArticles),{},Object(n.a)({},null===(Y=oe.payload)||void 0===Y?void 0:Y.path,[]))});case m:return Object(r.a)(Object(r.a)({},re),{},{fetchingCategoryDetails:!0,errorFetchingCategoryDetails:!1});case f:return Object(r.a)(Object(r.a)({},re),{},{fetchingCategoryDetails:!1,errorFetchingCategoryDetails:!1,categoryDetails:Object(r.a)(Object(r.a)({},re.categoryDetails),{},Object(n.a)({},null===(H=oe.payload)||void 0===H?void 0:H.path,null===(V=oe.payload)||void 0===V?void 0:V.data))});case y:return Object(r.a)(Object(r.a)({},re),{},{fetchingCategoryDetails:!1,errorFetchingCategoryDetails:!0,categoryDetails:Object(r.a)(Object(r.a)({},re.categoryDetails),{},Object(n.a)({},null===(q=oe.payload)||void 0===q?void 0:q.path,null))});case C:return Object(r.a)(Object(r.a)({},re),{},{fetchingCategories:!0,errorFetchingCategories:!1});case E:return Object(r.a)(Object(r.a)({},re),{},{fetchingCategories:!1,errorFetchingCategories:!1,categories:s.a.uniqBy([].concat(Object(i.a)(null===re||void 0===re?void 0:re.categories),Object(i.a)(null===(J=oe.payload)||void 0===J?void 0:J.data)),"id")});case A:return Object(r.a)(Object(r.a)({},re),{},{fetchingCategories:!1,errorFetchingCategories:!0,categories:[]});case k:return Object(r.a)(Object(r.a)({},re),{},{fetchingPopularShorts:!0,errorFetchingPopularShorts:!1});case w:return Object(r.a)(Object(r.a)({},re),{},{fetchingPopularShorts:!1,errorFetchingPopularShorts:!1,popularShorts:s.a.uniqBy([].concat(Object(i.a)(null===re||void 0===re?void 0:re.popularShorts),Object(i.a)(null===(X=oe.payload)||void 0===X?void 0:X.data)),"id")});case L:return Object(r.a)(Object(r.a)({},re),{},{fetchingPopularShorts:!1,errorFetchingPopularShorts:!0,popularShorts:[]});case T:return Object(r.a)(Object(r.a)({},re),{},{fetchingShort:!0,errorFetchingShort:!1});case M:return Object(r.a)(Object(r.a)({},re),{},{fetchingShort:!1,errorFetchingShort:!1,shorts:Object(r.a)(Object(r.a)({},re.shorts),{},Object(n.a)({},null===(Z=oe.payload)||void 0===Z?void 0:Z.path,null===(K=oe.payload)||void 0===K?void 0:K.data))});case F:return Object(r.a)(Object(r.a)({},re),{},{fetchingShort:!1,errorFetchingShort:!0,shorts:Object(r.a)(Object(r.a)({},re.shorts),{},Object(n.a)({},null===(Q=oe.payload)||void 0===Q?void 0:Q.path,null))});case D:return Object(r.a)(Object(r.a)({},re),{},{fetchingVideo:!0,errorFetchingVideo:!1});case z:return Object(r.a)(Object(r.a)({},re),{},{fetchingVideo:!1,errorFetchingVideo:!1,videos:Object(r.a)(Object(r.a)({},re.videos),{},Object(n.a)({},null===(ee=oe.payload)||void 0===ee?void 0:ee.path,null===(te=oe.payload)||void 0===te?void 0:te.data))});case G:return Object(r.a)(Object(r.a)({},re),{},{fetchingVideo:!1,errorFetchingVideo:!0,videos:Object(r.a)(Object(r.a)({},re.videos),{},Object(n.a)({},null===(ae=oe.payload)||void 0===ae?void 0:ae.path,null))});case I:return Object(r.a)(Object(r.a)({},re),{},{fetchingAboutMe:!0,errorFetchingAboutMe:!1});case N:return Object(r.a)(Object(r.a)({},re),{},{fetchingAboutMe:!1,errorFetchingAboutMe:!1,aboutMe:null===(ne=oe.payload)||void 0===ne?void 0:ne.data});case P:return Object(r.a)(Object(r.a)({},re),{},{fetchingAboutMe:!1,errorFetchingAboutMe:!0,aboutMe:null});case R:return Object(r.a)(Object(r.a)({},re),{},{fetchingCourses:!0,errorFetchingCourses:!1});case U:return Object(r.a)(Object(r.a)({},re),{},{fetchingCourses:!1,errorFetchingCourses:!1,courses:null===(ie=oe.payload)||void 0===ie?void 0:ie.data.map((function(e){var t,a,n=new Date,i=12*(n.getFullYear()-2022),o=n.getMonth()+1+i,c=(null===e||void 0===e||null===(t=e.attributes)||void 0===t||null===(a=t.couponCode)||void 0===a?void 0:a.toUpperCase())+o;return Object(r.a)(Object(r.a)(Object(r.a)({},e),null===e||void 0===e?void 0:e.attributes),{},{couponCode:c})}))});case B:return Object(r.a)(Object(r.a)({},re),{},{fetchingCourses:!1,errorFetchingCourses:!0,courses:null});default:return re}}},29:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(33),i=a.n(n),r=function(){return i.a.initialize("G-VYZ42CEZ1R"),i.a},o=r();t.a=o},35:function(e,t,a){"use strict";a(78);var n=a(12),i=a.n(n),r=a(18),o=a.n(r),c=a.p+"static/media/logo9.f51b25c7.png",l=a(2),s=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:i.a.logoLoader,children:[Object(l.jsx)("div",{className:i.a.logoLoaderBackground}),Object(l.jsx)("div",{className:o()(i.a.loaderContainer),children:Object(l.jsxs)("div",{className:o()(i.a.logoCenter),children:[Object(l.jsx)("div",{className:o()(i.a.spinner),role:"status",children:Object(l.jsx)("img",{width:"auto",height:"auto",alt:"Sayfa Y\xfckleniyor...",src:c,className:i.a.loader})}),Object(l.jsxs)("div",{className:i.a.bottomLoader,children:[Object(l.jsx)("div",{className:i.a.seperator}),Object(l.jsx)("h1",{children:"Sayfan\u0131z Haz\u0131rlan\u0131yor..."}),Object(l.jsx)("div",{className:o()(i.a.normalSpinner,"spinner-border text-white"),role:"status",children:Object(l.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})]})})]})})};t.a=s},45:function(e,t,a){"use strict";t.a=a.p+"static/media/social.1b828f82.jpg"},56:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var n=a(3),i="MODALS/SEND_MESSAGE_MODAL_TOGGLE",r="MODALS/SEND_MESSAGE_MODAL_TOGGLER",o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t,a){var n,r;null===(n=a())||void 0===n||null===(r=n.modals)||void 0===r||r.SEND_MESSAGE_MODAL_TOGGLER(),t({type:i,payload:e})}},c={SEND_MESSAGE_MODAL:!1,SEND_MESSAGE_MODAL_TOGGLER:function(){}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(n.a)(Object(n.a)({},e),{},{SEND_MESSAGE_MODAL:!e.SEND_MESSAGE_MODAL});case r:return Object(n.a)(Object(n.a)({},e),{},{SEND_MESSAGE_MODAL_TOGGLER:null===t||void 0===t?void 0:t.payload});default:return e}}},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){}},[[102,6,8]]]);