import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Get custom styles
import '../styles/main';

// Get favicon
import '../images/favicon.ico';

// Get manifest
import manifest from '../manifest';

// Get the URL of the file
import config from '../config';

import AppComponent from 'App/app';
import ScrollTop from 'App/components/scroll-top';

ReactDom.render(
  <BrowserRouter>
    <ScrollTop>
      <AppComponent />
    </ScrollTop>
  </BrowserRouter>,
  document.getElementById('root'),
);
