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
    "revision": "0578bce8034e19f8cb119b6d12e70e2d"
  },
  {
    "url": "assets/css/0.styles.187cfe76.css",
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
    "url": "assets/js/vendor.commons.187cfe76.js",
    "revision": "020e6469911c947261c4d805ff21e11d"
  },
  {
    "url": "assets/js/vendor.vue.d7ff97ab.js",
    "revision": "d74c6620425c45821e637649470e827d"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "c4ef5395f67deef429963e2b44299b62"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "da021914630e8298497c4bb28acbfbcf"
  },
  {
    "url": "blogs/charles.html",
    "revision": "4d00946e372b7957504b548f6b4f307d"
  },
  {
    "url": "blogs/index.html",
    "revision": "ad83ba0951c5854ad59b522fac109614"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "dcb93a605b498c8f18f30044172a2dd5"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "0aa18f4561ab64d0aaa24edba07882f5"
  },
  {
    "url": "blogs/vps.html",
    "revision": "1fe962b80c96f30f47fe8b40d1e859da"
  },
  {
    "url": "develop/doc.html",
    "revision": "0fa559a3ee02de2900f4f1029a944c53"
  },
  {
    "url": "develop/frame.html",
    "revision": "559293c088b494c6c8954b4b7719c3b4"
  },
  {
    "url": "develop/ide.html",
    "revision": "816668490d96c39561b8bbd7a1446a19"
  },
  {
    "url": "develop/index.html",
    "revision": "62fbb5c81309430f7a78e8b535ce0575"
  },
  {
    "url": "develop/map.html",
    "revision": "d06236bf41050a54806a893a0619b6a0"
  },
  {
    "url": "develop/others.html",
    "revision": "52fc8a159d067a330ecd2394310eb6a1"
  },
  {
    "url": "develop/weapp.html",
    "revision": "2d8b6cbbe08412890bb6f7f134229018"
  },
  {
    "url": "index.html",
    "revision": "5f60f3ac2176015bfb2a48ac1c336ece"
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
