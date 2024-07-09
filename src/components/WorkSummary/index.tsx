import React from 'react';
import { CV_LINK, WORK } from '../../constants';
import {
  getProgrammingExperience,
  logClick,
  navigationTracking
} from '../../utils';
import AppSection from '../AppSection';
import CvPreview from '../CvPreview';
import Heading from '../Heading';
import Link from '../Link';
import List from '../List';
import SplittedSection from '../SplittedSection';

const WorkSummary = (): JSX.Element => (
  <AppSection>
    <Heading $size="lg">My work</Heading>

    <SplittedSection $large>
      <p>
        I{"'"}ve been coding for <b>{getProgrammingExperience()} years</b> (at
        least).
      </p>
      <p>
        During this time, I have worked in large (3.000+ employees) and small
        (15 employees) companies.
      </p>
      <p>
        My passion for coding also has pushed me to create several{' '}
        <b>personal projects</b> during my free time.
      </p>

      <List
        iconList
        items={[
          {
            href: CV_LINK,
            target: '_blank',
            label: 'Download my CV',
            onClick: () => {
              logClick({ ...navigationTracking, label: 'Download CV' });
            }
          }
        ]}
        text
      />

      <p>
        Know more{' '}
        <Link
          href={WORK}
          onClick={() => {
            logClick({
              ...navigationTracking,
              label: 'Work'
            });
          }}
        >
          about my work
        </Link>
        .
      </p>
    </SplittedSection>

    <SplittedSection>
      <CvPreview alt="Curriculum Vitae preview" src="/cv.png" />
    </SplittedSection>
  </AppSection>
);

export default WorkSummary;
