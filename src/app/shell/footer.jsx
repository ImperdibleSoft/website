import React from 'react';

import { NAME } from '../../constants/branding';

const Footer = () => (
  <footer className="Footer">
    <p>Copyright &copy; 2018 {NAME}</p>
  </footer>
);

Footer.displayName = 'Footer';

export default Footer;