"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{6242:function(e,n,t){t.d(n,{Zh:function(){return o},eZ:function(){return p},kh:function(){return v},n4:function(){return h},v1:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1243),s="468c2ebbcd20d786d16a982ad3dded4a",i="https://api.themoviedb.org/3/",o=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"trending/movie/day?language=en-US&api_key=").concat(s));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"?language=en-US&api_key=").concat(s));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/credits?language=en-US&api_key=").concat(s));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/reviews?language=en-US&api_key=").concat(s));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"search/movie?query=").concat(n,"&include_adult=false&language=en-US&api_key=").concat(s,"&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},2168:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(5861),a=t(9439),c=t(7757),u=t.n(c),s=t(2791),i=t(7689),o=t(6242),p="Reviews_reviewsContainer__bHfUv",f="Reviews_reviewsListItem__FIdwO",v="Reviews_reviewsListItemAuthor__spFhX",h="Reviews_reviewsListItemContent__VVei9",l=t(184),d=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],d=(0,i.UO)().moviesId;return(0,s.useEffect)((function(){if(d){var e=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.kh)(d);case 3:n=e.sent,c(n.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching reviews:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[d]),(0,l.jsxs)("div",{className:p,children:[0===t.length&&(0,l.jsx)("p",{children:"No reviews available for this movie"}),(0,l.jsx)("ul",{children:t.map((function(e){var n=e.author,t=e.content,r=e.id;return(0,l.jsxs)("li",{className:f,children:[(0,l.jsxs)("h4",{className:v,children:["Author: ",n]}),(0,l.jsx)("p",{className:h,children:t})]},r)}))})]})}}}]);
//# sourceMappingURL=168.36e15784.chunk.js.map