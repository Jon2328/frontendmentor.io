(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2],{291:function(t,e,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(115).default)("250870f1",content,!0,{sourceMap:!1})},292:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyNCIgY3k9IjI0IiByPSIyNCIgZmlsbD0iI0ZGRiIvPjxwYXRoIGZpbGw9IiMwQjBEMTciIGQ9Ik0yNCAwYzAgMTYtOCAyNC0yNCAyNCAxNS43MTguMTE0IDIzLjcxOCA4LjExNCAyNCAyNCAwLTE2IDgtMjQgMjQtMjQtMTYgMC0yNC04LTI0LTI0eiIvPjwvZz48L3N2Zz4="},293:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyMSI+PGcgZmlsbD0iI0QwRDZGOSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDI0djNIMHpNMCA5aDI0djNIMHpNMCAxOGgyNHYzSDB6Ii8+PC9nPjwvc3ZnPg=="},294:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMSI+PGcgZmlsbD0iI0QwRDZGOSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMi41NzUuOTU0bDE2Ljk3IDE2Ljk3LTIuMTIgMi4xMjJMLjQ1NSAzLjA3NnoiLz48cGF0aCBkPSJNLjQ1NCAxNy45MjVMMTcuNDI0Ljk1NWwyLjEyMiAyLjEyLTE2Ljk3IDE2Ljk3eiIvPjwvZz48L3N2Zz4="},295:function(t,e,n){"use strict";n(291)},296:function(t,e,n){var o=n(114)(!1);o.push([t.i,"#NavBar{width:100vw;display:flex;padding-top:40px;position:relative}#NavBar .logo{width:48px;height:48px;margin:auto auto auto 55px}@media screen and (max-width:500px){#NavBar .logo{width:40px;height:40px;margin:auto auto auto 24px}}#NavBar .line{display:none}@media screen and (min-width:900px){#NavBar .line{display:block;position:absolute;background-color:#fff;opacity:.2;height:1px;width:calc(40% - 100px);z-index:2;top:calc(50% + 20px);left:133px;transform:translateY(-50%)}}#NavBar .nav-container-desktop{margin-left:auto;background:hsla(0,0%,100%,.04);-webkit-backdrop-filter:blur(81.5485px);backdrop-filter:blur(81.5485px);display:flex;align-items:center;padding-left:5%;width:60%}@media screen and (max-width:500px){#NavBar .nav-container-desktop{display:none}}#NavBar .nav-container-desktop a{margin:0 25px;text-decoration:none;font-family:BarlowCondensed;font-size:16px;height:70px;align-items:center;display:flex;padding-bottom:3px}#NavBar .nav-container-desktop a:hover{padding-bottom:0;border-bottom:3px solid hsla(0,0%,100%,.5)}#NavBar .nav-container-desktop a.chosen{padding-bottom:0;border-bottom:3px solid #fff}#NavBar .nav-container-desktop a span{font-weight:700;margin-right:5px;display:none}@media screen and (min-width:900px){#NavBar .nav-container-desktop a span{display:inline-block}}#NavBar .hamburger{display:none}@media screen and (max-width:500px){#NavBar .hamburger{display:block;width:24px;height:21px;margin:auto 24px auto auto}}#NavBar .nav-container-mobile{display:none;transition:.5s}@media screen and (max-width:500px){#NavBar .nav-container-mobile{top:0;right:0;display:flex;flex-direction:column;position:fixed;height:100vh;width:67.5vw;z-index:10;background:hsla(0,0%,100%,.04);-webkit-backdrop-filter:blur(81.5485px);backdrop-filter:blur(81.5485px);transform:translateX(67.5vw)}}#NavBar .nav-container-mobile.active{transform:translateX(0)}#NavBar .nav-container-mobile .close{width:19px;height:19px;margin:33px 26px 65px auto}#NavBar .nav-container-mobile a{margin:0 25px 0 40px;text-decoration:none;font-family:BarlowCondensed;font-size:16px;height:70px;align-items:center;display:flex;padding-bottom:3px}#NavBar .nav-container-mobile a span{font-weight:700;margin-right:5px;display:inline-block}",""]),t.exports=o},297:function(t,e,n){"use strict";n.r(e);var o=n(81),r=Object(o.a)({setup:function(){var t=Object(o.e)(),e=Object(o.c)({currentNav:"",hamburgerOpen:!1});return"/"===t.value.path?e.currentNav="HOME":"/dest"===t.value.path?e.currentNav="DESTINATION":"/crew"===t.value.path?e.currentNav="CREW":"/tech"===t.value.path&&(e.currentNav="TECHNOLOGY"),{state:e,hamburgerClick:function(){e.hamburgerOpen=!e.hamburgerOpen}}}}),c=(n(295),n(54)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"NavBar"}},[o("img",{staticClass:"logo",attrs:{src:n(292)}}),o("div",{staticClass:"line"}),o("div",{staticClass:"nav-container-desktop"},[o("NuxtLink",{class:[{chosen:"HOME"===t.state.currentNav}],attrs:{to:"/"}},[o("span",[t._v("00")]),t._v(" HOME")]),o("NuxtLink",{class:[{chosen:"DESTINATION"===t.state.currentNav}],attrs:{to:"/dest"}},[o("span",[t._v("01")]),t._v(" DESTINATION")]),o("NuxtLink",{class:[{chosen:"CREW"===t.state.currentNav}],attrs:{to:"/crew"}},[o("span",[t._v("02")]),t._v(" CREW")]),o("NuxtLink",{class:[{chosen:"TECHNOLOGY"===t.state.currentNav}],attrs:{to:"/tech"}},[o("span",[t._v("03")]),t._v(" TECHNOLOGY")])],1),o("img",{staticClass:"hamburger",attrs:{src:n(293)},on:{click:t.hamburgerClick}}),o("div",{staticClass:"nav-container-mobile",class:[{active:t.state.hamburgerOpen}]},[o("img",{staticClass:"close",attrs:{src:n(294)},on:{click:t.hamburgerClick}}),o("NuxtLink",{class:[{chosen:"HOME"===t.state.currentNav}],attrs:{to:"/"}},[o("span",[t._v("00")]),t._v(" HOME")]),o("NuxtLink",{class:[{chosen:"DESTINATION"===t.state.currentNav}],attrs:{to:"/dest"}},[o("span",[t._v("01")]),t._v(" DESTINATION")]),o("NuxtLink",{class:[{chosen:"CREW"===t.state.currentNav}],attrs:{to:"/crew"}},[o("span",[t._v("02")]),t._v(" CREW")]),o("NuxtLink",{class:[{chosen:"TECHNOLOGY"===t.state.currentNav}],attrs:{to:"/tech"}},[o("span",[t._v("03")]),t._v(" TECHNOLOGY")])],1)])}),[],!1,null,null,null);e.default=component.exports},301:function(t,e,n){var content=n(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(115).default)("1a57d1e3",content,!0,{sourceMap:!1})},332:function(t,e,n){"use strict";n(301)},333:function(t,e,n){var o=n(114),r=n(193),c=n(334),d=n(335),l=n(336),x=o(!1),m=r(c),h=r(d),v=r(l);x.push([t.i,"#home{background-image:url("+m+");background-size:cover;background-repeat:no-repeat;width:100vw;height:100vh;position:relative}@media screen and (max-width:899px)and (min-width:501px){#home{background-image:url("+h+")}}@media screen and (max-width:500px){#home{background-image:url("+v+')}}#home .content-container{display:flex;position:absolute;bottom:10%;width:100%}@media screen and (max-width:899px)and (min-width:501px){#home .content-container{flex-direction:column;justify-content:center}}@media screen and (max-width:500px){#home .content-container{flex-direction:column;justify-content:center}}#home .content-container .text-content{display:flex;flex-direction:column;width:50%;padding:0 10%}@media screen and (max-width:899px)and (min-width:501px){#home .content-container .text-content{width:80%;margin:auto;align-items:center}}@media screen and (max-width:500px){#home .content-container .text-content{width:95%;margin:auto;align-items:center}}#home .content-container .text-content .opener-text1{font-family:BarlowCondensed;font-size:28px;color:#d0d6f9;letter-spacing:4.725px;text-transform:uppercase;font-weight:400}@media screen and (max-width:899px)and (min-width:501px){#home .content-container .text-content .opener-text1{font-size:20px;line-height:24px}}@media screen and (max-width:500px){#home .content-container .text-content .opener-text1{font-size:16px;line-height:19px}}#home .content-container .text-content .opener-text2{font-family:Bellefair;font-size:150px;text-transform:uppercase;font-weight:400;margin:25px 0 10px}@media screen and (max-width:500px){#home .content-container .text-content .opener-text2{font-size:80px;line-height:100px}}#home .content-container .text-content .opener-text3{font-family:Barlow;font-size:18px;color:#d0d6f9;line-height:32px}@media screen and (max-width:899px)and (min-width:501px){#home .content-container .text-content .opener-text3{font-size:16px;line-height:28px;text-align:center}}@media screen and (max-width:500px){#home .content-container .text-content .opener-text3{font-size:15px;line-height:25px;text-align:center}}#home .content-container .btn-container{width:50%;position:relative}@media screen and (max-width:899px)and (min-width:501px){#home .content-container .btn-container{width:80%;display:flex;justify-content:center;margin:10% auto auto}}@media screen and (max-width:500px){#home .content-container .btn-container{width:95%;display:flex;justify-content:center;margin:10% auto auto}}#home .content-container .btn-container a{position:absolute;bottom:45px;right:100px;width:274px;height:274px;color:#000;background-color:#fff;border-radius:50%;font-family:"Bellefair";font-weight:400;font-size:32px;line-height:37px;letter-spacing:2px;text-align:center;line-height:274px;text-decoration:none}#home .content-container .btn-container a:after{content:"";display:block;position:absolute;border-radius:50%;background-color:#fff;opacity:.1;width:375px;height:375px;top:-51px;left:-51px;opacity:0;transition:.25s}#home .content-container .btn-container a:hover:after{opacity:.1}@media screen and (max-width:899px)and (min-width:501px){#home .content-container .btn-container a{position:static}}@media screen and (max-width:500px){#home .content-container .btn-container a{position:static;width:150px;height:150px;font-size:20px;line-height:150px}}',""]),t.exports=x},334:function(t,e,n){t.exports=n.p+"img/background-home-desktop.cdf3864.jpg"},335:function(t,e,n){t.exports=n.p+"img/background-home-tablet.bc9efcc.jpg"},336:function(t,e,n){t.exports=n.p+"img/background-home-mobile.13f7ade.jpg"},342:function(t,e,n){"use strict";n.r(e);var o=n(81),r=Object(o.a)({setup:function(){return{}}}),c=(n(332),n(54)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("NavBar"),n("div",{staticClass:"content-container"},[t._m(0),n("div",{staticClass:"btn-container"},[n("NuxtLink",{attrs:{to:"/dest"}},[t._v("EXPLORE")])],1)])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-content"},[n("h1",{staticClass:"opener-text1"},[t._v("So, you want to travel to")]),n("h1",{staticClass:"opener-text2"},[t._v("Space")]),n("p",{staticClass:"opener-text3"},[t._v("Let’s face it; if you want to go to space, you might as well genuinely go to \nouter space and not hover kind of on the edge of it. Well sit back, and relax \nbecause we’ll give you a truly out of this world experience!")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NavBar:n(297).default})}}]);