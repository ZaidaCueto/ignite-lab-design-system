import{r}from"./index.0d580f38.js";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function u(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function d(...e){return t=>e.forEach(n=>u(n,t))}function E(...e){return r.exports.useCallback(d(...e),e)}const $=r.exports.forwardRef((e,t)=>{const{children:n,...o}=e,s=r.exports.Children.toArray(n),l=s.find(m);if(l){const c=l.props.children,i=s.map(f=>f===l?r.exports.Children.count(c)>1?r.exports.Children.only(null):r.exports.isValidElement(c)?c.props.children:null:f);return r.exports.createElement(p,a({},o,{ref:t}),r.exports.isValidElement(c)?r.exports.cloneElement(c,void 0,i):null)}return r.exports.createElement(p,a({},o,{ref:t}),n)});$.displayName="Slot";const p=r.exports.forwardRef((e,t)=>{const{children:n,...o}=e;return r.exports.isValidElement(n)?r.exports.cloneElement(n,{...h(o,n.props),ref:d(t,n.ref)}):r.exports.Children.count(n)>1?r.exports.Children.only(null):null});p.displayName="SlotClone";const x=({children:e})=>r.exports.createElement(r.exports.Fragment,null,e);function m(e){return r.exports.isValidElement(e)&&e.type===x}function h(e,t){const n={...t};for(const o in t){const s=e[o],l=t[o];/^on[A-Z]/.test(o)?n[o]=(...i)=>{l==null||l(...i),s==null||s(...i)}:o==="style"?n[o]={...s,...l}:o==="className"&&(n[o]=[s,l].filter(Boolean).join(" "))}return{...e,...n}}export{$,a as _,E as a};
//# sourceMappingURL=index.module.9972083b.js.map
