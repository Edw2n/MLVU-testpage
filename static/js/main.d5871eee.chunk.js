(this["webpackJsonpbasic-test-set"]=this["webpackJsonpbasic-test-set"]||[]).push([[0],{46:function(t,e,n){},47:function(t,e,n){},49:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(17),s=n.n(a),i=(n(46),n(2)),o=n(8),l=n(15),u=n(6),j=(n(47),n(5)),d=n.n(j),b=n(18),p=(n(49),n(9)),h=n(0);var f=function(t){var e=t.number,n=t.setAnswer,c=t.rootDir,a=Array.from(Array(9).keys());return r.a.useEffect((function(){function t(){return(t=Object(b.a)(d.a.mark((function t(){var r,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=function(){p.a(this).classed("clicked",!p.a(this).classed("clicked")),n(e,p.a(this).data()[0]+1)},r=p.b("#Options_".concat(e)),90,90,r.attr("preserveAspectRatio","xMinYMin meet").style("background-color","transparent").attr("viewBox","0 0 ".concat(90," ").concat(90)).classed("svg-content",!0).selectAll("*").remove(),r.append("defs").selectAll("pattern").data(a).enter().append("pattern").attr("id",(function(t){return"img_".concat(e,"_").concat(t)})).attr("width","100%").attr("height","100%").attr("patternContentUnits","objectBoundingBox").append("image").attr("height","1").attr("width","1").attr("xlink:href",(function(t){return"".concat(c,"/options/option").concat(t+1,".png")})),r.append("g").selectAll("rect").data(a).enter().append("rect").attr("id",(function(t){return"rect_".concat(e,"_").concat(t)})).attr("x",(function(t){return 30*parseInt(t/3)+1})).attr("y",(function(t){return t%3*30+1})).attr("width",28).attr("height",28).style("fill",(function(t){return"url(#img_".concat(e,"_").concat(t,")")})).on("click",s);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}console.log("in useEffect"),function(){t.apply(this,arguments)}()}),[]),Object(h.jsxs)("div",{className:"Question",children:[Object(h.jsx)("div",{className:"Question-Title",children:Object(h.jsxs)("text",{className:"Question-Text",children:["Question ",e]})}),Object(h.jsxs)("div",{className:"Container",children:[Object(h.jsx)("img",{src:c+"/attribution/basic_fv.png",className:"Target-FV",alt:"logo"}),Object(h.jsx)("div",{className:"Option-box",children:Object(h.jsx)("svg",{id:"Options_"+e,className:"Options"})})]})]})};var O=function(){var t=[132,210,233,291,355,356,360,577,660,735,840,862,904,906,908,997,1173,1526,1591,1797,1895,1943,1954,1994,1997,2031],e="full_spec11/",n=t.map((function(t){return e+"nueron_"+t+"/Lucent"})),r=t.map((function(t){return e+"nueron_"+t+"/Madry"})),a=[].concat(Object(u.a)(n.slice(0,t.length/2)),Object(u.a)(r.slice(0,t.length/2)),Object(u.a)(r.slice(t.length/2,t.length)),Object(u.a)(n.slice(t.length/2,t.length))),s=a.length,j=Object(c.useState)(Array.from(Array(s).keys()).reduce((function(t,e){return t[e+1]=[],t}),{})),d=Object(l.a)(j,2),b=d[0],p=d[1],O={name:"",age:"",gender:"",major:"",backgrounds:""},x=Object(c.useState)(O),g=Object(l.a)(x,2),m=g[0],v=g[1];function y(t,e){p((function(n){return Object(o.a)(Object(o.a)({},n),{},Object(i.a)({},t,n[t].includes(e)?n[t].filter((function(t){return t!==e})):[].concat(Object(u.a)(n[t]),[e])))}))}function k(t,e){v((function(n){return Object(o.a)(Object(o.a)({},n),{},Object(i.a)({},t,e.target.value))}))}return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)("p",{children:"Interpretability Test (Pilot)"})}),Object(h.jsxs)("div",{className:"userInfoForm",children:[Object(h.jsxs)("div",{className:"Form-above",children:[Object(h.jsx)("div",{className:"Form-Left",children:Object.keys(O).slice(0,2).map((function(t){return console.log(t),Object(h.jsxs)("div",{className:"Input-Row",children:[Object(h.jsxs)("text",{style:{width:"60px"},children:[" ",t," "]}),Object(h.jsx)("input",{type:"text",value:m[t],onChange:function(e){return k(t,e)}})]})}))}),Object(h.jsx)("div",{className:"Form-Left",children:Object.keys(O).slice(2,4).map((function(t){return console.log(t),Object(h.jsxs)("div",{className:"Input-Row",children:[Object(h.jsxs)("text",{style:{width:"60px"},children:[" ",t," "]}),Object(h.jsx)("input",{type:"text",value:m[t],onChange:function(e){return k(t,e)}})]})}))})]}),Object(h.jsxs)("div",{className:"Input-full-Row",children:[Object(h.jsxs)("text",{style:{width:"100px"},children:[" ",Object.keys(m).slice(-1)[0]," "]}),Object(h.jsx)("textarea",{type:"text",value:m[Object.keys(m).slice(-1)[0]],onChange:function(t){return k(Object.keys(m).slice(-1)[0],t)}})]})]}),Array.from(Array(s).keys()).map((function(t){return Object(h.jsx)("div",{children:Object(h.jsx)(f,{number:t+1,setAnswer:y,rootDir:a[t]})})})),Object(h.jsx)("button",{onClick:function(){var t=[];return Object.keys(b).forEach((function(e){3!==b[e].length&&t.push(e)})),0==t.length&&function(t,e,n){var c=document.createElement("a"),r=new Blob([t],{type:n});c.href=URL.createObjectURL(r),c.download=e,c.click()}(JSON.stringify(m),"pilot_"+m.name+".json","text/plain"),alert(JSON.stringify(m)+"\n"+"".concat(t.length>0?"pick only 3 options: "+t:"All Done!!!!")+"\n"+JSON.stringify(b))},children:"Submit"})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),x()}},[[51,1,2]]]);
//# sourceMappingURL=main.d5871eee.chunk.js.map