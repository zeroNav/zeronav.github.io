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
    "revision": "f6af7387f5abe72e30f6a0f849c6d12e"
  },
  {
    "url": "assets/css/0.styles.fb166ef0.css",
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
    "url": "assets/js/vendor.commons.fb166ef0.js",
    "revision": "e089fc25de697d556b8650e510d41fe8"
  },
  {
    "url": "assets/js/vendor.vue.63bbd286.js",
    "revision": "02f26e078a5141692742d1717c3eb8d4"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "11ff94449dd4c62c5c4101d5cd96d2ae"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "2ec99763eb3979a1950591ee4b516505"
  },
  {
    "url": "blogs/charles.html",
    "revision": "675d45b08595f1604fe6960c5fa302ad"
  },
  {
    "url": "blogs/earn.html",
    "revision": "89ce22ce0b1680058f5a8f3f1839e445"
  },
  {
    "url": "blogs/index.html",
    "revision": "1e6f915572e8ee230cfed01551fae052"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "f375c5a0c7f4d9c2056003bf279c6041"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "5cf67ff93eb3062865955ffab8e9a6b4"
  },
  {
    "url": "blogs/vps.html",
    "revision": "aa4768d49e0e580252f727b25f081db8"
  },
  {
    "url": "develop/doc.html",
    "revision": "1436e6eca8a56e79239842b409a83759"
  },
  {
    "url": "develop/frame.html",
    "revision": "72d48d01a869dd8cc154850214ac2456"
  },
  {
    "url": "develop/ide.html",
    "revision": "e5fae2ef0fb27a6eb6585999d014a061"
  },
  {
    "url": "develop/index.html",
    "revision": "a3592786087c0aa46f2dcbb09b52e1c3"
  },
  {
    "url": "develop/map.html",
    "revision": "a524d1981a159db9123f3493de6fc04e"
  },
  {
    "url": "develop/others.html",
    "revision": "a380f3f329eada24a7888796bd37a0ef"
  },
  {
    "url": "develop/weapp.html",
    "revision": "30cdbfa4684a2afbc9eedd5bab519c0e"
  },
  {
    "url": "index.html",
    "revision": "12a5716f5780f722177550333685ec10"
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
