import { description, version } from '../package.json';
import { buildManifest, buildProjectInfo } from './utils';

buildProjectInfo({
  description,
  dirname: __dirname,
  trackingId: 'UA-41472956-10',
  version
});

buildManifest({
  description,
  dirname: __dirname,
  start_url: '/'
});
