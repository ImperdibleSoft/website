import Slider from 'react-slick';
import styled from 'styled-components';
import { TABLET } from '../../constants';
import SplittedSection from '../SplittedSection';

export const AboutSliderWrapper = styled(SplittedSection).attrs(() => ({
  $large: true
}))`
  margin-left: -20px;
  padding: 0;
  width: calc(100% + 40x);

  ${TABLET} {
    margin: 0;
    width: 60%;
  }
`;
AboutSliderWrapper.displayName = 'AboutSliderWrapper';

export const AboutSlider = styled(Slider).attrs(() => ({
  adaptiveHeight: true,
  arrows: false,
  autoplay: true,
  dots: false,
  draggable: true
}))`
  @import '~slick-carousel/slick/slick.css';
  @import '~slick-carousel/slick/slick-theme.css';

  display: block;
  margin: 0 auto;
  max-width: 100%;
  width: 320px !important;
`;
AboutSlider.displayName = 'AboutSlider';

export const AboutSlide = styled.div``;
AboutSlide.displayName = 'AboutSlide';
