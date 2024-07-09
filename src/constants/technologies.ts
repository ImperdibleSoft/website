import { Skill } from '../types';

type Category =
  | 'framework'
  | 'language'
  | 'styling'
  | 'testing'
  | 'tools'
  | 'backend';

interface SkillSpec {
  category: Category;
  name: Skill;
  relevant: boolean;
  highlighted: boolean;
}

export const skills: SkillSpec[] = [
  // Language
  { name: 'HTML', category: 'language', relevant: true, highlighted: true },
  { name: 'CSS', category: 'language', relevant: true, highlighted: true },
  {
    name: 'Typescript',
    category: 'language',
    relevant: true,
    highlighted: true
  },
  { name: 'ES6', category: 'language', relevant: false, highlighted: false },
  {
    name: 'Javascript',
    category: 'language',
    relevant: false,
    highlighted: false
  },
  { name: 'PHP', category: 'language', relevant: false, highlighted: false },

  // Framework
  { name: 'NextJS', category: 'framework', relevant: true, highlighted: false },
  {
    name: 'ReactJS',
    category: 'framework',
    relevant: false,
    highlighted: true
  },
  { name: 'Redux', category: 'framework', relevant: true, highlighted: true },
  { name: 'VueJS', category: 'framework', relevant: false, highlighted: false },
  { name: 'Vuex', category: 'framework', relevant: false, highlighted: false },
  {
    name: 'Angular 2+',
    category: 'framework',
    relevant: false,
    highlighted: false
  },
  {
    name: 'Angular JS',
    category: 'framework',
    relevant: false,
    highlighted: false
  },
  {
    name: 'KnockoutJS',
    category: 'framework',
    relevant: false,
    highlighted: false
  },
  {
    name: 'BackboneJS',
    category: 'framework',
    relevant: false,
    highlighted: false
  },

  // Styling
  {
    name: 'Styled components',
    category: 'styling',
    relevant: true,
    highlighted: false
  },
  {
    name: 'Bootstrap',
    category: 'styling',
    relevant: false,
    highlighted: false
  },
  {
    name: 'Material UI',
    category: 'styling',
    relevant: false,
    highlighted: false
  },
  {
    name: 'Vuetify',
    category: 'styling',
    relevant: false,
    highlighted: false
  },
  {
    name: 'EmotionJS',
    category: 'styling',
    relevant: false,
    highlighted: false
  },
  { name: 'JSS', category: 'styling', relevant: false, highlighted: false },
  { name: 'Sass', category: 'styling', relevant: false, highlighted: false },
  { name: 'SCSS', category: 'styling', relevant: false, highlighted: false },

  // Testing
  {
    name: 'Testing library',
    category: 'testing',
    relevant: true,
    highlighted: true
  },
  { name: 'Jest', category: 'testing', relevant: true, highlighted: true },
  { name: 'MSW', category: 'testing', relevant: true, highlighted: false },
  { name: 'Cypress', category: 'testing', relevant: false, highlighted: false },
  {
    name: 'Pupeteer',
    category: 'testing',
    relevant: false,
    highlighted: false
  },
  { name: 'Enzyme', category: 'testing', relevant: false, highlighted: false },
  {
    name: 'JasmineJS',
    category: 'testing',
    relevant: false,
    highlighted: false
  },
  { name: 'KarmaJS', category: 'testing', relevant: false, highlighted: false },

  // Tools
  { name: 'Webpack', category: 'tools', relevant: false, highlighted: false },
  { name: 'ViteJS', category: 'tools', relevant: false, highlighted: false },
  { name: 'Yarn', category: 'tools', relevant: true, highlighted: false },
  { name: 'NodeJS', category: 'tools', relevant: false, highlighted: false },
  { name: 'Git', category: 'tools', relevant: true, highlighted: false },
  { name: 'Eslint', category: 'tools', relevant: true, highlighted: false },
  { name: 'Stylelint', category: 'tools', relevant: false, highlighted: false },
  {
    name: 'FlowType',
    category: 'tools',
    relevant: false,
    highlighted: false
  },
  { name: 'LernaJS', category: 'tools', relevant: false, highlighted: false },
  { name: 'Docker', category: 'tools', relevant: false, highlighted: false },
  { name: 'Axios', category: 'tools', relevant: false, highlighted: false },
  {
    name: 'Swagger UI',
    category: 'tools',
    relevant: false,
    highlighted: false
  },
  { name: 'ParcelJS', category: 'tools', relevant: false, highlighted: false },
  { name: 'Electron', category: 'tools', relevant: false, highlighted: false },
  { name: 'Grunt', category: 'tools', relevant: false, highlighted: false },
  { name: 'Gulp', category: 'tools', relevant: false, highlighted: false },

  // Backend
  { name: 'NestJS', category: 'backend', relevant: false, highlighted: false },
  {
    name: 'ExpressJS',
    category: 'backend',
    relevant: false,
    highlighted: false
  },
  { name: 'MongoDB', category: 'backend', relevant: false, highlighted: false },
  { name: 'MariaDB', category: 'backend', relevant: false, highlighted: false },
  { name: 'MySQL', category: 'backend', relevant: false, highlighted: false }
];
