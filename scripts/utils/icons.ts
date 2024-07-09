import { readdirSync } from 'fs';
import { join } from 'path';
import { ManifestIcon, manifestFaviconsFolder } from '../constants';

const getIconFromFilename = (fileName: string): ManifestIcon | undefined => {
  const [rawSize] = fileName.match(/x[0-9]{2,3}/) ?? [];
  if (!rawSize) {
    return undefined;
  }

  const size = rawSize.replace('x', '');

  return {
    src: `/${manifestFaviconsFolder}/${fileName}`,
    sizes: `${size}x${size}`,
    type: 'image/png'
  };
};

export const getManifestIcons = (dirname: string): ManifestIcon[] => {
  const iconsPath = join(dirname, '../public/', manifestFaviconsFolder);

  try {
    const fileNames: string[] = readdirSync(iconsPath);

    return fileNames
      .map(getIconFromFilename)
      .filter((icon) => !!icon) as ManifestIcon[];
  } catch {
    console.error(`The folder ${iconsPath} doesn't exist`);
    return [];
  }
};
