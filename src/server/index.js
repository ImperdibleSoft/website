import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';

import index from '../index.html';
import assets from '../../webpack/utils/assets.json';
import messengerWebhook from './messenger';

// Get all favicons
// IMPORTANT: This require is making favicons work. Do not remove
require.context('../images/favicons/', false, /\.(png|jpe?g|JPE?G|gif|ico|svg)$/);

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
let server = express();

// Serve assets
// Custom scripts
if (scripts && scripts.length) {
  server.use(`${scripts}`, express.static(`dist${scripts}`));
}

// Custom styles
if (styles && styles.length) {
  server.use(`${styles}`, express.static(`dist${styles}`));
}

// Custom assets
server.use('/src', express.static('dist/src'));

// External assets
server.use('/node_modules', express.static('dist/node_modules'));

// Custom assets
server.use('/service-worker.js', express.static('dist/src/service-worker.js'));

server = messengerWebhook(server);

// Serve pages
server.use('*', render);

// Wake up the server
console.log('Server up!');
server.listen(8080);

// export default server;