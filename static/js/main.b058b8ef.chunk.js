(this["webpackJsonpcord-19-ui"]=this["webpackJsonpcord-19-ui"]||[]).push([[0],{173:function(e,n,t){e.exports=t.p+"static/media/VespaLogoWhite.2fad86a7.png"},203:function(e,n,t){e.exports=t(346)},208:function(e,n,t){},346:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(44),c=t.n(o),l=(t(208),t(209),t(57)),i=t(36),s=t(16),u=t(17),m=t(187),d=t(189);var h=function(e){let n=e.to,t=Object(d.a)(e,["to"]);return"download"in t?r.a.createElement("a",Object.assign({},t,{href:n}),t.children):!n||n.startsWith("http")||n.startsWith("/api/")?r.a.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer"},t,{href:n}),t.children):r.a.createElement(l.a,Object.assign({to:n},t))};function g(){const e=Object(s.a)(["\n  &&& {\n    height: 64px;\n    margin: 0;\n\n    border-bottom: 1px solid rgba(63, 157, 216, 0.25);\n\n    .item.header {\n      font-weight: bold;\n      font-size: 1.4em;\n    }\n\n    .item,\n    .item > a,\n    .item > a:not(.ui) {\n      color: white;\n      font-weight: bold;\n    }\n\n    .item > a:hover {\n      color: #ffc43c;\n    }\n\n    .ui.image {\n      width: 100px;\n    }\n  }\n"]);return g=function(){return e},e}const p=Object(u.a)(m.a)(g());var E=function(){return r.a.createElement(i.a,{sx:{paddingLeft:"16px",paddingRight:"16px"},width:1},r.a.createElement(p,{secondary:!0,inverted:!0,fluid:!0},r.a.createElement(m.a.Item,{header:!0},r.a.createElement(h,{to:"/"},"CORD-19 Search and Navigate")),r.a.createElement(m.a.Menu,{position:"right"},r.a.createElement(m.a.Item,null,r.a.createElement(h,{to:"https://twitter.com/vespaengine"},"Twitter")),r.a.createElement(m.a.Item,null,r.a.createElement(h,{to:"https://github.com/vespa-engine/cord-19/blob/master/README.md"},"Read more")))))},f=t(126),b=t(186),v=t(173),w=t.n(v);function j(){const e=Object(s.a)(["\n  &&& {\n    width: 100%;\n    margin: auto 0 0;\n    border-top: 1px solid rgba(63, 157, 216, 0.25);\n\n    .ui {\n      background-color: #3f9cd8;\n      margin: 0;\n      border: 0;\n      color: white;\n      text-align: center;\n    }\n\n    .ui.segment.sides {\n      width: 200px;\n      padding: 0;\n    }\n\n    a {\n      font-weight: bold;\n      color: white;\n    }\n\n    a:hover {\n      color: #ffc43c;\n    }\n\n    .ui.image {\n      width: 100px;\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 15px;\n      margin: auto;\n    }\n  }\n"]);return j=function(){return e},e}const x=Object(u.a)(i.a)(j());var O=function(){return r.a.createElement(x,null,r.a.createElement(f.a.Group,{horizontal:!0},r.a.createElement(f.a,{className:"sides"}),r.a.createElement(f.a,null,r.a.createElement(h,{to:"https://pages.semanticscholar.org/coronavirus-research"},"COVID-19 Open Research Dataset (CORD-19)"),". 2020. Version 2020-03-27. Accessed 2020-03-28."," ",r.a.createElement(h,{to:"https://doi.org/10.5281/zenodo.3727291"},"doi:10.5281/zenodo.3727291"),r.a.createElement("br",null),"Copyright Verizon Media 2020 Licensed under"," ",r.a.createElement(h,{to:"https://github.com/vespa-engine/cord-19/blob/master/LICENSE"},"Apache License 2.0")),r.a.createElement(f.a,{className:"sides"},r.a.createElement(h,{to:"/"},r.a.createElement(b.a,{src:w.a})))))},y=t(191),_=t(358),S=t(67),k=t(35),C=t(357);function D(){const e=Object(s.a)(["\n  &&& {\n    font-size: 1.1rem;\n    display: flex;\n    width: 100%;\n    max-width: 800px;\n    margin: 0 auto;\n\n    .input {\n      margin: 0;\n      flex: 1;\n    }\n\n    & .dropdown {\n      margin-left: 1em;\n      width: fit-content;\n      border: 1px solid rgba(34, 36, 38, 0.15);\n      border-radius: 0.28571429rem\n      box-shadow: none;\n      background: white;\n      padding: 0.78125rem 0.4rem;\n    }\n  }\n"]);return D=function(){return e},e}const A=Object(u.a)(C.a)(D()),I=[{text:"Vespa BM25",value:"bm25"},{text:"Vespa nativeRank",value:"default"},{text:"Freshness",value:"freshness"}];var R=function({onSearch:e,ranking:n,showRanking:t,query:o=""}){const c=Object(a.useState)(o),l=Object(k.a)(c,2),i=l[0],s=l[1];return r.a.createElement(A,{onSubmit:()=>e({query:i})},r.a.createElement(C.a.Input,{icon:"search",placeholder:"Search...",className:"input",onChange:(e,{value:n})=>s(n),value:i}),t&&r.a.createElement(C.a.Dropdown,{icon:"sort amount down",defaultValue:I.find(({value:e},t)=>n===e||!n&&0===t).value,options:I.map((e,n)=>Object(S.a)({id:n},e)),onChange:(n,{value:t})=>e({query:i,ranking:t})}))};const F="all(\n     all(group(source) order(-count()) each(output(count())))\n     all(group(journal) max(10) order(-count()) each(output(count())))\n     all(group(authors.name) max(10) order(-count()) each(output(count())) as(author))\n     all(group(time.year(timestamp)) max(10) order(-count()) each(output(count())) as(year))\n     all(group(has_full_text) each(output(count())))\n   )".split("\n").map(e=>e.trim()).join(""),L=(e,n,t=!1)=>n.length?"+("+n.map(n=>t?"".concat(e,":[").concat(n,"]"):"".concat(e,':"').concat(n,'"')).join(" ")+")":null,Y=e=>Date.UTC(e,0,1)/1e3,M=e=>{const n=new URLSearchParams(window.location.search);"query"in e&&e.query!==n.get("query")&&[...n.keys()].forEach(e=>n.delete(e));for(var t=0,a=Object.entries(e);t<a.length;t++){let e=Object(k.a)(a[t],2),r=e[0],o=e[1];n.delete(r),Array.isArray(o)?o.forEach(e=>n.append(r,e)):o&&n.set(r,o)}n.entries().next().done||Object(l.c)("/search?"+n)},z=()=>{const e=new URLSearchParams(window.location.search);return{query:e.get("query")||"",journal:e.getAll("journal"),source:e.getAll("source"),year:e.getAll("year"),author:e.getAll("author"),has_full_text:e.getAll("has_full_text"),ranking:e.get("ranking")}};function P(){const e=Object(s.a)(["\n  &&& {\n    font-size: 1.1rem;\n\n    .column {\n      margin-top: 150px;\n      padding: 0;\n    }\n\n    h1 {\n      font-size: 3.5rem;\n      font-weight: 300;\n    }\n\n    h4 {\n      font-size: 1.1rem;\n      margin: 3rem 0 0;\n    }\n\n    & .ui.list {\n      margin: 0.5rem 0;\n    }\n  }\n"]);return P=function(){return e},e}const T=Object(u.a)(y.a)(P());function q(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Try searching for..."),r.a.createElement(_.a,null,r.a.createElement(_.a.Item,null,r.a.createElement(h,{to:"/search?query=%2Bcovid-19+%2Btemperature+impact+on+viral+transmission"},"+covid-19 +temperature impact on viral transmission")),r.a.createElement(_.a.Item,null,r.a.createElement(h,{to:"/search?query=basic+reproduction+numbers+for+covid-19+in+%2B%22south+korea%22"},'basic reproduction numbers for covid-19 in +"south korea"')),r.a.createElement(_.a.Item,null,r.a.createElement(h,{to:"/search?query=Impact+of+school+closure+to+handle+COVID-19+pandemic"},"Impact of school closure to handle COVID-19 pandemic"))))}function H(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Powered by ",r.a.createElement(h,{to:"https://vespa.ai"},"Vespa.ai")),"The open big data serving engine: Store, search, rank and organize big data at user serving time.")}var N=function(){return r.a.createElement(T,{verticalAlign:"middle",textAlign:"center"},r.a.createElement(y.a.Column,null,r.a.createElement("h1",{size:"huge"},"CORD-19 Search"),r.a.createElement(R,{onSearch:M}),r.a.createElement(q,null),r.a.createElement(H,null)))},U=t(188),V=t(360);function B(){const e=Object(s.a)(["\n  &&& {\n    width: 100%;\n    margin: 0;\n    .ui.message {\n      background: transparent;\n      box-shadow: none;\n    }\n    .ui.warning.message {\n      background: #fffaf3;\n    }\n    .ui.error.message {\n      background: #fff6f6;\n    }\n  }\n"]);return B=function(){return e},e}const W=Object(u.a)(f.a)(B()),J=({header:e,message:n})=>r.a.createElement(W,{basic:!0,textAlign:"center"},r.a.createElement(V.a,null,e&&r.a.createElement(V.a.Header,null,e),r.a.createElement(V.a.Content,null,n))),K=({header:e,message:n})=>r.a.createElement(W,{basic:!0,textAlign:"center"},r.a.createElement(V.a,{error:!0},e&&r.a.createElement(V.a.Header,null,e),r.a.createElement(V.a.Content,null,n))),G=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BACKEND_URL||"https://api.cord19.vespa.ai";function Z(e,n){return $("GET",e,n)}function $(e,n,t){function r(e,n){return Object(S.a)({},e,{},n)}n.startsWith("http")||(n=G+n),(t=t||{}).method=e,t.credentials="same-origin";const o=()=>fetch(n,t).then(e=>e.ok?e:e.text().then(n=>{let t=n;try{const e=JSON.parse(n);"message"in e&&(t=e.message)}catch(a){}return Promise.reject({message:t,code:e.status})})).then(e=>{const n=e.headers.get("content-type");return!n||t.returnRaw?e:n.includes("application/json")?e.json():n.includes("text/plain")?e.text():e});let c=!1;return{promise:o,state:e=>{const t=e||0,l={url:n,loading:null,cancel:()=>{c=!0},response:null,error:null,version:t},i=Object(a.useReducer)(r,l),s=Object(k.a)(i,2),u=s[0],m=s[1];return n===u.url&&t===u.version||m(l),null===u.loading&&(m({loading:!0}),o().then(e=>{c||m({loading:!1,response:e,version:t})}).catch(e=>{c||m({loading:!1,error:e,version:t})})),Object(S.a)({},u,{loading:null===u.loading||u.loading})}}}var Q=t(359),X=t(93),ee=t.n(X);function ne(){const e=Object(s.a)(["\n  && {\n    box-shadow: none;\n  }\n\n  &.card {\n    width: 100%;\n  }\n\n  .header {\n    font-weight: bold;\n    padding: 5px;\n  }\n\n  &.card .meta {\n    padding: 3px 5px;\n    color: rgba(0, 0, 0, 0.5);\n\n    a.doi {\n      float: right;\n    }\n  }\n\n  .meta:after {\n    content: '';\n    display: table;\n    clear: both;\n  }\n\n  && .content {\n    padding: 0.5em;\n    border: 0;\n  }\n"]);return ne=function(){return e},e}const te=Object(u.a)(Q.a)(ne()),ae=(e,n)=>e.replace(/<(\/?)hi>/g,n),re=({first:e,middle:n,last:t})=>{if(!t)return e||n;const a=[e,n].filter(e=>e).join(" ").match(/(?:(?=^|\s)(\w)|([A-Z]))/g);return(a?a.join("")+" ":"")+t};function oe({journal:e,timestamp:n}){const t=e?" (YYYY-MM-DD)":"YYYY-MM-DD";return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"Journal:")," ",e),n>0?r.a.createElement(ee.a,{format:t,unix:!0,utc:!0},1e3*n):null)}function ce({doi:e}){return e?r.a.createElement(h,{className:"ui doi",to:e},e.replace("https://doi.org/","doi:")):null}function le({source:e,citations_count_total:n}){const t=n>0;return e||t?r.a.createElement("div",null,e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"Source: "),e),e&&t&&r.a.createElement(r.a.Fragment,null,", "),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"Citations: "),n)):null}function ie({authors:e}){const n=Object(a.useState)(!1),t=Object(k.a)(n,2),o=t[0],c=t[1];if(!e)return null;const l=o||e.length<12?e.length:10;return r.a.createElement("div",null,r.a.createElement("b",null,"Authors: "),e.map(re).slice(0,l).join(", "),l<e.length?r.a.createElement(r.a.Fragment,null," ",r.a.createElement("a",{href:"#root",onClick:e=>{e.preventDefault(),c(!0)}},"and ",e.length-l," more")):null)}var se=function({fields:{id:e,title:n,timestamp:t,journal:a,doi:o,abstract:c,authors:l,source:i,citations_count_total:s}}){const u=(e=>{if(!e)return null;const n=ae(e.replace(/<sep \/>/g,"\u2026"),"<$1b>");return r.a.createElement("p",{dangerouslySetInnerHTML:{__html:n}})})(c),m=ae(n,"");return r.a.createElement(te,null,r.a.createElement(Q.a.Header,null,r.a.createElement(h,{to:"/article/".concat(e)},m)),r.a.createElement(Q.a.Meta,null,r.a.createElement(oe,{journal:a,timestamp:t}),r.a.createElement(ce,{doi:o}),r.a.createElement(le,{source:i,citations_count_total:s}),r.a.createElement(ie,{authors:l})),u&&r.a.createElement(Q.a.Content,null,u))},ue=t(355);function me(){const e=Object(s.a)(["\n  && {\n    display: block;\n    padding: 2px;\n  }\n"]);return me=function(){return e},e}const de=Object(u.a)(ue.a)(me());function he({name:e,field:n,values:t,onSearch:a}){if(0===t.length)return null;const o=(e,{value:r,checked:o})=>{const c=t.filter(({value:e,checked:n})=>e===r?o:n).map(({value:e})=>e);a({[n]:c})};return r.a.createElement(C.a.Field,null,r.a.createElement("label",null,e),t.filter(({value:e})=>e.length>0).map(({value:n,count:t,checked:a},c)=>r.a.createElement(de,{key:c,name:e,value:n,onChange:o,label:"".concat(n," (").concat(t,")"),checked:a})))}var ge=function({journal:e,source:n,year:t,author:a,has_full_text:o,onSearch:c}){return r.a.createElement("div",{id:"sidebar",className:"ui form",style:{backgroundColor:"#f2f8ff",boxShadow:"1px 1px #a0c0f0"}},r.a.createElement(he,{name:"Source",field:"source",values:n,onSearch:c}),r.a.createElement(he,{name:"Journal",field:"journal",values:e,onSearch:c}),r.a.createElement(he,{name:"Published",field:"year",values:t,onSearch:c}),r.a.createElement(he,{name:"Author",field:"author",values:a,onSearch:c}),r.a.createElement(he,{name:"Full text",field:"has_full_text",values:o,onSearch:c}))};function pe(){const e=Object(s.a)(["\n  &&& {\n    font-size: 1.1rem;\n    width: 100%;\n    max-width: 1500px;\n    margin: 0 auto;\n    padding: 2rem 0.5rem;\n\n    #wrapper {\n      display: flex;\n      margin-top: 1em;\n    }\n\n    #sidebar {\n      width: 30%;\n      max-width: 300px;\n      height: fit-content;\n      margin-right: 1em;\n      padding: 0.5em;\n      border-radius: 0.28571429rem;\n    }\n\n    #search_results {\n      flex: 1;\n    }\n\n    #no_matches {\n      text-align: center;\n      margin: 2rem;\n    }\n  }\n"]);return pe=function(){return e},e}const Ee=u.a.div(pe());function fe({query:e}){return r.a.createElement("div",{id:"no_matches"},r.a.createElement("h1",null,"\xaf\\_(\u30c4)_/\xaf"),r.a.createElement("br",null),"No matches for ",r.a.createElement("b",null,e))}function be(e){const n=(()=>{const e=z(),n=e.journal,t=e.source,a=e.year,r=e.author,o=e.has_full_text,c=a.map(e=>parseInt(e)).map(e=>Y(e)+";"+(Y(e+1)-1)),l=[L("journal",n),L("source",t),L("timestamp",c,!0),L("authors.name",r),L("has_full_text",o)].filter(e=>e).join(" "),i=new URLSearchParams(window.location.search),s=i.get("ranking");return["journal","source","year","author","has_full_text","ranking"].forEach(e=>i.delete(e)),l&&i.set("filter",l),s&&i.set("ranking.profile",s),i.set("select",F),i})();n.set("type","any"),n.set("summary","short"),n.set("restrict","doc"),n.set("hits","20");const t=Z("/search/?"+n.toString()).state(),a=t.loading,o=t.response,c=t.error;if(a)return r.a.createElement(J,{message:"Searching..."});if(c)return r.a.createElement(K,{message:c.message||"Unknown search error..."});console.log(o);const l=o.root.children.sort(({id:e,relevance:n},{id:t,relevance:a})=>"group:root:0"===e?-1:"group:root:0"===t?1:a-n),i=Object(U.a)(l),s=i[0],u=i.slice(1);if(0===u.length)return r.a.createElement(fe,e);const m=s.children.reduce((n,{label:t,children:a})=>(n[t]=a.map(({value:n,fields:a})=>({value:n,count:a["count()"],checked:e[t].includes(n)})),n),{});return r.a.createElement("div",{id:"wrapper"},r.a.createElement(ge,Object.assign({onSearch:M},e,m)),r.a.createElement("div",{id:"search_results"},u.map((e,n)=>r.a.createElement(se,Object.assign({key:n},e)))))}var ve=function(){const e=z();return r.a.createElement(Ee,null,r.a.createElement(R,Object.assign({showRanking:!0,onSearch:M},e)),r.a.createElement(be,e))},we=t(356),je=t(361),xe=t(362);function Oe(){const e=Object(s.a)(["\n  &&& {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n  }\n"]);return Oe=function(){return e},e}const ye=Object(u.a)(we.a)(Oe()),_e=({first:e,middle:n,last:t})=>{if(!t)return e||n;const a=[e,n].filter(e=>e).join(" ").match(/(?:(?=^|\s)(\w)|([A-Z]))/g);return(a?a.join("")+" ":"")+t};function Se({authors:e}){const n=e.length;return r.a.createElement(je.a.Subheader,null,e.map(_e).slice(0,n).join(", "))}function ke({journal:e,timestamp:n,source:t,license:a,doi:o}){const c=e?" (YYYY-MM-DD)":"YYYY-MM-DD",l=n?r.a.createElement(ee.a,{format:c,unix:!0,utc:!0},1e3*n):null;return r.a.createElement(_.a,null,r.a.createElement(_.a.Item,null,r.a.createElement(_.a.Header,null,"Doi"),r.a.createElement(h,{to:o},o.replace("https://doi.org/",""))),e?r.a.createElement(_.a.Item,null,r.a.createElement(_.a.Header,null,"Journal"),e," ",l):r.a.createElement(_.a.Item,null,r.a.createElement(_.a.Header,null,"Date"),l),r.a.createElement(_.a.Item,null,r.a.createElement(_.a.Header,null,"Source"),t),r.a.createElement(_.a.Item,null,r.a.createElement(_.a.Header,null,"License"),a))}function Ce({title:e,abstract:n,authors:t,doi:a,journal:o,timestamp:c,source:l,license:i}){return r.a.createElement(ye,null,r.a.createElement(je.a,{as:"h1"},e),r.a.createElement(Se,{authors:t}),r.a.createElement(je.a,{as:"h3"},"Abstract"),r.a.createElement("p",null,n),r.a.createElement(ke,{journal:o,timestamp:c,source:l,license:i,doi:a}))}function De({id:e}){const n=new URLSearchParams;n.set("id",e),n.set("searchChain","related-ann"),n.set("summary","short"),n.set("hits","3");const t=Z("/search/?"+n.toString()).state(),a=t.loading,o=t.response,c=t.error;return a?r.a.createElement(J,{message:"Searching..."}):c?r.a.createElement(K,{message:c.message||"Unknown search error..."}):(console.log(o),"children"in o.root?r.a.createElement(xe.a.Pane,null,r.a.createElement(r.a.Fragment,null,o.root.children.map((e,n)=>r.a.createElement(se,Object.assign({key:n},e))))):null)}function Ae({citedBy:e}){return e.map(e=>{const n=Z("/document/v1/covid-19/doc/docid/".concat(e)).state(),t=n.loading,a=n.response,o=n.error;return t?r.a.createElement(J,{key:e,message:"Loading..."}):o?r.a.createElement(K,{key:e,message:o.message||"Failed to load article #".concat(e)}):(console.log(a),r.a.createElement(se,Object.assign({key:e},a)))})}var Ie=function({id:e}){const n=Z("/document/v1/covid-19/doc/docid/".concat(e)).state(),t=n.loading,a=n.response,o=n.error;if(t)return r.a.createElement(J,{message:"Loading..."});if(o)return r.a.createElement(K,{message:o.message||"Failed to load article #".concat(e)});console.log(a);const c=[...new Set((a.fields.cited_by||[]).concat((a.fields.citations_inbound||[]).map((e,n)=>e.source_id)))],l=[{menuItem:"Related articles",render:()=>r.a.createElement(De,{id:a.fields.id})},{menuItem:"".concat(c.length," citing articles"),render:()=>r.a.createElement(Ae,{citedBy:c})}];return r.a.createElement(ye,null,r.a.createElement(Ce,a.fields),r.a.createElement(xe.a,{panes:l}))};function Re(){const e=Object(s.a)(["\n  height: 80vh;\n"]);return Re=function(){return e},e}function Fe(){const e=Object(s.a)(["\n  font-weight: 400;\n  color: #3f9dd8;\n"]);return Fe=function(){return e},e}const Le=u.a.h2(Fe()),Ye=Object(u.a)(y.a)(Re());var Me=function({code:e=404}){const n=(e=>{switch(e){case 403:return"Sorry, you are not authorized to view this page.";case 404:return"Sorry, the page you were looking for does not exist.";case 500:return"Oops... something went wrong.";default:return"Unknown error - really, I have no idea what is going on here."}})(e);return r.a.createElement(Ye,{textAlign:"center",verticalAlign:"middle"},r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Column,{width:8},r.a.createElement(Le,null,n))))};var ze=function(){return r.a.createElement(i.b,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(i.a,{width:1,bg:"#3F9CD8"},r.a.createElement(E,null)),r.a.createElement(i.a,{width:1},r.a.createElement(l.b,{primary:!1,component:r.a.Fragment},r.a.createElement(N,{path:"/"}),r.a.createElement(ve,{path:"/search"}),r.a.createElement(Ie,{path:"/article/:id"}),r.a.createElement(Me,{default:!0}))),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[203,1,2]]]);
//# sourceMappingURL=main.b058b8ef.chunk.js.map