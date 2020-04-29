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
    "revision": "49e07e65daa7c326b305235542992990"
  },
  {
    "url": "assets/css/0.styles.eae05673.css",
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
    "url": "assets/js/15.68762418.js",
    "revision": "43bcd48374e48e2ec02d2bbf90bf01f5"
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
    "url": "assets/js/app.14bd70b1.js",
    "revision": "1b135e46151f6c99ff449eeeadf8f225"
  },
  {
    "url": "assets/js/vendor.commons.eae05673.js",
    "revision": "aa2cb07fd3edc6229155679a6e861c16"
  },
  {
    "url": "assets/js/vendor.vue.ec309bc8.js",
    "revision": "d16aa6e2b2e70d1dbde6a44c2c84fc11"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "e55bb50092843120bc4a0865e047db1b"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "e91065a17203dbcf51a2326c4329bcc1"
  },
  {
    "url": "blogs/charles.html",
    "revision": "89ad4c13da99d67640d831bb7a321516"
  },
  {
    "url": "blogs/index.html",
    "revision": "95f8f20cfd0b51902f90b7e14e55ed64"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "edab2c222c9ad35b2e6453c1a043e8e9"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "197a34aa699f8563873613061c185cc9"
  },
  {
    "url": "blogs/vps.html",
    "revision": "d1bc00fc8a839fe8c9b96c572024e691"
  },
  {
    "url": "develop/doc.html",
    "revision": "6ae1d6aa59234d270808361b8fec612b"
  },
  {
    "url": "develop/frame.html",
    "revision": "1a6bac91e82fe24562a46fdab894f9ac"
  },
  {
    "url": "develop/ide.html",
    "revision": "d66fe5222b6db1c6464248e8babb5438"
  },
  {
    "url": "develop/index.html",
    "revision": "95ec88fe6abdd08dd6d1aa0d8f4decde"
  },
  {
    "url": "develop/map.html",
    "revision": "c39fa202de0e192390e8492e899adfd2"
  },
  {
    "url": "develop/others.html",
    "revision": "a06d33b70af99879bd7cc6323821081c"
  },
  {
    "url": "index.html",
    "revision": "d6f0ac9593c86e481e32ce871d7941fc"
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
