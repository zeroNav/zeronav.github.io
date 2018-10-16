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
    "revision": "3145d532bf178b704360a992fdeb0378"
  },
  {
    "url": "assets/css/0.styles.9751d009.css",
    "revision": "d1ded11eeb064d32852c5f2c5329ac98"
  },
  {
    "url": "assets/js/10.ad7183a6.js",
    "revision": "7c3e4c58eb94f4ab1158887a6a209b76"
  },
  {
    "url": "assets/js/11.190733d6.js",
    "revision": "3c17deb3ff1620c8c12ac1fa36012cc3"
  },
  {
    "url": "assets/js/12.f87c1267.js",
    "revision": "f78fcb78758ba9869ca6b7ce64000b3f"
  },
  {
    "url": "assets/js/2.ee1a1ac9.js",
    "revision": "7c469522a16261bc58c28a2a83be7b6e"
  },
  {
    "url": "assets/js/3.dc757a5b.js",
    "revision": "828ec47329d5b3ca42e26353a2e1b8b7"
  },
  {
    "url": "assets/js/4.984d71f4.js",
    "revision": "d221583f280ab864a375274793679d77"
  },
  {
    "url": "assets/js/5.0c23ad87.js",
    "revision": "c4e73833171de3be545078668c361c46"
  },
  {
    "url": "assets/js/6.f1393d0e.js",
    "revision": "3e2cbc46789c1cf35a9683e0ab013800"
  },
  {
    "url": "assets/js/7.57f96f6d.js",
    "revision": "0e5319f78a314bd97570b9252ae0801d"
  },
  {
    "url": "assets/js/8.7bb4d01d.js",
    "revision": "220998c7fa51597045c93f02e01b35d0"
  },
  {
    "url": "assets/js/9.1fe2f30e.js",
    "revision": "c948b5df51fd0823d56996e83793ac7d"
  },
  {
    "url": "assets/js/app.7bbebd93.js",
    "revision": "fd3845ac03b20ecca454cf6ccee076ae"
  },
  {
    "url": "assets/js/vendor.commons.9751d009.js",
    "revision": "daa51d3fc9de43141b14563d299c15dd"
  },
  {
    "url": "assets/js/vendor.vue.96cf8a4c.js",
    "revision": "ca4941f7fc5db0371361854d1fd3fd07"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "13807149b8ac81458c7d91672e5dcbd3"
  },
  {
    "url": "blogs/index.html",
    "revision": "0f84e834fb4fb5b2f4cdcaf706cf2ac8"
  },
  {
    "url": "blogs/vps.html",
    "revision": "bbe097761366783e9065ab71b07f708d"
  },
  {
    "url": "develop/doc.html",
    "revision": "0583e21908c53256ba8fce7fed38fd53"
  },
  {
    "url": "develop/frame.html",
    "revision": "d6124e64c716224bae7861f5c80fec51"
  },
  {
    "url": "develop/ide.html",
    "revision": "933a89e3ca3fd27a51c74196e3411c6b"
  },
  {
    "url": "develop/index.html",
    "revision": "31cc51a8e47639354b34764e61544291"
  },
  {
    "url": "develop/map.html",
    "revision": "c4b5170bbfb51b0863adf90640abf431"
  },
  {
    "url": "develop/others.html",
    "revision": "5e5fe84b621048c1450caba1b5075ad3"
  },
  {
    "url": "develop/weapp.html",
    "revision": "c7fc90352468ab4bc023ae089033831d"
  },
  {
    "url": "index.html",
    "revision": "941b5a65433749be9ec40179316f48b7"
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
