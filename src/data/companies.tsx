import React from 'react';
import { NativeLink } from '../components';
import { MAD, MDX } from '../constants';
import { ProjectEntry } from '../types';
import { getItemColor } from '../utils';

const sparkDigitalLetter =
  'https://drive.google.com/file/d/0ByBBM9QN-qH4ejEzRF92MURjcHM/edit?resourcekey=0-YJt5FlzLXMjilMkyG5h0ag';

const cognizant2: ProjectEntry = {
  date: '2022',
  location: MAD,
  picture: '/companies/cognizant.png',
  pictureSize: [256, 256],
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
        methodologies for developing apps for final users.
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
  pictureSize: [256, 256],
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
        methodologies for developing apps based on Microfrontends, for final
        users.
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
  pictureSize: [256, 256],
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
        responsive solutions for several clients, analyzing client needs,
        designing app{"'"}s architecture, backend integrations, granting code
        quality and test coverage.
      </p>
    </>
  )
};

const tuenti: ProjectEntry = {
  date: '2018',
  location: MAD,
  picture: '/companies/tuenti.png',
  pictureSize: [256, 256],
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
        the Push notifications system, based on Web Push APIs.
      </p>
    </>
  )
};

const samyRoad: ProjectEntry = {
  date: '2016',
  location: MAD,
  picture: '/companies/samyroad.png',
  pictureSize: [256, 140],
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
        I switched from{' '}
        <b style={{ color: getItemColor('Angular JS') }}>Angular JS</b> to{' '}
        <b style={{ color: getItemColor('ReactJS') }}>ReactJS</b>, created
        responsive websites, in permanent contact with Backend team, using agile
        methodologies.
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
  pictureSize: [256, 44],
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
        I created responsive websites in permanent contact with the client and
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
  pictureSize: [256, 44],
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
        I created responsive websites, in a permanent contact with the client
        and Backend team, usign Agile methodologies. I also take care of
        managing small teams for the projects I{"'"}m assigned.
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
