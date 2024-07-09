export const clearOldCaches = async (version: string): Promise<void> => {
  if (process.env.NODE_ENV !== 'test') {
    const cacheNames = await caches.keys();

    console.log('Deleting caches other than', version);

    cacheNames.forEach((name) => {
      if (
        new RegExp('next-data').test(name) === false &&
        new RegExp('start-url').test(name) === false &&
        new RegExp('workbox-precache-v2').test(name) === false &&
        new RegExp(`${version}$`).test(name) === false
      ) {
        caches.delete(name);
        console.log(`Cache <${name}> has been deleted`);
      }
    });
  }
};
