(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},16:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),i=a.n(r),c=(a(16),a(1)),o=a(2),l=a(4),u=a(3),p=a(5),m=a(6),h=a.n(m),g=a(7);var d=function(e,t,a){return new Promise(function(n,s){var r=new XMLHttpRequest;r.open(e,t),r.onload=function(){this.status>=200&&this.status<300?n(null!=a?[r.response,r.getResponseHeader("Pagination-Count")]:r.response):s({status:this.status,statusText:r.statusText})},r.onerror=function(){s({status:this.status,statusText:r.statusText})},r.send()})},f=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).loaded=function(){e.setState({loading:!1})},e.state={loading:!0},e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.cat,t=[];return this.state.loading&&t.push(s.a.createElement("span",{key:"span_"+e.id,className:"spinner-border text-warning"})),t.push(s.a.createElement("img",{key:e.id,src:e.url,alt:e.id,onLoad:this.loaded})),t}}]),t}(n.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"renderImage",value:function(e){return s.a.createElement("div",{key:e.id,className:"imageContainer d-flex justify-content-around align-content-between "},s.a.createElement(f,{cat:e}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"gallery d-flex justify-content-around flex-wrap"},this.props.cats.map(this.renderImage))}}]),t}(n.Component),v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).setCategories=function(t){try{e.setState({categories:JSON.parse(t),loading:!1})}catch(a){console.log("Error: Parse JSON")}},e.setCats=function(){var t=Object(g.a)(h.a.mark(function t(a){return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e.state.maxCats===a[1]){t.next=4;break}return t.next=4,e.setState({maxCats:parseInt(a[1])});case 4:e.setState({cats:JSON.parse(a[0])}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error: Parse JSON");case 10:case"end":return t.stop()}},t,this,[[0,7]])}));return function(e){return t.apply(this,arguments)}}(),e.searchCats=Object(g.a)(h.a.mark(function t(){var a,n;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=document.getElementById("categories").selectedOptions[0].value,e.state.currentCategory===a){t.next=4;break}return t.next=4,e.setState({currentCategory:a,page:0});case 4:if(e.state.currentLimit===e.state.limit){t.next=7;break}return t.next=7,e.setState({currentLimit:e.state.limit,page:0});case 7:n=E.replace("<limit>",e.state.limit).replace("<page>",e.state.page).replace("<category>",a),d("GET",n,!0).then(e.setCats).catch(function(){return console.log("Error : AJAX CATS")});case 9:case"end":return t.stop()}},t,this)})),e.setLimit=function(t){e.setState({limit:t.target.selectedOptions[0].value})},e.setPage=function(t){var a=e.state.page;"next"===t.target.id?a++:a="prev"===t.target.id?a>0?a-1:a:parseInt(t.target.innerText)-1,e.setState({page:a},e.searchCats)},e.state={categories:[],cats:[],limit:5,page:0,currentLimit:5,currentCategory:0,loading:!0,maxCats:0},d("GET",y).then(e.setCategories).catch(function(){return console.log("Error : AJAX CATEGORIES")}),e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"renderOption",value:function(e){return s.a.createElement("option",{key:e.id,value:e.id},e.name)}},{key:"renderPageButtons",value:function(){var e=[];if(this.state.cats.length>0||this.state.page>0){this.state.page>0&&e.push(s.a.createElement("button",{id:"prev",key:"prev",onClick:this.setPage,className:"btn btn-info"},"Anterior"));for(var t=this.state.maxCats/this.state.limit>5?5:this.state.maxCats/this.state.limit,a=this.state.page<t?1:this.state.page-3,n=a;n<a+t;n++)e.push(s.a.createElement("button",{key:n,onClick:this.setPage,className:this.state.page+1===n?"btn btn-success":"btn btn-link"},n));this.state.page+1<this.state.maxCats/this.state.limit&&e.push(s.a.createElement("button",{id:"next",key:"next",onClick:this.setPage,className:"btn btn-info"},"Siguiente"))}return e}},{key:"render",value:function(){return this.state.loading?s.a.createElement("div",{className:"center-block"},s.a.createElement("span",{key:"loading",className:"spinner-grow text-warning m-5"})):s.a.createElement("div",null,s.a.createElement("span",null,"Categories"),s.a.createElement("select",{id:"categories"},this.state.categories.map(this.renderOption)),s.a.createElement("button",{onClick:this.searchCats,className:"btn btn-primary"},"Search"),s.a.createElement("span",null,"Limit"),s.a.createElement("select",{id:"limits",onChange:this.setLimit},s.a.createElement("option",null,"5"),s.a.createElement("option",null,"10"),s.a.createElement("option",null,"20")),s.a.createElement(b,{cats:this.state.cats}),s.a.createElement("div",{className:"pages d-flex justify-content-center"},this.renderPageButtons()))}}]),t}(n.Component),y="https://my-json-server.typicode.com/JerryJHC/DBJsonServer/categories",E="https://api.thecatapi.com/v1/images/search?api_key=98d6679f-e35f-4cbc-8a91-85f3e93af700&limit=<limit>&page=<page>&order=Desc&category_ids=<category>",k=v,C=(a(20),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(k,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.c99af573.chunk.js.map