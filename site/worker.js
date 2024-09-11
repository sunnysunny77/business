
const version = 1;
const cacheName = `business-v${version}`;

const cacheAssets = [
  "./",
  "./index.php",
  "./favicon.ico",
  "./manifest.json",
  "./css/app.min.css",
  "./js/app.min.js",
  "./js/preload.js",
  "./font/OpenSans.ttf",
  "./font/Poppins-Black.ttf",
  "./font/Poppins-Bold.ttf",
  "./font/Poppins-ExtraBold.ttf",
  "./font/Poppins-ExtraLight.ttf",
  "./font/Poppins-Light.ttf",
  "./font/Poppins-Medium.ttf",
  "./font/Poppins-Regular.ttf",
  "./font/Poppins-SemiBold.ttf",
  "./font/Poppins-Thin.ttf",
  "./webfonts/fa-regular-400.woff2",
  "./webfonts/fa-brands-400.woff2",
  "./webfonts/fa-solid-900.woff2",
  "./images/pwa-logo-small.webp",
  "./images/pwa-logo.webp",
  "./images/header-mobile.webp",
  "./images/header.webp",
  "./images/nav-texture.webp",
  "./images/section-2-1.webp",
  "./images/section-2-2.webp",
  "./images/section-2-3.webp",
  "./images/section-3-1.webp",
  "./images/section-3-2.webp",
  "./images/section-4-1.webp",
  "./images/section-4-2.webp",
  "./images/section-7-1.webp",
  "./images/section-7-2.webp",
  "./images/section-7-3.webp",
  "./images/section-7-4.webp",
  "./images/section-8-1.webp",
  "./images/section-8-2.webp",
  "./images/section-8-3.webp"
];

self.addEventListener("install", (event) => {

  console.log("Service worker is installed");

  event.waitUntil(caches.open(cacheName).then((cache) => {

    console.log("Caching assets");
    cache.addAll(cacheAssets);
  }).then(() => {

    self.skipWaiting();
  }));
});

self.addEventListener("fetch", event => {

  console.log("Fetching via Service worker");
  
  event.respondWith(caches.match(event.request).then(cachedResponse => {

    const networkUpdate = fetch(event.request).then(networkResponse => {

      caches.open(cacheName).then(cache => cache.put(event.request, networkResponse));
      return networkResponse.clone();
    }).catch(() => {

      return false;
    });

    return cachedResponse || networkUpdate;
  }));
});