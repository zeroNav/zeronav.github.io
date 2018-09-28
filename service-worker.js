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
    "revision": "a318f09c729ca3615b14ce53c53ad85a"
  },
  {
    "url": "assets/css/0.styles.9dfc83a5.css",
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
    "url": "assets/js/2.7d10664e.js",
    "revision": "e4e59c03b9bdc51138a957f8104ac24f"
  },
  {
    "url": "assets/js/3.2fa315a4.js",
    "revision": "9f0f950be8aabb783a51b8aa9411e175"
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
    "url": "assets/js/app.882b859b.js",
    "revision": "d0b0aa732ef7e5738965f99dfa20ec84"
  },
  {
    "url": "assets/js/vendor.commons.9dfc83a5.js",
    "revision": "a5a60eee979f5a13c303974cf79117a0"
  },
  {
    "url": "assets/js/vendor.vue.fb8baef4.js",
    "revision": "e4a8ceb3b0b7f542d7087921500b3a5c"
  },
  {
    "url": "blogs/index.html",
    "revision": "20447d086442953599a3e07b19dff19c"
  },
  {
    "url": "blogs/vps.html",
    "revision": "a3876e32be33d664b7276524db5176d2"
  },
  {
    "url": "develop/doc.html",
    "revision": "20849adb3e23d08b7546d8f558d2e73f"
  },
  {
    "url": "develop/frame.html",
    "revision": "96a6e2a2ee2623865496f196292d14c0"
  },
  {
    "url": "develop/ide.html",
    "revision": "f81716f294eeadc6dfa007d88bbc7580"
  },
  {
    "url": "develop/index.html",
    "revision": "23cf67daca37626599739333dd2f7b40"
  },
  {
    "url": "develop/map.html",
    "revision": "3e11e7ae5cc6e161c55a38dd5f31ceaf"
  },
  {
    "url": "develop/others.html",
    "revision": "f4a099c8c8799d101682200f9611f38c"
  },
  {
    "url": "develop/weapp.html",
    "revision": "e785270391bd94d4d107794f18cbb3ed"
  },
  {
    "url": "index.html",
    "revision": "cde59385fb62f71c1dc8e7b012c22a7d"
  },
  {
    "url": "private/accounts.html",
    "revision": "b11e503356cc7b56c7f8fa49fd6553c4"
  },
  {
    "url": "private/work.html",
    "revision": "758964299f36c3b5e60c9154a1777145"
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
