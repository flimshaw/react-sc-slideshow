import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    font: "open-sans", sans-serif;
    overflow: hidden;
`

export default class Slideshow extends Component {

  render = () => {
    return (
      <div>
        <GlobalStyle />
        HELLO
      </div>
    )
  }
}
