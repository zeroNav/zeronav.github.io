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
    "revision": "4e6018876fda710cef581584599e3236"
  },
  {
    "url": "assets/css/0.styles.100eb48f.css",
    "revision": "d1ded11eeb064d32852c5f2c5329ac98"
  },
  {
    "url": "assets/js/10.1e1d169e.js",
    "revision": "838236a31797c38289ba3ef3d850a5f4"
  },
  {
    "url": "assets/js/11.4beebbb1.js",
    "revision": "fff835841a9457f44675c848e0b06439"
  },
  {
    "url": "assets/js/12.a211f7a3.js",
    "revision": "c7cfab59bb740f924fad0e870b5f4b37"
  },
  {
    "url": "assets/js/13.88f94bc9.js",
    "revision": "d969a5e349d13b2d31a0745b761d4479"
  },
  {
    "url": "assets/js/2.ebf7b46f.js",
    "revision": "68f16b8b755843393b485f071f13eb83"
  },
  {
    "url": "assets/js/3.7cb2a4df.js",
    "revision": "3ebb83a1b66074996211e774a12f6eea"
  },
  {
    "url": "assets/js/4.51afe98b.js",
    "revision": "8bbacf1ee92cb88b0905603afb5d8187"
  },
  {
    "url": "assets/js/5.2bb7d10d.js",
    "revision": "b5f3ef0ec241093b5eed8118fdc5b913"
  },
  {
    "url": "assets/js/6.76c1aecb.js",
    "revision": "b3cbf0a77af5ef9a6975068422113607"
  },
  {
    "url": "assets/js/7.c12cd289.js",
    "revision": "41d4067e148e46e707dce5fc43ac60e0"
  },
  {
    "url": "assets/js/8.b0abaf8e.js",
    "revision": "1a1ae5bd05c7dd6bf9440df174e402bd"
  },
  {
    "url": "assets/js/9.313a81b2.js",
    "revision": "7f1c77e29b6ad897b4aa15f0c49b8f81"
  },
  {
    "url": "assets/js/app.c07338be.js",
    "revision": "abb5e2b556ef4d5e0880f64d9f4da2a3"
  },
  {
    "url": "assets/js/vendor.commons.100eb48f.js",
    "revision": "2e814cb0bcbfe8f3717f396bfe174efb"
  },
  {
    "url": "assets/js/vendor.vue.fb8baef4.js",
    "revision": "e4a8ceb3b0b7f542d7087921500b3a5c"
  },
  {
    "url": "blogs/index.html",
    "revision": "70f45ccdb0926d6e4c6e34c520c78e40"
  },
  {
    "url": "blogs/vps.html",
    "revision": "d9d253b60d590338e85b9df10cc3c886"
  },
  {
    "url": "develop/doc.html",
    "revision": "4716965bec3653407ca2dc0f7b9492a8"
  },
  {
    "url": "develop/frame.html",
    "revision": "c882b3fc989f0d6b8af84f2757a3b3a8"
  },
  {
    "url": "develop/ide.html",
    "revision": "3637bcbfb8fac9b59f3aa93762895013"
  },
  {
    "url": "develop/index.html",
    "revision": "03109cb4f1b3b3d485a882cc9ffc8e3d"
  },
  {
    "url": "develop/map.html",
    "revision": "36378826b1d5895b923cb75f9263671b"
  },
  {
    "url": "develop/others.html",
    "revision": "f1c22693c1987a8496f917511820bd05"
  },
  {
    "url": "develop/weapp.html",
    "revision": "2560d8d44c3d1320318301143c9ab143"
  },
  {
    "url": "index.html",
    "revision": "9892a85867e7e36fdad608f93a29caa9"
  },
  {
    "url": "private/accounts.html",
    "revision": "39a5a7c99b77c40af9ddd162ba5a21d8"
  },
  {
    "url": "private/work.html",
    "revision": "cbc1a576f6923a2d074bc38603de2084"
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
