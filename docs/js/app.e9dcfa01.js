(function(t){function e(e){for(var s,n,o=e[0],c=e[1],l=e[2],u=0,g=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&g.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);m&&m(e);while(g.length)g.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},r=[];function n(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b2148":"a16b40fe","chunk-2d0c1283":"cf72e7cb","chunk-2d217357":"fae40126","chunk-2d22ccdd":"8b72c7e4"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=i[t]=[e,s]}));e.push(a[2]=s);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=n(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",l.name="ChunkLoadError",l.type=s,l.request=r,a[1](l)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var m=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"010f":function(t,e,a){t.exports=a.p+"img/jquery.e8266b8c.svg"},"03e5":function(t){t.exports=JSON.parse('[{"params":"html","name":"HTML","picSrc":"html5.svg","desc":["静的なWebページ開発ができます。","サーバーにリクエストし、動的に画面をレンダリングすることができます。","CSSやJavaScriptなどを使い、インタラクティブにすることができます。"],"status":"","techs":[{"tagPic":"css3.svg","name":"CSS"},{"tagPic":"javascript.svg","name":"JavaScript"}],"worksDesc":"最初は静的なページから知り始めましたが、 その後Ajax技術やサーバーやデータベース関連の知識などを日々頑張っています。ここで展示しているのは架空サイトや独自開発です、最初の練習として大手のウェブサイトページの模写も色々いやりましたが、著作権のため、ここで展示していません。","worksPC":[{"name":"EC PinYouGo Shopping","mianPic":"https://github.com/BlaxBerry/PC-Static-Web-PinYouGoShopping/raw/master/images/screenshot1.png","website":"https://blaxberry.github.io/PC-Static-Web-PinYouGoShopping/","github":"https://github.com/BlaxBerry/PC-Static-Web-PinYouGoShopping"},{"name":"EC QingZhu Shopping","mianPic":"https://pbs.twimg.com/media/E4tBTASUUAU1_C5?format=jpg&name=small","desc":"PC Static","website":"https://blaxberry.github.io/PC-Static-Web-QingZhuShopping/","github":"https://github.com/BlaxBerry/PC-Static-Web-QingZhuShopping","pics":["https://pbs.twimg.com/media/E4tBTASUUAU1_C5?format=jpg&name=small","https://pbs.twimg.com/media/E4tBTAAVoAEaf-L?format=jpg&name=large","https://pbs.twimg.com/media/E4tBTAwVEAABpaX?format=jpg&name=large"]},{"name":"Wedding Dress","mianPic":"https://github.com/BlaxBerry/PC-Static-Web-weddingdress/raw/master/images/01.png","website":"https://blaxberry.github.io/PC-Static-Web-weddingdress/","github":"https://github.com/BlaxBerry/PC-Static-Web-weddingdress"},{"name":"SPA Music Player","github":"https://github.com/BlaxBerry/vue-music-player","mianPic":"https://github.com/BlaxBerry/vue-music-player/raw/master/src/assets/images/pc01.png"},{"name":"LocalStorage TodoList","mianPic":"https://pbs.twimg.com/media/EuRg8zRVgAQMwVi?format=png&name=small","desc":"PC Static","website":"","github":"https://github.com/BlaxBerry/JS--todoList"},{"name":"Portofilo Version 3.0","github":"https://github.com/BlaxBerry/BlaxBerry.github.io","mianPic":"https://github.com/BlaxBerry/BlaxBerry.github.io/raw/master/src/assets/upload/mask01.png"},{"name":"Portofilo Version 2.0","mianPic":"https://pbs.twimg.com/media/E2GCxw_VgAEu50C?format=jpg&name=large","website":"https://github.com/BlaxBerry/BlaxBerry.github.io","github":"https://github.com/BlaxBerry/BlaxBerry.github.io"},{"name":"Portofilo Version 1.0","mianPic":"https://pbs.twimg.com/media/E13hF3OVoAMyw1S?format=jpg&name=medium","website":"https://github.com/BlaxBerry/BlaxBerry.github.io","github":"https://github.com/BlaxBerry/BlaxBerry.github.io"},{"name":"SSR Student Info Management","github":"https://github.com/BlaxBerry/SSR-user_info_management","mianPic":"https://github.com/BlaxBerry/SSR-user_info_management/raw/master/public/images/list.png"}],"worksMobile":[{"name":"SSR Student Info Management","github":"https://github.com/BlaxBerry/SSR-user_info_management","mianPic":"https://github.com/BlaxBerry/SSR-user_info_management/raw/master/public/images/list.png"}]},{"params":"css","name":"CSS","picSrc":"css3.svg","desc":["レスポンシブレイアウト開発ができます","Animationでインタラクティブできます。","MediaQueryでレスポンシブデザインができます。","Bootstrapなどのフレームワークが使えます。","SassやLessなど、CSSプリプロセッサが使えます。"],"status":"","techs":[{"tagPic":"bootstrap.svg","name":"Bootstrap"},{"tagPic":"less.svg","name":"Less"},{"tagPic":"sass.svg","name":"Sass"}],"worksPC":[{"name":"Portofilo Version 3.0","github":"https://github.com/BlaxBerry/BlaxBerry.github.io","mianPic":"https://github.com/BlaxBerry/BlaxBerry.github.io/raw/master/src/assets/upload/mask01.png"},{"name":"Portofilo Version 2.0","mianPic":"https://pbs.twimg.com/media/E2GCxw_VgAEu50C?format=jpg&name=large","website":"https://github.com/BlaxBerry/BlaxBerry.github.io","github":"https://github.com/BlaxBerry/BlaxBerry.github.io"},{"name":"Portofilo Version 1.0","mianPic":"https://pbs.twimg.com/media/E13hF3OVoAMyw1S?format=jpg&name=medium","website":"https://github.com/BlaxBerry/BlaxBerry.github.io","github":"https://github.com/BlaxBerry/BlaxBerry.github.io"},{"name":"Digital Clock","mianPic":"https://github.com/BlaxBerry/Demo_CSS/raw/master/Digital_clock/screenshot.png","desc":"","website":"","github":"https://github.com/BlaxBerry/Demo_CSS/tree/master/Digital_clock"},{"name":"Running Bear Animation","mianPic":"https://github.com/BlaxBerry/Demo_CSS/raw/master/running_bear/screenshot.png","desc":"","website":"","github":"https://github.com/BlaxBerry/Demo_CSS/tree/master/running_bear"},{"name":"SSR Student Info Management","github":"https://github.com/BlaxBerry/SSR-user_info_management","mianPic":"https://github.com/BlaxBerry/SSR-user_info_management/raw/master/public/images/list.png"}]},{"params":"javascript","name":"JavaScript","picSrc":"javascript.svg","desc":["ES6+","AsyncyやPromise","classやモジュール開発","AjaxやFetchリクエストして、ページをレンダリングうることができます。","引き続き強化中です..."],"status":"","techs":[{"tagPic":"ajax.svg","name":"Ajax"},{"tagPic":"nodejs.svg","name":"Node.js"},{"tagPic":"typescript.svg","name":"TypeScript"}],"works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]},{"params":"jquery","name":"jQuery","picSrc":"jquery.svg","desc":["基礎APIやAnimationなどでインタラクティブできます。","AjaxやJSONPでリクエストして、ページをレンダリングすることができます。"],"status":"","techs":[{"tagPic":"javascript.svg","name":"JavaScript"},{"tagPic":"ajax.svg","name":"Ajax"}],"worksPC":[{"name":"QingZhu Shopping","mianPic":"https://pbs.twimg.com/media/E4tBTASUUAU1_C5?format=jpg&name=small","website":"https://blaxberry.github.io/PC-Static-Web-QingZhuShopping/","github":"https://github.com/BlaxBerry/PC-Static-Web-QingZhuShopping"},{"name":"LocalStorage TodoList","mianPic":"https://pbs.twimg.com/media/EuRg8zRVgAQMwVi?format=png&name=small","website":"","github":"https://github.com/BlaxBerry/JS--todoList"},{"name":"Wedding Dress","mianPic":"https://github.com/BlaxBerry/PC-Static-Web-weddingdress/raw/master/images/01.png","website":"https://blaxberry.github.io/PC-Static-Web-weddingdress/","github":"https://github.com/BlaxBerry/PC-Static-Web-weddingdress"},{"name":"Portofilo Version 2.0","mianPic":"https://pbs.twimg.com/media/E2GCxw_VgAEu50C?format=jpg&name=large","website":"https://github.com/BlaxBerry/BlaxBerry.github.io","github":"https://github.com/BlaxBerry/BlaxBerry.github.io"},{"name":"Portofilo Version 1.0","mianPic":"https://pbs.twimg.com/media/E13hF3OVoAMyw1S?format=jpg&name=medium","website":"https://github.com/BlaxBerry/BlaxBerry.github.io","github":"https://github.com/BlaxBerry/BlaxBerry.github.io"}]},{"params":"typescript","name":"TypeScript","picSrc":"typescript.svg","desc":["勉強しています..."],"status":"","techs":[{"tagPic":"javascript.svg","name":"JavaScript"}],"works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]},{"params":"react","name":"React.js","picSrc":"react.svg","desc":["Create React Appが使えます。","Ant-Designなどのコンポーネントライブラリを利用し、開発することがきます。","React-Router-Domを使って、SPAシングルページアプリケーションを作成するできます。","Axiosでリクエストやレンダリングができます。","Reduxを勉強しています..."],"status":"","techs":[{"tagPic":"react.svg","name":"React-Router-Dom"},{"tagPic":"redux.svg","name":"Redux"}],"works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]},{"params":"vue","name":"Vue.js","picSrc":"vue.svg","desc":["Vue-Cliが使えます。","ElementUI、VantUIなどのコンポーネントライブラリを利用し、開発することがきます。","Vue-Routerを使って、SPAシングルページアプリケーションを作成するできます。","Axiosでリクエストやレンダリングができます。","Vuexを勉強しています...","EChartsを勉強しています..."],"status":"","techs":[{"tagPic":"vue.svg","name":"Vue-Rouer"},{"tagPic":"vuex.svg","name":"Vuex"},{"tagPic":"nuxtjs.svg","name":"Nuxt"},{"tagPic":"echart.svg","name":"ECharts"}],"worksPC":[{"name":"SPA Music Player","github":"https://github.com/BlaxBerry/vue-music-player","mianPic":"https://github.com/BlaxBerry/vue-music-player/raw/master/src/assets/images/pc01.png"},{"name":"Portofilo Version 3.0","github":"https://github.com/BlaxBerry/BlaxBerry.github.io","mianPic":"https://github.com/BlaxBerry/BlaxBerry.github.io/raw/master/src/assets/upload/mask01.png"},{"name":"Book Library Management","github":"https://github.com/BlaxBerry/SSR-user_info_management","mianPic":"https://github.com/BlaxBerry/SSR-user_info_management/raw/master/public/images/list.png"}]}]')},"0526":function(t){t.exports=JSON.parse('[{"name":"Wedding Dress Site","feature":[],"website":"https://blaxberry.github.io/PC-Static-Web-weddingdress/","github":"https://github.com/BlaxBerry/PC-Static-Web-weddingdress","desc":"This is a PC Static Website for Practicing basic box-model-layout and flexible-layout","techStack":["HTML5 + CSS3","jQuery"],"mianPic":"https://github.com/BlaxBerry/PC-Static-Web-weddingdress/raw/master/images/01.png","pics":["https://github.com/BlaxBerry/PC-Static-Web-weddingdress/raw/master/images/01.png","https://github.com/BlaxBerry/PC-Static-Web-weddingdress/raw/master/images/02.png","https://github.com/BlaxBerry/PC-Static-Web-weddingdress/raw/master/images/03.png","https://github.com/BlaxBerry/PC-Static-Web-weddingdress/raw/master/images/04.png"]},{"name":"Chen\'s Portfolio","feature":["could check more details of my Skills and Works, by clicking picture or link button of each one."],"website":"https://blaxberry.github.io/-Portfolio/","github":"https://github.com/BlaxBerry/-Portfolio","desc":"This is my Portfolio, a Responsive SPA (Single Page Application) created by Vue.js + Vue-Router, developed by Vue-Cli, rendering data to templates by Local JSON files.","techStack":["HTML5 + CSS3","Vue.js","Vue-Cli","Vue-Router","Webpack","Less","MediaQuery"],"mianPic":"https://github.com/BlaxBerry/BlaxBerry.github.io/raw/master/src/assets/upload/mask01.png","pics":["https://github.com/BlaxBerry/BlaxBerry.github.io/raw/master/src/assets/upload/mask01.png","https://github.com/BlaxBerry/BlaxBerry.github.io/raw/master/src/assets/upload/mask02.png"]},{"name":"Music Player","feature":["Category Page","Search Page","List Page"," MV Page","MV Play Detail Page"],"website":"https://github.com/BlaxBerry/vue-music-player","github":"https://github.com/BlaxBerry/vue-music-player","desc":"This is a SPA (Single Page Application) Player, created by Vue.js and Element-UI framework, requesting data by Axios from Local JSON files ( for persional using ).","techStack":["Vue.js","Vue-Cli","Vue-Router","Element UI","Axios","Webpack","Less"],"mianPic":"https://github.com/BlaxBerry/vue-music-player/raw/master/src/assets/images/pc01.png","pics":["https://github.com/BlaxBerry/vue-music-player/raw/master/src/assets/images/pc01.png"]},{"name":"SSR Student Info Management","feature":[],"website":"https://github.com/BlaxBerry/SSR-user_info_management","github":"https://github.com/BlaxBerry/SSR-user_info_management","desc":"SSR (Server Side Rending) created by Node.js, connected to MongoDB database, according to request URl and method, to send data from databaseto or to render pages by Router, using TemplateEngine art-template to render data in HTML.","techStack":["Node.js","MongoDB","art-template","route","serve-static","Bootstraps"],"mianPic":"https://github.com/BlaxBerry/SSR-user_info_management/raw/master/public/images/list.png","pics":["https://github.com/BlaxBerry/SSR-user_info_management/raw/master/public/images/list.png"]}]')},"0650":function(t,e,a){"use strict";a("e956")},"0757":function(t,e,a){"use strict";a("afff")},"08f2":function(t,e,a){"use strict";a("5b8e")},"0a62":function(t,e,a){"use strict";a("ba0b")},1131:function(t,e,a){t.exports=a.p+"img/bootstrap.ec496b78.svg"},"13fa":function(t,e,a){"use strict";a("6188")},1538:function(t,e,a){t.exports=a.p+"img/twitter.92454d7b.svg"},1786:function(t,e,a){},"217f":function(t,e,a){},2395:function(t,e,a){},"2c61":function(t,e,a){"use strict";a("5202")},"2cb6":function(t,e,a){"use strict";a("fe7c")},"2ccb":function(t){t.exports=JSON.parse('[{"name":"SPA Book Shop","feature":["must Register user\'s Account at the beginnin.","must Login Account before using. ( Test Account: andy@qq.com | 123456 )","could Add Product from detail page.","could Remove or Change Product\'s Count in persional Shopping-Cart page.","Must set user\'s Retailer before making a Purchase.","could check Order-List and Status of Products\' Transportation, after making a Purchase."],"website":"https://blaxberry.github.io/Mobile-book-shopping/","github":"https://github.com/BlaxBerry/Mobile-book-shopping","desc":"This is a Mobile EC (Electronic Commerce) Web Application, created by Vue.js and VantUI framework, used Vue-Router for SPA (Single Page Application), developed by Vue-Cli, requesting data by Axios from free API.","techStack":["Vue.js","Vue-Cli","Vue-Router","Vant UI","Axios","Webpack","Less","LocalStorage"],"mianPic":"https://github.com/BlaxBerry/Mobile-book-shopping/raw/main/src/assets/images/MK-Home.png","pics":["https://github.com/BlaxBerry/Mobile-book-shopping/raw/main/src/assets/images/MK-Home.png","https://github.com/BlaxBerry/Mobile-book-shopping/raw/main/src/assets/images/MK-Category.png","https://github.com/BlaxBerry/Mobile-book-shopping/raw/main/src/assets/images/MK-Profile.png","https://github.com/BlaxBerry/Mobile-book-shopping/raw/main/src/assets/images/MK-Detail.png","https://github.com/BlaxBerry/Mobile-book-shopping/raw/main/src/assets/images/MK-Register.png","https://github.com/BlaxBerry/Mobile-book-shopping/raw/main/src/assets/images/MK-Cart.png","https://github.com/BlaxBerry/Mobile-book-shopping/raw/main/src/assets/images/MK-EditAddress.png","https://github.com/BlaxBerry/Mobile-book-shopping/raw/main/src/assets/images/Pay.png"]},{"name":"Music Player","feature":["Category Page","Search Page","List Page"," MV Page","MV Play Detail Page"],"website":"","github":"https://github.com/BlaxBerry/vue-music-player","desc":"This is a SPA (Single Page Application) Player, created by Vue.js and Element-UI framework, requesting data by Axios from Local JSON files ( for persional using ).","techStack":["Vue.js","Vue-Cli","Vue-Router","Element UI","Axios","Webpack","Less"],"mianPic":"https://github.com/BlaxBerry/vue-music-player/raw/master/src/assets/images/mobile01.png","pics":["https://github.com/BlaxBerry/vue-music-player/raw/master/src/assets/images/mobile01.png","https://github.com/BlaxBerry/vue-music-player/raw/master/src/assets/images/mobile02.png","https://github.com/BlaxBerry/vue-music-player/raw/master/src/assets/images/mobile03.png"]},{"name":"Todo List","feature":["Add, Delete, Search Task List.","Record Data in LocalStorage."],"website":"https://blaxberry.github.io/JS--TaskList/","github":"https://github.com/BlaxBerry/Mobile-book-shopping","desc":"This is a Web Application about Task List Management, according to Material Design, user\'s data recorded by LocalStorage.","techStack":["LocalStorage","Material Framework","Font Awesome"],"mianPic":"https://huntr-assets.s3.amazonaws.com/users/151810189/ddde0ab7-8a48-4573-8b57-61ada72763b5","pics":["https://huntr-assets.s3.amazonaws.com/users/151810189/ddde0ab7-8a48-4573-8b57-61ada72763b5"]}]')},3646:function(t,e,a){t.exports=a.p+"img/css3.2b997854.svg"},"4fc3":function(t,e,a){t.exports=a.p+"img/vue.9febcf8b.svg"},5202:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],n=(a("7c55"),a("2877")),o={},c=Object(n["a"])(o,i,r,!1,null,null,null),l=c.exports,u=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t._v(" Home Page "),a("Header"),a("AboutSite"),a("AboutMe"),a("Works"),a("Skills"),a("Contact"),a("Footer"),t.maskWorkFlag?a("MaskWork",{attrs:{workData:t.cardWorkData}}):t._e(),t.maskSkillFlag?a("MaskSkill",{attrs:{skillData:t.cardSkillData}}):t._e()],1)},g=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[t._v(" Header ")])},h=[],b={},d=b,f=Object(n["a"])(d,p,h,!1,null,"b29a9eda",null),v=f.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aboutsite"},[a("p",{staticClass:"center-align"},[t._v(" ここは "),a("b",[t._v("Chen")]),t._v(" のポートフォリオサイトです。"),a("br"),t._v(" これまでに手がけた制作物、身につけたスキルをまとめています。"),a("br")])])}],B={},x=B,y=(a("0650"),Object(n["a"])(x,k,S,!1,null,"11e6383d",null)),_=y.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-me bgk-pic-box "},[a("Title",[a("h1",{staticClass:"title1",attrs:{slot:"title1"},slot:"title1"},[t._v("About Me")]),a("h2",{staticClass:"title2",attrs:{slot:"title2"},slot:"title2"},[t._v("自分について")])]),a("div",{staticClass:"about-card glass-box session"},[t._m(0),a("div",{staticClass:"about-card-text"},[a("p",[t._v(" 中国出身、外国語学部卒業、前職は不動産営業。 前職でITプログラミングを知り初めて独学して、プログラミングに深く惹かれました。 一流なエンジニアという夢を目指して、日々勉強や練習を重ねて頑張って行きます。 ")]),a("ContactLinks"),a("div",{staticClass:"center-align"},[a("router-link",{attrs:{to:"/profile"}},[t._v("Show Profile ->")])],1)],1)])],1)},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about-card-img"},[s("img",{attrs:{src:a("917e"),alt:""}})])}],P=a("5ce3"),j=a("9ec9"),M={components:{Title:P["a"],ContactLinks:j["a"]}},A=M,E=(a("5cb3"),Object(n["a"])(A,C,w,!1,null,"4a6140f5",null)),D=E.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"skills session"},[a("Title",[a("h1",{staticClass:"title1",attrs:{slot:"title1"},slot:"title1"},[t._v("Skills")]),a("h2",{staticClass:"title2",attrs:{slot:"title2"},slot:"title2"},[t._v("スキルについて")])]),a("p",[t._v(" 今まで身に付いているスキルは主にフロントエンドですが、 今後は積極的に挑戦し、開発経験を積んだ上で、 フロントエンドからバックエンドまで、幅広くスキルアップに取り組んでいきたいと考えています。 スキルに対する理解が浅く、専門性の低さも認識していますが、 必ず引き続き勉強し、少しずつ専門性を高めて行きたいと思います。 ")]),a("br"),t._m(0),a("Title",[a("h3",{staticClass:"title3",attrs:{slot:"title3"},slot:"title3"},[t._v("- Front End -")])]),a("CardSkill",{attrs:{list:t.frondEnd}}),a("Title",[a("h3",{staticClass:"title3",attrs:{slot:"title3"},slot:"title3"},[t._v("- Server Side -")])]),a("CardSkill",{attrs:{list:t.serverSide}}),a("Title",[a("h3",{staticClass:"title3",attrs:{slot:"title3"},slot:"title3"},[t._v("- Database -")])]),a("CardSkill",{attrs:{list:t.dataBase}}),a("Title",[a("h3",{staticClass:"title3",attrs:{slot:"title3"},slot:"title3"},[t._v("- Others -")])]),a("CardSkill",{attrs:{list:t.otherSkills}}),a("br"),t._m(1)],1)},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"center-align showdetail"},[a("b",[t._v("( Click the picture of skill to Check More Details )")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"center-align showdetail"},[a("b",[t._v("( Click the picture of skill to Check More Details )")])])}],T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cardskill-container"},t._l(t.list,(function(e,i){return s("div",{key:i,staticClass:"center-align card-skill",on:{click:function(a){return t.clickSkillTag(e)}}},[s("img",{attrs:{src:a("7584")("./"+e.picSrc),alt:""}}),s("h4",[t._v(t._s(e.name))])])})),0)},V=[],L={props:["list"],data:function(){return{isClick:!1}},methods:{clickSkillTag:function(t){var e=this;setTimeout((function(){e.$parent.$parent._data.maskSkillFlag=!0,e.$parent.$parent._data.cardSkillData=t,console.log(t)}),200)}}},O=L,$=(a("edec"),Object(n["a"])(O,T,V,!1,null,"769e7d08",null)),I=$.exports,N=a("03e5"),J=a("71a9"),F=a("864f"),Q=a("9a1d"),U=N,q=J,H=F,G=Q,K={data:function(){return{frondEnd:U,serverSide:q,dataBase:H,otherSkills:G}},components:{Title:P["a"],CardSkill:I}},Z=K,z=(a("2cb6"),Object(n["a"])(Z,R,W,!1,null,"dd1c1f1e",null)),Y=z.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"works"},[a("Title",[a("h1",{staticClass:"title1",attrs:{slot:"title1"},slot:"title1"},[t._v("Works")]),a("h2",{staticClass:"title2",attrs:{slot:"title2"},slot:"title2"},[t._v("一部の作品")])]),a("p",{staticClass:"session"},[t._v(" 最初は静的なページから知り始めましたが、 その後Ajax技術やサーバーやデータベース関連の知識などを日々頑張っており、 今まで独自の練習や開発の成果を残してきました。 いずれバックエンドまで幅広くスキルアップに取り組んでいきたいと考えています。 ")]),a("br"),a("Title",[a("h1",{staticClass:"title3",attrs:{slot:"title1"},slot:"title1"},[t._v("- Mobile 端末 -")])]),a("p",{staticClass:"center-align"}),a("CardWorkMobile",{attrs:{list:t.worksMobile}}),a("Title",[a("h1",{staticClass:"title3",attrs:{slot:"title1"},slot:"title1"},[t._v("- PC 端末 -")])]),a("p",{staticClass:"center-align"}),a("CardWorkPC",{attrs:{list:t.worksPC}}),a("div",{staticClass:"center-align"},[a("router-link",{attrs:{to:"/works"}},[t._v("More Works")])],1),a("br")],1)},tt=[],et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"card-work-container"},t._l(t.list,(function(e,s){return a("li",{key:s,staticClass:"card-work"},[a("img",{staticClass:"shadow-box scale-box grayscale-img",attrs:{src:e.mianPic,alt:""},on:{click:function(a){return t.clickCard(e)}}}),a("div",{staticClass:"card-content"},[a("h3",{staticClass:"center-align"}),a("p",{staticClass:"center-align"},[t._v(t._s(e.name))]),a("div",{staticClass:"center-align"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.clickCard(e)}}},[t._v("Show More Detail")])])])])})),0)])},at=[],st={props:["list"],data:function(){return{}},methods:{clickCard:function(t){this.$parent.$parent._data.cardWorkData=t,this.$parent.$parent._data.maskWorkFlag=!0}}},it=st,rt=(a("d451"),Object(n["a"])(it,et,at,!1,null,"72b95188",null)),nt=rt.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"card-work-container"},t._l(t.list,(function(e,s){return a("li",{key:s,staticClass:"card-work"},[a("img",{staticClass:"shadow-box scale-box",attrs:{src:e.mianPic,alt:""},on:{click:function(a){return t.clickCard(e)}}}),a("div",{staticClass:"card-content"},[a("h3",{staticClass:"center-align"}),a("p",{staticClass:"center-align"},[t._v(t._s(e.name))]),a("div",{staticClass:"center-align"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.clickCard(e)}}},[t._v("Show More Detail")])])])])})),0)])},ct=[],lt={props:["list"],data:function(){return{}},methods:{clickCard:function(t){this.$parent.$parent._data.cardWorkData=t,this.$parent.$parent._data.maskWorkFlag=!0}}},ut=lt,mt=(a("2c61"),Object(n["a"])(ut,ot,ct,!1,null,"d022a8fc",null)),gt=mt.exports,pt=a("0526"),ht=a("2ccb"),bt=pt,dt=ht,ft={data:function(){return{worksPC:bt,worksMobile:dt}},components:{Title:P["a"],CardWorkPC:nt,CardWorkMobile:gt}},vt=ft,kt=(a("08f2"),Object(n["a"])(vt,X,tt,!1,null,"484678ca",null)),St=kt.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact session"},[a("Title",[a("h1",{staticClass:"title1",attrs:{slot:"title1"},slot:"title1"},[t._v("Contact")]),a("h2",{staticClass:"title2",attrs:{slot:"title2"},slot:"title2"},[t._v("連絡について")])]),a("p",[t._v(" このポートフォリオを通して、私のことを少しでも知っていただければ嬉しいと思います。 もしこのサイトや私について何かコメントがありましたら、下記のリンクご利用ください。 ")]),a("ContactLinks")],1)},xt=[],yt={components:{Title:P["a"],ContactLinks:j["a"]}},_t=yt,Ct=Object(n["a"])(_t,Bt,xt,!1,null,"3d2c7b3a",null),wt=Ct.exports,Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer session"},[a("Title",[a("h1",{staticClass:"title1",attrs:{slot:"title1"},slot:"title1"},[t._v("Thanks for Watching")]),a("h2",{staticClass:"title3",attrs:{slot:"title3"},slot:"title3"},[t._v(" 最後までご覧頂き、心より感謝致します ")])]),t._m(0),a("br"),t._m(1),t._m(2)],1)},jt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 独自の開発していくうちに、自分の不足も認識しました。 今後も必ず深く勉強して改善し、そして専門性を高め、 一流のエンジニアを目指して、引き続き頑張っていきたいと思います。 "),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"version"},[a("a",{attrs:{href:"https://github.com/BlaxBerry/-Portfolio",target:"_blank"}},[t._v("Chen's Portofilo "),a("b",[t._v("Version 3.0")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"copyright"},[a("a",{attrs:{href:"https://github.com/BlaxBerry",target:"_blank"}},[t._v("© 2021 BlaxBerry")])])}],Mt={components:{Title:P["a"]}},At=Mt,Et=(a("0757"),Object(n["a"])(At,Pt,jt,!1,null,"5a0bb59a",null)),Dt=Et.exports,Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mask-work"},[a("div",{staticClass:"mask-close-btn shadow-box",on:{click:t.closeMasWork}},[t._v("X")]),a("div",{staticClass:"mask-content shadow-box"},[a("div",{staticClass:"work-text-box"},[a("h2",{staticClass:"mask-work-name"},[t._v(t._s(t.workData.name))]),a("br"),a("div",{staticClass:"mask-work-desc"},[a("p",[t._v(t._s(t.workData.desc))])]),a("br"),a("div",{staticClass:"mask-work-links"},[a("h4",[t._v("Check Links")]),a("a",{attrs:{href:t.workData.github,target:"_blank"}},[t._v("——>GitHub Code!!!")]),a("br"),a("a",{attrs:{href:t.workData.website,target:"_blank"}},[t._v("——>Demo!!!")])]),a("br"),a("div",{staticClass:"mask-work-feature"},[a("h4",[t._v("Function & Descriptoin")]),a("ul",t._l(t.workData.feature,(function(e,s){return a("li",{key:s},[a("p",[a("b",[t._v(t._s(s+1)+".")]),t._v(" "+t._s(e)+" ")])])})),0)]),a("br"),a("div",{staticClass:"mask-work-techtask"},[a("h4",[t._v("Tech Stack")]),a("ul",t._l(t.workData.techStack,(function(e,s){return a("li",{key:s},[a("p",[a("b",[t._v(" - ")]),t._v(t._s(e))])])})),0)])]),a("br"),a("div",{staticClass:"work-imgs-box"},[a("ul",{staticClass:"mask-work-small-imgs-list"},t._l(t.workData.pics,(function(e,s){return a("li",{key:s,staticClass:"mask-work-samll-img",on:{click:function(a){return t.clickSmallImg(e)}}},[a("img",{attrs:{src:e,alt:""}})])})),0),a("div",{staticClass:"mask-work-big-img"},[a("a",{attrs:{href:t.workData.website,target:"_blank"}},[a("img",{staticClass:" shadow-box",attrs:{src:""==t.smallPicSr?t.workData.mianPic:t.smallPicSr,alt:""}})])])])])])},Wt=[],Tt={props:["workData"],data:function(){return{smallPicSr:""}},methods:{closeMasWork:function(){this.$parent._data.maskWorkFlag=!1},clickSmallImg:function(t){this.smallPicSr=t}}},Vt=Tt,Lt=(a("5932"),Object(n["a"])(Vt,Rt,Wt,!1,null,"3835f4f2",null)),Ot=Lt.exports,$t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mask-skill"},[s("div",{staticClass:"mask-close-btn shadow-box",on:{click:t.closeMasWork}},[t._v("X")]),s("div",{staticClass:"mask-content"},[s("div",{staticClass:"skill-techs"},[s("ul",[s("li",{staticClass:"center-align"},[s("img",{attrs:{src:a("7584")("./"+t.skillData.picSrc),alt:""}}),s("h4",[t._v(t._s(t.skillData.name))])]),t._l(t.skillData.techs,(function(e,i){return s("li",{key:i,staticClass:"center-align"},[s("img",{attrs:{src:a("7584")("./"+e.tagPic),alt:""}}),s("h4",[t._v(t._s(e.name))])])}))],2)]),s("br"),s("div",{staticClass:"skill-desc"},t._l(t.skillData.desc,(function(e,a){return s("ul",{key:a},[s("li",[s("p",[s("b",[t._v("-")]),t._v(" "+t._s(e))])])])})),0),s("br"),s("h4",{staticClass:"title3"},[t._v("- Example Demo -")]),s("br"),s("div",{staticClass:"skill-works-pc"},[s("p",[t._v(t._s(t.skillData.worksDesc))]),s("br"),s("ul",t._l(t.skillData.worksPC,(function(e,a){return s("li",{key:a},[s("div",{staticClass:"work-pic"},[s("img",{staticClass:"shadow-box scale-box",attrs:{src:e.mianPic,alt:""},on:{click:function(a){return t.clickCard(e)}}}),s("div",{staticClass:"links-mask center-align"},[s("a",{attrs:{href:e.github,target:"_blank"},on:{click:function(a){return t.clickCard(e)}}},[t._v("Github Demo")])])]),s("p",{staticClass:"mask-work-name"},[t._v(t._s(e.name))])])})),0)]),t._m(0)])])},It=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",{staticClass:"title3"},[t._v(" - Check More- "),a("br"),a("a",{attrs:{href:"https://github.com/BlaxBerry",target:"_blank"}},[t._v("on Github")])])}],Nt={props:["skillData"],methods:{closeMasWork:function(){this.$parent._data.maskSkillFlag=!1},clickCard:function(t){console.log(t)}}},Jt=Nt,Ft=(a("a276"),Object(n["a"])(Jt,$t,It,!1,null,"202af666",null)),Qt=Ft.exports,Ut={name:"Home",data:function(){return{maskWorkFlag:!1,maskSkillFlag:!1,cardWorkData:{},cardSkillData:{}}},components:{Header:v,AboutSite:_,AboutMe:D,Skills:Y,Works:St,Contact:wt,Footer:Dt,MaskWork:Ot,MaskSkill:Qt}},qt=Ut,Ht=(a("0a62"),Object(n["a"])(qt,m,g,!1,null,"7c07a77c",null)),Gt=Ht.exports;s["a"].use(u["a"]);var Kt=[{path:"/",name:"Home",component:Gt},{path:"/skills",name:"Skills",component:function(){return a.e("chunk-2d22ccdd").then(a.bind(null,"f591"))}},{path:"/works",name:"Works",component:function(){return a.e("chunk-2d0b2148").then(a.bind(null,"231b"))}},{path:"/profile",name:"Profile",component:function(){return a.e("chunk-2d217357").then(a.bind(null,"c66d"))}},{path:"/experience",name:"Experience",component:function(){return a.e("chunk-2d0c1283").then(a.bind(null,"459e"))}}],Zt=new u["a"]({routes:Kt}),zt=Zt;s["a"].config.productionTip=!1,new s["a"]({router:zt,render:function(t){return t(l)}}).$mount("#app")},5932:function(t,e,a){"use strict";a("a6f3")},"5a52":function(t,e,a){},"5b8e":function(t,e,a){},"5cb3":function(t,e,a){"use strict";a("cb9f")},"5ce3":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"title"},on:{click:t.checkname}},[t._t("pageTitle"),t._t("title1"),t._t("title2"),t._t("title3")],2)},i=[],r={methods:{checkname:function(){}}},n=r,o=(a("e3ab"),a("2877")),c=Object(o["a"])(n,s,i,!1,null,"93186176",null);e["a"]=c.exports},6188:function(t,e,a){},7148:function(t,e,a){t.exports=a.p+"img/ajax.456ca6a1.svg"},"71a9":function(t){t.exports=JSON.parse('[{"params":"nodejs","name":"Node.js","picSrc":"nodejs.svg","desc":["Node.jsのデフォルトモジュールが使えます。","CommonJSのモジュール開発ができ、パッケージ管理ツールのgulp、npm、yarnが使えます。","art-templateなどのテンプレートエンジンを使い、SSR（Server Side Rending）Web開発できます。","Express.jsを通じて、CSR（Client Side Rendering）Web開発できます。","","MongoDB、MySQL、PostgreSQLに接続し、APIサーバー開発ができます。","Koaを勉強しています。"],"status":"","techs":[{"tagPic":"npm.svg","name":"npm"},{"tagPic":"nodejs.svg","name":"Express.js"}],"worksPC":[{"name":"SSR Student Info Management","github":"https://github.com/BlaxBerry/SSR-user_info_management","mianPic":"https://github.com/BlaxBerry/SSR-user_info_management/raw/master/public/images/list.png"}]}]')},7584:function(t,e,a){var s={"./ajax.svg":"7148","./bootstrap.svg":"1131","./css3.svg":"3646","./echart.svg":"f4aa","./git.svg":"824b","./github.svg":"917e","./gmail.svg":"dfd3","./html5.svg":"caf2","./javascript.svg":"a027","./jquery.svg":"010f","./less.svg":"7f93","./mongodb.svg":"f6d3","./mysql.svg":"8d8b","./nodejs.svg":"79b9","./npm.svg":"ba93","./nuxtjs.svg":"7fda","./postgresql.svg":"7758","./react.svg":"830e","./redux.svg":"b4b5","./sass.svg":"f766","./twitter.svg":"1538","./typescript.svg":"8a68","./vue.svg":"4fc3","./vuex.svg":"7a0d"};function i(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id="7584"},7758:function(t,e,a){t.exports=a.p+"img/postgresql.c1710828.svg"},"79b9":function(t,e,a){t.exports=a.p+"img/nodejs.609fbeeb.svg"},"7a0d":function(t,e,a){t.exports=a.p+"img/vuex.2a6a0726.svg"},"7c55":function(t,e,a){"use strict";a("2395")},"7f93":function(t,e,a){t.exports=a.p+"img/less.341f0ab0.svg"},"7fda":function(t,e,a){t.exports=a.p+"img/nuxtjs.82d7de2f.svg"},"824b":function(t,e,a){t.exports=a.p+"img/git.3bf44157.svg"},"830e":function(t,e,a){t.exports=a.p+"img/react.16975bcc.svg"},"864f":function(t){t.exports=JSON.parse('[{"params":"mongodb","name":"MongoDB","picSrc":"mongodb.svg","desc":["基礎的なデータを操作ができます。","MongoDB Compasshツールが使えます。","Node.jsで接続してデータを操作し、APIサーバー開発できます。"],"status":"","techs":[{"tagPic":"nodejs.svg","name":"Node.js"}],"worksPC":[{"name":"SSR Student Info Management","github":"https://github.com/BlaxBerry/SSR-user_info_management","mianPic":"https://github.com/BlaxBerry/SSR-user_info_management/raw/master/public/images/list.png"}]},{"params":"postgresql","name":"PostgreSQL","picSrc":"postgresql.svg","desc":["SQL言語で基礎的なデータを操作ができます。","MySQLWorkBenchツールが使えます","Node.jsで接続してデータを操作し、APIサーバー開発できます。"],"status":"","techs":[{"tagPic":"nodejs.svg","name":"Node.js"}],"worksPC":[{"name":"SSR Student Info Management","github":"https://github.com/BlaxBerry/SSR-user_info_management","mianPic":"https://github.com/BlaxBerry/SSR-user_info_management/raw/master/public/images/list.png"}]},{"params":"mysql","name":"MySQL","picSrc":"mysql.svg","desc":["SQL言語で基礎的なデータを操作ができます。","MySQLWorkBenchツールが使えます。","Node.jsで接続してデータを操作し、APIサーバー開発できます。"],"status":"","techs":[{"tagPic":"nodejs.svg","name":"Node.js"}],"worksPC":[{"name":"SSR Student Info Management","github":"https://github.com/BlaxBerry/SSR-user_info_management","mianPic":"https://github.com/BlaxBerry/SSR-user_info_management/raw/master/public/images/list.png"}]}]')},"8a68":function(t,e,a){t.exports=a.p+"img/typescript.cb6bec97.svg"},"8d8b":function(t,e,a){t.exports=a.p+"img/mysql.63fadbae.svg"},"917e":function(t,e,a){t.exports=a.p+"img/github.589f25ab.svg"},"9a1d":function(t){t.exports=JSON.parse('[{"params":"git","name":"Git","picSrc":"git.svg","desc":[],"status":"","works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]},{"params":"github","name":"Github","picSrc":"github.svg","desc":[],"status":"","works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]}]')},"9ec9":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contact-links center-align"},[s("a",{attrs:{href:"https://twitter.com/chenjiaxu333",target:"_blank"}},[s("img",{attrs:{src:a("1538"),alt:""}})]),s("a",{attrs:{href:"https://github.com/BlaxBerry",target:"_blank"}},[s("img",{attrs:{src:a("917e"),alt:""}})]),s("a",{attrs:{href:"mailto:chenjiaxu333@gmail.com",target:"_blank"}},[s("img",{attrs:{src:a("dfd3"),alt:""}})])])}],r={},n=r,o=(a("13fa"),a("2877")),c=Object(o["a"])(n,s,i,!1,null,null,null);e["a"]=c.exports},a027:function(t,e,a){t.exports=a.p+"img/javascript.8a5d187b.svg"},a276:function(t,e,a){"use strict";a("5a52")},a6f3:function(t,e,a){},afff:function(t,e,a){},b4b5:function(t,e,a){t.exports=a.p+"img/redux.f8dde72d.svg"},ba0b:function(t,e,a){},ba93:function(t,e,a){t.exports=a.p+"img/npm.c06dc352.svg"},caf2:function(t,e,a){t.exports=a.p+"img/html5.32920e75.svg"},cb9f:function(t,e,a){},d451:function(t,e,a){"use strict";a("e4bc")},dfd3:function(t,e,a){t.exports=a.p+"img/gmail.2c671cbd.svg"},e3ab:function(t,e,a){"use strict";a("217f")},e4bc:function(t,e,a){},e956:function(t,e,a){},edec:function(t,e,a){"use strict";a("1786")},f4aa:function(t,e,a){t.exports=a.p+"img/echart.9bf5e58c.svg"},f6d3:function(t,e,a){t.exports=a.p+"img/mongodb.35ebddae.svg"},f766:function(t,e,a){t.exports=a.p+"img/sass.2dfd41e1.svg"},fe7c:function(t,e,a){}});
//# sourceMappingURL=app.e9dcfa01.js.map