import Image from 'next/image';
import React from 'react';
import { hobbies, pictures } from '../../constants';
import AppSection from '../AppSection';
import Heading from '../Heading';
import List from '../List';
import SplittedSection from '../SplittedSection';
import { AboutSlide, AboutSlider, AboutSliderWrapper } from './styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hobbies = (): JSX.Element => (
  <AppSection>
    <Heading>My Hobbies</Heading>

    <SplittedSection>
      <p>Some of my main hobbies are:</p>

      <List items={hobbies.map((hobby) => ({ label: hobby }))} text />
    </SplittedSection>

    <AboutSliderWrapper>
      <AboutSlider>
        {pictures.map((pic) => {
          return (
            <AboutSlide key={pic}>
              <Image
                alt="One of my hobbies"
                height="246"
                src={pic}
                width="320"
              />
            </AboutSlide>
          );
        })}
      </AboutSlider>
    </AboutSliderWrapper>
  </AppSection>
);

export default Hobbies;
