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
    "revision": "0393984fc0eac888e01bfde1b923a7ec"
  },
  {
    "url": "assets/css/0.styles.60431606.css",
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
    "url": "assets/js/vendor.commons.60431606.js",
    "revision": "2f9abf4b6617bfc493c89d37a5bfbbf3"
  },
  {
    "url": "assets/js/vendor.vue.f2788b82.js",
    "revision": "84557f98fe783ba9d1fc33e8220901f8"
  },
  {
    "url": "blogs/index.html",
    "revision": "a894d57984ff1303f46a8937254fc0a5"
  },
  {
    "url": "blogs/vps.html",
    "revision": "ee9d5cf7b799756d9d80351ddff98c79"
  },
  {
    "url": "develop/doc.html",
    "revision": "2cf26a0f468739df3d56c7e1a52091dd"
  },
  {
    "url": "develop/frame.html",
    "revision": "68a3b74379878e0f4280c4cb4d5b9323"
  },
  {
    "url": "develop/ide.html",
    "revision": "f10aa16a1186f93694ff58091a955f7e"
  },
  {
    "url": "develop/index.html",
    "revision": "0c261a09428c08fe97134a7a00124c6b"
  },
  {
    "url": "develop/map.html",
    "revision": "2240d6c3abf4a879a090a5a4c849f2a1"
  },
  {
    "url": "develop/others.html",
    "revision": "6cc6c85c2d401b82021ce85922001133"
  },
  {
    "url": "develop/weapp.html",
    "revision": "31af4e068553e142b59a1ddb12ad1d3e"
  },
  {
    "url": "index.html",
    "revision": "ebe651a7043d29dc74ef98732a9d4ab0"
  },
  {
    "url": "private/accounts.html",
    "revision": "1e801f6a1264dac7e27bcd09661c60de"
  },
  {
    "url": "private/work.html",
    "revision": "60d219e2cd96d58eeacd19f1163fdfd5"
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
