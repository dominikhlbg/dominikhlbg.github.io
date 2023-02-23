const ASSETS = [
  "c/logo-99b7d28c.svg",
  "c/github-logo-eaea4a88.svg",
  "c/icon-demo-artwork-9eba1655.jpg",
  "c/icon-demo-large-photo-18da387a.jpg",
  "c/small-db1eae6f.svg",
  "c/icon-demo-logo-326ed9b6.png",
  "c/icon-demo-device-screen-5d52d8b9.jpg",
  "c/simple-258b6ed5.svg",
  "c/secure-a66bbdfe.svg",
  "c/demo-device-screen-b9d088e8.png",
  "c/demo-large-photo-a6b23f7b.jpg",
  "c/demo-artwork-c444f915.jpg",
  "c/rotate-e8fb6784.wasm",
  "c/squoosh_oxipng_bg-bb6b7672.wasm",
  "c/squoosh_oxipng_bg-89ef9006.wasm",
  "c/webp_dec-12bed04a.wasm",
  "c/webp_enc_simd-75acd924.wasm",
  "c/imagequant-a10bbe1a.wasm",
  "c/wp2_enc-89317929.wasm",
  "c/wp2_enc_mt-1feb6658.wasm",
  "c/webp_enc-a8223a7d.wasm",
  "c/wp2_enc_mt_simd-0b0595e9.wasm",
  "c/avif_dec-f270c17d.wasm",
  "c/jxl_enc-2bc18bbe.wasm",
  "c/jxl_enc_mt_simd-a84ecced.wasm",
  "c/wp2_dec-9a40adf1.wasm",
  "c/avif_enc_mt-14c3b533.wasm",
  "c/avif_enc-258cc395.wasm",
  "c/jxl_dec-13364605.wasm",
  "c/mozjpeg_enc-f6bf569c.wasm",
  "c/squooshhqx_bg-6e04a330.wasm",
  "c/squoosh_resize_bg-3d426466.wasm",
  "c/initial-app-3f9c6848.js",
  "c/idb-keyval-90688138.js",
  "c/supports-wasm-threads-9275c454.js",
  "c/features-worker-4c92f0cd.js",
  "c/util-af7b556b.js",
  "c/jxl_dec-2baacdd7.js",
  "c/avif_dec.worker-b2a78198.js",
  "c/avif_enc_mt.worker-67a613a5.js",
  "c/jxl_enc_mt_simd.worker-53002439.js",
  "c/avif_enc.worker-ca918599.js",
  "c/jxl_enc.worker-cf40d270.js",
  "c/wp2_enc_mt.worker-f8d52e55.js",
  "c/jxl_enc_mt.worker-5a17b880.js",
  "c/wp2_enc_mt_simd.worker-d9c5364f.js",
  "c/workerHelpers-2f490ffd.js",
  "c/jxl_dec.worker-c630e394.js",
  "c/Compress-ba65ff58.js",
  "c/sw-bridge-ffc4acf3.js",
  "c/blob-anim-1cc3e7b9.js",
  "c/avif_dec-2cdf1f06.js",
  "c/webp_dec-36c82cbe.js",
  "c/avif_enc_mt-31af3027.js",
  "c/avif_enc-0d291ca2.js",
  "c/jxl_enc_mt_simd-c729811b.js",
  "c/jxl_enc_mt-39fe84b1.js",
  "c/jxl_enc-b6848af2.js",
  "c/squoosh_oxipng-a7fc7ce7.js",
  "c/squoosh_oxipng-3f0e8351.js",
  "c/webp_enc_simd-2d7d2456.js",
  "c/webp_enc-75623855.js",
  "c/wp2_enc_mt_simd-50bc3c08.js",
  "c/wp2_enc_mt-68771bf4.js",
  "c/wp2_enc-9f185f33.js"
];
const VERSION = "fdc97af691260ddfa5913515b87d227dd9a95074";
if(!self.define){let e={};const A=(A,t)=>(A=A.startsWith(location.origin)?A:new URL(A+".js",t).href,e[A]||new Promise((e=>{if("document"in self){const t=document.createElement("link");t.rel="preload",t.as="script",t.href=A,t.onload=()=>{const t=document.createElement("script");t.src=A,t.onload=e,document.head.appendChild(t)},document.head.appendChild(t)}else self.nextDefineUri=A,importScripts(A),e()})).then((()=>{let t=e[A];if(!t)throw new Error(`Module ${A} didn’t register its module`);return t})));self.define=(t,n)=>{const a=self.nextDefineUri||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let _={};const s=e=>A(e,a),i={module:{uri:a},exports:_,require:s};e[a]=Promise.resolve().then((()=>Promise.all(t.map((e=>i[e]||s(e)))))).then((e=>(n(...e),_)))}}define(["./c/supports-wasm-threads-9275c454","./c/idb-keyval-90688138"],(function(e,A){var t="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",n="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABUAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgS0AAAAAABNjb2xybmNseAACAAIAAoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB1tZGF0EgAKBDgADskyCx/wAABYAAAAAK+w";const a="/c/initial-app-3f9c6848.js",_=["/c/logo-99b7d28c.svg","/c/github-logo-eaea4a88.svg","/c/demo-large-photo-a6b23f7b.jpg","/c/demo-artwork-c444f915.jpg","/c/demo-device-screen-b9d088e8.png","/c/icon-demo-large-photo-18da387a.jpg","/c/icon-demo-artwork-9eba1655.jpg","/c/icon-demo-device-screen-5d52d8b9.jpg","/c/small-db1eae6f.svg","/c/simple-258b6ed5.svg","/c/secure-a66bbdfe.svg","/c/icon-demo-logo-326ed9b6.png"],s="/c/Compress-ba65ff58.js",i=["/c/initial-app-3f9c6848.js","/c/util-af7b556b.js","/c/features-worker-4c92f0cd.js","/c/logo-99b7d28c.svg","/c/github-logo-eaea4a88.svg","/c/demo-large-photo-a6b23f7b.jpg","/c/demo-artwork-c444f915.jpg","/c/demo-device-screen-b9d088e8.png","/c/icon-demo-large-photo-18da387a.jpg","/c/icon-demo-artwork-9eba1655.jpg","/c/icon-demo-device-screen-5d52d8b9.jpg","/c/small-db1eae6f.svg","/c/simple-258b6ed5.svg","/c/secure-a66bbdfe.svg","/c/icon-demo-logo-326ed9b6.png"],r="/c/sw-bridge-ffc4acf3.js",c=["/c/idb-keyval-90688138.js","/serviceworker.js"],o="/c/blob-anim-1cc3e7b9.js",l=["/c/initial-app-3f9c6848.js","/c/logo-99b7d28c.svg","/c/github-logo-eaea4a88.svg","/c/demo-large-photo-a6b23f7b.jpg","/c/demo-artwork-c444f915.jpg","/c/demo-device-screen-b9d088e8.png","/c/icon-demo-large-photo-18da387a.jpg","/c/icon-demo-artwork-9eba1655.jpg","/c/icon-demo-device-screen-5d52d8b9.jpg","/c/small-db1eae6f.svg","/c/simple-258b6ed5.svg","/c/secure-a66bbdfe.svg","/c/icon-demo-logo-326ed9b6.png"],N="/c/features-worker-4c92f0cd.js",E=["/c/util-af7b556b.js","/c/jxl_dec-2baacdd7.js","/c/supports-wasm-threads-9275c454.js","/c/wp2_dec-9a40adf1.wasm","/c/mozjpeg_enc-f6bf569c.wasm","/c/rotate-e8fb6784.wasm","/c/imagequant-a10bbe1a.wasm","/c/squoosh_resize_bg-3d426466.wasm","/c/squooshhqx_bg-6e04a330.wasm","/c/jxl_dec-13364605.wasm","/c/jxl_dec.worker-c630e394.js"];var d=Object.freeze({__proto__:null,main:N,deps:E});const u="/c/avif_dec-2cdf1f06.js",f=["/c/avif_dec-f270c17d.wasm","/c/avif_dec.worker-b2a78198.js"];var p=Object.freeze({__proto__:null,main:u,deps:f});const T="/c/webp_dec-36c82cbe.js",m=["/c/webp_dec-12bed04a.wasm"];var P=Object.freeze({__proto__:null,main:T,deps:m});const D="/c/avif_enc_mt-31af3027.js",I=["/c/avif_enc_mt-14c3b533.wasm","/c/avif_enc_mt.worker-67a613a5.js"];var h=Object.freeze({__proto__:null,main:D,deps:I});const U="/c/avif_enc-0d291ca2.js",w=["/c/avif_enc-258cc395.wasm","/c/avif_enc.worker-ca918599.js"];var G=Object.freeze({__proto__:null,main:U,deps:w});const R="/c/jxl_enc_mt_simd-c729811b.js",L=["/c/jxl_enc_mt_simd-a84ecced.wasm","/c/jxl_enc_mt_simd.worker-53002439.js"];var Y=Object.freeze({__proto__:null,main:R,deps:L});const M="/c/jxl_enc_mt-39fe84b1.js",S=["/c/jxl_enc-2bc18bbe.wasm","/c/jxl_enc_mt.worker-5a17b880.js"];var g=Object.freeze({__proto__:null,main:M,deps:S});const v="/c/jxl_enc-b6848af2.js",b=["/c/jxl_enc-2bc18bbe.wasm","/c/jxl_enc.worker-cf40d270.js"];var B=Object.freeze({__proto__:null,main:v,deps:b});const j="/c/squoosh_oxipng-a7fc7ce7.js",y=["/c/workerHelpers-2f490ffd.js","/c/squoosh_oxipng_bg-89ef9006.wasm"];var O=Object.freeze({__proto__:null,main:j,deps:y});const z="/c/squoosh_oxipng-3f0e8351.js",W=["/c/squoosh_oxipng_bg-bb6b7672.wasm"];var k=Object.freeze({__proto__:null,main:z,deps:W});const x="/c/webp_enc_simd-2d7d2456.js",q=["/c/webp_enc_simd-75acd924.wasm"];var Q=Object.freeze({__proto__:null,main:x,deps:q});const C="/c/webp_enc-75623855.js",Z=["/c/webp_enc-a8223a7d.wasm"];var X=Object.freeze({__proto__:null,main:C,deps:Z});const F="/c/wp2_enc_mt_simd-50bc3c08.js",K=["/c/wp2_enc_mt_simd-0b0595e9.wasm","/c/wp2_enc_mt_simd.worker-d9c5364f.js"];var V=Object.freeze({__proto__:null,main:F,deps:K});const H="/c/wp2_enc_mt-68771bf4.js",J=["/c/wp2_enc_mt-1feb6658.wasm","/c/wp2_enc_mt.worker-f8d52e55.js"];var $=Object.freeze({__proto__:null,main:H,deps:J});const ee="/c/wp2_enc-9f185f33.js",Ae=["/c/wp2_enc-89317929.wasm"];var te=Object.freeze({__proto__:null,main:ee,deps:Ae});function ne(e){return e.startsWith("/c/demo-")}let ae=new Set([s,...i,r,...c,o,...l]);ae=function(e,A){const t=new Set(e);for(const e of A)t.delete(e);return t}(ae,new Set([a,..._.filter((e=>e.endsWith(".js")||ne(e))),N,A.swUrl]));const _e=["/",...ae],se=(async()=>{const[A,a,_,s]=await Promise.all([e.checkThreadsSupport(),e.simd(),...[t,n].map((async e=>{if(!self.createImageBitmap)return!1;const A=await fetch(e),t=await A.blob();return createImageBitmap(t).then((()=>!0),(()=>!1))}))]),i=[];function r(e){i.push(e.main,...e.deps)}return r(d),s||r(p),_||r(P),r(A?h:G),r(A&&a?Y:A?g:B),r(A?O:k),r(a?Q:X),r(A&&a?V:A?$:te),[...new Set(i)]})();function ie(e){const A=e.request.formData();e.respondWith(Response.redirect("/?share-target")),e.waitUntil(async function(){var t;await(t="share-ready",new Promise((e=>{oe.has(t)||oe.set(t,[]),oe.get(t).push(e)})));const n=await self.clients.get(e.resultingClientId),a=(await A).get("file");n.postMessage({file:a,action:"load-image"})}())}function re(e){return e.map((e=>new Request(e,{cache:"no-cache"})))}async function ce(e){return(await caches.open(e)).addAll(re(await se))}const oe=new Map;self.addEventListener("message",(e=>{const A=oe.get(e.data);if(A){oe.delete(e.data);for(const e of A)e()}}));const le="static-"+VERSION,Ne="dynamic",Ee=[le,Ne];self.addEventListener("install",(e=>{e.waitUntil(async function(){const e=[];e.push(async function(e){return(await caches.open(e)).addAll(re(_e))}(le)),await A.get("user-interacted")&&e.push(ce(le)),await Promise.all(e)}())})),self.addEventListener("activate",(e=>{self.clients.claim(),e.waitUntil(async function(){const e=(await caches.keys()).map((e=>{if(!Ee.includes(e))return caches.delete(e)}));await Promise.all(e)}())})),self.addEventListener("fetch",(e=>{const A=new URL(e.request.url);if(A.origin===location.origin)if("/editor"!==A.pathname){if("/"===A.pathname&&A.searchParams.has("share-target")&&"POST"===e.request.method)ie(e);else if("GET"===e.request.method)return ne(A.pathname)?(function(e,A){e.respondWith(async function(){const{request:t}=e,n=await caches.match(t);if(n)return n;const a=await fetch(t),_=a.clone();return e.waitUntil(async function(){const e=await caches.open(A);await e.put(t,_)}()),a}())}(e,Ne),void function(e,A,t){e.waitUntil(async function(){const e=await caches.open(A),n=(await e.keys()).map((A=>{const n=new URL(A.url).pathname.slice(1);if(!t.includes(n))return e.delete(A)}));await Promise.all(n)}())}(e,Ne,ASSETS)):void function(e){e.respondWith(async function(){return await caches.match(e.request,{ignoreSearch:!0})||fetch(e.request)}())}(e)}else e.respondWith(Response.redirect("/"))})),self.addEventListener("message",(e=>{switch(e.data){case"cache-all":e.waitUntil(ce(le));break;case"skip-waiting":self.skipWaiting()}}))}));
