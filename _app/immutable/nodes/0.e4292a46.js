import{i as oe,g as ce,c as Ct,f as ie,s as Y,n as w,d as F,e as Ot,h as pt,j as ue,k as Nt,l as Xt,m as ee,u as ne,p as se,q as ae,r as yt,o as fe}from"../chunks/scheduler.f3739248.js";import{p as xt,t as B,b as Mt,d as j,S as K,i as tt,g as m,h as d,x as H,k as f,a as V,f as _,s as x,j as A,c as M,y as i,m as ht,n as gt,z as me,o as Dt,e as nt,q as St,r as X,u as q,v as S,w as W}from"../chunks/index.93d15c00.js";import{b as rt}from"../chunks/paths.07420bf4.js";import{d as Wt,r as de,c as he,a as qt,p as Lt,g as ge}from"../chunks/history.b5020a00.js";import{w as At,d as _e}from"../chunks/index.097891a9.js";function Jt(r,t){const s=t.token={};function n(e,a,l,u){if(t.token!==s)return;t.resolved=u;let c=t.ctx;l!==void 0&&(c=c.slice(),c[l]=u);const o=e&&(t.current=e)(c);let h=!1;t.block&&(t.blocks?t.blocks.forEach((g,p)=>{p!==a&&g&&(xt(),B(g,1,1,()=>{t.blocks[p]===g&&(t.blocks[p]=null)}),Mt())}):t.block.d(1),o.c(),j(o,1),o.m(t.mount(),t.anchor),h=!0),t.block=o,t.blocks&&(t.blocks[a]=o),h&&ie()}if(oe(r)){const e=ce();if(r.then(a=>{Ct(e),n(t.then,1,t.value,a),Ct(null)},a=>{if(Ct(e),n(t.catch,2,t.error,a),Ct(null),!t.hasCatch)throw a}),t.current!==t.pending)return n(t.pending,0),!0}else{if(t.current!==t.then)return n(t.then,1,t.value,r),!0;t.resolved=r}}function ve(r,t,s){const n=t.slice(),{resolved:e}=r;r.current===r.then&&(n[r.value]=e),r.current===r.catch&&(n[r.error]=e),r.block.p(n,s)}function pe(r,t){const s={},n={},e={$$scope:1};let a=r.length;for(;a--;){const l=r[a],u=t[a];if(u){for(const c in l)c in u||(n[c]=1);for(const c in u)e[c]||(s[c]=u[c],e[c]=1);r[a]=u}else for(const c in l)e[c]=1}for(const l in n)l in s||(s[l]=void 0);return s}function Zt(r){return typeof r=="object"&&r!==null?r:{}}const ke=!0,be="always",dn=Object.freeze(Object.defineProperty({__proto__:null,prerender:ke,trailingSlash:be},Symbol.toStringTag,{value:"Module"}));function Ce(r){let t,s='<h1 class="header-title">Nickolay Petukhov</h1> <p class="header-subtitle">UI student</p>';return{c(){t=m("div"),t.innerHTML=s,this.h()},l(n){t=d(n,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),H(t)!=="svelte-gi2003"&&(t.innerHTML=s),this.h()},h(){f(t,"class","header"),f(t,"id","#header")},m(n,e){V(n,t,e)},p:w,i:w,o:w,d(n){n&&_(t)}}}class re extends K{constructor(t){super(),tt(this,t,null,Ce,Y,{})}}const Ae="/Nickolaus-899/FWD/_app/immutable/assets/git.7ae90b30.png",Ie="/Nickolaus-899/FWD/_app/immutable/assets/telegram.82d9bf32.png",xe="/Nickolaus-899/FWD/_app/immutable/assets/email.cb6ded74.svg";function Me(r){let t,s,n,e,a='<div class="footer-name">Nickolai Petukhov</div> <p>IT student, 19 y.o.</p> <div class="hidden">Nickoläus</div>',l,u,c,o="Some links:",h,g,p,b,k,D,R,E,$,N,U,O,v,C,G,I='<a href="https://t.me/Nickolaus_SDR" class="footer-button">Contact me</a> <p>89539994473</p>';return{c(){t=m("div"),s=m("div"),n=m("div"),e=m("div"),e.innerHTML=a,l=x(),u=m("div"),c=m("p"),c.textContent=o,h=x(),g=m("div"),p=m("a"),b=m("img"),D=x(),R=m("a"),E=m("img"),N=x(),U=m("a"),O=m("img"),C=x(),G=m("div"),G.innerHTML=I,this.h()},l(y){t=d(y,"DIV",{class:!0});var z=A(t);s=d(z,"DIV",{class:!0});var L=A(s);n=d(L,"DIV",{class:!0});var Q=A(n);e=d(Q,"DIV",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-ir1c19"&&(e.innerHTML=a),l=M(Q),u=d(Q,"DIV",{class:!0});var T=A(u);c=d(T,"P",{"data-svelte-h":!0}),H(c)!=="svelte-1at3g99"&&(c.textContent=o),h=M(T),g=d(T,"DIV",{class:!0});var P=A(g);p=d(P,"A",{href:!0});var _t=A(p);b=d(_t,"IMG",{src:!0,alt:!0}),_t.forEach(_),D=M(P),R=d(P,"A",{href:!0});var lt=A(R);E=d(lt,"IMG",{src:!0,alt:!0}),lt.forEach(_),N=M(P),U=d(P,"A",{href:!0});var Z=A(U);O=d(Z,"IMG",{src:!0,alt:!0}),Z.forEach(_),P.forEach(_),T.forEach(_),C=M(Q),G=d(Q,"DIV",{class:!0,"data-svelte-h":!0}),H(G)!=="svelte-18ax2nw"&&(G.innerHTML=I),Q.forEach(_),L.forEach(_),z.forEach(_),this.h()},h(){f(e,"class","footer-info footer-col"),F(b.src,k=Ae)||f(b,"src",k),f(b,"alt","git"),f(p,"href","https://github.com/Nickolaus-899/FWD"),F(E.src,$=Ie)||f(E,"src",$),f(E,"alt","telegram"),f(R,"href","https://t.me/Nickolaus_SDR"),F(O.src,v=xe)||f(O,"src",v),f(O,"alt","email"),f(U,"href","mailto:n.petukhov@innopolis.university"),f(g,"class","footer-links-row"),f(u,"class","footer-links footer-col"),f(G,"class","footer-contacts footer-col"),f(n,"class","footer-row"),f(s,"class","container"),f(t,"class","footer")},m(y,z){V(y,t,z),i(t,s),i(s,n),i(n,e),i(n,l),i(n,u),i(u,c),i(u,h),i(u,g),i(g,p),i(p,b),i(g,D),i(g,R),i(R,E),i(g,N),i(g,U),i(U,O),i(n,C),i(n,G)},p:w,i:w,o:w,d(y){y&&_(t)}}}class $e extends K{constructor(t){super(),tt(this,t,null,Me,Y,{})}}const we="/Nickolaus-899/FWD/_app/immutable/assets/enigma.a4908333.jpg",Ee="data:image/png;base64,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",Ge="/Nickolaus-899/FWD/_app/immutable/assets/fpga.188205b6.png",ye="/Nickolaus-899/FWD/_app/immutable/assets/telegram.82d9bf32.png";function De(r){let t,s,n,e="Projects",a,l,u,c,o,h,g,p,b="Model of Enigma Machine",k,D,R="Written in C++",E,$,N,U,O,v,C,G="Mini-Game in console",I,y,z="Written in Python",L,Q,T,P,_t,lt,Z,Ut="FPGA Project (MemGame)",$t,ot,zt="Written in Verilog",wt,ct,J,st,jt,Et,at,Bt="InnoBookingBot",Gt,it,Qt="Written in Java, Flutter, Kotlin";return{c(){t=m("div"),s=m("div"),n=m("h2"),n.textContent=e,a=x(),l=m("div"),u=m("div"),c=m("a"),o=m("img"),g=x(),p=m("h3"),p.textContent=b,k=x(),D=m("p"),D.textContent=R,E=x(),$=m("div"),N=m("a"),U=m("img"),v=x(),C=m("h3"),C.textContent=G,I=x(),y=m("p"),y.textContent=z,L=x(),Q=m("div"),T=m("a"),P=m("img"),lt=x(),Z=m("h3"),Z.textContent=Ut,$t=x(),ot=m("p"),ot.textContent=zt,wt=x(),ct=m("div"),J=m("a"),st=m("img"),Et=x(),at=m("h3"),at.textContent=Bt,Gt=x(),it=m("p"),it.textContent=Qt,this.h()},l(vt){t=d(vt,"DIV",{class:!0,id:!0});var kt=A(t);s=d(kt,"DIV",{class:!0});var bt=A(s);n=d(bt,"H2",{class:!0,"data-svelte-h":!0}),H(n)!=="svelte-uqmnfd"&&(n.textContent=e),a=M(bt),l=d(bt,"DIV",{class:!0});var et=A(l);u=d(et,"DIV",{class:!0});var Tt=A(u);c=d(Tt,"A",{href:!0,class:!0});var ut=A(c);o=d(ut,"IMG",{class:!0,src:!0,alt:!0}),g=M(ut),p=d(ut,"H3",{class:!0,"data-svelte-h":!0}),H(p)!=="svelte-1mcmbma"&&(p.textContent=b),k=M(ut),D=d(ut,"P",{"data-svelte-h":!0}),H(D)!=="svelte-gdyi7n"&&(D.textContent=R),ut.forEach(_),Tt.forEach(_),E=M(et),$=d(et,"DIV",{class:!0});var Ht=A($);N=d(Ht,"A",{href:!0,class:!0});var ft=A(N);U=d(ft,"IMG",{class:!0,src:!0,alt:!0}),v=M(ft),C=d(ft,"H3",{class:!0,"data-svelte-h":!0}),H(C)!=="svelte-98d0js"&&(C.textContent=G),I=M(ft),y=d(ft,"P",{"data-svelte-h":!0}),H(y)!=="svelte-1k5l4hg"&&(y.textContent=z),ft.forEach(_),Ht.forEach(_),L=M(et),Q=d(et,"DIV",{class:!0});var Pt=A(Q);T=d(Pt,"A",{href:!0,class:!0});var mt=A(T);P=d(mt,"IMG",{class:!0,src:!0,alt:!0}),lt=M(mt),Z=d(mt,"H3",{class:!0,"data-svelte-h":!0}),H(Z)!=="svelte-1oxt2u9"&&(Z.textContent=Ut),$t=M(mt),ot=d(mt,"P",{"data-svelte-h":!0}),H(ot)!=="svelte-15604gw"&&(ot.textContent=zt),mt.forEach(_),Pt.forEach(_),wt=M(et),ct=d(et,"DIV",{class:!0});var Vt=A(ct);J=d(Vt,"A",{href:!0,class:!0});var dt=A(J);st=d(dt,"IMG",{class:!0,src:!0,alt:!0}),Et=M(dt),at=d(dt,"H3",{class:!0,"data-svelte-h":!0}),H(at)!=="svelte-xgkbyu"&&(at.textContent=Bt),Gt=M(dt),it=d(dt,"P",{"data-svelte-h":!0}),H(it)!=="svelte-1l70tlv"&&(it.textContent=Qt),dt.forEach(_),Vt.forEach(_),et.forEach(_),bt.forEach(_),kt.forEach(_),this.h()},h(){f(n,"class","portfolio-header"),f(o,"class","card-img"),F(o.src,h=we)||f(o,"src",h),f(o,"alt","Enigma"),f(p,"class","card-title"),f(c,"href",rt+"/"),f(c,"class","card-link"),f(u,"class","card"),f(U,"class","card-img"),F(U.src,O=Ee)||f(U,"src",O),f(U,"alt","Mini-Game"),f(C,"class","card-title"),f(N,"href",rt+"/"),f(N,"class","card-link"),f($,"class","card"),f(P,"class","card-img"),F(P.src,_t=Ge)||f(P,"src",_t),f(P,"alt","FPGA"),f(Z,"class","card-title"),f(T,"href",rt+"/"),f(T,"class","card-link"),f(Q,"class","card"),f(st,"class","card-img"),F(st.src,jt=ye)||f(st,"src",jt),f(st,"alt","Telegram Bot"),f(at,"class","card-title"),f(J,"href",rt+"/"),f(J,"class","card-link"),f(ct,"class","card"),f(l,"class","card-wrapper"),f(s,"class","container"),f(t,"class","portfolio"),f(t,"id","portfolio")},m(vt,kt){V(vt,t,kt),i(t,s),i(s,n),i(s,a),i(s,l),i(l,u),i(u,c),i(c,o),i(c,g),i(c,p),i(c,k),i(c,D),i(l,E),i(l,$),i($,N),i(N,U),i(N,v),i(N,C),i(N,I),i(N,y),i(l,L),i(l,Q),i(Q,T),i(T,P),i(T,lt),i(T,Z),i(T,$t),i(T,ot),i(l,wt),i(l,ct),i(ct,J),i(J,st),i(J,Et),i(J,at),i(J,Gt),i(J,it)},p:w,i:w,o:w,d(vt){vt&&_(t)}}}class Oe extends K{constructor(t){super(),tt(this,t,null,De,Y,{})}}function Ne(r){let t,s,n="Third Assignment",e,a,l,u,c,o,h="Click me!",g,p,b,k,D,R,E,$,N,U,O,v,C,G;return{c(){t=m("div"),s=m("h4"),s.textContent=n,e=x(),a=m("div"),l=m("p"),u=ht(r[0]),c=x(),o=m("button"),o.textContent=h,g=x(),p=m("img"),k=x(),D=m("p"),R=ht(r[3]),E=x(),$=m("p"),N=ht(r[4]),U=x(),O=m("a"),v=ht("Back"),this.h()},l(I){t=d(I,"DIV",{class:!0});var y=A(t);s=d(y,"H4",{class:!0,"data-svelte-h":!0}),H(s)!=="svelte-u397w1"&&(s.textContent=n),e=M(y),a=d(y,"DIV",{class:!0});var z=A(a);l=d(z,"P",{class:!0});var L=A(l);u=gt(L,r[0]),L.forEach(_),c=M(z),o=d(z,"BUTTON",{class:!0,"data-svelte-h":!0}),H(o)!=="svelte-1nb6s91"&&(o.textContent=h),g=M(z),p=d(z,"IMG",{src:!0,alt:!0}),k=M(z),D=d(z,"P",{});var Q=A(D);R=gt(Q,r[3]),Q.forEach(_),E=M(z),$=d(z,"P",{});var T=A($);N=gt(T,r[4]),T.forEach(_),U=M(z),O=d(z,"A",{href:!0,class:!0});var P=A(O);v=gt(P,"Back"),P.forEach(_),z.forEach(_),y.forEach(_),this.h()},h(){f(s,"class","assignment-title"),f(l,"class","id"),f(o,"class","api-button footer-button enigma-button"),F(p.src,b=r[1])||f(p,"src",b),f(p,"alt",r[2]),f(O,"href",rt+"/"),f(O,"class","api-button footer-button"),f(a,"class","aligning-button enigma-link"),f(t,"class","assignment")},m(I,y){V(I,t,y),i(t,s),i(t,e),i(t,a),i(a,l),i(l,u),i(a,c),i(a,o),i(a,g),i(a,p),i(a,k),i(a,D),i(D,R),i(a,E),i(a,$),i($,N),i(a,U),i(a,O),i(O,v),C||(G=me(o,"click",r[7]),C=!0)},p(I,[y]){y&1&&Dt(u,I[0]),y&2&&!F(p.src,b=I[1])&&f(p,"src",b),y&4&&f(p,"alt",I[2]),y&8&&Dt(R,I[3]),y&16&&Dt(N,I[4])},i:w,o:w,d(I){I&&_(t),C=!1,G()}}}function Re(r,t,s){const n="n.petukhov@innopolis.university";let{titleElement:e="Waiting..."}=t,{imgSrc:a=""}=t,{imgAlt:l=""}=t,{dateElement:u=""}=t,{releasedElement:c=""}=t;Wt.extend(de);const o=async()=>{const g=new URLSearchParams;g.append("email",n);const p=await fetch("https://fwd.innopolis.university/api/hw2?"+g.toString()).then(v=>v.json()),b=new URLSearchParams;b.append("id",p);const D=await(await fetch("https://fwd.innopolis.university/api/comic?"+b.toString())).json(),{month:R,year:E,day:$,safe_title:N,img:U,alt:O}=D;s(0,e=N),s(3,u="Date: "+$+":"+R+":"+E),s(4,c="Released: "+Wt(new Date(E,R,$)).fromNow()),s(1,a=U),s(2,l=O)},h=()=>o();return r.$$set=g=>{"titleElement"in g&&s(0,e=g.titleElement),"imgSrc"in g&&s(1,a=g.imgSrc),"imgAlt"in g&&s(2,l=g.imgAlt),"dateElement"in g&&s(3,u=g.dateElement),"releasedElement"in g&&s(4,c=g.releasedElement)},[e,a,l,u,c,o,n,h]}class Ue extends K{constructor(t){super(),tt(this,t,Re,Ne,Y,{myEmail:6,titleElement:0,imgSrc:1,imgAlt:2,dateElement:3,releasedElement:4,jokeHandler:5})}get myEmail(){return this.$$.ctx[6]}get jokeHandler(){return this.$$.ctx[5]}}const Ft={},Rt={},ze={},je=r=>({params:r&4}),Yt=r=>({params:r[2]});function Kt(r){let t,s,n,e;const a=[Qe,Be],l=[];function u(c,o){return c[0]?0:1}return t=u(r),s=l[t]=a[t](r),{c(){s.c(),n=nt()},l(c){s.l(c),n=nt()},m(c,o){l[t].m(c,o),V(c,n,o),e=!0},p(c,o){let h=t;t=u(c),t===h?l[t].p(c,o):(xt(),B(l[h],1,1,()=>{l[h]=null}),Mt(),s=l[t],s?s.p(c,o):(s=l[t]=a[t](c),s.c()),j(s,1),s.m(n.parentNode,n))},i(c){e||(j(s),e=!0)},o(c){B(s),e=!1},d(c){c&&_(n),l[t].d(c)}}}function Be(r){let t;const s=r[8].default,n=ee(s,r,r[7],Yt);return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,a){n&&n.m(e,a),t=!0},p(e,a){n&&n.p&&(!t||a&132)&&ne(n,s,e,e[7],t?ae(s,e[7],a,je):se(e[7]),Yt)},i(e){t||(j(n,e),t=!0)},o(e){B(n,e),t=!1},d(e){n&&n.d(e)}}}function Qe(r){let t,s,n,e={ctx:r,current:null,token:null,hasCatch:!1,pending:Pe,then:He,catch:Te,value:12,blocks:[,,,]};return Jt(s=r[0],e),{c(){t=nt(),e.block.c()},l(a){t=nt(),e.block.l(a)},m(a,l){V(a,t,l),e.block.m(a,e.anchor=l),e.mount=()=>t.parentNode,e.anchor=t,n=!0},p(a,l){r=a,e.ctx=r,l&1&&s!==(s=r[0])&&Jt(s,e)||ve(e,r,l)},i(a){n||(j(e.block),n=!0)},o(a){for(let l=0;l<3;l+=1){const u=e.blocks[l];B(u)}n=!1},d(a){a&&_(t),e.block.d(a),e.token=null,e=null}}}function Te(r){return{c:w,l:w,m:w,p:w,i:w,o:w,d:w}}function He(r){var u;let t,s,n;const e=[r[2],r[3]];var a=((u=r[12])==null?void 0:u.default)||r[12];function l(c){let o={};for(let h=0;h<e.length;h+=1)o=Nt(o,e[h]);return{props:o}}return a&&(t=St(a,l())),{c(){t&&X(t.$$.fragment),s=nt()},l(c){t&&q(t.$$.fragment,c),s=nt()},m(c,o){t&&S(t,c,o),V(c,s,o),n=!0},p(c,o){var g;const h=o&12?pe(e,[o&4&&Zt(c[2]),o&8&&Zt(c[3])]):{};if(o&1&&a!==(a=((g=c[12])==null?void 0:g.default)||c[12])){if(t){xt();const p=t;B(p.$$.fragment,1,0,()=>{W(p,1)}),Mt()}a?(t=St(a,l()),X(t.$$.fragment),j(t.$$.fragment,1),S(t,s.parentNode,s)):t=null}else a&&t.$set(h)},i(c){n||(t&&j(t.$$.fragment,c),n=!0)},o(c){t&&B(t.$$.fragment,c),n=!1},d(c){c&&_(s),t&&W(t,c)}}}function Pe(r){return{c:w,l:w,m:w,p:w,i:w,o:w,d:w}}function Ve(r){let t,s,n=r[1]&&r[1].route===r[5]&&Kt(r);return{c(){n&&n.c(),t=nt()},l(e){n&&n.l(e),t=nt()},m(e,a){n&&n.m(e,a),V(e,t,a),s=!0},p(e,[a]){e[1]&&e[1].route===e[5]?n?(n.p(e,a),a&2&&j(n,1)):(n=Kt(e),n.c(),j(n,1),n.m(t.parentNode,t)):n&&(xt(),B(n,1,1,()=>{n=null}),Mt())},i(e){s||(j(n),s=!0)},o(e){B(n),s=!1},d(e){e&&_(t),n&&n.d(e)}}}function Xe(r,t,s){let n,{$$slots:e={},$$scope:a}=t,{path:l=""}=t,{component:u=null}=t,c={},o={};const{registerRoute:h,unregisterRoute:g,activeRoute:p}=Ot(Rt);pt(r,p,k=>s(1,n=k));const b={path:l,default:l===""};return h(b),ue(()=>{g(b)}),r.$$set=k=>{s(11,t=Nt(Nt({},t),Xt(k))),"path"in k&&s(6,l=k.path),"component"in k&&s(0,u=k.component),"$$scope"in k&&s(7,a=k.$$scope)},r.$$.update=()=>{if(n&&n.route===b){s(2,c=n.params);const{component:k,path:D,...R}=t;s(3,o=R),k&&(k.toString().startsWith("class ")?s(0,u=k):s(0,u=k())),he()&&(window==null||window.scrollTo(0,0))}},t=Xt(t),[u,n,c,o,p,b,l,a,e]}class It extends K{constructor(t){super(),tt(this,t,Xe,Ve,Y,{path:6,component:0})}}const Se=r=>({route:r&2,location:r&1}),te=r=>({route:r[1]&&r[1].uri,location:r[0]});function We(r){let t;const s=r[12].default,n=ee(s,r,r[11],te);return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,a){n&&n.m(e,a),t=!0},p(e,[a]){n&&n.p&&(!t||a&2051)&&ne(n,s,e,e[11],t?ae(s,e[11],a,Se):se(e[11]),te)},i(e){t||(j(n,e),t=!0)},o(e){B(n,e),t=!1},d(e){n&&n.d(e)}}}function qe(r,t,s){let n,e,a,l,{$$slots:u={},$$scope:c}=t,{basepath:o="/"}=t,{url:h=null}=t,{history:g=ge}=t;yt(ze,g);const p=Ot(Ft),b=Ot(Rt),k=At([]);pt(r,k,v=>s(9,e=v));const D=At(null);pt(r,D,v=>s(1,l=v));let R=!1;const E=p||At(h?{pathname:h}:g.location);pt(r,E,v=>s(0,n=v));const $=b?b.routerBase:At({path:o,uri:o});pt(r,$,v=>s(10,a=v));const N=_e([$,D],([v,C])=>{if(!C)return v;const{path:G}=v,{route:I,uri:y}=C;return{path:I.default?G:I.path.replace(/\*.*$/,""),uri:y}}),U=v=>{const{path:C}=a;let{path:G}=v;if(v._path=G,v.path=qt(C,G),typeof window>"u"){if(R)return;const I=Lt([v],n.pathname);I&&(D.set(I),R=!0)}else k.update(I=>[...I,v])},O=v=>{k.update(C=>C.filter(G=>G!==v))};return p||(fe(()=>g.listen(C=>{E.set(C.location)})),yt(Ft,E)),yt(Rt,{activeRoute:D,base:$,routerBase:N,registerRoute:U,unregisterRoute:O}),r.$$set=v=>{"basepath"in v&&s(6,o=v.basepath),"url"in v&&s(7,h=v.url),"history"in v&&s(8,g=v.history),"$$scope"in v&&s(11,c=v.$$scope)},r.$$.update=()=>{if(r.$$.dirty&1024){const{path:v}=a;k.update(C=>C.map(G=>Object.assign(G,{path:qt(v,G._path)})))}if(r.$$.dirty&513){const v=Lt(e,n.pathname);D.set(v)}},[n,l,k,D,E,$,o,h,g,e,a,c,u]}class Le extends K{constructor(t){super(),tt(this,t,qe,We,Y,{basepath:6,url:7,history:8})}}const Je="/Nickolaus-899/FWD/_app/immutable/assets/enigma2.0a782045.jpg";function Ze(r){let t,s="Enigma",n,e,a,l,u="Model of Enigma Machine",c,o,h,g,p,b,k,D="Model of Enigma machine in C++ language. It uses German language for interface.",R,E,$,N="Link to the Project",U,O,v;return{c(){t=m("title"),t.textContent=s,n=x(),e=m("div"),a=m("div"),l=m("h1"),l.textContent=u,c=x(),o=m("div"),h=m("img"),p=x(),b=m("div"),k=m("p"),k.textContent=D,R=x(),E=m("div"),$=m("a"),$.textContent=N,U=x(),O=m("a"),v=ht("Back"),this.h()},l(C){t=d(C,"TITLE",{"data-svelte-h":!0}),H(t)!=="svelte-1t7yvmz"&&(t.textContent=s),n=M(C),e=d(C,"DIV",{class:!0});var G=A(e);a=d(G,"DIV",{class:!0});var I=A(a);l=d(I,"H1",{class:!0,"data-svelte-h":!0}),H(l)!=="svelte-j09z9i"&&(l.textContent=u),c=M(I),o=d(I,"DIV",{class:!0});var y=A(o);h=d(y,"IMG",{src:!0,alt:!0}),y.forEach(_),p=M(I),b=d(I,"DIV",{class:!0});var z=A(b);k=d(z,"P",{"data-svelte-h":!0}),H(k)!=="svelte-1xq6an1"&&(k.textContent=D),R=M(z),E=d(z,"DIV",{class:!0});var L=A(E);$=d(L,"A",{href:!0,class:!0,"data-svelte-h":!0}),H($)!=="svelte-1fka0g6"&&($.textContent=N),U=M(L),O=d(L,"A",{href:!0,class:!0});var Q=A(O);v=gt(Q,"Back"),Q.forEach(_),L.forEach(_),z.forEach(_),I.forEach(_),G.forEach(_),this.h()},h(){f(l,"class","project-header"),F(h.src,g=Je)||f(h,"src",g),f(h,"alt","Enigma Picture"),f(o,"class","project-img"),f($,"href","https://github.com/Nickolaus-899/Enigma"),f($,"class","footer-button enigma-button"),f(O,"href",rt+"/"),f(O,"class","footer-button enigma-button"),f(E,"class","enigma-link"),f(b,"class","project-description"),f(a,"class","container"),f(e,"class","project")},m(C,G){V(C,t,G),V(C,n,G),V(C,e,G),i(e,a),i(a,l),i(a,c),i(a,o),i(o,h),i(a,p),i(a,b),i(b,k),i(b,R),i(b,E),i(E,$),i(E,U),i(E,O),i(O,v)},p:w,i:w,o:w,d(C){C&&(_(t),_(n),_(e))}}}class Fe extends K{constructor(t){super(),tt(this,t,null,Ze,Y,{})}}function Ye(r){let t,s,n;return{c(){t=m("div"),s=m("a"),n=ht("See Joke"),this.h()},l(e){t=d(e,"DIV",{class:!0});var a=A(t);s=d(a,"A",{href:!0,class:!0});var l=A(s);n=gt(l,"See Joke"),l.forEach(_),a.forEach(_),this.h()},h(){f(s,"href",rt+"/"),f(s,"class","footer-button api-button"),f(t,"class","enigma-link")},m(e,a){V(e,t,a),i(t,s),i(s,n)},p:w,i:w,o:w,d(e){e&&_(t)}}}class Ke extends K{constructor(t){super(),tt(this,t,null,Ye,Y,{})}}function tn(r){let t,s,n,e,a;return s=new Oe({}),e=new Ke({}),{c(){t=m("div"),X(s.$$.fragment),n=x(),X(e.$$.fragment)},l(l){t=d(l,"DIV",{});var u=A(t);q(s.$$.fragment,u),n=M(u),q(e.$$.fragment,u),u.forEach(_)},m(l,u){V(l,t,u),S(s,t,null),i(t,n),S(e,t,null),a=!0},p:w,i(l){a||(j(s.$$.fragment,l),j(e.$$.fragment,l),a=!0)},o(l){B(s.$$.fragment,l),B(e.$$.fragment,l),a=!1},d(l){l&&_(t),W(s),W(e)}}}class le extends K{constructor(t){super(),tt(this,t,null,tn,Y,{})}}function en(r){let t,s,n;return t=new re({}),s=new le({}),{c(){X(t.$$.fragment),X(s.$$.fragment)},l(e){q(t.$$.fragment,e),q(s.$$.fragment,e)},m(e,a){S(t,e,a),S(s,e,a),n=!0},i(e){n||(j(t.$$.fragment,e),j(s.$$.fragment,e),n=!0)},o(e){B(t.$$.fragment,e),B(s.$$.fragment,e),n=!1},d(e){W(t,e),W(s,e)}}}function nn(r){let t,s,n;return t=new re({}),s=new le({}),{c(){X(t.$$.fragment),X(s.$$.fragment)},l(e){q(t.$$.fragment,e),q(s.$$.fragment,e)},m(e,a){S(t,e,a),S(s,e,a),n=!0},i(e){n||(j(t.$$.fragment,e),j(s.$$.fragment,e),n=!0)},o(e){B(t.$$.fragment,e),B(s.$$.fragment,e),n=!1},d(e){W(t,e),W(s,e)}}}function sn(r){let t,s;return t=new Fe({}),{c(){X(t.$$.fragment)},l(n){q(t.$$.fragment,n)},m(n,e){S(t,n,e),s=!0},i(n){s||(j(t.$$.fragment,n),s=!0)},o(n){B(t.$$.fragment,n),s=!1},d(n){W(t,n)}}}function an(r){let t,s;return t=new Ue({}),{c(){X(t.$$.fragment)},l(n){q(t.$$.fragment,n)},m(n,e){S(t,n,e),s=!0},i(n){s||(j(t.$$.fragment,n),s=!0)},o(n){B(t.$$.fragment,n),s=!1},d(n){W(t,n)}}}function rn(r){let t,s,n,e,a,l,u,c;return t=new It({props:{path:"/",$$slots:{default:[en]},$$scope:{ctx:r}}}),n=new It({props:{path:"/main",$$slots:{default:[nn]},$$scope:{ctx:r}}}),a=new It({props:{path:"/enigma",$$slots:{default:[sn]},$$scope:{ctx:r}}}),u=new It({props:{path:"/comic",$$slots:{default:[an]},$$scope:{ctx:r}}}),{c(){X(t.$$.fragment),s=x(),X(n.$$.fragment),e=x(),X(a.$$.fragment),l=x(),X(u.$$.fragment)},l(o){q(t.$$.fragment,o),s=M(o),q(n.$$.fragment,o),e=M(o),q(a.$$.fragment,o),l=M(o),q(u.$$.fragment,o)},m(o,h){S(t,o,h),V(o,s,h),S(n,o,h),V(o,e,h),S(a,o,h),V(o,l,h),S(u,o,h),c=!0},p(o,h){const g={};h&1&&(g.$$scope={dirty:h,ctx:o}),t.$set(g);const p={};h&1&&(p.$$scope={dirty:h,ctx:o}),n.$set(p);const b={};h&1&&(b.$$scope={dirty:h,ctx:o}),a.$set(b);const k={};h&1&&(k.$$scope={dirty:h,ctx:o}),u.$set(k)},i(o){c||(j(t.$$.fragment,o),j(n.$$.fragment,o),j(a.$$.fragment,o),j(u.$$.fragment,o),c=!0)},o(o){B(t.$$.fragment,o),B(n.$$.fragment,o),B(a.$$.fragment,o),B(u.$$.fragment,o),c=!1},d(o){o&&(_(s),_(e),_(l)),W(t,o),W(n,o),W(a,o),W(u,o)}}}function ln(r){let t,s,n,e,a;return s=new Le({props:{$$slots:{default:[rn]},$$scope:{ctx:r}}}),e=new $e({}),{c(){t=m("div"),X(s.$$.fragment),n=x(),X(e.$$.fragment)},l(l){t=d(l,"DIV",{});var u=A(t);q(s.$$.fragment,u),n=M(u),q(e.$$.fragment,u),u.forEach(_)},m(l,u){V(l,t,u),S(s,t,null),i(t,n),S(e,t,null),a=!0},p(l,[u]){const c={};u&1&&(c.$$scope={dirty:u,ctx:l}),s.$set(c)},i(l){a||(j(s.$$.fragment,l),j(e.$$.fragment,l),a=!0)},o(l){B(s.$$.fragment,l),B(e.$$.fragment,l),a=!1},d(l){l&&_(t),W(s),W(e)}}}class hn extends K{constructor(t){super(),tt(this,t,null,ln,Y,{})}}export{hn as component,dn as universal};