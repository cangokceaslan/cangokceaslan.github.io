(this.webpackJsonpcangokceaslan=this.webpackJsonpcangokceaslan||[]).push([[3,17],{112:function(n,e,i){"use strict";var t=i(1);e.a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loaded:!1,size:125,thick:25};return Object(t.jsx)("div",{className:"justify-content-center align-items-center d-flex",children:Object(t.jsx)("div",{className:"loader-container",children:Object(t.jsx)("div",{className:"spinner-border text-white loader",style:{width:(null===n||void 0===n?void 0:n.size)||125,height:(null===n||void 0===n?void 0:n.size)||125,fontSize:(null===n||void 0===n?void 0:n.thick)||25},role:"status",children:Object(t.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})}},113:function(n,e,i){"use strict";i.r(e);var t=i(7),o=i(2),l=i(26),d=(i(114),i(112)),r=i(25),a=i(1);l.b[0];e.default=Object(r.b)((function(n){return{window:n.window.sizes}}),{})((function(n){var e,i,r,c,s,p,h,f,u,C,v,V,x,g=null;if(void 0!==(null===n||void 0===n?void 0:n.courseNumber))g=l.b[null===n||void 0===n?void 0:n.courseNumber];else{var H=l.b.filter((function(n){return!(null===n||void 0===n?void 0:n.free)}));g=H[Math.floor(Math.random()*H.length)]}var w,b=Object(o.useState)(!1),m=Object(t.a)(b,2),y=m[0],j=m[1],_=Object(o.useState)(""),O=Object(t.a)(_,2),M=O[0],L=O[1],k=Object(o.useState)(""),Z=Object(t.a)(k,2),E=Z[0],S=Z[1],F=function(){var n,e,i=0;i=window.innerWidth<576?.53*window.screen.width:window.innerWidth>=576&&window.innerWidth<768?280:window.innerWidth>=768&&window.innerWidth<992?375:window.innerWidth>=992&&window.innerWidth<1200?230:(window.innerWidth,270),n="".concat(1.75*i,"px"),e="".concat(i,"px"),L(n),S(e),j(!0)};if(Object(o.useEffect)((function(){F()}),[]),Object(o.useLayoutEffect)((function(){F()}),[null===(e=n.window)||void 0===e?void 0:e.width,null===(i=n.window)||void 0===i?void 0:i.height]),!y)return Object(a.jsxs)("div",{className:"middle-content",style:{background:(null===(w=g)||void 0===w?void 0:w.primaryColor)||"#215733",padding:"10px 0px 10px 0px",minHeight:"350px",display:"flex",alignItems:"center",justifyContent:"center"},children:[" ",Object(a.jsx)(d.a,{loaded:!1})]});return Object(a.jsx)("div",{className:"middle-content",style:{background:(null===(r=g)||void 0===r?void 0:r.primaryColor)||"#215733",padding:"10px 0px 10px 0px"},children:Object(a.jsx)("div",{className:"container",style:{minHeight:"300px"},children:Object(a.jsxs)("div",{className:"row",style:{minHeight:"350px"},children:[Object(a.jsx)("div",{className:"col-lg-5 col-md-12",style:{padding:"0px 20px"},children:(null===(c=g)||void 0===c?void 0:c.youtubeEmbedUrl)?Object(a.jsx)("div",{className:"new-course-video d-flex align-items-center justify-content-center",style:{minHeight:"300px"},children:Object(a.jsx)("div",{style:{padding:"0px !important",margin:"0px",maxHeight:"calc(".concat(E,")"),backgroundColor:"white",marginTop:"35px"},children:Object(a.jsx)("iframe",{width:M,height:E,src:"".concat((null===(s=g)||void 0===s?void 0:s.youtubeEmbedUrl)||"https://www.youtube.com/embed/h-Xx14d39vk","?fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&mute=0&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}):Object(a.jsx)("div",{className:"new-course-video d-flex align-items-center justify-content-center",style:{minHeight:"300px"},children:Object(a.jsx)("img",{src:(null===(p=g)||void 0===p?void 0:p.thumbnail)||"https://via.placeholder.com/300x300",alt:"New Course",style:{width:M,height:E,marginTop:"35px"}})})}),Object(a.jsx)("div",{className:"col-lg-7 col-md-12",style:{padding:"20px 20px"},children:Object(a.jsxs)("div",{className:"d-flex align-items-center justify-content-start",style:{minHeight:"300px",maxWidth:"100%"},children:[Object(a.jsxs)("div",{style:{color:"white",fontSize:"30px",fontFamily:"inherit",fontWeight:"bolder"},children:[Object(a.jsx)("div",{style:{color:"black",backgroundColor:"white",minWidth:"50px",maxWidth:"160px",fontSize:"15px",textAlign:"center",marginBottom:"10px",border:"1px solid ".concat(null===(h=g)||void 0===h?void 0:h.secondaryColor)},children:null===(f=g)||void 0===f?void 0:f.tag}),Object(a.jsx)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",height:"40px",letterSpacing:"-0.5px",fontFamily:"sans-serif",color:null===(u=g)||void 0===u?void 0:u.secondaryColor},children:null===(C=g)||void 0===C?void 0:C.title}),Object(a.jsx)("div",{style:{marginTop:"15px",fontSize:"17px",fontWeight:"lighter",overflow:"hidden",textOverflow:"ellipsis",color:null===(v=g)||void 0===v?void 0:v.secondaryColor},children:null===(V=g)||void 0===V?void 0:V.description}),Object(a.jsx)("div",{children:Object(a.jsx)("p",{style:{textAlign:"left"},children:Object(a.jsx)("a",{href:function(){var n,e,i,t,o,l,d,r=(null===(n=g)||void 0===n?void 0:n.referralCode)?"?referralCode="+(null===(e=g)||void 0===e?void 0:e.referralCode):"?",a="";"?"===r?a=(null===(t=g)||void 0===t?void 0:t.couponCode)?"couponCode="+(null===(o=g)||void 0===o?void 0:o.couponCode):"":a=(null===(l=g)||void 0===l?void 0:l.couponCode)?"&couponCode="+(null===(d=g)||void 0===d?void 0:d.couponCode):"";return"".concat(null===(i=g)||void 0===i?void 0:i.url).concat(r).concat(a)}(),target:"_blank",className:"btn px-4 py-2 btn-sm",style:{outline:"none",position:"relative",fontWeight:"bold",backgroundColor:"white",marginLeft:"0px",borderWidth:"2px !important",textTransform:"none",fontSize:"18px",borderColor:null===(x=g)||void 0===x?void 0:x.secondaryColor,color:"black",top:"25px",letterSpacing:"0px"},dangerouslySetInnerHTML:{__html:function(){var n,e,i;return(null===(n=g)||void 0===n?void 0:n.free)?"\xdccretsiz Olarak Kursa Kay\u0131t Ol":'<span style="text-decoration:line-through"}}>'.concat(null===(e=g)||void 0===e?void 0:e.price,"</span> yerine ").concat(null===(i=g)||void 0===i?void 0:i.discountedPrice,"'ye Kursa Kaydol")}()}})})})]}),Object(a.jsx)("div",{})]})})]})})})}))},114:function(n,e,i){},124:function(n,e,i){},139:function(n,e,i){"use strict";i.r(e);var t=i(15),o=i(16),l=i(21),d=i(20),r=i(2),a=i.n(r),c=i(14),s=i(113),p=(i(124),i(1));r.Component;e.default=function(n){return Object(p.jsx)("div",{dangerouslySetInnerHTML:{__html:'<div class="not-found">\n        <svg width="1123" height="837" viewBox="0 0 1123 837" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <rect width="1123" height="837" fill="black" />\n            <g id="sky" filter="url(#filter0_d)">\n                <rect id="background" x="30" y="26" width="1063" height="777" rx="20" fill="black" />\n                <g id="stars">\n                    <path id="Vector"\n                        d="M202.12 319.2C204.937 319.2 207.22 316.917 207.22 314.1C207.22 311.283 204.937 309 202.12 309C199.303 309 197.02 311.283 197.02 314.1C197.02 316.917 199.303 319.2 202.12 319.2Z"\n                        fill="white" />\n                    <path id="Vector_2"\n                        d="M566.12 615.2C568.937 615.2 571.22 612.917 571.22 610.1C571.22 607.283 568.937 605 566.12 605C563.303 605 561.02 607.283 561.02 610.1C561.02 612.917 563.303 615.2 566.12 615.2Z"\n                        fill="white" />\n                    <path id="Vector_3"\n                        d="M351.12 638.95C352.694 638.95 353.97 637.674 353.97 636.1C353.97 634.526 352.694 633.25 351.12 633.25C349.546 633.25 348.27 634.526 348.27 636.1C348.27 637.674 349.546 638.95 351.12 638.95Z"\n                        fill="white" />\n                    <path id="Vector_4"\n                        d="M985.11 503.99C986.684 503.99 987.96 502.714 987.96 501.14C987.96 499.566 986.684 498.29 985.11 498.29C983.536 498.29 982.26 499.566 982.26 501.14C982.26 502.714 983.536 503.99 985.11 503.99Z"\n                        fill="white" />\n                    <path id="Vector_5"\n                        d="M822.11 247.99C823.684 247.99 824.96 246.714 824.96 245.14C824.96 243.566 823.684 242.29 822.11 242.29C820.536 242.29 819.26 243.566 819.26 245.14C819.26 246.714 820.536 247.99 822.11 247.99Z"\n                        fill="white" />\n                    <path id="Vector_6"\n                        d="M1053.11 372.99C1054.68 372.99 1055.96 371.714 1055.96 370.14C1055.96 368.566 1054.68 367.29 1053.11 367.29C1051.54 367.29 1050.26 368.566 1050.26 370.14C1050.26 371.714 1051.54 372.99 1053.11 372.99Z"\n                        fill="white" />\n                    <path id="Vector_7"\n                        d="M292.12 152.2C294.937 152.2 297.22 149.917 297.22 147.1C297.22 144.283 294.937 142 292.12 142C289.303 142 287.02 144.283 287.02 147.1C287.02 149.917 289.303 152.2 292.12 152.2Z"\n                        fill="white" />\n                    <path id="Vector_8"\n                        d="M151.95 492.17H147.41V487.63H145.56V492.17H141.02V494.02H145.56V498.55H147.41V494.02H151.95V492.17Z"\n                        fill="white" />\n                    <path id="Vector_9"\n                        d="M265.95 490.17H261.41V485.63H259.56V490.17H255.02V492.02H259.56V496.55H261.41V492.02H265.95V490.17Z"\n                        fill="white" />\n                    <path id="Vector_10"\n                        d="M428.95 582.17H424.41V577.63H422.56V582.17H418.02V584.02H422.56V588.55H424.41V584.02H428.95V582.17Z"\n                        fill="white" />\n                    <path id="Vector_11"\n                        d="M776.98 344.67H774.91V342.6H774.07V344.67H772V345.51H774.07V347.58H774.91V345.51H776.98V344.67Z"\n                        fill="white" />\n                    <path id="Vector_12"\n                        d="M68.98 422.67H66.91V420.6H66.07V422.67H64V423.51H66.07V425.58H66.91V423.51H68.98V422.67Z"\n                        fill="white" />\n                    <path id="Vector_13"\n                        d="M153.98 592.67H151.91V590.6H151.07V592.67H149V593.51H151.07V595.58H151.91V593.51H153.98V592.67Z"\n                        fill="white" />\n                    <path id="Vector_14"\n                        d="M297.97 357.71H295.9V355.64H295.06V357.71H292.99V358.55H295.06V360.62H295.9V358.55H297.97V357.71Z"\n                        fill="white" />\n                    <path id="Vector_15"\n                        d="M321.98 268.67H319.91V266.6H319.07V268.67H317V269.51H319.07V271.58H319.91V269.51H321.98V268.67Z"\n                        fill="white" />\n                    <path id="Vector_16"\n                        d="M956.9 333.07C957.916 333.07 958.74 332.246 958.74 331.23C958.74 330.214 957.916 329.39 956.9 329.39C955.884 329.39 955.06 330.214 955.06 331.23C955.06 332.246 955.884 333.07 956.9 333.07Z"\n                        fill="white" />\n                </g>\n                <g id="rocket">\n                    <path id="Vector_17" d="M635.46 400H466V406.78H635.46V400Z" fill="#535461" />\n                    <g id="body-rocket">\n                        <path id="Vector_18" d="M482.581 674.368H458.851L463.091 645.558H478.341L482.581 674.368Z"\n                            fill="#535461" />\n                        <path id="Vector_19" d="M685.931 674.368H662.211L666.441 645.558H681.701L685.931 674.368Z"\n                            fill="#535461" />\n                        <g id="Group" opacity="0.1">\n                            <path id="Vector_20" opacity="0.1"\n                                d="M665.261 656.998H682.881L681.701 648.948H666.441L665.261 656.998Z" fill="black" />\n                        </g>\n                        <path id="Vector_21" d="M559.681 674.368H535.961L540.191 645.558H555.451L559.681 674.368Z"\n                            fill="#535461" />\n                        <path id="Vector_22" d="M607.981 674.368H584.261L588.491 645.558H603.741L607.981 674.368Z"\n                            fill="#535461" />\n                        <g id="Group_2" opacity="0.1">\n                            <path id="Vector_23" opacity="0.1"\n                                d="M587.311 656.998H604.931L603.741 648.948H588.491L587.311 656.998Z" fill="black" />\n                        </g>\n                        <path id="Vector_24"\n                            d="M677.861 300.724L677.86 300.724L677.869 300.733C681.479 304.531 686.193 310.849 691.386 320.975C702.335 342.647 707.995 366.605 707.901 390.887V390.888V652.328H633.901L633.901 391.988L633.901 391.986C633.785 367.014 639.733 342.386 651.234 320.22C655.114 312.85 659.549 305.944 664.436 300.73L664.436 300.73L664.442 300.724C665.29 299.787 666.326 299.038 667.481 298.525C668.637 298.012 669.887 297.747 671.151 297.747C672.415 297.747 673.666 298.012 674.821 298.525C675.977 299.038 677.012 299.787 677.861 300.724Z"\n                            fill="#E0E0E0" stroke="black" />\n                        <path id="Vector_25"\n                            d="M463.524 300.733L463.524 300.733L463.532 300.724C464.38 299.787 465.416 299.038 466.571 298.525C467.727 298.012 468.977 297.747 470.241 297.747C471.505 297.747 472.755 298.012 473.911 298.525C475.067 299.038 476.102 299.787 476.95 300.724L476.95 300.724L476.957 300.731C481.853 305.944 486.278 312.85 490.168 320.22C501.665 342.388 507.612 367.014 507.501 391.986V391.988V652.328H433.501L433.501 390.888L433.501 390.887C433.408 366.605 439.067 342.647 450.017 320.975C455.2 310.849 459.913 304.531 463.524 300.733Z"\n                            fill="#E0E0E0" stroke="black" />\n                        <path id="Vector_26" d="M490.201 396.448L508.001 396.538V418.478H490.201V396.448Z"\n                            fill="#535461" />\n                        <path id="Vector_27" d="M633.401 396.448L651.191 396.538V418.478H633.401V396.448Z"\n                            fill="#535461" />\n                        <g id="Group_3" opacity="0.1">\n                            <path id="Vector_28" opacity="0.1"\n                                d="M490.611 319.648C486.711 312.258 482.261 305.308 477.321 300.048C475.926 298.502 474.062 297.456 472.016 297.071C469.969 296.686 467.852 296.984 465.991 297.918C467.063 298.453 468.032 299.175 468.851 300.048C473.781 305.308 478.241 312.258 482.131 319.648C493.671 341.887 499.638 366.595 499.521 391.648V652.468H508.001V391.658C508.115 366.602 502.147 341.892 490.611 319.648V319.648Z"\n                                fill="black" />\n                        </g>\n                        <g id="Group_4" opacity="0.1">\n                            <path id="Vector_29" opacity="0.1"\n                                d="M657.571 320.368C661.461 312.978 665.921 306.028 670.851 300.768C671.773 299.772 672.889 298.976 674.131 298.428C672.298 297.626 670.26 297.421 668.304 297.841C666.348 298.261 664.573 299.285 663.231 300.768C658.291 306.028 653.831 312.978 649.941 320.368C638.407 342.609 632.44 367.315 632.551 392.368V653.228H640.181V392.388C640.061 367.328 646.029 342.613 657.571 320.368V320.368Z"\n                                fill="black" />\n                        </g>\n                        <path id="Vector_30"\n                            d="M471.041 738.768H470.391C467.331 738.768 464.395 737.553 462.231 735.388C460.067 733.224 458.851 730.289 458.851 727.228V674.368H482.581V727.228C482.581 730.289 481.365 733.224 479.201 735.388C477.037 737.553 474.102 738.768 471.041 738.768Z"\n                            fill="url(#paint0_linear)" />\n                        <path id="Vector_31"\n                            d="M548.371 738.518H547.721C544.661 738.518 541.725 737.303 539.561 735.138C537.397 732.974 536.181 730.039 536.181 726.978V674.118H559.911V726.978C559.911 730.039 558.695 732.974 556.531 735.138C554.367 737.303 551.432 738.518 548.371 738.518Z"\n                            fill="url(#paint1_linear)" />\n                        <path id="Vector_32"\n                            d="M597.371 738.518H596.721C593.661 738.518 590.725 737.303 588.561 735.138C586.397 732.974 585.181 730.039 585.181 726.978V674.118H608.911V726.978C608.911 730.039 607.695 732.974 605.531 735.138C603.367 737.303 600.432 738.518 597.371 738.518Z"\n                            fill="url(#paint2_linear)" />\n                        <path id="Vector_33"\n                            d="M674.371 738.518H673.721C670.661 738.518 667.725 737.303 665.561 735.138C663.397 732.974 662.181 730.039 662.181 726.978V674.118H685.911V726.978C685.911 730.039 684.695 732.974 682.531 735.138C680.367 737.303 677.432 738.518 674.371 738.518Z"\n                            fill="url(#paint3_linear)" />\n                        <path id="Vector_34"\n                            d="M578.51 96.4834L578.52 96.4957L578.531 96.5076C583.685 102.221 590.434 111.588 597.797 126.726L597.798 126.73C613.465 158.638 621.544 194.732 621.655 231.32L622.93 650.608L517.93 650.927L516.661 233.319C516.547 195.664 524.762 158.515 541.048 125.774C546.594 114.716 552.917 104.371 559.813 96.561L559.822 96.5507L559.831 96.5402C560.972 95.1742 562.398 94.0744 564.009 93.3179C565.62 92.5615 567.377 92.1667 569.157 92.1613C570.937 92.1559 572.697 92.54 574.312 93.2866C575.928 94.0333 577.361 95.1244 578.51 96.4834Z"\n                            fill="#EEEEEE" stroke="black" stroke-width="2" />\n                        <path id="Vector_35"\n                            d="M585.811 142.368H551.971C545.896 142.368 540.971 147.293 540.971 153.368V156.958C540.971 163.034 545.896 167.958 551.971 167.958H585.811C591.886 167.958 596.811 163.034 596.811 156.958V153.368C596.811 147.293 591.886 142.368 585.811 142.368Z"\n                            fill="#535461" />\n                        <path id="Vector_36" d="M433.431 396.448L451.231 396.538V418.478H433.431V396.448Z"\n                            fill="#535461" />\n                        <path id="Vector_37" d="M690.171 396.448L707.961 396.538V418.478H690.171V396.448Z"\n                            fill="#535461" />\n                    </g>\n                </g>\n            </g>\n            <defs>\n                <filter id="filter0_d" x="0" y="0" width="1123" height="837" filterUnits="userSpaceOnUse"\n                    color-interpolation-filters="sRGB">\n                    <feFlood flood-opacity="0" result="BackgroundImageFix" />\n                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />\n                    <feOffset dy="4" />\n                    <feGaussianBlur stdDeviation="15" />\n                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0" />\n                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />\n                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />\n                </filter>\n                <linearGradient id="paint0_linear" x1="470.721" y1="674.368" x2="470.721" y2="738.768"\n                    gradientUnits="userSpaceOnUse">\n                    <stop stop-color="#E0E0E0" />\n                    <stop offset="0.31" stop-color="#FCCC63" />\n                    <stop offset="0.77" stop-color="#F55F44" />\n                </linearGradient>\n                <linearGradient id="paint1_linear" x1="548.051" y1="674.118" x2="548.051" y2="738.518"\n                    gradientUnits="userSpaceOnUse">\n                    <stop stop-color="#E0E0E0" />\n                    <stop offset="0.31" stop-color="#FCCC63" />\n                    <stop offset="0.77" stop-color="#F55F44" />\n                </linearGradient>\n                <linearGradient id="paint2_linear" x1="597.051" y1="674.118" x2="597.051" y2="738.518"\n                    gradientUnits="userSpaceOnUse">\n                    <stop stop-color="#E0E0E0" />\n                    <stop offset="0.31" stop-color="#FCCC63" />\n                    <stop offset="0.77" stop-color="#F55F44" />\n                </linearGradient>\n                <linearGradient id="paint3_linear" x1="674.051" y1="674.118" x2="674.051" y2="738.518"\n                    gradientUnits="userSpaceOnUse">\n                    <stop stop-color="#E0E0E0" />\n                    <stop offset="0.31" stop-color="#FCCC63" />\n                    <stop offset="0.77" stop-color="#F55F44" />\n                </linearGradient>\n            </defs>\n        </svg>\n        <div class="text">\n        <h1>404 Hatas\u0131 Ald\u0131n</h1>\n        <h2>Roketler \xe7al\u0131\u015fmad\u0131 :(</h2>\n        <h3>Sayfa Bulunamad\u0131 - hadi seni <a href="https://www.cangokceaslan.com">Ana Sayfaya</a> alal\u0131m</h3>\n    </div>\n    </div>'}})}}}]);
//# sourceMappingURL=3.2d654b7e.chunk.js.map