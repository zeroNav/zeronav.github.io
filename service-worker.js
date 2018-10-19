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
    "revision": "37a185eeda83b15933aa4fc739b0ee73"
  },
  {
    "url": "assets/css/0.styles.f092214d.css",
    "revision": "14a656f0cb878c5ab67c1abed8d59f80"
  },
  {
    "url": "assets/js/10.11a85fec.js",
    "revision": "9b4fe36689f1264832504f7943bbb22f"
  },
  {
    "url": "assets/js/11.0e6242ab.js",
    "revision": "b06a0c9c66d674462ce3f3bf2223feb3"
  },
  {
    "url": "assets/js/12.2cef5a83.js",
    "revision": "596014f39901b60e583c13491d29bb2b"
  },
  {
    "url": "assets/js/13.72100f16.js",
    "revision": "2b5175944a1e964a89e3c5dcbbfcbc9e"
  },
  {
    "url": "assets/js/14.0dad0cca.js",
    "revision": "c1205efc4015d631fe1b7e7ddf6c6b9b"
  },
  {
    "url": "assets/js/2.87138612.js",
    "revision": "15983090aee67899aafa3d815064ea01"
  },
  {
    "url": "assets/js/3.acb319e8.js",
    "revision": "723359790981b5726a8830f9bfac0138"
  },
  {
    "url": "assets/js/4.c0d69005.js",
    "revision": "74cc7c4dceb480a33d9c1fe1c48daabc"
  },
  {
    "url": "assets/js/5.46c95a93.js",
    "revision": "f952dbe82a2ef3496c586c2f6faa91ef"
  },
  {
    "url": "assets/js/6.4bc4c678.js",
    "revision": "2b69686493b03fc591f4144f284532d3"
  },
  {
    "url": "assets/js/7.94161fa7.js",
    "revision": "069ece1de2dd836990e333f7ad0be6f8"
  },
  {
    "url": "assets/js/8.2f27cd6a.js",
    "revision": "ffc64d53eec53972bf64361603aa869f"
  },
  {
    "url": "assets/js/9.9cb0c7d4.js",
    "revision": "78a21f460698282da050828bce1bac11"
  },
  {
    "url": "assets/js/app.b602ac95.js",
    "revision": "aa765c3c19465bb8b4ebd41df175a0cc"
  },
  {
    "url": "assets/js/vendor.commons.f092214d.js",
    "revision": "891caf54cd14e8084c8b59597853ddcc"
  },
  {
    "url": "assets/js/vendor.vue.342b164c.js",
    "revision": "068e673eb3b59986a6548b2312c1a24e"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "5c229d557427f43e653b69ec8ae1ffaf"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "287c16d347f93f3264e77eb19980ff74"
  },
  {
    "url": "blogs/index.html",
    "revision": "9a2bf161072bf10c2d89d7b186a97bfa"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "383741b69b8f7c461ce4ba4b774337e9"
  },
  {
    "url": "blogs/vps.html",
    "revision": "bdbfdcedfa6d67d6ff3f36054802e9b1"
  },
  {
    "url": "develop/doc.html",
    "revision": "16c6159f718a772bee383967c94a34c3"
  },
  {
    "url": "develop/frame.html",
    "revision": "093dd9014971935fb89990239e9b0546"
  },
  {
    "url": "develop/ide.html",
    "revision": "ad4cb2f3a6e64504494cacadb92ecaae"
  },
  {
    "url": "develop/index.html",
    "revision": "cef8dbae6a4058439f9e4dfccf2f0fcc"
  },
  {
    "url": "develop/map.html",
    "revision": "0aff0b4d0573afe2b8de19ff55d26846"
  },
  {
    "url": "develop/others.html",
    "revision": "7a1eab31e54a4a250d8858d05838f874"
  },
  {
    "url": "develop/weapp.html",
    "revision": "d60d208429e06b182a2f1bfa9179909c"
  },
  {
    "url": "index.html",
    "revision": "84586547a7089b1c58605d3ed96925f8"
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
