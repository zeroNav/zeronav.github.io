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
    "revision": "1241f8ca3a63a5c32ed7a1b6f59b1c3b"
  },
  {
    "url": "assets/css/0.styles.f7d3d3e9.css",
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
    "url": "assets/js/vendor.commons.f7d3d3e9.js",
    "revision": "557176848ef2171be04dccf7964c3257"
  },
  {
    "url": "assets/js/vendor.vue.342b164c.js",
    "revision": "068e673eb3b59986a6548b2312c1a24e"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "3fcf84c95d139fb761f895048d496b06"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "28ea2bfa432bcc7c8d7668d6b02ceef3"
  },
  {
    "url": "blogs/index.html",
    "revision": "5cef82fdd3733864e2fe6917e4da43e4"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "2bad34af3eeabe9fff5959b7eb548793"
  },
  {
    "url": "blogs/vps.html",
    "revision": "a6dd939c7562d6b3fb2327c928990e7b"
  },
  {
    "url": "develop/doc.html",
    "revision": "54ee816bf0e355ab6466ac01ef418684"
  },
  {
    "url": "develop/frame.html",
    "revision": "0c71122f1238d213033c46c4402aad52"
  },
  {
    "url": "develop/ide.html",
    "revision": "2ebe7fd4f6afe48dd201a99dfd78e2fd"
  },
  {
    "url": "develop/index.html",
    "revision": "25ee8d04113af84467a3c35d852f72a2"
  },
  {
    "url": "develop/map.html",
    "revision": "892fce6c85da1f754ddcafcffa4188f5"
  },
  {
    "url": "develop/others.html",
    "revision": "e3e945f189dd7c841c312327d96435e8"
  },
  {
    "url": "develop/weapp.html",
    "revision": "27d701eed11d93c845f0117ae707974e"
  },
  {
    "url": "index.html",
    "revision": "7552ab3ee106815b55d8765771d0036c"
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
