'use client';
import React from 'react';
import { AppSection, Heading, WorkSample } from '../../components';
import { projects } from '../../data';

const Projects = (): JSX.Element => (
  <>
    <AppSection>
      <Heading>My personal projects</Heading>

      <p>
        As any <b>curious</b> or <b>restless</b> person, I tend to be doing
        something all the time. This helps me to <b>keep learning</b>,{' '}
        <b>discover new things</b> and prevent me to <b>get stucked</b>.
      </p>

      <p>
        This has pushed me to create several projects, but I{"'"}m going to
        mention just few of them.
      </p>
    </AppSection>

    {projects.map((entry, index) => (
      <AppSection key={`${entry.title}-${entry.date}`}>
        <WorkSample {...entry} right={index % 2 !== 0} />
      </AppSection>
    ))}
  </>
);

export default Projects;
