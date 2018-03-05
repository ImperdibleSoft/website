import React from 'react';
import Slider from 'react-slick';

import Avatar from '../components/avatar';
import me from '../../images/about/me.jpg';

import pictures from '../../constants/pictures';

import kumba from '../../images/about/kumba.JPG';
import kumbaAnim from '../../images/about/kumba-anim.gif';
import garona from '../../images/about/garona.png';
import garonaAnim from '../../images/about/garona-anim.gif';

const slick = {
  adaptiveHeight: true,
  arrows: false,
  autoplay: true,
  dots: false,
  draggable: true,
};

const lasPalmasLink = 'https://www.google.es/maps/place/Las+Palmas+de+Gran+Canaria,+Las+Palmas/@28.117432,-15.4746365,13z/data=!3m1!4b1!4m5!3m4!1s0xc40950e91c097d1:0xab36b5ac5338ba65!8m2!3d28.1235459!4d-15.4362574';

const AboutMe = () => (
  <div className="About">
    {/* About me */}
    <div className="App-section">
      <h1 className="Heading">About me</h1>

      {/* Small description */}
      <div className="App-side">
        <Avatar main={{ url: me }} />
      </div>

      <div className="App-side is-large">
        <p>My name is Rafael Pérez García.</p>
        <p>I'm from <a className="Link" href={lasPalmasLink} target="_blank" rel="noopener noreferer">Las Palmas de Gran Canaria</a>, but now I'm living in Madrid.</p>
        <p>I've been coding for more than 7 years, starting with <span className="bold">Basic 5.0</span>, and trying different languages such as Java, Visual Basic or C++</p>
        <p>Finally, I've found my passion and favorite stack on <span className="bold is-html">HTML</span>, <span className="bold is-css">CSS</span> and <span className="bold is-javascript">Javascript</span>.</p>
      </div>
    </div>

    {/* Dogs */}
    <div className="App-section About-dogs clearfix">
      <a name="dogs"></a>
      <h2 className="Heading">My ladies</h2>

      {/* Kumba */}
      <div className="App-side is-left">
        <Avatar main={{ url: kumba }} pair={{ url: kumbaAnim, className: 'is-kumbaanim' }} />
      </div>

      <div className="App-side is-large is-right">
        <p>I adopted <span className="bold">Kumba</span> in an animal shelter. I got her when she was less than 2 months old.</p>
        <p>She has accompanied me during my last 11 years, even when I moved to Argentina, and now that I'm at Madrid.</p>
      </div>
      <br className="clear" />

      {/* Garona */}
      <div className="App-side is-right">
        <Avatar main={{ url: garonaAnim, className: 'is-garonaanim' }} pair={{ url: garona }} />
      </div>

      <div className="App-side is-large is-left">
        <p>When we arrive to Madrid and find a house to call home, we decided to adopt <span className="bold">Garona</span>.</p>
        <p>She didn't have space in her parents' house, so we welcomed her and now she's part of our family.</p>
      </div>
    </div>

    {/* Videos */}
    <div className="App-section">
      <iframe
        className="About-videos"
        src="https://www.youtube-nocookie.com/embed/videoseries?list=PLXXxQbu2tcg0xt_4yjBZUBeqoPysf9DUr"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>

    {/* Hobbies */}
    <div className="App-section About-hobbies">
      <h2 className="Heading">My hobbies</h2>

      <div className="App-side">
        <p>Some of my main hobbies are:</p>
        <ul className="List">
          <li className="List-item">Any tech stuff</li>
          <li className="List-item">Coding</li>
          <li className="List-item">Visual Design, UX</li>
          <li className="List-item">Traveling</li>
          <li className="List-item">Videogames</li>
          <li className="List-item">Racing Drones</li>
        </ul>
      </div>

      <div className="App-side is-large">
        {/* Slider with some pics (smartwatch, monocycle, assassins creed, google glass, manapp screenshot, world of warcraft, drone) */}
        <Slider {...slick} className="Slider">
          {pictures.map((pic, index) => {
            return (
              <div key={`slide-${index}`} className="Slide"><img src={pic} className="Slide-image" /></div>
            );
          })}
        </Slider>
      </div>
    </div>
  </div>
);

AboutMe.dispayName = 'About me';

export default AboutMe;