import {
  angular,
  angular2,
  axios,
  backbone,
  black,
  bootstrap,
  brand as brandColor,
  css,
  cypress,
  docker,
  electron,
  emotion,
  eslint,
  express,
  flowtype,
  git,
  github,
  grunt,
  gulp,
  html,
  jasmine,
  javascript,
  jest,
  jss,
  karma,
  knockout,
  lerna,
  linkedin,
  mariadb,
  materialUi,
  mongodb,
  msw,
  mysql,
  nest,
  node,
  parcel,
  php,
  pupeteer,
  react,
  redux,
  sass,
  styledComponents,
  swagger,
  typescript,
  vite,
  vue,
  vuetify,
  webpack,
  yarn
} from '../constants';
import { ListItemLabel } from '../types';

export const getItemColor = (item: ListItemLabel): string | undefined => {
  switch (item) {
    case 'Angular 2+':
      return angular2;
    case 'Angular JS':
      return angular;
    case 'Axios':
      return axios;
    case 'BackboneJS':
      return backbone;
    case 'Bootstrap':
      return bootstrap;
    case 'CSS':
      return css;
    case 'Cypress':
      return cypress;
    case 'Docker':
      return docker;
    case 'Electron':
      return electron;
    case 'EmotionJS':
      return emotion;
    case 'Eslint':
      return eslint;
    case 'ExpressJS':
      return express;
    case 'FlowType':
      return flowtype;
    case 'Git':
      return git;
    case 'Github':
      return github;
    case 'Grunt':
      return grunt;
    case 'Gulp':
      return gulp;
    case 'HTML':
      return html;
    case 'ImperdibleSoft':
      return brandColor;
    case 'JasmineJS':
      return jasmine;
    case 'ES6':
    case 'Javascript':
      return javascript;
    case 'Jest':
      return jest;
    case 'JSS':
      return jss;
    case 'KarmaJS':
      return karma;
    case 'KnockoutJS':
      return knockout;
    case 'LernaJS':
      return lerna;
    case 'LinkedIn':
      return linkedin;
    case 'MariaDB':
      return mariadb;
    case 'Material UI':
      return materialUi;
    case 'Medium':
      return black;
    case 'MongoDB':
      return mongodb;
    case 'MSW':
      return msw;
    case 'MySQL':
      return mysql;
    case 'NestJS':
      return nest;
    case 'NextJS':
      return black;
    case 'NodeJS':
      return node;
    case 'ParcelJS':
      return parcel;
    case 'Patreon':
      return black;
    case 'PHP':
      return php;
    case 'Pupeteer':
      return pupeteer;
    case 'ReactJS':
      return react;
    case 'Redux':
      return redux;
    case 'Sass':
      return sass;
    case 'Styled components':
      return styledComponents;
    case 'Stylelint':
      return black;
    case 'Swagger UI':
      return swagger;
    case 'Typescript':
      return typescript;
    case 'ViteJS':
      return vite;
    case 'VueJS':
    case 'Vuex':
      return vue;
    case 'Vuetify':
      return vuetify;
    case 'Webpack':
      return webpack;
    case 'Yarn':
      return yarn;

    default:
      return undefined;
  }
};
