import React from 'react';
import { NAME } from '../../constants';
import {
  getProgrammingExperience,
  logClick,
  navigationTracking
} from '../../utils';
import AppSection from '../AppSection';
import Avatar from '../Avatar';
import Heading from '../Heading';
import Link from '../Link';
import SplittedSection from '../SplittedSection';
import SkillTag from '../SkillTag';

const experience = getProgrammingExperience();

const cityName = 'Las Palmas de Gran Canaria';
const cityLink =
  'https://www.google.es/maps/place/Las+Palmas+de+Gran+Canaria,+Las+Palmas/@28.117432,-15.4746365,13z/data=!3m1!4b1!4m5!3m4!1s0xc40950e91c097d1:0xab36b5ac5338ba65!8m2!3d28.1235459!4d-15.4362574';

const PersonalDescription = (): JSX.Element => (
  <AppSection>
    <Heading>About me</Heading>

    <SplittedSection>
      <Avatar url="/about/me.jpg" />
    </SplittedSection>

    <SplittedSection $large>
      <p>My name is {NAME}.</p>
      <p>
        I{"'"}m from{' '}
        <Link
          href={cityLink}
          target="_blank"
          rel="noopener noreferer"
          onClick={() => {
            logClick({
              ...navigationTracking,
              label: cityName
            });
          }}
        >
          {cityName}
        </Link>
        , but now I{"'"}m living in Madrid.
      </p>
      <p>
        I{"'"}ve been coding for more than {experience} years, starting with{' '}
        <b>Basic 5.0</b>, and trying different languages such as Java, Visual
        Basic or C++.
      </p>
      <p>
        Finally, I{"'"}ve found my passion and favorite stack on{' '}
        <SkillTag skill="HTML" />, <SkillTag skill="CSS" /> and{' '}
        <SkillTag skill="Javascript" />.
      </p>
    </SplittedSection>
  </AppSection>
);

export default PersonalDescription;
