(this.webpackJsonpcangokceaslan=this.webpackJsonpcangokceaslan||[]).push([[8],{128:function(e,t,n){},136:function(e,t,n){"use strict";var s=n(4),i=n(8),o=n(2),r=n.n(o),l=n(35),c=n.n(l),a=n(7),u=n(15),d=n(26),b=(n(48),n.p,n(46)),j=n(47),h=(n(128),n(1));window.innerWidth,t.a=Object(d.b)((function(e){var t,n,s;return{posts:null===e||void 0===e||null===(t=e.blogs)||void 0===t?void 0:t.posts,fetching:null===e||void 0===e||null===(n=e.blogs)||void 0===n?void 0:n.fetching,apiPosts:null===e||void 0===e||null===(s=e.blogs)||void 0===s?void 0:s.apiPosts}}),{getPosts:b.c,toggleSendMessageModal:j.b,getPostsFromApi:b.d})((function(e){Object(a.f)();var t=Object(o.useState)(!1),n=Object(i.a)(t,2),l=(n[0],n[1]);Object(o.useEffect)((function(){0===e.posts.length&&!1===e.fetching&&e.getPosts(),setTimeout((function(){l(!0)}),1e3),e.getPostsFromApi()}),[]),Object(o.useEffect)((function(){}),[e.apiPosts]);return Object(h.jsxs)("section",{className:"blog",id:"blog",children:[Object(h.jsx)("h2",{className:"blog-header",style:Object(s.a)({},(null===e||void 0===e?void 0:e.hideTitle)&&Object(s.a)({marginTop:-40},window.innerWidth<992&&{marginTop:-80})),children:!(null===e||void 0===e?void 0:e.hideTitle)&&Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)("img",{src:"assets/svg/medium-sqr.svg",width:"40px",height:"37px",style:{marginRight:"12px"}}),Object(h.jsx)("img",{src:"assets/svg/medium-long.svg",width:"150px",height:"37px",style:{marginRight:"12px"}})]})}),Object(h.jsx)("div",{className:"container-fluid top-container",style:Object(s.a)({},(null===e||void 0===e?void 0:e.hideTitle)&&{marginTop:"-40px"}),children:Object(h.jsx)("div",{className:"blog-container",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row justify-content-center d-flex align-items-center",children:(e.apiPosts||[]).map((function(e,t){return function(e){return Object(h.jsx)("div",{className:"col-lg-4 justify-content-center d-flex align-items-center",children:Object(h.jsx)(u.b,{to:"/post/".concat(null===e||void 0===e?void 0:e.path),style:{color:"black"},children:Object(h.jsxs)("div",{className:"card blog-card",style:{margin:"20px 0px"},children:[Object(h.jsx)("img",{src:(null===e||void 0===e?void 0:e.cover)||"https://mapandan.gov.ph/wp-content/uploads/2018/03/no_image.jpg",className:"card-img-top",width:"100%",height:"215px",style:{objectFit:"cover"},alt:null===e||void 0===e?void 0:e.title}),Object(h.jsxs)("div",{className:"card-body blog-body",children:[Object(h.jsx)("h4",{className:"card-title blog-title",style:{cursor:"pointer"},children:null===e||void 0===e?void 0:e.title}),Object(h.jsx)("p",{className:"card-text blog-content",children:null===e||void 0===e?void 0:e.subtitle}),Object(h.jsx)("p",{className:"blog-information d-flex align-items-center justify-content-center",children:Object(h.jsx)("span",{className:"align-items-start justify-content-end blog-pub-date",style:{flex:2,color:"black",textAlign:"right",letterSpacing:"-0.5px"},children:(null===e||void 0===e?void 0:e.createdAt)&&c()(new Date(null===e||void 0===e?void 0:e.createdAt)).format("LL")})})]})]})})})}(e)}))})})})})]})}))},146:function(e,t,n){"use strict";n.r(t);var s=n(16),i=n(17),o=n(22),r=n(21),l=n(2),c=n.n(l),a=n(26),u=n(47),d=n(136),b=n(45),j=n(1),h=c.a.lazy((function(){return n.e(22).then(n.bind(null,144))})),v=c.a.lazy((function(){return Promise.resolve().then(n.bind(null,49))})),g=c.a.lazy((function(){return n.e(18).then(n.bind(null,125))})),f=c.a.lazy((function(){return n.e(20).then(n.bind(null,137))})),m=c.a.lazy((function(){return n.e(19).then(n.bind(null,145))})),p=c.a.lazy((function(){return n.e(9).then(n.bind(null,127))})),x=c.a.lazy((function(){return n.e(23).then(n.bind(null,134))})),O=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).state={loaded:!1},i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setState({loaded:!0})}},{key:"toggleToast",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=["show","hide"],s=document.getElementById(e);if(null!==t){var i=n.indexOf(t),o=1-i;return null===s||void 0===s||s.classList.remove(n[o]),null===s||void 0===s||s.classList.add(n[i]),!0}return s&&(s.classList.contains("hide")?(s.classList.remove("hide"),s.classList.add("show")):(s.classList.remove("show"),s.classList.add("hide"))),!0}},{key:"renderAboutSection",value:function(){return Object(j.jsx)(f,{})}},{key:"renderNewCourse",value:function(){return Object(j.jsx)(g,{courseNumber:0})}},{key:"renderSecondNewCourse",value:function(){return Object(j.jsx)(g,{courseNumber:1})}},{key:"renderThirdNewCourse",value:function(){return Object(j.jsx)(g,{courseNumber:2})}},{key:"renderFourthNewCourse",value:function(){return Object(j.jsx)(g,{courseNumber:3})}},{key:"renderFifthNewCourse",value:function(){return Object(j.jsx)(g,{courseNumber:4})}},{key:"renderVideo",value:function(){return Object(j.jsx)(x,{})}},{key:"renderInBetweenSection",value:function(){return Object(j.jsx)(m,{})}},{key:"renderLatestCoursesSection",value:function(){return Object(j.jsx)(v,{})}},{key:"renderLatestBlogsSection",value:function(){return Object(j.jsx)(d.a,{})}},{key:"renderProjects",value:function(){return Object(j.jsx)(p,{})}},{key:"render",value:function(){return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)(b.a,{}),Object(j.jsx)("h1",{style:{display:"none"},children:"Ana Sayfa"}),Object(j.jsx)(h,{}),this.renderNewCourse(),this.renderAboutSection(),this.renderSecondNewCourse(),this.renderLatestCoursesSection(),this.renderThirdNewCourse(),this.renderLatestBlogsSection(),this.renderFourthNewCourse()]})}}]),n}(l.Component);t.default=Object(a.b)((function(e){var t,n;return{posts:null===e||void 0===e||null===(t=e.blogs)||void 0===t?void 0:t.posts,author:null===e||void 0===e||null===(n=e.blogs)||void 0===n?void 0:n.author}}),{toggleSendMessageModal:u.b})(O)}}]);
//# sourceMappingURL=8.b920db27.chunk.js.map