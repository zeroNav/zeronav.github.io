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
    "revision": "ee0fcaf5698ebf3398564ebafcd4006c"
  },
  {
    "url": "assets/css/0.styles.15afa520.css",
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
    "url": "assets/js/6.5cdf7eb1.js",
    "revision": "3bcf2edef13b68f59aa81f5f7cba80c3"
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
    "url": "assets/js/app.92deb6f5.js",
    "revision": "6929525a1c7336f82e295683172a3261"
  },
  {
    "url": "assets/js/vendor.commons.15afa520.js",
    "revision": "38ed3403f6833baeefaf49b870ac69da"
  },
  {
    "url": "assets/js/vendor.vue.ec309bc8.js",
    "revision": "d16aa6e2b2e70d1dbde6a44c2c84fc11"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "e54da396d4f3eddd262a20425d2d76e0"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "49a20d8324e9f7802600255dda3abaa4"
  },
  {
    "url": "blogs/index.html",
    "revision": "e9c14d29db9c2caee95ce61e7ba9e97b"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "7952b40bd9d0a09ef7fa1b5023c3c541"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "e2ddb0c57493f5e210429587611c673e"
  },
  {
    "url": "blogs/vps.html",
    "revision": "23cf0e7f7d9a951d9ea71ba55f6e58ef"
  },
  {
    "url": "develop/doc.html",
    "revision": "4fff8d6c86fa7e6bfe4af4c9e5a84dca"
  },
  {
    "url": "develop/frame.html",
    "revision": "fa5c137edfcee0f0bde92a38ff7e0ea0"
  },
  {
    "url": "develop/ide.html",
    "revision": "bbbe543f8b1ba1e81ff707f6fe841bd6"
  },
  {
    "url": "develop/index.html",
    "revision": "6aa74b87c3965914646dada1dd575a7f"
  },
  {
    "url": "develop/map.html",
    "revision": "e4422ac8e08e09a4e1c39facda6715b0"
  },
  {
    "url": "develop/others.html",
    "revision": "1b5c1050493716b89d1132324e297e94"
  },
  {
    "url": "develop/weapp.html",
    "revision": "19465354563b9e5f6ff197a2c8708460"
  },
  {
    "url": "index.html",
    "revision": "b4e3878b4d572f0627db2855a3249d7c"
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
