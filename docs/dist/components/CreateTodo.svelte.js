import{SvelteComponent as b,append as m,attr as l,component_subscribe as f,detach as g,element as c,init as v,insert as y,listen as d,noop as _,run_all as j,safe_not_equal as Y,set_input_value as h,set_store_value as w,space as C}from"../../_snowpack/pkg/svelte/internal.js";import D from"../../_snowpack/pkg/shortid.js";import T from"../../_snowpack/pkg/moment.js";import{todos as k,saveStorage as L,isListRecent as M}from"../store/index.js";function R(s){let o,t,n,r,e,u;return{c(){o=c("div"),t=c("input"),n=C(),r=c("button"),r.textContent="Todo \uB4F1\uB85D",l(t,"type","text"),l(t,"class","form_ctrl"),l(r,"class","btn btn_primary"),l(o,"class","create_todo")},m(i,a){y(i,o,a),m(o,t),h(t,s[0]),m(o,n),m(o,r),e||(u=[d(t,"input",s[2]),d(t,"keyup",s[3]),d(r,"click",s[1])],e=!0)},p(i,[a]){a&1&&t.value!==i[0]&&h(t,i[0])},i:_,o:_,d(i){i&&g(o),e=!1,j(u)}}}function S(s,o,t){let n,r;f(s,k,p=>t(4,n=p)),f(s,M,p=>t(5,r=p));let e="";function u(){if(!e||!e.trim())return;const p={id:D.generate(),title:e.trim(),isDone:!1,time:T().format("YYYY.MM.DD a h:mm:ss")};r?n.unshift(p):n.push(p),w(k,n=n,n),L(),t(0,e="")}function i(){e=this.value,t(0,e)}return[e,u,i,p=>{p.key==="Enter"&&u()}]}class q extends b{constructor(o){super();v(this,o,S,R,Y,{})}}export default q;
