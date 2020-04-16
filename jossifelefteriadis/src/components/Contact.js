import React from 'react'

import Email from '../images/email.png'
import Github from '../images/github.png'
import LinkedIn from '../images/linkedin.png'

const Contact = () => (
  <section>
    <p className='Title'>CONTACT</p>
    <section className='Container__Contact-Section'>
      <section className='Center'>
        <section className='Hexagon'></section>
        <img src={Email} className='Connect-Logo Connect-Email' alt='Email' />
        <a href='mailto:jossif@jossifelefteriadis.com' className='Contact-Link'>
          jossif@jossifelefteriadis.com
        </a>
      </section>
      <section className='Center'>
        <section className='Hexagon'></section>
        <img
          src={Github}
          className='Connect-Logo Connect-Github'
          alt='Github'
        />
        <a
          href='https://github.com/jossifelefteriadis'
          target='_blank'
          className='Contact-Link'
        >
          github.com/jossifelefteriadis
        </a>
      </section>
      <section className='Center'>
        <section className='Hexagon'></section>
        <img
          src={LinkedIn}
          className='Connect-Logo Connect-LinkedIn'
          alt='LinkedIn'
        />
        <a
          href='https://www.linkedin.com/in/jossifelefteriadis/'
          target='_blank'
          className='Contact-Link'
        >
          linkedin.com/in/jossifelefteriadis
        </a>
      </section>
    </section>
  </section>
)

export default Contact
