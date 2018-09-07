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
    "revision": "275b342df97d8f3a834efc87a2c4d383"
  },
  {
    "url": "assets/css/0.styles.bf809d57.css",
    "revision": "2ed4c8df4ff33bc36857f179247b429c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d013c43a.js",
    "revision": "2ed2740866be9cb01a3fde76d73d66c6"
  },
  {
    "url": "assets/js/11.572e8417.js",
    "revision": "28bd51b07e98078b15e12022282268e9"
  },
  {
    "url": "assets/js/12.7225ecf0.js",
    "revision": "83de0a614fcf818607930bff1f9680a1"
  },
  {
    "url": "assets/js/13.708b065d.js",
    "revision": "2d43f07d7130d3ceefb736f80b008715"
  },
  {
    "url": "assets/js/2.cf6cd3b5.js",
    "revision": "94c31c876c578a21d2ef6ef1f32ca1e6"
  },
  {
    "url": "assets/js/3.b244fd30.js",
    "revision": "f9612d1f40db10602704954e19c64e87"
  },
  {
    "url": "assets/js/4.e8ea2dfe.js",
    "revision": "162fe68a6b1741c28d0d8de46a8eedd8"
  },
  {
    "url": "assets/js/5.f8f59e0d.js",
    "revision": "5ce5dfe02faf580276f7eca9c300e317"
  },
  {
    "url": "assets/js/6.5f4ac197.js",
    "revision": "e76fbad695baca37315b7a690b6b17f9"
  },
  {
    "url": "assets/js/7.1edc178b.js",
    "revision": "575f1cb46627426916f9d2dcb6fd6bb1"
  },
  {
    "url": "assets/js/8.88a0de87.js",
    "revision": "b13107fb0945b6420759ad5d3c76e335"
  },
  {
    "url": "assets/js/9.d420a339.js",
    "revision": "25f95655c216c8f0d0df46dc4cd95263"
  },
  {
    "url": "assets/js/app.29798365.js",
    "revision": "264e56c9db640c173ef631bc0287cf3e"
  },
  {
    "url": "assets/js/vendor.commons.bf809d57.js",
    "revision": "8edeb54ddd1150bdd6bdb29c5d7a2237"
  },
  {
    "url": "assets/js/vendor.vue.f2788b82.js",
    "revision": "84557f98fe783ba9d1fc33e8220901f8"
  },
  {
    "url": "blogs/index.html",
    "revision": "ea235531800cc4ce07fee5981cc6ee69"
  },
  {
    "url": "blogs/vps.html",
    "revision": "3127b5f150df5c16acb2a29fda93f831"
  },
  {
    "url": "develop/doc.html",
    "revision": "1085212581f13c32d8936f07e0958d64"
  },
  {
    "url": "develop/frame.html",
    "revision": "af67171bdb3d2abe0cc2093007d07b45"
  },
  {
    "url": "develop/ide.html",
    "revision": "c48853325ce2897bf4c37dda6ac8e3c9"
  },
  {
    "url": "develop/index.html",
    "revision": "97bd7a9025e2af2dc0b30ca31bb3058d"
  },
  {
    "url": "develop/map.html",
    "revision": "c708e3d0a8fe685595e74481d3c3e388"
  },
  {
    "url": "develop/others.html",
    "revision": "1dba95ee76ac3a7542506d95a6a59294"
  },
  {
    "url": "develop/weapp.html",
    "revision": "92e7b1cf32aef2605fb0b82827b2dc57"
  },
  {
    "url": "index.html",
    "revision": "ca20e06cf303ec4f85b9100852d703b5"
  },
  {
    "url": "private/accounts.html",
    "revision": "286232616d55367522e185d163c9bb29"
  },
  {
    "url": "private/work.html",
    "revision": "be9db0cd232a67a440d56e9f8e87ffd8"
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
