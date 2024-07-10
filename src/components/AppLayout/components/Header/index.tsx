import React from 'react';
import { HOME, ABOUT, SKILLS, WORK, PROJECTS } from '../../../../constants';
import { logClick, mainNavigationTracking } from '../../../../utils';
import {
  HeaderBar,
  HeaderLogo,
  HeaderLogotype,
  HeaderNav,
  HeaderNavItem,
  HeaderNavItemLink,
  HeaderSpacer,
  HeaderWrapper
} from './styles';

const Header = (): JSX.Element => (
  <HeaderWrapper>
    <HeaderBar>
      <HeaderNav role="nav">
        <HeaderNavItem>
          <HeaderNavItemLink
            href={HOME}
            onClick={() => {
              logClick(mainNavigationTracking);
            }}
          >
            <HeaderLogo alt="" src="/logo_transparent.png" />
            <HeaderLogotype alt="" src="/logotype.png" />
          </HeaderNavItemLink>
        </HeaderNavItem>

        <HeaderNavItem>
          <HeaderNavItemLink
            href={ABOUT}
            onClick={() => {
              logClick(mainNavigationTracking);
            }}
          >
            Me
          </HeaderNavItemLink>
        </HeaderNavItem>

        <HeaderNavItem>
          <HeaderNavItemLink
            href={WORK}
            onClick={() => {
              logClick(mainNavigationTracking);
            }}
          >
            Work
          </HeaderNavItemLink>
        </HeaderNavItem>

        <HeaderNavItem>
          <HeaderNavItemLink
            href={PROJECTS}
            onClick={() => {
              logClick(mainNavigationTracking);
            }}
          >
            Projects
          </HeaderNavItemLink>
        </HeaderNavItem>

        <HeaderNavItem>
          <HeaderNavItemLink
            href={SKILLS}
            onClick={() => {
              logClick(mainNavigationTracking);
            }}
          >
            Skills
          </HeaderNavItemLink>
        </HeaderNavItem>
      </HeaderNav>
    </HeaderBar>

    <HeaderSpacer />
  </HeaderWrapper>
);

export default Header;
