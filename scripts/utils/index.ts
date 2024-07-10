import { writeFileSync } from 'fs';
import { join } from 'path';
import { brand } from '../../src/constants/styles';
import { commonManifestProps, manifestFileName } from '../constants';
import { getManifestIcons } from './icons';

const appName = 'ImperdibleSoft';

interface Author {
  email: string;
  name: string;
  url: string;
}

interface BuildProjectInfoProps {
  author: Author;
  description: string;
  dirname: string;
  repository: string;
  trackingId?: string;
  version: string;
}

const buildProjectInfo = ({
  author,
  description,
  dirname,
  repository,
  trackingId,
  version
}: BuildProjectInfoProps) => {
  const data = JSON.stringify({
    appName,
    authorEmail: author.email,
    authorName: author.name,
    description,
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
  author: Author;
  description: string;
  dirname: string;
  includePlatform?: boolean;
  start_url: string;
  scope?: string;
}

const buildManifest = ({
  author: { url },
  description,
  dirname,
  start_url,
  scope
}: BuildManifestProps) => {
  const appDomain = url.replace(/^https?:\/\//, '');
  const id = appDomain.replace(/^www\./, '');

  const manifestData = {
    ...commonManifestProps,
    name: appName,
    short_name: appName,
    description,
    background_color: brand,
    theme_color: brand,
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

type BuildFilesProps = BuildProjectInfoProps & BuildManifestProps;

export const buildFiles = ({
  author,
  description,
  dirname,
  includePlatform,
  repository,
  scope,
  start_url,
  trackingId,
  version
}: BuildFilesProps) => {
  buildProjectInfo({
    author,
    description,
    dirname,
    repository,
    trackingId,
    version
  });

  buildManifest({
    author,
    description,
    dirname,
    includePlatform,
    scope,
    start_url
  });
};
