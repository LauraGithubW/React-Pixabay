(this["webpackJsonpreact-peliculas"]=this["webpackJsonpreact-peliculas"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(9),i=n.n(s),r=(n(14),n(15),n(3)),o=(n(16),n(7)),l=n(8),u=n(0),j=function(e){var t=e.imagenes,n=t.largeImageURL,c=t.tags,a=t.views,s=t.likes;return Object(u.jsx)("div",{className:"cards",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{className:"image",src:n,alt:c}),Object(u.jsxs)("p",{className:"phrases",children:[Object(u.jsx)(o.a,{icon:l.b,style:{color:"#cfc"}}),"\xa0 Views: ",a,"."]}),Object(u.jsxs)("p",{className:"phrases",children:[Object(u.jsx)(o.a,{icon:l.a,style:{color:"#cfc"}}),"\xa0 Likes: ",s,"."]}),Object(u.jsx)("a",{className:"showImage",href:n,target:"_blank",rel:"noreferrer",children:"Ver imagen"})]})})},b=(n(23),n(24),function(e){var t=e.paginaAnterior,n=e.paginaSiguiente,c=e.paginacion;return Object(u.jsxs)("div",{className:"botones",children:[c>1?Object(u.jsx)("button",{onClick:t,className:"boton",children:"Anterior"}):"",Object(u.jsx)("p",{className:"parrafo",children:c}),Object(u.jsx)("button",{onClick:n,className:"boton",children:"Siguiente"})]})}),f=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:"../assets/spinning-circles.svg",alt:"Cargando..."})})},g=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),i=Object(r.a)(s,2),o=i[0],l=i[1],g=Object(c.useState)(!1),m=Object(r.a)(g,2),p=m[0],O=m[1],d=Object(c.useState)(1),h=Object(r.a)(d,2),x=h[0],v=h[1],N=Object(c.useState)(""),S=Object(r.a)(N,2),k=S[0],y=S[1],C=Object(c.useState)(!1),w=Object(r.a)(C,2),E=w[0],B=w[1];Object(c.useEffect)((function(){var e=x,t="https://pixabay.com/api/?key=23807617-508d92312441cfcf6c7991bd4&q=".concat(n,"&per_page=20&page=").concat(x,"\n");if(y(t),console.log(e),1===n.length)return null;fetch(t).then((function(e){return e.json()})).then((function(e){var t=e.hits;l(t)}))}),[n]),Object(c.useEffect)((function(){var e="https://pixabay.com/api/?key=23807617-508d92312441cfcf6c7991bd4&q=".concat(n,"&per_page=20&page=").concat(x,"\n");if(y(e),1===n.length)return null;B(!0),fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.hits;l(t),B(!1)}))}),[x]),console.log(k);return Object(u.jsxs)("div",{className:"formulario",children:[Object(u.jsxs)("form",{className:"form",name:"form",onSubmit:function(e){e.preventDefault(),n||alert("Busca una imagen v\xe1lida"),O(!0)},children:[Object(u.jsx)("input",{className:"text",type:"text",name:"imagen",onChange:function(e){a(e.target.value),O(!1),B(!1),console.log(n)},placeholder:"Busca tu imagen...Ej:Tenis",autoComplete:"off"}),Object(u.jsx)("input",{type:"submit",className:"submit",value:"Enviar"})]}),Object(u.jsxs)("div",{className:"buscador",children:[E&&Object(u.jsx)(f,{}),p&&o.map((function(e){return Object(u.jsx)(j,{imagenes:e},e.id)}))]}),p&&Object(u.jsx)(b,{paginaAnterior:function(){if(!(x<=1)){var e=x;v(e-=1),console.log(x)}},paginaSiguiente:function(){var e=x;v(e+=1),console.log(x)},paginacion:x})]})};var m=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(g,{})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),p()}},[[25,1,2]]]);
//# sourceMappingURL=main.f0fd458d.chunk.js.map