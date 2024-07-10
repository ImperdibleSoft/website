import React from 'react';
import { NativeLink, SkillTag } from '../components';
import { MAD, MDX } from '../constants';
import { ProjectEntry } from '../types';

const sparkDigitalLetter =
  'https://drive.google.com/file/d/0ByBBM9QN-qH4ejEzRF92MURjcHM/edit?resourcekey=0-YJt5FlzLXMjilMkyG5h0ag';

const cognizant2: ProjectEntry = {
  date: '2022',
  location: MAD,
  picture: '/companies/cognizant.png',
  skills: [
    'Axios',
    'CSS',
    'Cypress',
    'Eslint',
    'ExpressJS',
    'Git',
    'HTML',
    'Javascript',
    'Jest',
    'NodeJS',
    'ReactJS',
    'Redux',
    'Styled components',
    'Testing library',
    'Typescript',
    'ViteJS',
    'Webpack',
    'Yarn'
  ],
  title: 'Cognizant',
  children: (
    <>
      <p>
        I{"'"}m in charge of designing architecture, technologies and
        methodologies for developing apps based on <SkillTag skill="ReactJS" />,{' '}
        <SkillTag skill="Redux" /> and <SkillTag skill="Typescript" />, for
        final users.
      </p>

      <p>
        I{"'"}m managing small teams composed by Frontend developers, folloging
        agile methodologies, where I organize and assign tasks to different team
        members, I sync their executions. I{"'"}m also supervising estimations
        and managing anything needed with the client, so my team can perform its
        work as performant as possible.{' '}
      </p>
    </>
  )
};

const mimacom: ProjectEntry = {
  date: '2020',
  location: MAD,
  picture: '/companies/mimacom.svg',
  skills: [
    'Axios',
    'CSS',
    'Cypress',
    'Docker',
    'Eslint',
    'Git',
    'HTML',
    'Javascript',
    'Jest',
    'MSW',
    'NodeJS',
    'SingleSPA',
    'Storybook',
    'Testing library',
    'Typescript',
    'ViteJS',
    'VueJS',
    'Vuetify',
    'Vuex',
    'Yarn'
  ],
  title: 'Mimacom',
  children: (
    <>
      <p>
        I{"'"}m in charge of designing architecture, technologies and
        methodologies for developing apps based on Microfrontends with{' '}
        <SkillTag skill="SingleSPA" />, <SkillTag skill="VueJS" /> and{' '}
        <SkillTag skill="Typescript" />, for final users.
      </p>
      <p>
        I{"'"}m managing small teams composed by Frontend developers and QA,
        folloging agile methodologies, where I organize and assign tasks to
        different team members, I sync their executions. I{"'"}m also
        supervising estimations and managing anything needed with the client, so
        my team can perform its work as performant as possible.
      </p>
    </>
  )
};

const cognizant1: ProjectEntry = {
  date: '2019',
  location: MAD,
  picture: '/companies/cognizant.png',
  skills: [
    'Axios',
    'CSS',
    'Docker',
    'Eslint',
    'ExpressJS',
    'Git',
    'HTML',
    'Javascript',
    'Jest',
    'MSW',
    'NodeJS',
    'ParcelJS',
    'ReactJS',
    'Redux',
    'Styled components',
    'Testing library',
    'Typescript',
    'Yarn'
  ],
  title: 'Cognizant',
  children: (
    <>
      <p>
        I{"'"}m in charge of leading frontend teams to develop and maintain
        responsive solutions based on <SkillTag skill="ReactJS" /> and{' '}
        <SkillTag skill="Typescript" /> for several clients, analyzing client
        needs, designing app{"'"}s architecture, backend integrations, granting
        code quality and test coverage.
      </p>
    </>
  )
};

const tuenti: ProjectEntry = {
  date: '2018',
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
  date: '2016',
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
        I switched from <SkillTag skill="Angular JS" />
        to <SkillTag skill="ReactJS" />, created responsive websites using{' '}
        <SkillTag skill="Redux" />, <SkillTag skill="Sass" /> and{' '}
        <SkillTag skill="NodeJS" /> in permanent contact with Backend team,
        using agile methodologies.
      </p>
      <p>
        During this period, I participated in the creation of a new social
        platform and it{"'"}s corresponding backoffice, so we could manage and
        supervice content that was being uploaded to it.
      </p>
    </>
  )
};

const sparkDigital: ProjectEntry = {
  date: '2015',
  location: MDX,
  picture: '/companies/sparkdigital.png',
  skills: [
    'Angular JS',
    'CSS',
    'Git',
    'Gulp',
    'HTML',
    'JasmineJS',
    'Javascript',
    'KarmaJS',
    'NodeJS',
    'Sass'
  ],
  title: 'Spark Digital',
  children: (
    <>
      <p>
        I created responsive websites using <SkillTag skill="Angular JS" /> and{' '}
        <SkillTag skill="Sass" /> in permanent contact with the client and
        Backend team, using Agile methodologies.
      </p>
      <p>
        <NativeLink href={sparkDigitalLetter} target="_blank">
          Recommendation letter
        </NativeLink>{' '}
        (in spanish).
      </p>
    </>
  )
};

const globant: ProjectEntry = {
  date: '2014',
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
    'Sass'
  ],
  title: 'Globant',
  children: (
    <>
      <p>
        I created responsive websites using <SkillTag skill="Angular JS" />,{' '}
        <SkillTag skill="KnockoutJS" /> and <SkillTag skill="Sass" />, in a
        permanent contact with the client and Backend team, usign Agile
        methodologies. I also take care of managing small teams for the projects
        I{"'"}m assigned.
      </p>
    </>
  )
};

export const companies: ProjectEntry[] = [
  cognizant2,
  mimacom,
  cognizant1,
  tuenti,
  samyRoad,
  sparkDigital,
  globant
];
