import fs from 'fs';
import path from 'path';

const filePath = path.resolve(__dirname, './assets.json');

function updateAssets (assets) {
  const publicPath = this.options.output.publicPath;
  const assetsJson = assets.toJson();

  const getAssets = ext => {
    const assetsName = assetsJson.assetsByChunkName.main;

    // There is only 1 file
    if (typeof assetsName === 'string') {
      // Match the asset tipe
      if (ext.test(assetsName)) {
        return [`${publicPath}${assetsName}`];
      }

      // It's not a valid type
      return [];
    }

    // There is more than 1 file
    return assetsName
      .filter(asset => ext.test(asset))
      .map(asset => `${publicPath}${asset}`);
  }

  const scripts = getAssets(/\.js$/);
  const styles = getAssets(/\.css$/);

  const imagesRegex = /\.(jpe?g|png|gif|svg)$/;
  const images = assetsJson.modules
    .filter(module => imagesRegex.test(module.name))
    .map((image) => {
      let compiled;

      const asset = image.assets[0];

      if (asset === undefined) {
        // Take image in base64 from source
        compiled = image.source && image.source.replace(/^(module.exports = ")/, '').slice(0, -1);
      } else {
        compiled = `${publicPath}${asset}`;
      }

      return {
        original: image.name,
        compiled,
      };
    });

  const content = {
    scripts,
    styles,
    images,
  };

  fs.writeFileSync(filePath, JSON.stringify(content));
};

export default updateAssets;