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
    "revision": "f5f4e69281d0dd785290fa0fc37a5647"
  },
  {
    "url": "assets/css/0.styles.4b3f6ebc.css",
    "revision": "14a656f0cb878c5ab67c1abed8d59f80"
  },
  {
    "url": "assets/js/10.5311c680.js",
    "revision": "1806a166eba1c10eb3d48213a476dbc3"
  },
  {
    "url": "assets/js/11.47a5f04e.js",
    "revision": "293ca2136b52f9f2197660faabea7cbd"
  },
  {
    "url": "assets/js/12.d33f79ce.js",
    "revision": "c4c0f04d5c719dfcaf1d05ffb46e893e"
  },
  {
    "url": "assets/js/13.46690a90.js",
    "revision": "82c7b3e5cb9b968b3862c9ef8267f01d"
  },
  {
    "url": "assets/js/14.0a1fb41e.js",
    "revision": "4e3e2a752da5b2c2b0c3fa609bad7fed"
  },
  {
    "url": "assets/js/15.5e0a7605.js",
    "revision": "e8c6d08d58693e21455aa7af75b18c21"
  },
  {
    "url": "assets/js/2.dfa3d317.js",
    "revision": "443e79a4cf01055b8a7efed035b61d62"
  },
  {
    "url": "assets/js/3.7a691724.js",
    "revision": "df5658317a23acbf7a0c8f1c9e3d4c64"
  },
  {
    "url": "assets/js/4.e5742c60.js",
    "revision": "ce80861366003f0051c95a0007256f2b"
  },
  {
    "url": "assets/js/5.8574f321.js",
    "revision": "7999d02a0104760e9e4155a52c22bb7c"
  },
  {
    "url": "assets/js/6.61c2716c.js",
    "revision": "c05184b20c04d0934aad9c2284b312e3"
  },
  {
    "url": "assets/js/7.9e958ecc.js",
    "revision": "bd863e7df1ba4a9eb2052e43f369d56c"
  },
  {
    "url": "assets/js/8.d54097fc.js",
    "revision": "2ee345c607afa9becebaa1619f4c09b0"
  },
  {
    "url": "assets/js/9.ba5b2948.js",
    "revision": "70663ce159b1ea902f3152b211e5b027"
  },
  {
    "url": "assets/js/app.e3cf06e1.js",
    "revision": "caaa6c1994a1e4c6e11a90d00a014c5c"
  },
  {
    "url": "assets/js/vendor.commons.4b3f6ebc.js",
    "revision": "433069e16a787c5a5c05b81a6bc275e5"
  },
  {
    "url": "assets/js/vendor.vue.ec309bc8.js",
    "revision": "d16aa6e2b2e70d1dbde6a44c2c84fc11"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "ed787e38b6f0501322ad9bc63f177f57"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "63234952639f4b15fcefc2b27150d167"
  },
  {
    "url": "blogs/index.html",
    "revision": "379aef78ae4366c8ffbc92ebfc0198f3"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "e99adf89d783f49c5a6dba55ab1bf7b2"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "5c1bd1b242ca194223169788d5286939"
  },
  {
    "url": "blogs/vps.html",
    "revision": "57419848009316f730d0990db6591e7e"
  },
  {
    "url": "develop/doc.html",
    "revision": "b3c36f93336e51078b5dfa7c0b738979"
  },
  {
    "url": "develop/frame.html",
    "revision": "317e9d08fcdb7fcf768ee7560d8c73ac"
  },
  {
    "url": "develop/ide.html",
    "revision": "3177d6c66962ff8fce2ef39e0ef1326e"
  },
  {
    "url": "develop/index.html",
    "revision": "16b9f391b5ec617e3036d294c58fdf7d"
  },
  {
    "url": "develop/map.html",
    "revision": "b09a82a547b0d55f0244615d3c2aae8b"
  },
  {
    "url": "develop/others.html",
    "revision": "44b5241d58efcb4037aded112af1cebc"
  },
  {
    "url": "develop/weapp.html",
    "revision": "e014a0774115b884c8e024a50a4464c2"
  },
  {
    "url": "index.html",
    "revision": "38173b8309c63ead7c7b83bd299588bd"
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
