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
    "revision": "ade344fee508f228722b363ccc9ebbe0"
  },
  {
    "url": "assets/css/0.styles.4c879ba9.css",
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
    "url": "assets/js/5.b3397ca0.js",
    "revision": "9c8584ee85c6f0a4a841f2b9be03b014"
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
    "url": "assets/js/app.3b9494ed.js",
    "revision": "9512cc01649d9a99da143abee4868f0d"
  },
  {
    "url": "assets/js/vendor.commons.4c879ba9.js",
    "revision": "b54bea2754dbbb525cb3d8484ba48f4e"
  },
  {
    "url": "assets/js/vendor.vue.342b164c.js",
    "revision": "068e673eb3b59986a6548b2312c1a24e"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "69f4c7521ab8cd0fd1d1ed5c3d2fcc37"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "63a817c03849199a8cc9721db6fffd02"
  },
  {
    "url": "blogs/index.html",
    "revision": "a535ef32ff4d944e946c86f12160f8fd"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "2fdd9bd7e05eddef64a383921476bb29"
  },
  {
    "url": "blogs/vps.html",
    "revision": "656c3d09449125de3d2c47fde11e7ab0"
  },
  {
    "url": "develop/doc.html",
    "revision": "c95da82f330d0f64f4bd48b904d3f80d"
  },
  {
    "url": "develop/frame.html",
    "revision": "537028add14740d987420ab71e341d8d"
  },
  {
    "url": "develop/ide.html",
    "revision": "0b0b951d7e8c26e596fdb666e4463877"
  },
  {
    "url": "develop/index.html",
    "revision": "01f7ff0f6d12c7fda1fdb06e0ade870a"
  },
  {
    "url": "develop/map.html",
    "revision": "3691867ab8ba25260a775f2ee305d29d"
  },
  {
    "url": "develop/others.html",
    "revision": "09c78c0d24d60f234144efbe37c2628e"
  },
  {
    "url": "develop/weapp.html",
    "revision": "20cecc3811f09105932ea7e2bcab6eff"
  },
  {
    "url": "index.html",
    "revision": "fab6ecb8b92374ef2378867258c133a8"
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
