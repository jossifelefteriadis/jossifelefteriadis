import React from 'react'

import About from './About'

import ReactLogo from '../images/react.png'
import Node from '../images/nodejs.png'
import Javascript from '../images/javascript.png'
import Html from '../images/html5.png'
import Css from '../images/css3.png'
import Sass from '../images/sass.png'
import MongoDB from '../images/mongodb.png'
import Postgresql from '../images/postgresql.png'
import Angular from '../images/angular.png'
import Github from '../images/github.png'
import Webpack from '../images/webpack.png'
import Photoshop from '../images/photoshop.png'
import Wordpress from '../images/wordpress.png'

const Body = () => (
  <section className='Container'>
    <About />
    <p className='Title'>SKILLS</p>
    <section className='Row'>
      <section className='Center'>
        <section className='Circle'></section>
        <img src={ReactLogo} className='Logo' alt='React Logo' />
        <p className='Description'>React</p>
      </section>
      <section className='Center'>
        <section className='Circle'></section>
        <img src={Node} className='Logo' alt='Node' />
        <p className='Description'>Node</p>
      </section>
    </section>
    <section className='Row'>
      <section className='Center'>
        <section className='Circle'></section>
        <img src={Javascript} className='Logo' alt='JavaScript' />
        <p className='Description'>JavaScript</p>
      </section>
      <section className='Center'>
        <section className='Circle'></section>
        <img src={Html} className='Logo' alt='HTML5' />
        <p className='Description'>HTML5</p>
      </section>
    </section>
    <section className='Row'>
      <section className='Center'>
        <section className='Circle'></section>
        <img src={Css} className='Logo' alt='CSS3' />
        <p className='Description'>CSS3</p>
      </section>
      <section className='Center'>
        <section className='Circle'></section>
        <img src={Sass} className='Logo' alt='Sass' />
        <p className='Description'>SASS</p>
      </section>
    </section>
    <section className='Row'>
      <section className='Center'>
        <section className='Circle'></section>
        <img src={MongoDB} className='Logo' alt='MongoDB' />
        <p className='Description'>MongoDB</p>
      </section>
      <section className='Center'>
        <section className='Circle'></section>
        <img src={Postgresql} className='Logo' alt='Postgresql' />
        <p className='Description'>PostgreSQL</p>
      </section>
    </section>
    <section className='Row'>
      <section className='Center'>
        <section className='Circle'></section>
        <img src={Angular} className='Logo' alt='Angular' />
        <p className='Description'>Angular</p>
      </section>
      <section className='Center'>
        <section className='Circle'></section>
        <img src={Github} className='Logo' alt='Github' />
        <p className='Description'>Github</p>
      </section>
    </section>
    <section className='Row'>
      <section className='Center'>
        <section className='Circle'></section>
        <img src={Photoshop} className='Logo' alt='Photoshop' />
        <p className='Description'>Photoshop</p>
      </section>
      <section className='Center'>
        <section className='Circle'></section>
        <img src={Webpack} className='Logo' alt='Webpack' />
        <p className='Description'>Webpack</p>
      </section>
    </section>
    <section className='Row'>
      <section className='Center'>
        <section className='Circle'></section>
        <img src={Wordpress} className='Logo' alt='Wordpress' />
        <p className='Description'>Wordpress</p>
      </section>
    </section>
    {/*<p className='Description'>React</p>*/}
  </section>
)

export default Body
