"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","73ad774b0967ef577c1378cb2ad87ab0"],["/static/css/main.04cf6da4.css","6321a11d3e8c8b7bf55fd6d898f0458f"],["/static/js/main.85969ea7.js","2bbeb864f7229b74fa65f5c2aba502b4"],["/static/media/1-1.b7ed1890.png","b7ed1890cf73ae6f2adb97caa39de7fc"],["/static/media/1-2.235696aa.png","235696aa5cf9820adada9b11a3d14bf5"],["/static/media/1-3.0f54fcf4.png","0f54fcf4d0358f43a636835cba3e5792"],["/static/media/1-4.d497757f.png","d497757ff22e8ab28e7dfa5f7e2c2692"],["/static/media/1-5.434ea0d5.png","434ea0d51c9608310cf41faa5de6b8ef"],["/static/media/1-6.afad41b0.png","afad41b04d520d445dc5de42dae9a384"],["/static/media/1-7.3848e031.png","3848e031bf7b3c036b4ec19edff16e46"],["/static/media/1-8.d387bddb.png","d387bddb07503aea4b711236348e2632"],["/static/media/2-1.e7e02b72.png","e7e02b72b5e63c127d5bfae57b8e4ab1"],["/static/media/2-2.883171fd.png","883171fd98b85dee3b3f4243b7459b48"],["/static/media/2-3.b7f43261.png","b7f432619fb21a40b05cd25d11eca02d"],["/static/media/2-4.61a1e0f4.png","61a1e0f448be0624c62db416e864d2af"],["/static/media/2-5.3c7a9ef4.png","3c7a9ef469a12e7a596b559145b87f09"],["/static/media/2-6.7b623576.png","7b6235761e50d391445f021922b71789"],["/static/media/2-7.97c97008.png","97c9700836a33e05c2410bda8da59117"],["/static/media/2-8.21724424.png","217244241b514affc0f12f4168cf6628"],["/static/media/3-1.b7ed1890.png","b7ed1890cf73ae6f2adb97caa39de7fc"],["/static/media/3-2.235696aa.png","235696aa5cf9820adada9b11a3d14bf5"],["/static/media/3-3.0f54fcf4.png","0f54fcf4d0358f43a636835cba3e5792"],["/static/media/3-4.d497757f.png","d497757ff22e8ab28e7dfa5f7e2c2692"],["/static/media/3-5.434ea0d5.png","434ea0d51c9608310cf41faa5de6b8ef"],["/static/media/3-6.afad41b0.png","afad41b04d520d445dc5de42dae9a384"],["/static/media/3-7.3848e031.png","3848e031bf7b3c036b4ec19edff16e46"],["/static/media/back-white.be04c978.svg","be04c9784618be9f849b89603530c31d"],["/static/media/back.0681ad83.svg","0681ad8320e2ff8c23d1bb16a60d8347"],["/static/media/cart.48474523.svg","484745230d6b7328a7c27aa837e09d4c"],["/static/media/home-active.18edf5a9.svg","18edf5a99793675f19968501c238c878"],["/static/media/home-normal.b245d607.svg","b245d60769c4ef0bdf53e0f5b93bc18e"],["/static/media/load-app.ed725986.png","ed725986894440a6bcdc2858e53bbf53"],["/static/media/load.6874efda.gif","6874efda8c6bf4734d39faf86fe190c3"],["/static/media/mine-active.dbc5ebf9.svg","dbc5ebf960cb776ec60bb686902b8d3a"],["/static/media/mine-normal.c151d623.svg","c151d623576459d0490aacb1f7e737bb"],["/static/media/notfound.d947b36a.gif","d947b36a019a8ec504cde239a90d47f2"],["/static/media/order-active.070ae2af.svg","070ae2aff961bce53e1835907cc49424"],["/static/media/order-normal.41c17f8d.svg","41c17f8da34307c38d3a02d7a6d22745"],["/static/media/star-light.1ddaad8c.svg","1ddaad8ca03b11875d5b45e56ddb669a"],["/static/media/star.f3f64549.svg","f3f6454928990f4f5a97a6604938cd97"],["/static/media/top.acadb997.svg","acadb997a4fae1354bc0f10baa0bf4e2"],["/static/media/user-via.b7f43261.jpeg","b7f432619fb21a40b05cd25d11eca02d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});