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
    "revision": "a3b3a0a58f1b2e5510fa2d200ed28229"
  },
  {
    "url": "assets/css/0.styles.966e8b91.css",
    "revision": "14a656f0cb878c5ab67c1abed8d59f80"
  },
  {
    "url": "assets/js/10.2811e027.js",
    "revision": "58f3af31f4d08ab6384fe6df01cc322d"
  },
  {
    "url": "assets/js/11.7036934b.js",
    "revision": "81927647900e35ae62e4cdf0e6bee1e8"
  },
  {
    "url": "assets/js/12.6941b4fc.js",
    "revision": "337a7942872c2ddfd8382aed2542012e"
  },
  {
    "url": "assets/js/13.1ce717a1.js",
    "revision": "d2702f29019773fc57ac9172d5947c9a"
  },
  {
    "url": "assets/js/14.f578d04d.js",
    "revision": "0c193ecaa08a50b451fabeea9af6495e"
  },
  {
    "url": "assets/js/15.01f1ebe9.js",
    "revision": "c1883417004128594699f23e54c3b3f8"
  },
  {
    "url": "assets/js/16.4115e3b1.js",
    "revision": "38e154d7ea884c0c4476c67dba5e6441"
  },
  {
    "url": "assets/js/17.4b3b030b.js",
    "revision": "f787e02ca2d89f7e5a2818449f4c6d52"
  },
  {
    "url": "assets/js/2.b23c34ad.js",
    "revision": "443e79a4cf01055b8a7efed035b61d62"
  },
  {
    "url": "assets/js/3.c9ffa9d4.js",
    "revision": "b8640151ff59f0bcb4584a1c3a6769e9"
  },
  {
    "url": "assets/js/4.8e8a076d.js",
    "revision": "9ef47fa447b0a4b6a35e9809c99a8ca7"
  },
  {
    "url": "assets/js/5.af2deca3.js",
    "revision": "9d96491da61e41481c68db4cbd9a8ef6"
  },
  {
    "url": "assets/js/6.d53faa51.js",
    "revision": "47e5384b5545d61ad514704b54faf5c0"
  },
  {
    "url": "assets/js/7.8e1dcecf.js",
    "revision": "267e29e99b0fdae0bec0d8c56fc3718c"
  },
  {
    "url": "assets/js/8.982f68e2.js",
    "revision": "abd3694e78525990c0361f92cfbf372d"
  },
  {
    "url": "assets/js/9.94cccc57.js",
    "revision": "3f0ac0b70cc6a668a0562b9ea8f15828"
  },
  {
    "url": "assets/js/app.c8a1cf6f.js",
    "revision": "bc54c3d3e0e14addd01a6e8cf03e4e43"
  },
  {
    "url": "assets/js/vendor.commons.966e8b91.js",
    "revision": "6ee45c70660a4c7ba4960118bdff6103"
  },
  {
    "url": "assets/js/vendor.vue.63bbd286.js",
    "revision": "02f26e078a5141692742d1717c3eb8d4"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "1bd070d2b6b81f7ccfbf0de51538abfc"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "5e6eb756efb6d910ae83e53738966fb0"
  },
  {
    "url": "blogs/charles.html",
    "revision": "f2f5b71e8d44904fe032ca3b598b4fa0"
  },
  {
    "url": "blogs/earn.html",
    "revision": "78f16f0debb6d1e094b58a1a83ae9e7a"
  },
  {
    "url": "blogs/index.html",
    "revision": "df5f57c5d527f5141c77c3609d082665"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "96a486282a2fad67fea529be98348f6e"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "0957819d44b25016122fc672ad476387"
  },
  {
    "url": "blogs/vps.html",
    "revision": "9f1975ea2eb48dbd7b099aed673af200"
  },
  {
    "url": "develop/doc.html",
    "revision": "c30d6fa3d682686a167ceb75c6c5f8bb"
  },
  {
    "url": "develop/frame.html",
    "revision": "807bb2203cf0d84b0ab5cf38fbd3a22d"
  },
  {
    "url": "develop/ide.html",
    "revision": "d4f4fe3f96f89cd2e69093f167fe39d8"
  },
  {
    "url": "develop/index.html",
    "revision": "13c34880bacab12f258dd9ed1a4b324b"
  },
  {
    "url": "develop/map.html",
    "revision": "926665fac548db4e9214b39a94fe0770"
  },
  {
    "url": "develop/others.html",
    "revision": "694849f1438f214e02bbcaba0581b40c"
  },
  {
    "url": "develop/weapp.html",
    "revision": "e69d5dbf50eb8784ca31277ccf753997"
  },
  {
    "url": "index.html",
    "revision": "e2f571d009b387cb1169d48cd7c61f47"
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
