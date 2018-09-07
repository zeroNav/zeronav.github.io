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
    "revision": "957b5b2ae6980e1568f55a28e5a66a99"
  },
  {
    "url": "assets/css/0.styles.2e90f021.css",
    "revision": "2ed4c8df4ff33bc36857f179247b429c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.37a7f724.js",
    "revision": "48184b5dfed2a7ea6b85c7c7f4506b6c"
  },
  {
    "url": "assets/js/11.0891b4cb.js",
    "revision": "9f588f92acd9d2769c430e541196796a"
  },
  {
    "url": "assets/js/12.7225ecf0.js",
    "revision": "83de0a614fcf818607930bff1f9680a1"
  },
  {
    "url": "assets/js/13.708b065d.js",
    "revision": "2d43f07d7130d3ceefb736f80b008715"
  },
  {
    "url": "assets/js/2.2c5e7b1b.js",
    "revision": "496d254e218d530e36843e59f4adbd71"
  },
  {
    "url": "assets/js/3.7cffbbce.js",
    "revision": "1f6311b7e7b72dbe03c54acbc059918b"
  },
  {
    "url": "assets/js/4.d6356be3.js",
    "revision": "1836e79d4d66c3d7091dfad691ae6160"
  },
  {
    "url": "assets/js/5.32c3884f.js",
    "revision": "0d530a1da3de11bb2ed39b9f6dabbc0c"
  },
  {
    "url": "assets/js/6.3d2e7a8d.js",
    "revision": "83db84d368b4b60b126b02364a99dcea"
  },
  {
    "url": "assets/js/7.f22a6572.js",
    "revision": "19ff1750bd21d6955e99299d38bdb385"
  },
  {
    "url": "assets/js/8.01ff6bc8.js",
    "revision": "07c5a1da5931866b94b774c12e5699af"
  },
  {
    "url": "assets/js/9.7f806cd5.js",
    "revision": "9ef37f214e56c90d036f7d7e0a0dce05"
  },
  {
    "url": "assets/js/app.813a39cc.js",
    "revision": "c0173d29595f574a029de5cdc1a0c8b2"
  },
  {
    "url": "assets/js/vendor.commons.2e90f021.js",
    "revision": "19ed8995e12d7f85b84cac0ef3632be1"
  },
  {
    "url": "assets/js/vendor.vue.f2788b82.js",
    "revision": "84557f98fe783ba9d1fc33e8220901f8"
  },
  {
    "url": "blogs/index.html",
    "revision": "918794aeb6350bb5366565bd52139f19"
  },
  {
    "url": "blogs/vps.html",
    "revision": "e7547aa3e8723a68d6eb233f7f53bfff"
  },
  {
    "url": "develop/doc.html",
    "revision": "08670255e66580e68401a751fb5df1bb"
  },
  {
    "url": "develop/frame.html",
    "revision": "6f53d83e34ecd8186a2c0c61d7bfc01c"
  },
  {
    "url": "develop/ide.html",
    "revision": "903d5e5b24734d5d60eacb5ac8a1146c"
  },
  {
    "url": "develop/index.html",
    "revision": "416db621a7df4fe6aef663827b4d90cc"
  },
  {
    "url": "develop/map.html",
    "revision": "486c0b59567980b638d822a214d1e77e"
  },
  {
    "url": "develop/others.html",
    "revision": "3a125f5755b1aec13ace5f892f3cc2da"
  },
  {
    "url": "develop/weapp.html",
    "revision": "30614a1d4efd0f98b272acbd0230ae5f"
  },
  {
    "url": "index.html",
    "revision": "c6b40658ba27c495e624b1cb9ada8eb8"
  },
  {
    "url": "private/accounts.html",
    "revision": "721309d1a223c2ab818e6fbb66fa29a1"
  },
  {
    "url": "private/work.html",
    "revision": "541f58d4585dbc45fe9b10e9af33a334"
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
