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
    "revision": "e3981e4641fa513f8e9a2cf87bfca611"
  },
  {
    "url": "assets/css/0.styles.9e414dcf.css",
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
    "url": "assets/js/vendor.commons.9e414dcf.js",
    "revision": "614ea41752871253e800d450f0a01af3"
  },
  {
    "url": "assets/js/vendor.vue.f2788b82.js",
    "revision": "84557f98fe783ba9d1fc33e8220901f8"
  },
  {
    "url": "blogs/index.html",
    "revision": "4a832c05478432539e07ee7a70427756"
  },
  {
    "url": "blogs/vps.html",
    "revision": "8b50c858d8a1a3f7e88dd89d3dad6e91"
  },
  {
    "url": "develop/doc.html",
    "revision": "d89b18ae6ba3e08e86ac7f91abfa8c6c"
  },
  {
    "url": "develop/frame.html",
    "revision": "fe187138a68a4ad5da38b76f9b1445e2"
  },
  {
    "url": "develop/ide.html",
    "revision": "b74c17315f3e369840dcf7cc4ebfcb88"
  },
  {
    "url": "develop/index.html",
    "revision": "d1f4bff6108ae94dcb206c335b8283a1"
  },
  {
    "url": "develop/map.html",
    "revision": "0e3b29f368495628ecd3f3488ec82790"
  },
  {
    "url": "develop/others.html",
    "revision": "1e2345b084dd1e81adf8975318602408"
  },
  {
    "url": "develop/weapp.html",
    "revision": "303de588a510bd7c17bfdefd36e31ba1"
  },
  {
    "url": "index.html",
    "revision": "5437f0896b9109b6b1edf774cf3a20e9"
  },
  {
    "url": "private/accounts.html",
    "revision": "a27a2c05a663b49e30a9c67c8e6bf438"
  },
  {
    "url": "private/work.html",
    "revision": "4b77beed3444e05556d4af6f08823534"
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
