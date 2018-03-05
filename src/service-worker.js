import assets from '../webpack/utils/assets.json';
import manifest from '../package';

// Get version from package.json, so if there is a new version, update assets
const { version } = manifest;
const versionAssets = `imp-assets-v${version}`;
const versionRequests = `imp-data-v${version}`;
debug(`Loading v${version}`);

// Gett assets that needs to be cached
const savedAssets = [
  ...assets.scripts,
  ...assets.styles,
  ...assets.images.map(img => img.compiled),
];

// Install the service worker
self.addEventListener('install', (e) => {
  debug('Installing');
  e.waitUntil(caches.open(versionAssets).then((cache) => {
    // When installed Service Worker, add files to cache
    debug('Installed');
    return cache.addAll(savedAssets);
  }));
});

// Activate service worker
self.addEventListener('activate', (e) => {
  debug('Activating');
  e.waitUntil(caches.keys().then((keyList) => {
    return Promise.all(keyList.map((key) => {
      // If there are cached items differents to assets and data, remove them
      if (key !== versionAssets && key !== versionRequests) {
        debug('Removing old cache');
        return caches.delete(key);
      }
    }));
  }));

  return self.clients.claim();
});

// Get from cache
self.addEventListener('fetch', (e) => {
  // A request on frontend domain (asset)
  if (shouldCacheAsset(e.request.url) > -1) {
    e.respondWith(caches.match(e.request).then((response) => {
      debug('Storing assets on cache');
      return response || fetch(e.request);
    }));

  // A request on backend domain (data)
  } else if (shouldCacheRequest(e.request.url) > -1) {
    caches.open(versionRequests).then((cache) => {
      return fetch(e.request).then((response) => {
        debug('Storing request on cache');
        cache.put(e.request.url, response.clone());
        return response;
      });
    });

  // Other request
  } else {
    return fetch(e.request);
  }
});

function debug(param) {
  console.log(`[ImperdibleSoft SW]: ${param}`);
};

function shouldCacheAsset(fileName) {
  return /^https:\/\/www\.imperdiblesoft\.com/.test(fileName);
}

function shouldCacheRequest(request) {
  return /^https:\/\/api\.imperdiblesoft\.com/.test(request);
}