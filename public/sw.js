if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const t=e=>i(e,c),d={module:{uri:c},exports:r,require:t};s[c]=Promise.all(a.map((e=>d[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CV.pdf",revision:"03d203706faaa93cf8faf83df45e38d5"},{url:"/LinkedIn.svg",revision:"15b4281ebd93cc246c81200bc3c1fd94"},{url:"/Twitter.svg",revision:"f120351520f756c49aef97d9c84c8b85"},{url:"/_next/app-build-manifest.json",revision:"608f734ddafd07e1ca63889608237ad3"},{url:"/_next/static/chunks/189-e708f4408c85fdc9.js",revision:"fYr5Giv8B_zd6thm4nsL7"},{url:"/_next/static/chunks/23-0f3017bbc9e81028.js",revision:"fYr5Giv8B_zd6thm4nsL7"},{url:"/_next/static/chunks/53c13509-3e28b9d4a5b1f4f1.js",revision:"fYr5Giv8B_zd6thm4nsL7"},{url:"/_next/static/chunks/726-3b1f8b2a63937fe1.js",revision:"fYr5Giv8B_zd6thm4nsL7"},{url:"/_next/static/chunks/795d4814-a462c7b9e5b548fa.js",revision:"fYr5Giv8B_zd6thm4nsL7"},{url:"/_next/static/chunks/app/_not-found/page-ea85ca6953a3e087.js",revision:"fYr5Giv8B_zd6thm4nsL7"},{url:"/_next/static/chunks/app/layout-6ef1128b71333d64.js",revision:"fYr5Giv8B_zd6thm4nsL7"},{url:"/_next/static/chunks/app/page-39c1f67f91717831.js",revision:"fYr5Giv8B_zd6thm4nsL7"},{url:"/_next/static/chunks/fd9d1056-4d2ecb7add830950.js",revision:"fYr5Giv8B_zd6thm4nsL7"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"fYr5Giv8B_zd6thm4nsL7"},{url:"/_next/static/chunks/main-app-e88240427eb187d1.js",revision:"fYr5Giv8B_zd6thm4nsL7"},{url:"/_next/static/chunks/main-b2937fc0453f1650.js",revision:"fYr5Giv8B_zd6thm4nsL7"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"fYr5Giv8B_zd6thm4nsL7"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"fYr5Giv8B_zd6thm4nsL7"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-94419451bba69a4a.js",revision:"fYr5Giv8B_zd6thm4nsL7"},{url:"/_next/static/css/5d5af8c1173cf1dc.css",revision:"5d5af8c1173cf1dc"},{url:"/_next/static/fYr5Giv8B_zd6thm4nsL7/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/fYr5Giv8B_zd6thm4nsL7/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/00c85bb211b329fc-s.woff2",revision:"86f9de3cec79bb36005a1b6e993d212d"},{url:"/_next/static/media/0fb5d54cc1f5e91d-s.p.woff2",revision:"f9a2b841308c78d992ba73d1940bdc66"},{url:"/_next/static/media/33869b29596d7bb6-s.woff2",revision:"827ea12f2d3333210f5d74b829d518b0"},{url:"/astrojs.svg",revision:"9568ef3fa93bee64a4fbe7917ea58ca5"},{url:"/auth0.svg",revision:"3c3d1042c2b7db293c0bbd494e790320"},{url:"/corpcomment.png",revision:"0f7869b508036568cca0f79a4f06393e"},{url:"/deno.svg",revision:"e030cdabe9fc45225888e7ea2b4499bf"},{url:"/electronjs.svg",revision:"30091125292db3469319350afa0deba1"},{url:"/expo.svg",revision:"6a4997b3a5547285df9cff63bf69a280"},{url:"/expressjs.svg",revision:"ebe0a7f410c33aaad512df0a98797446"},{url:"/facebook.svg",revision:"e61b4569268d21e06d106af1ec778985"},{url:"/favicon.ico",revision:"8c1afde1d1485cf8e8fef0eae5a7c745"},{url:"/firebase.svg",revision:"0d1caaeccf3d17a6c8e8012815e4e3dc"},{url:"/github.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"/icons8-git.svg",revision:"5eed2c8cb62e1adfae09b0129a25a1a7"},{url:"/icons8-github-50.png",revision:"add631b638f2680caf976d349e2db7e0"},{url:"/icons8-linkedin-48.png",revision:"f33b3032dcc4df0e1c28e472742419d4"},{url:"/javascript.svg",revision:"8ee02715beb101d7d505a9473bfb2754"},{url:"/jwt.svg",revision:"639b2ac3e4958da51a7d42847c131b21"},{url:"/langchain.png",revision:"285ad77c4bac2525a84ab3bd5a68c9d6"},{url:"/last-upscaler-blurwindows-picturefliped.jpg",revision:"4a66c50fb605079b72dbd5c557355f0f"},{url:"/manifest.json",revision:"9e8477e65b3996a35a0d0f6b17439f15"},{url:"/mongodb.svg",revision:"aacc7ee48e94d2b039ecc904aaef82f7"},{url:"/mysql.svg",revision:"78d3a4b1edc15d38509c69ecfe6beb84"},{url:"/nestjs.svg",revision:"943e52fd41e1fe2cd44ce8af53be7672"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/nextauth.webp",revision:"7f2bbec601f0af580603ce8f96752d0d"},{url:"/nextjs.svg",revision:"a5f87b316f24a042fb97443406d4d0b1"},{url:"/nodejs.svg",revision:"c99729733b99dd5bb1f2e079b42ec30a"},{url:"/postgressql.svg",revision:"6726e3264aa36c6e252c6b096119d98b"},{url:"/prisma.svg",revision:"ba51e95a562ae0801f1de585b2c17f49"},{url:"/project1.png",revision:"1e98a2d900d54090a8d2df6d82cad741"},{url:"/project1fulpage.png",revision:"757bee11dbf4565a2ffcf4055c5d447a"},{url:"/project2.png",revision:"81ee438d1d513cae70fba9e9bb1d53c4"},{url:"/project3.png",revision:"86b33289c1ffdd14a5deb620ab620a44"},{url:"/project4.png",revision:"11042c3034e39cda4489e8b588c99ca7"},{url:"/react.svg",revision:"b9fd837216629d45669828ae5aac9130"},{url:"/reactquery.svg",revision:"f104965b43af56661bc0d7d1e68f3a81"},{url:"/reactrouter.svg",revision:"2b2fd3d8acd6f397be38abd4d3d7dd0e"},{url:"/reduxtoolkit.svg",revision:"5d83a2889283ce0b126ef3e16c279f07"},{url:"/rmtdev.png",revision:"05791095fc5a4f44247c36c4650c97e5"},{url:"/sanity.svg",revision:"a7114c2fc17520e5780ba971064d390d"},{url:"/sqlite.svg",revision:"ef4e29236726184d8eaf78a432e69e0c"},{url:"/stripe.svg",revision:"ae4b64f0d3676dd323b78e6ea8b940bf"},{url:"/supabase.svg",revision:"e33a232c69365ef4707a47e03e629eb8"},{url:"/swr.svg",revision:"fbe404580a54cbeb2b245cf3146dcaa4"},{url:"/tailwindcss.svg",revision:"8292e706479ec23b42fc4e21c7b1e478"},{url:"/tauri.svg",revision:"0213cf2ac82949aa554729155784b4d2"},{url:"/typescript.svg",revision:"00ec9a8cbc93b20a1dc5372c49706eae"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/wordanalytics.png",revision:"ee567cbe5fee64ee49f69b6f9c478a48"},{url:"/zodlogo.svg",revision:"7f6d82dd866370ef221a3430f2a7e514"},{url:"/zustand.webp",revision:"81481ac8425777fab172491c3977fc5e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
