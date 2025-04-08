import React from 'react';
import { NativeLink, SkillTag } from '../components';
import { MAD, MDX } from '../constants';
import { ProjectEntry } from '../types';

const samyRoadLetter =
  'https://drive.google.com/file/d/0ByBBM9QN-qH4ZFBqTloxYVZiNE0/edit?resourcekey=0-mgGGYCS8J751idDt9OoaKw';

const cognizant: ProjectEntry = {
  date: 'July 2020 - Now',
  location: MAD,
  picture: '/companies/cognizant.png',
  skills: [
    'Axios',
    'CSS',
    'Cypress',
    'Eslint',
    'ExpressJS',
    'Flutter',
    'Git',
    'HTML',
    'Javascript',
    'Jest',
    'NodeJS',
    'ReactJS',
    'Redux',
    'SingleSPA',
    'Styled components',
    'Testing library',
    'Typescript',
    'ViteJS',
    'VueJS',
    'Vuetify',
    'Webpack',
    'Yarn'
  ],
  title: 'Cognizant',
  children: (
    <>
      <p>
        I{"'"}m in charge of developing apps based on{' '}
        <SkillTag skill="ReactJS" />, <SkillTag skill="Redux" /> and
        <SkillTag skill="Typescript" />, for internal and final users. I use to
        design architecture for small modules within the apps I’m working on,
        implementing solutions and testing the end result.
      </p>

      <p>
        I also participated in a project developing apps based on{' '}
        <b>Microfrontends</b> (using <SkillTag skill="SingleSPA" />
        ),
        <SkillTag skill="VueJS" /> and <SkillTag skill="Typescript" />, for
        final users. This was an interesting experience to get new points of
        view, but it is not my cup of tea.
      </p>
    </>
  )
};

const tuenti: ProjectEntry = {
  date: 'Sep 2017 - June 2020',
  location: MAD,
  picture: '/companies/tuenti.png',
  skills: [
    'Axios',
    'CSS',
    'Enzyme',
    'Eslint',
    'ExpressJS',
    'FlowType',
    'Git',
    'HTML',
    'Javascript',
    'Jest',
    'MSW',
    'Pupeteer',
    'ReactJS',
    'Redux',
    'Storybook',
    'Styled components',
    'Testing library',
    'Webpack'
  ],
  title: 'Tuenti',
  children: (
    <>
      <p>
        I{"'"}ve been working in <b>Tuenti</b>
        {"'"}s platform team, building the environment, platform and components
        based on <SkillTag skill="ReactJS" />, <SkillTag skill="FlowType" /> and{' '}
        <SkillTag skill="Styled components" />
        that will be used by other teams to build Novum application.
      </p>
      <p>
        Novum is a very ambicious project for <b>Movistar</b>, that is being
        used by all clients of <b>Tuenti</b> (Spain, Latam), <b>Movistar</b>{' '}
        (Spain, Latam), <b>Vivo</b> (Brazil), <b>O2</b> (Spain, UK) and{' '}
        <b>Blau</b> (Germany).
      </p>
      <p>
        One of my most visible achievements has been to implement from scratch
        the Push notifications system, based on <b>Web Push APIs</b>.
      </p>
    </>
  )
};

const samyRoad: ProjectEntry = {
  date: 'Apr 2016 - Aug 2017',
  location: MAD,
  picture: '/companies/samyroad.png',
  skills: [
    'Axios',
    'Bootstrap',
    'CSS',
    'Docker',
    'Eslint',
    'ExpressJS',
    'Git',
    'HTML',
    'JasmineJS',
    'Javascript',
    'KarmaJS',
    'NodeJS',
    'ReactJS',
    'Redux',
    'Sass',
    'Stylelint',
    'Swagger UI',
    'Webpack'
  ],
  title: 'Samyroad',
  children: (
    <>
      <p>
        I switched from <SkillTag skill="Angular JS" /> to{' '}
        <SkillTag skill="ReactJS" />, created responsive websites using{' '}
        <SkillTag skill="Redux" />, <SkillTag skill="Sass" /> and{' '}
        <SkillTag skill="NodeJS" /> in permanent contact with Backend team,
        using agile methodologies.
      </p>
      <p>
        During this period, I participated in the creation of a new social
        platform and it{"'"}s corresponding backoffice, so we could manage and
        supervice content that was being uploaded to it.
      </p>
      <p>
        You can check the{' '}
        <NativeLink href={samyRoadLetter} target="_blank">
          Recommendation letter (in Spanish)
        </NativeLink>
        .
      </p>
    </>
  )
};

const globant: ProjectEntry = {
  date: 'Apr 2014 - Apr 2016',
  location: MDX,
  picture: '/companies/globant.png',
  skills: [
    'Angular JS',
    'BackboneJS',
    'CSS',
    'Git',
    'Grunt',
    'HTML',
    'JasmineJS',
    'Javascript',
    'KarmaJS',
    'KnockoutJS',
    'NodeJS',
    'SCSS'
  ],
  title: 'Globant',
  children: (
    <>
      <p>
        I created responsive websites using <SkillTag skill="Angular JS" />,{' '}
        <SkillTag skill="KnockoutJS" />, <SkillTag skill="HTML" />,{' '}
        <SkillTag skill="CSS" />, <SkillTag skill="SCSS" />,{' '}
        <SkillTag skill="NodeJS" /> and <SkillTag skill="Grunt" />, in a
        permanent contact with the client and Backend team, usign Agile
        methodologies. I also take care of managing small teams for the projects
        I{"'"}m assigned.
      </p>
    </>
  )
};

export const companies: ProjectEntry[] = [cognizant, tuenti, samyRoad, globant];
