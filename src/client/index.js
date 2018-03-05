import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Get manifest
import '../manifest';
import '../browserconfig.xml';

// Get favicon
import '../images/favicons/favicon.ico';

// Get custom styles
import '../styles/main';

// Service worker
import initWebApp from './sw';

// Get the URL of the file
// import config from '../config';

import AppComponent from 'App/app';
import ScrollTop from 'App/components/scroll-top';

// Init service worker
initWebApp();

// Init web app
ReactDom.render(
  <BrowserRouter>
    <ScrollTop>
      <AppComponent />
    </ScrollTop>
  </BrowserRouter>,
  document.getElementById('root'),
);
