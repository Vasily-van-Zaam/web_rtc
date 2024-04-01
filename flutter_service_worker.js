'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5d334796b3585a71c8f1cefa05cf0a0d",
"splash/img/light-2x.png": "13298504090033a77d30b238ba5841a5",
"splash/img/dark-4x.png": "1fcd1df9ac905fd7236f415e08932b0e",
"splash/img/light-3x.png": "7eef562ad6df265f9c8702918df5ee18",
"splash/img/dark-3x.png": "6d065106d9364ca12c86493f083c1771",
"splash/img/light-4x.png": "2f89a9d2c0813a6f7052300e552a29e6",
"splash/img/dark-2x.png": "31857f523ae368d7656078f4dda5c59b",
"splash/img/dark-1x.png": "ff8bf308c927b789f9201edcccbe70ae",
"splash/img/light-1x.png": "1185367ae5768a4a4f2cdaf0470c5f65",
"index.html": "007ab699a136b4178f86194bf8f1144d",
"/": "007ab699a136b4178f86194bf8f1144d",
"main.dart.js": "23827907bd0ee6dd34fa53355d407485",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "f2322acdce9aa22a6e2469f762f6cae1",
"web_rtc/.git/config": "ea00983d80111f54a2e6b4209ebf0692",
"web_rtc/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"web_rtc/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"web_rtc/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"web_rtc/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"web_rtc/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"web_rtc/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"web_rtc/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"web_rtc/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"web_rtc/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"web_rtc/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"web_rtc/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"web_rtc/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"web_rtc/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"web_rtc/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"web_rtc/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"web_rtc/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"icons/Icon-192.png": "19b6bf7c93d54f8b6c10197a7eb3fa2a",
"icons/Icon-maskable-192.png": "19b6bf7c93d54f8b6c10197a7eb3fa2a",
"icons/Icon-maskable-512.png": "e2da0a423c43bcaae2f0a16bfe73f56d",
"icons/Icon-512.png": "e2da0a423c43bcaae2f0a16bfe73f56d",
"manifest.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "4f1f95bcfd6f0e54fc2f5f1d1818972f",
"assets/NOTICES": "b19253fa4ea219c63713f8244cedb010",
"assets/FontManifest.json": "6f5744f40eb3064f030b4e03a74f67a5",
"assets/AssetManifest.bin.json": "c19eed52e9dbac73a943958d817c75c8",
"assets/packages/golden_toolkit/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "45a22304f9496f693d6b8c478691d584",
"assets/fonts/MaterialIcons-Regular.otf": "79f0c46c354254d77ae2059925de191b",
"assets/assets/images/test.png": "f5dddee546c0fb525a6731915facaeee",
"assets/assets/icons/call_center.svg": "124128129aebb9925a3d4ae6d395a05c",
"assets/assets/icons/test_svg.svg": "680607a5e1ede4cf2b368d7e9e35172d",
"assets/assets/icons/call_center_dark.svg": "a6b7b7700a1c83ca966871b9a5c206f0",
"assets/assets/icons/logo.svg": "7c019c8ecdd18d43e6441c4a81fbb12d",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
