'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "8ed44519f79ab16103d3abbbcc882e12",
"/": "8ed44519f79ab16103d3abbbcc882e12",
"main.dart.js": "e6bba5089e29faa8b58ed099ad203689",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "72c155d27b9e51af4450ccc413769fd8",
"assets/AssetManifest.json": "9a8a9ce5b8a2eaf1d6a4b75bf6a8a782",
"assets/NOTICES": "d868eb9615cb2c5cc60b95a493fa02f8",
"assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/spoon.png": "578f2bf51ee70bef3df803dda294a4d3",
"assets/assets/highheels.png": "1056b5131e1f75b720860b12ce97082a",
"assets/assets/dance.png": "3e6130e9f858d481f9be0d7322c2cc0e",
"assets/assets/watch.png": "96ca9a7f3f9ada84135952de179c6d67",
"assets/assets/sing.png": "92dcd86ea6faebaf540bb453ef076147",
"assets/assets/buy.png": "d1c6356cba59aac5c9e9986e6f7e3c96",
"assets/assets/work.png": "a0d879b92e7c75850103514388153a1a",
"assets/assets/stay.png": "7c52c174c4e0e8865c8232837ec6f672",
"assets/assets/bowl.png": "75e643cbd8900ee1ace812f3e5b40ac4",
"assets/assets/peach.png": "fd4b6b7e29f17e3bb85a7417dbb42efc",
"assets/assets/tongue.png": "b9680c6b5f8885a750783d944a64cb96",
"assets/assets/you.png": "dbaebe1c81f62350174dec983b99a41c",
"assets/assets/i.png": "3882cda5f3620edc89dc7d4de62184d5",
"assets/assets/hat.png": "6c2fa3aa0fbf25bb713715bf94a26405",
"assets/assets/mouth.png": "b8cff59562ecd8b7de1a425662bd6162",
"assets/assets/wake.png": "00cec16e2df68c6e8fb144dbe9570757",
"assets/assets/jump.png": "2cfafa0b875c1022207bb71a4fdcd265",
"assets/assets/ask.png": "8428185a3ecdd09c123732f855533685",
"assets/assets/plural.png": "64506cdb29c71824f09a8a1c6a5cc36e",
"assets/assets/bring.png": "e76775e61253532510a7209a91fb1658",
"assets/assets/make.png": "58cd59f9045b50f129fdb1b63a84fe23",
"assets/assets/tell.png": "b036ee30e269a0747f4b3ba0508017f8",
"assets/assets/skillet.png": "943109f664199019d1bcb4ae4973c119",
"assets/assets/fly.png": "4529184f610ab4afdedcb880c4b6b9d9",
"assets/assets/bread.png": "3bdc3c7a36f8322b33309739e4a848fa",
"assets/assets/look.png": "23d7016b3799778f35008743dc819432",
"assets/assets/cry.png": "46199254862d0192bc40fcb2f67e25e8",
"assets/assets/talk.png": "f05a34dfee6ed9c7bd53eeca3aa48c86",
"assets/assets/potato.png": "7fb1e62854b47e31d1f1e9ea801aa4c8",
"assets/assets/speak.png": "7dd2684f273940648e6e5abca08f01a7",
"assets/assets/sleep.png": "f1c0700f567afe2ab188a115b3e989f1",
"assets/assets/give.png": "54bd7c6d58adb627e03b486b5e8d529d",
"assets/assets/arm.png": "383c05a6663909e61d8638580dbdcf38",
"assets/assets/ge.png": "bd2bb95bfcadc84f4c187b0b0bfb454e",
"assets/assets/study.png": "6fea211d7eed7c498d03ccf90c447565",
"assets/assets/nose.png": "564d691a36bb1651023c93ffc0263879",
"assets/assets/carrot.png": "0658bb1f184f50bac92b01d139625b61",
"assets/assets/show.png": "8f62fa2764a1eee79f98866d122699aa",
"assets/assets/paint.png": "570f1c7c33c6e57136ac08aaa8afa258",
"assets/assets/have.png": "5eca3dc7835da2115a01cc46f0b6830d",
"assets/assets/pineapple.png": "1d4fb9c811bb735da3b5237123d95ea8",
"assets/assets/en.png": "85855c20728101439f150c7a0c350319",
"assets/assets/mango.png": "1a99e35f36451ad82039a1fa43a45b52",
"assets/assets/tangerine.png": "af9c99425ddfc7cf8f29c0175af60e96",
"assets/assets/ru.png": "5c30f42f94e60200d0ef2ad0134d17c7",
"assets/assets/draw.png": "fdce7981c56103035aa19160cc06d44f",
"assets/assets/onion.png": "5d9a4d794c03433879b418df13424fcb",
"assets/assets/scarf.png": "28c6cd05fb6578164dc320a8dcddb4cf",
"assets/assets/butter.png": "c4d4c167223c182b921123a826180d1b",
"assets/assets/tomato.png": "c587d1a00230357f9f1052368621da56",
"assets/assets/jeans.png": "0205ad8d94fa117288de78f82642537e",
"assets/assets/straw.png": "3fda3f58d1e7b986005057c582bf4047",
"assets/assets/drink.png": "06431f726cfc7a49fb6c0599ffcf1c22",
"assets/assets/hand.png": "14b971fcd60bdc39703dec39dc79609e",
"assets/assets/shoe.png": "b7a52be2b38b429fe54d73a48f61f958",
"assets/assets/socks.png": "09b54b26ca326144853a3ac7e4ae54fd",
"assets/assets/watermelon.png": "ec3fa8104d11546f0601210a5a777c4e",
"assets/assets/run.png": "ccaa04fc386b1c8d51a04d82edc321fd",
"assets/assets/leg.png": "564869d674b6c4ff12ded5ed6b2ed416",
"assets/assets/nail.png": "a44d9b92379b45fbbca1fe25cf7d5e9f",
"assets/assets/getup.png": "ec10d6cd51e2d1db631bf41e762c9694",
"assets/assets/find.png": "9b05a2205d8ded08484c3c30da753c2e",
"assets/assets/grapes.png": "dcf2ec05302dc9cd03fb997e2e44f896",
"assets/assets/apple.png": "ee0c4ef3524517e688971709f88c7fbe",
"assets/assets/she.png": "e0289e0b90cc8f42d22b906c8137dd7b",
"assets/assets/go.png": "18deb173f132b42ca051d312281fa901",
"assets/assets/coat.png": "e4009a9a529f8187fd7eb0634378f32a",
"assets/assets/ear.png": "ec563bf31eebb40ddf73dec0d5f1475e",
"assets/assets/help.png": "354ff33dd0f9e1278bb43f99a428133b",
"assets/assets/clean.png": "b25adbb6194d62004eac1ed9bf6df8a5",
"assets/assets/cup.png": "935a06d43a49a68ec0e7fd4edfd19e55",
"assets/assets/read.png": "29a3e27ca5029e7aa871acffbf06fe42",
"assets/assets/walk.png": "7bd5f0e69a7e350631146cb74a4bed87",
"assets/assets/tooth.png": "d474cae4e901a0b5002527b664db5af7",
"assets/assets/garlic.png": "fcc8a854abe308316836e376d3bfc024",
"assets/assets/rice.png": "00da3906807fbd866c76bf5e8633ec7c",
"assets/assets/see.png": "bf1ad17ef223df65a59fe3562d44f930",
"assets/assets/cut.png": "1c1db4240870716648ca8ff6afc2835d",
"assets/assets/he.png": "2743df89a411c32aaa9c2ac12c1d9222",
"assets/assets/shorts.png": "ead0bb9e50c031d0501e4ef5447e335a",
"assets/assets/ice.png": "03c9e3616d55de2b25ce179bb2539117",
"assets/assets/pear.png": "e5743567875fa6b65fc7a763189cc83d",
"assets/assets/come.png": "70df162eddd2c61c02bfd5c59a3b5033",
"assets/assets/carry.png": "78896ad7775dfa46fcfd34e6780a2b25",
"assets/assets/avocado.png": "8f073a9cd1e23bb865ad6e8a3c53b8f2",
"assets/assets/water.png": "6d76f88647de9c692127b2af33ea1e85",
"assets/assets/hear.png": "e77a046aafb4a68f93c4474d5104c660",
"assets/assets/melon.png": "cbea0b97e9e1aaf75847d7ea752e1d96",
"assets/assets/listen.png": "61b9b227d71dd51d103189bedaa69eae",
"assets/assets/cap.png": "f20bd7d52378b3924f1169744329ce5d",
"assets/assets/drive.png": "8df70d2fe9f121088c8d9dcd5e79324c",
"assets/assets/take.png": "de50bf2e966ee0e8eee16522dad199ff",
"assets/assets/eye.png": "bf1ad17ef223df65a59fe3562d44f930",
"assets/assets/learn.png": "129bf03b76963918cf9531486d460b70",
"assets/assets/push.png": "aefaa33c1beb0db99c3b16916653e792",
"assets/assets/eat.png": "c09b9ec4e106005ba7a25d25506401d3",
"assets/assets/icecream.png": "81a7b340b64c413fd2ffbc521aed66dd",
"assets/assets/think.png": "827b51c2cc8c12b20f706f63b3677f21",
"assets/assets/vest.png": "7ac1322dc16370f819e81962d5b569ff",
"assets/assets/foot.png": "952bb75215299fa241757d78fb293fb6",
"assets/assets/it.png": "042f1a9662b0daa47cd0fb1a7262564c",
"assets/assets/wash.png": "cdd1bc3c021ccab4e289d7ff8dfcf4ed",
"assets/assets/pull.png": "407a5e4abd2cb036a57e0a51d217f32b",
"assets/assets/knife.png": "1c69453c1b708d9b19ce5867373fda46",
"assets/assets/sunglasses.png": "4cfa266e729e197b0ef41378a06f7dc1",
"assets/assets/cucumber.png": "37d9dce51ad1b4630c7a4e4d81318218",
"assets/assets/lemon.png": "0dc88f2f3b50711812ba52bfab84c460",
"assets/assets/smell.png": "564d691a36bb1651023c93ffc0263879",
"assets/assets/ride.png": "3ed24d9f0b43287e1d6a5382d838c3fa",
"assets/assets/bone.png": "a49aa5b4f15511fdaff5def3a2447e33",
"assets/assets/answer.png": "f721224a9570aeb5667f2d1c942be103",
"assets/assets/rest.png": "4e9086ce1c361619646b3ba194710fe6",
"assets/assets/sun.png": "e5961388a0f4ea9e65f9f7606961f0cb",
"assets/assets/write.png": "5e5da05e647803e86f04bc2f1da4b59c",
"assets/assets/goggles.png": "eb681855ba5a6bc658e2f785c3b823fd",
"assets/assets/plate.png": "186e107b0862db99b15202086a2c3771",
"assets/assets/glass.png": "eb5e47962fc2a0f92452083b73b74f03",
"assets/assets/egg.png": "53f404e04583ff465ac3861995db9789",
"assets/assets/swim.png": "7754636cba1cdf43c04d3d84a23824f2",
"assets/assets/teach.png": "fee43d1de0170d3f2f9acd8c9b3bbd7c",
"assets/assets/say.png": "b8cff59562ecd8b7de1a425662bd6162",
"assets/assets/dress.png": "3168110ab34afdb2821d937ef9c2db68",
"assets/assets/swimsuit.png": "1d9504d992bd12d154fbb9193a68aa1c",
"assets/assets/purse.png": "f96bf6ae8d26222e6757cb5d3e8c8c90",
"assets/assets/sell.png": "7fc50145dec7a8c4c19bcefacdb48e04",
"assets/assets/play.png": "541496e49b64a8f0f3569f9e7ce4137c",
"assets/assets/gloves.png": "a70d3da86de03771c09dc12f24387b53",
"assets/assets/fork.png": "b78a27b109f2350adf1976f6b0592315",
"assets/assets/tshirt.png": "92f4ee07324743e90008dc332aec7230",
"assets/assets/save.png": "a4906ec60ad9df98d9f2b91f568faa7e",
"assets/assets/bag.png": "4c40f2e506931e2a616cfcf1eded3906",
"assets/assets/rain.png": "32bfaacdf56f1222764e096936ad4b4c",
"assets/assets/glasses.png": "b56bf6f47ede2e0e72096dcf7cc9a539",
"assets/assets/live.png": "bd16b14504db3605543d19d6925b5ddf"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
