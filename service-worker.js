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
    "revision": "51c24809a9f413c537a29b578c499407"
  },
  {
    "url": "assets/css/0.styles.fe9ae158.css",
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
    "url": "assets/js/vendor.commons.fe9ae158.js",
    "revision": "4bb422f6561d90712f5cdfaa5360703b"
  },
  {
    "url": "assets/js/vendor.vue.342b164c.js",
    "revision": "068e673eb3b59986a6548b2312c1a24e"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "4079fc803da845606d35542bddab7622"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "10faab8e32abf7709d2685f4e08a7ed6"
  },
  {
    "url": "blogs/index.html",
    "revision": "113a27bbdf41e9d2f565137c37066714"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "b9a77c6fcfeb6e821ecfda4b25cc59a2"
  },
  {
    "url": "blogs/vps.html",
    "revision": "be524605c3cfeef9fdf522805f1a3bbe"
  },
  {
    "url": "develop/doc.html",
    "revision": "af01825e19736dad3484428d9a2dc739"
  },
  {
    "url": "develop/frame.html",
    "revision": "36c62e2bcc16b297597cb2ce66d6fc76"
  },
  {
    "url": "develop/ide.html",
    "revision": "63dc6ee3b01132f2ee60a193a26f193d"
  },
  {
    "url": "develop/index.html",
    "revision": "a7e6f1bf79c7f0355a210454e904ba3d"
  },
  {
    "url": "develop/map.html",
    "revision": "efb5a915f42569e4ea1feaa620e3015a"
  },
  {
    "url": "develop/others.html",
    "revision": "e6b38a08eb9ae90c932d22dfd9cab690"
  },
  {
    "url": "develop/weapp.html",
    "revision": "09f18260e18672852bfd5a38852cd5dc"
  },
  {
    "url": "index.html",
    "revision": "a5d624906cf6eebf8c13d99a96853a2a"
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
