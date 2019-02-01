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
    "revision": "6590e6138a3af4c6d4ae443ab545ec64"
  },
  {
    "url": "assets/css/0.styles.4d19385d.css",
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
    "url": "assets/js/vendor.commons.4d19385d.js",
    "revision": "08d6a79605ad4f2a2a88321862bbb935"
  },
  {
    "url": "assets/js/vendor.vue.d7ff97ab.js",
    "revision": "d74c6620425c45821e637649470e827d"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "f10af61b7e998d8179338e6f36cdcfb9"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "782fcf5cae1c940a5ba60b91e3b62ec3"
  },
  {
    "url": "blogs/charles.html",
    "revision": "dbd80a979766ca086b8d00a53e066fbb"
  },
  {
    "url": "blogs/index.html",
    "revision": "1c52a0e9fc5302c53e9896f2b7a54749"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "d5bc142c92b42f6199092aae0726a4b1"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "c2ab479dc1c7a52d691944c74ac70c03"
  },
  {
    "url": "blogs/vps.html",
    "revision": "aca567b8eaf854eb6454435aee020c0c"
  },
  {
    "url": "develop/doc.html",
    "revision": "b2d22d550186d7ae804378ffa43d03e2"
  },
  {
    "url": "develop/frame.html",
    "revision": "163b3ebc46a228c9d2e4c593b965300a"
  },
  {
    "url": "develop/ide.html",
    "revision": "28a92319c5c9225aa7d9401e57b000c4"
  },
  {
    "url": "develop/index.html",
    "revision": "c381953bb092c15c50588fb92f5388d7"
  },
  {
    "url": "develop/map.html",
    "revision": "b11762f94fa2d1485bf3e3a49d2b74dd"
  },
  {
    "url": "develop/others.html",
    "revision": "7f84f98a76d887f3eaed2fec14983082"
  },
  {
    "url": "develop/weapp.html",
    "revision": "1c60ac70af30020deb052cd10d1f083f"
  },
  {
    "url": "index.html",
    "revision": "4d316af23662020123a236907a8c1579"
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
