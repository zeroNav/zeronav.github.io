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
    "revision": "21ecd5a33814064253dda620b1a59791"
  },
  {
    "url": "assets/css/0.styles.c5580c06.css",
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
    "url": "assets/js/8.92fa33c8.js",
    "revision": "fa69db658447444c77f83ca1348b9f83"
  },
  {
    "url": "assets/js/9.d4ecdaae.js",
    "revision": "70663ce159b1ea902f3152b211e5b027"
  },
  {
    "url": "assets/js/app.587dce22.js",
    "revision": "052ddb1af3ed17d762b78aa5e24fb16c"
  },
  {
    "url": "assets/js/vendor.commons.c5580c06.js",
    "revision": "b581f2350ab192df2dd612820f74e87a"
  },
  {
    "url": "assets/js/vendor.vue.ec309bc8.js",
    "revision": "d16aa6e2b2e70d1dbde6a44c2c84fc11"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "51aa0aa1b2cde10385331184ef090e80"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "306e04f7b7f57dd218868454cb752883"
  },
  {
    "url": "blogs/index.html",
    "revision": "23e0ab8a66afec788e018b8bf7c4ac9d"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "170b9b562a7594cbadf6c26d60453605"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "1659947fcdec8a8e81c9293da1065e8e"
  },
  {
    "url": "blogs/vps.html",
    "revision": "4ef42e5e53889e6929aa307565280b72"
  },
  {
    "url": "develop/doc.html",
    "revision": "aa6e09216172b1b7dc6b4401d0d290a6"
  },
  {
    "url": "develop/frame.html",
    "revision": "e6c9b0cd96d1e250bd9fc83d8631ff9d"
  },
  {
    "url": "develop/ide.html",
    "revision": "4008b8907ed96a174122f10c3c80a371"
  },
  {
    "url": "develop/index.html",
    "revision": "fd3609d77c493dbb6fb4906569e3aa35"
  },
  {
    "url": "develop/map.html",
    "revision": "580f9b41a2fde261775a4336c9099412"
  },
  {
    "url": "develop/others.html",
    "revision": "eedc4014bd8d49f0ac3c6b9991dd9ed8"
  },
  {
    "url": "develop/weapp.html",
    "revision": "59898956c13e14e4e14ab2f39086b7e6"
  },
  {
    "url": "index.html",
    "revision": "4200df1d37f8f9ab9184a759aa21d1c3"
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
