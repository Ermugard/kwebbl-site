"use strict";var precacheConfig=[["/kwebbl-site/index.html","9670ce984980293e91fabc81b2a8be00"],["/kwebbl-site/static/css/main.11c18230.css","93b6c609c340ef982df18613707b17f5"],["/kwebbl-site/static/js/main.2d48d116.js","077b007902a2b49b5ae7a130a9fc988a"],["/kwebbl-site/static/media/home-section1.2fa0223b.png","2fa0223b71eb4e21734e13c6d45de86b"],["/kwebbl-site/static/media/home-section2.59fb883f.png","59fb883f6d68f13ecba5dd356a3daf7b"],["/kwebbl-site/static/media/home-section3.a3be8db1.png","a3be8db1871bfb5e5e06788935c04a89"],["/kwebbl-site/static/media/home-section4.b555251d.png","b555251dd79208a8417891e809e403e0"],["/kwebbl-site/static/media/home-section5.1c140de4.png","1c140de4ff3eecb2c08c318dc2ef5dc8"],["/kwebbl-site/static/media/home-section6.140c7c98.png","140c7c9804282fe8a4000557178c6bcd"],["/kwebbl-site/static/media/logo-mob.169335e0.png","169335e0ca52723bf18991a9d69e4408"],["/kwebbl-site/static/media/logo.94a3a911.png","94a3a9111666f7766615f921807b1cbf"],["/kwebbl-site/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/kwebbl-site/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/kwebbl-site/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/kwebbl-site/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/kwebbl-site/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});