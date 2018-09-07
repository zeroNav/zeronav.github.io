/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1aa7517c01abe64b995fd1d6593ba986"
  },
  {
    "url": "assets/css/0.styles.993acf52.css",
    "revision": "d1ded11eeb064d32852c5f2c5329ac98"
  },
  {
    "url": "assets/js/10.92361d16.js",
    "revision": "6f85b8e89a41b56db7bf8431cac0aedd"
  },
  {
    "url": "assets/js/11.c55920b4.js",
    "revision": "3df4b5d8cc3ac92cd33fa2f273e2d4f8"
  },
  {
    "url": "assets/js/12.a211f7a3.js",
    "revision": "c7cfab59bb740f924fad0e870b5f4b37"
  },
  {
    "url": "assets/js/13.88f94bc9.js",
    "revision": "d969a5e349d13b2d31a0745b761d4479"
  },
  {
    "url": "assets/js/2.09e61cd6.js",
    "revision": "a35c1e8814d0c58da2fd8673eafb9ce2"
  },
  {
    "url": "assets/js/3.ece95c8b.js",
    "revision": "565bfb34e90ec4e64ad1dd524881847d"
  },
  {
    "url": "assets/js/4.fb6cdf0d.js",
    "revision": "c87a0f015f7a035408837e03856665a9"
  },
  {
    "url": "assets/js/5.1c936b36.js",
    "revision": "ce9224a5f5adb0e29ef4118a6d2a2610"
  },
  {
    "url": "assets/js/6.c5194955.js",
    "revision": "6e641f9cfdaa1abc3f9f2ea72f964c15"
  },
  {
    "url": "assets/js/7.e25a7ab1.js",
    "revision": "0c75c035642cc5decb8515491d6aa1f8"
  },
  {
    "url": "assets/js/8.62c45923.js",
    "revision": "cb6d3f6a8acf6cf20608058d3ef0278d"
  },
  {
    "url": "assets/js/9.faf25994.js",
    "revision": "5807d99f7f3abc636fd99d7a8112f483"
  },
  {
    "url": "assets/js/app.f8fc2c98.js",
    "revision": "a8870bf640c9574775cba4da5849bd60"
  },
  {
    "url": "assets/js/vendor.commons.993acf52.js",
    "revision": "bc36f7a81886edcd5cc632b8f9671b73"
  },
  {
    "url": "assets/js/vendor.vue.fb8baef4.js",
    "revision": "e4a8ceb3b0b7f542d7087921500b3a5c"
  },
  {
    "url": "blogs/index.html",
    "revision": "667e859024fb09127278c5e96a9b83fe"
  },
  {
    "url": "blogs/vps.html",
    "revision": "fac94d67bbef0dbad439fe0090e9baf7"
  },
  {
    "url": "develop/doc.html",
    "revision": "78c546a51339cdb86e582d0dbb5b2fcd"
  },
  {
    "url": "develop/frame.html",
    "revision": "6173fd3302992d309ed194e58ed96acb"
  },
  {
    "url": "develop/ide.html",
    "revision": "e342bb6fb556cfeeadf1452f34e07dff"
  },
  {
    "url": "develop/index.html",
    "revision": "8cdce16a792cde9c92d6324ae86e339c"
  },
  {
    "url": "develop/map.html",
    "revision": "533b42f19e9af06fc4fcddb2c80ddb3d"
  },
  {
    "url": "develop/others.html",
    "revision": "6f718740d0f357819824784c1d6e7ac1"
  },
  {
    "url": "develop/weapp.html",
    "revision": "ea42f3c339afa8e05dbd2d9ec148f468"
  },
  {
    "url": "index.html",
    "revision": "16f94e38ccbf804f07c9b2c0a80fde75"
  },
  {
    "url": "private/accounts.html",
    "revision": "c7f56976030240591225eb8437b1cd00"
  },
  {
    "url": "private/work.html",
    "revision": "a740d0abc792fdc325767828f5529966"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
