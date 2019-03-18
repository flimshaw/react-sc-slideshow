import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import IMAGE_1 from '../assets/152495main_image_feature_616b_ys.jpg'
import IMAGE_2 from '../assets/9460194568_b8f0110e97_o.jpg'
import IMAGE_3 from '../assets/as11-40-5944.jpg'
import IMAGE_4 from '../assets/AS11-44-6549HR.jpg'
import IMAGE_5 from '../assets/AS11-44-6581HR.jpg'
import IMAGE_6 from '../assets/ksc-69p-670.jpg'

const GlobalStyle = createGlobalStyle`
    font: "open-sans", sans-serif;
    overflow: hidden;
`

export default class Slideshow extends Component {

  render = () => {
    return (
      <div>
        <GlobalStyle />
        <img src={IMAGE_1} alt="image1" />
        <img src={IMAGE_2} alt="image2" />
        <img src={IMAGE_3} alt="image3" />
        <img src={IMAGE_4} alt="image4" />
        <img src={IMAGE_5} alt="image5" />
        <img src={IMAGE_6} alt="image6" />
      </div>
    )
  }
}
