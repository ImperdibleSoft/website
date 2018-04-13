import React from 'react';
import FA from '@fortawesome/react-fontawesome';
import { faLaptop, faMobileAlt, faTasks, faFighterJet, faSync } from '@fortawesome/fontawesome-free-solid';
import { faCheckCircle } from '@fortawesome/fontawesome-free-regular';
import { faHtml5, faCss3Alt, faJs, faReact, faAngular, faVuejs, faGit, faNodeJs, faGulp, faGrunt, faSass, faPhp, faLinux, faChrome, faGithub } from '@fortawesome/fontawesome-free-brands';
import { iconTracking, logClick } from '../../utils/analytics';

import { JOB } from '../../constants/branding';

const Skills = () => (
  <div className="Skills">
    <div className="App-section">
      <h1 className="Heading">Technical Skills</h1>

      <p>As <span className="bold">{JOB}</span>, I'm able to build web apps, but I'm also able to automatize and setup enviroments and proccesses.</p>

      <h5 className="Heading Heading--xs">Frontend related</h5>
      <ul className="List List--iconic">
        <li className="List-item is-html" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'HTML',
          })
        }}>
          <FA icon={faHtml5} />
          <span className="List-desc">HTML</span>
        </li>
        <li className="List-item is-css" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'CSS',
          })
        }}>
          <FA icon={faCss3Alt} />
          <span className="List-desc">CSS</span>
        </li>
        <li className="List-item is-javascript" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Javascript',
          })
        }}>
          <FA icon={faJs} />
          <span className="List-desc">Javascript</span>
        </li>
        <li className="List-item is-react" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'ReactJS',
          })
        }}>
          <FA icon={faReact} />
          <span className="List-desc">ReactJS</span>
        </li>
        <li className="List-item is-angular2" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Angular 2',
          })
        }}>
          <FA icon={faAngular} />
          <span className="List-desc">Angular 2+</span>
        </li>
        <li className="List-item is-redux" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Redux',
          })
        }}>
          <FA icon={faCheckCircle} />
          <span className="List-desc">Redux</span>
        </li>
        <li className="List-item is-vue" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'VueJS',
          })
        }}>
          <FA icon={faVuejs} />
          <span className="List-desc">VueJS</span>
        </li>
        <li className="List-item is-angular" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'AngularJS',
          })
        }}>
          <FA icon={faAngular} />
          <span className="List-desc">AngularJS</span>
        </li>
        <li className="List-item is-knockout" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Knockout',
          })
        }}>
          <FA icon={faCheckCircle} />
          <span className="List-desc">Knockout</span>
        </li>
        <li className="List-item is-backbone" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Backbone',
          })
        }}>
          <FA icon={faCheckCircle} />
          <span className="List-desc">Backbone</span>
        </li>
        <li className="List-item is-es6" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'ES6',
          })
        }}>
          <FA icon={faCheckCircle} />
          <span className="List-desc">ES6</span>
        </li>
        <li className="List-item is-es6" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Typescript',
          })
        }}>
          <FA icon={faCheckCircle} />
          <span className="List-desc">Typescript</span>
        </li>
      </ul>

      <h5 className="Heading Heading--xs">Enviroment setup</h5>
      <ul className="List List--iconic">
        <li className="List-item is-git" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Git',
          })
        }}>
          <FA icon={faGit} />
          <span className="List-desc">Git</span>
        </li>
        <li className="List-item is-node" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'NodeJS',
          })
        }}>
          <FA icon={faNodeJs} />
          <span className="List-desc">NodeJS</span>
        </li>
        <li className="List-item is-yarn" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Yarn',
          })
        }}>
          <FA icon={faCheckCircle} />
          <span className="List-desc">Yarn</span>
        </li>
        <li className="List-item is-webpack" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Webpack',
          })
        }}>
          <FA icon={faCheckCircle} />
          <span className="List-desc">Webpack</span>
        </li>
        <li className="List-item is-gulp" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Gulp',
          })
        }}>
          <FA icon={faGulp} />
          <span className="List-desc">Gulp</span>
        </li>
        <li className="List-item is-grunt" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Grunt',
          })
        }}>
          <FA icon={faGrunt} />
          <span className="List-desc">Grunt</span>
        </li>
        <li className="List-item is-sass" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Sass',
          })
        }}>
          <FA icon={faSass} />
          <span className="List-desc">Sass</span>
        </li>
      </ul>

      <h5 className="Heading Heading--xs">Concepts</h5>
      <ul className="List List--iconic">
        <li className="List-item" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Responsive Design',
          })
        }}>
          <FA icon={faLaptop} />
          <span className="List-desc">Responsive Design</span>
        </li>
        <li className="List-item" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Mobile first',
          })
        }}>
          <FA icon={faMobileAlt} />
          <span className="List-desc">Mobile first</span>
        </li>
        <li className="List-item" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Progressive Web App',
          })
        }}>
          <FA icon={faTasks} />
          <span className="List-desc">Progressive Web App</span>
        </li>
        <li className="List-item" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Agile Methodologies',
          })
        }}>
          <FA icon={faFighterJet} />
          <span className="List-desc">Agile Methodologies</span>
        </li>
        <li className="List-item" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Continuous Integration',
          })
        }}>
          <FA icon={faSync} />
          <span className="List-desc">Continuous Integration</span>
        </li>
      </ul>

      <h5 className="Heading Heading--xs">Others</h5>
      <ul className="List List--iconic">
        <li className="List-item is-eslint" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Eslint',
          })
        }}>
          <FA icon={faCheckCircle} />
          <span className="List-desc">Eslint</span>
        </li>
        <li className="List-item is-stlyelint" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Stylelint',
          })
        }}>
          <FA icon={faCheckCircle} />
          <span className="List-desc">Stylelint</span>
        </li>
        <li className="List-item is-karma" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Karma',
          })
        }}>
          <FA icon={faCheckCircle} />
          <span className="List-desc">Karma</span>
        </li>
        <li className="List-item is-jasmine" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Jasmine',
          })
        }}>
          <FA icon={faCheckCircle} />
          <span className="List-desc">Jasmine</span>
        </li>
        <li className="List-item is-electron" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Electron',
          })
        }}>
          <FA icon={faCheckCircle} />
          <span className="List-desc">Electron</span>
        </li>
        <li className="List-item is-mysql" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'MySQL',
          })
        }}>
          <FA icon={faCheckCircle} />
          <span className="List-desc">MySQL</span>
        </li>
        <li className="List-item is-php" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'PHP',
          })
        }}>
          <FA icon={faPhp} />
          <span className="List-desc">PHP</span>
        </li>
      </ul>
    </div>

    <div className="App-section">
      <h1 className="Heading">My enviroment</h1>

      <p>If you are curious, this is the enviroment I use to develop at home.</p>

      <ul className="List List--iconic">
        <li className="List-item" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Linux',
          })
        }}>
          <FA icon={faLinux} />
          <span className="List-desc">Linux</span>
        </li>
        <li className="List-item" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Google Chrome',
          })
        }}>
          <FA icon={faChrome} />
          <span className="List-desc">Google Chrome</span>
        </li>
        <li className="List-item is-vscode" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'VS Code',
          })
        }}>
          <FA icon={faCheckCircle} />
          <span className="List-desc">VS Code</span>
        </li>
        <li className="List-item is-node" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'NodeJS',
          })
        }}>
          <FA icon={faNodeJs} />
          <span className="List-desc">NodeJS</span>
        </li>
        <li className="List-item is-webpack" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Webpack',
          })
        }}>
          <FA icon={faCheckCircle} />
          <span className="List-desc">Webpack</span>
        </li>
        <li className="List-item is-eslint" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Eslint',
          })
        }}>
          <FA icon={faCheckCircle} />
          <span className="List-desc">Eslint</span>
        </li>
        <li className="List-item is-github" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Github',
          })
        }}>
          <FA icon={faGithub} />
          <span className="List-desc">Github</span>
        </li>
      </ul>

      <p><i>* I'm confortable by developing under MacOS (normally in the office I use MacOS) and Windows</i></p>
    </div>

    <div className="App-section">
      <h1 className="Heading">Personal Skills</h1>

      <p>Being a {JOB} is not just about tech and computers. It's about being social, a <span className="bold">Team member</span>.</p>
      <p>Having good social skills also helps to develop better and faster, by <span className="bold">asking to workmates</span>, <span className="bold">helping people</span>, or <span className="bold">learning from others</span>.</p>

      <div className="App-side">
        <h5 className="Heading Heading--xs">Personal Skills</h5>
        <ul className="List">
          <li className="List-item">Self-thaugh</li>
          <li className="List-item">Quick learner and eager to learn</li>
          <li className="List-item">Passionate about programming</li>
          <li className="List-item">Dynamic</li>
          <li className="List-item">Good in design solutions</li>
        </ul>
      </div>
      <div className="App-side">
        <h5 className="Heading Heading--xs">Social Skills</h5>
        <ul className="List">
          <li className="List-item">Easy to adapt to new teams</li>
          <li className="List-item">Proactive and good motivator</li>
          <li className="List-item">Able to manage time</li>
          <li className="List-item">Able to organize tasks</li>
        </ul>
      </div>
    </div>
  </div>
);

Skills.dispayName = 'Skills';

export default Skills;