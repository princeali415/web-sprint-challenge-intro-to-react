(this["webpackJsonpweb-sprint-challenge-intro-to-react"]=this["webpackJsonpweb-sprint-challenge-intro-to-react"]||[]).push([[0],{23:function(e,n,t){e.exports=t(47)},28:function(e,n,t){},29:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(16),l=t.n(c),i=(t(28),t(3)),o=(t(29),t(17)),s=t.n(o),u=t(18);function m(){var e=Object(u.a)(["\n    background-color: rgb(79, 96, 98);\n    font-size: 20px;\n    border: solid 2px rgb(44, 44, 44);\n    border-radius: 25px;\n    font-size: 1.3rem;\n    padding: 2% 5%;\n    cursor: pointer;\n    border-radius: 8px;\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);\n    transition: all 0.3s ease-in-out;\n    color: whitesmoke;\n    &:hover {\n    transition: all 0.3s ease-in-out;\n    background-color: rgb(113, 126, 128);\n    transform: scale(1.05);\n  }\n\n"]);return m=function(){return e},e}var d=t(19).a.button(m());var p=function(e){var n=e.info,t=Object(a.useState)(!1),c=Object(i.a)(t,2),l=c[0],o=c[1];return r.a.createElement("div",null,r.a.createElement(d,{onClick:function(){o(!l)}}," ",l?"Hide Details":"Show Details"),l&&r.a.createElement("ul",{id:"details"},r.a.createElement("p",null,r.a.createElement("b",null,"SPECIES:")," ",n.species),r.a.createElement("p",null,r.a.createElement("b",null,"GENDER:")," ",n.gender),r.a.createElement("p",null,r.a.createElement("b",null,"STATUS:")," ",n.status)))};function E(e){var n=e.char;return r.a.createElement("div",{className:"characters-container",key:n.id},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:n.image,alt:"profile-pic"})),r.a.createElement("div",{className:"info-container"},r.a.createElement("h3",null,n.name),r.a.createElement("div",{className:"main-info"},r.a.createElement(p,{info:n}," "))))}var b=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1];return Object(a.useEffect)((function(){s.a.get("https://rickandmortyapi.com/api/character").then((function(e){console.log(e.data.results),c(e.data.results)})).catch((function(e){}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"Header"},"Rick & Morty Characters"),t.map((function(e){return r.a.createElement(E,{key:e.id,char:e})})))};l.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.43493f55.chunk.js.map