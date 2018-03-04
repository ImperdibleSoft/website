import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HOME, ABOUT, SKILLS, WORK } from '../constants/app.routes';

import Landing from './modules/landing';
import About from './modules/about';
import Skills from './modules/skills';
import Work from './modules/work';

class Router extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path={HOME} component={Landing} />
        <Route path={ABOUT} component={About} />
        <Route path={SKILLS} component={Skills} />
        <Route path={WORK} component={Work} />
      </Switch>
    );
  }
}

Router.displayName = 'Router';

export default Router;