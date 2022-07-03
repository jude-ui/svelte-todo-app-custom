import{SvelteComponent as D,append as $,attr as b,check_outros as I,component_subscribe as N,create_component as T,destroy_component as j,detach as v,element as L,empty as E,group_outros as R,init as F,insert as y,listen as G,mount_component as w,noop as K,outro_and_destroy_block as P,safe_not_equal as Q,set_store_value as C,space as S,transition_in as m,transition_out as _,update_keyed_each as U}from"../_snowpack/pkg/svelte/internal.js";import{todos as O,initStorage as V,isListRecent as q,saveStorage as W}from"./store/index.js";import X from"./components/Todo.svelte.js";import Y from"./components/CreateTodo.svelte.js";import Z from"./components/ListOrderSetting.svelte.js";import x from"./components/CommonLayer.svelte.js";function A(c,e,n){const t=c.slice();return t[8]=e[n],t}function H(c){let e,n,t,f,s,u,o,l=[],p=new Map,g,d,J,a=c[0]&&z(c);s=new Z({});let k=c[1];const M=r=>r[8].id;for(let r=0;r<k.length;r+=1){let i=A(c,k,r),h=M(i);p.set(h,l[r]=B(h,i))}return{c(){e=L("div"),n=L("button"),n.innerHTML='\uBAA9\uB85D \uCD08\uAE30\uD654 <span class="material-icons-outlined ico_delete" aria-hidden="true">delete</span>',t=S(),a&&a.c(),f=S(),T(s.$$.fragment),u=S(),o=L("ul");for(let r=0;r<l.length;r+=1)l[r].c();b(n,"type","button"),b(n,"class","btn btn_danger btn_init"),b(e,"class","info_setting"),b(o,"class","list_todo")},m(r,i){y(r,e,i),$(e,n),$(e,t),a&&a.m(e,null),$(e,f),w(s,e,null),y(r,u,i),y(r,o,i);for(let h=0;h<l.length;h+=1)l[h].m(o,null);g=!0,d||(J=G(n,"click",c[2]),d=!0)},p(r,i){r[0]?a?(a.p(r,i),i&1&&m(a,1)):(a=z(r),a.c(),m(a,1),a.m(e,f)):a&&(R(),_(a,1,1,()=>{a=null}),I()),i&2&&(k=r[1],R(),l=U(l,i,M,1,r,k,p,o,P,B,null,A),I())},i(r){if(!g){m(a),m(s.$$.fragment,r);for(let i=0;i<k.length;i+=1)m(l[i]);g=!0}},o(r){_(a),_(s.$$.fragment,r);for(let i=0;i<l.length;i+=1)_(l[i]);g=!1},d(r){r&&v(e),a&&a.d(),j(s),r&&v(u),r&&v(o);for(let i=0;i<l.length;i+=1)l[i].d();d=!1,J()}}}function z(c){let e,n;return e=new x({props:{tit_layer:"Todo \uBAA9\uB85D\uC744 \uBAA8\uB450 \uCD08\uAE30\uD654 \uC2DC\uD0A4\uACA0\uC2B5\uB2C8\uAE4C?",btn_fn1:c[3],btn_fn2:c[4]}}),{c(){T(e.$$.fragment)},m(t,f){w(e,t,f),n=!0},p:K,i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}function B(c,e){let n,t,f;return t=new X({props:{todo:e[8]}}),{key:c,first:null,c(){n=E(),T(t.$$.fragment),this.first=n},m(s,u){y(s,n,u),w(t,s,u),f=!0},p(s,u){e=s;const o={};u&2&&(o.todo=e[8]),t.$set(o)},i(s){f||(m(t.$$.fragment,s),f=!0)},o(s){_(t.$$.fragment,s),f=!1},d(s){s&&v(n),j(t,s)}}}function ee(c){let e,n,t,f,s,u;f=new Y({});let o=c[1].length&&H(c);return{c(){e=L("div"),n=L("h1"),n.textContent="Todo List",t=S(),T(f.$$.fragment),s=S(),o&&o.c(),b(n,"class","tit_todo"),b(e,"class","container")},m(l,p){y(l,e,p),$(e,n),$(e,t),w(f,e,null),$(e,s),o&&o.m(e,null),u=!0},p(l,[p]){l[1].length?o?(o.p(l,p),p&2&&m(o,1)):(o=H(l),o.c(),m(o,1),o.m(e,null)):o&&(R(),_(o,1,1,()=>{o=null}),I())},i(l){u||(m(f.$$.fragment,l),m(o),u=!0)},o(l){_(f.$$.fragment,l),_(o),u=!1},d(l){l&&v(e),j(f),o&&o.d()}}}function te(c,e,n){let t,f;N(c,O,d=>n(1,t=d)),N(c,q,d=>n(5,f=d));const s=localStorage.getItem("todos");s&&C(O,t=JSON.parse(s),t);const u=localStorage.getItem("isListRecent");JSON.parse(u)||(C(q,f=!0,f),C(O,t=t.reverse(),t),W());let o=!1;function l(){n(0,o=!0)}function p(){C(O,t=[],t),V(),n(0,o=!1)}function g(){n(0,o=!1)}return[o,t,l,p,g]}class oe extends D{constructor(e){super();F(this,e,te,ee,Q,{})}}export default oe;