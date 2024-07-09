import React from 'react';
import packageJson from '../../../../../package.json';
import { NAME } from '../../../../constants';
import { FooterWrapper } from './styles';

const { version } = packageJson;

const Footer = (): JSX.Element => (
  <FooterWrapper>
    <p>
      Copyright &copy; {new Date().getFullYear()} {NAME} | v{version}
    </p>
  </FooterWrapper>
);

export default Footer;
