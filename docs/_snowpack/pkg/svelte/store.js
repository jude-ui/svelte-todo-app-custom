import{o as a,D as x,x as y,s as q,w as j}from"../common/index-fc2a7fc9.js";export{E as get}from"../common/index-fc2a7fc9.js";const u=[];function w(n,o){return{subscribe:g(n,o).subscribe}}function g(n,o=a){let c;const t=new Set;function f(e){if(q(n,e)&&(n=e,c)){const r=!u.length;for(const s of t)s[1](),u.push(s,n);if(r){for(let s=0;s<u.length;s+=2)u[s][0](u[s+1]);u.length=0}}}function l(e){f(e(n))}function b(e,r=a){const s=[e,r];return t.add(s),t.size===1&&(c=o(f)||a),e(n),()=>{t.delete(s),t.size===0&&(c(),c=null)}}return{set:f,update:l,subscribe:b}}function z(n,o,c){const t=!Array.isArray(n),f=t?[n]:n,l=o.length<2;return w(c,b=>{let e=!1;const r=[];let s=0,d=a;const m=()=>{if(s)return;d();const i=o(t?r[0]:r,b);l?b(i):d=j(i)?i:a},_=f.map((i,p)=>x(i,h=>{r[p]=h,s&=~(1<<p),e&&m()},()=>{s|=1<<p}));return e=!0,m(),function(){y(_),d()}})}export{z as derived,g as writable};