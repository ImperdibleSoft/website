import React from 'react';
import { Link } from 'react-router-dom'
import FA from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/fontawesome-free-regular';
import { faReact, faAngular, faVuejs, faSass, faNodeJs, faGit } from '@fortawesome/fontawesome-free-brands';
import { linkTracking, navigationTracking, logClick } from '../../utils/analytics';

import { ABOUT, SKILLS, WORK } from '../../constants/app.routes';
import { NAME, JOB } from '../../constants/branding';

import Avatar from '../components/avatar';
import avatarPic from '../../images/avatar.jpg';
import cvPreview from '../../images/cv.png';

const cvLink = 'https://drive.google.com/file/d/0ByBBM9QN-qH4ZzZjMFNzRzRyTWc/view';

const Landing = () => (
  <div className="Landing">
    <section className="App-section is-cover">
      <h1 className="Heading Heading--lg">{NAME}</h1>

      <div className="App-side">
        <Avatar main={{ url: avatarPic }} />
      </div>

      <div className="App-side is-large">
        <p>I am a {JOB}, self-taught, <span className="bold">quick learner</span>, passionate about programming and able to <span className="bold">adapt quickly</span> to new enviroments. Know more <Link className="Link" to={ABOUT} onClick={() => {
          logClick({
            ...navigationTracking,
            label: 'About',
          })
        }}>about me</Link>.</p>
      </div>
    </section>

    <section className="App-section">
      <h1 className="Heading Heading--lg">My Skills</h1>

      <p>These are some of my most requested skills:</p>

      <ul className="List List--iconic">
        <li className="List-item is-react" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'React',
          })
        }}>
          <FA icon={faReact} />
          <span className="List-desc">ReactJS</span>
        </li>
        <li className="List-item is-angular2" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Angular2',
          })
        }}>
          <FA icon={faAngular} />
          <span className="List-desc">Angular 2+</span>
        </li>
        <li className="List-item is-vue" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Vuejs',
          })
        }}>
          <FA icon={faVuejs} />
          <span className="List-desc">VueJS</span>
        </li>
        <li className="List-item is-angular" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Angular',
          })
        }}>
          <FA icon={faAngular} />
          <span className="List-desc">AngularJS</span>
        </li>
        <li className="List-item is-node" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'NodeJs',
          })
        }}>
          <FA icon={faNodeJs} />
          <span className="List-desc">NodeJS</span>
        </li>
        <li className="List-item is-git" onClick={() => {
          logClick({
            ...iconTracking,
            label: 'Git',
          })
        }}>
          <FA icon={faGit} />
          <span className="List-desc">Git</span>
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

      <p>Know more <Link className="Link" to={SKILLS} onClick={() => {
        logClick({
          ...navigationTracking,
          label: 'Skills',
        })
      }}>about my skills</Link>.</p>
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
            <a href={cvLink} target="_blank" rel="noopener noreferer" onClick={() => {
              logClick({
                ...navigationTracking,
                label: 'Download CV',
              })
            }}>
              <FA icon={faFilePdf} />
              <span className="List-desc">Download my C.V.</span>
            </a>
          </li>
        </ul>

        <p>Know more <Link className="Link" to={WORK} onClick={() => {
          logClick({
            ...navigationTracking,
            label: 'Work',
          })
        }}>about my work</Link>.</p>
      </div>

      <div className="App-side">
        <img className="App-preview" src={cvPreview} />
      </div>
    </section>
  </div>
);

Landing.displayName = 'Landing';

export default Landing;