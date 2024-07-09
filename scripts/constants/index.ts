import {
  Display,
  EdgeSidePannel,
  LaunchHandler,
  LinkHandler,
  Permission,
  TextDirection
} from '../types';

const categories: string[] = ['lifestyle', 'utilities'];

const dir: TextDirection = 'ltr';

const display: Display = 'standalone';

const edge_side_panel: EdgeSidePannel = {
  preferred_width: 400
};

const handle_links: LinkHandler = 'preferred';

const launch_handler: LaunchHandler = {
  client_mode: ['navigate-existing', 'auto']
};

const permissions: Permission[] = ['unlimitedStorage'];

const prefer_related_applications: boolean = false;

export const commonManifestProps = {
  categories,
  display,
  dir,
  edge_side_panel,
  handle_links,
  launch_handler,
  permissions,
  prefer_related_applications
};

export const manifestFileName = 'manifest.json';
export const manifestFaviconsFolder = 'favicons';
export const manifestScreenshotsFolder = 'screenshots';

export type {
  ManifestIcon,
  ManifestScreenshot,
  RelatedApp,
  ScreenShotFormFactor,
  ScreenShotPlatform,
  DistributionPlatform
} from '../types';
