'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5d334796b3585a71c8f1cefa05cf0a0d",
"splash/img/light-2x.png": "48d57bd9871adba0e12d56fe1e43a1e7",
"splash/img/dark-4x.png": "3677f754f4ab02032a236cb3005ca00e",
"splash/img/light-3x.png": "d20a665a704995230f7a21cbcb0c4812",
"splash/img/dark-3x.png": "33d21164b7e39d0b1a118fcbd70d1c44",
"splash/img/light-4x.png": "db33d0e16966018b1383d315382a154a",
"splash/img/dark-2x.png": "610519d72ca0b63bd15f445f5257ae21",
"splash/img/dark-1x.png": "8e7772773c6fb8baea685d973b9bf4ab",
"splash/img/light-1x.png": "5b3b35af3a558d2a9d41df1bff284001",
"index.html": "b6e9f36f54aae410cf8e065f652b52ff",
"/": "b6e9f36f54aae410cf8e065f652b52ff",
"main.dart.js": "24a0406f4908dcc544c767d7740395ce",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "33d5f175095b33bfd043856eccb2d66c",
"icons/Icon-192.png": "88ed6b79cb6f6dba7af30a38d6c341c1",
"icons/Icon-maskable-192.png": "88ed6b79cb6f6dba7af30a38d6c341c1",
"icons/Icon-maskable-512.png": "da118f3aceeb084ada65f6a8ccf66f7f",
"icons/Icon-512.png": "da118f3aceeb084ada65f6a8ccf66f7f",
"manifest.json": "d41d8cd98f00b204e9800998ecf8427e",
".git/ORIG_HEAD": "98503391635d5d5bff3c907266eb8fa7",
".git/config": "b84a262c3eb7eedaa6fa4737f8dee10c",
".git/objects/61/ae09cfe24dd68f4af0e95d83cee0679e8857b8": "60d888c24bbd2191bbcbfdcec3dd355d",
".git/objects/95/b1a3b79a7296675efdbc56a69cfb434ddd398a": "487e16e025af810115951a271feacc27",
".git/objects/95/cfb8fbcda8552f3ec3295b8ec394bf31a70661": "a445db053a955dfb3e3e28d797484c29",
".git/objects/68/a547b868a72aec1cc7643f967c4c9cdd9aa319": "7c95824437d49a5d141fa3bf4ecf2142",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/04/6981b9ceb99bf2a3d3476dc6540e8a5ea8bf01": "cb6069831ce1d4e29603819478ab7faf",
".git/objects/69/32922732e37551bfc4a893025e2835f5293ca0": "c42b93b5222f6899b93b8ec0f3b601f6",
".git/objects/69/bcf51c7f8ffac981725f55c63af2a2005bc06a": "2c7243173d2012ec67d5ccf3aaf05927",
".git/objects/67/06ca565a54512b39940ba8f7852c4d4da540b9": "d812923713551ae84d2f27a1a57c45a7",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/34/beff0f0def16cdb206abfd0aea2f2f9d72c94e": "3ea2546bcdd4b0d0e6d75bf318290d97",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/ad/f68ac66cfd7d6ffa3b8996d9c7554bad0ff0a6": "1af53c994cceb3649ccb1684dfcdd966",
".git/objects/da/53708b9e4aeebbff0e7ac72699c71cb5fc9e85": "d2d564f4f815da2c4f01119b4ccf9a3b",
".git/objects/a2/d129c2e3afa98fa46daa2a0f736e92644dfb38": "56eca37f963595244cad44dfc05a1499",
".git/objects/a2/f9a14dad3c585674caead5a30c3e52111234d7": "9af19a4c6776831fdb8055222e245e60",
".git/objects/d6/0535029ddcfdbcd39df1b7f7f4ad2ce8c63d19": "1f7da813442818d5e74ad86f13d26824",
".git/objects/bc/100baa94fdb4c81844f10f5fc0e1fa9a7de45c": "55c8ab9afa17f471563fc0811ddd0579",
".git/objects/ae/c6317f6f3c286206b059dfdd8f2e96b7ffff5d": "eb327ca8424e0ffbc16351435e026e54",
".git/objects/fd/6773d439b226ed518f8a2bc25a39dee313adf2": "41eab33b1616a778294df73c638883ab",
".git/objects/fd/bbaa5ef5357646ff544cc45e2899fb5cc42e59": "235a771b4e25a08330b82f8bed034ffb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/58edb65cdb6145be87330c22041a9db9a55ffa": "71f4530519ff43beede5f9b81d5e92b9",
".git/objects/ca/8399b70ef95b733bbaa9b8c487f410468e8585": "060410b39debc9a048af6522e1362b17",
".git/objects/c8/c79e98d36c483237b5483210a913076f1465cb": "2feb98dbd0dc20aae291270b4bbb895d",
".git/objects/c8/2dca75d45063a31b5d621f4a948142bdf64970": "96f13101d44de1de3f2b0f84e5d9b590",
".git/objects/c1/832e326c753415e296e009c741d0f333cb03b9": "34409c7c351ac5b244cca828873affc6",
".git/objects/20/17f0d4e096cf901a9cde7491d3241352752267": "8fdc9caf95cb3b8c4db6e9b70eb49474",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/7d/2f8ac0e9f08455c887fbd5d6792c07454ec991": "de674472cc5cc29598a35ccd274e05b7",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/a70312737cbb256c7804902c90876c7ee0e875": "5402a49155360d03c5d81faa78e8d40f",
".git/objects/45/af5baff3837ba0dc44a613d4d565813564f692": "589ddf5fd9669aa671ec7e41341f4934",
".git/objects/1a/5968dded3648b26c95cbc3e995ec9bcfdef5b1": "4a614afb2b0eaea87fdc9ffde412d760",
".git/objects/4c/c09aea75079e814b028f2117d4b35d2169f3eb": "d225aec4449a762e15ed346a1ea23d4f",
".git/objects/4c/02e3668c09d6230ad6c7342d4a6e55f7cb3612": "5d2dbc5860f5cde2afd611890b2efd6d",
".git/objects/26/8833de1ecb42e5d6a85657ec8ce2e1456bff31": "2e870c19caebe290ae5325448276338a",
".git/objects/4d/869f3c880557250b1ff101f5c18b19050009ca": "e85bc3f90ad543508d3f3e69644ebfa3",
".git/objects/43/c1bee8a1298c1ee70e4873f3ce59e0d8b9d926": "0b9222c45ec67d602688770b1450cef1",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/5e/372477e78e9844431bda05945f8da2394beb70": "af9e39f5b351beda2b59f4c3098ce9d5",
".git/objects/5b/17f2be4655380e5e28fe0004333817b91f9ada": "6190ca5f8c8d52bec2597a6f93704c79",
".git/objects/0a/1046ff4bd122d10b46a182e427f632fb5c086d": "6257e9b47aab18bda01da159c9ef56db",
".git/objects/bf/e58f35267bfa4ffea0b9eb49c6478c1daf09c9": "d9583d9ac70d1fbe3b06842510048eb2",
".git/objects/bf/787692ae8d1bbc5e3e286a249c045e59219b45": "bd151e6bdf0d622222f11e3d1519139d",
".git/objects/d3/b85406f600cb3046e772e78a44ff273f9f82a8": "196dccda77704c05b1d01846f0806daa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b8/4dcf883658659687f84de3cbd0358119ce183d": "63d4674af00d551122c15ec776875b58",
".git/objects/dc/312944b71576bfc5d3bc2f956c051d005c74d4": "bb831dab3a33aae0045e0e4d86bd446f",
".git/objects/d5/64d0bc3dd917926892c55e3706cc116d5b165e": "ab5f20dcd5b558888db7d80b0f979f8a",
".git/objects/af/4b36cc0af7198aab0dfed1030300be29b18911": "b4a9d6d1120b8fc601110af4b21608bc",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/c3/a4c87b12c787328606d6044bb01958c1241b32": "c2f9cbf8a7c96787fb085fcc354686c6",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cc/c3b9a995d8cccf5e05b3bba745c202aebe0e67": "e2cba19e047d1de60182d174334234af",
".git/objects/e6/c82c2fcd78848ed6024175ba3a45ee8b928145": "5d071b509880eb0cccceebd76deef8bf",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/6d48e6ca19d703a6323952af089e1321cec68c": "0787b3f18aabb08f59ae38ac24fb672d",
".git/objects/f9/bf9d0ac18187506bf97777da88884b9cb46c4f": "73bf493d9633656aecfb6dc2d646e0fd",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/3940724a37b8fe9ec92a212b002409a62c34fb": "503e14fa41e2114b273447f58a40f463",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/f8/483275db551f031a5a353e9be2bf2b0e059010": "a3d7fa81b74854d485a6fb47b81f0fe3",
".git/objects/f8/301e19d41b43ed99dbc0ec9813f22784d786b2": "e9711a746c3530135c89f2a7ed543eb1",
".git/objects/ce/af129af95fb00e90440be8e57dba1de5743ac8": "0182fcdc37f8a2960208e811bd20c2bb",
".git/objects/48/f0265fc1897f69321e9f7008361b8c02ef4932": "e367819cd2fd3dcad910cb062e76b108",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4f/bc5c09cd91964096fbf192518b7176a2a8f0ea": "18cb3fd1993a2ffc35a522cb090f24d2",
".git/objects/8c/a8e73004450ff9329bff45658d748b5a440d50": "7625cb6a249ed868322c6ec0ec84c5b2",
".git/objects/8c/082c8de090865264d37594e396c4d6c0099fe4": "5117224fcb2873172ee6cba59c00a7ee",
".git/objects/1d/77a9485e74682161708b70cf4972506935c9e6": "02a9dd3f76d3b87c10475e528f882013",
".git/objects/71/4034fd8daf084b396eccf3c83056e99ddfe868": "7c9a518138bfb5b45631807bb7e8d1d7",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/76/d1f965c996bfacb20b4bc643efcc2d051b6ebe": "ee5eb0703745512031629689dff4ca32",
".git/objects/76/db05bf6279b0f1d61ade82c8eee408fd201264": "5ad8d7418bbd6dd6ec1ae0a79c933358",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/78/a5d8b9f54684060947338712bb6f2dffa20f4b": "066aa5a31cf5445a14c9705866d2e2f1",
".git/objects/8b/622a119ee05c1adb1747a911ef7f13caf09a39": "e21ff860aea9ba3d61d58b30718304c3",
".git/objects/13/87fa44348871b1481aace623dd8b9df113f2ca": "ed1afcf9635edab83610828b2f2bd151",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5b3112851505af72ef945b7d9d60c83b",
".git/logs/refs/heads/master": "5b3112851505af72ef945b7d9d60c83b",
".git/logs/refs/remotes/origin/master": "7bc699c8002b8457118e97d94f8e8b69",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "aa129b2b421d4f623bee0f40f17e7b9d",
".git/refs/remotes/origin/master": "98503391635d5d5bff3c907266eb8fa7",
".git/index": "f0645b0051b381701f8072a6dd32d0d5",
".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/FETCH_HEAD": "d16fc415159260186af845463065ff21",
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
