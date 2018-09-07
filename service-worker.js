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
    "revision": "26d8f3bfa3c50cd4e4c502682c540b4f"
  },
  {
    "url": "assets/css/0.styles.3c8519b8.css",
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
    "url": "assets/js/app.5c708bf3.js",
    "revision": "41b1d360be2b31c292c5a8a0f35e5ffe"
  },
  {
    "url": "assets/js/vendor.commons.3c8519b8.js",
    "revision": "a18da199cae2af06cf79a5e0034540c5"
  },
  {
    "url": "assets/js/vendor.vue.fb8baef4.js",
    "revision": "e4a8ceb3b0b7f542d7087921500b3a5c"
  },
  {
    "url": "blogs/index.html",
    "revision": "a15371811534336a68a54c6511b1e8e4"
  },
  {
    "url": "blogs/vps.html",
    "revision": "a670435c10506a6a8a687f7c0888e2dd"
  },
  {
    "url": "develop/doc.html",
    "revision": "90f784fa7afe7afb5d59daeaa43c4971"
  },
  {
    "url": "develop/frame.html",
    "revision": "3280a41caec3eb52615ad0a096b2fe4e"
  },
  {
    "url": "develop/ide.html",
    "revision": "427c7d3e43891e7fac3c8fdd6b9843cf"
  },
  {
    "url": "develop/index.html",
    "revision": "04df38d6fb05a97224d2d4777a4d2ad2"
  },
  {
    "url": "develop/map.html",
    "revision": "67fae2b18d79b3931d4ee37d7d54b1ac"
  },
  {
    "url": "develop/others.html",
    "revision": "27a0129e560699fd438b577e85beb253"
  },
  {
    "url": "develop/weapp.html",
    "revision": "21cbeccfada6a6b462234041544d6629"
  },
  {
    "url": "index.html",
    "revision": "d9c9d8c4b030edf6f39474dfd9eeffc6"
  },
  {
    "url": "private/accounts.html",
    "revision": "e19f4d4b4133ee7a38217cebadde4173"
  },
  {
    "url": "private/work.html",
    "revision": "c4d4bf8df7fc339e46d8cddac10394c7"
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
