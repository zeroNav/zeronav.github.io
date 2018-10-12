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
    "revision": "78c7c75afbaa3c6660c696c33b81fe67"
  },
  {
    "url": "assets/css/0.styles.5fc9a79c.css",
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
    "url": "assets/js/vendor.commons.5fc9a79c.js",
    "revision": "e15b3d8be9bf7a55a57516498746bad9"
  },
  {
    "url": "assets/js/vendor.vue.fb8baef4.js",
    "revision": "e4a8ceb3b0b7f542d7087921500b3a5c"
  },
  {
    "url": "blogs/index.html",
    "revision": "c6500cfe2a37ab31fb7d1be509a7d819"
  },
  {
    "url": "blogs/vps.html",
    "revision": "c0b45ae260907497df5abc28b0b1c50f"
  },
  {
    "url": "develop/doc.html",
    "revision": "7232c387137eb5ef58d123aa0cd92088"
  },
  {
    "url": "develop/frame.html",
    "revision": "a225d4011fd68219714fde53613a867f"
  },
  {
    "url": "develop/ide.html",
    "revision": "61bbf5c3b7975c2b5cf0f32c7b8e6c54"
  },
  {
    "url": "develop/index.html",
    "revision": "490efae9e1fb6f7143d103849ef3cb5e"
  },
  {
    "url": "develop/map.html",
    "revision": "9ed57dd9a97214667fc922ab93e3f8cc"
  },
  {
    "url": "develop/others.html",
    "revision": "5ea536bd981515b89bcea3f65f64ed4e"
  },
  {
    "url": "develop/weapp.html",
    "revision": "253146167a6a9364cbf2c5b58a500a34"
  },
  {
    "url": "index.html",
    "revision": "5aa5ab75ef8a4278922882077e934ec6"
  },
  {
    "url": "private/accounts.html",
    "revision": "8e4a30b2969d58a2799a7002e0bfd475"
  },
  {
    "url": "private/work.html",
    "revision": "ad6d59e2b3e995da91038e0b541cec09"
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
