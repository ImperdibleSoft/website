// Init webapp things
const initWebApp = () => {
  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then(function(swReg) {
        debug('Service Worker has been registered.');
        worker = swReg;

        // if ('PushManager' in window) {
        //   // requestPushPermission(publicKey);
        // } else {
        //   debug('Push Notifications are not supported');
        // }
      })
      .catch(function(error) {
        debug('Service Worker has an error:');
        debug(error);
      });
  }
};

function debug (param) {
  console.log(`[ImperdibleSoft SW]: ${param}`);
};

export default initWebApp;