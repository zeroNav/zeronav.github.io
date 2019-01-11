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
    "revision": "68f4546d3b5d11862b9462ce5a8bd119"
  },
  {
    "url": "assets/css/0.styles.a8025f15.css",
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
    "url": "assets/js/vendor.commons.a8025f15.js",
    "revision": "58d9b79f133435556f1893ac928fb738"
  },
  {
    "url": "assets/js/vendor.vue.ec309bc8.js",
    "revision": "d16aa6e2b2e70d1dbde6a44c2c84fc11"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "8985cd6524dae68cb5acfd9613947f34"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "58827e263ed84cb9729819a7fa9cdeb5"
  },
  {
    "url": "blogs/index.html",
    "revision": "170964540e905af96a649351e62dc9ad"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "9ec8538a1a64ff668366c504fdb750a4"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "d6f10e201cb847828cd37981dde5799a"
  },
  {
    "url": "blogs/vps.html",
    "revision": "413bdd24c6c57ec1c95b9ffbc00bb444"
  },
  {
    "url": "develop/doc.html",
    "revision": "1762c30a7dcb2d77721828bb2da3237a"
  },
  {
    "url": "develop/frame.html",
    "revision": "e62cfc17be18fa77a403a7bbed75c395"
  },
  {
    "url": "develop/ide.html",
    "revision": "fd91e1da0b7467f0c400ca2f69fc0316"
  },
  {
    "url": "develop/index.html",
    "revision": "ee6031d780480c7a3e7ce1c4c044d281"
  },
  {
    "url": "develop/map.html",
    "revision": "fb21fda414c5058d103ab244259c49b5"
  },
  {
    "url": "develop/others.html",
    "revision": "78b34b7a336f77893990995b841c8fbb"
  },
  {
    "url": "develop/weapp.html",
    "revision": "076ab825f178ae45480ead49cdf91afb"
  },
  {
    "url": "index.html",
    "revision": "0ebbffc17a8365de733c499defecd6f1"
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
