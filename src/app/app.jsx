import React from 'react';
import { withRouter } from 'react-router';
import ReactGA from 'react-ga';
import p from 'prop-types';


import Header from './shell/header';
import Footer from './shell/footer';
import Support from './components/support';
import Contact from './components/contact';
import Messenger from './components/messenger';

import Router from './router';
import { initialize, logNavigation } from '../utils/analytics'
import { log } from '../utils/analytics';

class App extends React.Component {
  componentDidMount() {
    initialize();
  }

  componentDidUpdate(prevProps) {
    const currPage = this.props.location.pathname;
    const prevPage = prevProps.location.pathname;

    if (prevPage !== currPage) {
      logNavigation(currPage);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />

        <div className="App-content">
          <Router onUpdate={logNavigation} />

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