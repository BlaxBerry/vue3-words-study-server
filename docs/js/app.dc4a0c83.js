(function(t){function e(e){for(var a,n,c=e[0],o=e[1],l=e[2],u=0,p=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,n=1;n<s.length;n++){var o=s[n];0!==r[o]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},r={app:0},i=[];function n(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b2148":"a16b40fe","chunk-2d0c1283":"cf72e7cb","chunk-2d217357":"fae40126","chunk-2d22ccdd":"8b72c7e4"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s=r[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=r[t]=[e,a]}));e.push(s[2]=a);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=n(t);var l=new Error;i=function(e){o.onerror=o.onload=null,clearTimeout(u);var s=r[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,s[1](l)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"001c":function(t,e,s){"use strict";s("46d0")},"010f":function(t,e,s){t.exports=s.p+"img/jquery.e8266b8c.svg"},"03e5":function(t){t.exports=JSON.parse('[{"params":"html","name":"HTML","picSrc":"html5.svg","desc":"Front End","status":"","works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]},{"params":"css","name":"CSS","picSrc":"css3.svg","desc":"Front End","status":"","works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]},{"params":"javascript","name":"JavaScript","picSrc":"javascript.svg","desc":"Front End","status":"","works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]},{"params":"jquery","name":"jQuery","picSrc":"jquery.svg","desc":"Front End","status":"","works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]},{"params":"less","name":"Less","picSrc":"less.svg","desc":"Front End","status":"","works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]},{"params":"sass","name":"Sass","picSrc":"sass.svg","desc":"Front End","status":"","works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]},{"params":"react","name":"React","picSrc":"react.svg","desc":"Front End","status":"","works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]},{"params":"vue","name":"Vue","picSrc":"vue.svg","desc":"Front End","status":"","works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]}]')},"0526":function(t){t.exports=JSON.parse('[{"name":"Wedding Dress Site","feature":[],"website":"https://blaxberry.github.io/PC-Static-Web-weddingdress/","github":"https://github.com/BlaxBerry/PC-Static-Web-weddingdress","desc":"This is a PC Static Website for Practicing basic box-model-layout and flexible-layout","techStack":["HTML5 + CSS3","jQuery"],"mianPic":"https://github.com/BlaxBerry/PC-Static-Web-weddingdress/raw/master/images/01.png","pics":["https://github.com/BlaxBerry/PC-Static-Web-weddingdress/raw/master/images/01.png","https://github.com/BlaxBerry/PC-Static-Web-weddingdress/raw/master/images/02.png","https://github.com/BlaxBerry/PC-Static-Web-weddingdress/raw/master/images/03.png","https://github.com/BlaxBerry/PC-Static-Web-weddingdress/raw/master/images/04.png"]},{"name":"Chen\'s Portfolio","feature":["could check more details of my Skills and Works, by clicking picture or link button of each one."],"website":"https://blaxberry.github.io/-Portfolio/","github":"https://github.com/BlaxBerry/-Portfolio","desc":"This is my Portfolio, a Responsive SPA (Single Page Application) created by Vue.js + Vue-Router, developed by Vue-Cli, rendering data to templates by Local JSON files.","techStack":["HTML5 + CSS3","Vue.js","Vue-Cli","Vue-Router","Webpack","Less","MediaQuery"],"mianPic":"https://github.com/BlaxBerry/PC-Static-Web-weddingdress/raw/master/images/01.png","pics":["",""]},{"name":"?","feature":[],"website":"https://blaxberry.github.io/Mobile-book-shopping/","github":"https://github.com/BlaxBerry/Mobile-book-shopping","desc":["",""],"techStack":["",""],"mianPic":"https://github.com/BlaxBerry/PC-Static-Web-weddingdress/raw/master/images/01.png","pics":["",""]},{"name":"SSR Student Info Management","feature":[],"website":"","github":"https://github.com/BlaxBerry/SSR-user_info_management","desc":"SSR (Server Side Rending) created by Node.js, connected to MongoDB database, according to request URl and method, to send data from databaseto or to render pages by Router, using TemplateEngine art-template to render data in HTML.","techStack":["Node.js","MongoDB","art-template","route","serve-static","Bootstraps"],"mianPic":"https://d2v9k5u4v94ulw.cloudfront.net/assets/images/7058337/original/5c451532-db01-4337-b8a5-31879079e9d2?1624292495","pics":["https://d2v9k5u4v94ulw.cloudfront.net/assets/images/7058337/original/5c451532-db01-4337-b8a5-31879079e9d2?1624292495"]}]')},"0650":function(t,e,s){"use strict";s("e956")},"0bda":function(t,e,s){},"0cf3":function(t,e,s){"use strict";s("857b")},"0e3c":function(t,e,s){},"13fa":function(t,e,s){"use strict";s("6188")},1538:function(t,e,s){t.exports=s.p+"img/twitter.92454d7b.svg"},"217f":function(t,e,s){},2395:function(t,e,s){},"2ccb":function(t){t.exports=JSON.parse('[{"name":"SPA Book Shop","feature":["must Register user\'s Account at the beginnin.","must Login Account before using. ( Test Account: andy@qq.com | 123456 )","could Add Product from detail page.","could Remove or Change Product\'s Count in persional Shopping-Cart page.","Must set user\'s Retailer before making a Purchase.","could check Order-List and Status of Products\' Transportation, after making a Purchase."],"website":"https://blaxberry.github.io/Mobile-book-shopping/","github":"https://github.com/BlaxBerry/Mobile-book-shopping","desc":"This is a Mobile EC (Electronic Commerce) Web Application, created by Vue.js and VantUI framework, used Vue-Router for SPA (Single Page Application), developed by Vue-Cli, requesting data by Axios from free API.","techStack":["Vue.js","Vue-Cli","Vue-Router","Vant UI","Axios","Webpack","Less","LocalStorage"],"mianPic":"https://github.com/BlaxBerry/Mobile-book-shopping/raw/main/src/assets/images/MK-Home.png","pics":["https://github.com/BlaxBerry/Mobile-book-shopping/raw/main/src/assets/images/MK-Home.png","https://github.com/BlaxBerry/Mobile-book-shopping/raw/main/src/assets/images/MK-Category.png","https://github.com/BlaxBerry/Mobile-book-shopping/raw/main/src/assets/images/MK-Profile.png","https://github.com/BlaxBerry/Mobile-book-shopping/raw/main/src/assets/images/MK-Detail.png","https://github.com/BlaxBerry/Mobile-book-shopping/raw/main/src/assets/images/MK-Register.png","https://github.com/BlaxBerry/Mobile-book-shopping/raw/main/src/assets/images/MK-Cart.png","https://github.com/BlaxBerry/Mobile-book-shopping/raw/main/src/assets/images/MK-EditAddress.png","https://github.com/BlaxBerry/Mobile-book-shopping/raw/main/src/assets/images/Pay.png"]},{"name":"Music Player","feature":["",""],"website":"","github":"https://github.com/BlaxBerry/vue-music-player","desc":"This is a SPA (Single Page Application) Player, created by Vue.js and Element-UI framework, requesting data by Axios from Local JSON files ( for persional using ).","techStack":["Vue.js","Vue-Cli","Vue-Router","Element UI","Axios","Webpack","Less"],"mianPic":"https://github.com/BlaxBerry/vue-music-player/raw/master/src/assets/images/mkList.png.png","pics":["https://github.com/BlaxBerry/vue-music-player/raw/master/src/assets/images/mkList.png.png","https://github.com/BlaxBerry/vue-music-player/raw/master/src/assets/images/mkMV.png"]},{"name":"Todo List","feature":["Add, Delete, Search Task List.","Record Data in LocalStorage."],"website":"https://blaxberry.github.io/JS--TaskList/","github":"https://github.com/BlaxBerry/Mobile-book-shopping","desc":"This is a Web Application about Task List Management, according to Material Design, user\'s data recorded by LocalStorage.","techStack":["LocalStorage","Material Framework","Font Awesome"],"mianPic":"https://huntr-assets.s3.amazonaws.com/users/151810189/ddde0ab7-8a48-4573-8b57-61ada72763b5","pics":["https://huntr-assets.s3.amazonaws.com/users/151810189/ddde0ab7-8a48-4573-8b57-61ada72763b5"]}]')},3646:function(t,e,s){t.exports=s.p+"img/css3.2b997854.svg"},4611:function(t,e,s){"use strict";s("0e3c")},"46d0":function(t,e,s){},4892:function(t,e,s){"use strict";s("0bda")},"4fc3":function(t,e,s){t.exports=s.p+"img/vue.9febcf8b.svg"},"56d2":function(t,e,s){"use strict";s("e5d4")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],n=(s("7c55"),s("2877")),c={},o=Object(n["a"])(c,r,i,!1,null,null,null),l=o.exports,u=(s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f")),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[t._v(" Home Page "),s("Header"),s("AboutSite"),s("AboutMe"),s("Skills"),s("Works"),s("Contact"),s("Footer"),t.maskFlag?s("MaskWork",{attrs:{workData:t.cardWorkData}}):t._e()],1)},p=[],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[t._v(" Header ")])},g=[],b={},h=b,f=Object(n["a"])(h,m,g,!1,null,"b29a9eda",null),v=f.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aboutsite"},[s("p",{staticClass:"center-align"},[t._v(" ここは "),s("b",[t._v("Chen")]),t._v(" のポートフォリオサイトです。"),s("br"),t._v(" これまでに手がけた制作物、身につけたスキルをまとめています。"),s("br")])])}],_={},S=_,C=(s("0650"),Object(n["a"])(S,k,w,!1,null,"11e6383d",null)),x=C.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about-me bgk-pic-box "},[s("Title",[s("h1",{staticClass:"title1",attrs:{slot:"title1"},slot:"title1"},[t._v("About Me")]),s("h2",{staticClass:"title2",attrs:{slot:"title2"},slot:"title2"},[t._v("自分について")])]),s("div",{staticClass:"about-card glass-box session"},[t._m(0),s("div",{staticClass:"about-card-text"},[s("p",[t._v(" 中国出身、外国語学部卒業、前職は不動産営業。 前職でITプログラミングを知り初めて独学して、プログラミングに深く惹かれ、 日々勉強や練習を重ね、一流なエンジニアという夢を目指して頑張って行きます。 ")]),s("ContactLinks"),s("div",{staticClass:"center-align"},[s("router-link",{attrs:{to:"/profile"}},[t._v("Show Profile ->")])],1)],1)])],1)},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about-card-img"},[a("img",{attrs:{src:s("917e"),alt:""}})])}],P=s("5ce3"),j=s("9ec9"),M={components:{Title:P["a"],ContactLinks:j["a"]}},E=M,O=(s("56d2"),Object(n["a"])(E,y,B,!1,null,"61570fe2",null)),T=O.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skills session"},[s("Title",[s("h1",{staticClass:"title1",attrs:{slot:"title1"},slot:"title1"},[t._v("Skills")]),s("h2",{staticClass:"title2",attrs:{slot:"title2"},slot:"title2"},[t._v("スキルについて")])]),s("p",[t._v(" 今まで身に付いているスキルは主にフロントエンドですが、 今後は積極的に挑戦し、開発経験を積んだ上で、 フロントエンドからバックエンドまで、幅広くスキルアップに取り組んでいきたいと考えています。 スキルに対する理解が浅く、専門性の低さも認識していますが、 必ず引き続き勉強し、少しずつ専門性を高めて行きたいと思います。 ")]),s("br"),s("Title",[s("h3",{staticClass:"title3",attrs:{slot:"title3"},slot:"title3"},[t._v("- Front End -")])]),s("CardSkill",{attrs:{list:t.frondEnd}}),s("Title",[s("h3",{staticClass:"title3",attrs:{slot:"title3"},slot:"title3"},[t._v("- Server Side -")])]),s("CardSkill",{attrs:{list:t.serverSide}}),s("Title",[s("h3",{staticClass:"title3",attrs:{slot:"title3"},slot:"title3"},[t._v("- Database -")])]),s("CardSkill",{attrs:{list:t.dataBase}}),s("Title",[s("h3",{staticClass:"title3",attrs:{slot:"title3"},slot:"title3"},[t._v("- Others -")])]),s("CardSkill",{attrs:{list:t.otherSkills}}),s("div",{staticClass:"center-align"},[s("router-link",{attrs:{to:"/skills"}},[t._v("Show Skills Detail ->")])],1)],1)},D=[],L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cardskill-container"},t._l(t.list,(function(e,r){return a("div",{key:r,staticClass:"center-align card-skill"},[a("img",{attrs:{src:s("7584")("./"+e.picSrc),alt:""}}),a("h4",[t._v(t._s(e.name))])])})),0)},$=[],A={props:["list"],methods:{}},V=A,F=(s("4892"),Object(n["a"])(V,L,$,!1,null,null,null)),q=F.exports,R=s("03e5"),N=s("71a9"),H=s("864f"),J=s("9a1d"),I=R,K=N,U=H,Q=J,G={data:function(){return{frondEnd:I,serverSide:K,dataBase:U,otherSkills:Q}},components:{Title:P["a"],CardSkill:q}},z=G,X=Object(n["a"])(z,W,D,!1,null,"6aae5372",null),Y=X.exports,Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"works"},[s("Title",[s("h1",{staticClass:"title1",attrs:{slot:"title1"},slot:"title1"},[t._v("Works")]),s("h2",{staticClass:"title2",attrs:{slot:"title2"},slot:"title2"},[t._v("一部の作品")])]),s("p",{staticClass:"session"},[t._v(" 最初は静的なページから知り始めましたが、 その後Ajax技術やサーバーやデータベース関連の知識などを日々頑張っており、 今まで独自の練習や開発の成果を残してきました。 いずれバックエンドまで幅広くスキルアップに取り組んでいきたいと考えています。 ")]),s("br"),s("Title",[s("h1",{staticClass:"title3",attrs:{slot:"title1"},slot:"title1"},[t._v("- PC 端末 -")])]),s("p",{staticClass:"center-align"}),s("CardWorkPC",{attrs:{list:t.worksPC}}),s("div",{staticClass:"center-align"},[s("router-link",{attrs:{to:"/works"}},[t._v("More Works")])],1),s("br"),s("Title",[s("h1",{staticClass:"title3",attrs:{slot:"title1"},slot:"title1"},[t._v("- Mobile 端末 -")])]),s("p",{staticClass:"center-align"}),s("CardWorkMobile",{attrs:{list:t.worksMobile}}),s("div",{staticClass:"center-align"},[s("router-link",{attrs:{to:"/works"}},[t._v("More Works")])],1),s("br")],1)},tt=[],et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ul",{staticClass:"card-work-container"},t._l(t.list,(function(e,a){return s("li",{key:a,staticClass:"card-work"},[s("img",{staticClass:"shadow-box scale-box grayscale-img",attrs:{src:e.mianPic,alt:""},on:{click:function(s){return t.clickCard(e)}}}),s("div",{staticClass:"card-content"},[s("h3",{staticClass:"center-align"}),s("p",{staticClass:"center-align"},[t._v(t._s(e.name))]),s("div",{staticClass:"center-align"},[s("a",{attrs:{href:"javascript:;"},on:{click:function(s){return t.clickCard(e)}}},[t._v("Show More Detail")])])])])})),0)])},st=[],at={props:["list"],data:function(){return{}},methods:{clickCard:function(t){this.$parent.$parent._data.cardWorkData=t,this.$parent.$parent._data.maskFlag=!0}}},rt=at,it=(s("4611"),Object(n["a"])(rt,et,st,!1,null,"3d7a6699",null)),nt=it.exports,ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ul",{staticClass:"card-work-container"},t._l(t.list,(function(e,a){return s("li",{key:a,staticClass:"card-work"},[s("img",{staticClass:"shadow-box scale-box",attrs:{src:e.mianPic,alt:""},on:{click:function(s){return t.clickCard(e)}}}),s("div",{staticClass:"card-content"},[s("h3",{staticClass:"center-align"}),s("p",{staticClass:"center-align"},[t._v(t._s(e.name))]),s("div",{staticClass:"center-align"},[s("a",{attrs:{href:"javascript:;"},on:{click:function(s){return t.clickCard(e)}}},[t._v("Show More Detail")])])])])})),0)])},ot=[],lt={props:["list"],data:function(){return{}},methods:{clickCard:function(t){this.$parent.$parent._data.cardWorkData=t,this.$parent.$parent._data.maskFlag=!0}}},ut=lt,dt=(s("001c"),Object(n["a"])(ut,ct,ot,!1,null,"83496422",null)),pt=dt.exports,mt=s("0526"),gt=s("2ccb"),bt=mt,ht=gt,ft={data:function(){return{worksPC:bt,worksMobile:ht}},components:{Title:P["a"],CardWorkPC:nt,CardWorkMobile:pt}},vt=ft,kt=(s("0cf3"),Object(n["a"])(vt,Z,tt,!1,null,"2319d0fb",null)),wt=kt.exports,_t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contact"},[s("Title",[s("h1",{staticClass:"title1",attrs:{slot:"title1"},slot:"title1"},[t._v("Contact")]),s("h2",{staticClass:"title2",attrs:{slot:"title2"},slot:"title2"},[t._v("連絡について")])]),s("ContactLinks")],1)},St=[],Ct={components:{Title:P["a"],ContactLinks:j["a"]}},xt=Ct,yt=Object(n["a"])(xt,_t,St,!1,null,"6cfb34fa",null),Bt=yt.exports,Pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer session"},[s("Title",[s("h1",{staticClass:"title1",attrs:{slot:"title1"},slot:"title1"},[t._v("Thanks for Watching")]),s("h2",{staticClass:"title2",attrs:{slot:"title2"},slot:"title2"},[t._v(" 最後までご覧頂き、心より感謝致します ")])]),t._m(0),s("br"),t._m(1),t._m(2)],1)},jt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" 独自の開発していくうちに、自分の不足も認識しました。 今後も必ず深く勉強して改善し、そして専門性を高め、 一流のエンジニアを目指して、引き続き頑張っていきたいと思います。 "),s("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"version"},[s("a",{attrs:{href:"https://github.com/BlaxBerry/-Portfolio",target:"_blank"}},[t._v("Chen's Portofilo "),s("b",[t._v("Version 3.0")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"copyright"},[s("a",{attrs:{href:"https://github.com/BlaxBerry",target:"_blank"}},[t._v("© 2021 BlaxBerry")])])}],Mt={components:{Title:P["a"]}},Et=Mt,Ot=(s("8130"),Object(n["a"])(Et,Pt,jt,!1,null,"6a542f13",null)),Tt=Ot.exports,Wt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mask-work"},[s("div",{staticClass:"mask-close-btn shadow-box",on:{click:t.closeMasWork}},[t._v("X")]),s("div",{staticClass:"mask-content shadow-box"},[s("div",{staticClass:"work-text-box"},[s("h2",{staticClass:"mask-work-name"},[t._v(t._s(t.workData.name))]),s("br"),s("div",{staticClass:"mask-work-desc"},[s("p",[t._v(t._s(t.workData.desc))])]),s("br"),s("div",{staticClass:"mask-work-links"},[s("h4",[t._v("Links")]),s("a",{attrs:{href:t.workData.github,target:"_blank"}},[t._v("——>GitHub Code!!!")]),s("br"),s("a",{attrs:{href:t.workData.website,target:"_blank"}},[t._v("——>Demo!!!")])]),s("br"),s("div",{staticClass:"mask-work-feature"},[s("h4",[t._v("Function")]),s("ul",t._l(t.workData.feature,(function(e,a){return s("li",{key:a},[t._v(" "+t._s(a+1)+". "+t._s(e)+" ")])})),0)]),s("br"),s("div",{staticClass:"mask-work-techtask"},[s("h4",[t._v("Tech Stack")]),s("ul",t._l(t.workData.techStack,(function(e,a){return s("li",{key:a},[t._v(" - "+t._s(e)+" ")])})),0)])]),s("br"),s("div",{staticClass:"work-imgs-box"},[s("ul",{staticClass:"mask-work-small-imgs-list"},t._l(t.workData.pics,(function(e,a){return s("li",{key:a,staticClass:"mask-work-samll-img",on:{click:function(s){return t.clickSmallImg(e)}}},[s("img",{attrs:{src:e,alt:""}})])})),0),s("div",{staticClass:"mask-work-big-img"},[s("a",{attrs:{href:t.workData.website,target:"_blank"}},[s("img",{staticClass:" shadow-box",attrs:{src:""==t.smallPicSr?t.workData.mianPic:t.smallPicSr,alt:""}})])])])])])},Dt=[],Lt={props:["workData"],data:function(){return{smallPicSr:""}},methods:{closeMasWork:function(){this.$parent._data.maskFlag=!1},clickSmallImg:function(t){this.smallPicSr=t}}},$t=Lt,At=(s("ee55"),Object(n["a"])($t,Wt,Dt,!1,null,"007d4b1a",null)),Vt=At.exports,Ft={name:"Home",data:function(){return{maskFlag:!1,cardWorkData:{}}},components:{Header:v,AboutSite:x,AboutMe:T,Skills:Y,Works:wt,Contact:Bt,Footer:Tt,MaskWork:Vt}},qt=Ft,Rt=(s("d6e0"),Object(n["a"])(qt,d,p,!1,null,"ac41de78",null)),Nt=Rt.exports;a["a"].use(u["a"]);var Ht=[{path:"/",name:"Home",component:Nt},{path:"/skills",name:"Skills",component:function(){return s.e("chunk-2d22ccdd").then(s.bind(null,"f591"))}},{path:"/works",name:"Works",component:function(){return s.e("chunk-2d0b2148").then(s.bind(null,"231b"))}},{path:"/profile",name:"Profile",component:function(){return s.e("chunk-2d217357").then(s.bind(null,"c66d"))}},{path:"/experience",name:"Experience",component:function(){return s.e("chunk-2d0c1283").then(s.bind(null,"459e"))}}],Jt=new u["a"]({routes:Ht}),It=Jt;a["a"].config.productionTip=!1,new a["a"]({router:It,render:function(t){return t(l)}}).$mount("#app")},"5ce3":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"title"},on:{click:t.checkname}},[t._t("pageTitle"),t._t("title1"),t._t("title2"),t._t("title3")],2)},r=[],i={methods:{checkname:function(){}}},n=i,c=(s("e3ab"),s("2877")),o=Object(c["a"])(n,a,r,!1,null,"93186176",null);e["a"]=o.exports},6188:function(t,e,s){},"71a9":function(t){t.exports=JSON.parse('[{"params":"nodejs","name":"Node.js","picSrc":"nodejs.svg","desc":"Server","status":"","works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]},{"params":"nuxtjs","name":"Nuxt.js","picSrc":"nuxtjs.svg","desc":"Server","status":"","works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]}]')},7584:function(t,e,s){var a={"./css3.svg":"3646","./git.svg":"824b","./github.svg":"917e","./gmail.svg":"dfd3","./html5.svg":"caf2","./javascript.svg":"a027","./jquery.svg":"010f","./less.svg":"7f93","./mongodb.svg":"f6d3","./mysql.svg":"8d8b","./nodejs.svg":"79b9","./nuxtjs.svg":"7fda","./postgresql.svg":"7758","./react.svg":"830e","./sass.svg":"f766","./twitter.svg":"1538","./typescript.svg":"8a68","./vue.svg":"4fc3"};function r(t){var e=i(t);return s(e)}function i(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id="7584"},7758:function(t,e,s){t.exports=s.p+"img/postgresql.c1710828.svg"},"79b9":function(t,e,s){t.exports=s.p+"img/nodejs.609fbeeb.svg"},"7c55":function(t,e,s){"use strict";s("2395")},"7f93":function(t,e,s){t.exports=s.p+"img/less.341f0ab0.svg"},"7fda":function(t,e,s){t.exports=s.p+"img/nuxtjs.0f58f723.svg"},8130:function(t,e,s){"use strict";s("9e99")},"824b":function(t,e,s){t.exports=s.p+"img/git.3bf44157.svg"},"830e":function(t,e,s){t.exports=s.p+"img/react.16975bcc.svg"},"857b":function(t,e,s){},"864f":function(t){t.exports=JSON.parse('[{"params":"mongodb","name":"MongoDB","picSrc":"mongodb.svg","desc":"DataBase","status":"","works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]},{"params":"postgresql","name":"PostgreSQL","picSrc":"postgresql.svg","desc":"DataBase","status":"","works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]},{"params":"mysql","name":"MySQL","picSrc":"mysql.svg","desc":"DataBase","status":"","works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]}]')},"8a68":function(t,e,s){t.exports=s.p+"img/typescript.cb6bec97.svg"},"8d8b":function(t,e,s){t.exports=s.p+"img/mysql.63fadbae.svg"},"8f98":function(t,e,s){},"917e":function(t,e,s){t.exports=s.p+"img/github.589f25ab.svg"},"9a1d":function(t){t.exports=JSON.parse('[{"params":"git","name":"Git","picSrc":"git.svg","desc":"Others","status":"","works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]},{"params":"github","name":"Github","picSrc":"github.svg","desc":"Others","status":"","works":[{"name":"","picSrc":"","desc":[],"website":"","github":""},{}]}]')},"9e99":function(t,e,s){},"9ec9":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact-links center-align"},[a("a",{attrs:{href:"https://twitter.com/chenjiaxu333",target:"_blank"}},[a("img",{attrs:{src:s("1538"),alt:""}})]),a("a",{attrs:{href:"https://github.com/BlaxBerry",target:"_blank"}},[a("img",{attrs:{src:s("917e"),alt:""}})]),a("a",{attrs:{href:"mailto:chenjiaxu333@gmail.com",target:"_blank"}},[a("img",{attrs:{src:s("dfd3"),alt:""}})])])}],i={},n=i,c=(s("13fa"),s("2877")),o=Object(c["a"])(n,a,r,!1,null,null,null);e["a"]=o.exports},a027:function(t,e,s){t.exports=s.p+"img/javascript.8a5d187b.svg"},caf2:function(t,e,s){t.exports=s.p+"img/html5.32920e75.svg"},d6e0:function(t,e,s){"use strict";s("8f98")},dc94:function(t,e,s){},dfd3:function(t,e,s){t.exports=s.p+"img/gmail.2c671cbd.svg"},e3ab:function(t,e,s){"use strict";s("217f")},e5d4:function(t,e,s){},e956:function(t,e,s){},ee55:function(t,e,s){"use strict";s("dc94")},f6d3:function(t,e,s){t.exports=s.p+"img/mongodb.35ebddae.svg"},f766:function(t,e,s){t.exports=s.p+"img/sass.2dfd41e1.svg"}});
//# sourceMappingURL=app.dc4a0c83.js.map