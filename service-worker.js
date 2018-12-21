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
    "revision": "74f4e0049b9cfbd7ecd3f2f660680835"
  },
  {
    "url": "assets/css/0.styles.94d03eb2.css",
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
    "url": "assets/js/vendor.commons.94d03eb2.js",
    "revision": "6962fea6c73b7b314bebaa22064b50ba"
  },
  {
    "url": "assets/js/vendor.vue.ec309bc8.js",
    "revision": "d16aa6e2b2e70d1dbde6a44c2c84fc11"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "2c12b7d611e36605f8ce134e2a7e8828"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "8c1f6e135a356792095c6a219647644b"
  },
  {
    "url": "blogs/index.html",
    "revision": "3d3cf52f77ca3ce464824b058514cefc"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "4e951ca297c9deda53204d435e688e68"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "c21fb17f3312f608a58e174a3eb05dee"
  },
  {
    "url": "blogs/vps.html",
    "revision": "ae8ac62b3c72c5a9416b481c3977a206"
  },
  {
    "url": "develop/doc.html",
    "revision": "5a37e87988b49558b19b37d428953a49"
  },
  {
    "url": "develop/frame.html",
    "revision": "0584185f7f54f74de040d40893a076b4"
  },
  {
    "url": "develop/ide.html",
    "revision": "22286ee9e41bf61ed7e3f543f94e51b0"
  },
  {
    "url": "develop/index.html",
    "revision": "3a683c11c9479becca55f6ec3075445f"
  },
  {
    "url": "develop/map.html",
    "revision": "ac65c7b65bf8df796b13c1423e2fe4c5"
  },
  {
    "url": "develop/others.html",
    "revision": "a4130411aac2243d91553b60c08ffc08"
  },
  {
    "url": "develop/weapp.html",
    "revision": "f38caf40fc808dd78b74cbb57453333d"
  },
  {
    "url": "index.html",
    "revision": "7d90f9f770be32be8618f0822a7577dd"
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
