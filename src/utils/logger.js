const { NODE_ENV: ENV } = process.env;
const shouldDebug = ENV === 'dev';

export const log = (...args) => {
  if (shouldDebug) console.log('[imperdiblesoft.com]: ', ...args);
};

export const info = (...args) => {
  if (shouldDebug) console.info('[imperdiblesoft.com]: ', ...args);
};

export const warn = (...args) => {
  if (shouldDebug) console.warn('[imperdiblesoft.com]: ', ...args);
  //else Log to Sentry
};

export const error = (...args) => {
  if (shouldDebug) console.error('[imperdiblesoft.com]: ', ...args);
  //else Log to Sentry
};