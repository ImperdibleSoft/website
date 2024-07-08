const getMinSizeRule = (limit: number) => `(min-width: ${limit}px)`;
const getMaxSizeRule = (limit: number) => `(max-width: ${limit}px)`;

const getMinMediaQuery = (limit: number) =>
  `@media screen and ${getMinSizeRule(limit)}`;
const getMaxMediaQuery = (limit: number) =>
  `@media screen and ${getMaxSizeRule(limit)}`;
const getMinMaxMediaQuery = (min: number, max: number) =>
  `${getMinMediaQuery(min)} and ${getMaxSizeRule(max)}`;

const landscape = '(orientation: landscape)';

// Mobile
export const MOBILE = getMinMediaQuery(320);
export const MAX_MOBILE = getMaxMediaQuery(479);
export const ONLY_MOBILE = getMinMaxMediaQuery(320, 479);
export const MOBILE_L = getMinMediaQuery(480);
export const MAX_MOBILE_L = getMaxMediaQuery(511);
export const ONLY_MOBILE_L = getMinMaxMediaQuery(480, 511);
export const MOBILE_XL = getMinMediaQuery(512);
export const MAX_MOBILE_XL = getMaxMediaQuery(589);
export const ONLY_MOBILE_XL = getMinMaxMediaQuery(512, 589);
export const MOBILE_XXL = getMinMediaQuery(590);
export const MAX_MOBILE_XXL = getMaxMediaQuery(719);
export const ONLY_MOBILE_XXL = getMinMaxMediaQuery(590, 719);

// Tablet
export const TABLET = getMinMediaQuery(720);
export const MAX_TABLET = getMaxMediaQuery(967);
export const ONLY_TABLET = getMinMaxMediaQuery(720, 967);
export const TABLET_L = getMinMediaQuery(968);
export const MAX_TABLET_L = getMaxMediaQuery(1023);
export const ONLY_TABLET_L = getMinMaxMediaQuery(968, 1023);

// Desktop
export const DESKTOP = getMinMediaQuery(1024);
export const MAX_DESKTOP = getMaxMediaQuery(1279);
export const ONLY_DESKTOP = getMinMaxMediaQuery(1024, 1279);
export const DESKTOP_L = getMinMediaQuery(1280);
export const MAX_DESKTOP_L = getMaxMediaQuery(1919);
export const ONLY_DESKTOP_L = getMinMaxMediaQuery(1280, 1919);

// Bigger screens
export const HD_DISPLAY = getMinMediaQuery(1920);

// Mixes
export const LANDSCAPE = `@media screen and ${landscape}`;
export const MOBILE_LANDSCAPE = `@media screen and ${getMaxSizeRule(
  967
)} and ${landscape}`;
export const LANDSCAPE_OR_TABLET = `@media screen and ${landscape}, screen and ${getMinSizeRule(
  720
)}`;
export const MOBILE_LANDSCAPE_OR_TABLET = `${MOBILE_LANDSCAPE}, screen and ${getMinSizeRule(
  720
)}`;
export const TABLET_LANDSCAPE = `@media screen and ${landscape} and ${getMinSizeRule(
  720
)}`;
export const DESKTOP_LANDSCAPE = `@media screen and ${landscape} and ${getMinSizeRule(
  1024
)}`;
export const BIG_WIDTH_AT_50_PERCENT = `@media screen and ${getMinSizeRule(
  400
)} and ${getMaxSizeRule(719)}, screen and ${getMinSizeRule(968)}`;

const getQuery = (query: string) => query.replace('@media screen and ', '');
export default getQuery;
