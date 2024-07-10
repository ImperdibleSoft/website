import { author, description, repository, version } from '../package.json';
import { buildManifest, buildProjectInfo } from './utils';

buildProjectInfo({
  author,
  description,
  dirname: __dirname,
  repository: repository.url,
  trackingId: 'UA-41472956-10',
  version
});

buildManifest({
  description,
  dirname: __dirname,
  start_url: '/'
});
