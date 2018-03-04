import React from 'react';
import { Link } from 'react-router-dom'
import FA from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/fontawesome-free-regular';
import { faReact, faAngular, faVuejs, faSass, faNodeJs, faGit } from '@fortawesome/fontawesome-free-brands';

import { ABOUT, SKILLS, WORK } from '../../constants/app.routes';

import Avatar from '../components/avatar';
import avatarPic from '../../images/avatar.jpg';
import cvPreview from '../../images/cv.png';

const cvLink = 'https://drive.google.com/file/d/0ByBBM9QN-qH4ZzZjMFNzRzRyTWc/view';

const Landing = () => (
  <div className="Landing">
    <section className="App-section is-cover">
      <h1 className="Heading Heading--lg">Rafael Pérez García</h1>

      <div className="App-side">
        <Avatar main={{ url: avatarPic }} />
      </div>

      <div className="App-side is-large">
        <p>I am a web developer, self-taught, <span className="bold">quick learner</span>, passionate about programming and able to <span className="bold">adapt quickly</span> to new enviroments. Know more <Link className="Link" to={ABOUT}>about me</Link>.</p>
      </div>
    </section>

    <section className="App-section">
      <h1 className="Heading Heading--lg">My Skills</h1>
      
      <p>These are some of my most requested skills:</p>

      <ul className="List List--iconic">
        <li className="List-item is-react">
          <FA icon={faReact} />
          <span className="List-desc">ReactJS</span>
        </li>
        <li className="List-item is-angular2">
          <FA icon={faAngular} />
          <span className="List-desc">Angular 2+</span>
        </li>
        <li className="List-item is-vue">
          <FA icon={faVuejs} />
          <span className="List-desc">VueJS</span>
        </li>
        <li className="List-item is-angular">
          <FA icon={faAngular} />
          <span className="List-desc">AngularJS</span>
        </li>
        <li className="List-item is-node">
          <FA icon={faNodeJs} />
          <span className="List-desc">NodeJS</span>
        </li>
        <li className="List-item is-git">
          <FA icon={faGit} />
          <span className="List-desc">Git</span>
        </li>
        <li className="List-item is-sass">
          <FA icon={faSass} />
          <span className="List-desc">Sass</span>
        </li>
      </ul>

      <p>Know more <Link className="Link" to={SKILLS}>about my skills</Link>.</p>
    </section>

    <section className="App-section">
      <h1 className="Heading Heading--lg">My work</h1>

      <div className="App-side is-large">
      {/* TODO: Talk about my work, not my skills */}
        <p>I've been coding for <span className="bold">7 years</span> (at least).</p>
        <p>During this time, I have worked in big (3.000+ employees) and small (15 employees) companies.</p>
        <p>My passion for coding also has pushed me to create several <span className="bold">personal projects</span> during my free time.</p>

        <ul className="List List--iconic">
          <li className="List-item">
            <a href={cvLink} target="_blank" rel="noopener noreferer">
              <FA icon={faFilePdf} />
              <span className="List-desc">Download my C.V.</span>
            </a>
          </li>
        </ul>

        <p>Know more <Link className="Link" to={WORK}>about my work</Link>.</p>
      </div>

      <div className="App-side">
        <img className="App-preview" src={cvPreview} />
      </div>
    </section>
  </div>
);

Landing.displayName = 'Landing';

export default Landing;