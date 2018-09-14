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
    "revision": "e582ef31941f16b1c31410b7c8919c2e"
  },
  {
    "url": "assets/css/0.styles.708691d7.css",
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
    "url": "assets/js/vendor.commons.708691d7.js",
    "revision": "bd223ebf1f1c39b6301ea4692097bf91"
  },
  {
    "url": "assets/js/vendor.vue.fb8baef4.js",
    "revision": "e4a8ceb3b0b7f542d7087921500b3a5c"
  },
  {
    "url": "blogs/index.html",
    "revision": "507f77676dcdcf1cf896158a30dbc531"
  },
  {
    "url": "blogs/vps.html",
    "revision": "c5b2efd9cb7d621f76d74d048d3b2d4d"
  },
  {
    "url": "develop/doc.html",
    "revision": "2b97870312bfd2b22bf96dc4b2e371bf"
  },
  {
    "url": "develop/frame.html",
    "revision": "6c6a4bfa46f05eaa49b3008b24b3521b"
  },
  {
    "url": "develop/ide.html",
    "revision": "272a14b42bbc2410b5489a19a7954555"
  },
  {
    "url": "develop/index.html",
    "revision": "5f080f234cfdc0dbd70522407499d07f"
  },
  {
    "url": "develop/map.html",
    "revision": "645135a4db230084a3f8cddd9930dc0a"
  },
  {
    "url": "develop/others.html",
    "revision": "787ab8bf2cadb37c839e9b73f622b777"
  },
  {
    "url": "develop/weapp.html",
    "revision": "3a3b031aae37d326516d05078800ff3e"
  },
  {
    "url": "index.html",
    "revision": "a325732302724409d5161e65ddb05e84"
  },
  {
    "url": "private/accounts.html",
    "revision": "e625832e14f5f9de3eb6c19427a9364f"
  },
  {
    "url": "private/work.html",
    "revision": "2ed22693c07bcd639afdc26c62cdf800"
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
