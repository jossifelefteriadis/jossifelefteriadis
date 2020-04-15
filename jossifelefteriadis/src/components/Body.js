import React from 'react'
import ReactLogo from '../images/react.png'
import Javascript from '../images/javascript.png'
import Html from '../images/html5.png'
import Css from '../images/css3.png'

import Angular from '../images/angular.png'
import Github from '../images/github.png'
import MongoDB from '../images/mongodb.png'
import Node from '../images/node.png'

import Photoshop from '../images/photoshop.png'
import Postgresql from '../images/postgresql.png'
import Sass from '../images/sass.png'
import Webpack from '../images/webpack.png'

import Wordpress from '../images/wordpress.png'

const Body = () => (
  <section className='Container'>
    <section className='Row'>
      <section>
        <section className='Circle'></section>
        <img src={ReactLogo} className='Logo' alt='React Logo' />
      </section>
      <section>
        <section className='Circle'></section>
        <img src={Javascript} className='Logo' alt='JavaScript' />
      </section>
    </section>
    <section className='Row'>
      <section>
        <section className='Circle'></section>
        <img src={Html} className='Logo' alt='HTML5' />
      </section>
      <section>
        <section className='Circle'></section>
        <img src={Css} className='Logo' alt='CSS3' />
      </section>
    </section>
    <section className='Row'>
      <section>
        <section className='Circle'></section>
        <img src={Angular} className='Logo' alt='Angular' />
      </section>
      <section>
        <section className='Circle'></section>
        <img src={Github} className='Logo' alt='Github' />
      </section>
    </section>
    <section className='Row'>
      <section>
        <section className='Circle'></section>
        <img src={MongoDB} className='Logo' alt='MongoDB' />
      </section>
      <section>
        <section className='Circle'></section>
        <img src={Node} className='Logo' alt='Node' />
      </section>
    </section>
    <section className='Row'>
      <section>
        <section className='Circle'></section>
        <img src={Photoshop} className='Logo' alt='Photoshop' />
      </section>
      <section>
        <section className='Circle'></section>
        <img src={Postgresql} className='Logo' alt='Postgresql' />
      </section>
    </section>
    <section className='Row'>
      <section>
        <section className='Circle'></section>
        <img src={Sass} className='Logo' alt='Sass' />
      </section>
      <section>
        <section className='Circle'></section>
        <img src={Webpack} className='Logo' alt='Webpack' />
      </section>
    </section>
    <section className='Row'>
      <section>
        <section className='Circle'></section>
        <img src={Wordpress} className='Logo' alt='Wordpress' />
      </section>
    </section>
    {/*<p className='Description'>React</p>*/}
  </section>
)

export default Body
