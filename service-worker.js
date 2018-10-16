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
    "revision": "0c9b8981f849e8bc2ebcefb3665cda0f"
  },
  {
    "url": "assets/css/0.styles.ea12fecb.css",
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
    "url": "assets/js/3.42a9ecb8.js",
    "revision": "b60c43a270c450be5cc2614f5878e7f0"
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
    "url": "assets/js/app.d6b3e5bc.js",
    "revision": "67f2930fe8e4cdd8fbc9e39de3d34969"
  },
  {
    "url": "assets/js/vendor.commons.ea12fecb.js",
    "revision": "c238d13fe8d1d72292fc2dc58266d6eb"
  },
  {
    "url": "assets/js/vendor.vue.fb8baef4.js",
    "revision": "e4a8ceb3b0b7f542d7087921500b3a5c"
  },
  {
    "url": "blogs/index.html",
    "revision": "c3e330af25927e686715dc0511f2cc11"
  },
  {
    "url": "blogs/vps.html",
    "revision": "ded3d57ffcec6534321f4b9ca3f26eb6"
  },
  {
    "url": "develop/doc.html",
    "revision": "ad88c528b71c2062a50b8cc52325dd28"
  },
  {
    "url": "develop/frame.html",
    "revision": "cb9f56394bbcabf2b958cebc828ef483"
  },
  {
    "url": "develop/ide.html",
    "revision": "44213e76ae2f4a3b1298e96bdb292b3d"
  },
  {
    "url": "develop/index.html",
    "revision": "65b40c07854cfd9d2527f5973332ebab"
  },
  {
    "url": "develop/map.html",
    "revision": "0ed4ce749ad3b2b4652e9d5e27e5cd40"
  },
  {
    "url": "develop/others.html",
    "revision": "69a16e867ae71fed9e9171d7da408686"
  },
  {
    "url": "develop/weapp.html",
    "revision": "d2e3a8a3fdce185af4616762abf58152"
  },
  {
    "url": "index.html",
    "revision": "60b75ead6600841263501a3cc7ec92dd"
  },
  {
    "url": "private/accounts.html",
    "revision": "8aa92e8e648fbaaca35544984b2b7435"
  },
  {
    "url": "private/work.html",
    "revision": "c9702a25919e819c1ddb2ab40de0f5d6"
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
