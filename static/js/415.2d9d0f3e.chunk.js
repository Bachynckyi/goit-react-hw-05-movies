"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{9155:function(t,n,e){e.d(n,{O:function(){return i}});var r=e(6731),c=e(470),a={moviesList:"MoviesList_moviesList__P6SP5"},u=e(184),i=function(t){var n=t.movies,e=t.title,i=(0,c.TH)();return(0,u.jsxs)("div",{children:[e&&(0,u.jsx)("h1",{className:a.trendingTittle,children:e}),(0,u.jsx)("ul",{className:a.moviesList,children:n.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(r.rU,{to:"/movies/".concat(t.id),state:{from:i},children:t.title})},t.id)}))})]})}},5415:function(t,n,e){e.r(n);var r=e(885),c=e(9388),a=e(2791),u=e(9155),i=e(184);n.default=function(){var t=(0,a.useState)(),n=(0,r.Z)(t,2),e=n[0],o=n[1];if((0,a.useEffect)((function(){c.Df().then((function(t){o(t.results)})).catch(console.log)}),[]),e)return(0,i.jsx)(u.O,{movies:e,title:"Trending today"})}},9388:function(t,n,e){e.d(n,{Df:function(){return f},M1:function(){return d},NV:function(){return v},Pg:function(){return p},tx:function(){return l}});var r=e(5861),c=e(7757),a=e.n(c),u=e(4569),i=e.n(u),o="46907e8d576e3c3202f853040ef73591",s="https://api.themoviedb.org/3/",f=function(){var t=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(s,"trending/movie/day?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(s,"/movie/").concat(n,"?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("".concat(s,"movie/").concat(n,"/reviews?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.2d9d0f3e.chunk.js.map