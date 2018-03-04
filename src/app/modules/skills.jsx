import React from 'react';

import FA from '@fortawesome/react-fontawesome';
import { faLaptop, faMobileAlt, faTasks, faFighterJet, faSync } from '@fortawesome/fontawesome-free-solid';
import { faCheckCircle } from '@fortawesome/fontawesome-free-regular';
import { faHtml5, faCss3Alt, faJs, faReact, faAngular, faVuejs, faGit, faNodeJs, faGulp, faGrunt, faSass, faPhp, faLinux, faChrome, faGithub } from '@fortawesome/fontawesome-free-brands';

// ES6, redux, knockout, backbone, yarn, webpack, eslint, stylelint, karma, jasmine, electron, VS Code, 

const Skills = () => (
  <div className="Skills">
    <div className="App-section">
      <h1 className="Heading">Technical Skills</h1>

      <p>As <span className="bold">Frontend</span> developer, I'm able to build web apps, but I'm also able to automatize and setup enviroments and proccesses.</p>
      
      <h5 className="Heading Heading--xs">Frontend related</h5>
      <ul className="List List--iconic">
        <li className="List-item is-html">
          <FA icon={faHtml5} />
          <span className="List-desc">HTML</span>
        </li>
        <li className="List-item is-css">
          <FA icon={faCss3Alt} />
          <span className="List-desc">CSS</span>
        </li>
        <li className="List-item is-javascript">
          <FA icon={faJs} />
          <span className="List-desc">Javascript</span>
        </li>
        <li className="List-item is-react">
          <FA icon={faReact} />
          <span className="List-desc">ReactJS</span>
        </li>
        <li className="List-item is-angular2">
          <FA icon={faAngular} />
          <span className="List-desc">Angular 2+</span>
        </li>
        <li className="List-item is-redux">
          <FA icon={faCheckCircle} />
          <span className="List-desc">Redux</span>
        </li>
        <li className="List-item is-vue">
          <FA icon={faVuejs} />
          <span className="List-desc">VueJS</span>
        </li>
        <li className="List-item is-angular">
          <FA icon={faAngular} />
          <span className="List-desc">AngularJS</span>
        </li>
        <li className="List-item is-knockout">
          <FA icon={faCheckCircle} />
          <span className="List-desc">Knockout</span>
        </li>
        <li className="List-item is-backbone">
          <FA icon={faCheckCircle} />
          <span className="List-desc">Backbone</span>
        </li>
        <li className="List-item is-es6">
          <FA icon={faCheckCircle} />
          <span className="List-desc">ES6</span>
        </li>
        <li className="List-item is-es6">
          <FA icon={faCheckCircle} />
          <span className="List-desc">Typescript</span>
        </li>
      </ul>
      
      <h5 className="Heading Heading--xs">Enviroment setup</h5>
      <ul className="List List--iconic">
        <li className="List-item is-git">
          <FA icon={faGit} />
          <span className="List-desc">Git</span>
        </li>
        <li className="List-item is-node">
          <FA icon={faNodeJs} />
          <span className="List-desc">NodeJS</span>
        </li>
        <li className="List-item is-yarn">
          <FA icon={faCheckCircle} />
          <span className="List-desc">Yarn</span>
        </li>
        <li className="List-item is-webpack">
          <FA icon={faCheckCircle} />
          <span className="List-desc">Webpack</span>
        </li>
        <li className="List-item is-gulp">
          <FA icon={faGulp} />
          <span className="List-desc">Gulp</span>
        </li>
        <li className="List-item is-grunt">
          <FA icon={faGrunt} />
          <span className="List-desc">Grunt</span>
        </li>
        <li className="List-item is-sass">
          <FA icon={faSass} />
          <span className="List-desc">Sass</span>
        </li>
      </ul>
      
      <h5 className="Heading Heading--xs">Concepts</h5>
      <ul className="List List--iconic">
        <li className="List-item">
          <FA icon={faLaptop} />
          <span className="List-desc">Responsive Design</span>
        </li>
        <li className="List-item">
          <FA icon={faMobileAlt} />
          <span className="List-desc">Mobile first</span>
        </li>
        <li className="List-item">
          <FA icon={faTasks} />
          <span className="List-desc">Progressive Web App</span>
        </li>
        <li className="List-item">
          <FA icon={faFighterJet} />
          <span className="List-desc">Agile Methodologies</span>
        </li>
        <li className="List-item">
          <FA icon={faSync} />
          <span className="List-desc">Continuous Integration</span>
        </li>
      </ul>
      
      <h5 className="Heading Heading--xs">Others</h5>
      <ul className="List List--iconic">
        <li className="List-item is-eslint">
          <FA icon={faCheckCircle} />
          <span className="List-desc">Eslint</span>
        </li>
        <li className="List-item is-stlyelint">
          <FA icon={faCheckCircle} />
          <span className="List-desc">Stylelint</span>
        </li>
        <li className="List-item is-karma">
          <FA icon={faCheckCircle} />
          <span className="List-desc">Karma</span>
        </li>
        <li className="List-item is-jasmine">
          <FA icon={faCheckCircle} />
          <span className="List-desc">Jasmine</span>
        </li>
        <li className="List-item is-electron">
          <FA icon={faCheckCircle} />
          <span className="List-desc">Electron</span>
        </li>
        <li className="List-item is-mysql">
          <FA icon={faCheckCircle} />
          <span className="List-desc">MySQL</span>
        </li>
        <li className="List-item is-php">
          <FA icon={faPhp} />
          <span className="List-desc">PHP</span>
        </li>
      </ul>
    </div>

    <div className="App-section">
      <h1 className="Heading">My enviroment</h1>

      <p>If you are curious, this is the enviroment I use to develop at home.</p>

      <ul className="List List--iconic">
        <li className="List-item">
          <FA icon={faLinux} />
          <span className="List-desc">Linux</span>
        </li>
        <li className="List-item">
          <FA icon={faChrome} />
          <span className="List-desc">Google Chrome</span>
        </li>
        <li className="List-item is-vscode">
          <FA icon={faCheckCircle} />
          <span className="List-desc">VS Code</span>
        </li>
        <li className="List-item is-node">
          <FA icon={faNodeJs} />
          <span className="List-desc">NodeJS</span>
        </li>
        <li className="List-item is-webpack">
          <FA icon={faCheckCircle} />
          <span className="List-desc">Webpack</span>
        </li>
        <li className="List-item is-eslint">
          <FA icon={faCheckCircle} />
          <span className="List-desc">Eslint</span>
        </li>
        <li className="List-item is-github">
          <FA icon={faGithub} />
          <span className="List-desc">Github</span>
        </li>
      </ul>

      <p><i>* I'm confortable by developing under MacOS (normally in the office I use MacOS) and Windows</i></p>
    </div>

    <div className="App-section">
      <h1 className="Heading">Personal Skills</h1>

      <p>Being a developer is not just about tech and computers. It's about being social, a <span className="bold">Team member</span>.</p>
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