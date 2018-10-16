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
    "revision": "05635ae6b3ca496851d34ff8ec8bf700"
  },
  {
    "url": "assets/css/0.styles.136107de.css",
    "revision": "d1ded11eeb064d32852c5f2c5329ac98"
  },
  {
    "url": "assets/js/10.ef19e749.js",
    "revision": "fb2f9bd8c2056c2fc95b1ca41c2d1901"
  },
  {
    "url": "assets/js/11.89a9cfc0.js",
    "revision": "4591229851b9c63f89d7761ebf46dce4"
  },
  {
    "url": "assets/js/12.be7e25df.js",
    "revision": "824d58e022e0016fdd8f38d2d50d4d20"
  },
  {
    "url": "assets/js/13.646b70a2.js",
    "revision": "fb33da23c59eb5aec8e4952150f91167"
  },
  {
    "url": "assets/js/14.1552c88d.js",
    "revision": "1b5dc902872cb8622be99150a30f5c0f"
  },
  {
    "url": "assets/js/2.b76a33f9.js",
    "revision": "1cdb4078a100fdef4bbe5686fbf3691c"
  },
  {
    "url": "assets/js/3.7a691724.js",
    "revision": "df5658317a23acbf7a0c8f1c9e3d4c64"
  },
  {
    "url": "assets/js/4.b6175fe7.js",
    "revision": "956aeabd6b56c4b378ca25ff27bcf51f"
  },
  {
    "url": "assets/js/5.55028841.js",
    "revision": "0c9407df80efcd5ac416ae6154783300"
  },
  {
    "url": "assets/js/6.1732263f.js",
    "revision": "6e1f2e8222dd8ba0224646925f1abb6a"
  },
  {
    "url": "assets/js/7.9c76f993.js",
    "revision": "468c350315e4cd304b6e3b9c2d57acd5"
  },
  {
    "url": "assets/js/8.190b99c0.js",
    "revision": "508b0fb44ab5c089e54c9065649a3930"
  },
  {
    "url": "assets/js/9.38074aa1.js",
    "revision": "c053a24843538bebc7cf7ef34758e1b3"
  },
  {
    "url": "assets/js/app.2251164b.js",
    "revision": "a3fc3b4bf660d22677aedbe3a6c1b5da"
  },
  {
    "url": "assets/js/vendor.commons.136107de.js",
    "revision": "9eb0e6c9a10a15ae31277594d2aa94e9"
  },
  {
    "url": "assets/js/vendor.vue.342b164c.js",
    "revision": "068e673eb3b59986a6548b2312c1a24e"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "0cc705276cda8f876f55d583bfd1f2d7"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "17e67e1bb7ba6e4d5fcb05f51cde8842"
  },
  {
    "url": "blogs/index.html",
    "revision": "de1e545fecc20007c4a9c130cccbb2c6"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "08c405a9be8eb4286a73a70d4c3c2403"
  },
  {
    "url": "blogs/vps.html",
    "revision": "073ef3c6337292a3bf2b0829b11e7cd6"
  },
  {
    "url": "develop/doc.html",
    "revision": "8b5b0eba7111c6fc97a78280fbe88775"
  },
  {
    "url": "develop/frame.html",
    "revision": "62ba3e500dc87097fe3266ac27478df6"
  },
  {
    "url": "develop/ide.html",
    "revision": "46914bf830844038b6b0bd58e47f7551"
  },
  {
    "url": "develop/index.html",
    "revision": "24c760b23cc6a736e5cc5f61bb4fdb0c"
  },
  {
    "url": "develop/map.html",
    "revision": "400d5ad34de7e7448403f909beb524a1"
  },
  {
    "url": "develop/others.html",
    "revision": "213ea3c442c2d2570d0d50e5a6291c6b"
  },
  {
    "url": "develop/weapp.html",
    "revision": "0750bd4bb9e55aaf84a27b2bcb67e50c"
  },
  {
    "url": "index.html",
    "revision": "c0a85e98d4a76e39330d7009e67af5d7"
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
