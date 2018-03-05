import manifest from '../package';
const { version } = manifest;

debug(`Loading v${version}`);

const savedAssets = `imp-assets-v${version}`;
const savedRequests = `imp-data-v${version}`;

// Install the service worker
self.addEventListener('install', function(e) {
  debug('Installing');
  e.waitUntil(caches.open(savedAssets).then(function(cache) {
    // When installed Service Worker, add files to cache
    debug('Installed');
    return cache.addAll(filesToCache);
  }));
});

// Activate service worker
self.addEventListener('activate', function(e) {
  debug('Activating');
  e.waitUntil(caches.keys().then(function(keyList) {
    return Promise.all(keyList.map(function(key) {
      // If there are cached items differents to assets and data, remove them
      if (key !== savedAssets && key !== savedRequests) {
        debug('Removing old cache');
        return caches.delete(key);
      }
    }));
  }));
  return self.clients.claim();
});

// Get from cache
self.addEventListener('fetch', function(e) {
  // A request on frontend domain (asset)
  if (shouldCacheAsset(e.request.url) > -1) {
    e.respondWith(caches.match(e.request).then(function(response) {
      debug('Storing assets on cache');
      return response || fetch(e.request);
    }));

  // A request on backend domain (data)
  } else if (shouldCacheRequest(e.request.url) > -1) {
    caches.open(savedRequests).then(function(cache) {
      return fetch(e.request).then(function(response){
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