import{S as g,i as $,s as w,a as E,k as m,q as d,c as v,l as _,m as h,r as k,h as c,b as p,G as b,J as P,H as y,o as C,u as L,y as T,z as S,A as q,g as x,d as A,B as I}from"../chunks/index.33fbba09.js";function N(i){let e,r,s;return{c(){e=m("p"),r=d("Error: "),s=d(i[0])},l(n){e=_(n,"P",{});var l=h(e);r=k(l,"Error: "),s=k(l,i[0]),l.forEach(c)},m(n,l){p(n,e,l),b(e,r),b(e,s)},p(n,l){l&1&&L(s,n[0])},d(n){n&&c(e)}}}function j(i){let e,r;return{c(){e=m("p"),r=d("Loading...")},l(s){e=_(s,"P",{});var n=h(e);r=k(n,"Loading..."),n.forEach(c)},m(s,n){p(s,e,n),b(e,r)},p:y,d(s){s&&c(e)}}}function B(i){let e,r,s,n,l;function f(a,u){if(a[1])return j;if(a[0])return N}let t=f(i),o=t&&t(i);return{c(){o&&o.c(),e=E(),r=m("button"),s=d("callback")},l(a){o&&o.l(a),e=v(a),r=_(a,"BUTTON",{});var u=h(r);s=k(u,"callback"),u.forEach(c)},m(a,u){o&&o.m(a,u),p(a,e,u),p(a,r,u),b(r,s),n||(l=P(r,"click",i[2]),n=!0)},p(a,[u]){t===(t=f(a))&&o?o.p(a,u):(o&&o.d(1),o=t&&t(a),o&&(o.c(),o.m(e.parentNode,e)))},i:y,o:y,d(a){o&&o.d(a),a&&c(e),a&&c(r),n=!1,l()}}}const G="https://opinion.dev.ngrok.io/api/exchange-code?code=";function H(i,e,r){let s=null,n=!1;const l=async f=>{r(1,n=!0);try{const t=await fetch(G+f,{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok)throw new Error(`API request failed with status ${t.status}`);const o=await t.json()}catch(t){r(0,s=t.message)}finally{r(1,n=!1)}C(()=>{const t=new URLSearchParams(window.location.search),o=t.get("code"),a=t.get("error");o?l(o):a&&console.error("Instagram authentication error:",a)})};return[s,n,l]}class M extends g{constructor(e){super(),$(this,e,H,B,w,{})}}function U(i){let e,r,s,n,l,f;return l=new M({}),{c(){e=m("h1"),r=d("Welcome to opinion-frontend/callback"),s=E(),n=m("main"),T(l.$$.fragment)},l(t){e=_(t,"H1",{});var o=h(e);r=k(o,"Welcome to opinion-frontend/callback"),o.forEach(c),s=v(t),n=_(t,"MAIN",{});var a=h(n);S(l.$$.fragment,a),a.forEach(c)},m(t,o){p(t,e,o),b(e,r),p(t,s,o),p(t,n,o),q(l,n,null),f=!0},p:y,i(t){f||(x(l.$$.fragment,t),f=!0)},o(t){A(l.$$.fragment,t),f=!1},d(t){t&&c(e),t&&c(s),t&&c(n),I(l)}}}class z extends g{constructor(e){super(),$(this,e,null,U,w,{})}}export{z as default};
