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
    "revision": "ae878cef97e6d442d147c507b4165069"
  },
  {
    "url": "assets/css/0.styles.38577a4d.css",
    "revision": "14a656f0cb878c5ab67c1abed8d59f80"
  },
  {
    "url": "assets/js/10.11515191.js",
    "revision": "17154bf6f92e156dd9e679fa3e95d3a6"
  },
  {
    "url": "assets/js/11.e4b05b63.js",
    "revision": "d9d8c68db3656d1ccdeed2443eef597b"
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
    "url": "assets/js/15.f4266328.js",
    "revision": "6c904c2460b88e2556c5bfe409a9deb8"
  },
  {
    "url": "assets/js/16.b39855b5.js",
    "revision": "6edf17bfad34d7efea323d3e31b66512"
  },
  {
    "url": "assets/js/2.a904e024.js",
    "revision": "e0c9778a85b5480797b8d71c3fc1a90b"
  },
  {
    "url": "assets/js/3.922dd2bc.js",
    "revision": "6f976b99191842b654e7935b904776b8"
  },
  {
    "url": "assets/js/4.ed37b88d.js",
    "revision": "9390737a1ffc134adcd2fff19e43ebf4"
  },
  {
    "url": "assets/js/5.24a44723.js",
    "revision": "121f62ba0636725c89d84ffb0b44d407"
  },
  {
    "url": "assets/js/6.5afa2b68.js",
    "revision": "ef07b0055164ea5e4d2564a0f9e5eced"
  },
  {
    "url": "assets/js/7.001d3703.js",
    "revision": "3e19d27e9270cdb8747700bd8479af1b"
  },
  {
    "url": "assets/js/8.670ba94a.js",
    "revision": "4369c0fc35f61ebafb2ea6baaa16f144"
  },
  {
    "url": "assets/js/9.275658e7.js",
    "revision": "0f4b7516d170a4c53a33ec24224440fe"
  },
  {
    "url": "assets/js/app.4f9b81f8.js",
    "revision": "873aee0f829a7b6072560d3b4944fc14"
  },
  {
    "url": "assets/js/vendor.commons.38577a4d.js",
    "revision": "424bd0c2b8e9d65d39fde87bb3aa43b7"
  },
  {
    "url": "assets/js/vendor.vue.d7ff97ab.js",
    "revision": "d74c6620425c45821e637649470e827d"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "77a8bbf69ca5a86e900ba7c6e5b7d183"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "251d97f92de549908ebe0a8dd766def9"
  },
  {
    "url": "blogs/charles.html",
    "revision": "8f01e7871cb1107837e3bdb4e41443ad"
  },
  {
    "url": "blogs/index.html",
    "revision": "717b3d36f80518a7295bf301b40bab8a"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "a1f6db587476a8e27ae7756ae08a939a"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "d579b3f87aa87c6dac8cd1589dc137dd"
  },
  {
    "url": "blogs/vps.html",
    "revision": "38cdac85bdea8a377fbd3d976e7f067f"
  },
  {
    "url": "develop/doc.html",
    "revision": "aea07d7c4ae889d55a41e4fecbe398d9"
  },
  {
    "url": "develop/frame.html",
    "revision": "26f4e05e1b83d9b80be2d04344fd4264"
  },
  {
    "url": "develop/ide.html",
    "revision": "f21cf9ee0088b7b980b48e89472f3e5f"
  },
  {
    "url": "develop/index.html",
    "revision": "558f13da3bbe1b6e4f5c9c525c8875eb"
  },
  {
    "url": "develop/map.html",
    "revision": "56c340f8c3b8f1060bb86442618c676b"
  },
  {
    "url": "develop/others.html",
    "revision": "833927c5ddb6c2f756b78d05c9daa492"
  },
  {
    "url": "develop/weapp.html",
    "revision": "be4d464c4919d7e147321eebf43a1c23"
  },
  {
    "url": "index.html",
    "revision": "e2073390f858bfe2014e17e44d79c9f9"
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
