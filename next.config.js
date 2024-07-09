// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextPWA = require('next-pwa');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { appName, version } = require('./src/constants/project-info.json');

console.log(`[${appName}] Building NextJS app v${version}`);

const getNextConfig = ({ configDomain }) => {
  const config = {
    compiler: {
      styledComponents: true
    },
    images: {
      remotePatterns: [
        // Local development
        {
          hostname: '*.localhost'
        }
      ]
    },
    reactStrictMode: true
  };

  if (configDomain) {
    config.images?.remotePatterns?.push({ hostname: configDomain });
  }

  return config;
};

const getNextPwaConfig = (version) => {
  const StaleWhileRevalidate = 'StaleWhileRevalidate';

  const commonOptions = {
    cacheableResponse: { statuses: [0, 200] },
    expiration: { maxAgeSeconds: 365 * 24 * 60 * 60 }
  };

  return {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    sw: 'service-worker.js',
    runtimeCaching: [
      // 1. Assets
      {
        handler: StaleWhileRevalidate,
        options: {
          ...commonOptions,
          cacheName: `assets-${version}`
        },
        urlPattern: ({ url: { href } }) => {
          // Externals
          if (new RegExp('^https://yt3.googleusercontent.com/').test(href)) {
            return true;
          }

          return (
            new RegExp(`^https://www.imperdiblesoft.com`).test(
              href.toLowerCase()
            ) && /\.(gif|jpeg|jpg|png|svg|webp)$/.test(href.toLowerCase())
          );
        }
      },

      // 2. Bundle
      {
        handler: StaleWhileRevalidate,
        options: {
          ...commonOptions,
          cacheName: `bundles-${version}`
        },
        urlPattern: ({ url: { href } }) => {
          // Externals
          if (
            new RegExp('^https://fonts.googleapis.com/icon').test(href) ||
            new RegExp('^https://fonts.gstatic.com/s/materialicons').test(
              href
            ) ||
            new RegExp('^https://cdn.jsdelivr.net/npm/pwacompat').test(href)
          ) {
            return true;
          }

          return (
            new RegExp(`^https://www.imperdiblesoft.com`).test(
              href.toLowerCase()
            ) && /\.(html|css|js|woff|woff2)$/.test(href.toLowerCase())
          );
        }
      },

      // 4. Documents
      {
        handler: StaleWhileRevalidate,
        options: {
          ...commonOptions,
          cacheName: `bundles-${version}`
        },
        urlPattern: ({ url: { href } }) => {
          return new RegExp(`^https://www.imperdiblesoft.com`).test(
            href.toLowerCase()
          );
        }
      }
    ]
  };
};

const nextConfig = getNextConfig({
  configDomain: '*.imperdiblesoft.com',
  version
});

const withPWA = nextPWA(getNextPwaConfig(version));

module.exports = withPWA(nextConfig);
