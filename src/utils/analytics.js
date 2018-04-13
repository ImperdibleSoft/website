import ReactGA from 'react-ga';
import { log } from './logger';

import { ANALYTICS_TAG } from '../constants/branding';

const { NODE_ENV: ENV } = process.env;
const debuggingGA = true;
let initialized = false;

export const initialize = () => {
  // If not in development and not initialized
  if (!initialized && (debuggingGA || ENV !== 'dev')) {
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
  if (initialized && (debuggingGA || ENV !== 'dev')) {

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
  if (initialized && (debuggingGA || ENV !== 'dev')) {
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