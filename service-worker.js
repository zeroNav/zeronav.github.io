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
    "revision": "e552498cd7aa19d982e0ecad7d122643"
  },
  {
    "url": "assets/css/0.styles.ab8ea140.css",
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
    "url": "assets/js/vendor.commons.ab8ea140.js",
    "revision": "9feff62e96f24b9ce9192d86b5ea7f5f"
  },
  {
    "url": "assets/js/vendor.vue.d7ff97ab.js",
    "revision": "d74c6620425c45821e637649470e827d"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "6a6300b7d3f9346583a5d97b72b8adb6"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "7c130cdd057bfbc0cf18a5bb4e410a60"
  },
  {
    "url": "blogs/charles.html",
    "revision": "6dba2657d062de65dadf7af298020ba2"
  },
  {
    "url": "blogs/index.html",
    "revision": "70ef4261e8ead0a867aac0cea0188184"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "5757952be7d482a727e0ab093c132db1"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "6b5bfdc0e348dda7510790fa9c724a43"
  },
  {
    "url": "blogs/vps.html",
    "revision": "a90b35f067366b6b10b2f19c3549d6e2"
  },
  {
    "url": "develop/doc.html",
    "revision": "1b0b28818f877232a964a8f98e03ae4e"
  },
  {
    "url": "develop/frame.html",
    "revision": "8f07e5a2d6676f679f9217e4f0b74525"
  },
  {
    "url": "develop/ide.html",
    "revision": "89e70748f5aa1149506cde08e75e8cdc"
  },
  {
    "url": "develop/index.html",
    "revision": "9b98a33bbd27d6db044a97098ca408fc"
  },
  {
    "url": "develop/map.html",
    "revision": "55132f22749555bf9692889836362100"
  },
  {
    "url": "develop/others.html",
    "revision": "299dad1a7624af04c6ab9b757e6bc180"
  },
  {
    "url": "develop/weapp.html",
    "revision": "48b803b8480e0dcdf09b04500d2fbcd2"
  },
  {
    "url": "index.html",
    "revision": "2a8e7618d7a5efd7c6c7ae5582050f60"
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
