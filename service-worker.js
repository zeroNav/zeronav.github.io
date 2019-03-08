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
    "revision": "9a20fc7efd0afd6be89c8fd381a8f218"
  },
  {
    "url": "assets/css/0.styles.670ed550.css",
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
    "url": "assets/js/vendor.commons.670ed550.js",
    "revision": "2292414daf625debd840de9d25cd6caa"
  },
  {
    "url": "assets/js/vendor.vue.63bbd286.js",
    "revision": "02f26e078a5141692742d1717c3eb8d4"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "a7c890d4370662cc6a6f7ec065b96ee1"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "bdb6f77d24198aa7fa77a2ebdc621a21"
  },
  {
    "url": "blogs/charles.html",
    "revision": "141634eff2236f16110c452629cb33cd"
  },
  {
    "url": "blogs/earn.html",
    "revision": "5550d25dddb146312d6619f56113f51e"
  },
  {
    "url": "blogs/index.html",
    "revision": "b9c4b1fec652354309f5b48b5daba050"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "63d4189eabb182cae507a25dfe87b1d2"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "b522504ff7a6d402f05bc36a24133eb6"
  },
  {
    "url": "blogs/vps.html",
    "revision": "46f4c52afbc0c60902842d9281320d0a"
  },
  {
    "url": "develop/doc.html",
    "revision": "b48dc2b61958ecba735802e9fb50d5bb"
  },
  {
    "url": "develop/frame.html",
    "revision": "2fa59196b6d51ba4a8cff10aef856aec"
  },
  {
    "url": "develop/ide.html",
    "revision": "5fb82c302e91e7f4038e0ec9e49083bb"
  },
  {
    "url": "develop/index.html",
    "revision": "4cc2b691534cc31739e39bbf710e2bf6"
  },
  {
    "url": "develop/map.html",
    "revision": "5015577dc7c250319c17f6e92c48b3bf"
  },
  {
    "url": "develop/others.html",
    "revision": "a0a6123963aad94aad93393dadf45fe1"
  },
  {
    "url": "develop/weapp.html",
    "revision": "b93cde6516203f4467f5ab1a83f06731"
  },
  {
    "url": "index.html",
    "revision": "6e2c2d4221c8830cb99858f6d97cbf04"
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
