"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[144],{5144:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(885),a=t(470),c=t(2791),i=t(6731),o="ButtonBack_button__piSHU",s=t(184),u=function(e){var n=e.goBack;return(0,s.jsx)(i.rU,{to:n,className:o,children:"Go back"})},f="Additional_titleAdditional__WSd3f",d="Additional_container__hzHyn",l=function(){return(0,s.jsxs)("div",{className:d,children:[(0,s.jsx)("h4",{className:f,children:"Additional information"}),(0,s.jsx)("ul",{children:[{href:"cast",text:"Cast"},{href:"reviews",text:"Reviews"}].map((function(e){var n=e.href,t=e.text;return(0,s.jsx)("li",{children:(0,s.jsx)(i.rU,{to:n,children:t})},n)}))})]})},p=t(9388),h="MovieInfo_container__g88nJ",v="MovieInfo_moviePoster__2LSaK",x=function(e){var n=e.movie,t=n.poster_path,r=n.title,a=n.release_date,c=n.overview,i=n.genres,o=n.vote_average,u=Math.round(10*o),f="https://image.tmdb.org/t/p/original/".concat(t);return(0,s.jsxs)("div",{className:h,children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:f,alt:r,width:"300",className:v})}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h2",{children:[r," (",a.slice(0,4),")"]}),(0,s.jsxs)("p",{children:["User Score: ",u,"%"]}),(0,s.jsx)("h3",{children:"Overview"}),(0,s.jsx)("p",{children:c}),(0,s.jsx)("h4",{children:"Genres"}),(0,s.jsx)("p",{children:i.map((function(e){return e.name})).join(", ")})]})]})},m=function(){var e,n,t=(0,a.UO)().movieId,i=(0,c.useState)(),o=(0,r.Z)(i,2),f=o[0],d=o[1],h=null!==(e=null===(n=(0,a.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";if((0,c.useEffect)((function(){p.Pg(t).then(d).catch(console.log)}),[t]),f)return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u,{goBack:h}),(0,s.jsx)(x,{movie:f}),(0,s.jsx)(l,{}),(0,s.jsx)(c.Suspense,{fallback:null,children:(0,s.jsx)(a.j3,{})})]})}},9388:function(e,n,t){t.d(n,{Df:function(){return f},M1:function(){return p},NV:function(){return l},Pg:function(){return d},tx:function(){return h}});var r=t(5861),a=t(7757),c=t.n(a),i=t(4569),o=t.n(i),s="46907e8d576e3c3202f853040ef73591",u="https://api.themoviedb.org/3/",f=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(u,"trending/movie/day?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(u,"/movie/").concat(n,"?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(u,"search/movie?api_key=").concat(s,"&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(u,"movie/").concat(n,"/reviews?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=144.ee640e76.chunk.js.map