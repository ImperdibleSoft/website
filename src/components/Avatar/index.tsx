import React from 'react';
import {
  AvatarCircle,
  AvatarPicture,
  avatarSizeDesktop,
  AvatarWrapper
} from './styles';

interface Props {
  className?: string;
  background?: boolean;
  height?: number;
  isLogo?: boolean;
  url: string;
  width?: number;
}

const Avatar = ({
  className = '',
  background = false,
  height,
  isLogo = false,
  url,
  width
}: Props): JSX.Element => (
  <AvatarWrapper className={className}>
    <AvatarCircle $background={background}>
      <AvatarPicture
        alt=""
        $isLogo={isLogo}
        height={height ?? avatarSizeDesktop}
        src={url}
        width={width ?? avatarSizeDesktop}
      />
    </AvatarCircle>
  </AvatarWrapper>
);

export default Avatar;
