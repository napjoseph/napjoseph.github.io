(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[718],{276:function(e,t,n){var r=n(2336);e.exports=function(e){if(Array.isArray(e))return r(e)}},2689:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6230:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},4623:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},8889:function(e,t,n){var r=n(276),a=n(6230),o=n(9997),i=n(4623);e.exports=function(e){return r(e)||a(e)||o(e)||i()}},254:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(6393))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},3629:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(6393))&&r.__esModule?r:{default:r},o=n(254);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},9730:function(e,t,n){"use strict";var r=n(2689);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(6393)),s=(o=n(7030))&&o.__esModule?o:{default:o},c=n(254),u=n(3584),l=n(3629);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var l=h[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var d=a.props[l],p=r[l]||new Set;"name"===l&&i||!p.has(d)?(p.add(d),r[l]=p):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:o})}))}var v=function(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)};t.default=v},7030:function(e,t,n){"use strict";var r=n(8889),a=n(8255),o=n(6617),i=(n(7887),n(6126)),s=n(3690),c=n(54);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(6393),d=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},1114:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5202),a=(n(6393),n(2468)),o=n(2268),i=n(6080),s=n.n(i),c=function(e){var t=e.post;return(0,r.jsxs)(a.E.div,{className:s().container,whileHover:{scale:1.05},children:[(0,r.jsx)(o.Z,{post:t,forCard:!0}),(0,r.jsx)("p",{className:s().excerpt,children:t.excerpt})]})},u=n(6776),l=n.n(u),d=function(e){var t=e.title,n=void 0===t?"Posts":t,a=e.description,o=e.posts,i=void 0===o?[]:o,s=e.hideIfEmpty;return(void 0===s||s)&&!i.length?null:(0,r.jsx)("div",{className:l().container,children:(0,r.jsxs)("div",{className:l().content,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:l().title,children:n}),a&&(0,r.jsx)("p",{className:l().description,children:a})]}),(0,r.jsx)("div",{className:l().posts,children:i.length?i.map((function(e){return(0,r.jsx)(c,{post:e},e.title)})):(0,r.jsx)("p",{className:l().empty,children:"It looks a little empty right now. Please check back later."})})]})})}},2268:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(5202),a=(n(6393),n(2761)),o=n(7893),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"LLLL kkkk";return o.ou.fromISO(e).toFormat(t)},s=n(7792),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e.toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/[^a-z0-9 ]/g,"").replace(/\s+/g,t)},u=function(e){return{name:e,slug:c(e)}},l=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},d=n(6543),p=n.n(d),f=function(e){var t=e.post,n=e.forCard,o=void 0!==n&&n,c=t.title,d=void 0===c?"":c,f=t.publishedDate,h=void 0===f?"":f,m=t.tags,v=void 0===m?[]:m,_=""!==h&&(0,r.jsxs)("p",{className:p().publishedDate,children:["Published on"," ",(0,r.jsx)("span",{className:p().date,title:h,children:i(h,"DDD")})]}),y=v&&0!==v.length&&(0,r.jsx)("div",{className:p().tags,children:v.map((function(e){return(0,r.jsx)(s.Z,{tag:u(e)},e)}))});return o?(0,r.jsxs)("div",{className:l(p().container,p().card),children:[(0,r.jsx)(a.default,{href:"/posts/".concat(t.slug),children:(0,r.jsx)("a",{className:p().link,children:(0,r.jsx)("span",{className:p().title,children:t.title})})}),_,y]}):(0,r.jsxs)("div",{className:p().container,children:[(0,r.jsx)("h2",{className:p().title,children:d}),_,y]})}},7792:function(e,t,n){"use strict";var r=n(5202),a=(n(6393),n(2761)),o=n(2468),i=n(6684),s=n.n(i);t.Z=function(e){var t=e.tag;return t?(0,r.jsx)(o.E.div,{className:s().container,whileHover:{scale:1.1},children:(0,r.jsx)(a.default,{href:"/tags/".concat(t.slug),children:(0,r.jsx)("a",{className:s().tag,children:(0,r.jsx)("span",{className:s().inner,children:t.name})})})}):null}},6776:function(e){e.exports={container:"post-card-list_container__3yoWG",content:"post-card-list_content__YZY6b",title:"post-card-list_title__1LFXG",description:"post-card-list_description__PGybQ",posts:"post-card-list_posts__1Un_M",empty:"post-card-list_empty__2Fu2c"}},6080:function(e){e.exports={container:"post-card_container__3JN4Z",excerpt:"post-card_excerpt__1bmw2"}},6543:function(e){e.exports={container:"post-header_container__UBjx5",title:"post-header_title__2v7su",publishedDate:"post-header_publishedDate__EhNDn",date:"post-header_date__1PgM0",card:"post-header_card__2qzYF",link:"post-header_link__1K3tg"}},6684:function(e){e.exports={container:"tag-pill_container__11TqD",tag:"tag-pill_tag__1fQGv",inner:"tag-pill_inner__g21ke"}},9639:function(e,t,n){e.exports=n(9730)}}]);