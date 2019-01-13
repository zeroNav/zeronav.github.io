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
    "revision": "536cae4358b91de394750f2a136a0dcd"
  },
  {
    "url": "assets/css/0.styles.9732f5cf.css",
    "revision": "14a656f0cb878c5ab67c1abed8d59f80"
  },
  {
    "url": "assets/js/10.a42577c4.js",
    "revision": "1806a166eba1c10eb3d48213a476dbc3"
  },
  {
    "url": "assets/js/11.feab8f54.js",
    "revision": "293ca2136b52f9f2197660faabea7cbd"
  },
  {
    "url": "assets/js/12.b930ccf7.js",
    "revision": "c4c0f04d5c719dfcaf1d05ffb46e893e"
  },
  {
    "url": "assets/js/13.598e1d86.js",
    "revision": "82c7b3e5cb9b968b3862c9ef8267f01d"
  },
  {
    "url": "assets/js/14.3667b703.js",
    "revision": "4e3e2a752da5b2c2b0c3fa609bad7fed"
  },
  {
    "url": "assets/js/15.9ea7ccce.js",
    "revision": "e8c6d08d58693e21455aa7af75b18c21"
  },
  {
    "url": "assets/js/2.b23c34ad.js",
    "revision": "443e79a4cf01055b8a7efed035b61d62"
  },
  {
    "url": "assets/js/3.bef773e3.js",
    "revision": "df5658317a23acbf7a0c8f1c9e3d4c64"
  },
  {
    "url": "assets/js/4.7d90dd14.js",
    "revision": "ce80861366003f0051c95a0007256f2b"
  },
  {
    "url": "assets/js/5.e16fc1e0.js",
    "revision": "7999d02a0104760e9e4155a52c22bb7c"
  },
  {
    "url": "assets/js/6.7bc94eae.js",
    "revision": "3bcf2edef13b68f59aa81f5f7cba80c3"
  },
  {
    "url": "assets/js/7.33683789.js",
    "revision": "bd863e7df1ba4a9eb2052e43f369d56c"
  },
  {
    "url": "assets/js/8.c23bd9c3.js",
    "revision": "2ee345c607afa9becebaa1619f4c09b0"
  },
  {
    "url": "assets/js/9.d4ecdaae.js",
    "revision": "70663ce159b1ea902f3152b211e5b027"
  },
  {
    "url": "assets/js/app.d430339a.js",
    "revision": "71062aa2daf6fb5a386620e8b5508e8c"
  },
  {
    "url": "assets/js/vendor.commons.9732f5cf.js",
    "revision": "bbf19384860284519afbb563fa2685ac"
  },
  {
    "url": "assets/js/vendor.vue.ec309bc8.js",
    "revision": "d16aa6e2b2e70d1dbde6a44c2c84fc11"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "fd6b724c73ec9b4df74c3cb3798da6d1"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "0637b05c29906b7c51120005a3488be6"
  },
  {
    "url": "blogs/index.html",
    "revision": "35aee4008e8c99212faa67a9334e850c"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "11e920bc24063efd9ff9c58f978b364f"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "aec27a73ccbde46961ae9da035614818"
  },
  {
    "url": "blogs/vps.html",
    "revision": "2eedbcdf778a96525a2b518d999cad2c"
  },
  {
    "url": "develop/doc.html",
    "revision": "81599ef234d15e837529e84b02786b4d"
  },
  {
    "url": "develop/frame.html",
    "revision": "d8d8f7cf7fbc67479300cf6f61f6d964"
  },
  {
    "url": "develop/ide.html",
    "revision": "f308d280c13287030692f3a0e6e15d94"
  },
  {
    "url": "develop/index.html",
    "revision": "b6f56a45463ab35aa538cd78459c776c"
  },
  {
    "url": "develop/map.html",
    "revision": "f4a6f11e41f3c788d9b5eaaa090d9d25"
  },
  {
    "url": "develop/others.html",
    "revision": "14b6aa3154b1fd62b2df5668abc7cb01"
  },
  {
    "url": "develop/weapp.html",
    "revision": "4cbf7bc35d149685d19afc7099e9f9eb"
  },
  {
    "url": "index.html",
    "revision": "04687e449e358e27920625000cdfbf08"
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
