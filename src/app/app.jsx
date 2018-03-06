import React from 'react';
import ReactGA from 'react-ga';

import { ANALYTICS_TAG } from '../constants/branding';

import Header from './shell/header';
import Footer from './shell/footer';
import Support from './components/support';
import Contact from './components/contact';
import Messenger from './components/messenger';

import Router from './router';

const { NODE_ENV: ENV } = process.env;

// If not in development
if (ENV !== 'dev') {
  // Init Google Analytics
  ReactGA.initialize(ANALYTICS_TAG);
}

// Location change handler
const logPageView = () => {
  // If not in development
  if (ENV !== 'dev') {

    // Update page stats
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
};

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Header />

        <div className="App-content">
          <Router onUpdate={logPageView} />

          <Support />

          <Contact />
        </div>

        <Footer />
        <Messenger />
      </div>
    );
  }
};

App.displayName = 'App';

export default App;