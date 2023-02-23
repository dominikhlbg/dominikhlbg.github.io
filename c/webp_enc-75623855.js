define(["module","require","exports"],(function(n,r,e){var t,o=(t=n.uri,function(r){var e,o;(r=void 0!==(r=r||{})?r:{}).ready=new Promise((function(n,r){e=n,o=r}));var a,i={};for(a in r)r.hasOwnProperty(a)&&(i[a]=r[a]);var u,c=!0,f="";f=self.location.href,t&&(f=t),f=0!==f.indexOf("blob:")?f.substr(0,f.lastIndexOf("/")+1):"",u=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)},r.print||console.log.bind(console);var s,l,p=r.printErr||console.warn.bind(console);for(a in i)i.hasOwnProperty(a)&&(r[a]=i[a]);i=null,r.arguments&&r.arguments,r.thisProgram&&r.thisProgram,r.quit&&r.quit,r.wasmBinary&&(s=r.wasmBinary),r.noExitRuntime,"object"!=typeof WebAssembly&&B("no native wasm support detected");var v=!1,d=new TextDecoder("utf8");function h(n,r){if(!n)return"";for(var e=n+r,t=n;!(t>=e)&&m[t];)++t;return d.decode(m.subarray(n,t))}var y,g,m,w,T,b,A,_,P,W,C=new TextDecoder("utf-16le");function E(n,r){for(var e=n,t=e>>1,o=t+r/2;!(t>=o)&&T[t];)++t;return e=t<<1,C.decode(m.subarray(n,e))}function F(n,r,e){if(void 0===e&&(e=2147483647),e<2)return 0;for(var t=r,o=(e-=2)<2*n.length?e/2:n.length,a=0;a<o;++a){var i=n.charCodeAt(a);w[r>>1]=i,r+=2}return w[r>>1]=0,r-t}function k(n){return 2*n.length}function R(n,r){for(var e=0,t="";!(e>=r/4);){var o=b[n+4*e>>2];if(0==o)break;if(++e,o>=65536){var a=o-65536;t+=String.fromCharCode(55296|a>>10,56320|1023&a)}else t+=String.fromCharCode(o)}return t}function I(n,r,e){if(void 0===e&&(e=2147483647),e<4)return 0;for(var t=r,o=t+e-4,a=0;a<n.length;++a){var i=n.charCodeAt(a);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),b[r>>2]=i,(r+=4)+4>o)break}return b[r>>2]=0,r-t}function U(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);t>=55296&&t<=57343&&++e,r+=4}return r}function S(n){y=n,r.HEAP8=g=new Int8Array(n),r.HEAP16=w=new Int16Array(n),r.HEAP32=b=new Int32Array(n),r.HEAPU8=m=new Uint8Array(n),r.HEAPU16=T=new Uint16Array(n),r.HEAPU32=A=new Uint32Array(n),r.HEAPF32=_=new Float32Array(n),r.HEAPF64=P=new Float64Array(n)}r.INITIAL_MEMORY;var O=[],x=[],j=[],D=0,M=null;function B(n){r.onAbort&&r.onAbort(n),p(n+=""),v=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(n);throw o(e),e}r.preloadedImages={},r.preloadedAudios={};var V,H="data:application/octet-stream;base64,";function q(n){return n.startsWith(H)}if(r.locateFile)q(z="webp_enc.wasm")||(V=z,z=r.locateFile?r.locateFile(V,f):f+V);else var z=new URL("/c/webp_enc-a8223a7d.wasm",n.uri).toString();function N(n){try{if(n==z&&s)return new Uint8Array(s);if(u)return u(n);throw"both async and sync fetching of the wasm failed"}catch(n){B(n)}}function L(n){for(;n.length>0;){var e=n.shift();if("function"!=typeof e){var t=e.func;"number"==typeof t?void 0===e.arg?W.get(t)():W.get(t)(e.arg):t(void 0===e.arg?null:e.arg)}else e(r)}}var G={};function J(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function X(n){return this.fromWireType(A[n>>2])}var Y={},Z={},$={},K=48,Q=57;function nn(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=K&&r<=Q?"_"+n:n}function rn(n,r){return n=nn(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function en(n,r){var e=rn(r,(function(n){this.name=r,this.message=n;var e=new Error(n).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))}));return e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var tn=void 0;function on(n){throw new tn(n)}function an(n,r,e){function t(r){var t=e(r);t.length!==n.length&&on("Mismatched type converter count");for(var o=0;o<n.length;++o)pn(n[o],t[o])}n.forEach((function(n){$[n]=r}));var o=new Array(r.length),a=[],i=0;r.forEach((function(n,r){Z.hasOwnProperty(n)?o[r]=Z[n]:(a.push(n),Y.hasOwnProperty(n)||(Y[n]=[]),Y[n].push((function(){o[r]=Z[n],++i===a.length&&t(o)})))})),0===a.length&&t(o)}function un(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var cn=void 0;function fn(n){for(var r="",e=n;m[e];)r+=cn[m[e++]];return r}var sn=void 0;function ln(n){throw new sn(n)}function pn(n,r,e){if(e=e||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=r.name;if(n||ln('type "'+t+'" must have a positive integer typeid pointer'),Z.hasOwnProperty(n)){if(e.ignoreDuplicateRegistrations)return;ln("Cannot register type '"+t+"' twice")}if(Z[n]=r,delete $[n],Y.hasOwnProperty(n)){var o=Y[n];delete Y[n],o.forEach((function(n){n()}))}}var vn=[],dn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function hn(n){n>4&&0==--dn[n].refcount&&(dn[n]=void 0,vn.push(n))}function yn(){for(var n=0,r=5;r<dn.length;++r)void 0!==dn[r]&&++n;return n}function gn(){for(var n=5;n<dn.length;++n)if(void 0!==dn[n])return dn[n];return null}function mn(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=vn.length?vn.pop():dn.length;return dn[r]={refcount:1,value:n},r}}function wn(n,e,t){r.hasOwnProperty(n)?((void 0===t||void 0!==r[n].overloadTable&&void 0!==r[n].overloadTable[t])&&ln("Cannot register public name '"+n+"' twice"),function(n,r,e){if(void 0===n[r].overloadTable){var t=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||ln("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[t.argCount]=t}}(r,n,n),r.hasOwnProperty(t)&&ln("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),r[n].overloadTable[t]=e):(r[n]=e,void 0!==t&&(r[n].numArguments=t))}function Tn(n,r,e){switch(r){case 0:return function(n){var r=e?g:m;return this.fromWireType(r[n])};case 1:return function(n){var r=e?w:T;return this.fromWireType(r[n>>1])};case 2:return function(n){var r=e?b:A;return this.fromWireType(r[n>>2])};default:throw new TypeError("Unknown integer type: "+n)}}function bn(n){var r=Mn(n),e=fn(r);return Dn(r),e}function An(n,r){var e=Z[n];return void 0===e&&ln(r+" has unknown type "+bn(n)),e}function _n(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function Pn(n,r){switch(r){case 2:return function(n){return this.fromWireType(_[n>>2])};case 3:return function(n){return this.fromWireType(P[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function Wn(n,r,e,t,o){var a=r.length;a<2&&ln("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var i=null!==r[1]&&null!==e,u=!1,c=1;c<r.length;++c)if(null!==r[c]&&void 0===r[c].destructorFunction){u=!0;break}var f="void"!==r[0].name,s="",l="";for(c=0;c<a-2;++c)s+=(0!==c?", ":"")+"arg"+c,l+=(0!==c?", ":"")+"arg"+c+"Wired";var p="return function "+nn(n)+"("+s+") {\nif (arguments.length !== "+(a-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+(a-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var v=u?"destructors":"null",d=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],h=[ln,t,o,J,r[0],r[1]];for(i&&(p+="var thisWired = classParam.toWireType("+v+", this);\n"),c=0;c<a-2;++c)p+="var arg"+c+"Wired = argType"+c+".toWireType("+v+", arg"+c+"); // "+r[c+2].name+"\n",d.push("argType"+c),h.push(r[c+2]);if(i&&(l="thisWired"+(l.length>0?", ":"")+l),p+=(f?"var rv = ":"")+"invoker(fn"+(l.length>0?", ":"")+l+");\n",u)p+="runDestructors(destructors);\n";else for(c=i?1:2;c<r.length;++c){var y=1===c?"thisWired":"arg"+(c-2)+"Wired";null!==r[c].destructorFunction&&(p+=y+"_dtor("+y+"); // "+r[c].name+"\n",d.push(y+"_dtor"),h.push(r[c].destructorFunction))}return f&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",d.push(p),function(n,r){if(!(n instanceof Function))throw new TypeError("new_ called with constructor type "+typeof n+" which is not a function");var e=rn(n.name||"unknownFunctionName",(function(){}));e.prototype=n.prototype;var t=new e,o=n.apply(t,r);return o instanceof Object?o:t}(Function,d).apply(null,h)}function Cn(n,e,t){return n.includes("j")?function(n,e,t){var o=r["dynCall_"+n];return t&&t.length?o.apply(null,[e].concat(t)):o.call(null,e)}(n,e,t):W.get(e).apply(null,t)}function En(n,r){var e,t,o,a=(n=fn(n)).includes("j")?(e=n,t=r,o=[],function(){o.length=arguments.length;for(var n=0;n<arguments.length;n++)o[n]=arguments[n];return Cn(e,t,o)}):W.get(r);return"function"!=typeof a&&ln("unknown function pointer with signature "+n+": "+r),a}var Fn=void 0;function kn(n,r,e){switch(r){case 0:return e?function(n){return g[n]}:function(n){return m[n]};case 1:return e?function(n){return w[n>>1]}:function(n){return T[n>>1]};case 2:return e?function(n){return b[n>>2]}:function(n){return A[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}var Rn={};function In(){return"object"==typeof globalThis?globalThis:Function("return this")()}var Un={};function Sn(n){try{return l.grow(n-y.byteLength+65535>>>16),S(l.buffer),1}catch(n){}}tn=r.InternalError=en(Error,"InternalError"),function(){for(var n=new Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);cn=n}(),sn=r.BindingError=en(Error,"BindingError"),r.count_emval_handles=yn,r.get_first_emval=gn,Fn=r.UnboundTypeError=en(Error,"UnboundTypeError");var On={w:function(n,r){},l:function(n){var r=G[n];delete G[n];var e=r.rawConstructor,t=r.rawDestructor,o=r.fields;an([n],o.map((function(n){return n.getterReturnType})).concat(o.map((function(n){return n.setterArgumentType}))),(function(n){var a={};return o.forEach((function(r,e){var t=r.fieldName,i=n[e],u=r.getter,c=r.getterContext,f=n[e+o.length],s=r.setter,l=r.setterContext;a[t]={read:function(n){return i.fromWireType(u(c,n))},write:function(n,r){var e=[];s(l,n,f.toWireType(e,r)),J(e)}}})),[{name:r.name,fromWireType:function(n){var r={};for(var e in a)r[e]=a[e].read(n);return t(n),r},toWireType:function(n,r){for(var o in a)if(!(o in r))throw new TypeError('Missing field:  "'+o+'"');var i=e();for(o in a)a[o].write(i,r[o]);return null!==n&&n.push(t,i),i},argPackAdvance:8,readValueFromPointer:X,destructorFunction:t}]}))},p:function(n,r,e,t,o){},s:function(n,r,e,t,o){var a=un(e);pn(n,{name:r=fn(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?t:o},argPackAdvance:8,readValueFromPointer:function(n){var t;if(1===e)t=g;else if(2===e)t=w;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+r);t=b}return this.fromWireType(t[n>>a])},destructorFunction:null})},r:function(n,r){pn(n,{name:r=fn(r),fromWireType:function(n){var r=dn[n].value;return hn(n),r},toWireType:function(n,r){return mn(r)},argPackAdvance:8,readValueFromPointer:X,destructorFunction:null})},n:function(n,r,e,t){var o=un(e);function a(){}r=fn(r),a.values={},pn(n,{name:r,constructor:a,fromWireType:function(n){return this.constructor.values[n]},toWireType:function(n,r){return r.value},argPackAdvance:8,readValueFromPointer:Tn(r,o,t),destructorFunction:null}),wn(r,a)},d:function(n,r,e){var t=An(n,"enum");r=fn(r);var o=t.constructor,a=Object.create(t.constructor.prototype,{value:{value:e},constructor:{value:rn(t.name+"_"+r,(function(){}))}});o.values[e]=a,o[r]=a},j:function(n,r,e){var t=un(e);pn(n,{name:r=fn(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+_n(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:Pn(r,t),destructorFunction:null})},h:function(n,e,t,o,a,i){var u=function(n,r){for(var e=[],t=0;t<n;t++)e.push(b[(r>>2)+t]);return e}(e,t);n=fn(n),a=En(o,a),wn(n,(function(){!function(n,r){var e=[],t={};throw r.forEach((function n(r){t[r]||Z[r]||($[r]?$[r].forEach(n):(e.push(r),t[r]=!0))})),new Fn(n+": "+e.map(bn).join([", "]))}("Cannot call "+n+" due to unbound types",u)}),e-1),an([],u,(function(t){var o=[t[0],null].concat(t.slice(1));return function(n,e,t){r.hasOwnProperty(n)||on("Replacing nonexistant public symbol"),void 0!==r[n].overloadTable&&void 0!==t?r[n].overloadTable[t]=e:(r[n]=e,r[n].argCount=t)}(n,Wn(n,o,null,a,i),e-1),[]}))},c:function(n,r,e,t,o){r=fn(r),-1===o&&(o=4294967295);var a=un(e),i=function(n){return n};if(0===t){var u=32-8*e;i=function(n){return n<<u>>>u}}var c=r.includes("unsigned");pn(n,{name:r,fromWireType:i,toWireType:function(n,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+_n(e)+'" to '+this.name);if(e<t||e>o)throw new TypeError('Passing a number "'+_n(e)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+t+", "+o+"]!");return c?e>>>0:0|e},argPackAdvance:8,readValueFromPointer:kn(r,a,0!==t),destructorFunction:null})},b:function(n,r,e){var t=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function o(n){var r=A,e=r[n>>=2],o=r[n+1];return new t(y,o,e)}pn(n,{name:e=fn(e),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},k:function(n,r){var e="std::string"===(r=fn(r));pn(n,{name:r,fromWireType:function(n){var r,t=A[n>>2];if(e)for(var o=n+4,a=0;a<=t;++a){var i=n+4+a;if(a==t||0==m[i]){var u=h(o,i-o);void 0===r?r=u:(r+=String.fromCharCode(0),r+=u),o=i+1}}else{var c=new Array(t);for(a=0;a<t;++a)c[a]=String.fromCharCode(m[n+4+a]);r=c.join("")}return Dn(n),r},toWireType:function(n,r){var t;r instanceof ArrayBuffer&&(r=new Uint8Array(r));var o="string"==typeof r;o||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||ln("Cannot pass non-string to std::string"),t=e&&o?function(){return function(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);t>=55296&&t<=57343&&(t=65536+((1023&t)<<10)|1023&n.charCodeAt(++e)),t<=127?++r:r+=t<=2047?2:t<=65535?3:4}return r}(r)}:function(){return r.length};var a=t(),i=jn(4+a+1);if(A[i>>2]=a,e&&o)!function(n,r,e,t){if(!(t>0))return 0;for(var o=e+t-1,a=0;a<n.length;++a){var i=n.charCodeAt(a);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),i<=127){if(e>=o)break;r[e++]=i}else if(i<=2047){if(e+1>=o)break;r[e++]=192|i>>6,r[e++]=128|63&i}else if(i<=65535){if(e+2>=o)break;r[e++]=224|i>>12,r[e++]=128|i>>6&63,r[e++]=128|63&i}else{if(e+3>=o)break;r[e++]=240|i>>18,r[e++]=128|i>>12&63,r[e++]=128|i>>6&63,r[e++]=128|63&i}}r[e]=0}(r,m,i+4,a+1);else if(o)for(var u=0;u<a;++u){var c=r.charCodeAt(u);c>255&&(Dn(i),ln("String has UTF-16 code units that do not fit in 8 bits")),m[i+4+u]=c}else for(u=0;u<a;++u)m[i+4+u]=r[u];return null!==n&&n.push(Dn,i),i},argPackAdvance:8,readValueFromPointer:X,destructorFunction:function(n){Dn(n)}})},g:function(n,r,e){var t,o,a,i,u;e=fn(e),2===r?(t=E,o=F,i=k,a=function(){return T},u=1):4===r&&(t=R,o=I,i=U,a=function(){return A},u=2),pn(n,{name:e,fromWireType:function(n){for(var e,o=A[n>>2],i=a(),c=n+4,f=0;f<=o;++f){var s=n+4+f*r;if(f==o||0==i[s>>u]){var l=t(c,s-c);void 0===e?e=l:(e+=String.fromCharCode(0),e+=l),c=s+r}}return Dn(n),e},toWireType:function(n,t){"string"!=typeof t&&ln("Cannot pass non-string to C++ string type "+e);var a=i(t),c=jn(4+a+r);return A[c>>2]=a>>u,o(t,c+4,a+r),null!==n&&n.push(Dn,c),c},argPackAdvance:8,readValueFromPointer:X,destructorFunction:function(n){Dn(n)}})},m:function(n,r,e,t,o,a){G[n]={name:fn(r),rawConstructor:En(e,t),rawDestructor:En(o,a),fields:[]}},a:function(n,r,e,t,o,a,i,u,c,f){G[n].fields.push({fieldName:fn(r),getterReturnType:e,getter:En(t,o),getterContext:a,setterArgumentType:i,setter:En(u,c),setterContext:f})},t:function(n,r){pn(n,{isVoid:!0,name:r=fn(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,r){}})},f:hn,v:function(n){return 0===n?mn(In()):(n=void 0===(e=Rn[r=n])?fn(r):e,mn(In()[n]));var r,e},u:function(n){n>4&&(dn[n].refcount+=1)},o:function(n,e,t,o){n=function(n){return n||ln("Cannot use deleted val. handle = "+n),dn[n].value}(n);var a=Un[e];return a||(a=function(n){for(var e="",t=0;t<n;++t)e+=(0!==t?", ":"")+"arg"+t;var o="return function emval_allocator_"+n+"(constructor, argTypes, args) {\n";for(t=0;t<n;++t)o+="var argType"+t+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+t+'], "parameter '+t+'");\nvar arg'+t+" = argType"+t+".readValueFromPointer(args);\nargs += argType"+t+"['argPackAdvance'];\n";return o+="var obj = new constructor("+e+");\nreturn __emval_register(obj);\n}\n",new Function("requireRegisteredType","Module","__emval_register",o)(An,r,mn)}(e),Un[e]=a),a(n,t,o)},i:function(){B()},q:function(n,r,e){m.copyWithin(n,r,r+e)},e:function(n){var r,e,t=m.length,o=2147483648;if((n>>>=0)>o)return!1;for(var a=1;a<=4;a*=2){var i=t*(1+.2/a);if(i=Math.min(i,n+100663296),Sn(Math.min(o,((r=Math.max(n,i))%(e=65536)>0&&(r+=e-r%e),r))))return!0}return!1}};!function(){var n={a:On};function e(n,e){var t,o=n.exports;r.asm=o,S((l=r.asm.x).buffer),W=r.asm.D,t=r.asm.y,x.unshift(t),function(n){if(D--,r.monitorRunDependencies&&r.monitorRunDependencies(D),0==D&&M){var e=M;M=null,e()}}()}function t(n){e(n.instance)}function a(r){return(!s&&c&&"function"==typeof fetch?fetch(z,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+z+"'";return n.arrayBuffer()})).catch((function(){return N(z)})):Promise.resolve().then((function(){return N(z)}))).then((function(r){return WebAssembly.instantiate(r,n)})).then(r,(function(n){p("failed to asynchronously prepare wasm: "+n),B(n)}))}if(D++,r.monitorRunDependencies&&r.monitorRunDependencies(D),r.instantiateWasm)try{return r.instantiateWasm(n,e)}catch(n){return p("Module.instantiateWasm callback failed with error: "+n),!1}(s||"function"!=typeof WebAssembly.instantiateStreaming||q(z)||"function"!=typeof fetch?a(t):fetch(z,{credentials:"same-origin"}).then((function(r){return WebAssembly.instantiateStreaming(r,n).then(t,(function(n){return p("wasm streaming compile failed: "+n),p("falling back to ArrayBuffer instantiation"),a(t)}))}))).catch(o)}(),r.___wasm_call_ctors=function(){return(r.___wasm_call_ctors=r.asm.y).apply(null,arguments)};var xn,jn=r._malloc=function(){return(jn=r._malloc=r.asm.z).apply(null,arguments)},Dn=r._free=function(){return(Dn=r._free=r.asm.A).apply(null,arguments)},Mn=r.___getTypeName=function(){return(Mn=r.___getTypeName=r.asm.B).apply(null,arguments)};function Bn(n){function t(){xn||(xn=!0,r.calledRun=!0,v||(L(x),e(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),function(){if(r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;)n=r.postRun.shift(),j.unshift(n);var n;L(j)}()))}D>0||(function(){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)n=r.preRun.shift(),O.unshift(n);var n;L(O)}(),D>0||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),t()}),1)):t()))}if(r.___embind_register_native_and_builtin_types=function(){return(r.___embind_register_native_and_builtin_types=r.asm.C).apply(null,arguments)},M=function n(){xn||Bn(),xn||(M=n)},r.run=Bn,r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();return Bn(),r.ready});e.default=o}));
