import React from 'react';
import { highlightedSkills, SKILLS } from '../../constants';
import { logClick, navigationTracking } from '../../utils';
import AppSection from '../AppSection';
import Heading from '../Heading';
import Link from '../Link';
import List from '../List';

const HighlightedSkills = (): JSX.Element => (
  <AppSection>
    <Heading $size="lg">My skills</Heading>

    <p>These are some of my most requested skills:</p>

    <List
      iconList
      items={highlightedSkills.map((skill) => ({ label: skill }))}
      text
    />

    <p>
      Know more{' '}
      <Link
        href={SKILLS}
        onClick={() => {
          logClick({
            ...navigationTracking,
            label: 'Skills'
          });
        }}
      >
        about my skills
      </Link>
      .
    </p>
  </AppSection>
);

export default HighlightedSkills;
