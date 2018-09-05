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
    "revision": "e54cb61c5ea96f8db6e4a9b7130f0348"
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
    "url": "assets/js/app.9abf7fc8.js",
    "revision": "199ff16245384e614b65a8427471a514"
  },
  {
    "url": "blogs/index.html",
    "revision": "589ec93a14e2f079f71db6ba3e729f11"
  },
  {
    "url": "develop/index.html",
    "revision": "7330598acdbf0ff6dc565f8116db6d2b"
  },
  {
    "url": "index.html",
    "revision": "43eec03791b723e0f5fefe65366c5651"
  },
  {
    "url": "private/accounts.html",
    "revision": "ec7799abdf8a741286db801dbfeef298"
  },
  {
    "url": "private/vps.html",
    "revision": "cbc5361a801cdc2556b413850ef966f4"
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
