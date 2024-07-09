import styled, { css } from 'styled-components';
import { fakeWhite, maxWidth, TABLET, white } from '../../constants';

interface AppSectionProps {
  $isCover?: boolean;
}

const AppSection = styled.section<AppSectionProps>`
  background-color: ${white};
  display: block;
  margin: 0 auto;
  max-width: ${maxWidth};
  padding: 40px 20px;
  position: relative;
  text-align: center;
  z-index: 1;

  ${TABLET} {
    padding: 40px;
  }

  &:first-of-type {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:nth-child(odd) {
    background-color: ${fakeWhite};
  }

  ${({ $isCover }) =>
    $isCover &&
    css`
      &::before {
        background-image: url('/_next/image?url=/cover.jpeg&w=640&q=75');
        background-size: cover;
        bottom: 0;
        content: ' ';
        left: 0;
        opacity: 0.3;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
      }
    `}

  & > * {
    z-index: 1;
  }
`;
AppSection.displayName = 'AppSection';

export default AppSection;
