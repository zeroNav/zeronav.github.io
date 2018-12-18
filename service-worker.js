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
    "revision": "ec4d7740acf5598b17fbeb5ff3ba7b92"
  },
  {
    "url": "assets/css/0.styles.a0294bd9.css",
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
    "url": "assets/js/vendor.commons.a0294bd9.js",
    "revision": "366de6a0abffe06c2ea9ad0f20066be8"
  },
  {
    "url": "assets/js/vendor.vue.ec309bc8.js",
    "revision": "d16aa6e2b2e70d1dbde6a44c2c84fc11"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "2010ee53cc0a9cf8003b58352abaa08a"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "546caa20917b1916d3899a70af776879"
  },
  {
    "url": "blogs/index.html",
    "revision": "497fb49bfa678064244c3d79cb954a7b"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "6539900cf8908dae2e3775d65b768e16"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "83493b17b0f7a9cbde90277615bad089"
  },
  {
    "url": "blogs/vps.html",
    "revision": "f69f62dfcab9a1a2452f915e6a626d2d"
  },
  {
    "url": "develop/doc.html",
    "revision": "d785aec22926938b00dbcb5007146e05"
  },
  {
    "url": "develop/frame.html",
    "revision": "0fd7e321952843900dea750bf804d05a"
  },
  {
    "url": "develop/ide.html",
    "revision": "124c52b9d26a9e5bfd7bf68ba0636356"
  },
  {
    "url": "develop/index.html",
    "revision": "f1c5a9252c7ee097e57a292431ba269f"
  },
  {
    "url": "develop/map.html",
    "revision": "e511d123551c44ba24d07b94daa09f69"
  },
  {
    "url": "develop/others.html",
    "revision": "3da2fa7e914d9329aec0e8ceb0e06e26"
  },
  {
    "url": "develop/weapp.html",
    "revision": "285f5ca01046ec43a7505b8c863c0752"
  },
  {
    "url": "index.html",
    "revision": "c9a30631bbda7d9717c684e908e15449"
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
