"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[575],{2575:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(885),c=t(470),a=t(2791),i=t(6731),u=t(184),o=function(e){var n=e.goBack;return(0,u.jsx)(i.rU,{to:n,children:"Go back"})},s=function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)("h4",{children:"Additional information"}),(0,u.jsx)("ul",{children:[{href:"cast",text:"Cast"},{href:"reviews",text:"Reviews"}].map((function(e){var n=e.href,t=e.text;return(0,u.jsx)("li",{children:(0,u.jsx)(i.rU,{to:n,children:t})},n)}))})]})},f=t(9388),p=function(e){var n=e.movie,t=n.poster_path,r=n.title,c=n.release_date,a=n.overview,i=n.genres,o="https://image.tmdb.org/t/p/original/".concat(t);return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:o,alt:r,width:"300"})}),(0,u.jsxs)("h2",{children:[r," (",c.slice(0,4),")"]}),(0,u.jsx)("p",{children:"User Score:"}),(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:a}),(0,u.jsx)("h4",{children:"Genres"}),(0,u.jsx)("p",{children:i.map((function(e){return e.name})).join(", ")})]})},l=function(){var e,n,t=(0,c.UO)().movieId,i=(0,a.useState)(),l=(0,r.Z)(i,2),d=l[0],h=l[1],v=null!==(e=null===(n=(0,c.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";if(console.log(v),(0,a.useEffect)((function(){f.Pg(t).then(h).catch(console.log)}),[t]),d)return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{goBack:v}),(0,u.jsx)(p,{movie:d}),(0,u.jsx)(s,{}),(0,u.jsx)(a.Suspense,{fallback:null,children:(0,u.jsx)(c.j3,{})})]})}},9388:function(e,n,t){t.d(n,{Df:function(){return f},M1:function(){return d},NV:function(){return l},Pg:function(){return p},tx:function(){return h}});var r=t(5861),c=t(7757),a=t.n(c),i=t(4569),u=t.n(i),o="46907e8d576e3c3202f853040ef73591",s="https://api.themoviedb.org/3/",f=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat(s,"trending/movie/day?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat(s,"/movie/").concat(n,"?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat(s,"movie/").concat(n,"/reviews?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=575.40446ede.chunk.js.map