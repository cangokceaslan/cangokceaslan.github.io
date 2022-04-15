(this.webpackJsonpcangokceaslan=this.webpackJsonpcangokceaslan||[]).push([[9],{109:function(e,i,n){},119:function(e,i,n){"use strict";n.r(i);var r=n(5),o=n(15),t=n(2),a=n.n(t),l=n(6),s=(n(109),n(94)),d=n(30),c=n.n(d),u=n(23),m=n(34),b=n(22),p=n(35),g=n(41),k=n(1),v={_id:"klsdfmglksdfgmlfdg",path:"nodejs-mongoose-truck",cover:"https://miro.medium.com/max/700/1*qQwwv7aYYcjY1q42pOzPFw.jpeg",youtubeEmbedUrl:"https://www.youtube.com/embed/vPL46ZdAZrA",categories:[{path:"/posts",title:"Yaz\u0131lar"},{path:"/posts/yazilim",title:"Yaz\u0131l\u0131m"},{path:"/posts/yazilim/nodejs",title:"Node.js"}],title:"Node.js \u2014 MongoDb Veri Ta\u015f\u0131ma \u0130\u015flemleri (mongoose & mongoose-truck)",subtitle:"Node.js ve MongoDb kullanarak MongoDb veritaban\u0131ndaki bir collection \u2018dan di\u011fer MongoDb veritabanlar\u0131na veri ta\u015f\u0131mak i\xe7in mongoose-truck kullan\u0131l\u0131r.",htmlContent:'\n<h3>Node.js\u200a\u2014\u200a<strong>MongoDb</strong> veritaban\u0131ndaki bir collection \u2018dan di\u011fer MongoDb veritabanlar\u0131na veri ta\u015f\u0131mak (mongoose &amp; mongoose-truck)</h3>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*qQwwv7aYYcjY1q42pOzPFw.jpeg"></figure><p>Merhabalar say\u0131n okucular, bug\xfcn sizlere yeni a\xe7\u0131k kaynak kodlu projemi anlatmak istiyorum. \xd6ncelikle bu projenin nas\u0131l \xe7\u0131kt\u0131\u011f\u0131ndan bahsetmem gerekiyor. Proje tam olarak bir \xfcr\xfcn MongoDb veritaban\u0131ndan belirli bir veri setini ba\u015fka bir test, geli\u015ftirme veritaban\u0131na veri ta\u015f\u0131rken ya\u015fad\u0131\u011f\u0131m stresten ortaya \xe7\u0131kt\u0131. Elimde bir <strong>MongoDb</strong> ba\u011flant\u0131 text\u2019i vard\u0131. Buna MongoSh ile ba\u011flan\u0131p her seferinde sayfaland\u0131rma i\xe7in gerekli olan script \u2019leri ekrana yap\u0131\u015ft\u0131rmam gerekiyordu. Bunun yerine bir <strong>Node.js</strong> script\u2019i ile bunu \xe7\xf6zebilece\u011fimi bilirken bunu yapmak gereksiz bir \u015feydi. Sonra spesifik bir <strong>Schema</strong> \xfczerinde \xe7al\u0131\u015fan bir model devreye ald\u0131m fakat bunu her Schema i\xe7in tekrar etmem gerekiyordu. Buna ek olarak \xfcr\xfcn <strong>mongoose.connect</strong> kullan\u0131yordu bu da kodu herhangi bir route\u2019a ba\u011flad\u0131\u011f\u0131mda veya \xfcr\xfcn\xfcn herhangi bir yerinde \xe7al\u0131\u015ft\u0131rd\u0131\u011f\u0131mda mongoose bana hata verecekti. \xc7\xfcnk\xfc ayr\u0131 bir script dosyas\u0131 kullan\u0131lmazsa ayn\u0131 <strong>Schema</strong> \xfczerinden yeni bir model ba\u015flat\u0131l\u0131nca mongoose sana bir engel olu\u015fturur.</p>\n<p>Ben de <strong>MongoDb</strong> \u2019lere dinamik \u015fekilde ba\u011flant\u0131 olu\u015fturacak bir paket ve ba\u011flant\u0131y\u0131 ger\xe7ekle\u015ftirecek bir mod\xfcl olu\u015fturdum. Bu mod\xfcl ba\u011flant\u0131 string \u2018ini al\u0131r ve size i\xe7erisinde dependency olarak bulunan mongoose \xfczerinden bir veritaban\u0131 ba\u011flant\u0131s\u0131 d\xf6ner. Bu ba\u011flant\u0131lar\u0131 kullanarak <strong>Schema</strong> \u2019lar \xfczerinden dinamik <strong>modeller</strong> olu\u015fturulur. Veri ta\u015f\u0131ma i\u015flemi bu <strong>dinamik modeller</strong> \xfczerinden ger\xe7ekle\u015ftir. Tabii ki bu yap\u0131y\u0131 kafamda oturtmak benim i\xe7in uzun bir s\xfcre (2 g\xfcn \ud83d\ude43 ) ald\u0131.</p>\n<p>Mod\xfcl\xfc 1 g\xfcn i\xe7inde yazmay\u0131 becerebildim ve kendisi \u015fu anda hem <a href="https://www.github.com/cangokceaslan/mongoose-truck"><strong>GitHub</strong></a><strong> registry</strong> hem de <a href="https://www.npmjs.com/package/mongoose-truck"><strong>npm</strong> <strong>registry</strong></a> \xfczerinde a\xe7\u0131k kaynak kod ve paket olarak bulunmaktad\u0131r. Buna ek olarak bu mod\xfcl \xfczerinde \xe7al\u0131\u015fmak istedi\u011fim ve farkl\u0131 multi-threaded i\u015flemler i\xe7in geli\u015ftirmeler baz\u0131 geli\u015ftirmeler var. Bunlar\u0131 da <a href="https://github.com/cangokceaslan/mongoose-truck/projects/1"><strong>GitHub projeler</strong></a> \xf6zelli\u011fini kullanarak herkesin g\xf6rmesini sa\u011flamak istiyorum.</p>\n<figure><img alt="" src="https://cdn-images-1.medium.com/max/1000/1*isAY-FwBJqZpTnDzQv1mBg.jpeg"></figure><p>\u015eimdi birazc\u0131k paketin nas\u0131l \xe7al\u0131\u015ft\u0131\u011f\u0131ndan bahsetmek istiyorum. Paket genel olarak bir y\xfck\xfcn bir kamyonla ta\u015f\u0131nmas\u0131 gibi bir analoji kullan\u0131yor. \xd6nce <strong>kaynak</strong> ve <strong>hedef</strong> noktalarla ba\u011flant\u0131 kuruluyor. Daha sonras\u0131nda kaynaktan y\xfck y\xfckleme i\u015flemi i\xe7in direktifler veriliyor. Bundan hemen sonra y\xfck\xfcn hedef noktalara nas\u0131l d\xf6k\xfclece\u011fi ile ilgili direktifler veriliyor ve i\u015flemler ba\u015flat\u0131l\u0131yor.</p>\n<p>\u0130lk olarak mod\xfcl\xfc npm ile y\xfcklememiz gerekiyor</p>\n<blockquote>npm i mongoose-truck</blockquote>\n<pre>const MongooseTruck = require("mongoose-truck")</pre>\n<pre>const conn1 = await MongooseTruck.connect("database_connection_string"),<br>        conn2 = await MongooseTruck.connect("database_connection_string"),<br>        conn3 = await MongooseTruck.connect("database_connection_string");</pre>\n<p>Yukar\u0131daki kodda paketi \xe7a\u011f\u0131r\u0131yoruz. <strong>conn1</strong> bizim i\xe7in kaynak ba\u011flant\u0131s\u0131n\u0131 sembolize ediyor. <strong>conn2</strong> ve <strong>conn3</strong> ise y\xfck\xfc bo\u015faltaca\u011f\u0131m\u0131z noktalar\u0131 temsil etmektedir</p>\n<pre>const parsedData = await MongooseTruck.create(conn1, [conn2, conn3]).loadFrom({<br>    model: \'People\',<br>    schema: PeopleSchema,<br>    query: {<br>        name: "John"<br>    },<br>    populate: {<br>        path: \'stars\'<br>    },<br>    skip: 0,<br>    sort: {<br>        _id: -1<br>    },<br>    select: "_id name surname age",<br>    concurrent: 20,<br>    limit: 100<br>}).emptyTo({<br>    model: \'People\',<br>    schema: PeopleSchema<br>}).start({<br>    parse: true<br>})<br><br>console.log(parsedData);</pre>\n<p>Bu k\u0131s\u0131m ise en basit \u015fekli ile conn1\'den <strong>.loadFrom</strong> ile y\xfcklemeye ba\u015fla <strong>.emptyTo</strong> ile conn2 ve conn3 \'teki bo\u015falt\u0131lacak yeri belirle ve <strong>.start</strong> ile i\u015fleme ba\u015fla olarak d\xfc\u015f\xfcn\xfclebilir. .<strong>loadFrom </strong>i\xe7erisindeki key \u2018ler verilerin ne \u015fekilde \xe7ekilece\u011fini belirler.</p>\n<pre>model       // Modelin ismi - string</pre>\n<pre>schema      // Collection \'un Schema \'s\u0131 - mongoose.Schema</pre>\n<pre>query:      // Veri \xe7ekilirken kullan\u0131lacak query - object</pre>\n<pre>populate:   // Veri \xe7ekilirken eklenecek ili\u015fkiler olu\u015fturulur .populate() methodu ile ayn\u0131 - object</pre>\n<pre>skip:       // Veri \xe7ekilmeden N tane de\u011fer pas ge\xe7ilir - .skip() methodu ile ayn\u0131 - number</pre>\n<pre>sort:       // S\u0131ralama yapar - .sort() methodu ile ayn\u0131 - object</pre>\n<pre>select:     // Veri \xe7ekilirken gelecek key\'ler - .select() methodu ile ayn\u0131 - object / string</pre>\n<pre>concurrent: // Veriyi \xe7ekerken kullan\u0131lacak sayfaland\u0131rma sabiti - number</pre>\n<pre>limit:      // Toplam \xe7ekilecek veri miktar\u0131 - .limit() methodu ile ayn\u0131 - number</pre>\n<p>Birden fazla kaynaktan veri \xe7ekilerek de bu i\u015flemler ger\xe7ekle\u015ftirilebilir. \xd6rne\u011fin: Kullan\u0131c\u0131 collection \u2018lar\u0131m var birden fazla ben ikisini de kullanmak istiyorum. Ba\u015fka bir \xf6rnek olarak ayn\u0131 collection \u2018dan iki farkl\u0131 query kullanarak veri \xe7ekmek istiyorum. Bu durumda ise</p>\n<pre>const parsedData = await MongooseTruck.create(conn1, [conn2, conn3]).loadFrom([{<br>        model: \'People\',<br>        schema: PeopleSchema,<br>        query: {<br>            name: "John"<br>        },<br>        skip: 0,<br>        sort: {<br>            _id: -1<br>        },<br>        concurrent: 5,<br>        limit: 10<br>    },<br>    {<br>        model: \'People\',<br>        schema: PeopleSchema,<br>        query: {<br>            name: "Adam"<br>        },<br>        populate: {<br>            path: \'stars\'<br>        },<br>        skip: 1,<br>        sort: {<br>            _id: -1<br>        },<br>        select: "_id name surname age",<br>        concurrent: 3,<br>        limit: 20<br>    }<br>]).emptyTo({<br>    model: \'PersonsTests\',<br>    schema: Person<br>}).start({<br>    parse: true<br>})<br>console.log(parsedData);</pre>\n<p>G\xf6r\xfcld\xfc\u011f\xfc gibi .<strong>loadFrom </strong>i\xe7erisine bir array alabilir. Farkl\u0131 collection \u2018lardaki verileri tek bir yere toplarken veya tek bir collection \u2018dan farkl\u0131 query \u2019lerle veri \xe7ekilmek istenildi\u011finde bu \u015fekilde array haline getirilebilir.</p>\n<p><strong>.start</strong> i\u015flemi i\xe7erisine <strong>parse</strong> isimli bir key al\u0131r. Bu key ise veri ge\xe7i\u015fleri tamamland\u0131\u011f\u0131nda verinin koda getirilip getirilmeyece\u011fini belirler. <strong>parse:false </strong>olarak kullan\u0131l\u0131rsa bo\u015f array d\xf6n\xfcl\xfcr.</p>\n<p>Bu b\xf6l\xfcmde de author\u2019u oldu\u011fum mongoose kullanan <strong>Node.js</strong> uygulamalardaki iki veya daha \xe7ok MongoDb veritaban\u0131 aras\u0131ndaki veri ta\u015f\u0131man\u0131n kolay yolunu g\xf6rm\xfc\u015f bulunmaktay\u0131z. Paketin GitHub sayfas\u0131na ula\u015fmak i\xe7in</p>\n<p><a href="https://www.github.com/cangokceaslan/mongoose-truck">GitHub - cangokceaslan/mongoose-truck: mongoose-truck is a Node.js package for handling with data transaction between different MongoDb clusters.</a></p>\n<p>Npm sayfas\u0131:</p>\n<p><a href="https://www.npmjs.com/package/mongoose-truck">mongoose-truck</a></p>\n',tags:["node.js","mongoose","database","nodejs","collection","mongoose-truck"],createdAt:"2020-05-20T12:00:00.000",updatedAt:"2020-05-20T12:00:00.000",loaded:!1};u.b[0];function h(e){return Object(k.jsx)("iframe",{src:"https://www.youtube.com/embed/vPL46ZdAZrA?width=1200&height=9999&muted&autoplay&origin=https://www.cangokceaslan.com",title:"YouTube video player",frameBorder:"0",className:"article-embed-youtube-video",allow:"accelerometer;  encrypted-media; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}function y(e){return Object(k.jsx)("img",{className:"embed-cover-photo",src:null===e||void 0===e?void 0:e.url,alt:""})}i.default=Object(b.b)((function(e){return{}}),{getPostFromApi:p.b})(Object(l.h)((function(e){var i=Object(l.f)(),n=Object(t.useState)(v),d=Object(o.a)(n,2),u=d[0],b=d[1];if(Object(t.useEffect)((function(){e.getPostFromApi({id:e.match.params.id}).then((function(e){var n,o;(null===e||void 0===e||null===(n=e.node)||void 0===n?void 0:n.post)?b(Object(r.a)(Object(r.a)({},null===e||void 0===e||null===(o=e.node)||void 0===o?void 0:o.post),{},{loaded:!0})):i.push("/")}))}),[]),!(null===u||void 0===u?void 0:u.loaded))return Object(k.jsx)(g.a,{loaded:!1});var p={id:null===u||void 0===u?void 0:u._id,path:"/post/"+(null===u||void 0===u?void 0:u.path),cover:null===u||void 0===u?void 0:u.cover,youtubeEmbedUrl:null===u||void 0===u?void 0:u.youtubeEmbedUrl,categories:null===u||void 0===u?void 0:u.categories,title:null===u||void 0===u?void 0:u.title,subtitle:null===u||void 0===u?void 0:u.subtitle,createdAt:"Payla\u015f\u0131lma Tarihi: ".concat(c()(new Date(null===u||void 0===u?void 0:u.createdAt).toString()).format("LL")),updatedAt:"G\xfcncellenme Tarihi: ".concat(c()(new Date(null===u||void 0===u?void 0:u.updatedAt).toString()).format("LL")),htmlContent:null===u||void 0===u?void 0:u.htmlContent,tags:null===u||void 0===u?void 0:u.tags},j={title:(null===p||void 0===p?void 0:p.title)+" | Can G\xf6k\xe7easlan",description:null===p||void 0===p?void 0:p.subtitle,image:null===p||void 0===p?void 0:p.cover,siteName:"https://www.cangokceaslan.com"+(null===p||void 0===p?void 0:p.path),keywords:((null===p||void 0===p?void 0:p.tags)||[]).join(","),author:"Can G\xf6k\xe7easlan",locale:"tr"};return Object(k.jsxs)(a.a.Fragment,{children:[Object(k.jsx)(m.a,{docData:j}),Object(k.jsx)("div",{className:"blog-content-screen-container-no-side-bar",children:Object(k.jsx)("div",{className:"blog-content-screen-container",children:Object(k.jsx)("div",{className:"container-fluid post-and-side-container-fluid",children:Object(k.jsx)("div",{className:"container post-and-side-container",children:Object(k.jsxs)("div",{className:"row post-and-side-row",children:[Object(k.jsx)("div",{className:"col-lg-2 col-md-12"}),Object(k.jsxs)("div",{className:"col-lg-8 col-md-12 post-container",children:[(null===p||void 0===p?void 0:p.youtubeEmbedUrl)?Object(k.jsx)(h,{url:null===p||void 0===p?void 0:p.youtubeEmbedUrl}):Object(k.jsx)(y,{url:null===p||void 0===p?void 0:p.cover}),Object(k.jsx)("h1",{className:"title-container",children:null===p||void 0===p?void 0:p.title}),Object(k.jsx)("hr",{}),Object(k.jsxs)("div",{className:"date-container",children:[null===p||void 0===p?void 0:p.createdAt,"  \xa0\xa0\xa0|\xa0\xa0\xa0\xa0",null===p||void 0===p?void 0:p.updatedAt]}),Object(k.jsx)("hr",{}),Object(k.jsx)("h2",{className:"subtitle-container",children:null===p||void 0===p?void 0:p.subtitle}),Object(k.jsx)("hr",{}),Object(k.jsx)("article",{dangerouslySetInnerHTML:{__html:null===p||void 0===p?void 0:p.htmlContent}})]}),Object(k.jsx)("div",{className:"col-lg-2 col-md-12"})]})})})})}),Object(k.jsx)(s.a,{})]})})))},93:function(e,i,n){"use strict";var r=n(1);i.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loaded:!1,size:125,thick:25};return Object(r.jsx)("div",{className:"justify-content-center align-items-center d-flex",children:Object(r.jsx)("div",{className:"loader-container",children:Object(r.jsx)("div",{className:"spinner-border text-white loader",style:{width:(null===e||void 0===e?void 0:e.size)||125,height:(null===e||void 0===e?void 0:e.size)||125,fontSize:(null===e||void 0===e?void 0:e.thick)||25},role:"status",children:Object(r.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})}},94:function(e,i,n){"use strict";var r=n(15),o=n(2),t=n(23),a=(n(95),n(93)),l=n(22),s=n(1);t.b[0];i.a=Object(l.b)((function(e){return{window:e.window.sizes}}),{})((function(e){var i,n,l=t.b[(null===e||void 0===e?void 0:e.courseNumber)||0],d=Object(o.useState)(!1),c=Object(r.a)(d,2),u=c[0],m=c[1],b=Object(o.useState)(""),p=Object(r.a)(b,2),g=p[0],k=p[1],v=Object(o.useState)(""),h=Object(r.a)(v,2),y=h[0],j=h[1],x=function(){var e,i,n=0;n=window.innerWidth<576?.53*window.screen.width:window.innerWidth>=576&&window.innerWidth<768?280:window.innerWidth>=768&&window.innerWidth<992?375:window.innerWidth>=992&&window.innerWidth<1200?230:(window.innerWidth,270),e="".concat(1.75*n,"px"),i="".concat(n,"px"),k(e),j(i),m(!0)};if(Object(o.useEffect)((function(){x()}),[]),Object(o.useLayoutEffect)((function(){x()}),[null===(i=e.window)||void 0===i?void 0:i.width,null===(n=e.window)||void 0===n?void 0:n.height]),!u)return Object(s.jsxs)("div",{className:"middle-content",style:{background:(null===l||void 0===l?void 0:l.primaryColor)||"#215733",padding:"10px 0px 10px 0px",minHeight:"350px",display:"flex",alignItems:"center",justifyContent:"center"},children:[" ",Object(s.jsx)(a.a,{loaded:!1})]});return Object(s.jsx)("div",{className:"middle-content",style:{background:(null===l||void 0===l?void 0:l.primaryColor)||"#215733",padding:"10px 0px 10px 0px"},children:Object(s.jsx)("div",{className:"container",style:{minHeight:"300px"},children:Object(s.jsxs)("div",{className:"row",style:{minHeight:"350px"},children:[Object(s.jsx)("div",{className:"col-lg-5 col-md-12",style:{padding:"0px 20px"},children:(null===l||void 0===l?void 0:l.youtubeEmbedUrl)?Object(s.jsx)("div",{className:"new-course-video d-flex align-items-center justify-content-center",style:{minHeight:"300px"},children:Object(s.jsx)("div",{style:{border:"2px solid white",padding:"0px !important",margin:"0px",maxHeight:"calc(".concat(y," + 4px)"),backgroundColor:"white",marginTop:"35px"},children:Object(s.jsx)("iframe",{width:g,height:y,src:"".concat((null===l||void 0===l?void 0:l.youtubeEmbedUrl)||"https://www.youtube.com/embed/h-Xx14d39vk","?fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&mute=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}):Object(s.jsx)("div",{className:"new-course-video d-flex align-items-center justify-content-center",style:{minHeight:"300px"},children:Object(s.jsx)("img",{src:(null===l||void 0===l?void 0:l.thumbnail)||"https://via.placeholder.com/300x300",alt:"New Course",style:{width:g,height:y,marginTop:"35px"}})})}),Object(s.jsx)("div",{className:"col-lg-7 col-md-12",style:{padding:"20px 20px"},children:Object(s.jsxs)("div",{className:"d-flex align-items-center justify-content-start",style:{minHeight:"300px",maxWidth:"100%"},children:[Object(s.jsxs)("div",{style:{color:"white",fontSize:"30px",fontFamily:"inherit",fontWeight:"bolder"},children:[Object(s.jsx)("div",{style:{color:"black",backgroundColor:"white",minWidth:"50px",maxWidth:"160px",fontSize:"15px",textAlign:"center",marginBottom:"10px"},children:null===l||void 0===l?void 0:l.tag}),Object(s.jsx)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",height:"40px",color:null===l||void 0===l?void 0:l.secondaryColor},children:null===l||void 0===l?void 0:l.title}),Object(s.jsx)("div",{style:{marginTop:"15px",fontSize:"17px",fontWeight:"lighter",overflow:"hidden",textOverflow:"ellipsis"},children:null===l||void 0===l?void 0:l.description}),Object(s.jsx)("div",{children:Object(s.jsx)("p",{style:{textAlign:"left"},children:Object(s.jsxs)("a",{href:function(){var e=(null===l||void 0===l?void 0:l.referralCode)?"?referralCode="+(null===l||void 0===l?void 0:l.referralCode):"?",i="";return i="?"===e?(null===l||void 0===l?void 0:l.couponCode)?"couponCode="+(null===l||void 0===l?void 0:l.couponCode):"":(null===l||void 0===l?void 0:l.couponCode)?"&couponCode="+(null===l||void 0===l?void 0:l.couponCode):"","".concat(null===l||void 0===l?void 0:l.url).concat(e).concat(i)}(),target:"_blank",className:"btn btn-secondary px-4 py-2 btn-sm",style:{position:"relative",fontWeight:"bold",backgroundColor:"white",marginLeft:"0px",borderWidth:"0px !important",textTransform:"none",fontSize:"18px",borderColor:"white",color:"black",top:"25px",letterSpacing:"0px"},children:[" ",(null===l||void 0===l?void 0:l.free)?"Hemen Kursa Kay\u0131t Ol":"Hemen \u0130ndirimli Olarak Kursa Kaydol"]})})})]}),Object(s.jsx)("div",{})]})})]})})})}))},95:function(e,i,n){}}]);
//# sourceMappingURL=9.7fb272f4.chunk.js.map