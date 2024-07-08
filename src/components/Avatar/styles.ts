import Image from 'next/image';
import styled, { css } from 'styled-components';
import { realWhite, TABLET } from '../../constants';

const avatarSize = 150;
export const avatarSizeDesktop = 200;

export const AvatarWrapper = styled.div`
  text-align: center;
`;
AvatarWrapper.displayName = 'AvatarWrapper';

interface CircleProps {
  $background: boolean;
}

export const AvatarCircle = styled.div<CircleProps>`
  ${({ $background }) => css`
    background-color: ${$background && realWhite};
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    display: inline-block;
    height: ${avatarSize}px;
    margin: 8px auto;
    overflow: hidden;
    width: ${avatarSize}px;

    ${TABLET} {
      height: ${avatarSizeDesktop}px;
      width: ${avatarSizeDesktop}px;
    }
  `}
`;
AvatarCircle.displayName = 'AvatarCircle';

interface PictureProps {
  $isLogo: boolean;
}

export const AvatarPicture = styled(Image)<PictureProps>`
  ${({ $isLogo }) => {
    if ($isLogo) {
      return css`
        height: auto;
        margin: 0 auto;
        margin-top: 50%;
        transform: translateY(-50%);
        width: 90%;
      `;
    }

    return css`
      height: auto;
      width: 100%;
    `;
  }}
`;
AvatarPicture.displayName = 'AvatarPicture';
