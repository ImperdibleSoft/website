import NextLink from 'next/link';
import styled, { css } from 'styled-components';
import { brand } from '../../constants';

const commonCss = css`
  color: ${brand};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Link = styled(NextLink)`
  ${commonCss}
`;
Link.displayName = 'Link';

export const NativeLink = styled.a`
  ${commonCss}
`;
NativeLink.displayName = 'NativeLink';

export default Link;
