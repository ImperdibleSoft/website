import React from 'react';
import { Link } from 'react-router-dom';
import FA from '@fortawesome/react-fontawesome';
import { faPatreon } from '@fortawesome/fontawesome-free-brands';

import { ABOUT } from '../../constants/app.routes';

import Avatar from './avatar';
import kumba from '../../images/kumba.jpg';
import garona from '../../images/garona.jpg';

const Support = () => (
  <div className="App-section Support">
    <div className="App-side">
      <Avatar main={{ url: kumba }} pair={{ url: garona }} />
    </div>

    <div className="App-side is-large">
      <p>Each time I get a new patron, Kumba and Garona get a surprise.</p>

      <a className="Button Button--alt" href="https://www.patreon.com/imperdiblesoft/overview" target="_blank" rel="noopener noreferer">Give them a treat!</a> or <Link className="Link" to={`${ABOUT}#dogs`}>Meet them</Link>
    </div>
  </div>
);

Support.displayName = 'Support';

export default Support;