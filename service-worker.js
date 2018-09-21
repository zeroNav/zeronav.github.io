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
    "revision": "cc8901930d533bbc78877384983ce5ce"
  },
  {
    "url": "assets/css/0.styles.794f34c6.css",
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
    "url": "assets/js/vendor.commons.794f34c6.js",
    "revision": "601a1698b7b8b2a7adff3b652a3a4dbd"
  },
  {
    "url": "assets/js/vendor.vue.fb8baef4.js",
    "revision": "e4a8ceb3b0b7f542d7087921500b3a5c"
  },
  {
    "url": "blogs/index.html",
    "revision": "b5fc4655871d2eefb0cf01108b7e755e"
  },
  {
    "url": "blogs/vps.html",
    "revision": "fc551e2919f00a6a9a6da8a1051aedee"
  },
  {
    "url": "develop/doc.html",
    "revision": "5a26613980475eda412afca42cd240fe"
  },
  {
    "url": "develop/frame.html",
    "revision": "b0ae34f86db40175cffb28ebb6851e6b"
  },
  {
    "url": "develop/ide.html",
    "revision": "d02917235b8f26d618caf81ca553283c"
  },
  {
    "url": "develop/index.html",
    "revision": "423a13b9456a0771fb1dfc0fde799bce"
  },
  {
    "url": "develop/map.html",
    "revision": "fde9b46af36c170c2b1884071ba2c388"
  },
  {
    "url": "develop/others.html",
    "revision": "9fe883c505b0bd94a738e005d45483c8"
  },
  {
    "url": "develop/weapp.html",
    "revision": "eeb676ab2971c6e810432e2b3f46068a"
  },
  {
    "url": "index.html",
    "revision": "b1c89831ebcac91809e1f65634566900"
  },
  {
    "url": "private/accounts.html",
    "revision": "7379355e27b07751089d128f1e671d14"
  },
  {
    "url": "private/work.html",
    "revision": "abd06880e157ed7f3ec4ce51ec2171c7"
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
