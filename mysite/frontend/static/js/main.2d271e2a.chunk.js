(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(2),c=t.n(r),i=(t(9),t(10),t(3));var s=function(e){return console.log({props:e}),a.a.createElement("div",null,"Question: ",e.data.question_text," ",e.data.pubdate)};var l=function(){var e=Object(o.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1];return Object(o.useEffect)((function(){fetch("/polls/api/questions/?format=json",{method:"GET",headers:new Headers({Accept:"application/json"})}).then((function(e){return e.json()})).then((function(e){console.log(e.items),r(e.items)})).catch((function(e){return console.log(e)}))}),[]),a.a.createElement("div",null,a.a.createElement("h1",null,"Questions: "),t.map((function(e,n){return a.a.createElement(s,{key:n,data:e})})))};var u=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(l,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.2d271e2a.chunk.js.map