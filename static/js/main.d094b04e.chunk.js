(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(1),c=n.n(r),l=n(15),o=(n(48),n(36)),i={api:n.n(o).a.create({baseURL:"https://s.zavaar.net/api"}),create:function(e){return this.api.post("/create?url=".concat(e)).then(function(e){return e.data})},get:function(e){return this.api.get("/get/".concat(e)).then(function(e){return e.data})}},u=n(38),d=n.n(u),s=n(10),m=n(113),h=n(107),f=function(e){var t=e.children,n=Object(r.useState)(!1),l=Object(a.a)(n,2),o=l[0],i=l[1];return c.a.createElement("div",null,c.a.createElement(s.Header,{"aria-label":"URL Shortener"},c.a.createElement(s.HeaderName,{href:"https://info.zavaar.net",prefix:"URL"},"Shortener"),t,c.a.createElement(s.HeaderGlobalBar,null,c.a.createElement(s.HeaderGlobalAction,{"aria-label":"More Info",onClick:function(){i(function(){return!o})}},c.a.createElement(d.a,null)))),o?c.a.createElement(m.a,{style:{padding:25,marginTop:50}},"Created by ",c.a.createElement(h.a,{target:"_blank",href:"https://info.zavaar.net"}," Zavaar Shah"),". Powered by ",c.a.createElement(h.a,{target:"_blank",href:"https://deta.sh"},"Deta.sh")):null)},p=n(41),E=n.n(p),b=n(108),g=n(114),v=function(e){var t=e.data;return c.a.createElement("div",null,c.a.createElement(b.c,{open:!0},c.a.createElement(b.b,{label:"Your new URL:"}),c.a.createElement(b.a,null,c.a.createElement("p",{style:{marginBottom:"1rem"}},t.original," \u27be ",c.a.createElement(h.a,{id:"mainURL",href:t.shortened},t.shortened)),c.a.createElement(g.a,{kind:"tertiary",renderIcon:function(e){return c.a.createElement(E.a,e)},onClick:function(){navigator.clipboard.writeText(t.shortened).catch(console.error)}},"Copy"))))},y=n(42),w=n.n(y),O=n(109),j=n(110),x=n(112),L=n(111),R={innerContainer:{padding:25},footer:{position:"fixed",left:0,bottom:0,width:"100%",textAlign:"center"}},U=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],l=t[1],o=Object(r.useState)(""),u=Object(a.a)(o,2),d=u[0],s=u[1],m=Object(r.useState)(!1),h=Object(a.a)(m,2),p=h[0],E=h[1],b=Object(r.useState)(null),y=Object(a.a)(b,2),U=y[0],k=y[1],S=function(e){return e.preventDefault(),n?function(e){try{new URL(e)}catch(t){return!1}return!0}(n)?(s(""),E(!0),void i.create(n).then(function(e){k(e)}).catch(function(e){console.error(e)}).finally(function(){E(!1)})):s("Invalid URL"):s("Please enter a URL")};return c.a.createElement("div",{className:"container"},c.a.createElement(f,null),c.a.createElement("div",{style:R.innerContainer},c.a.createElement(O.a,{onSubmit:S},c.a.createElement(j.a,{legendText:""},c.a.createElement(x.a,{id:"text-input-1",type:"text",labelText:"A free open-source alternative to shortening URLs.",style:d?{color:"#551010",background:"#E48080"}:{},helperText:d||"Enter URL here (e.g. https://google.com)",onChange:function(e){var t=e.target.value;l(t)}})),c.a.createElement(g.a,{style:{width:"100%",textAlign:"center"},kind:"secondary",renderIcon:function(e){return c.a.createElement(w.a,e)},onClick:S},"Shorten"))),U&&!p?c.a.createElement(v,{data:U}):null,p?c.a.createElement(L.a,{description:"Generating URL",withOverlay:!0}):null)};Object(l.render)(c.a.createElement(U,null),document.getElementById("root"))},43:function(e,t,n){e.exports=n(105)},48:function(e,t,n){}},[[43,2,1]]]);
//# sourceMappingURL=main.d094b04e.chunk.js.map