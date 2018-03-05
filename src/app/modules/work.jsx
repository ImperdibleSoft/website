import React from 'react';
import FA from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faLink } from '@fortawesome/fontawesome-free-solid';
import { faCalendar } from '@fortawesome/fontawesome-free-regular';

import Avatar from '../components/avatar';

import globant from '../../images/companies/globant.png';
import sparkdigital from '../../images/companies/sparkdigital.png';
import samyroad from '../../images/companies/samyroad.png';
import qlik from '../../images/companies/qlik.png';
import tuenti from '../../images/companies/tuenti.png';

import monopolyonline from '../../images/projects/monopolyonline.png';
import materialcss from '../../images/projects/materialcss.png';
import ngconsole from '../../images/projects/ngconsole.png';
import characterarena from '../../images/projects/characterarena.png';
import manapp from '../../images/projects/manapp.png';

const Work = () => (
  <div className="Work">
    <div className="App-section">
      <h1 className="Heading">My work in companies</h1>

      <div className="clearfix">
        <div className="App-side is-left">
          <Avatar main={{ url: globant, className: 'is-logo' }} className="is-background" />
        </div>
        <div className="App-side is-right is-large">
          <h3 className="Heading Heading--xs">Globant</h3>
          <p><FA icon={faCalendar} className="is-imperdible" /> 2014 - <FA icon={faMapMarkerAlt} className="is-imperdible" /> Mar del Plata, AR</p>

          <p>While I was at Globant, I work in 3 different projects for <span className="bold">Deloitte</span>.</p>
          <p>I learned the basics for developing a proffesional web app, and I was introduced to <span className="bold is-node">NodeJS</span>, <span className="bold is-grunt">GruntJS</span>, <span className="bold is-angular">AngularJS</span>, <span className="bold is-knockout">KnockoutJS</span> and <span className="bold is-sass">Sass</span>.</p>
          <p>In some projects, I had the opportunity to manage tasks by myself and coordinate the Frontend team with the Backend team (located in India).</p>
        </div>
      </div>
      <div className="clearfix">
        <div className="App-side is-right">
          <Avatar main={{ url: sparkdigital, className: 'is-logo' }} className="is-background" />
        </div>
        <div className="App-side is-left is-large">
          <h3 className="Heading Heading--xs">Spark digital</h3>
          <p><FA icon={faCalendar} className="is-imperdible" /> 2015 - <FA icon={faMapMarkerAlt} className="is-imperdible" /> Mar del Plata, AR</p>

          <p>I really enjoyed my time at <span className="bold">Spark Digital</span>. I think is the best time I've ever spent in a company.</p>
          <p>While I was working here, I had the chance to finish a project for the <span className="bold">MLB</span> and start a new project (from stracth) for <span className="bold">Workstride</span>, wich is in development yet.</p>
          <p>The main stack was based on <span className="bold is-node">NodeJS</span>, <span className="bold is-gulp">Gulp</span>, <span className="bold is-angular">AngularJS</span>, <span className="bold is-sass">Sass</span> and <span className="bold is-git">Git</span>.</p>
          <p>Here I started to create unit testing using <span className="bold is-karma">Karma</span> and <span className="bold is-jasmine">Jasmine</span>.</p>
        </div>
      </div>
      <div className="clearfix">
        <div className="App-side is-left">
          <Avatar main={{ url: samyroad, className: 'is-logo' }} className="is-background" />
        </div>
        <div className="App-side is-right is-large">
          <h3 className="Heading Heading--xs">Samyroad</h3>
          <p><FA icon={faCalendar} className="is-imperdible" /> 2016 - <FA icon={faMapMarkerAlt} className="is-imperdible" /> Madrid, ES</p>

          <p>I decided to move to <span className="bold">Samyroad</span> because the had a really innovative stack, and I thought it was time for me to upgrade my skills.</p>
          <p>While working on this company, I kept using some already-known libraries, such as <span className="bold is-karma">Karma</span>, <span className="bold is-jasmine">Jasmine</span> and <span className="bold is-sass">Sass</span>.</p>
          <p>I also was able to learn some new interesting things, such as <span className="bold is-webpack">Webpack</span>, <span className="bold is-react">ReactJS</span>, <span className="bold is-redux">Redux</span>, <span className="bold">Eslint</span> and <span className="bold">Stylelint</span>.</p>
        </div>
      </div>
      <div className="clearfix">
        <div className="App-side is-right">
          <Avatar main={{ url: qlik, className: 'is-logo' }} className="is-background" />
        </div>
        <div className="App-side is-left is-large">
          <h3 className="Heading Heading--xs">Qlik</h3>
          <p><FA icon={faCalendar} className="is-imperdible" /> 2017 - <FA icon={faMapMarkerAlt} className="is-imperdible" /> Madrid, ES</p>

          <p>When I moved to <span className="bold">Qlik</span>, I realized they had an outdated stack for their products.</p>
          <p>I decided to help them updating it when I was not assigned to a project. In order to do this, I built a boilerplating based on <span className="bold is-node">NodeJS</span>, <span className="bold is-webpack">Webpack</span>, <span className="bold is-angular">AngularJS</span>, <span className="bold is-sass">Sass</span> and some automated tasks that connected the web apps to <span className="bold">Qlik Sense</span> servers.</p>
          <p>Meanwhile, I worked om projects for clients like <span className="bold">Trenitalia</span> or <span className="bold">El Corte Inglés</span>.</p>
        </div>
      </div>
      <div className="clearfix is-hidden">
        <div className="App-side is-left">
          <Avatar main={{ url: tuenti, className: 'is-logo' }} className="is-background" />
        </div>
        <div className="App-side is-right is-large">
          <h3 className="Heading Heading--xs">Tuenti</h3>
          <p><FA icon={faCalendar} className="is-imperdible" /> 2018 - <FA icon={faMapMarkerAlt} className="is-imperdible" /> Madrid, ES</p>

          <p>I'm starting a new period at <span className="bold">Tuenti</span>, one of the most innovative tech companies in Spain.</p>
          <p>During this time, I'll be creating a web app for <span className="bold">Movistar</span>, that is going to be used by clients arround all the world.</p>
          <p>This app is using <span className="bold is-react">ReactJS</span>, <span className="bold is-redux">Redux</span>, <span className="bold is-sass">Sass</span> and some other technologies I don't know yet.</p>
        </div>
      </div>
    </div>
    <div className="App-section">
      <h1 className="Heading">My personal projects</h1>

      <p>As any <span className="bold">curious</span> or <span className="bold">restless</span> person, I tend to be doing something all the time. This helps me to <span className="bold">keep learning</span>, <span className="bold">discover new things</span> and prevent me to <span className="bold">get stucked</span>.</p>

      <p>This has pushed me to create several projects, but I'm going to mention just few of them.</p>

      <div className="clearfix">
        <div className="App-side is-left">
          <Avatar main={{ url: monopolyonline, className: 'is-logo' }} className="is-background" />
        </div>
        <div className="App-side is-right is-large">
          <h3 className="Heading Heading--xs">Monopoly Online</h3>
          <p><FA icon={faCalendar} className="is-imperdible" /> 2012 - <FA icon={faMapMarkerAlt} className="is-imperdible" /> Las Palmas de Gran Canaria, ES - <FA icon={faLink} className="is-imperdible" /> <a href="https://www.facebook.com/MonopolyOnline" className="Link" target="_blank" rel="noopener noreferer">Facebook</a></p>

          <p>I was finishing the first year of my <span className="bold">Upper Degree</span>, when one of our teacher asked for creating a game using <span className="bold is-javascript">Javascript</span>. I was <span className="bold">so excited</span> about it, that I finished it <span className="bold">before</span> the starting date.</p>
          <p>With 90 days with nothing to do in the horizon, I decided to start the <span className="bold">biggest personal project</span> I've ever faced: building a Monopoly.</p>
          <p>This game was created using only <span className="bold is-html">HTML</span>, <span className="bold is-css">CSS</span> and <span className="bold is-javascript">pure Javascript</span>. No tools like Sass or jQuery (or any other library) was used.</p>
          <p>The next year, I implemented a <span className="bold is-php">PHP</span> and <span className="bold is-mysql">MySQL</span> based backend and Monopoly went Online. I got 5.000+ users and my hosting blocked the domain. I stopped fighting with the hosting, so now it's offline.</p>
        </div>
      </div>
      <div className="clearfix">
        <div className="App-side is-right">
          <Avatar main={{ url: materialcss, className: 'is-logo' }} className="is-background" />
        </div>
        <div className="App-side is-left is-large">
          <h3 className="Heading Heading--xs">Material CSS</h3>
          <p><FA icon={faCalendar} className="is-imperdible" /> 2014 - <FA icon={faMapMarkerAlt} className="is-imperdible" /> Mar del Plata, AR - <FA icon={faLink} className="is-imperdible" /> <a href="http://www.material-css.com/#/" className="Link" target="_blank" rel="noopener noreferer">Website</a></p>

          <p>Android 5 was launched few months ago, and I really loved Google's <span className="bold">Material Design</span>. But there wasn't any library that allows me to build websites based on Material Design without being attached to a javascript framework.</p>
          <p>I didn't want to use Angular Material, Polymer, Materialize and other options, because they were forcing me to code Javascript in a particular way, and I wanted a tool for creating Material Design websites, <span className="bold">compatible with any framework</span> or library.</p>
          <p>That's why I decided to create <span className="bold">Material CSS</span>, a <span className="bold is-css">pure CSS</span> library that you can use without modifying your Javascript code. It also have a few <span className="bold is-javascript">Javascript</span> functions that allow the user to toggle somethings, or create some click effects.</p>
        </div>
      </div>
      <div className="clearfix">
        <div className="App-side is-left">
          <Avatar main={{ url: ngconsole, className: 'is-logo' }} className="is-background" />
        </div>
        <div className="App-side is-right is-large">
          <h3 className="Heading Heading--xs">ngConsole</h3>
          <p><FA icon={faCalendar} className="is-imperdible" /> 2015 - <FA icon={faMapMarkerAlt} className="is-imperdible" /> Mar del Plata, AR - <FA icon={faLink} className="is-imperdible" /> <a href="http://imperdiblesoft.github.io/ngConsole/demo/#/" className="Link" target="_blank" rel="noopener noreferer">Website</a></p>

          <p>We were building a software that allows us to open the door with our phones or using a web app, at <span className="bold">Spark Digital</span>.</p>
          <p>We had some problems while resetting the <span className="bold">Raspberry Pi</span> (our server), so I decided to create a console that we can use from the web app.</p>
          <p>That's how <span className="bold">ngConsole</span> was born. It's an <span className="bold is-angular">AngularJS</span> directive, and it's able to launch predefined commands and also any command the developer wants to code.</p>
        </div>
      </div>
      <div className="clearfix">
        <div className="App-side is-right">
          <Avatar main={{ url: characterarena, className: 'is-logo' }} className="is-background" />
        </div>
        <div className="App-side is-left is-large">
          <h3 className="Heading Heading--xs">Character Arena</h3>
          <p><FA icon={faCalendar} className="is-imperdible" /> 2017 - <FA icon={faMapMarkerAlt} className="is-imperdible" /> Madrid, ES - <FA icon={faLink} className="is-imperdible" /> <a href="https://www.characterarena.com/" className="Link" target="_blank" rel="noopener noreferer">Website</a></p>

          <p>I was really impresed about what I learned in <span className="bold">Samyroad</span> about ReactJS, so I decided to start a project using that stack.</p>
          <p>I love videogames, in particular <span className="bold">World of Warcraft</span>, so I decided to create a <span className="bold">Progressive Web App</span> where I can compare my character with others, and identify the areas where my character should improve.</p>
          <p>That's the goal of <span className="bold">Character Arena</span>, a web app built using <span className="bold is-github">Github</span>, <span className="bold is-webpack">Webpack</span>, <span className="bold is-react">ReactJS</span>, <span className="bold is-redux">Redux</span>, <span className="bold is-sass">Sass</span> and <span className="bold">Blizzard's API</span>.</p>
        </div>
      </div>
      <div className="clearfix">
        <div className="App-side is-left">
          <Avatar main={{ url: manapp, className: 'is-logo' }} className="is-background" />
        </div>
        <div className="App-side is-right is-large">
          <h3 className="Heading Heading--xs">Manapp</h3>
          <p><FA icon={faCalendar} className="is-imperdible" /> 2018 - <FA icon={faMapMarkerAlt} className="is-imperdible" /> Madrid, ES - <FA icon={faLink} className="is-imperdible" /> <a href="https://github.com/ImperdibleSoft/manapp-vue" className="Link" target="_blank" rel="noopener noreferer">Github</a></p>

          <p>I was trying to learn about <span className="bold is-angular2">Angular 2</span> and <span className="bold">Typescript</span> since I was living in Argentina (2015).When I got fired in January 2018, I thought was my opportunity to <span className="bold">learn</span> and <span className="bold">improve my options</span> of getting a new (and better) job.</p>
          <p>I decided to refactor one of my old projects, but this time migrating from AngularJS to <span className="bold is-angular2">Angular 2+</span>, wich is very bound to <span className="bold">Typescript</span>.</p>
          <p>Once I had an MVP running, and making some AJAX request, modifying some options and applying some navigations, I decided to <span className="bold">continue learining new techs</span>, so I decided to migrate it to <span className="bold is-vue">VueJS</span>.</p>
        </div>
      </div>
    </div>
  </div>
);

Work.dispayName = 'Work';

export default Work;