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
    "revision": "5ba5fc937866aa44345f61efe6934d0b"
  },
  {
    "url": "assets/css/0.styles.be10d499.css",
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
    "url": "assets/js/vendor.commons.be10d499.js",
    "revision": "8ed0015b9cdb3538a9d8d9e1e1df5713"
  },
  {
    "url": "assets/js/vendor.vue.342b164c.js",
    "revision": "068e673eb3b59986a6548b2312c1a24e"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "90c33a671992733b7f47815685bb1a01"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "46481685dedb057020b2571f0fc9ac86"
  },
  {
    "url": "blogs/index.html",
    "revision": "4dd064eca07b08cb26ab0e8bc5994854"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "d5cb5dda846cabb25ed3b839d33d12d1"
  },
  {
    "url": "blogs/vps.html",
    "revision": "724e3b64e82ea3255f738e83b62bb73b"
  },
  {
    "url": "develop/doc.html",
    "revision": "ecbb696cb2cd6281148e935085e79462"
  },
  {
    "url": "develop/frame.html",
    "revision": "bfde2a15ae08c04bc94d54fcb189b631"
  },
  {
    "url": "develop/ide.html",
    "revision": "c0045b07bf40a5a29dbcfed02e8aed92"
  },
  {
    "url": "develop/index.html",
    "revision": "ffc77e64d71d565c69469c9a541f25cb"
  },
  {
    "url": "develop/map.html",
    "revision": "006e13a9ae70304e5a55def6fe1e5955"
  },
  {
    "url": "develop/others.html",
    "revision": "a69d367c82fc0ea86634d1885bfde03a"
  },
  {
    "url": "develop/weapp.html",
    "revision": "a1a7b9b139f814518e03a323ede5a82c"
  },
  {
    "url": "index.html",
    "revision": "2d3c4b3c58394d4548e77a587a5b01ac"
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
