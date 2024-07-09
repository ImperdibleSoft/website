import React, { useEffect } from 'react';
import { brand } from '../../../../constants';

const loadFacebookChat = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.fbAsyncInit = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    FB.init({
      appId: '125008404402',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v2.12'
    });
  };

  (function (d, s, id) {
    if (d.getElementById(id)) {
      return;
    }
    const js = d.createElement(s) as HTMLScriptElement;
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';

    const fjs = d.getElementsByTagName(s)[0];
    fjs.parentNode?.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
};

const Messenger = () => {
  useEffect(loadFacebookChat, []);

  return (
    <div
      className="fb-customerchat"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      page_id="464614936917687"
      theme_color={brand}
    />
  );
};

export default Messenger;
