import Image from 'next/image';
import styled from 'styled-components';

const CvPreview = styled(Image).attrs(() => ({
  height: 889,
  width: 831
}))`
  height: auto !important;
  max-width: 100%;
`;
CvPreview.displayName = 'CvPreview';

export default CvPreview;
