function $(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function C(){return Object.create(null)}function g(t){t.forEach(B)}function O(t){return typeof t=="function"}function ut(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function H(t){return Object.keys(t).length===0}function I(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function lt(t,n,e){t.$$.on_destroy.push(I(n,e))}function st(t,n,e,i){if(t){const r=L(t,n,e,i);return t[0](r)}}function L(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function ot(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(n.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=n.dirty[s]|r[s];return o}return n.dirty|r}return n.dirty}function ft(t,n,e,i,r,o){if(r){const c=L(n,e,i,o);t.p(c,r)}}function at(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let w=!1;function G(){w=!0}function J(){w=!1}function W(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&u.push(a)}n=u}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let u=0;u<n.length;u++){const l=n[u].claim_order,a=(r>0&&n[e[r]].claim_order<=l?r+1:W(1,r,x=>n[e[x]].claim_order,l))-1;i[u]=e[a]+1;const f=a+1;e[f]=u,r=Math.max(f,r)}const o=[],c=[];let s=n.length-1;for(let u=e[r]+1;u!=0;u=i[u-1]){for(o.push(n[u-1]);s>=u;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);o.reverse(),c.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<c.length;u++){for(;l<o.length&&c[u].claim_order>=o[l].claim_order;)l++;const a=l<o.length?o[l]:null;t.insertBefore(c[u],a)}}function Q(t,n){if(w){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){w&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode&&t.parentNode.removeChild(t)}function U(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function _t(){return A(" ")}function ht(){return A("")}function mt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function pt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,r=!1){X(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(n(s)){const u=e(s);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(n(s)){const u=e(s);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Y(t,n,e,i){return P(t,r=>r.nodeName===n,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];e[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(n))}function yt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function gt(t){return Z(t," ")}function xt(t,n){n=""+n,t.data!==n&&(t.data=n)}function bt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function $t(t,n){return new t(n)}let y;function p(t){y=t}function T(){if(!y)throw new Error("Function called outside component initialization");return y}function wt(t){T().$$.on_mount.push(t)}function Et(t){T().$$.after_update.push(t)}const h=[],k=[];let m=[];const M=[],q=Promise.resolve();let v=!1;function z(){v||(v=!0,q.then(D))}function vt(){return z(),q}function N(t){m.push(t)}const E=new Set;let _=0;function D(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const n=h[_];_++,p(n),tt(n.$$)}}catch(n){throw h.length=0,_=0,n}for(p(null),h.length=0,_=0;k.length;)k.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];E.has(e)||(E.add(e),e())}m.length=0}while(h.length);for(;M.length;)M.pop()();v=!1,E.clear(),p(t)}function tt(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}function nt(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const b=new Set;let d;function Nt(){d={r:0,c:[],p:d}}function At(){d.r||g(d.c),d=d.p}function et(t,n){t&&t.i&&(b.delete(t),t.i(n))}function St(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),d.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function jt(t){t&&t.c()}function Ct(t,n){t&&t.l(n)}function it(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||N(()=>{const c=t.$$.on_mount.map(B).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),o.forEach(N)}function rt(t,n){const e=t.$$;e.fragment!==null&&(nt(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function kt(t,n,e,i,r,o,c,s=[-1]){const u=y;p(t);const l=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:C(),dirty:s,skip_bound:!1,root:n.target||u.$$.root};c&&c(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,x,...S)=>{const j=S.length?S[0]:x;return l.ctx&&r(l.ctx[f],l.ctx[f]=j)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](j),a&&ct(t,f)),x}):[],l.update(),a=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){G();const f=V(n.target);l.fragment&&l.fragment.l(f),f.forEach(R)}else l.fragment&&l.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),J(),D()}p(u)}class Mt{$destroy(){rt(this,1),this.$destroy=$}$on(n,e){if(!O(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!H(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{it as A,rt as B,st as C,ft as D,at as E,ot as F,Q as G,$ as H,lt as I,mt as J,Mt as S,_t as a,dt as b,gt as c,St as d,ht as e,At as f,et as g,R as h,kt as i,Et as j,U as k,yt as l,V as m,pt as n,wt as o,bt as p,A as q,Z as r,ut as s,vt as t,xt as u,Nt as v,k as w,$t as x,jt as y,Ct as z};
