(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[894,321],{6242:function(e,t,n){"use strict";n.d(t,{Zh:function(){return u},eZ:function(){return l},kh:function(){return d},n4:function(){return p},v1:function(){return f}});var r=n(5861),o=n(7757),a=n.n(o),i=n(1243),s="468c2ebbcd20d786d16a982ad3dded4a",c="https://api.themoviedb.org/3/",u=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"trending/movie/day?language=en-US&api_key=").concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"/movie/").concat(t,"?language=en-US&api_key=").concat(s));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"/movie/").concat(t,"/credits?language=en-US&api_key=").concat(s));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"/movie/").concat(t,"/reviews?language=en-US&api_key=").concat(s));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"search/movie?query=").concat(t,"&include_adult=false&language=en-US&api_key=").concat(s,"&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},4535:function(e,t,n){"use strict";var r=n(2007),o=n.n(r),a=function(e){return e?"https://image.tmdb.org/t/p/original".concat(e):"https://www.tgv.com.my/assets/images/404/movie-poster.jpg"};t.Z=a,a.propTypes={img:o().string.isRequired}},4321:function(e,t,n){"use strict";n.r(t);var r=n(4691),o=n(184);t.default=function(){return(0,o.jsx)(r.fe,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})}},9155:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});n(2791);var r=n(7689),o=n(1087),a=n(4535),i={moviesListContainer:"MoviesList_moviesListContainer__P9Uhz",moviesListItem:"MoviesList_moviesListItem__OFqms",movieImageContainer:"MoviesList_movieImageContainer__LfmGo",movieImage:"MoviesList_movieImage__xaeaC"},s=n(184),c=function(e){var t=e.filmsList,n=(0,r.TH)();return(0,s.jsx)("div",{className:i.moviesListContainer,children:null===t||void 0===t?void 0:t.map((function(e,t){var r=e.id,c=e.original_title,u=e.poster_path;return(0,s.jsx)("div",{className:i.moviesListItem,children:(0,s.jsxs)(o.rU,{to:"/movies/".concat(r),state:{from:n},className:i.movieLink,children:[(0,s.jsx)("div",{className:i.movieImageContainer,children:(0,s.jsx)("img",{src:(0,a.Z)(u),alt:c,className:i.movieImage})}),(0,s.jsx)("h3",{children:c})]})},"".concat(r,"-").concat(t))}))})}},1894:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ee}});var r=n(3433),o=n(5861),a=n(9439),i=n(7757),s=n.n(i),c=n(2791),u=n(1087);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=m(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var v=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=m(e))&&(r&&(r+=" "),r+=t);return r},h=["theme","type"],g=["delay","staleId"],y=function(e){return"number"==typeof e&&!isNaN(e)},b=function(e){return"string"==typeof e},T=function(e){return"function"==typeof e},E=function(e){return b(e)||T(e)?e:null},_=function(e){return(0,c.isValidElement)(e)||b(e)||T(e)||y(e)};function O(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,i=e.collapse,s=void 0===i||i,u=e.collapseDuration,l=void 0===u?300:u;return function(e){var o=e.children,i=e.position,u=e.preventExitTransition,f=e.done,d=e.nodeRef,p=e.isIn,m=a?"".concat(t,"--").concat(i):t,v=a?"".concat(n,"--").concat(i):n,h=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var e,t=d.current,n=m.split(" "),o=function e(o){var a;o.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==o.type&&(a=t.classList).remove.apply(a,(0,r.Z)(n)))};(e=t.classList).add.apply(e,(0,r.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,c.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,f,l):f()};p||(u?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[p]),c.createElement(c.Fragment,null,o)}}function C(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var w={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,r.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)}))}},I=function(e){var t=e.theme,n=e.type,r=p(e,h);return c.createElement("svg",d({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},x={info:function(e){return c.createElement(I,d({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return c.createElement(I,d({},e),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return c.createElement(I,d({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return c.createElement(I,d({},e),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function L(e){var t=(0,c.useReducer)((function(e){return e+1}),0),n=(0,a.Z)(t,2)[1],o=(0,c.useState)([]),i=(0,a.Z)(o,2),s=i[0],u=i[1],l=(0,c.useRef)(null),f=(0,c.useRef)(new Map).current,m=function(e){return-1!==s.indexOf(e)},v=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:function(e){return f.get(e)}}).current;function h(e){var t=e.containerId;!v.props.limit||t&&v.containerId!==t||(v.count-=v.queue.length,v.queue=[])}function O(e){u((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function I(){var e=v.queue.shift();k(e.toastContent,e.toastProps,e.staleId)}function L(e,t){var r=t.delay,o=t.staleId,i=p(t,g);if(_(e)&&!function(e){return!l.current||v.props.enableMultiContainer&&e.containerId!==v.props.containerId||f.has(e.toastId)&&null==e.updateId}(i)){var s=i.toastId,u=i.updateId,m=i.data,h=v.props,L=function(){return O(s)},N=null==u;N&&v.count++;var P,R,j=d(d(d({},h),{},{style:h.toastStyle,key:v.toastKey++},Object.fromEntries(Object.entries(i).filter((function(e){var t=(0,a.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:s,updateId:u,data:m,closeToast:L,isIn:!1,className:E(i.className||h.toastClassName),bodyClassName:E(i.bodyClassName||h.bodyClassName),progressClassName:E(i.progressClassName||h.progressClassName),autoClose:!i.isLoading&&(P=i.autoClose,R=h.autoClose,!1===P||y(P)&&P>0?P:R),deleteToast:function(){var e=C(f.get(s),"removed");f.delete(s),w.emit(4,e);var t=v.queue.length;if(v.count=null==s?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),t>0){var r=null==s?v.props.limit:1;if(1===t||1===r)v.displayedToast++,I();else{var o=r>t?t:r;v.displayedToast=o;for(var a=0;a<o;a++)I()}}else n()}});j.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(T(o)?a=o(i):(0,c.isValidElement)(o)?a=(0,c.cloneElement)(o,i):b(o)||y(o)?a=o:r?a=x.spinner():function(e){return e in x}(n)&&(a=x[n](i))),a}(j),T(i.onOpen)&&(j.onOpen=i.onOpen),T(i.onClose)&&(j.onClose=i.onClose),j.closeButton=h.closeButton,!1===i.closeButton||_(i.closeButton)?j.closeButton=i.closeButton:!0===i.closeButton&&(j.closeButton=!_(h.closeButton)||h.closeButton);var M=e;(0,c.isValidElement)(e)&&!b(e.type)?M=(0,c.cloneElement)(e,{closeToast:L,toastProps:j,data:m}):T(e)&&(M=e({closeToast:L,toastProps:j,data:m})),h.limit&&h.limit>0&&v.count>h.limit&&N?v.queue.push({toastContent:M,toastProps:j,staleId:o}):y(r)?setTimeout((function(){k(M,j,o)}),r):k(M,j,o)}}function k(e,t,n){var o=t.toastId;n&&f.delete(n);var a={content:e,props:t};f.set(o,a),u((function(e){return[].concat((0,r.Z)(e),[o]).filter((function(e){return e!==n}))})),w.emit(4,C(a,null==a.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return v.containerId=e.containerId,w.cancelEmit(3).on(0,L).on(1,(function(e){return l.current&&O(e)})).on(5,h).emit(2,v),function(){f.clear(),w.emit(3,v)}}),[]),(0,c.useEffect)((function(){v.props=e,v.isToastActive=m,v.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(f.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:l,isToastActive:m}}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function P(e){var t=(0,c.useState)(!1),n=(0,a.Z)(t,2),r=n[0],o=n[1],i=(0,c.useState)(!1),s=(0,a.Z)(i,2),u=s[0],l=s[1],f=(0,c.useRef)(null),d=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",w),document.addEventListener("touchmove",C),document.addEventListener("touchend",w);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=k(t.nativeEvent),d.y=N(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(t){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=r&&d.y<=o?O():_()}}function _(){o(!0)}function O(){o(!1)}function C(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,r&&O(),d.x=k(t),d.y=N(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function w(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",w);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,c.useEffect)((function(){p.current=e})),(0,c.useEffect)((function(){return f.current&&f.current.addEventListener("d",_,{once:!0}),T(e.onOpen)&&e.onOpen((0,c.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;T(e.onClose)&&e.onClose((0,c.isValidElement)(e.children)&&e.children.props)}}),[]),(0,c.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||O(),window.addEventListener("focus",_),window.addEventListener("blur",O)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",_),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return m&&v&&(I.onMouseEnter=O,I.onMouseLeave=_),y&&(I.onClick=function(e){g&&g(e),d.canCloseOnClick&&h()}),{playToast:_,pauseToast:O,isRunning:r,preventExitTransition:u,toastRef:f,eventHandlers:I}}function R(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function j(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=void 0===o?"default":o,i=e.hide,s=e.className,u=e.style,f=e.controlledProgress,p=e.progress,m=e.rtl,h=e.isIn,g=e.theme,y=i||f&&0===p,b=d(d({},u),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});f&&(b.transform="scaleX(".concat(p,")"));var E=v("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":m}),_=T(s)?s({rtl:m,type:a,defaultClassName:E}):v(E,s);return c.createElement("div",l({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:_,style:b},f&&p>=1?"onTransitionEnd":"onAnimationEnd",f&&p<1?null:function(){h&&r()}))}var M=function(e){var t=P(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,u=e.autoClose,l=e.onClick,f=e.type,p=e.hideProgressBar,m=e.closeToast,h=e.transition,g=e.position,y=e.className,b=e.style,E=e.bodyClassName,_=e.bodyStyle,O=e.progressClassName,C=e.progressStyle,w=e.updateId,I=e.role,x=e.progress,L=e.rtl,k=e.toastId,N=e.deleteToast,M=e.isIn,S=e.isLoading,Z=e.iconOut,D=e.closeOnClick,B=e.theme,A=v("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":D}),F=T(y)?y({rtl:L,position:g,type:f,defaultClassName:A}):v(A,y),z=!!x||!u,q={closeToast:m,type:f,theme:B},H=null;return!1===i||(H=T(i)?i(q):(0,c.isValidElement)(i)?(0,c.cloneElement)(i,q):R(q)),c.createElement(h,{isIn:M,done:N,position:g,preventExitTransition:r,nodeRef:o},c.createElement("div",d(d({id:k,onClick:l,className:F},a),{},{style:b,ref:o}),c.createElement("div",d(d({},M&&{role:I}),{},{className:T(E)?E({type:f}):v("Toastify__toast-body",E),style:_}),null!=Z&&c.createElement("div",{className:v("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!S})},Z),c.createElement("div",null,s)),H,c.createElement(j,d(d({},w&&!z?{key:"pb-".concat(w)}:{}),{},{rtl:L,theme:B,delay:u,isRunning:n,isIn:M,closeToast:m,hide:p,type:f,style:C,className:O,controlledProgress:z,progress:x||0}))))},S=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},Z=O(S("bounce",!0)),D=(O(S("slide",!0)),O(S("zoom")),O(S("flip")),(0,c.forwardRef)((function(e,t){var n=L(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,u=e.rtl,l=e.containerId;function f(e){var t=v("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return T(i)?i({position:e,rtl:u,defaultClassName:t}):v(t,E(i))}return(0,c.useEffect)((function(){t&&(t.current=o.current)}),[]),c.createElement("div",{ref:o,className:"Toastify",id:l},r((function(e,t){var n=t.length?d({},s):d(d({},s),{},{pointerEvents:"none"});return c.createElement("div",{className:f(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,o=e.props;return c.createElement(M,d(d({},o),{},{isIn:a(o.toastId),style:d(d({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),r)})))})))})));D.displayName="ToastContainer",D.defaultProps={position:"top-right",transition:Z,autoClose:5e3,closeButton:R,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var B,A=new Map,F=[],z=1;function q(){return""+z++}function H(e){return e&&(b(e.toastId)||y(e.toastId))?e.toastId:q()}function U(e,t){return A.size>0?w.emit(0,e,t):F.push({content:e,options:t}),t.toastId}function V(e,t){return d(d({},t),{},{type:t&&t.type||e,toastId:H(t)})}function Q(e){return function(t,n){return U(t,V(e,n))}}function Y(e,t){return U(e,V("default",t))}Y.loading=function(e,t){return U(e,V("default",d({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Y.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=b(o)?Y.loading(o,n):Y.loading(o.render,d(d({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=d(d(d({type:e},s),n),{},{data:o}),i=b(t)?{render:t}:t;return r?Y.update(r,d(d({},a),i)):Y(i.render,d(d({},a),i)),o}Y.dismiss(r)},u=T(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},Y.success=Q("success"),Y.info=Q("info"),Y.error=Q("error"),Y.warning=Q("warning"),Y.warn=Y.warning,Y.dark=function(e,t){return U(e,V("default",d({theme:"dark"},t)))},Y.dismiss=function(e){A.size>0?w.emit(1,e):F=F.filter((function(t){return null!=e&&t.options.toastId!==e}))},Y.clearWaitingQueue=function(e){return void 0===e&&(e={}),w.emit(5,e)},Y.isActive=function(e){var t=!1;return A.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Y.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=A.get(n||B);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=d(d(d({delay:100},r),t),{},{toastId:t.toastId||e,updateId:q()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,U(i,a)}}),0)},Y.done=function(e){Y.update(e,{progress:1})},Y.onChange=function(e){return w.on(4,e),function(){w.off(4,e)}},Y.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Y.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},w.on(2,(function(e){B=e.containerId||e,A.set(B,e),F.forEach((function(e){w.emit(0,e.content,e.options)})),F=[]})).on(3,(function(e){A.delete(e.containerId||e),0===A.size&&w.off(0).off(1).off(5)}));var W={form:"FormMovies_form__beB5c",input:"FormMovies_input__DtFMU",searchButton:"FormMovies_searchButton__2TXVY",formInputContainer:"FormMovies_formInputContainer__Et7nN"},G=n(184),X=function(e){var t=e.setSearchParams,n=e.searchMovies,r=(0,c.useRef)(null);return(0,G.jsxs)("div",{className:W.form,children:[(0,G.jsx)("form",{onSubmit:function(e){e.preventDefault();var o=e.target.search.value;if(t({query:o}),r.current.value="",n===o)return Y.warn("You are already watching this movie '".concat(o,"'"))},children:(0,G.jsxs)("div",{className:W.formInputContainer,children:[(0,G.jsx)("input",{type:"text",name:"search",required:!0,ref:r,className:W.searchInput,placeholder:"Search for a movie..."}),(0,G.jsx)("button",{type:"submit",className:W.searchButton,children:"Search"})]})}),(0,G.jsx)(D,{theme:"colored"})]})},K=n(6242),J=n(9155),$=n(4321),ee=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],i=t[1],l=(0,c.useState)(!1),f=(0,a.Z)(l,2),d=f[0],p=f[1],m=(0,u.lr)(),v=(0,a.Z)(m,2),h=v[0],g=v[1],y=h.get("query"),b=(0,c.useCallback)((0,o.Z)(s().mark((function e(){var t,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,t=Math.ceil(n.length/20)+1,e.next=6,(0,K.n4)(y,t);case 6:0===(o=e.sent).results.length?Y.info("No more movies to load"):i((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(o.results))})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),[y,n]);return(0,c.useEffect)((function(){if(y)try{var e=function(){var e=(0,o.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,(0,K.n4)(y);case 3:0===(t=e.sent).results.length?Y.error("film not found ".concat(y," ")):i(t.results),p(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){console.log(t),p(!1)}}),[y]),(0,c.useEffect)((function(){var e=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight-100&&b()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[n,y,b]),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(X,{setSearchParams:g,searchMovies:y}),n.length>0&&(0,G.jsx)(J.Z,{filmsList:n}),d&&(0,G.jsx)($.default,{}),(0,G.jsx)(D,{theme:"colored"})]})}},888:function(e,t,n){"use strict";var r=n(9047);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=894.fdd5ad73.chunk.js.map