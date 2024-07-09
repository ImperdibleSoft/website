import Image from 'next/image';
import styled, { css } from 'styled-components';
import Svg from '../Svg';

interface IconWrapperProps {
  $large?: boolean;
}

export const IconWrapper = styled.div<IconWrapperProps>`
  align-items: center;
  clear: both;
  float: none;
  height: 1em;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  padding: 0;
  vertical-align: top;
  width: 1em;

  & > svg {
    max-width: 100%;
  }

  ${({ $large }) => {
    if ($large) {
      return css`
        display: flex;
      `;
    }

    return css`
      display: inline-flex;
    `;
  }}
`;
IconWrapper.displayName = 'IconWrapper';

export const IconImg = styled(Image)`
  height: auto;
  max-height: 100%;
  max-width: 100%;
  width: auto;
`;
IconImg.displayName = 'IconImg';

export const IconSvg = styled(Svg)`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
IconSvg.displayName = 'IconSvg';
