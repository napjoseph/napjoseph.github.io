(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{1114:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var s=n(5202),r=(n(6393),n(2468)),i=n(2268),a=n(6080),c=n.n(a),o=function(t){var e=t.post;return(0,s.jsxs)(r.E.div,{className:c().container,whileHover:{scale:1.05},children:[(0,s.jsx)(i.Z,{post:e,forCard:!0}),(0,s.jsx)("p",{className:c().excerpt,children:e.excerpt})]})},l=n(6776),d=n.n(l),u=function(t){var e=t.title,n=void 0===e?"Posts":e,r=t.description,i=t.posts,a=void 0===i?[]:i,c=t.hideIfEmpty;return(void 0===c||c)&&!a.length?null:(0,s.jsx)("div",{className:d().container,children:(0,s.jsxs)("div",{className:d().content,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:d().title,children:n}),r&&(0,s.jsx)("p",{className:d().description,children:r})]}),(0,s.jsx)("div",{className:d().posts,children:a.length?a.map((function(t){return(0,s.jsx)(o,{post:t},t.title)})):(0,s.jsx)("p",{className:d().empty,children:"It looks a little empty right now. Please check back later."})})]})})}},2268:function(t,e,n){"use strict";n.d(e,{Z:function(){return _}});var s=n(5202),r=(n(6393),n(2761)),i=n(7893),a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"LLLL kkkk";return i.ou.fromISO(t).toFormat(e)},c=n(7792),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return t.toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/[^a-z0-9 ]/g,"").replace(/\s+/g,e)},l=function(t){return{name:t,slug:o(t)}},d=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter(Boolean).join(" ")},u=n(6543),p=n.n(u),_=function(t){var e=t.post,n=t.forCard,i=void 0!==n&&n,o=e.title,u=void 0===o?"":o,_=e.publishedDate,h=void 0===_?"":_,f=e.tags,v=void 0===f?[]:f,x=""!==h&&(0,s.jsxs)("p",{className:p().publishedDate,children:["Published on"," ",(0,s.jsx)("span",{className:p().date,title:h,children:a(h,"DDD")})]}),m=v&&0!==v.length&&(0,s.jsx)("div",{className:p().tags,children:v.map((function(t){return(0,s.jsx)(c.Z,{tag:l(t)},t)}))});return i?(0,s.jsxs)("div",{className:d(p().container,p().card),children:[(0,s.jsx)(r.default,{href:"/posts/".concat(e.slug),children:(0,s.jsx)("a",{className:p().link,children:(0,s.jsx)("span",{className:p().title,children:e.title})})}),x,m]}):(0,s.jsxs)("div",{className:p().container,children:[(0,s.jsx)("h2",{className:p().title,children:u}),x,m]})}},7792:function(t,e,n){"use strict";var s=n(5202),r=(n(6393),n(2761)),i=n(2468),a=n(6684),c=n.n(a);e.Z=function(t){var e=t.tag;return e?(0,s.jsx)(i.E.div,{className:c().container,whileHover:{scale:1.1},children:(0,s.jsx)(r.default,{href:"/tags/".concat(e.slug),children:(0,s.jsx)("a",{className:c().tag,children:(0,s.jsx)("span",{className:c().inner,children:e.name})})})}):null}},9067:function(t,e){"use strict";e.Z=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e+"s";return[1,-1].includes(Number(t))?e:n}},8986:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return o}});var s=n(5202),r=(n(6393),n(9639)),i=n(1114),a=n(1069),c=n(9067),o=!0;e.default=function(t){var e=t.posts,n=a.e.title||"";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.default,{children:(0,s.jsxs)("title",{children:["All Posts | ",n]})}),(0,s.jsx)(i.Z,{title:"All Posts",description:"Showing a total of ".concat(e.length," ").concat((0,c.Z)(e.length,"post"),"."),posts:e,hideIfEmpty:!1})]})}},6985:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n(8986)}])},6776:function(t){t.exports={container:"post-card-list_container__3yoWG",content:"post-card-list_content__YZY6b",title:"post-card-list_title__1LFXG",description:"post-card-list_description__PGybQ",posts:"post-card-list_posts__1Un_M",empty:"post-card-list_empty__2Fu2c"}},6080:function(t){t.exports={container:"post-card_container__3JN4Z",excerpt:"post-card_excerpt__1bmw2"}},6543:function(t){t.exports={container:"post-header_container__UBjx5",title:"post-header_title__2v7su",publishedDate:"post-header_publishedDate__EhNDn",date:"post-header_date__1PgM0",card:"post-header_card__2qzYF",link:"post-header_link__1K3tg"}},6684:function(t){t.exports={container:"tag-pill_container__11TqD",tag:"tag-pill_tag__1fQGv",inner:"tag-pill_inner__g21ke"}}},function(t){t.O(0,[702,888,179],(function(){return e=6985,t(t.s=e);var e}));var e=t.O();_N_E=e}]);