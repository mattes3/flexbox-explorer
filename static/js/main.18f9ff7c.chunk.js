(this["webpackJsonpflexbox-explorer"]=this["webpackJsonpflexbox-explorer"]||[]).push([[0],{35:function(e,a,t){e.exports=t(44)},44:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),o=t.n(l),c=t(31),i=t(26),m=t(27),s=t(72),u=t(75),E=t(74),b=t(70),p=t(71),d=t(73),f=t(68),h=t(29),v=t.n(h),y=Object(f.a)({root:{padding:"2rem"},fieldSet:{marginTop:"1rem",display:"block"},container:{backgroundColor:"#ddd"},rowContainer:{width:"300px",height:"185px"},columnContainer:{width:"185px",height:"300px"},brick:{backgroundColor:"orange",border:"1px solid black"}});function g(){return 16*(Math.round(3*Math.random())+1)}var x=[g(),g(),g(),g(),g()],w=[g(),g(),g(),g(),g()];var j=function(){var e,a=y(),t=Object(n.useState)("row"),l=Object(m.a)(t,2),o=l[0],f=l[1],h=Object(n.useState)("flex-start"),g=Object(m.a)(h,2),j=g[0],k=g[1],O=Object(n.useState)("stretch"),C=Object(m.a)(O,2),S=C[0],N=C[1],A=v()((e={},Object(i.a)(e,a.container,!0),Object(i.a)(e,a.rowContainer,"row"===o),Object(i.a)(e,a.columnContainer,"column"===o),e)),J={display:"flex",flexDirection:o,justifyContent:j,alignItems:S,toString:function(){var e=this;return["{"].concat(Object(c.a)(Object.keys(this).filter((function(e){return"toString"!==e})).map((function(a){return"  "+a+': "'+e[a]+'",'}))),["}"]).join("\n")}},M=function(e){var t=e.name,n=e.width,l=e.height;return r.a.createElement("div",{className:a.brick,style:{minWidth:n,minHeight:l,fontSize:"".concat(.8*l,"px")}},t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.root},r.a.createElement(b.a,{container:!0,spacing:3},r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement(s.a,{component:"fieldset"},r.a.createElement(E.a,{component:"legend"},"Direction"),r.a.createElement(d.a,{row:!0,"aria-label":"direction",name:"direction",value:o,onChange:function(e,a){return f(a)}},r.a.createElement(u.a,{value:"row",control:r.a.createElement(p.a,{color:"primary"}),label:"Row"}),r.a.createElement(u.a,{value:"column",control:r.a.createElement(p.a,{color:"primary"}),label:"Column"}))),r.a.createElement(s.a,{component:"fieldset",className:a.fieldSet},r.a.createElement(E.a,{component:"legend"},"Justify content"),r.a.createElement(d.a,{row:!0,"aria-label":"justify-content",name:"justify-content",value:j,onChange:function(e,a){return k(a)}},r.a.createElement(u.a,{value:"flex-start",control:r.a.createElement(p.a,{color:"primary"}),label:"flex-start"}),r.a.createElement(u.a,{value:"flex-end",control:r.a.createElement(p.a,{color:"primary"}),label:"flex-end"}),r.a.createElement(u.a,{value:"center",control:r.a.createElement(p.a,{color:"primary"}),label:"center"}),r.a.createElement(u.a,{value:"space-between",control:r.a.createElement(p.a,{color:"primary"}),label:"space-between"}),r.a.createElement(u.a,{value:"space-around",control:r.a.createElement(p.a,{color:"primary"}),label:"space-around"}),r.a.createElement(u.a,{value:"space-evenly",control:r.a.createElement(p.a,{color:"primary"}),label:"space-evenly"}))),r.a.createElement(s.a,{component:"fieldset",className:a.fieldSet},r.a.createElement(E.a,{component:"legend"},"Align items"),r.a.createElement(d.a,{row:!0,"aria-label":"align-items",name:"align-items",value:S,onChange:function(e,a){return N(a)}},r.a.createElement(u.a,{value:"stretch",control:r.a.createElement(p.a,{color:"primary"}),label:"stretch"}),r.a.createElement(u.a,{value:"flex-start",control:r.a.createElement(p.a,{color:"primary"}),label:"flex-start"}),r.a.createElement(u.a,{value:"flex-end",control:r.a.createElement(p.a,{color:"primary"}),label:"flex-end"}),r.a.createElement(u.a,{value:"center",control:r.a.createElement(p.a,{color:"primary"}),label:"center"}),r.a.createElement(u.a,{value:"baseline",control:r.a.createElement(p.a,{color:"primary"}),label:"baseline"}),r.a.createElement(u.a,{value:"first baseline",control:r.a.createElement(p.a,{color:"primary"}),label:"first baseline"}),r.a.createElement(u.a,{value:"last baseline",control:r.a.createElement(p.a,{color:"primary"}),label:"last baseline"})))),r.a.createElement(b.a,{item:!0,xs:12,sm:6},r.a.createElement("div",{className:A,style:J},Array.from(Array(5).keys()).map((function(e){return r.a.createElement(M,{key:e,name:e,width:x[e],height:w[e]})}))),r.a.createElement("pre",null,J.toString())))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.18f9ff7c.chunk.js.map