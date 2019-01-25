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
    "revision": "6c5e4a1ac4aa88286c346cd762b2e38b"
  },
  {
    "url": "assets/css/0.styles.3d334480.css",
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
    "url": "assets/js/15.0204b35d.js",
    "revision": "ed9d675849057443adcc7f0611991270"
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
    "url": "assets/js/app.e6dc5aa2.js",
    "revision": "170c5080abcfc5a9d9ecfdbbe845a052"
  },
  {
    "url": "assets/js/vendor.commons.3d334480.js",
    "revision": "f946560fd4a61919ef74e4e55f87af42"
  },
  {
    "url": "assets/js/vendor.vue.d7ff97ab.js",
    "revision": "d74c6620425c45821e637649470e827d"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "973f3c8876597bbefd0480c2a709ff3c"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "d56d98255631c7f3cc82467aa17fb214"
  },
  {
    "url": "blogs/charles.html",
    "revision": "bba638f654af1cadf48edecbf98ef52f"
  },
  {
    "url": "blogs/index.html",
    "revision": "9bf06f728b3d71919c87456f2c4f8c5b"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "b296191e1e0eda208a5adecb128e8b1c"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "21a3b24b8a13010eab5f51525280942c"
  },
  {
    "url": "blogs/vps.html",
    "revision": "073fc67297aa236c9d7f74ff81ec70f0"
  },
  {
    "url": "develop/doc.html",
    "revision": "ee0d007bb2471cbcf64687b24f287511"
  },
  {
    "url": "develop/frame.html",
    "revision": "23c05ead7d127d1e009564a17e546885"
  },
  {
    "url": "develop/ide.html",
    "revision": "43ff989fb18aa2dc73b80d1ad670c825"
  },
  {
    "url": "develop/index.html",
    "revision": "4195e2968ddb8cc88034a4abd70ec1eb"
  },
  {
    "url": "develop/map.html",
    "revision": "90f729ad219663cebba9342f39e93785"
  },
  {
    "url": "develop/others.html",
    "revision": "d353bae7bd50d9258c83336478971cbb"
  },
  {
    "url": "develop/weapp.html",
    "revision": "73a009296ebedb29e5022cbe502b5238"
  },
  {
    "url": "index.html",
    "revision": "13dbf213c0e8a299403096f6c8ea37f0"
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
