import styled, { css } from 'styled-components';
import { TABLET } from '../../constants';
import Heading from '../Heading';

interface WorkSampleWrapperProps {
  $right: boolean;
}

export const WorkSampleWrapper = styled.div<WorkSampleWrapperProps>`
  display: flex;
  flex-direction: column;

  ${({ $right }) => css`
    ${TABLET} {
      flex-direction: ${$right ? 'row-reverse' : 'row'};

      ${Heading},
      & > div > p {
        text-align: ${$right ? 'right' : 'left'};
      }
    }
  `}
`;
WorkSampleWrapper.displayName = 'WorkSampleWrapper';
