import React from 'react';

import FA from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/fontawesome-free-solid';
import { faEnvelope } from '@fortawesome/fontawesome-free-regular';
import { faTwitter, faYoutube, faTwitch, faLinkedin, faGithub, faPatreon, faDiscord } from '@fortawesome/fontawesome-free-brands';

const Contact = () => (
  <section className="App-section">
    <h1 className="Heading Heading--lg">Want to know more?</h1>
    <ul className="List List--iconic">
      <li className="List-item is-patreon">
        <a className="Contact-link" href="https://www.patreon.com/imperdiblesoft/overview" target="_blank" rel="noopener noreferer">
          <FA icon={faPatreon} />
          <span className="List-desc">Patreon</span>
        </a>
      </li>
      <li className="List-item is-linkedin">
        <a className="Contact-link" href="https://www.linkedin.com/in/rafael-pérez-garcía" target="_blank" rel="noopener noreferer">
          <FA icon={faLinkedin} />
          <span className="List-desc">LinkedIn</span>
        </a>
      </li>
      <li className="List-item is-github">
        <a className="Contact-link" href="https://www.github.com/imperdiblesoft" target="_blank" rel="noopener noreferer">
          <FA icon={faGithub} />
          <span className="List-desc">Github</span>
        </a>
      </li>
      <li className="List-item is-twitter">
        <a className="Contact-link" href="https://www.twitter.com/RafaPGarcia" target="_blank" rel="noopener noreferer">
          <FA icon={faTwitter} />
          <span className="List-desc">Twitter</span>
        </a>
      </li>
      <li className="List-item is-discord">
        <a className="Contact-link" href="https://discord.gg/2aYBec9" target="_blank" rel="noopener noreferer">
          <FA icon={faDiscord} />
          <span className="List-desc">Discord</span>
        </a>
      </li>
      <li className="List-item is-twitch">
        <a className="Contact-link" href="https://www.twitch.tv/lordfido" target="_blank" rel="noopener noreferer">
          <FA icon={faTwitch} />
          <span className="List-desc">Twitch</span>
        </a>
      </li>
      <li className="List-item is-youtube">
        <a className="Contact-link" href="https://www.youtube.com/channel/UC_Dcon2LsoS_Aa_jbsgnskg" target="_blank" rel="noopener noreferer">
          <FA icon={faYoutube} />
          <span className="List-desc">Youtube</span>
        </a>
      </li>
    </ul>

    <h1 className="Heading Heading--lg" style={{marginTop: '40px'}}>Contact</h1>
    <ul className="List List--iconic">
      <li className="List-item">
        <a className="Contact-link" href="mailto:rafael.perez@imperdiblesoft.com" target="_blank" rel="noopener noreferer">
          <FA icon={faEnvelope} />
          <span className="List-desc">Email</span>
        </a>
      </li>
      <li className="List-item">
        <a className="Contact-link" href="tel:+34 671 18 37 14" target="_blank" rel="noopener noreferer">
          <FA icon={faPhone} />
          <span className="List-desc">Phone</span>
        </a>
      </li>
    </ul>
  </section>
);

Contact.displayName = 'Contact';

export default Contact;
