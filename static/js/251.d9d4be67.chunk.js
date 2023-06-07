"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[251],{5251:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,a,o,i,c,s,u,p,f=t(5861),l=t(9439),h=t(168),d=t(4687),v=t.n(d),m=t(2791),g=t(1087),x=t(7689),b=t(273),w=t(7691),Z=w.ZP.h1(r||(r=(0,h.Z)(["\n  color: white;\n  letter-spacing: 2px;\n  margin-bottom: 30px;\n  animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;\n\n  @keyframes tracking-in-expand {\n    0% {\n      letter-spacing: -0.5em;\n      opacity: 0;\n    }\n    40% {\n      opacity: 0.6;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"]))),k=w.ZP.span(a||(a=(0,h.Z)(["\n  color: #f44336;\n  letter-spacing: 2px;\n  margin-bottom: 30px;\n"]))),y=w.ZP.form(o||(o=(0,h.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),_=w.ZP.input(i||(i=(0,h.Z)(["\n  border-top: 2px solid #f44336;\n  border-bottom: 2px solid #f44336;\n  border-left: none;\n  border-right: none;\n  outline: none;\n  background-color: transparent;\n  color: white;\n  font-family: 'Rajdhani', sans-serif;\n  font-size: 20px;\n  width: 300px;\n  padding-left: 10px;\n"]))),j=w.ZP.button(c||(c=(0,h.Z)(["\n  color: white;\n  text-decoration: none;\n  font-size: 20px;\n  border: none;\n  background: none;\n  font-family: 'Rajdhani', sans-serif;\n  cursor: pointer;\n\n  &::before {\n    margin-left: auto;\n  }\n\n  &::after {\n    content: '';\n    width: 0%;\n    height: 2px;\n    background: #f44336;\n    display: block;\n    transition: 0.5s;\n  }\n\n  &::before {\n    content: '';\n    width: 0%;\n    height: 2px;\n    background: #f44336;\n    display: block;\n    transition: 0.5s;\n  }\n\n  &:hover::after {\n    width: 100%;\n  }\n\n  &:hover::before {\n    width: 100%;\n  }\n"]))),P=(w.ZP.p(s||(s=(0,h.Z)(["\n  margin-top: 10px;\n  font-size: 25px;\n  color: white;\n"]))),w.ZP.ul(u||(u=(0,h.Z)(["\n  margin-top: 30px;\n"])))),z=t(1109),E=t(184),S=(0,z.Z)(g.rU)(p||(p=(0,h.Z)(["\n  text-decoration: none;\n  color: white;\n  font-size: 20px;\n\n  &:hover {\n    color: #f44336;\n    transition: 0.3s;\n  }\n"]))),R=function(){var n=(0,m.useState)(""),e=(0,l.Z)(n,2),t=e[0],r=e[1],a=(0,m.useState)([]),o=(0,l.Z)(a,2),i=o[0],c=o[1],s=(0,x.s0)(),u=(0,x.TH)();(0,m.useEffect)((function(){var n=new URLSearchParams(u.search).get("name");n&&(r(n),p(n))}),[u]);var p=function(){var n=(0,f.Z)(v().mark((function n(e){var t;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,b.z1)(e);case 3:t=n.sent,c(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Error searching movies:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(Z,{children:["Search ",(0,E.jsx)(k,{children:"movies"})]}),(0,E.jsxs)(y,{onSubmit:function(n){n.preventDefault(),s("/movies?name=".concat(t))},children:[(0,E.jsx)(_,{value:t,onChange:function(n){return r(n.target.value)}}),(0,E.jsx)(j,{type:"submit",children:"Search"})]}),(0,E.jsx)(P,{children:i.map((function(n){return(0,E.jsx)("li",{children:(0,E.jsxs)(S,{to:"/movies/".concat(n.id),state:u,children:[n.original_title,"\xa0(",n.release_date.substring(0,4),")"]})},n.id)}))})]})}},273:function(n,e,t){t.d(e,{Df:function(){return s},M1:function(){return f},TP:function(){return u},tx:function(){return l},z1:function(){return p}});var r=t(5861),a=t(4687),o=t.n(a),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="f73865c93b2adf185bfa72e66b6a561c",s=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/trending/movie/day",{params:{api_key:c}});case 3:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),console.log("Error fetching trending movies:",n.t0.message),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/".concat(e),{params:{api_key:c,append_to_response:"credits,videos"}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),console.log("Error fetching movie details:",n.t0.message),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/search/movie",{params:{api_key:c,query:e}});case 3:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),console.log("Error searching movies:",n.t0.message),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/".concat(e,"/credits"),{params:{api_key:c}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),console.log("Error fetching movie cast:",n.t0.message),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/".concat(e,"/reviews"),{params:{api_key:c}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),console.log("Error fetching movie reviews:",n.t0.message),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=251.d9d4be67.chunk.js.map