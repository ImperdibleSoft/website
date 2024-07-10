import { author, description, repository, version } from '../package.json';
import { buildFiles } from './utils';

buildFiles({
  author,
  description,
  dirname: __dirname,
  repository: repository.url,
  start_url: '/',
  trackingId: 'UA-41472956-10',
  version
});
