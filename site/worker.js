
const version = 1;
const cacheName = `business-v${version}`;

const resources = [
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
  "./images/section-8-3.webp",
  "./fallback.php"
];

const installResources = async (resources) => {

  const cache = await caches.open(cacheName);
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {

  console.log("Service worker is installed");
  
  self.skipWaiting();

  event.waitUntil(installResources(resources));
});

const cache = async (req) => {

  const res = await fetch(req);
  const cache = await caches.open(cacheName);
  await cache.put(req, res.clone());
};

const stale = async (req) => {

  try {

    const match = await caches.match(req);

    if (match) {

      cache(req);

      return match;
    }

    const res = await fetch(req);

    return res;
      
  } catch (error) {

    console.log(error);
    
    const cache = await caches.match(req);
        
    if (cache) {

      return cache;
    }

    const fallback = await caches.match("./fallback.php");
      
    if (fallback) {

      return fallback;
    }

    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

self.addEventListener("fetch", (event) => {

  console.log("Fetching via Service worker");

  event.respondWith(stale(event.request));
});