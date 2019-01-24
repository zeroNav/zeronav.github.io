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
    "revision": "9cbf975c2158c39c27692fcf70a453f0"
  },
  {
    "url": "assets/css/0.styles.252c44ec.css",
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
    "url": "assets/js/9.81135d1a.js",
    "revision": "91bec41150a5254096ace1162010ef2f"
  },
  {
    "url": "assets/js/app.7597addd.js",
    "revision": "12a8870bf7eab7152ccc36af80d03e6c"
  },
  {
    "url": "assets/js/vendor.commons.252c44ec.js",
    "revision": "e8031aa5ddbc025de475f7e48cea20ff"
  },
  {
    "url": "assets/js/vendor.vue.d7ff97ab.js",
    "revision": "d74c6620425c45821e637649470e827d"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "4227ddc5220e9295e0556443f3bf42fa"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "cb23cf831087230cb6a0e6e6a97a3c09"
  },
  {
    "url": "blogs/charles.html",
    "revision": "cd3718ef87e784f924ecede226b46f7d"
  },
  {
    "url": "blogs/index.html",
    "revision": "5a423601d3118b67bede6e5db2557e04"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "cbe8fac1319753d0e32baf3d9ea5d482"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "239955e23c514ab7a9cd93fc1f87c7fa"
  },
  {
    "url": "blogs/vps.html",
    "revision": "f7ccc2826c9bafdfaa67bc5a91815b27"
  },
  {
    "url": "develop/doc.html",
    "revision": "ea969b8377f20eb0bf1c4d7823a279fc"
  },
  {
    "url": "develop/frame.html",
    "revision": "7f0807bd02bb584d905bccde7dc01c0e"
  },
  {
    "url": "develop/ide.html",
    "revision": "f034dfb93e75b759355e12538f4c0016"
  },
  {
    "url": "develop/index.html",
    "revision": "4869332f859c8b1f34267240e453c8e5"
  },
  {
    "url": "develop/map.html",
    "revision": "f21243a6a890f9ef8eedd0b92a51f237"
  },
  {
    "url": "develop/others.html",
    "revision": "421d84cf411fa2955e37b853cbaf8194"
  },
  {
    "url": "develop/weapp.html",
    "revision": "a6e1962cf8a31b617c23338b98405717"
  },
  {
    "url": "index.html",
    "revision": "08083ccf93bb48676a5a040365eef866"
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
