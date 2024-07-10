import { writeFileSync } from 'fs';
import { join } from 'path';
import { brand } from '../../src/constants/styles';
import { commonManifestProps, manifestFileName } from '../constants';
import { getManifestIcons } from './icons';

const appColor = brand;
const appName = 'ImperdibleSoft';
const id = 'imperdiblesoft.com';
const appDomain = `www.${id}`;

interface BuildProjectInfoProps {
  author: {
    email: string;
    name: string;
  };
  description: string;
  dirname: string;
  repository: string;
  trackingId?: string;
  version: string;
}

export const buildProjectInfo = ({
  author,
  description,
  dirname,
  repository,
  trackingId,
  version
}: BuildProjectInfoProps) => {
  const data = JSON.stringify({
    appName,
    appColor,
    description,
    authorEmail: author.email,
    authorName: author.name,
    repository,
    siteName: appName,
    trackingId,
    version
  });

  console.log(`[${appName}] Updating project-info.json <${version}>`);

  const output = join(dirname, '../src/constants/project-info.json');
  writeFileSync(output, data, {
    encoding: 'utf-8'
  });
};

interface BuildManifestProps {
  description: string;
  dirname: string;
  includePlatform?: boolean;
  start_url: string;
  scope?: string;
}

export const buildManifest = ({
  description,
  dirname,
  start_url,
  scope
}: BuildManifestProps) => {
  const manifestData = {
    ...commonManifestProps,
    name: appName,
    short_name: appName,
    description,
    background_color: appColor,
    theme_color: appColor,
    id,
    start_url,
    scope: scope ?? start_url,
    scope_extensions: [{ origin: appDomain }],
    icons: getManifestIcons(dirname)
  };

  const data = JSON.stringify(manifestData);

  console.log(
    `[${appName}] Updating ${manifestFileName} <${manifestData.name}>`
  );

  const output = join(dirname, '../public/', manifestFileName);
  writeFileSync(output, data, {
    encoding: 'utf-8'
  });
};
