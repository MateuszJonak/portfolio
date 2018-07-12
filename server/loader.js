import path from 'path';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';

import App from '../src/app/Root.js';
import manifest from '../build/asset-manifest.json';

export default (req, res) => {
  const injectHTML = (data, { html, title, meta, body, scripts }) => {
    data = data.replace('<html>', `<html ${html}>`);
    data = data.replace(/<title>.*?<\/title>/g, title);
    data = data.replace('</head>', `${meta}</head>`);
    data = data.replace(
      '<div id="root"></div>',
      `<div id="root">${body}</div>`,
    );
    data = data.replace('</body>', scripts.join('') + '</body>');

    return data;
  };

  fs.readFile(
    path.resolve(__dirname, '../build/index.html'),
    'utf8',
    (err, htmlData) => {
      if (err) {
        console.error('Read error', err);

        return res.status(404).end();
      }

      const modules = [];
      const body = renderToString(<App />);
      const extractAssets = (assets, chunks) =>
        Object.keys(assets)
          .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
          .map(k => assets[k]);
      const extraChunks = extractAssets(manifest, modules).map(
        c => `<script type="text/javascript" src="/${c}"></script>`,
      );

      const helmet = Helmet.renderStatic();

      const html = injectHTML(htmlData, {
        html: helmet.htmlAttributes.toString(),
        title: helmet.title.toString(),
        meta: helmet.meta.toString(),
        body,
        scripts: extraChunks,
      });

      res.send(html);
    },
  );
};
