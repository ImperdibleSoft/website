import styled from 'styled-components';
import { brand } from '../../constants';

export const AppLayoutWrapper = styled.div`
  background-color: ${brand};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  min-height: 100svh;
  padding: 0;
`;
AppLayoutWrapper.displayName = 'AppLayoutWrapper';

export const AppLayoutContent = styled.div`
  flex: 1;
  overflow: hidden;
  overflow-y: auto;
`;
AppLayoutContent.displayName = 'AppLayoutContent';
