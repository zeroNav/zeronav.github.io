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
    "revision": "345a84c11970ff6f83ffff082448232d"
  },
  {
    "url": "assets/css/0.styles.f3fa07a9.css",
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
    "url": "assets/js/vendor.commons.f3fa07a9.js",
    "revision": "6c69494888a7939afccf7b80c078b2dc"
  },
  {
    "url": "assets/js/vendor.vue.342b164c.js",
    "revision": "068e673eb3b59986a6548b2312c1a24e"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "e88bef7a59c2bf9d28e6063cc4142a1e"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "9f06de02c2a30429fcce886c11f965f2"
  },
  {
    "url": "blogs/index.html",
    "revision": "49855c64df99271f0e384744ab2aa3af"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "fe2438f6fbdc7c889306ac5c9983160f"
  },
  {
    "url": "blogs/vps.html",
    "revision": "bdedc2f7e1ff1c11fe7e24e3109a21d6"
  },
  {
    "url": "develop/doc.html",
    "revision": "e8ce3e5f6b67b8bc819441ef5dbafe30"
  },
  {
    "url": "develop/frame.html",
    "revision": "46720d7369ebb469cb4dffa5c0782a6e"
  },
  {
    "url": "develop/ide.html",
    "revision": "eb40187d0cb503b4882a09fcaf8b4cb6"
  },
  {
    "url": "develop/index.html",
    "revision": "dde09065b9e720831d03b7c67fb0af34"
  },
  {
    "url": "develop/map.html",
    "revision": "85875a828c3b57a78f406cdf2f3c4c92"
  },
  {
    "url": "develop/others.html",
    "revision": "ab1be764e190261f0cb3c429d1e0ab58"
  },
  {
    "url": "develop/weapp.html",
    "revision": "62f7ffb55eb6f06d6e824abc81b70fa7"
  },
  {
    "url": "index.html",
    "revision": "b0cd197197f5e590cbbb045c70659004"
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
