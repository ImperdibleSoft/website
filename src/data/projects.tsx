import { SkillTag } from '../components';
import { LPA, MAD, MDX } from '../constants';
import { ProjectEntry } from '../types';

const eucFinder: ProjectEntry = {
  date: '2022 - Ongoing',
  location: MAD,
  picture: '/projects/eucfinder.svg',
  skills: [
    'Axios',
    'CSS',
    'Eslint',
    'ExpressJS',
    'Git',
    'HTML',
    'Javascript',
    'Jest',
    'LernaJS',
    'MariaDB',
    'Material UI',
    'NestJS',
    'NextJS',
    'NodeJS',
    'ReactJS',
    'Redux',
    'Storybook',
    'Styled components',
    'Swagger UI',
    'Testing library',
    'Typescript',
    'Yarn'
  ],
  title: 'EUC Finder',
  url: 'https://www.eucfinder.com',
  children: (
    <>
      <p>
        Since I started riding Electric unicycles, I haven{"'"}t find any
        catalog where I can look all available unicycles and compare them, so I
        can know if purchasing a new one worths it.
      </p>

      <p>
        With EUC Finder I{"'"}m solving this problem, allowing users to{' '}
        <b>search, filter and compare</b> different EUCs based on their
        preferences. There are also pictures, videos, links to compatible apps
        and link to trusted stores.
      </p>
    </>
  )
};

const characterArena: ProjectEntry = {
  date: '2017 - 2021',
  location: MAD,
  picture: '/projects/characterarena.png',
  skills: [
    'Axios',
    'CSS',
    'Eslint',
    'ExpressJS',
    'Git',
    'HTML',
    'Javascript',
    'MongoDB',
    'NodeJS',
    'ParcelJS',
    'ReactJS',
    'Redux',
    'Styled components',
    'Typescript',
    'Yarn'
  ],
  title: 'Character Arena',
  children: (
    <>
      <p>
        I was really impresed about what I learned in <b>Samyroad</b> about{' '}
        <SkillTag skill="ReactJS" />, so I decided to start a project using that
        stack.
      </p>
      <p>
        I love videogames, in particular <b>World of Warcraft</b>, so I decided
        to create a <SkillTag skill="Progressive Web App" /> where I can compare
        my character with others, and identify the areas where my character
        should improve.
      </p>
      <p>
        This project was strongly based on scrapping ranking pages and fetching
        information directly from Blizzard{"'"}s API.
      </p>
    </>
  )
};

const ngConsole: ProjectEntry = {
  date: '2015',
  location: MDX,
  picture: '/projects/ngconsole.png',
  skills: ['Angular JS', 'CSS', 'Gulp', 'HTML', 'Javascript'],
  title: 'ngConsole',
  children: (
    <>
      <p>
        We were building a software that allows us to open the door with our
        phones or using a web app, at <b>Spark Digital</b>.
      </p>
      <p>
        We had some problems while resetting the <b>Raspberry Pi</b> (our
        server), so I decided to create a console that we can use from the web
        app.
      </p>
      <p>
        That{"'"}s how <b>ngConsole</b> was born. It{"'"}s an{' '}
        <SkillTag skill="Angular JS" /> directive, and it{"'"}s able to launch
        predefined commands and also any command the developer wants to code.
      </p>
    </>
  )
};

const materialCss: ProjectEntry = {
  date: '2014',
  location: MDX,
  picture: '/projects/materialcss.png',
  skills: ['CSS', 'Javascript'],
  title: 'Material CSS',
  children: (
    <>
      <p>
        Android 5 was launched few months ago, and I really loved Google{"'"}s{' '}
        <b>Material Design</b>. But there wasn{"'"}t any library that allows me
        to build websites based on Material Design without being attached to a
        javascript framework.
      </p>
      <p>
        I didn{"'"}t want to use Angular Material, Polymer, Materialize and
        other options, because they were forcing me to code Javascript in a
        particular way, and I wanted a tool for creating Material Design
        websites, <b>compatible with any framework</b> or library.
      </p>
      <p>
        That{"'"}s why I decided to create <b>Material CSS</b>, a{' '}
        <SkillTag skill="CSS" /> library that you can use without modifying your
        Javascript code. It also have a few <SkillTag skill="Javascript" />{' '}
        functions that allow the user to toggle somethings, or create some click
        effects.
      </p>
    </>
  )
};

const monopolyOnline: ProjectEntry = {
  date: '2012 - 2013',
  location: LPA,
  picture: '/projects/monopolyonline.png',
  skills: ['CSS', 'HTML', 'Javascript', 'MySQL', 'PHP'],
  title: 'Monopoly Online',
  children: (
    <>
      <p>
        I was finishing the first year of my Upper Degree, when one of our
        teacher asked for creating a game using <SkillTag skill="Javascript" />.
        I was so excited about it, that
        <b>I finished it before</b> the starting date.
      </p>
      <p>
        With 90 days with nothing to do in the horizon, I decided to start the{' '}
        <b>biggest personal project</b> I{"'"}ve ever faced: building a
        Monopoly.
      </p>
      <p>
        This game was created using only pure <SkillTag skill="Javascript" />.
        No tools like Sass or jQuery (or any other library) were used.
      </p>
      <p>
        The next year, I implemented a backend and Monopoly went Online. I got
        5.000+ users and my hosting blocked the domain. I stopped fighting with
        the hosting, so now it{"'"}s offline.
      </p>
    </>
  )
};

export const projects: ProjectEntry[] = [
  eucFinder,
  characterArena,
  ngConsole,
  materialCss,
  monopolyOnline
];
