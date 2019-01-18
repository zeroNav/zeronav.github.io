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
    "revision": "b1a935beef69ac472a23543587003ad7"
  },
  {
    "url": "assets/css/0.styles.db08e0f1.css",
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
    "url": "assets/js/5.7f56465d.js",
    "revision": "32a3b6d9313e8cbda13782d72baf753c"
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
    "url": "assets/js/app.686db341.js",
    "revision": "6a2898a4f3e08bcc6553d5e6c75d91b1"
  },
  {
    "url": "assets/js/vendor.commons.db08e0f1.js",
    "revision": "1a5438de1eb7fc1955a8e9ee4ab453a1"
  },
  {
    "url": "assets/js/vendor.vue.ec309bc8.js",
    "revision": "d16aa6e2b2e70d1dbde6a44c2c84fc11"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "856ff916b439f0502aaa544dad4944cc"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "aafc8a38211b37791feae961d7aad1a3"
  },
  {
    "url": "blogs/index.html",
    "revision": "9654549bd9965ea7fa9df348c66a5653"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "b7f23e5e68154f257411bb851dbdfd74"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "03a3846ca3f1079fe5f0dcbc7deab5a2"
  },
  {
    "url": "blogs/vps.html",
    "revision": "59186c83df36c7df33233411d1964374"
  },
  {
    "url": "develop/doc.html",
    "revision": "d97f2b4a418fc603c0a1c173e6469431"
  },
  {
    "url": "develop/frame.html",
    "revision": "f0a9653920c01a13d9cf59a4ba177e55"
  },
  {
    "url": "develop/ide.html",
    "revision": "a6c818d52a9f9a007b814f1e13092112"
  },
  {
    "url": "develop/index.html",
    "revision": "0c513a957aa70dbeb5b9cea89b6aaf45"
  },
  {
    "url": "develop/map.html",
    "revision": "f56d3c445d47008516d8fddf153fd853"
  },
  {
    "url": "develop/others.html",
    "revision": "3f84eac8e49cdad8386f3ed2ca438686"
  },
  {
    "url": "develop/weapp.html",
    "revision": "2c4982cb83a5b90475400fb3109e0df7"
  },
  {
    "url": "index.html",
    "revision": "2690a164ac18cb7048250872a5622afb"
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
