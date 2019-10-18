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
    "revision": "22c49164f064a9a7a7189f125f4c0fc0"
  },
  {
    "url": "assets/css/0.styles.baa71cae.css",
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
    "url": "assets/js/app.7eb1a8b9.js",
    "revision": "865ac51ca6679097c3f3aba1877fb0d3"
  },
  {
    "url": "assets/js/vendor.commons.baa71cae.js",
    "revision": "82fa99bd2ed8c91dd25f175ac0bf62e2"
  },
  {
    "url": "assets/js/vendor.vue.63bbd286.js",
    "revision": "02f26e078a5141692742d1717c3eb8d4"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "cb7f28b66d1e5ee940e0139dbadc446a"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "0d5cb017b46565d22c1d15429fd0d5bf"
  },
  {
    "url": "blogs/charles.html",
    "revision": "787dff07b3f519e3088bcc4c37cdc7fb"
  },
  {
    "url": "blogs/earn.html",
    "revision": "4082b7fdec9e68a7db96bf98d3587822"
  },
  {
    "url": "blogs/index.html",
    "revision": "4244f29ffa3eb226090696a7240116cc"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "3373a4ce89835adc53f17c310a420986"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "d0d4667b82b0a46cb8abf083c8042032"
  },
  {
    "url": "blogs/vps.html",
    "revision": "3c973425dfa52becc23400f91d82f7de"
  },
  {
    "url": "develop/doc.html",
    "revision": "c3d15d137984c1d8c5c12a4644abcaa9"
  },
  {
    "url": "develop/frame.html",
    "revision": "8452aff2f8c20198a30e90b7baf5b115"
  },
  {
    "url": "develop/ide.html",
    "revision": "6ca3a08acb614732c5b8c79377f92ae5"
  },
  {
    "url": "develop/index.html",
    "revision": "116c7aeaf12e5a975a252f73c388b0d9"
  },
  {
    "url": "develop/map.html",
    "revision": "7ef988bf36dedc38fcd8f9be48629743"
  },
  {
    "url": "develop/others.html",
    "revision": "d651f0595cef5e39de9a3898349a52cc"
  },
  {
    "url": "develop/weapp.html",
    "revision": "f8d55ac12e8ab0082cc2777b59791803"
  },
  {
    "url": "index.html",
    "revision": "12f525169ad1febdffe6dbf71ed1f7c2"
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
