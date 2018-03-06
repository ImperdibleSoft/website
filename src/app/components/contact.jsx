import React from 'react';

import FA from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/fontawesome-free-solid';
import { faEnvelope } from '@fortawesome/fontawesome-free-regular';
import {
  faPatreon,
  faLinkedin,
  faGithub,
  faDiscord,
  faFacebook,
  faTwitter,
  faYoutube,
  faTwitch,
} from '@fortawesome/fontawesome-free-brands';

import {
  PATREON,
  LINKEDIN,
  GITHUB,
  DISCORD,
  FACEBOOK,
  TWITTER,
  YOUTUBE,
  TWITCH,
  EMAIL,
  PHONE,
} from '../../constants/branding';

const Contact = () => (
  <section className="App-section">
    <h1 className="Heading Heading--lg">Want to know more?</h1>
    <ul className="List List--iconic">
      <li className="List-item is-patreon">
        <a className="Contact-link" href={PATREON} target="_blank" rel="noopener noreferer">
          <FA icon={faPatreon} />
        </a>
      </li>
      <li className="List-item is-linkedin">
        <a className="Contact-link" href={LINKEDIN} target="_blank" rel="noopener noreferer">
          <FA icon={faLinkedin} />
        </a>
      </li>
      <li className="List-item is-github">
        <a className="Contact-link" href={GITHUB} target="_blank" rel="noopener noreferer">
          <FA icon={faGithub} />
        </a>
      </li>
      <li className="List-item is-discord">
        <a className="Contact-link" href={DISCORD} target="_blank" rel="noopener noreferer">
          <FA icon={faDiscord} />
        </a>
      </li>
      <li className="List-item is-facebook">
        <a className="Contact-link" href={FACEBOOK} target="_blank" rel="noopener noreferer">
          <FA icon={faFacebook} />
        </a>
      </li>
      <li className="List-item is-twitter">
        <a className="Contact-link" href={TWITTER} target="_blank" rel="noopener noreferer">
          <FA icon={faTwitter} />
        </a>
      </li>
      <li className="List-item is-twitch">
        <a className="Contact-link" href={TWITCH} target="_blank" rel="noopener noreferer">
          <FA icon={faTwitch} />
        </a>
      </li>
      <li className="List-item is-youtube">
        <a className="Contact-link" href={YOUTUBE} target="_blank" rel="noopener noreferer">
          <FA icon={faYoutube} />
        </a>
      </li>
    </ul>

    <h1 className="Heading Heading--lg" style={{marginTop: '40px'}}>Contact</h1>
    <ul className="List List--iconic">
      <li className="List-item">
        <a className="Contact-link" href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferer">
          <FA icon={faEnvelope} />
          <span className="List-desc">Email</span>
        </a>
      </li>
      <li className="List-item">
        <a className="Contact-link" href={`tel:${PHONE}`} target="_blank" rel="noopener noreferer">
          <FA icon={faPhone} />
          <span className="List-desc">Phone</span>
        </a>
      </li>
    </ul>
  </section>
);

Contact.displayName = 'Contact';

export default Contact;
