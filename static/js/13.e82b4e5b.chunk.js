(this.webpackJsonpcangokceaslan=this.webpackJsonpcangokceaslan||[]).push([[13],{106:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var o=i(6);function n(e,t){if(null==e)return{};var i,n,a=Object(o.a)(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}},162:function(e,t,i){"use strict";var o=i(3),n=i(25),a=i(106),l=i(18),c=i.n(l),d=i(1),s=i(2),r=["as","disabled"];function v(e){var t=e.tagName,i=e.disabled,o=e.href,n=e.target,a=e.rel,l=e.role,c=e.onClick,d=e.tabIndex,s=void 0===d?0:d,r=e.type;t||(t=null!=o||null!=n||null!=a?"a":"button");var v={tagName:t};if("button"===t)return[{type:r||"button",disabled:i},v];var u=function(e){(i||"a"===t&&function(e){return!e||"#"===e.trim()}(o))&&e.preventDefault(),i?e.stopPropagation():null==c||c(e)};return"a"===t&&(o||(o="#"),i&&(o=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:i?void 0:s,href:o,target:"a"===t?n:void 0,"aria-disabled":i||void 0,rel:"a"===t?a:void 0,onClick:u,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),u(e))}},v]}var u=d.forwardRef((function(e,t){var i=e.as,o=e.disabled,a=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,r),l=v(Object.assign({tagName:i,disabled:o},a)),c=Object(n.a)(l,2),d=c[0],u=c[1].tagName;return Object(s.jsx)(u,Object.assign({},a,d,{ref:t}))}));u.displayName="Button";var m=["xxl","xl","lg","md","sm","xs"],b=d.createContext({prefixes:{},breakpoints:m,minBreakpoint:"xs"});b.Consumer,b.Provider;function j(e,t){var i=Object(d.useContext)(b).prefixes;return e||i[t]||t}var p=["as","bsPrefix","variant","size","active","disabled","className"],O=d.forwardRef((function(e,t){var i=e.as,l=e.bsPrefix,d=e.variant,r=void 0===d?"primary":d,u=e.size,m=e.active,b=void 0!==m&&m,O=e.disabled,g=void 0!==O&&O,h=e.className,x=Object(a.a)(e,p),f=j(l,"btn"),w=v(Object(o.a)({tagName:i,disabled:g},x)),y=Object(n.a)(w,2),k=y[0],_=y[1].tagName;return Object(s.jsx)(_,Object(o.a)(Object(o.a)(Object(o.a)({},k),x),{},{ref:t,disabled:g,className:c()(h,f,b&&"active",r&&"".concat(f,"-").concat(r),u&&"".concat(f,"-").concat(u),x.href&&g&&"disabled")}))}));O.displayName="Button";t.a=O},481:function(e,t,i){e.exports={shortsVideoScreen:"ShortsVideoScreen_shortsVideoScreen__1tbGv",title:"ShortsVideoScreen_title__LQ0qJ",tags:"ShortsVideoScreen_tags__1p61A",text:"ShortsVideoScreen_text__3QYnf"}},482:function(e,t,i){e.exports={social:"PostSocials_social__KlRST",button:"PostSocials_button__2Q7aT",icon:"PostSocials_icon__22pMS",buttonText:"PostSocials_buttonText__3Jjht"}},517:function(e,t,i){"use strict";i.r(t);var o=i(25),n=i(1),a=i(481),l=i.n(a),c=i(110),d=i(99),s=i(33),r=i(24),v=i(26),u=i(5),m=i(3),b=i(482),j=i.n(b),p=i(34),O=i(162),g=i(2),h=function(e){return Object(g.jsx)("div",{className:j.a.social,children:[{title:"Instagram",link:"https://www.instagram.com/cangokceaslan",icon:p.d,styles:{background:"linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"}},{title:"Tiktok",link:"https://www.tiktok.com/@cangokceaslan",icon:p.j,styles:{background:"black"}},{title:"Youtube",link:"https://www.youtube.com/cangokceaslan?sub_confirmation=1",icon:p.n,styles:{background:"red"}}].map((function(e,t){return Object(g.jsxs)(O.a,{role:"a",href:null===e||void 0===e?void 0:e.link,className:j.a.button,target:"__blank",style:Object(m.a)({},e.styles),variant:"primary",children:[Object(g.jsx)("div",{className:j.a.icon,children:Object(g.jsx)(e.icon,{size:30})}),Object(g.jsxs)("div",{className:j.a.buttonText,children:[e.title,"'da Takip Et"]})]})}))})},x={getShort:v.j};t.default=Object(r.b)((function(e){return{cms:e.cms,window:e.window}}),x)(Object(u.i)((function(e){var t,i,a,r,v,u,m,b,j,p,O,x,f,w,y=Object(n.useState)(!1),k=Object(o.a)(y,2),_=k[0],N=k[1],S=null===e||void 0===e?void 0:e.history,C=null===e||void 0===e||null===(t=e.window)||void 0===t||null===(i=t.sizes)||void 0===i?void 0:i.width,T=(null===e||void 0===e||null===(a=e.window)||void 0===a||null===(r=a.sizes)||void 0===r||r.height,C>992?540:C>576?C>=768?C<992?700:560:540:C-20),z=T*(16/9);Object(n.useEffect)((function(){var t,i;e.getShort({path:null===e||void 0===e||null===(t=e.match)||void 0===t||null===(i=t.params)||void 0===i?void 0:i.id}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),N(!0)}),[]);var P=null===e||void 0===e||null===(v=e.cms)||void 0===v||null===(u=v.shorts)||void 0===u||null===(m=u[null===e||void 0===e||null===(b=e.match)||void 0===b||null===(j=b.params)||void 0===j?void 0:j.id])||void 0===m?void 0:m.attributes,D="https://www.youtube.com/shorts/"+(null===P||void 0===P?void 0:P.youtubeEmbedUrl.split("https://www.youtube.com/embed/")[1]),G={title:null===P||void 0===P?void 0:P.title,description:null===P||void 0===P?void 0:P.content,keywords:null===P||void 0===P?void 0:P.tags,author:"Can G\xf6k\xe7easlan",locale:"tr",image:"https://www.cangokceaslan.com/favicon.ico",siteName:"https://www.cangokceaslan.com",video:D,type:"video"},E=(null===P||void 0===P||null===(p=P.tags)||void 0===p?void 0:p.split(",").map((function(e){return e})))||[];return null===(null===e||void 0===e||null===(O=e.cms)||void 0===O||null===(x=O.shorts)||void 0===x?void 0:x[null===e||void 0===e||null===(f=e.match)||void 0===f||null===(w=f.params)||void 0===w?void 0:w.id])?(S.push("/"),Object(g.jsx)(s.a,{loaded:_})):null!==P&&void 0!==P&&P.title?Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(d.a,{docData:G}),Object(g.jsx)("div",{className:l.a.shortsVideoScreen,children:Object(g.jsxs)("article",{children:[Object(g.jsx)("figure",{children:Object(g.jsx)("iframe",{className:l.a.video,width:T+"px",height:z+"px",src:null===P||void 0===P?void 0:P.youtubeEmbedUrl,title:"Library ve Framework nedir? Ne gibi farklar\u0131 vard\u0131r? #shorts #yaz\u0131l\u0131m #yazilim",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),Object(g.jsx)("div",{role:"heading",className:l.a.title,children:null===P||void 0===P?void 0:P.title}),Object(g.jsx)("div",{className:l.a.tags,children:E.map((function(e,t){return t===E.length-1?"#"+e.trim():"#"+e.trim()+" "}))}),Object(g.jsx)("div",{role:"contentinfo",className:l.a.text,children:Object(g.jsx)(c.a,{children:null===P||void 0===P?void 0:P.content})})]})}),Object(g.jsx)(h,{})]}):Object(g.jsx)(s.a,{loaded:_})})))},98:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var o=i(1),n=i(104),a=i(2),l={title:"Can G\xf6k\xe7easlan | Kurucu Ortak & FullStack Developer",description:"Merhabalar, ben Can G\xf6k\xe7easlan. \u015eu an bir giri\u015fimci ve online e\u011fitmenim. Benimle ilgili daha fazla bilgiye sahip olabilmek i\xe7in l\xfctfen sayfay\u0131 ziyaret edin.",keywords:"cangokceaslan, Can G\xf6k\xe7easlan, Can Gokceaslan, CanGokceaslan, Node.js, NodeJs, JavaScript, Fullstack Developer, CoFounder, Giri\u015fim",author:"Can G\xf6k\xe7easlan",image:"https://www.cangokceaslan.com/assets/jpg/courses/Iyzico.jpg?cache_delete=1",locale:"tr",siteName:"https://www.cangokceaslan.com",type:"website"};t.b=function(e){var t=e.docData,i=void 0===t?l:t,c=Object(o.useRef)(null),d="/assets/jpg/social.jpg";return Object(o.useEffect)((function(){if(void 0!==(null===i||void 0===i?void 0:i.structralData)){var e=document.createElement("script");e.type="application/ld+json",e.innerHTML=JSON.stringify(null===i||void 0===i?void 0:i.structralData),document.head.appendChild(e)}if(void 0!==(null===i||void 0===i?void 0:i.breadcrumb)){var t=document.createElement("script");t.type="application/ld+json",t.innerHTML=JSON.stringify(null===i||void 0===i?void 0:i.breadcrumb),document.head.appendChild(t)}}),[]),Object(a.jsxs)(n.a,{defer:!1,ref:c,children:[Object(a.jsx)("title",{children:null===i||void 0===i?void 0:i.title}),Object(a.jsx)("meta",{name:"description",content:null===i||void 0===i?void 0:i.description}),Object(a.jsx)("meta",{name:"keywords",content:null===i||void 0===i?void 0:i.keywords}),Object(a.jsx)("meta",{name:"author",content:null===i||void 0===i?void 0:i.author}),Object(a.jsx)("meta",{name:"image",content:(null===i||void 0===i?void 0:i.image)||d}),Object(a.jsx)("meta",{name:"locale",content:null===i||void 0===i?void 0:i.locale}),Object(a.jsx)("meta",{name:"siteName",content:null===i||void 0===i?void 0:i.siteName}),(null===i||void 0===i?void 0:i.video)&&Object(a.jsx)("meta",{name:"media:video",content:null===i||void 0===i?void 0:i.video}),(null===i||void 0===i?void 0:i.video)&&Object(a.jsx)("a",{href:null===i||void 0===i?void 0:i.video,style:{display:"none"},type:"video",target:"_blank",rel:"noopener noreferrer"}),!(null!==i&&void 0!==i&&i.video)&&Object(a.jsx)("meta",{name:"type",content:null!==i&&void 0!==i&&i.type?null===i||void 0===i?void 0:i.type:"website"}),(null===i||void 0===i?void 0:i.video)&&Object(a.jsx)("meta",{name:"type",content:"video"}),Object(a.jsx)("meta",{name:"og:title",content:null===i||void 0===i?void 0:i.title}),Object(a.jsx)("meta",{name:"og:description",content:null===i||void 0===i?void 0:i.description}),Object(a.jsx)("meta",{name:"og:image",content:(null===i||void 0===i?void 0:i.image)||d}),Object(a.jsx)("meta",{name:"og:locale",content:null===i||void 0===i?void 0:i.locale}),Object(a.jsx)("meta",{name:"og:site_name",content:null===i||void 0===i?void 0:i.siteName}),Object(a.jsx)("meta",{name:"og:type",content:"website"}),Object(a.jsx)("meta",{name:"og:author",content:null===i||void 0===i?void 0:i.author}),Object(a.jsx)("meta",{name:"og:type",content:null!==i&&void 0!==i&&i.type?null===i||void 0===i?void 0:i.type:"website"}),(null===i||void 0===i?void 0:i.video)&&Object(a.jsx)("meta",{name:"og:video",content:null===i||void 0===i?void 0:i.video}),(null===i||void 0===i?void 0:i.video)&&Object(a.jsx)("meta",{property:"og:video:secure_url",content:null===i||void 0===i?void 0:i.video}),(null===i||void 0===i?void 0:i.video)&&Object(a.jsx)("meta",{property:"og:video:type",content:"text/html"}),Object(a.jsx)("meta",{name:"twitter:title",content:null===i||void 0===i?void 0:i.title}),Object(a.jsx)("meta",{name:"twitter:description",content:null===i||void 0===i?void 0:i.description}),Object(a.jsx)("meta",{name:"twitter:image",content:(null===i||void 0===i?void 0:i.image)||d}),Object(a.jsx)("meta",{name:"twitter:site",content:null===i||void 0===i?void 0:i.siteName}),Object(a.jsx)("meta",{name:"twitter:creator",content:null===i||void 0===i?void 0:i.author}),null!==i&&void 0!==i&&i.video?Object(a.jsx)("meta",{name:"twitter:card",content:"player"}):Object(a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(null===i||void 0===i?void 0:i.video)&&Object(a.jsx)("meta",{name:"twitter:player",content:null===i||void 0===i?void 0:i.video}),(null===i||void 0===i?void 0:i.video)&&Object(a.jsx)("meta",{name:"twitter:video",content:null===i||void 0===i?void 0:i.video}),Object(a.jsx)("meta",{name:"twitter:type",content:null!==i&&void 0!==i&&i.type?null===i||void 0===i?void 0:i.type:"website"}),(null===i||void 0===i?void 0:i.publishedTime)&&Object(a.jsx)("meta",{name:"article:published_time",content:null===i||void 0===i?void 0:i.publishedTime}),(null===i||void 0===i?void 0:i.modifiedTime)&&Object(a.jsx)("meta",{name:"article:modified_time",content:null===i||void 0===i?void 0:i.modifiedTime}),(null===i||void 0===i?void 0:i.section)&&Object(a.jsx)("meta",{name:"article:section",content:null===i||void 0===i?void 0:i.section}),(null===i||void 0===i?void 0:i.tag)&&Object(a.jsx)("meta",{name:"article:tag",content:null===i||void 0===i?void 0:i.tag})]})}},99:function(e,t,i){"use strict";var o=i(98);t.a=o.b}}]);