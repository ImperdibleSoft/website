import styled from 'styled-components';
import { gray, maxWidth, white } from '../../../../constants';

export const FooterWrapper = styled.footer`
  background-color: ${white};
  display: block;
  margin: 0 auto;
  max-width: ${maxWidth};
  padding: 8px 16px;
  text-align: center;
  width: 100%;

  & > * {
    color: ${gray};
    font-size: 0.8rem;
    margin: 16px auto;
  }
`;
FooterWrapper.displayName = 'FooterWrapper';
