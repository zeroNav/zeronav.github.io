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
    "revision": "fedd392811eac47cd04f2e2b1b0eaf54"
  },
  {
    "url": "assets/css/0.styles.4568b041.css",
    "revision": "2ed4c8df4ff33bc36857f179247b429c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cd3ab06f.js",
    "revision": "20cf2d9510470c06107e20c5de968b8f"
  },
  {
    "url": "assets/js/11.40502839.js",
    "revision": "6b016ccfdad19aa7c786dcc8e0e3bab0"
  },
  {
    "url": "assets/js/12.07a6c096.js",
    "revision": "068c57a06c12737b6730ab47d0bbb39d"
  },
  {
    "url": "assets/js/13.96691d44.js",
    "revision": "29072481c3ba026f315f057d99d4e5d4"
  },
  {
    "url": "assets/js/14.1b8fe438.js",
    "revision": "153646ac929198c81713d1b55d67591d"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.62844cd5.js",
    "revision": "f4f168d63b2d6e6f31f257af490f5248"
  },
  {
    "url": "assets/js/4.7a75c89b.js",
    "revision": "442e00239724502adb3f353df7f404e7"
  },
  {
    "url": "assets/js/5.4fc39e13.js",
    "revision": "8a898395c1c982fa16f6a8509bbab9b5"
  },
  {
    "url": "assets/js/6.9a566a4f.js",
    "revision": "af1a37f1dcbf9532c7d64a0027e3d708"
  },
  {
    "url": "assets/js/7.de1f6cd1.js",
    "revision": "42e31c65f2cb41ccb42f0d0bccf95041"
  },
  {
    "url": "assets/js/8.e2fe0b40.js",
    "revision": "94f64b85b3c2768cae38495fb4906d5c"
  },
  {
    "url": "assets/js/9.97312ff3.js",
    "revision": "f6f31bb9a92e3638bf002bef8e15fce4"
  },
  {
    "url": "assets/js/app.c6a501b5.js",
    "revision": "01d114eadc263f7ab8a43180b2c106db"
  },
  {
    "url": "blogs/index.html",
    "revision": "44999c57073909f0afe18389eae4df78"
  },
  {
    "url": "develop/doc.html",
    "revision": "6ebb858023317868889aea80caa541a6"
  },
  {
    "url": "develop/frame.html",
    "revision": "5fa2221c223d5aa2718ab8b6337fe8aa"
  },
  {
    "url": "develop/ide.html",
    "revision": "8bc1bfd9b919e93c945b1cf66b3f274d"
  },
  {
    "url": "develop/index.html",
    "revision": "15bf6179b3e1a22e3faff60a29b2e588"
  },
  {
    "url": "develop/map.html",
    "revision": "ab87c0f48d4b54fb0bfe04e1d31433f3"
  },
  {
    "url": "develop/others.html",
    "revision": "9451351fe91558ddbc48a622415d8d2e"
  },
  {
    "url": "develop/weapp.html",
    "revision": "363b65a0552c9b5c891ac0f35ef283ff"
  },
  {
    "url": "index.html",
    "revision": "1f1d403a5bd54b7b6a354935627a6613"
  },
  {
    "url": "private/accounts.html",
    "revision": "59fac19b0bc27150b9f074955481bf1d"
  },
  {
    "url": "private/vps.html",
    "revision": "72fe90644b6a339a3dc4cd1109ed4ca1"
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
