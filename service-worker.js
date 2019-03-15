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
    "revision": "de676bf9a9b112161ec2b15ba104f726"
  },
  {
    "url": "assets/css/0.styles.68e1a3be.css",
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
    "url": "assets/js/vendor.commons.68e1a3be.js",
    "revision": "4761f7329d1e11a60dbf075375737cdd"
  },
  {
    "url": "assets/js/vendor.vue.63bbd286.js",
    "revision": "02f26e078a5141692742d1717c3eb8d4"
  },
  {
    "url": "blogs/accounts.html",
    "revision": "cffa61c83fa3fe6d901b3d21be0bda86"
  },
  {
    "url": "blogs/BeyondCompare.html",
    "revision": "449a0415d4883691a1b515cdd8f890e4"
  },
  {
    "url": "blogs/charles.html",
    "revision": "a588d2874c84f0da3449196df44e7965"
  },
  {
    "url": "blogs/earn.html",
    "revision": "0cd9abc74d067a3bcf30345af2a8ae12"
  },
  {
    "url": "blogs/index.html",
    "revision": "114e1567764c95608a5048dafbab99f7"
  },
  {
    "url": "blogs/mac-app.html",
    "revision": "bafdb92e1c67f87f94034de320cc7704"
  },
  {
    "url": "blogs/vagrant.html",
    "revision": "d8aad895f202ea7203a9d8ba952906f2"
  },
  {
    "url": "blogs/vps.html",
    "revision": "b087345da9fc31a5eb7f1825243f0344"
  },
  {
    "url": "develop/doc.html",
    "revision": "d1870657b88797a212669052ef659ca0"
  },
  {
    "url": "develop/frame.html",
    "revision": "b6cd2f7640d33532af5afd3313670ebe"
  },
  {
    "url": "develop/ide.html",
    "revision": "74b7c7b57cc33447d0cd8277a1594d54"
  },
  {
    "url": "develop/index.html",
    "revision": "1c297fddc1f882661a585d7a02211cd8"
  },
  {
    "url": "develop/map.html",
    "revision": "1e9789fc7af6cb3999ca9402fc906b08"
  },
  {
    "url": "develop/others.html",
    "revision": "a1e7b090527971f34af24c53f709b2cd"
  },
  {
    "url": "develop/weapp.html",
    "revision": "d35f1ca622cff4b3bb985a859c458027"
  },
  {
    "url": "index.html",
    "revision": "d9f5fd3206de442ae6aad7f276ce8d09"
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
