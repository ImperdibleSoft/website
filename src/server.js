import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';

import index from './index.html';
import assets from '../webpack/utils/assets.json';

const scripts = assets.scripts && assets.scripts[0];
const styles = assets.styles && assets.styles[0];

import AppComponent from 'App/app';

const render = (req, res) => {
  const context = {};

  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <AppComponent />
    </StaticRouter>
  );

  const template = index
    // Use custom styles
    .replace(
      '<style></style>',
      styles ? `<link rel="stylesheet" href="${styles}">` : '',
    )

    // Use custom scripts
    .replace(
      '<script></script>',
      scripts ? `<script src="${scripts}"></script>` : '',
    )

    // Mount application
    .replace(
      '<div id="root"></div>',
      html ? `<div id="root">${html}</div>` : '',
    );

  res.send(template);
}

// Create the server
const server = express();

// Serve assets
server.use(express.static('dist/assets'));
server.use('/assets', express.static('dist/assets'));

// Serve pages
server.use('*', render);

// Wake up the server
console.log('Server up!');
server.listen(8080);

// export default server;