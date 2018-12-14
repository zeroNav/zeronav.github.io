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
    "revision": "c3f745360b8ad945afb338a0d9a0ac02"
  },
  {
    "url": "assets/css/0.styles.3fe32353.css",
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
    "url": "assets/js/vendor.commons.3fe32353.js",
    "revision": "e7d63fff0081358c4978a42776f30d79"
  },
  {
    "url": "assets/js/vendor.vue.342b164c.js",
    "revision": "068e673eb3b59986a6548b2312c1a24e"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "353b14f023c64dc39fcfbb8a57e32826"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "1e2c47d83bc091a9407ee7fdd96b6201"
  },
  {
    "url": "blogs/index.html",
    "revision": "3180db409af6770ec93c09b8e14538d6"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "75ac7c13533b2601ca1e3406717c3cc0"
  },
  {
    "url": "blogs/vps.html",
    "revision": "733063361910c4ff10d36d4be61781cd"
  },
  {
    "url": "develop/doc.html",
    "revision": "f356a811b339b5f0a1cbeea1eac4e81d"
  },
  {
    "url": "develop/frame.html",
    "revision": "cdd2faa94dceff2c9607db428f1dfd37"
  },
  {
    "url": "develop/ide.html",
    "revision": "ef204c12bebb18eb3c6a468ba0302b0b"
  },
  {
    "url": "develop/index.html",
    "revision": "4924a94191fe9ef82253068c4dea9147"
  },
  {
    "url": "develop/map.html",
    "revision": "39c8828d9b387129196669556be02ea6"
  },
  {
    "url": "develop/others.html",
    "revision": "1d1639f95a4f4a8c352cb1b3a3df26ab"
  },
  {
    "url": "develop/weapp.html",
    "revision": "570409d47833f65a8a199585e79debfa"
  },
  {
    "url": "index.html",
    "revision": "646ba7c382bd9426ebaf93c2f08aa564"
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
