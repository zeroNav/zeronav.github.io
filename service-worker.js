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
    "revision": "802d4ed4a8dfcd0574deb35121afa13e"
  },
  {
    "url": "assets/css/0.styles.e778e7ce.css",
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
    "url": "assets/js/app.d56107d1.js",
    "revision": "b5b45cc33998488f6343f4beb17cf3b2"
  },
  {
    "url": "assets/js/vendor.commons.e778e7ce.js",
    "revision": "0a9aaf73aab3b6609dd47269c41fc361"
  },
  {
    "url": "assets/js/vendor.vue.fb8baef4.js",
    "revision": "e4a8ceb3b0b7f542d7087921500b3a5c"
  },
  {
    "url": "blogs/index.html",
    "revision": "62ea48dfa9a8f595ff8f4b8202e627f1"
  },
  {
    "url": "blogs/vps.html",
    "revision": "802a9b6c94ec59a68466ba35c5533dad"
  },
  {
    "url": "develop/doc.html",
    "revision": "1756069789f2ffa75291c0365333f254"
  },
  {
    "url": "develop/frame.html",
    "revision": "5a1a826ba5e77c7a919bb8561ed2d2d6"
  },
  {
    "url": "develop/ide.html",
    "revision": "2584b038b8d7c6752a24c7539cd820e7"
  },
  {
    "url": "develop/index.html",
    "revision": "a22d8c17ea5358a6531a9bd22458b7dc"
  },
  {
    "url": "develop/map.html",
    "revision": "f0cbb1af32aa9575acdd7f315dff5fdf"
  },
  {
    "url": "develop/others.html",
    "revision": "963f613cfa66b25d489399a3ddcee69b"
  },
  {
    "url": "develop/weapp.html",
    "revision": "b0d389916fc710b2281d8428b34796de"
  },
  {
    "url": "index.html",
    "revision": "1ed21b9bb1cf7f142e01d6f287671fa7"
  },
  {
    "url": "private/accounts.html",
    "revision": "e12c49db8354bf4867e6e29ea692ae79"
  },
  {
    "url": "private/work.html",
    "revision": "8238cecd46ad4f51b32212fc9e543517"
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
