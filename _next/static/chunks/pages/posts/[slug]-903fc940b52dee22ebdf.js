(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{4982:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var o=r(5202),n=(r(6393),r(7825)),i=r(6577),c=r(5873),a=r(7893),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"LLLL kkkk";return a.ou.fromISO(e).toFormat(t)},s=r(7792),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return e.toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/[^a-z0-9 ]/g,"").replace(/\s+/g,t)},g=function(e){return{name:e,slug:u(e)}},f=r(3824),p=function(e){var t,r=e.article,a=e.forCard,u=void 0!==a&&a,p=r.title,d=void 0===p?"":p,h=r.frontMatter,y=h.publishedDate,j=void 0===y?"":y,b=h.tags,O=void 0===b?[]:b;t=u?(0,o.jsx)(f.D,{href:"/posts/".concat(r.slug),textStyle:"post-title-card",layerStyle:"post-title",fontFamily:"heading",children:r.title}):(0,o.jsx)(n.X,{textStyle:"post-title",layerStyle:"post-title",children:d});var m=""!==j&&(0,o.jsxs)(i.x,{fontSize:"small",layerStyle:"metadata",children:["Published on"," ",(0,o.jsx)(i.x,{as:"span",fontWeight:"semibold",title:j,children:l(j,"DDD")})]}),v=O&&0!==O.length&&(0,o.jsx)(c.k,{gridGap:1.5,children:O.map((function(e){return(0,o.jsx)(s.Z,{tag:g(e)},e)}))});return(0,o.jsxs)(c.k,{direction:"column",gridGap:1,children:[t,m,v]})}},9338:function(e,t,r){"use strict";var o=r(5202),n=(r(6393),r(9639)),i=function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return void 0===t||null===t||""===t?null:"string"===typeof t?(0,o.jsx)("meta",{property:e,content:t},r?e:void 0):null};t.Z=function(e){var t=e.data||{},r=t.charSet,c=t.title,a=t.description,l=t.keywords,s=t.author,u=t.viewport,g=(a||"").length>160?"".concat(a.substring(0,160),"..."):a;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(n.default,{children:[r&&(0,o.jsx)("meta",{charSet:r}),c&&(0,o.jsx)("title",{children:c}),i("description",g),i("keywords",l),i("author",s),i("viewport",u)]})})}},183:function(e,t,r){"use strict";var o=r(5202),n=(r(6393),r(9639)),i=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(void 0===t||null===t)return null;if("string"===typeof t)return(0,o.jsx)("meta",{property:e,content:t},r?e:void 0);if(Array.isArray(t)){var n=Array.from(new Set(t));return(0,o.jsx)(o.Fragment,{children:n.map((function(t,r){return(0,o.jsx)("meta",{property:e,content:t},"".concat(e,"-").concat(r))}))})}return null};t.Z=function(e){var t=e.data||{},r=t.ogTitle,c=t.ogDescription,a=t.ogType,l=t.ogArticleAuthor,s=t.ogArticleExpirationTime,u=t.ogArticleModifiedTime,g=t.ogArticlePublishedTime,f=t.ogArticleSection,p=t.ogArticleTag,d=t.ogAudio,h=t.ogAudioSecureUrl,y=t.ogAudioType,j=t.ogBookAuthor,b=t.ogBookIsbn,O=t.ogBookReleaseDate,m=t.ogBookTag,v=t.ogDeterminer,x=t.ogImage,P=t.ogImageAlt,w=t.ogImageHeight,k=t.ogImageSecureUrl,D=t.ogImageType,S=t.ogImageUrl,_=t.ogImageWidth,E=t.ogLocale,A=t.ogLocaleAlternate,Z=t.ogProfileFirstName,N=t.ogProfileGender,T=t.ogProfileLastName,V=t.ogProfileUsername,C=t.ogSiteName,z=t.ogUrl,W=t.ogVideo,M=t.ogVideoActor,I=t.ogVideoActorRole,G=t.ogVideoDirector,L=t.ogVideoDuration,F=t.ogVideoHeight,U=t.ogVideoReleaseDate,H=t.ogVideoSecureUrl,X=t.ogVideoSeries,B=t.ogVideoTag,R=t.ogVideoType,q=t.ogVideoUrl,$=t.ogVideoWidth,J=t.ogVideoWriter;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(n.default,{children:[i("og:title",r),i("og:description",c),i("og:type",a),i("og:article:author",l),i("og:article:expiration_time",s),i("og:article:modified_time",u),i("og:article:published_time",g),i("og:article:section",f),i("og:article:tag",p),i("og:audio",d),i("og:audio:secure_url",h),i("og:audio:type",y),i("og:book:author",j),i("og:book:isbn",b),i("og:book:release_date",O),i("og:book:tag",m),i("og:determiner",v),i("og:image",x),i("og:image:alt",P),i("og:image:height",w),i("og:image:secure_url",k),i("og:image:type",D),i("og:image:url",S),i("og:image:width",_),i("og:locale",E),i("og:locale:alternate",A),i("og:profile:first_name",Z),i("og:profile:gender",N),i("og:profile:last_name",T),i("og:profile:username",V),i("og:site_name",C),i("og:url",z),i("og:video",W),i("og:video:actor",M),i("og:video:actor:role",I),i("og:video:director",G),i("og:video:duration",L),i("og:video:height",F),i("og:video:release_date",U),i("og:video:secure_url",H),i("og:video:series",X),i("og:video:tag",B),i("og:video:type",R),i("og:video:url",q),i("og:video:width",$),i("og:video:writer",J)]})})}},7792:function(e,t,r){"use strict";var o=r(5202),n=(r(6393),r(678)),i=r(3824);t.Z=function(e){var t=e.tag;return t?(0,o.jsx)(n.u,{whileHover:{scale:1.1},children:(0,o.jsx)(i.D,{href:"/tags/".concat(t.slug),rounded:"xl",textStyle:"post-tag",layerStyle:"post-tag",_hover:{layerStyle:"post-tag-hover"},px:3,py:1,children:t.name})}):null}},7666:function(e,t,r){"use strict";r.d(t,{jN:function(){return a},IX:function(){return l},D1:function(){return s}});var o=r(8148),n=r(2393);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a=function(e){if(!e||""===e)return n.e.title||"";var t=n.e.title?" | ".concat(n.e.title):"";return"".concat(e).concat(t)},l=function(e){return e&&""!==e.trim()?e:n.e.description||""},s=function(e){var t=(n.e.metadata||{}).defaultHeadData||{};return c(c({title:n.e.title,description:n.e.description},t),e)}},6055:function(e,t,r){"use strict";r.d(t,{z:function(){return a}});var o=r(8148),n=r(2393);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a=function(e){var t=(n.e.metadata||{}).defaultOpenGraph||{};return c(c({ogTitle:n.e.title,ogDescription:n.e.description},t),e)}},8818:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return F},default:function(){return U}});var o=r(5202),n=(r(6393),r(5873)),i=r(8148),c=r(573),a=r(8799),l=r(6577),s=r(3373),u=r(9242),g=r(5824),f=r(7266),p=r(7221);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){var t=e.className,r=e.filename,n=void 0===r?"":r,i=e.children,c=t?t.replace(/language-/,""):"javascript",d=String(i).replace(/\n$/,""),y=(0,f.useColorModeValue)("#ffffff","#1e1e1e");return(0,o.jsxs)(a.xu,{className:t,bg:y,m:"3",shadow:"lg",children:[n&&(0,o.jsx)(l.x,{textAlign:"center",bg:(0,f.useColorModeValue)("gray.300","gray.700"),textColor:(0,f.useColorModeValue)("gray.600","gray.300"),fontSize:"xs",py:"2",px:"5",overflow:"auto",children:n}),(0,o.jsx)(a.xu,{overflow:"auto",children:(0,o.jsx)(s.ZP,h(h({},s.lG),{},{theme:(0,f.useColorModeValue)(u.Z,g.Z),code:d,language:c,children:function(e){var t=e.className,r=e.style,n=e.tokens,i=e.getLineProps,c=e.getTokenProps;return(0,o.jsx)(p.E,{className:t,p:"3",style:h({},r),children:n.map((function(e,t){return(0,o.jsx)("div",h(h({},i({line:e,key:t})),{},{children:e.map((function(e,t){return(0,o.jsx)("span",h({},c({token:e,key:t})),t)}))}),t)}))})}}))})]})},j=function(e){var t=e.className,r=e.children;return(0,o.jsx)(p.E,{colorScheme:"gray",p:1,fontSize:"xs",display:"inline",overflowWrap:"break-word",className:t,children:r})},b=r(4457),O=function(e){var t=(0,f.useColorMode)().colorMode;return(0,o.jsx)(b.i,{borderColor:{light:"gray.200",dark:"gray.600"}[t],my:4,w:"100%"})},m=r(7825),v=r(3824);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e){return(0,o.jsx)(m.X,P(P({pointerEvents:"none"},e),{},{children:(0,o.jsxs)(n.k,{pointerEvents:"auto",gridGap:1,children:[e.id&&(0,o.jsx)(v.D,{textStyle:"article-link",layerStyle:"article-link",_hover:{layerStyle:"article-link-hover"},_focus:{layerStyle:"article-link-focus"},"aria-label":"anchor",href:"#".concat(e.id),children:"#"}),e.children]})}))},k=function(e){var t=e.href,r=void 0===t?"":t,n=e.children,i=r&&(r.startsWith("/")||r.startsWith("#"));return(0,o.jsx)(v.D,{href:r,textStyle:"article-link",layerStyle:"article-link",_hover:{layerStyle:"article-link-hover"},_focus:{layerStyle:"article-link-focus"},isExternal:!i,children:n})},D=r(2097);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E={h1:function(e){return(0,o.jsx)(w,_({as:"h1",size:"xl",fontWeight:"bold"},e))},h2:function(e){return(0,o.jsx)(w,_({as:"h2",size:"lg",fontWeight:"bold"},e))},h3:function(e){return(0,o.jsx)(w,_({as:"h3",size:"md",fontWeight:"bold"},e))},h4:function(e){return(0,o.jsx)(w,_({as:"h4",size:"sm",fontWeight:"bold"},e))},h5:function(e){return(0,o.jsx)(w,_({as:"h5",size:"sm",fontWeight:"bold"},e))},h6:function(e){return(0,o.jsx)(w,_({as:"h6",size:"xs",fontWeight:"bold"},e))},br:function(e){return(0,o.jsx)(a.xu,_({height:"24px"},e))},p:function(e){return(0,o.jsx)(l.x,_({as:"p",mt:0,lineHeight:"tall"},e))},ul:function(e){return(0,o.jsx)(a.xu,_({as:"ul",pt:2,pl:4,ml:2},e))},ol:function(e){return(0,o.jsx)(a.xu,_({as:"ol",pt:2,pl:4,ml:2},e))},li:function(e){return(0,o.jsx)(a.xu,_({as:"li",pb:1},e))},hr:O,a:k,blockquote:function(e){var t=(0,f.useColorMode)().colorMode;return(0,o.jsx)(D.bZ,{mt:4,w:"98%",bg:{light:"blue.50",dark:"blue.900"}[t],variant:"left-accent",status:"info",css:{"> *:first-of-type":{marginTop:0,marginLeft:8}}})},inlineCode:j,code:y};function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){var t=e.article;return t?(0,o.jsx)(n.k,{direction:"column",gridGap:3,overflow:"auto",children:(0,o.jsx)(c.R,Z(Z({},t.serializedContent),{},{components:E}))}):null},T=r(4982),V=r(3890),C=r(2393);function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}var W=function(e){var t=e.article;if(void 0===C.e.comments||"none"===C.e.comments.using)return null;var r=null;return void 0!==t.frontMatter.disableComments&&t.frontMatter.disableComments&&(r=(0,o.jsx)(l.x,{children:"Comments are disabled."})),"utterances"===C.e.comments.using&&(r=(0,o.jsx)(V.H,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},C.e.comments.props))),(0,o.jsx)(a.xu,{children:r})},M=r(7666),I=r(6055),G=r(9338),L=r(183),F=!0,U=function(e){var t=e.article;if(!t)return null;var r=t.title,i=(0,M.jN)(r),c=(0,M.IX)(t.excerpt),a=(0,M.D1)({title:i,description:c}),l=(0,I.z)({ogTitle:i,ogDescription:c,ogType:"article"});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(G.Z,{data:a}),(0,o.jsx)(L.Z,{data:l}),(0,o.jsxs)(n.k,{direction:"column",gridGap:12,children:[(0,o.jsxs)(n.k,{as:"article",direction:"column",gridGap:8,children:[(0,o.jsx)(T.Z,{article:t}),(0,o.jsx)(N,{article:t})]}),(0,o.jsx)(W,{article:t})]})]})}},4927:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r(8818)}])}},function(e){e.O(0,[702,673,888,179],(function(){return t=4927,e(e.s=t);var t}));var t=e.O();_N_E=t}]);