import styled, { css } from 'styled-components';
import { fontTitle } from '../../constants';
import { Size } from '../../types';

interface HeadingSize {
  $size?: Size;
}

const Heading = styled.h1<HeadingSize>`
  display: inline-block;
  font-family: ${fontTitle};
  font-weight: 300;
  margin-bottom: 20px;
  width: 100%;

  ${({ $size = 'md' }) => {
    let size = 1.7;
    switch ($size) {
      case 'xl':
        size = 2.1;
        break;

      case 'lg':
        size = 1.9;
        break;

      case 'sm':
        size = 1.5;
        break;

      case 'xs':
        size = 1.3;
        break;

      case 'md':
      default:
        size = 1.7;
    }

    return css`
      font-size: ${size}rem;
    `;
  }}
`;
Heading.displayName = 'Heading';

export default Heading;
