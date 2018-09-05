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
    "revision": "932d7bce1d0e9147eb40c8b0940a229a"
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
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.6dda9b1b.js",
    "revision": "62743958309dab2c52ea9a790514ef3b"
  },
  {
    "url": "assets/js/4.1d4f3570.js",
    "revision": "d242946aae7c220695b1c2c176704f24"
  },
  {
    "url": "assets/js/5.5e8159d0.js",
    "revision": "3c3cbdab9c6949ae7e9d4baa206e076b"
  },
  {
    "url": "assets/js/6.6d57cefc.js",
    "revision": "540e9e607031b78b9565b571a806a10f"
  },
  {
    "url": "assets/js/7.009d3db5.js",
    "revision": "52d27e96bf991b8992436a9d856e7a7c"
  },
  {
    "url": "assets/js/8.53113b5e.js",
    "revision": "dacd3ab1735731db94172e580f9a7410"
  },
  {
    "url": "assets/js/app.2c52592a.js",
    "revision": "13f053923a7576700a0ee27a6a9f4659"
  },
  {
    "url": "blogs/index.html",
    "revision": "6adc0f6d0bcd76394bdb7163a8c37ab9"
  },
  {
    "url": "develop/index.html",
    "revision": "a6a64f1bb7a60e04908cb2c792ddc691"
  },
  {
    "url": "index.html",
    "revision": "968dd76bda12ab9d7ff3df689c1c725d"
  },
  {
    "url": "private/accounts.html",
    "revision": "cc0d6e8c2450645787ba0d35b43aec62"
  },
  {
    "url": "private/vps.html",
    "revision": "fb81f458dc9978dde19f8cbbc33e3ee2"
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
