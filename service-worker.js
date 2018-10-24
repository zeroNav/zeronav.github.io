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
    "revision": "59de2614435593e7b415a7321776a074"
  },
  {
    "url": "assets/css/0.styles.108ea542.css",
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
    "url": "assets/js/5.22585a6f.js",
    "revision": "8a1c28b0959c7a3e3a1215474a07f13e"
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
    "url": "assets/js/app.71312cc7.js",
    "revision": "66c0468ea97326ed457bac5b556a82a2"
  },
  {
    "url": "assets/js/vendor.commons.108ea542.js",
    "revision": "8c4e4a0172491d169122307c6422f479"
  },
  {
    "url": "assets/js/vendor.vue.342b164c.js",
    "revision": "068e673eb3b59986a6548b2312c1a24e"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "edbee044c1d73a9642dc62e86c1dfd51"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "8e68a05a66c0c35de7d5cd987bc2ec40"
  },
  {
    "url": "blogs/index.html",
    "revision": "57aa70d4b7a6c592650b690f74e0a5ab"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "37c123482343d97e2f96d62cd6a1ded8"
  },
  {
    "url": "blogs/vps.html",
    "revision": "f643189ecf0b18402b33f8bea898b0d2"
  },
  {
    "url": "develop/doc.html",
    "revision": "5c30f595c3e32dd8de9185f00d61be76"
  },
  {
    "url": "develop/frame.html",
    "revision": "c6b9380ade318439aabd107862c52829"
  },
  {
    "url": "develop/ide.html",
    "revision": "805ae3b496a6a2fe626a01532d68c1c7"
  },
  {
    "url": "develop/index.html",
    "revision": "7d59220842c3d8ef0871e7760c06780b"
  },
  {
    "url": "develop/map.html",
    "revision": "13e8b92b8e88b792c52058310af3cef3"
  },
  {
    "url": "develop/others.html",
    "revision": "bcf9279325dd333e1759b1c31472c7f8"
  },
  {
    "url": "develop/weapp.html",
    "revision": "c75d55a8df45d8abc186aff391829888"
  },
  {
    "url": "index.html",
    "revision": "d584bd1c0f26a8c1f6a1f50f736febaa"
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
