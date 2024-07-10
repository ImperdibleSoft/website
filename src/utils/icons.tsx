import {
  faAngular,
  faBootstrap,
  faCss3,
  faDocker,
  faGit,
  faGithub,
  faGrunt,
  faGulp,
  faHtml5,
  faJs,
  faJsSquare,
  faLinkedin,
  faMedium,
  faNodeJs,
  faPatreon,
  faPhp,
  faReact,
  faSass,
  faVuejs,
  faYarn,
  IconDefinition
} from '@fortawesome/free-brands-svg-icons';
import {
  faCalendar,
  faEnvelope,
  faFilePdf
} from '@fortawesome/free-regular-svg-icons';
import {
  faFighterJet,
  faLaptop,
  faLink,
  faMapMarkerAlt,
  faMobileAlt,
  faPhone,
  faSync,
  faTasks
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { SkillIcon } from '../components';
import { ListItemLabel } from '../types';

const getIconName = (icon: ListItemLabel): IconDefinition | undefined => {
  switch (icon) {
    // Contact Methods
    case 'Email':
      return faEnvelope;
    case 'Phone':
      return faPhone;

    // Skills
    case 'Angular JS':
    case 'Angular 2+':
      return faAngular;
    case 'Bootstrap':
      return faBootstrap;
    case 'CSS':
      return faCss3;
    case 'Docker':
      return faDocker;
    case 'Download my CV':
      return faFilePdf;
    case 'ES6':
      return faJsSquare;
    case 'Git':
      return faGit;
    case 'Github':
      return faGithub;
    case 'Grunt':
      return faGrunt;
    case 'Gulp':
      return faGulp;
    case 'HTML':
      return faHtml5;
    case 'Javascript':
      return faJs;
    case 'LinkedIn':
      return faLinkedin;
    case 'Medium':
      return faMedium;
    case 'NodeJS':
      return faNodeJs;
    case 'Patreon':
      return faPatreon;
    case 'PHP':
      return faPhp;
    case 'ReactJS':
      return faReact;
    case 'Sass':
      return faSass;
    case 'VueJS':
      return faVuejs;
    case 'Yarn':
      return faYarn;

    // Principles
    case 'Agile methodologies':
      return faFighterJet;
    case 'Continuous integration':
      return faSync;
    case 'Mobile first':
      return faMobileAlt;
    case 'Progressive Web App':
      return faTasks;
    case 'Responsive design':
      return faLaptop;

    // Misc
    case 'calendar':
      return faCalendar;
    case 'link':
      return faLink;
    case 'location':
      return faMapMarkerAlt;

    default:
      return undefined;
  }
};

const getIconProp = (
  icon: ListItemLabel
): IconDefinition | string | undefined => {
  const iconName = getIconName(icon);
  if (iconName) {
    return iconName;
  }

  switch (icon) {
    case 'Axios':
      return '/logos/axios.svg';
    case 'BackboneJS':
      return '/logos/backbone.webp';
    case 'Cypress':
      return '/logos/cypress.webp';
    case 'Electron':
      return '/logos/electron.svg';
    case 'EmotionJS':
      return '/logos/emotion.png';
    case 'Eslint':
      return '/logos/eslint.svg';
    case 'ExpressJS':
      return '/logos/express.png';
    case 'FlowType':
      return '/logos/flowtype.png';
    case 'ImperdibleSoft':
      return '/logo.png';
    case 'JasmineJS':
      return '/logos/jasmine.png';
    case 'Jest':
      return '/logos/jest.webp';
    case 'JSS':
      return '/logos/jss.svg';
    case 'KarmaJS':
      return '/logos/karma.webp';
    case 'KnockoutJS':
      return '/logos/knockout.webp';
    case 'LernaJS':
      return '/logos/lerna.webp';
    case 'MariaDB':
      return '/logos/mariadb.svg';
    case 'Material UI':
      return '/logos/mui.svg';
    case 'MongoDB':
      return '/logos/mongodb.webp';
    case 'MSW':
      return '/logos/msw.svg';
    case 'MySQL':
      return '/logos/mysql.webp';
    case 'NestJS':
      return '/logos/nest.png';
    case 'NextJS':
      return '/logos/next.svg';
    case 'ParcelJS':
      return '/logos/parcel.png';
    case 'Pupeteer':
      return '/logos/pupeteer.webp';
    case 'Redux':
      return '/logos/redux.svg';
    case 'SingleSPA':
      return '/logos/singlespa.webp';
    case 'Storybook':
      return '/logos/storybook.png';
    case 'Styled components':
      return '/logos/styledcomponents.png';
    case 'Stylelint':
      return '/logos/stylelint.png';
    case 'Swagger UI':
      return '/logos/swagger.png';
    case 'Testing library':
      return '/logos/testinglibrary.png';
    case 'Typescript':
      return '/logos/typescript.png';
    case 'ViteJS':
      return '/logos/vite.svg';
    case 'Vuetify':
      return '/logos/vuetify.svg';
    case 'Vuex':
      return '/logos/vuex.svg';
    case 'Webpack':
      return '/logos/webpack.webp';

    default:
      return undefined;
  }
};

export const renderIcon = (
  icon: ListItemLabel,
  large?: boolean
): JSX.Element | null => {
  const iconProp = getIconProp(icon);

  if (!iconProp) {
    return null;
  }

  return <SkillIcon icon={iconProp} large={large} />;
};
