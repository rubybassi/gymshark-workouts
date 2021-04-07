(this["webpackJsonpgymshark-fit-app"]=this["webpackJsonpgymshark-fit-app"]||[]).push([[0],[,,,,,function(e,n,t){},,,,,,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,,,,,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),o=t(6),a=t.n(o),i=t(4),s=t.n(i),l=t(7),d=t(2),u=(t(14),t(15),t.p+"static/media/logo.aee0b773.svg"),j=t(0),h=function(){return Object(j.jsx)("nav",{className:"nav-container",children:Object(j.jsx)("div",{className:"nav-logo",children:Object(j.jsx)("img",{src:u,alt:"gymshark logo"})})})},g=(t(17),function(){return Object(j.jsx)("footer",{className:"footer-container",children:Object(j.jsx)("h3",{children:"\xa9 2021 | Gymshark Limited | All Rights Reserved | Be a visionary"})})}),m=(t(18),t.p+"static/media/gymshark-mix.be83959d.mp4"),b=(t(19),function(e){var n=e.children;return Object(j.jsx)("a",{className:"button",href:"/gymshark-workouts/#featured",children:n})}),f=function(){return Object(j.jsxs)("section",{className:"hero-container",children:[Object(j.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,className:"hero-video",children:Object(j.jsx)("source",{src:m,type:"video/mp4"})}),Object(j.jsxs)("article",{className:"hero-content",children:[Object(j.jsx)("h1",{children:"Unleash your inner shark"}),Object(j.jsx)("h2",{children:"Workouts to elevate your fitness training"}),Object(j.jsx)(b,{children:"Get Started"})]})]})},x=(t(20),function(e){var n=e.handleGenderSelection,t=e.genderToggle;return Object(j.jsxs)("div",{className:"toggle-container",children:[Object(j.jsx)("input",{type:"radio",id:"radio-one",value:"mens",checked:"mens"===t,onChange:n}),Object(j.jsx)("label",{htmlFor:"radio-one",children:"Mens"}),Object(j.jsx)("input",{type:"radio",id:"radio-two",value:"womens",checked:"womens"===t,onChange:n}),Object(j.jsx)("label",{htmlFor:"radio-two",children:"Womens"})]})}),O=(t(21),function(e){var n=e.handleGenderSelection;return Object(j.jsxs)("div",{className:"feature-container",id:"featured",children:[Object(j.jsx)("h2",{children:"Personalise your experience"}),Object(j.jsx)(x,{handleGenderSelection:n})]})}),v=(t(5),function(e){var n=e.genderToggle,t=e.name,r=e.femaleImage,c=e.maleImage,o=e.id,a=e.onViewExercise;return Object(j.jsxs)("div",{className:"card-item-wrapper",children:[Object(j.jsx)("img",{src:"womens"===n?r:c,alt:t}),Object(j.jsxs)("div",{className:"card-item-content",children:[Object(j.jsx)("h3",{children:t}),Object(j.jsx)("button",{type:"button",className:"card-button",onClick:function(){return a(o)},children:"View exercise"})]})]})}),p=t(8),w=t.n(p),k=function(e){var n=e.workouts,t=e.onViewExercise,r=e.genderToggle,c=function(){return Object(j.jsx)("div",{className:"card-data-loading",children:Object(j.jsx)("p",{children:"loading..."})})};return Object(j.jsx)(j.Fragment,{children:n.map((function(e){return Object(j.jsx)(w.a,{placeholder:Object(j.jsx)(c,{}),height:200,once:!0,children:Object(j.jsx)(v,{genderToggle:r,name:e.name,femaleImage:e.female.image,maleImage:e.male.image,id:e.id,onViewExercise:t},e.id)},e.id)}))})},y=(t(29),function(e){var n=e.showModal,t=e.exercise,r=e.onModalToggle,c=e.genderToggle;return Object(j.jsx)(j.Fragment,{children:n?Object(j.jsx)("section",{className:"modal-background",children:Object(j.jsxs)("article",{className:"modal-wrapper",children:[Object(j.jsx)("button",{type:"button",onClick:r,children:"Close"}),"womens"===c?Object(j.jsx)("img",{src:t.female.image,alt:t.name}):Object(j.jsx)("img",{src:t.male.image,alt:t.name}),Object(j.jsx)("h3",{children:t.name}),Object(j.jsx)("div",{className:"modal-text",dangerouslySetInnerHTML:{__html:t.transcript}})]})}):null})}),N=function(e){var n=e.workouts,t=e.showModal,r=e.onModalToggle,c=e.genderToggle,o=e.selectedExercise;return Object(j.jsx)(j.Fragment,{children:n.filter((function(e){return e.id===o})).map((function(e){return Object(j.jsx)(y,{exercise:e,showModal:t,onModalToggle:r,genderToggle:c},e.id)}))})};var S=function(){var e=Object(r.useState)(!0),n=Object(d.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)([]),a=Object(d.a)(o,2),i=a[0],u=a[1],m=Object(r.useState)(""),b=Object(d.a)(m,2),x=b[0],v=b[1],p=Object(r.useState)("womens"),w=Object(d.a)(p,2),y=w[0],S=w[1],T=Object(r.useState)(!1),E=Object(d.a)(T,2),M=E[0],W=E[1],F=Object(r.useState)(""),A=Object(d.a)(F,2),C=A[0],G=A[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/");case 3:return n=e.sent,e.next=6,n.json();case 6:if(!(t=e.sent)||!Array.isArray(t.exercises)){e.next=12;break}u(t.exercises||[]),c(!1),e.next=13;break;case 12:throw new Error("payload is empty or not an array");case 13:e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0.message),v("Sorry there has been an error fetching your workouts."),c(!1);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{}),Object(j.jsx)(f,{}),Object(j.jsx)(O,{handleGenderSelection:function(e){return S(e.target.value)},genderToggle:y}),Object(j.jsx)("main",{className:"container",children:t?Object(j.jsx)("h2",{children:"Fecthing workouts..."}):Object(j.jsxs)(j.Fragment,{children:[x&&Object(j.jsx)("h2",{className:"error-message-container",children:x}),i.length>0?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(k,{workouts:i,onViewExercise:function(e){G(e),W(!0)},genderToggle:y}),Object(j.jsx)(N,{workouts:i,showModal:M,onModalToggle:function(){return W((function(e){return!e}))},genderToggle:y,selectedExercise:C})]}):null]})}),Object(j.jsx)(g,{})]})},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/gymshark-workouts",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/gymshark-workouts","/service-worker.js");T?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):E(n,e)}))}}()}],[[30,1,2]]]);
//# sourceMappingURL=main.ca2684cc.chunk.js.map