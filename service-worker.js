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
    "revision": "048d9c46ad679630a5e466384c971d70"
  },
  {
    "url": "assets/css/0.styles.cf644b66.css",
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
    "url": "assets/js/vendor.commons.cf644b66.js",
    "revision": "351d57be2ac2c1436189a180bdd2589d"
  },
  {
    "url": "assets/js/vendor.vue.63bbd286.js",
    "revision": "02f26e078a5141692742d1717c3eb8d4"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "a2e8b9e82dba1d3f80d8fcf2a7790ee5"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "d6a72cf0fabd35ec7142dd26d4a57c5c"
  },
  {
    "url": "blogs/charles.html",
    "revision": "77743e4674957fbe60439333d0da1cd1"
  },
  {
    "url": "blogs/earn.html",
    "revision": "0ed08d320350509ec17d6dc51465c8c9"
  },
  {
    "url": "blogs/index.html",
    "revision": "c082c50eb0f9d9fd8c2b7ee115f8cce4"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "b6c2a2351408acaf752bbc75412d1f1f"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "3583471ece848d3987e884640932efcf"
  },
  {
    "url": "blogs/vps.html",
    "revision": "8faa160dd26c47290b61309b73ccf2a2"
  },
  {
    "url": "develop/doc.html",
    "revision": "7622e11967829b8405a0a9450e16f6c3"
  },
  {
    "url": "develop/frame.html",
    "revision": "2f609f51616e016376a57a6109180b21"
  },
  {
    "url": "develop/ide.html",
    "revision": "f35ad7df43b0d82a953296261c1f769f"
  },
  {
    "url": "develop/index.html",
    "revision": "79d18e6ed1f1367f364f17031b999460"
  },
  {
    "url": "develop/map.html",
    "revision": "730e375fe3850494ca175961dbd6d12b"
  },
  {
    "url": "develop/others.html",
    "revision": "2e8dc6c1d1af443a7c5b4730c2534f12"
  },
  {
    "url": "develop/weapp.html",
    "revision": "a0ca7237b6ea17e1a5e71a634ea6d2bd"
  },
  {
    "url": "index.html",
    "revision": "70ad9b763d810fe242432acd87b3f182"
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
