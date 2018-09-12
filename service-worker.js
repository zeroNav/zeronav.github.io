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
    "revision": "c2095b13c8bc53d61a7d15baec369fc7"
  },
  {
    "url": "assets/css/0.styles.7ac022a5.css",
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
    "url": "assets/js/vendor.commons.7ac022a5.js",
    "revision": "e2318b971ab57955265eff9f957eabfc"
  },
  {
    "url": "assets/js/vendor.vue.fb8baef4.js",
    "revision": "e4a8ceb3b0b7f542d7087921500b3a5c"
  },
  {
    "url": "blogs/index.html",
    "revision": "576c4ffadbfed90e620d249a013e9925"
  },
  {
    "url": "blogs/vps.html",
    "revision": "010feae40cb6dacaa393f2f06c649660"
  },
  {
    "url": "develop/doc.html",
    "revision": "2bc6c10527d126605ab424064201f682"
  },
  {
    "url": "develop/frame.html",
    "revision": "1c2c97c9e1c2e74a811c55b4f598db2f"
  },
  {
    "url": "develop/ide.html",
    "revision": "91b7f06db4b321e6c62069512ddcf639"
  },
  {
    "url": "develop/index.html",
    "revision": "34a18708680d724d6cd4b756f6827dc8"
  },
  {
    "url": "develop/map.html",
    "revision": "0f46e90b472e3bafe97b8c45369cbf8e"
  },
  {
    "url": "develop/others.html",
    "revision": "4c9d7c5f16c379014578f0305c22fb11"
  },
  {
    "url": "develop/weapp.html",
    "revision": "47dbc3d7fd105c9f9e83473788d0d8d4"
  },
  {
    "url": "index.html",
    "revision": "e3053398bbfd398bcff1cb6c47c8ad18"
  },
  {
    "url": "private/accounts.html",
    "revision": "d06e2ca9decc03b5cd30559337e05f75"
  },
  {
    "url": "private/work.html",
    "revision": "080bd0f8a1b5db04271c1c704b311de3"
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
