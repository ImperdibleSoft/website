import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import {
  brand,
  headerHeight,
  maxWidth,
  TABLET,
  white
} from '../../../../constants';

const CommonCss = css`
  display: block;
`;

const BarCss = css`
  height: ${headerHeight}px;
  width: 100%;
`;

export const HeaderWrapper = styled.header`
  ${CommonCss}

  position: relative;
`;
HeaderWrapper.displayName = 'HeaderWrapper';

export const HeaderBar = styled.div`
  ${CommonCss}
  ${BarCss}

  background-color: ${brand};
  color: ${white};
  left: 0;
  position: fixed;
  text-align: center;
  top: 0;
  overflow: hidden;
  z-index: 20;
`;
HeaderBar.displayName = 'HeaderBar';

const NavCss = css`
  color: ${white};
  display: inline-block;
  font-weight: 700;
  position: relative;
`;

export const HeaderNav = styled.div`
  ${NavCss}

  height: ${headerHeight};
  margin: 0 auto;
  max-width: ${maxWidth};
  text-align: left;
  width: 100%;
`;
HeaderNav.displayName = 'HeaderNav';

export const HeaderNavItem = styled.div`
  ${NavCss}

  padding: 0 8px;
  vertical-align: middle;
`;
HeaderNavItem.displayName = 'HeaderNavItem';

export const HeaderNavItemLink = styled(Link)`
  color: inherit;
  cursor: pointer;
  display: inline-block;
  font-weight: inherit;
  text-decoration: none;
`;
HeaderNavItemLink.displayName = 'HeaderNavItemLink';

const LogoCss = css`
  height: 40px;
  margin-top: 8px;
`;

export const HeaderLogo = styled(Image).attrs(() => ({
  height: 40,
  width: 40
}))`
  ${LogoCss}

  ${TABLET} {
    display: none;
  }
`;
HeaderLogo.displayName = 'HeaderLogo';

export const HeaderLogotype = styled(Image).attrs(() => ({
  height: 40,
  width: 213
}))`
  ${LogoCss}

  display: none;

  ${TABLET} {
    display: block;
  }
`;
HeaderLogotype.displayName = 'HeaderLogotype';

export const HeaderSpacer = styled.div`
  ${CommonCss}
  ${BarCss}

  z-index: 10;
`;
HeaderSpacer.displayName = 'HeaderSpacer';
