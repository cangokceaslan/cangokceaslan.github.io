(this.webpackJsonpcangokceaslan=this.webpackJsonpcangokceaslan||[]).push([[4],{101:function(e,t,i){},106:function(e,t,i){"use strict";i.r(t);var n=i(16),a=i(7),s=i(8),c=i(13),l=i(12),r=i(2),o=i.n(r),d=(i(100),i(26)),h=i(42),j=i(37),b=i(53),u=992,m=i(1),g=function(e){Object(c.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(a.a)(this,i);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={innerWidth:window.innerWidth},e}return Object(s.a)(i,[{key:"setResizer",value:function(){this.props.setResizeFunction(function(e){this.setState({innerWidth:window.innerWidth,innerHeight:window.innerWidth})}.bind(this))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e;return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"justify-content-center",style:{height:"100%"},children:Object(m.jsx)(j.b,(e={channel:"cangokceaslan",id:"cangokceaslan",theme:"dark",allowfullscreen:!0},Object(n.a)(e,"theme","dark"),Object(n.a)(e,"width","100%"),Object(n.a)(e,"style",{height:this.state.innerWidth<=u?"80vh":"55vh"}),Object(n.a)(e,"onVideoPause",(function(){return console.log(":(")})),e))})})}}]),i}(r.Component),v=Object(d.b)((function(e){return{win:e.window}}),{setResizeFunction:b.b})(g),x=(i(20),i(38),i(18)),p=(i(98),function(e){Object(c.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(a.a)(this,i),(n=t.call(this,e)).state={tweets:[]},n}return Object(s.a)(i,[{key:"componentDidMount",value:function(){this.getTweets()}},{key:"getTweets",value:function(){var e=this;fetch("/api/tweets").then((function(e){return e.json()})).then((function(t){e.setState({tweets:t})}))}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"container-fluid d-flex justify-content-center align-items-center",style:{backgroundColor:"#292F33",minHeight:"100vh"},children:Object(m.jsx)("div",{className:"container",style:{maxWidth:"1100px"},children:Object(m.jsx)("div",{className:"row d-flex justify-content-center align-items-center",children:Object(m.jsx)("div",{className:"col-lg-12 align-items-center justify-content-center",children:Object(m.jsx)("div",{children:Object(m.jsx)("a",{class:"twitter-timeline",dnt:"false","data-lang":"tr","data-height":"75vh","data-chrome":"noheader noborders nofooter noscrollbar","data-theme":"dark",href:"https://www.twitter.com/cangokceaslan?ref_src=twsrc%5Etfw",children:"Tweets by cangokceaslan"})})})})})})}}]),i}(o.a.Component)),O=i.p+"static/media/background6.6fcf5790.mp4",f=i(61),y=i(32),k=i(99),w=i(41),N=i.p+"static/media/cropped-cangokceaslan.a2c97588.png",S=(i(101),function(e){return Object(m.jsx)("div",{className:"intro",children:Object(m.jsx)("div",{className:"container intro-container",children:Object(m.jsxs)("div",{className:"row intro-row",children:[Object(m.jsxs)("div",{className:"col-12 col-md-12 col-lg-7 intro-left",children:[Object(m.jsx)("h1",{children:"Giri\u015fimci, E\u011fitmen & FullStack Developer"}),Object(m.jsx)("p",{children:"Hedeflerine fazland\u0131rarak ula\u015fmay\u0131 seven bir teknoloji ve bilim merakl\u0131s\u0131y\u0131m. Ba\u015fkalar\u0131n\u0131 etkileyebilmek ve d\xfcnyay\u0131 daha iyi bir yer haline getirebilmek i\xe7in \xe7al\u0131\u015farak motive oluyorum."})]}),Object(m.jsx)("div",{className:"col-12 d-lg-block col-lg-5 intro-right",children:Object(m.jsx)("div",{className:"photo-container",children:Object(m.jsx)("img",{src:N,className:"photo"})})})]})})})}),C=(i(54),function(e){Object(c.a)(i,e);var t=Object(l.a)(i);function i(e){var n;return Object(a.a)(this,i),(n=t.call(this,e)).state={loaded:!1},n}return Object(s.a)(i,[{key:"componentDidMount",value:function(){this.setState({loaded:!0})}},{key:"toggleToast",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=["show","hide"],n=document.getElementById(e);if(null!==t){var a=i.indexOf(t),s=1-a;return n.classList.remove(i[s]),n.classList.add(i[a]),!0}return n&&(n.classList.contains("hide")?(n.classList.remove("hide"),n.classList.add("show")):(n.classList.remove("show"),n.classList.add("hide"))),!0}},{key:"renderToastSection",value:function(){var e,t=this;return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"position-fixed bottom-0 end-0 p-3",style:{zIndex:11},children:Object(m.jsxs)("div",(e={id:"liveToast",className:"toast hide"},Object(n.a)(e,"id","toastNumber1"),Object(n.a)(e,"role","alert"),Object(n.a)(e,"data-bs-autohide","true"),Object(n.a)(e,"aria-live","assertive"),Object(n.a)(e,"aria-atomic","true"),Object(n.a)(e,"children",[Object(m.jsxs)("div",{className:"toast-header",children:[Object(m.jsx)("img",{src:"https://avatars.githubusercontent.com/u/48398625?v=4",width:"30px",height:"30px",className:"rounded me-2",alt:"..."}),Object(m.jsx)("strong",{className:"me-auto",children:"Bootstrap"}),Object(m.jsx)("small",{children:"11 mins ago"}),Object(m.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"toast","aria-label":"Close",onClick:function(){return t.toggleToast("toastNumber1","hide")}})]}),Object(m.jsx)("div",{className:"toast-body",children:"Hello, world! This is a toast message. Hello, world! This is a toast message. Hello, world! This is a toast message. Hello, world! This is a toast message. Hello, world! This is a toast message. Hello, world! This is a toast message."})]),e))})})}},{key:"renderBackgroundImageSection",value:function(){return Object(m.jsx)("section",{className:"container initial-section",id:"section-home","data-stellar-background-ratio":"0.5",children:Object(m.jsx)("div",{className:"intro-text",children:Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("h1",{className:"initial-header",children:Object(m.jsx)("strong",{className:"header-title",children:"Can G\xf6k\xe7easlan"})}),Object(m.jsx)("h2",{className:"lead site-subheading mb-4",children:Object(m.jsxs)("strong",{children:["Hedeflerine fazland\u0131rarak ula\u015fmay\u0131 seven bir teknoloji ve bilim merakl\u0131s\u0131y\u0131m. Ba\u015fkalar\u0131n\u0131 etkileyebilmek ve d\xfcnyay\u0131 daha iyi bir yer haline getirebilmek i\xe7in \xe7al\u0131\u015farak motive oluyorum. ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{target:"__blank",onClick:this.props.toggleSendMessageModal,className:"reach",id:"tikla",children:"Bana Hemen Ula\u015f !"})]})})]})})})}},{key:"renderBackgroundVideoSection",value:function(){return Object(m.jsxs)("section",{className:"container initial-section",id:"section-home",style:{backgroundColor:"black"},"data-stellar-background-ratio":"0.5",children:[Object(m.jsx)("div",{className:"intro-text",style:{zIndex:10},children:Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("h1",{className:"initial-header",children:Object(m.jsx)("strong",{className:"header-title",children:"Can G\xf6k\xe7easlan"})}),Object(m.jsx)("h2",{className:"lead site-subheading mb-4",style:{fontWeight:"bold"},children:Object(m.jsxs)("strong",{children:["Hedeflerine fazland\u0131rarak ula\u015fmay\u0131 seven bir teknoloji ve bilim merakl\u0131s\u0131y\u0131m. Ba\u015fkalar\u0131n\u0131 etkileyebilmek ve d\xfcnyay\u0131 daha iyi bir yer haline getirebilmek i\xe7in \xe7al\u0131\u015farak motive oluyorum. ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{target:"__blank",onClick:this.props.toggleSendMessageModal,className:"reach",id:"tikla",children:"Bana Hemen Ula\u015f !"})]})})]})}),Object(m.jsx)("style",{children:"#background-video{min-height:770px !important}"}),Object(m.jsxs)("video",{autoPlay:!0,muted:!0,id:"background-video",style:{position:"absolute",right:"0px",bottom:"0px",top:"80px",width:"100%",height:"100vh",minHeight:"900px !important",zIndex:1,overflow:"hidden",objectFit:"cover",backgroundColor:"black"},children:[Object(m.jsx)("source",{src:O,type:"video/mp4"}),Object(m.jsx)("source",{src:O,type:"video/ogg"})]})]})}},{key:"renderAboutSection",value:function(){return Object(m.jsx)(f.a,{})}},{key:"renderNewCourse",value:function(){return Object(m.jsx)(x.a,{})}},{key:"renderInBetweenSection",value:function(){return Object(m.jsx)("div",{className:"container-fluid in-between",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"twitch-logo",children:Object(m.jsx)("img",{src:"assets/svg/twitch.svg",width:"150px",height:"auto"})}),Object(m.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:Object(m.jsx)("div",{className:"padder",style:{background:"white"},children:Object(m.jsx)("div",{children:Object(m.jsx)(v,{})})})})]})})})}},{key:"renderLatestCoursesSection",value:function(){return Object(m.jsx)(y.a,{})}},{key:"renderLatestBlogsSection",value:function(){return Object(m.jsx)(k.a,{})}},{key:"renderShowTweets",value:function(){return Object(m.jsx)(p,{})}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(w.a,{}),Object(m.jsx)(S,{}),this.renderAboutSection(),this.renderNewCourse(),this.renderLatestCoursesSection(),this.state.loaded&&this.renderInBetweenSection(),this.renderLatestBlogsSection(),this.renderToastSection()]})}}]),i}(r.Component));t.default=Object(d.b)((function(e){var t,i;return{posts:null===e||void 0===e||null===(t=e.blogs)||void 0===t?void 0:t.posts,author:null===e||void 0===e||null===(i=e.blogs)||void 0===i?void 0:i.author}}),{toggleSendMessageModal:h.b})(C)},98:function(e,t,i){"use strict";t.a=i.p+"static/media/medium.b29b88aa.png"},99:function(e,t,i){"use strict";var n=i(19),a=i(2),s=i(35),c=i.n(s),l=i(26),r=i(27),o=i(98),d=i(44),h=i(42),j=i(1);t.a=Object(l.b)((function(e){var t,i,n;return{posts:null===e||void 0===e||null===(t=e.blogs)||void 0===t?void 0:t.posts,author:null===e||void 0===e||null===(i=e.blogs)||void 0===i?void 0:i.author,fetching:null===e||void 0===e||null===(n=e.blogs)||void 0===n?void 0:n.fetching}}),{getPosts:d.b,toggleSendMessageModal:h.b})((function(e){var t=Object(a.useState)(!1),i=Object(n.a)(t,2),s=(i[0],i[1]);return Object(a.useEffect)((function(){0===e.posts.length&&!1===e.fetching&&e.getPosts(),setTimeout((function(){s(!0)}),1e3)}),[]),Object(j.jsxs)("section",{className:"blog",id:"blog",children:[Object(j.jsxs)("h2",{className:"blog-header",children:[Object(j.jsx)("img",{src:"assets/svg/medium-sqr.svg",width:"40px",height:"37px",style:{marginRight:"12px"}})," ",Object(j.jsx)("img",{src:"assets/svg/medium-long.svg",width:"150px",height:"37px",style:{marginRight:"12px"}})]}),Object(j.jsx)("div",{className:"container-fluid top-container",children:Object(j.jsx)("div",{className:"blog-container",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row justify-content-center d-flex align-items-center",children:[(e.posts||[]).map((function(t,i){return function(t){var i,n;return Object(j.jsx)("div",{className:"col-lg-4 justify-content-center d-flex align-items-center",style:{maxWidth:"400px"},children:Object(j.jsxs)("div",{className:"card blog-card",style:{margin:"20px 10px"},children:[Object(j.jsx)("img",{onClick:function(){return window.open(null===t||void 0===t?void 0:t.link,"__blank")},src:(null===t||void 0===t?void 0:t.thumbnail)||"https://mapandan.gov.ph/wp-content/uploads/2018/03/no_image.jpg",className:"card-img-top",width:"100%",height:"220px",style:{objectFit:"cover"},alt:null===t||void 0===t?void 0:t.title.replace(/(&amp;)/gi," & ")}),Object(j.jsxs)("div",{className:"card-body blog-body",children:[Object(j.jsxs)("p",{className:"blog-information d-flex align-items-center justify-content-center",children:[Object(j.jsxs)("span",{style:{flex:3},children:["Yazar:",Object(j.jsx)("a",{className:"blog-author",style:{color:r.a.primaryColor,fontFamily:"inherit",fontWeight:"bold",marginLeft:"10px"},target:"__blank",href:null===(i=e.author)||void 0===i?void 0:i.link,children:null===t||void 0===t?void 0:t.author})]}),Object(j.jsx)("span",{className:"align-items-start justify-content-end blog-pub-date",style:{flex:2,textAlign:"right",letterSpacing:"-0.5px"},children:(null===t||void 0===t?void 0:t.pubDate)&&c()(null===t||void 0===t?void 0:t.pubDate).format("LL")})]}),Object(j.jsx)("h4",{className:"card-title blog-title",style:{cursor:"pointer"},onClick:function(){return window.open(null===t||void 0===t?void 0:t.link,"__blank")},children:null===t||void 0===t||null===(n=t.title)||void 0===n?void 0:n.replace(/(&amp;)/gi," & ")}),Object(j.jsx)("p",{className:"card-text blog-content",style:{textAlign:"justify"},children:null===t||void 0===t?void 0:t.description.replace(/(<([^>]+)>)/gi,"").replace(/\"/gi,"").replace(/(&amp;)/gi," & ").split(/\n/).slice(2).join("\n")}),Object(j.jsx)("div",{style:{height:"3px"}})]})]})})}(t)})),Object(j.jsx)("div",{className:"col-lg-4 justify-content-center d-flex align-items-center",style:{maxWidth:"400px"},children:Object(j.jsxs)("div",{className:"card blog-card",style:{margin:"20px 10px"},children:[Object(j.jsx)("img",{onClick:function(){return window.open("https://cangokceaslan.medium.com/","__blank")},src:o.a,className:"card-img-top",width:"100%",height:"220px",style:{objectFit:"cover"},alt:"Medium hesab\u0131ma eri\u015ferek yaz\u0131lar\u0131ma ula\u015fabilirsin"}),Object(j.jsxs)("div",{className:"card-body blog-body",children:[Object(j.jsxs)("p",{className:"blog-information d-flex align-items-center justify-content-center",children:[Object(j.jsxs)("span",{style:{flex:3},children:["Yazar:",Object(j.jsx)("a",{className:"blog-author",style:{color:r.a.primaryColor,fontFamily:"inherit",fontWeight:"bold",marginLeft:"10px"},target:"__blank",href:"https://cangokceaslan.medium.com/",children:"Can G\xf6k\xe7easlan"})]}),Object(j.jsx)("span",{className:"align-items-start justify-content-end blog-pub-date",style:{flex:2,textAlign:"right",letterSpacing:"-0.5px"},children:c()((new Date).toString()).format("LL")})]}),Object(j.jsx)("h4",{className:"card-title blog-title",style:{cursor:"pointer"},onClick:function(){return window.open("https://cangokceaslan.medium.com","__blank")},children:"Medium hesab\u0131ma eri\u015ferek son postlar\u0131mdan haberdar olun"}),Object(j.jsx)("p",{className:"card-text blog-content",style:{textAlign:"justify"},children:"Medium hesab\u0131m\u0131 ziyaret ederek \xf6zellikle yaz\u0131l\u0131m ve teknoloji \xfczerine payla\u015fm\u0131\u015f oldu\u011fum yaz\u0131lara ula\u015fabilirsiniz"}),Object(j.jsx)("div",{style:{height:"3px"}})]})]})})]})})})})]})}))}}]);
//# sourceMappingURL=4.96af2022.chunk.js.map