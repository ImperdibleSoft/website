import React from 'react';
import { Link } from 'react-router-dom';
import { mainNavigationTracking, logClick } from '../../utils/analytics';

import { HOME, ABOUT, SKILLS, WORK } from '../../constants/app.routes'

import logo from '../../images/logo.png';
import logotype from '../../images/logotype.png';

const Header = () => (
  <header className="Header">
    <div className="Header-bar">
      <ul className="Header-nav" role="nav">
        <li className="Header-item">
          <Link className="Header-link" to={HOME} onClick={() => {
            logClick(mainNavigationTracking);
          }}>
            <img className="Header-logo" src={logo} />
            <img className="Header-logotype" src={logotype} />
          </Link>
        </li>
        <li className="Header-item">
          <Link className="Header-link" to={ABOUT} onClick={() => {
            logClick(mainNavigationTracking);
          }}>Me</Link>
        </li>
        <li className="Header-item">
          <Link className="Header-link" to={SKILLS} onClick={() => {
            logClick(mainNavigationTracking);
          }}>My skills</Link>
        </li>
        <li className="Header-item">
          <Link className="Header-link" to={WORK} onClick={() => {
            logClick(mainNavigationTracking);
          }}>My work</Link>
        </li>
      </ul>
    </div>
    <div className="Header-spacer" />
  </header>
);

Header.displayName = 'Header';

export default Header;