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
    "revision": "da8e6c292409541e5bdde57a2290a85e"
  },
  {
    "url": "assets/css/0.styles.9f9207c9.css",
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
    "url": "assets/js/vendor.commons.9f9207c9.js",
    "revision": "07a17085073e3848a2f485cecc27fee1"
  },
  {
    "url": "assets/js/vendor.vue.fb8baef4.js",
    "revision": "e4a8ceb3b0b7f542d7087921500b3a5c"
  },
  {
    "url": "blogs/index.html",
    "revision": "5a87c8258c63ed79024ca8e203814a96"
  },
  {
    "url": "blogs/vps.html",
    "revision": "e68376a4a132690c76e027a1d3612874"
  },
  {
    "url": "develop/doc.html",
    "revision": "765ac0057cdd9c49fc367266fc9dda7a"
  },
  {
    "url": "develop/frame.html",
    "revision": "c73531ba182a83373402e50aaa4f5b89"
  },
  {
    "url": "develop/ide.html",
    "revision": "53a04c45d022ad647b9c27976f9a47c1"
  },
  {
    "url": "develop/index.html",
    "revision": "83dec7be720052a6c1b38745a6304870"
  },
  {
    "url": "develop/map.html",
    "revision": "55c6709f467f97b2d02a9eb558f93ec5"
  },
  {
    "url": "develop/others.html",
    "revision": "fd62fe631dec448eec4d09e2fe4a31bd"
  },
  {
    "url": "develop/weapp.html",
    "revision": "3f83b91dbe1a08a7c17786f00caf0c4c"
  },
  {
    "url": "index.html",
    "revision": "ca3d173614cccf2303d54272c1e0638e"
  },
  {
    "url": "private/accounts.html",
    "revision": "efa26ad3019f3eef0c73008832d6f54b"
  },
  {
    "url": "private/work.html",
    "revision": "5a0a833f970af650d45af55d181026b0"
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
