"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[45],{2660:function(n,e,t){t.d(e,{Z:function(){return u}});var r,o=t(6373),i=t(168),a=t(5751).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: 15px 20px;\n"]))),c=t(184);function u(){return(0,c.jsx)(a,{children:(0,c.jsx)(o.iT,{arialLabel:"loading-indicator",height:50,width:50,strokeWidth:5,color:"orange",secondaryColor:"lightblue",textAlign:"center"})})}},8524:function(n,e,t){t.d(e,{H2:function(){return p},up:function(){return l},SR:function(){return f},_V:function(){return h}});var r,o,i,a,c=t(168),u=t(501),s=t(5751),p=s.ZP.li(r||(r=(0,c.Z)(["\n  padding: 10px;\n  max-width: 300px;\n  max-height: 550px;\n  list-style: none;\n  background: ",";\n  border: 2px solid ",";\n  border-radius: 3%;\n  margin-bottom: 20px;\n"])),(function(n){return n.theme.colors.bgGrey}),(function(n){return n.theme.colors.orange})),l=(0,s.ZP)(u.rU)(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 3%;\n  overflow: hidden;\n"]))),f=s.ZP.img(i||(i=(0,c.Z)(["\n  min-width: 300px;\n  height: 424px;\n"]))),h=s.ZP.p(a||(a=(0,c.Z)(["\n  padding: 10px;\n  margin: 10px 0 0 0;\n  height: 40px;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1;\n  letter-spacing: 0.06em;\n  color: ",";\n"])),(function(n){return n.theme.colors.baseColor}))},6214:function(n,e,t){t.d(e,{W2:function(){return s},Dx:function(){return p},eW:function(){return l},XQ:function(){return f}});var r,o,i,a,c=t(168),u=t(5751),s=u.ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 20px;\n"]))),p=u.ZP.h1(o||(o=(0,c.Z)(["\n  margin: 0;\n  padding: 20px 0;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 36px;\n  line-height: 1.62;\n  letter-spacing: 0.06em;\n  color: ",";\n"])),(function(n){return n.theme.colors.baseColor})),l=u.ZP.ul(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 10px;\n  border-radius: 4px;\n  margin: 0;\n  padding: 20px 0;\n"]))),f=u.ZP.p(a||(a=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  margin: 0;\n  padding: 20px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 36px;\n  line-height: 1.62;\n  letter-spacing: 0.06em;\n  color: ",";\n"])),(function(n){return n.theme.colors.orange}))},7045:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,o,i,a,c=t(885),u=t(2791),s=t(501),p=t(6871),l=t(8479),f=t(760),h=t(168),d=t(5751),g=d.ZP.form(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 0 20px;\n"]))),m=d.ZP.h2(o||(o=(0,h.Z)(["\n  margin: 0;\n  padding: 20px 0;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 30px;\n  line-height: 1.62;\n  letter-spacing: 0.06em;\n  color: ",";\n"])),(function(n){return n.theme.colors.baseColor})),x=d.ZP.input(i||(i=(0,h.Z)(["\n  height: 20px;\n  width: 300px;\n  padding: 10px;\n  border: none;\n  border: 3px solid ",";\n  background-color: ",";\n"])),(function(n){return n.theme.colors.orange}),(function(n){return n.theme.colors.white})),v=d.ZP.button(a||(a=(0,h.Z)(["\n  min-height: 45px;\n  min-width: 40px;\n  background-color: ",";\n  border: 1px solid ",";\n  box-shadow: ",";\n  box-sizing: border-box;\n  color: ",";\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 20px;\n  padding: 5px;\n  text-align: center;\n  text-decoration: none;\n"])),(function(n){return n.theme.colors.orange}),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.colors.boxShadowColor}),(function(n){return n.theme.colors.baseColor})),y=t(184);function w(n){var e=n.onSubmit,t=(0,u.useState)(""),r=(0,c.Z)(t,2),o=r[0],i=r[1];return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(g,{onSubmit:function(n){if(n.preventDefault(),""===o.trim())return l.ZP.error("Sorry,there are no movie on request. Please try again");i(""),e(o)},children:[(0,y.jsx)(m,{children:"Find movie by name"}),(0,y.jsxs)("div",{children:[(0,y.jsx)(x,{autoComplete:"off",placeholder:"Enter a movie name",type:"text",name:"query",value:o,onChange:function(n){return i(n.target.value.toLowerCase())}}),(0,y.jsx)(v,{type:"submit",children:"Search"})]})]})})}var Z=t(8524);function b(n){var e=n.movie,t=(0,p.TH)(),r=e.id,o=e.title,i=e.poster_path;return(0,y.jsxs)(Z.H2,{children:[(0,y.jsx)(Z.up,{to:"".concat(r),state:{from:t},children:(0,y.jsx)(Z.SR,{src:i,alt:o})}),(0,y.jsx)(Z._V,{children:o})]})}var _=t(5416),k=t(2660),j=t(6214),P=new f.Z;function S(){var n=(0,s.lr)(),e=(0,c.Z)(n,2),t=e[0],r=e[1],o=(0,u.useState)(""),i=(0,c.Z)(o,2),a=i[0],f=i[1],h=(0,u.useState)([]),d=(0,c.Z)(h,2),g=d[0],m=d[1],x=(0,u.useState)(!1),v=(0,c.Z)(x,2),Z=v[0],S=v[1],C=(0,u.useState)(null),q=(0,c.Z)(C,2),M=q[0],z=q[1],F=t.get("query"),Q=(0,p.TH)(),U=(0,u.useRef)(Q);(0,u.useEffect)((function(){a&&(S(!0),m(null),P.fetchMovieForQuery(a).then((function(n){var e=n.results,t=(0,_.Ps)(e);if(m(t),r({query:a}),0===e.length)return m(null),void l.ZP.error("Sorry,there are no movie on request ".concat(a,". Please try again"))})).catch((function(n){return z(n)})).finally(S(!1))),F&&(S(!0),m(null),P.fetchMovieForQuery(F).then((function(n){var e=n.results,t=(0,_.Ps)(e);if(m(t),0===e.length)return m(null),void l.ZP.error("Sorry,there are no movie on request ".concat(F,". Please try again"))})).catch((function(n){return z(n)})).finally(S(!1)))}),[a,F,r]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(w,{onSubmit:function(n){f(""),f(n)}}),Z&&(0,y.jsx)(k.Z,{}),(0,y.jsx)(j.W2,{children:(0,y.jsx)(j.eW,{children:g&&U.current&&g.map((function(n){return(0,y.jsx)(b,{movie:n,location:U.current},n.id)}))})}),!Z&&M&&(0,y.jsx)(j.XQ,{children:"Sorry, there was an error, please try again"})]})}},5416:function(n,e,t){function r(n){if(n)return n.map((function(n){return{id:n.id,title:n.title,poster_path:n.poster_path?"https://image.tmdb.org/t/p/w300/".concat(n.poster_path):"https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png"}}))}function o(n){if(n)return n.map((function(n){return{id:n.id,name:n.name,profile_path:n.profile_path?"https://image.tmdb.org/t/p/w300/".concat(n.profile_path):"https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png",character:n.character}}))}function i(n){var e=n.id,t=n.title,r=n.poster_path,o=n.vote_average,i=n.overview,a=n.genres;return{id:e,title:t,poster_path:r?"https://image.tmdb.org/t/p/w300/".concat(r):"https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png",vote_average:10*o,overview:i,genres:a}}t.d(e,{Ps:function(){return r},dJ:function(){return o},G4:function(){return i}})},760:function(n,e,t){t.d(e,{Z:function(){return f}});var r=t(5861),o=t(5671),i=t(3144),a=t(7757),c=t.n(a),u=t(4569),s=t.n(u),p="d16c53a3a4d5eb154f379745597d6181",l="https://api.themoviedb.org",f=function(){function n(){(0,o.Z)(this,n),this.page=1}return(0,i.Z)(n,[{key:"fetchTrendingMovies",value:function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(l,"/3/trending/movie/day?api_key=").concat(p,"&page=").concat(this.page));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"fetchMovieForQuery",value:function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(l,"/3/search/movie?api_key=").concat(p,"&page=").concat(this.page,"&query=").concat(e,"&language=en-US&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},{key:"fetchMovieDetails",value:function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(l,"/3/movie/").concat(e,"?api_key=").concat(p,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"fetchMovieActors",value:function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(l,"/3/movie/").concat(e,"/credits?api_key=").concat(p,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},{key:"fetchMovieReviews",value:function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("".concat(l,"/3/movie/").concat(e,"/reviews?api_key=").concat(p,"&language=en-US&page=").concat(this.page));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},{key:"pageAdd",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchValue},set:function(n){this.searchValue=n}}]),n}()}}]);
//# sourceMappingURL=45.c1a9e33f.chunk.js.map