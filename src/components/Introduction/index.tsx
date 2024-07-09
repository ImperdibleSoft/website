import React from 'react';
import { ABOUT, JOB, NAME } from '../../constants';
import { logClick, navigationTracking } from '../../utils';
import AppSection from '../AppSection';
import Avatar from '../Avatar';
import Heading from '../Heading';
import Link from '../Link';
import SplittedSection from '../SplittedSection';

const Introduction = (): JSX.Element => (
  <AppSection $isCover>
    <Heading $size="lg">{NAME}</Heading>

    <SplittedSection>
      <Avatar url="/avatar.jpg" />
    </SplittedSection>

    <SplittedSection $large>
      <p>
        I am a {JOB}, self-taught, <b>quick learner</b>, passionate about
        programming and able to <b>adapt quickly</b> to new enviroments. Know
        more{' '}
        <Link
          href={ABOUT}
          onClick={() => {
            logClick({
              ...navigationTracking,
              label: 'About'
            });
          }}
        >
          about me
        </Link>
        .
      </p>
    </SplittedSection>
  </AppSection>
);

export default Introduction;
