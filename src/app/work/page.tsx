'use client';
import React from 'react';
import { AppSection, Heading, WorkSample } from '../../components';
import { companies } from '../../data';

const Work = (): JSX.Element => (
  <>
    {companies.map((entry, index) => (
      <AppSection key={`${entry.title}-${entry.date}`}>
        {index === 0 && <Heading>My work in companies</Heading>}
        <WorkSample {...entry} right={index % 2 !== 0} />
      </AppSection>
    ))}
  </>
);

export default Work;
