'use client';
import React from 'react';
import {
  AppSection,
  Heading,
  List,
  SkillList,
  SplittedSection
} from '../../components';
import {
  backend,
  framework,
  JOB,
  principles,
  relevant,
  styling,
  testing,
  tools
} from '../../constants';

const Skills = (): JSX.Element => (
  <>
    <SkillList title="Frontend development" list={relevant}>
      <p>
        As <b>{JOB}</b>, I{"'"}m able to build web apps, but I{"'"}m also able
        to automatize and setup enviroments and proccesses.
      </p>

      <p>This is the stack I enjoy while doing my tasks:</p>
    </SkillList>

    <SkillList title="Concepts and Principles" list={principles} />

    <AppSection>
      <Heading>Soft skills</Heading>

      <p>
        Being a {JOB} is not just about tech and computers. It{"'"}s about being
        social, a <b>Team member</b>.
      </p>
      <p>
        Having good social skills also helps to develop better and faster, by{' '}
        <b>asking to workmates</b>, <b>helping people</b>, or{' '}
        <b>learning from others</b>.
      </p>

      <SplittedSection>
        <List
          items={[
            'Self-thaugh',
            'Quick learner and eager to learn',
            'Passionate about programming',
            'Dynamic',
            'Good in design solutions'
          ].map((label) => ({ label }))}
          text
        />
      </SplittedSection>

      <SplittedSection>
        <List
          items={[
            'Easy to adapt to new teams',
            'Proactive and good motivator',
            'Able to manage time',
            'Able to organize tasks'
          ].map((label) => ({ label }))}
          text
        />
      </SplittedSection>
    </AppSection>

    <SkillList title="Other frameworks I've worked with:" list={framework} />
    <SkillList title="Other styling tools I've worked with:" list={styling} />
    <SkillList title="Other testing tools I've worked with:" list={testing} />
    <SkillList title="Backend tools I've worked with:" list={backend} />
    <SkillList title="Other Tools I've worked with:" list={tools} />
  </>
);

export default Skills;
