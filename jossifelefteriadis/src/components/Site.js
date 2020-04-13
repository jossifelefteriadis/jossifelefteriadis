import React from 'react'
import Header from './Header'
import Body from './Body'

export default class Site extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <Body />
      </section>
    )
  }
}
