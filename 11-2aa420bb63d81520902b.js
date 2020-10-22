/*! For license information please see 11-2aa420bb63d81520902b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2mql":function(e,t,n){"use strict";var o=n("TOwV"),l={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function s(e){return o.isMemo(e)?i:a[e.$$typeof]||l}a[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[o.Memo]=i;var u=Object.defineProperty,c=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,d=Object.prototype;e.exports=function e(t,n,o){if("string"!=typeof n){if(d){var l=m(n);l&&l!==d&&e(t,l,o)}var i=c(n);f&&(i=i.concat(f(n)));for(var a=s(t),h=s(n),y=0;y<i.length;++y){var b=i[y];if(!(r[b]||o&&o[b]||h&&h[b]||a&&a[b])){var v=p(n,b);try{u(t,b,v)}catch(E){}}}}return t}},QEwD:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),l=n.n(o),r=n("4R65"),i=n.n(r),a=n("wx14"),s=n("zLVn");function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=n("dI71");function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=n("2mql"),m=n.n(p),d=Object(o.createContext)({}),h=d.Consumer,y=d.Provider,b=/^on(.+)$/i,v=function(e){function t(t){var n;return f(u(n=e.call(this,t)||this),"_leafletEvents",void 0),f(u(n),"leafletElement",void 0),n._leafletEvents=n.extractLeafletEvents(t),n}Object(c.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.bindLeafletEvents(this._leafletEvents)},n.componentDidUpdate=function(e){this._leafletEvents=this.bindLeafletEvents(this.extractLeafletEvents(this.props),this._leafletEvents)},n.componentWillUnmount=function(){var e=this,t=this.leafletElement;t&&Object.keys(this._leafletEvents).forEach((function(n){t.off(n,e._leafletEvents[n])}))},n.extractLeafletEvents=function(e){return Object.keys(e).reduce((function(t,n){b.test(n)&&(null!=e[n]&&(t[n.replace(b,(function(e,t){return t.toLowerCase()}))]=e[n]));return t}),{})},n.bindLeafletEvents=function(e,t){void 0===e&&(e={}),void 0===t&&(t={});var n=this.leafletElement;if(null==n||null==n.on)return{};var o=Object(a.a)({},t);return Object.keys(t).forEach((function(l){null!=e[l]&&t[l]===e[l]||(delete o[l],n.off(l,t[l]))})),Object.keys(e).forEach((function(l){null!=t[l]&&e[l]===t[l]||(o[l]=e[l],n.on(l,e[l]))})),o},n.fireLeafletEvent=function(e,t){var n=this.leafletElement;n&&n.fire(e,t)},t}(o.Component),E=function(e){return void 0===e&&(e=""),e.split(" ").filter(Boolean)},g=function(e,t,n){null!=e&&n!==t&&(null!=t&&t.length>0&&function(e,t){E(t).forEach((function(t){r.DomUtil.removeClass(e,t)}))}(e,t),null!=n&&n.length>0&&function(e,t){E(t).forEach((function(t){r.DomUtil.addClass(e,t)}))}(e,n))};function O(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return Object.keys(e).reduce((function(t,o){return-1===n.indexOf(o)&&(t[o]=e[o]),t}),{})}var w=["children","className","id","style","useFlyTo","whenReady"],C=function(e){return Array.isArray(e)?[e[0],e[1]]:[e.lat,e.lon?e.lon:e.lng]},x=function(e){function t(t){var n;return f(u(n=e.call(this,t)||this),"className",void 0),f(u(n),"contextValue",void 0),f(u(n),"container",void 0),f(u(n),"viewport",{center:void 0,zoom:void 0}),f(u(n),"_ready",!1),f(u(n),"_updating",!1),f(u(n),"onViewportChange",(function(){var e=n.leafletElement.getCenter();n.viewport={center:e?[e.lat,e.lng]:void 0,zoom:n.leafletElement.getZoom()},n.props.onViewportChange&&!n._updating&&n.props.onViewportChange(n.viewport)})),f(u(n),"onViewportChanged",(function(){n.props.onViewportChanged&&!n._updating&&n.props.onViewportChanged(n.viewport)})),f(u(n),"bindContainer",(function(e){n.container=e})),n.className=t.className,n}Object(c.a)(t,e);var n=t.prototype;return n.createLeafletElement=function(e){var t=e.viewport,n=Object(s.a)(e,["viewport"]);return t&&(t.center&&(n.center=t.center),"number"==typeof t.zoom&&(n.zoom=t.zoom)),new r.Map(this.container,n)},n.updateLeafletElement=function(e,t){this._updating=!0;var n=t.bounds,o=t.boundsOptions,l=t.boxZoom,r=t.center,i=t.className,a=t.doubleClickZoom,s=t.dragging,u=t.keyboard,c=t.maxBounds,f=t.scrollWheelZoom,p=t.tap,m=t.touchZoom,d=t.useFlyTo,h=t.viewport,y=t.zoom;if(g(this.container,e.className,i),h&&h!==e.viewport){var b=h.center?h.center:r,v=null==h.zoom?y:h.zoom;!0===d?this.leafletElement.flyTo(b,v,this.getZoomPanOptions(t)):this.leafletElement.setView(b,v,this.getZoomPanOptions(t))}else r&&this.shouldUpdateCenter(r,e.center)?!0===d?this.leafletElement.flyTo(r,y,this.getZoomPanOptions(t)):this.leafletElement.setView(r,y,this.getZoomPanOptions(t)):"number"==typeof y&&y!==e.zoom&&(null==e.zoom?this.leafletElement.setView(r,y,this.getZoomPanOptions(t)):this.leafletElement.setZoom(y,this.getZoomPanOptions(t)));c&&this.shouldUpdateBounds(c,e.maxBounds)&&this.leafletElement.setMaxBounds(c),n&&(this.shouldUpdateBounds(n,e.bounds)||o!==e.boundsOptions)&&(!0===d?this.leafletElement.flyToBounds(n,this.getFitBoundsOptions(t)):this.leafletElement.fitBounds(n,this.getFitBoundsOptions(t))),l!==e.boxZoom&&(!0===l?this.leafletElement.boxZoom.enable():this.leafletElement.boxZoom.disable()),a!==e.doubleClickZoom&&(!0===a||"string"==typeof a?(this.leafletElement.options.doubleClickZoom=a,this.leafletElement.doubleClickZoom.enable()):this.leafletElement.doubleClickZoom.disable()),s!==e.dragging&&(!0===s?this.leafletElement.dragging.enable():this.leafletElement.dragging.disable()),u!==e.keyboard&&(!0===u?this.leafletElement.keyboard.enable():this.leafletElement.keyboard.disable()),f!==e.scrollWheelZoom&&(!0===f||"string"==typeof f?(this.leafletElement.options.scrollWheelZoom=f,this.leafletElement.scrollWheelZoom.enable()):this.leafletElement.scrollWheelZoom.disable()),p!==e.tap&&(!0===p?this.leafletElement.tap.enable():this.leafletElement.tap.disable()),m!==e.touchZoom&&(!0===m||"string"==typeof m?(this.leafletElement.options.touchZoom=m,this.leafletElement.touchZoom.enable()):this.leafletElement.touchZoom.disable()),this._updating=!1},n.getZoomPanOptions=function(e){return{animate:e.animate,duration:e.duration,easeLinearity:e.easeLinearity,noMoveStart:e.noMoveStart}},n.getFitBoundsOptions=function(e){var t=this.getZoomPanOptions(e);return Object(a.a)(Object(a.a)({},t),e.boundsOptions)},n.componentDidMount=function(){var t=O.apply(void 0,[this.props].concat(w));this.leafletElement=this.createLeafletElement(t),this.leafletElement.on("move",this.onViewportChange),this.leafletElement.on("moveend",this.onViewportChanged),null!=t.bounds&&this.leafletElement.fitBounds(t.bounds,this.getFitBoundsOptions(t)),this.contextValue={layerContainer:this.leafletElement,map:this.leafletElement},e.prototype.componentDidMount.call(this),this.forceUpdate()},n.componentDidUpdate=function(t){!1===this._ready&&(this._ready=!0,this.props.whenReady&&this.leafletElement.whenReady(this.props.whenReady)),e.prototype.componentDidUpdate.call(this,t),this.updateLeafletElement(t,this.props)},n.componentWillUnmount=function(){e.prototype.componentWillUnmount.call(this),this.leafletElement.off("move",this.onViewportChange),this.leafletElement.off("moveend",this.onViewportChanged),!0===this.props.preferCanvas?(this.leafletElement._initEvents(!0),this.leafletElement._stop()):this.leafletElement.remove()},n.shouldUpdateCenter=function(e,t){return!t||(e=C(e),t=C(t),e[0]!==t[0]||e[1]!==t[1])},n.shouldUpdateBounds=function(e,t){return!t||!Object(r.latLngBounds)(e).equals(Object(r.latLngBounds)(t))},n.render=function(){return l.a.createElement("div",{className:this.className,id:this.props.id,ref:this.bindContainer,style:this.props.style},this.contextValue?l.a.createElement(y,{value:this.contextValue},this.props.children):null)},t}(v);function Z(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var L=function(e){var t=function(t,n){return l.a.createElement(h,null,(function(o){return l.a.createElement(e,Object(a.a)({},t,{leaflet:o,ref:n}))}))},n=e.displayName||e.name||"Component";t.displayName="Leaflet("+n+")";var r=Object(o.forwardRef)(t);return m()(r,e),r}(function(e){function t(){return e.apply(this,arguments)||this}Object(c.a)(t,e);var n=t.prototype;return n.createLeafletElement=function(e){return new r.TileLayer(e.url,this.getOptions(e))},n.updateLeafletElement=function(t,n){e.prototype.updateLeafletElement.call(this,t,n),n.url!==t.url&&this.leafletElement.setUrl(n.url)},t}(function(e){function t(){return e.apply(this,arguments)||this}Object(c.a)(t,e);var n=t.prototype;return n.createLeafletElement=function(e){return new r.GridLayer(this.getOptions(e))},n.updateLeafletElement=function(e,t){var n=t.opacity,o=t.zIndex;n!==e.opacity&&this.leafletElement.setOpacity(n),o!==e.zIndex&&this.leafletElement.setZIndex(o)},n.getOptions=function(t){var n=Object(a.a)({},e.prototype.getOptions.call(this,t)),o=t.leaflet.map;return null!=o&&(null==n.maxZoom&&null!=o.options.maxZoom&&(n.maxZoom=o.options.maxZoom),null==n.minZoom&&null!=o.options.minZoom&&(n.minZoom=o.options.minZoom)),n},n.render=function(){return null},t}(function(e){function t(t){var n;return f(u(n=e.call(this,t)||this),"contextValue",void 0),f(u(n),"leafletElement",void 0),n.leafletElement=n.createLeafletElement(t),n}Object(c.a)(t,e);var n,r,i,a=t.prototype;return a.createLeafletElement=function(e){throw new Error("createLeafletElement() must be implemented")},a.updateLeafletElement=function(e,t){},a.componentDidMount=function(){e.prototype.componentDidMount.call(this),this.layerContainer.addLayer(this.leafletElement)},a.componentDidUpdate=function(t){if(e.prototype.componentDidUpdate.call(this,t),this.props.attribution!==t.attribution){var n=this.props.leaflet.map;null!=n&&null!=n.attributionControl&&(n.attributionControl.removeAttribution(t.attribution),n.attributionControl.addAttribution(this.props.attribution))}this.updateLeafletElement(t,this.props)},a.componentWillUnmount=function(){e.prototype.componentWillUnmount.call(this),this.layerContainer.removeLayer(this.leafletElement)},a.render=function(){var e=this.props.children;return null==e?null:null==this.contextValue?l.a.createElement(o.Fragment,null,e):l.a.createElement(y,{value:this.contextValue},e)},n=t,(r=[{key:"layerContainer",get:function(){return this.props.leaflet.layerContainer||this.props.leaflet.map}}])&&Z(n.prototype,r),i&&Z(n,i),t}(function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.getOptions=function(e){return null!=e.pane?e:null!=e.leaflet&&null!=e.leaflet.pane?Object(a.a)(Object(a.a)({},e),{},{pane:e.leaflet.pane}):e},t}(v))))),j=n("Wbzz");n("bMVF"),t.default=function(){var e=i.a.latLngBounds(i.a.latLng(90,90),i.a.latLng(-66.5,-180));return l.a.createElement(x,{zoom:0,center:e.getCenter(),bounds:e,maxBounds:e,maxBoundsViscosity:1,attributionControl:!1,style:{height:"100%"}},l.a.createElement(L,{url:Object(j.withPrefix)("/maps/genshin-impact-teyvat/{z}/{x}/{y}.png"),minZoom:3,maxZoom:5,noWrap:!0}))}},TOwV:function(e,t,n){"use strict";e.exports=n("qT12")},bMVF:function(e,t,n){},qT12:function(e,t,n){"use strict";var o="function"==typeof Symbol&&Symbol.for,l=o?Symbol.for("react.element"):60103,r=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,c=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.async_mode"):60111,p=o?Symbol.for("react.concurrent_mode"):60111,m=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.suspense_list"):60120,y=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,v=o?Symbol.for("react.block"):60121,E=o?Symbol.for("react.fundamental"):60117,g=o?Symbol.for("react.responder"):60118,O=o?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case l:switch(e=e.type){case f:case p:case i:case s:case a:case d:return e;default:switch(e=e&&e.$$typeof){case c:case m:case b:case y:case u:return e;default:return t}}case r:return t}}}function C(e){return w(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=c,t.ContextProvider=u,t.Element=l,t.ForwardRef=m,t.Fragment=i,t.Lazy=b,t.Memo=y,t.Portal=r,t.Profiler=s,t.StrictMode=a,t.Suspense=d,t.isAsyncMode=function(e){return C(e)||w(e)===f},t.isConcurrentMode=C,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===l},t.isForwardRef=function(e){return w(e)===m},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===b},t.isMemo=function(e){return w(e)===y},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===s},t.isStrictMode=function(e){return w(e)===a},t.isSuspense=function(e){return w(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===s||e===a||e===d||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===y||e.$$typeof===u||e.$$typeof===c||e.$$typeof===m||e.$$typeof===E||e.$$typeof===g||e.$$typeof===O||e.$$typeof===v)},t.typeOf=w}}]);
//# sourceMappingURL=11-2aa420bb63d81520902b.js.map