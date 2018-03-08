import React from 'react';

import packageJson from '../../../package.json';
import { NAME } from '../../constants/branding';

const { version } = packageJson;

const Footer = () => (
  <footer className="Footer">
    <p>Copyright &copy; 2018 {NAME} | v{version}</p>
  </footer>
);

Footer.displayName = 'Footer';

export default Footer;