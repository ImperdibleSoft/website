import React from 'react';
import styled from 'styled-components';
import AppSection from '../AppSection';

export const StyledIframe = styled.iframe`
  height: calc(100vw * 9 / 16);
  max-height: calc(1024px * 9 / 16);
  width: 100%;
`;
StyledIframe.displayName = 'AboutVideo';

const VideoPresentation = (): JSX.Element => (
  <AppSection>
    <StyledIframe
      src="https://www.youtube-nocookie.com/embed/videoseries?list=PLXXxQbu2tcg0xt_4yjBZUBeqoPysf9DUr"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  </AppSection>
);

export default VideoPresentation;
