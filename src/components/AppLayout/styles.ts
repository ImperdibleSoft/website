import styled from 'styled-components';
import { brand, footerHeight, headerHeight } from '../../constants';

export const AppLayoutWrapper = styled.div`
  background-color: ${brand};
  margin: 0 auto;
  padding: 0;
`;
AppLayoutWrapper.displayName = 'AppLayoutWrapper';

export const AppLayoutContent = styled.div`
  min-height: calc(100vh - ${headerHeight}px - ${footerHeight}px);
  min-height: calc(100svh - ${headerHeight}px - ${footerHeight}px);
  overflow: hidden;
  overflow-y: auto;
`;
AppLayoutContent.displayName = 'AppLayoutContent';
