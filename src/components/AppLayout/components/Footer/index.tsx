import React from 'react';
import { NAME, repository, version } from '../../../../constants';
import { renderIcon } from '../../../../utils';
import Link from '../../../Link';
import { FooterWrapper } from './styles';

const Footer = (): JSX.Element => (
  <FooterWrapper>
    <p>
      {NAME} &ndash; Copyright &copy; 2012 &ndash; {new Date().getFullYear()}{' '}
    </p>

    <p>
      <Link href={repository} target="_blank">
        {renderIcon('Github')} Source code
      </Link>{' '}
      &ndash; v{version}
    </p>
  </FooterWrapper>
);

export default Footer;
