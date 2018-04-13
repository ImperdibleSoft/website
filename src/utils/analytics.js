import ReactGA from 'react-ga';
import { log } from './logger';

import { ANALYTICS_TAG } from '../constants/branding';

const { NODE_ENV: ENV } = process.env;
const debuggingGA = false;
let initialized = false;

const isLoggingEnabled = (debuggingGA || ENV !== 'dev');
const shouldInitialize = () => (!initialized && isLoggingEnabled);
const shouldLog = () => (initialized && isLoggingEnabled);

export const contactTracking = {
  category: 'Button Contact',
  action: 'User clicked in a contact button',
};
export const socialTracking = {
  category: 'Button Social',
  action: 'User clicked in a social button',
};
export const iconTracking = {
  category: 'Icon',
  action: 'User clicked an icon',
};
export const buttonPrimaryTracking = {
  category: 'Button Primary',
  action: 'User clicked in a primary button',
};
export const buttonSecondaryTracking = {
  category: 'Button Secondary',
  action: 'User clicked in a secondary button',
};
export const linkTracking = {
  category: 'Link',
  action: 'User clicked in a link',
};
export const navigationTracking = {
  category: 'Navigation',
  action: 'User clicked on a navigation link',
};
export const mainNavigationTracking = {
  category: 'Navigation',
  action: 'User clicked on navigation bar',
};

export const initialize = () => {
  // If not in development and not initialized
  if (shouldInitialize()) {
    initialized = true;

    // Init Google Analytics
    log(`Initializing Google Analytics tag ${ANALYTICS_TAG}`);
    ReactGA.initialize(ANALYTICS_TAG, {
      debug: debuggingGA,
    });
    logNavigation();
  }
}

// Location change handler
export const logNavigation = (location) => {
  // If not in development
  if (shouldLog()) {

    // Update page stats
    log('Logging page navigation');
    ReactGA.set({ page: location });
    ReactGA.pageview(location);
  }
};

export const logClick = ({
  category = '',
  action = '',
  label = '',
  value = 0,
  nonInteraction = false,
}) => {
  if (shouldLog()) {
    const event = {
      category,
      action,
      label,
      value,
      nonInteraction,
    };

    log('Logging mouse click', event);
    ReactGA.event(event);
  }
}