const { NODE_ENV: ENV } = process.env;
const shouldDebug = ENV === 'dev';

export const log = (...args) => {
  if (shouldDebug) console.log('[DEV]: ', ...args);
};

export const warn = (...args) => {
  if (shouldDebug) console.warn('[DEV]: ', ...args);
};

export const error = (...args) => {
  if (shouldDebug) console.error('[DEV]: ', ...args);
};