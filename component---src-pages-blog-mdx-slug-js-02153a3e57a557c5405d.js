(self.webpackChunkggabo=self.webpackChunkggabo||[]).push([[853],{8068:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/a0d19d51290656c5eaabaca0fb4a9a26/b86e2/banner.jpg","srcSet":"/static/a0d19d51290656c5eaabaca0fb4a9a26/57c96/banner.jpg 318w,\\n/static/a0d19d51290656c5eaabaca0fb4a9a26/48f76/banner.jpg 637w,\\n/static/a0d19d51290656c5eaabaca0fb4a9a26/b86e2/banner.jpg 1273w","sizes":"(min-width: 1273px) 1273px, 100vw"},"sources":[{"srcSet":"/static/a0d19d51290656c5eaabaca0fb4a9a26/f5f90/banner.webp 318w,\\n/static/a0d19d51290656c5eaabaca0fb4a9a26/6b4b4/banner.webp 637w,\\n/static/a0d19d51290656c5eaabaca0fb4a9a26/284af/banner.webp 1273w","type":"image/webp","sizes":"(min-width: 1273px) 1273px, 100vw"}]},"width":1273,"height":371}')},7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),a=r(7067);function o(t,r,c){return a()?(e.exports=o=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=o=function(e,t,r){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return r&&n(o,r.prototype),o},e.exports.default=e.exports,e.exports.__esModule=!0),o.apply(null,arguments)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),c=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),a=r(319),o=r(9713),c=r(7316),u=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),p=r(4983).mdx,f=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,o=c(e,u),l=f(t),d=i.useMemo((function(){if(!r)return null;var e=s({React:i,mdx:p},l),t=Object.keys(e),o=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(o)))}),[r,t]);return i.createElement(d,s({},o))}},7198:function(e,t,r){"use strict";var n=r(7294),a=r(2407),o=r(5444),c=r(8665);t.Z=function(e){var t=e.pageTitle,u=e.children,l=(0,o.K2)("3159585216");return n.createElement("div",null,n.createElement("div",{className:c.nC},n.createElement("title",null,t," | ",l.site.siteMetadata.title),n.createElement(a.S,{alt:"php code banner",src:"../images/banner.jpg",__imageData:r(8068)}),n.createElement("nav",null,n.createElement("ul",{className:c.FV},n.createElement("li",{className:c.up},n.createElement(o.rU,{to:"/",className:c.cP},"Home")),n.createElement("li",{className:c.up},n.createElement(o.rU,{to:"/about",className:c.cP},"About")),n.createElement("li",{className:c.up},n.createElement(o.rU,{to:"/blog",className:c.cP},"Blog")))),n.createElement("main",null,n.createElement("h1",{className:c.nP},t),u)))}},8917:function(e,t,r){"use strict";r.r(t);var n=r(7294),a=r(6725),o=r(7198);t.default=function(e){var t=e.data;return n.createElement(o.Z,{pageTitle:t.mdx.frontmatter.title},n.createElement("p",null,t.mdx.frontmatter.date),n.createElement(a.MDXRenderer,null,t.mdx.body))}},8665:function(e,t,r){"use strict";r.d(t,{nC:function(){return n},nP:function(){return a},FV:function(){return o},up:function(){return c},cP:function(){return u},Mm:function(){return l}});var n="layout-module--container--YM7Lx",a="layout-module--heading--2By-2",o="layout-module--nav-links--1VlO2",c="layout-module--nav-link-item--31U8T",u="layout-module--nav-link-text--ExV28",l="layout-module--blockquote--2PwUU"}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-slug-js-02153a3e57a557c5405d.js.map