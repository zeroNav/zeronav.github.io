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
    "revision": "45ccd2ded66a912982b962836ec30f12"
  },
  {
    "url": "assets/css/0.styles.69809fb0.css",
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
    "url": "assets/js/vendor.commons.69809fb0.js",
    "revision": "68266773d5a3dd46f05ef010bc4e8888"
  },
  {
    "url": "assets/js/vendor.vue.63bbd286.js",
    "revision": "02f26e078a5141692742d1717c3eb8d4"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "62bb0469fce1949c3c58e4e782458681"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "f5ada90f613cf332a3c8db78837be279"
  },
  {
    "url": "blogs/charles.html",
    "revision": "7f914ebd185e44ba937fd28831ed2f20"
  },
  {
    "url": "blogs/earn.html",
    "revision": "fe7464fd9a6db0925dc8d718400fabd3"
  },
  {
    "url": "blogs/index.html",
    "revision": "e41ac8b157bfd130031238e342a56f1e"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "81e3f89829013bc99c847c9d5836ed97"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "349ab7664abca5abbaf1782bdaf1a40a"
  },
  {
    "url": "blogs/vps.html",
    "revision": "56b81fb015e59de744f44f1fbaeea440"
  },
  {
    "url": "develop/doc.html",
    "revision": "f26705ace02302926b81e1d7810e3a19"
  },
  {
    "url": "develop/frame.html",
    "revision": "af186db3eb14233b2c5b8d65ac14a34b"
  },
  {
    "url": "develop/ide.html",
    "revision": "85d3e86edf1024d8a13d5a59918c6d26"
  },
  {
    "url": "develop/index.html",
    "revision": "4ee93293270646249403e31bc5fb7606"
  },
  {
    "url": "develop/map.html",
    "revision": "f1f7dd161dc5151ab8b140b3ba1d3b44"
  },
  {
    "url": "develop/others.html",
    "revision": "a0b84c7e81a2ac4e56a95ffc542779d0"
  },
  {
    "url": "develop/weapp.html",
    "revision": "edaad3dbba440795e96cccb078d9d4ce"
  },
  {
    "url": "index.html",
    "revision": "174ec485290a04e6dc8ffb47731f493a"
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
