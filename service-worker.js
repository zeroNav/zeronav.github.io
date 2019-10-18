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
    "revision": "0e1fc8b9e4bba9e00f87e7f3e632b7c8"
  },
  {
    "url": "assets/css/0.styles.c19d439a.css",
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
    "url": "assets/js/vendor.commons.c19d439a.js",
    "revision": "e333c169d0422ec8d138019b26aa26ac"
  },
  {
    "url": "assets/js/vendor.vue.63bbd286.js",
    "revision": "02f26e078a5141692742d1717c3eb8d4"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "6a7230a3b6598bd7d5609e3584fc2975"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "2f6d3c06a12a73f3bd31fad310e7342b"
  },
  {
    "url": "blogs/charles.html",
    "revision": "e618f2a0d9f1c2e22bc917795008bd67"
  },
  {
    "url": "blogs/earn.html",
    "revision": "cc518dbb1fbf752f172c004bd8a3041f"
  },
  {
    "url": "blogs/index.html",
    "revision": "468bdc7ccb3872bc51ae602d0e522cc8"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "349facd3bad2eb0ee133de615953da50"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "0611f82ef9ee877a0b2db0bdf9c8134b"
  },
  {
    "url": "blogs/vps.html",
    "revision": "f8739b0722f74c32b70a68314b36fde5"
  },
  {
    "url": "develop/doc.html",
    "revision": "5a052b632dff26fd7557859c5ff95831"
  },
  {
    "url": "develop/frame.html",
    "revision": "1400ddfcb9fb5146805ae7a4478d3045"
  },
  {
    "url": "develop/ide.html",
    "revision": "43307d4dbf3c4a7e3d5f4d8b7db47cdf"
  },
  {
    "url": "develop/index.html",
    "revision": "4fcd1b130f7353d30764025bf916595c"
  },
  {
    "url": "develop/map.html",
    "revision": "e9e2218dc9e4ee4dac585ed45367e25c"
  },
  {
    "url": "develop/others.html",
    "revision": "1cf4c41a65ae239a8668d8bfd44b0aa3"
  },
  {
    "url": "develop/weapp.html",
    "revision": "888357a2de34b000c0820e60dcc8d6ee"
  },
  {
    "url": "index.html",
    "revision": "63e259ddb0c487fb2ec8ec2ee6f33725"
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
