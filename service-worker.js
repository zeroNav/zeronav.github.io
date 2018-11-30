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
    "revision": "94c1079cffec7317ed188180ca913033"
  },
  {
    "url": "assets/css/0.styles.bbf35f07.css",
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
    "url": "assets/js/vendor.commons.bbf35f07.js",
    "revision": "6af765c1de2e7cffb89207a66ddee967"
  },
  {
    "url": "assets/js/vendor.vue.342b164c.js",
    "revision": "068e673eb3b59986a6548b2312c1a24e"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "0d20cc230f94fe0aef33ceb712fe79c6"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "461a0c292e23aa05a1f94a2b26f1f97c"
  },
  {
    "url": "blogs/index.html",
    "revision": "19a3ee88e24547d4e6f49f2006d9e909"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "117847a2af8a1172654b8eedbda47630"
  },
  {
    "url": "blogs/vps.html",
    "revision": "d80b05cb2792c3a565f842ec28d71989"
  },
  {
    "url": "develop/doc.html",
    "revision": "2a96849f06efa27bd0bdacd22b1ea491"
  },
  {
    "url": "develop/frame.html",
    "revision": "4ee133eacca1007868e4bc6cf83a3fef"
  },
  {
    "url": "develop/ide.html",
    "revision": "04cfa9f0a34fa0e45e29c33fa162c564"
  },
  {
    "url": "develop/index.html",
    "revision": "2c6b7321e584cfbb19bd159b0cef0212"
  },
  {
    "url": "develop/map.html",
    "revision": "43534de4302bbcac19bde61e5c19f984"
  },
  {
    "url": "develop/others.html",
    "revision": "8ac979a46824ad92eff17d47acb56236"
  },
  {
    "url": "develop/weapp.html",
    "revision": "9d2c7d09825ad6d5e413cd319ef58475"
  },
  {
    "url": "index.html",
    "revision": "f277ddecb480574610e69a7e8c831768"
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
