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
    "revision": "a43bd02e2e0f8d95bd74dbb1fd3b0090"
  },
  {
    "url": "assets/css/0.styles.f3e0d2ee.css",
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
    "url": "assets/js/8.b4a70e5e.js",
    "revision": "75125dd6b91ed51cfcc5e4a89146e639"
  },
  {
    "url": "assets/js/9.9cb0c7d4.js",
    "revision": "78a21f460698282da050828bce1bac11"
  },
  {
    "url": "assets/js/app.89977c79.js",
    "revision": "dee95be99d87397b5a1e742bf52e8ef1"
  },
  {
    "url": "assets/js/vendor.commons.f3e0d2ee.js",
    "revision": "7cffdf1a8674fd8c512e483c50c851ca"
  },
  {
    "url": "assets/js/vendor.vue.342b164c.js",
    "revision": "068e673eb3b59986a6548b2312c1a24e"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "80d1792b2a553de9f4c555b2430d6301"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "a42749f0c7b4548aecf8dd520ac7fd82"
  },
  {
    "url": "blogs/index.html",
    "revision": "54263102922fe5559d851a1351bae972"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "8938f3c9e237b7da132708dacf4757fd"
  },
  {
    "url": "blogs/vps.html",
    "revision": "48a8fc0e896429177b88c6e51e69fa1a"
  },
  {
    "url": "develop/doc.html",
    "revision": "9a0bbad70dcfad59b5f68b5448e9b745"
  },
  {
    "url": "develop/frame.html",
    "revision": "c5b03610a6df6ced3dab165f0f25318a"
  },
  {
    "url": "develop/ide.html",
    "revision": "ea75db2b93d289e1c3d03c5f77dc5d11"
  },
  {
    "url": "develop/index.html",
    "revision": "5632116222c4e9899b8ece2a7fc8a626"
  },
  {
    "url": "develop/map.html",
    "revision": "b5b81ae38458a882d87382ef041798ec"
  },
  {
    "url": "develop/others.html",
    "revision": "d33525da241466077619ad37789c9c17"
  },
  {
    "url": "develop/weapp.html",
    "revision": "a6779b711bb5f35eb2335c6355811dc0"
  },
  {
    "url": "index.html",
    "revision": "63a7d7b71c3c4f613c61a18b016be0c5"
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
