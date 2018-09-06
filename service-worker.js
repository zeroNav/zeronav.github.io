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
    "revision": "6c1bee8c87c8d81e07f5d955f6382f79"
  },
  {
    "url": "assets/css/0.styles.8c624c2c.css",
    "revision": "14a656f0cb878c5ab67c1abed8d59f80"
  },
  {
    "url": "assets/js/10.dae1c524.js",
    "revision": "1aaea4c0ea1574148b361bb79d2a698d"
  },
  {
    "url": "assets/js/11.367ec75a.js",
    "revision": "8503d213165fa48b44d975066c44f013"
  },
  {
    "url": "assets/js/12.8dd14f90.js",
    "revision": "149a06246bae6ac315e85790b9e677c5"
  },
  {
    "url": "assets/js/2.ed2137da.js",
    "revision": "646cfdf24bf32198b527c9a9618cb4d5"
  },
  {
    "url": "assets/js/3.8e571e79.js",
    "revision": "d4e964cbcb8b0d05e4a9a8f88f9521be"
  },
  {
    "url": "assets/js/4.08f58dd1.js",
    "revision": "9c4ba0c02c198ae554d8d9e74b8584b9"
  },
  {
    "url": "assets/js/5.392289ee.js",
    "revision": "1c97428ff60c5040e31bf49c876dd647"
  },
  {
    "url": "assets/js/6.3fcb4d59.js",
    "revision": "b6cb3bac0a1d42ab59a50151bcc29bae"
  },
  {
    "url": "assets/js/7.94906317.js",
    "revision": "aa90ee52d4e85bfc16b12b44ab7ba34d"
  },
  {
    "url": "assets/js/8.cfead895.js",
    "revision": "685a4329a0edc836a2fedba569b4a2cf"
  },
  {
    "url": "assets/js/9.1120697a.js",
    "revision": "4fa079972d404c8c6e43369d4d5c96fa"
  },
  {
    "url": "assets/js/app.6c30cdab.js",
    "revision": "0d6883926b72250cc010d9a4dd7b8924"
  },
  {
    "url": "assets/js/vendor.commons.8c624c2c.js",
    "revision": "62047b361f90f0dbb222da48f803639b"
  },
  {
    "url": "assets/js/vendor.vue.96cf8a4c.js",
    "revision": "ca4941f7fc5db0371361854d1fd3fd07"
  },
  {
    "url": "blogs/index.html",
    "revision": "677f502cb2bee9bb256d12b4751ea3d2"
  },
  {
    "url": "develop/doc.html",
    "revision": "89af780c2ba5451a005bbca10cd64102"
  },
  {
    "url": "develop/frame.html",
    "revision": "d24e5b94966dd1b76b6fb2cd759deac1"
  },
  {
    "url": "develop/ide.html",
    "revision": "9d7de11fea1584de92277ec7eeeb0508"
  },
  {
    "url": "develop/index.html",
    "revision": "a5344f44797b4ea3560cb3e7cb055602"
  },
  {
    "url": "develop/map.html",
    "revision": "599b65ddefeb02300f037de6418916d7"
  },
  {
    "url": "develop/others.html",
    "revision": "399f5dcab895254e4301e0a6e3db160e"
  },
  {
    "url": "develop/weapp.html",
    "revision": "a73d9ea8f96b9054442e8079a85e08c5"
  },
  {
    "url": "index.html",
    "revision": "4d498ece01cfe81f209c581485b58957"
  },
  {
    "url": "private/accounts.html",
    "revision": "473422f74e403f84a8de91e1762d14b0"
  },
  {
    "url": "private/vps.html",
    "revision": "2c8e18434955a41eac23aa26f0ef9ae9"
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
