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
    "revision": "d4a9a318b229e6faabd447932628adfc"
  },
  {
    "url": "assets/css/0.styles.d9aac75a.css",
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
    "url": "assets/js/vendor.commons.d9aac75a.js",
    "revision": "3dea8585fb1c212039e908680e873674"
  },
  {
    "url": "assets/js/vendor.vue.342b164c.js",
    "revision": "068e673eb3b59986a6548b2312c1a24e"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "c7f69e59755d130fe4f6861b5502bc36"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "fdafa95464544a3c84885f7e78636d66"
  },
  {
    "url": "blogs/index.html",
    "revision": "6f3f8b7d2315b9c23a8e854984b1b1db"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "0428e90c2a0ce490e15e76781553e204"
  },
  {
    "url": "blogs/vps.html",
    "revision": "a78169b99f80fe6acb1bc50e7fbfb04f"
  },
  {
    "url": "develop/doc.html",
    "revision": "7f9b89f3fff9a816a531d8c03595a460"
  },
  {
    "url": "develop/frame.html",
    "revision": "d1ff589d1c6a7586e14267b2c5d0a00f"
  },
  {
    "url": "develop/ide.html",
    "revision": "1cdd4cb3004f73e7e5601882977bfa1b"
  },
  {
    "url": "develop/index.html",
    "revision": "8a9ae9e0e200124339513eea96ffd347"
  },
  {
    "url": "develop/map.html",
    "revision": "81bad399d749c5f7c9e488a02963d393"
  },
  {
    "url": "develop/others.html",
    "revision": "bad347c04fdd4a9b7f67678ad12038e7"
  },
  {
    "url": "develop/weapp.html",
    "revision": "045e5f1039fd06f2c92efdc2c9446c9f"
  },
  {
    "url": "index.html",
    "revision": "08a8ba12aaf294f33807fbfe59bf61c1"
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
