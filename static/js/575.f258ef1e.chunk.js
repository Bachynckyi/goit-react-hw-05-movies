"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[575],{2575:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(885),c=n(470),a=n(2791),i=n(6731),u=n(184),o=function(e){var t=e.goBack;return(0,u.jsx)(i.rU,{to:t,children:"Go back"})},s=function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)("h4",{children:"Additional information"}),(0,u.jsx)("ul",{children:[{href:"cast",text:"Cast"},{href:"reviews",text:"Reviews"}].map((function(e){var t=e.href,n=e.text;return(0,u.jsx)("li",{children:(0,u.jsx)(i.rU,{to:t,children:n})},t)}))})]})},f=n(9388),p=function(e){var t=e.movie,n=t.poster_path,r=t.title,c=t.release_date,a=t.overview,i=t.genres,o="https://image.tmdb.org/t/p/original/".concat(n);return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:o,alt:r,width:"300"})}),(0,u.jsxs)("h2",{children:[r," (",c.slice(0,4),")"]}),(0,u.jsx)("p",{children:"User Score:"}),(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:a}),(0,u.jsx)("h4",{children:"Genres"}),(0,u.jsx)("p",{children:i.map((function(e){return e.name})).join(", ")})]})},d=function(){var e,t,n=(0,c.UO)().movieId,i=(0,a.useState)(),d=(0,r.Z)(i,2),h=d[0],l=d[1],v=null!==(e=null===(t=(0,c.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";if((0,a.useEffect)((function(){f.Pg(n).then(l).catch(console.log)}),[n]),h)return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{goBack:v}),(0,u.jsx)(p,{movie:h}),(0,u.jsx)(s,{}),(0,u.jsx)(a.Suspense,{fallback:null,children:(0,u.jsx)(c.j3,{})})]})}},9388:function(e,t,n){n.d(t,{Df:function(){return f},M1:function(){return h},NV:function(){return d},Pg:function(){return p},tx:function(){return l}});var r=n(5861),c=n(7757),a=n.n(c),i=n(4569),u=n.n(i),o="46907e8d576e3c3202f853040ef73591",s="https://api.themoviedb.org/3/",f=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat(s,"trending/movie/day?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat(s,"/movie/").concat(t,"?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=575.f258ef1e.chunk.js.map