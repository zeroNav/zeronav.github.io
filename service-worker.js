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
    "revision": "c0c2e5b0b4ac189eb624a6f55ab7ac01"
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
    "url": "assets/js/6.19b878d0.js",
    "revision": "df822994074b681a8f326813e45e191d"
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
    "url": "assets/js/app.16266c36.js",
    "revision": "18d9197c8ca4af4a27bf32706736374a"
  },
  {
    "url": "blogs/index.html",
    "revision": "9378a5a2e92052658badea0e7f8c07af"
  },
  {
    "url": "develop/doc.html",
    "revision": "c55b278c2314eca6a56fe0e6f87dc47b"
  },
  {
    "url": "develop/frame.html",
    "revision": "7e240b3022c5015c72429191d7593fc2"
  },
  {
    "url": "develop/ide.html",
    "revision": "9ee27fbb0bc5e243bdd045f1461c14d5"
  },
  {
    "url": "develop/index.html",
    "revision": "e4eaf12234ac36429bb603b696d52c18"
  },
  {
    "url": "develop/map.html",
    "revision": "d25072c844acaa855d740ee81e7e49f9"
  },
  {
    "url": "develop/others.html",
    "revision": "7dd30a662e20422a8241837309a28d89"
  },
  {
    "url": "develop/weapp.html",
    "revision": "e2dec770b8e1e8a5ff7b0f0f3c1a5123"
  },
  {
    "url": "index.html",
    "revision": "8fba2d3b5bed18ddb296549b41ea28e0"
  },
  {
    "url": "private/accounts.html",
    "revision": "782e6e68685ec77ca93e0a201cdf3b54"
  },
  {
    "url": "private/vps.html",
    "revision": "ca3fb03639763eee49bd7bc07fcdac02"
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
