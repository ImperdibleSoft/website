import React from 'react';
import { withRouter } from 'react-router';
import ReactGA from 'react-ga';
import p from 'prop-types';

import { ANALYTICS_TAG } from '../constants/branding';

import Header from './shell/header';
import Footer from './shell/footer';
import Support from './components/support';
import Contact from './components/contact';
import Messenger from './components/messenger';

import Router from './router';

const { NODE_ENV: ENV } = process.env;
const debuggingGA = true;
let initialized = false;

const log = (...args) => {
  if (NODE_ENV === 'dev') {
    console.log('[DEV]: ', ...args);
  }
};

class App extends React.Component {
  componentDidMount() {
    this.initReactGA();
  }

  componentDidUpdate(prevProps) {
    const currPage = this.props.location.pathname;
    const prevPage = prevProps.location.pathname;
    log(prevProps.location, this.props.location);

    if (prevPage !== currPage) {
      this.logPageView();
    }
  }


  initReactGA() {
    // If not in development and not initialized
    if (debuggingGA || (ENV !== 'dev' && !initialized)) {
      initialized = true;

      // Init Google Analytics
      log(`Initializing Google Analytics tag ${ANALYTICS_TAG}`);
      ReactGA.initialize(ANALYTICS_TAG, {
        debug: debuggingGA,
      });
      this.logPageView();
    }
  }

  // Location change handler
  logPageView() {
    // If not in development
    if (debuggingGA || (ENV !== 'dev' && initialized)) {

      // Update page stats
      log(`Updating page view`);
      ReactGA.set({ page: this.props.location.pathname });
      ReactGA.pageview(this.props.location.pathname);
    }
  };

  render() {
    return (
      <div className="App">
        <Header />

        <div className="App-content">
          <Router onUpdate={this.logPageView} />

          <Support />

          <Contact />
        </div>

        <Footer />
        <Messenger />
      </div>
    );
  }
};

App.propTypes = {
  match: p.object.isRequired,
  location: p.object.isRequired,
  history: p.object.isRequired,
};

App.displayName = 'App';

export default withRouter(App);