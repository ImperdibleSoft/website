import React from 'react';
import { NAME, version } from '../../../../constants';
import { FooterWrapper } from './styles';

const Footer = (): JSX.Element => (
  <FooterWrapper>
    <p>
      Copyright &copy; {new Date().getFullYear()} {NAME} | v{version}
    </p>
  </FooterWrapper>
);

export default Footer;
