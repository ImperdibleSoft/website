import styled, { css } from 'styled-components';
import { DESKTOP } from '../../constants';
import Heading from '../Heading';

interface SplittedSectionProps {
  $large?: boolean;
  $left?: boolean;
  $right?: boolean;
}

const SplittedSection = styled.div<SplittedSectionProps>`
  ${({ $large = false, $left = false, $right = false }) => css`
    display: inline-block;
    padding: 20px;
    text-align: left;
    vertical-align: middle;
    width: 100%;

    ${DESKTOP} {
      width: ${$large ? '60%' : '40%'};
    }

    ${($left || $right) &&
    css`
      ${Heading},
      p {
        text-align: left;
      }
    `}

    ${$left &&
    css`
      ${Heading},
      p {
        ${DESKTOP} {
          text-align: right;
        }
      }
    `}
  `}
`;
SplittedSection.displayName = 'SplittedSection';

export default SplittedSection;
