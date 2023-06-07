"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[99],{4099:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});var t,a,s,c,o=r(5861),i=r(9439),u=r(4687),f=r.n(u),p=r(2791),h=r(7689),v=r(273),l=r(168),d=r(7691),m=d.ZP.p(t||(t=(0,l.Z)(["\n  font-family: 'Rajdhani', sans-serif;\n  font-weight: 600;\n  font-size: 20px;\n  color: white;\n  margin-top: 20px;\n"]))),g=d.ZP.p(a||(a=(0,l.Z)(["\n  font-family: 'Rajdhani', sans-serif;\n  font-weight: 400;\n  color: white;\n"]))),w=d.ZP.p(s||(s=(0,l.Z)(["\n  font-family: 'Rajdhani', sans-serif;\n  font-weight: 600;\n  color: #f44336;\n"]))),x=d.ZP.p(c||(c=(0,l.Z)(["\n  font-weight: 600;\n  font-family: 'Rajdhani', sans-serif;\n  color: #f44336;\n"]))),Z=r(184),y=function(){var e=(0,h.UO)().movieId,n=(0,p.useState)(null),r=(0,i.Z)(n,2),t=r[0],a=r[1];return(0,p.useEffect)((function(){var n=function(){var n=(0,o.Z)(f().mark((function n(){var r;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.tx)(e);case 3:r=n.sent,a(r.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Error fetching movie reviews:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),t?(0,Z.jsx)(Z.Fragment,{children:0===t.length?(0,Z.jsx)(g,{children:"We don't have any reviews"}):(0,Z.jsx)("div",{children:t.map((function(e){return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(m,{children:e.author}),(0,Z.jsx)(g,{children:e.content}),(0,Z.jsx)(w,{children:e.created_at.substring(0,10)})]},e.id)}))})}):(0,Z.jsx)(x,{children:"Loading..."})}},273:function(e,n,r){r.d(n,{Df:function(){return i},M1:function(){return p},TP:function(){return u},tx:function(){return h},z1:function(){return f}});var t=r(5861),a=r(4687),s=r.n(a),c=r(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="f73865c93b2adf185bfa72e66b6a561c",i=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/trending/movie/day",{params:{api_key:o}});case 3:return r=e.sent,t=r.data.results,e.abrupt("return",t);case 8:throw e.prev=8,e.t0=e.catch(0),console.log("Error fetching trending movies:",e.t0.message),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(n),{params:{api_key:o,append_to_response:"credits,videos"}});case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 8:throw e.prev=8,e.t0=e.catch(0),console.log("Error fetching movie details:",e.t0.message),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/search/movie",{params:{api_key:o,query:n}});case 3:return r=e.sent,t=r.data.results,e.abrupt("return",t);case 8:throw e.prev=8,e.t0=e.catch(0),console.log("Error searching movies:",e.t0.message),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(n,"/credits"),{params:{api_key:o}});case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 8:throw e.prev=8,e.t0=e.catch(0),console.log("Error fetching movie cast:",e.t0.message),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(n,"/reviews"),{params:{api_key:o}});case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 8:throw e.prev=8,e.t0=e.catch(0),console.log("Error fetching movie reviews:",e.t0.message),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=99.023dff1f.chunk.js.map