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
    "revision": "2f4e1c4e0eeaa9bbcd33f1c5d3588576"
  },
  {
    "url": "assets/css/0.styles.f8edbad0.css",
    "revision": "14a656f0cb878c5ab67c1abed8d59f80"
  },
  {
    "url": "assets/js/10.7fadf726.js",
    "revision": "48f640fbde963d6484fa4d0139b18af4"
  },
  {
    "url": "assets/js/11.7fef7dd8.js",
    "revision": "91728af3d17cd138592c37bc6627b5b8"
  },
  {
    "url": "assets/js/12.5de21d61.js",
    "revision": "0c95edb906524ca2d8c2435dfacd9340"
  },
  {
    "url": "assets/js/13.c352357c.js",
    "revision": "633123b1c05750fcfd6e585a0c17f852"
  },
  {
    "url": "assets/js/14.a93caacf.js",
    "revision": "8ca08e54d2fcb98779cf073c4398ca86"
  },
  {
    "url": "assets/js/15.6ecfa38f.js",
    "revision": "3bfee192b86e04da683ce3350fe9326e"
  },
  {
    "url": "assets/js/2.b23c34ad.js",
    "revision": "443e79a4cf01055b8a7efed035b61d62"
  },
  {
    "url": "assets/js/3.bef773e3.js",
    "revision": "df5658317a23acbf7a0c8f1c9e3d4c64"
  },
  {
    "url": "assets/js/4.9400996a.js",
    "revision": "841ec23c4e67aee714709f1e61a16d27"
  },
  {
    "url": "assets/js/5.30a3d966.js",
    "revision": "766bdc41115f302febfca9a81649438b"
  },
  {
    "url": "assets/js/6.de9d624e.js",
    "revision": "cf22a1fe2f25500609b2a708dc373332"
  },
  {
    "url": "assets/js/7.a7dbb39b.js",
    "revision": "df3d0053403d5cd10be26e34cb9b9415"
  },
  {
    "url": "assets/js/8.a388a7f6.js",
    "revision": "547665e9d4bc4a9a29934191fae423d1"
  },
  {
    "url": "assets/js/9.8fa89932.js",
    "revision": "7f50779b5d10d0d7f82b12687dcf6e60"
  },
  {
    "url": "assets/js/app.52657833.js",
    "revision": "2a5e3acb34a890c7f96ce6fd4ed5c3a8"
  },
  {
    "url": "assets/js/vendor.commons.f8edbad0.js",
    "revision": "bd6ef40653ccc60af33a2b41078c094e"
  },
  {
    "url": "assets/js/vendor.vue.ec309bc8.js",
    "revision": "d16aa6e2b2e70d1dbde6a44c2c84fc11"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "b648cd0f6e007234f6bafd11a4a0bbf8"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "008637331b75d6d31a6709a49fd2fee2"
  },
  {
    "url": "blogs/charles.html",
    "revision": "bd95f62e4d3d062a2c4c60304e8a92ee"
  },
  {
    "url": "blogs/index.html",
    "revision": "c95362913453fc99e911eb85e362c03e"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "b4fae7c07ad14b6e9b55386a729600ec"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "9c933a3fb821dd43a42bdfc6df525598"
  },
  {
    "url": "blogs/vps.html",
    "revision": "4c562a3bcf3b73493dca343a2c5ef3ec"
  },
  {
    "url": "develop/doc.html",
    "revision": "f6aeda0723588cd1014bedd46a61e4be"
  },
  {
    "url": "develop/frame.html",
    "revision": "b587914dbd84c7bdce22e4f79ced4185"
  },
  {
    "url": "develop/ide.html",
    "revision": "4b757a760bfe8c10f1e4880af4409fd1"
  },
  {
    "url": "develop/index.html",
    "revision": "9baf5096f3b8fc26deac8b3af93ae42d"
  },
  {
    "url": "develop/map.html",
    "revision": "b6550120287ca10629965657501a00d7"
  },
  {
    "url": "develop/others.html",
    "revision": "59c8979def79c35ab0e040062434f743"
  },
  {
    "url": "index.html",
    "revision": "3db33e565ac32f5bcf9a412cb9d9fa5d"
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
