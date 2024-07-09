import ReactGA from 'react-ga';
import { trackingId } from '../constants';

const { NODE_ENV: ENV } = process.env;
const debuggingGA = false;
let initialized = false;

const isLoggingEnabled = debuggingGA || ENV !== 'development';
const shouldInitialize = () => !initialized && isLoggingEnabled;
const shouldLog = () => initialized && isLoggingEnabled;

export const contactTracking = {
  category: 'Button Contact',
  action: 'User clicked in a contact button'
};
export const socialTracking = {
  category: 'Button Social',
  action: 'User clicked in a social button'
};
export const iconTracking = {
  category: 'Icon',
  action: 'User clicked an icon'
};
export const buttonPrimaryTracking = {
  category: 'Button Primary',
  action: 'User clicked in a primary button'
};
export const buttonSecondaryTracking = {
  category: 'Button Secondary',
  action: 'User clicked in a secondary button'
};
export const linkTracking = {
  category: 'Link',
  action: 'User clicked in a link'
};
export const navigationTracking = {
  category: 'Navigation',
  action: 'User clicked on a navigation link'
};
export const mainNavigationTracking = {
  category: 'Navigation',
  action: 'User clicked on navigation bar'
};

// Location change handler
export const logNavigation = (location: string) => {
  // If not in development
  if (shouldLog()) {
    // Update page stats
    console.log('Logging page navigation');
    ReactGA.set({ page: location });
    ReactGA.pageview(location);
  }
};

export const initialize = () => {
  // If not in development and not initialized
  if (shouldInitialize()) {
    initialized = true;

    // Init Google Analytics
    console.log(`Initializing Google Analytics tag ${trackingId}`);
    ReactGA.initialize(trackingId, {
      debug: debuggingGA
    });
    logNavigation(location.href);
  }
};

export const logClick = ({
  category = '',
  action = '',
  label = '',
  value = 0,
  nonInteraction = false
}) => {
  if (shouldLog()) {
    const event = {
      category,
      action,
      label,
      value,
      nonInteraction
    };

    console.log('Logging mouse click', event);
    ReactGA.event(event);
  }
};
