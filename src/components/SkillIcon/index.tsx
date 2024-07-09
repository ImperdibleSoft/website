import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IconImg, IconSvg, IconWrapper } from './styles';

const renderCustomIcon = (icon: IconDefinition | string): JSX.Element => {
  if (typeof icon !== 'string') {
    return <FontAwesomeIcon icon={icon} />;
  }

  if (/\.svg$/.test(icon)) {
    return <IconSvg {...{ src: icon }} />;
  }

  return <IconImg {...{ alt: '', height: 40, src: icon, width: 40 }} />;
};

interface Props {
  icon: IconDefinition | string;
  large?: boolean;
}

const SkillIcon = ({ icon, large }: Props): JSX.Element | null => (
  <IconWrapper $large={large}>{renderCustomIcon(icon)}</IconWrapper>
);

export default SkillIcon;
