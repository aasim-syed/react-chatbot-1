import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../App.css'

export default function Slider() {
  return (
    <Carousel pause="hover" className="bg-dark">
      <Carousel.Item>
        <img
          src="http://www.johnstonnc.com/emerserv/em/emfiles/preparednessinfo/Flooding/Hazardous-Materials-Flooding-ENGLISH.png"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>⚡🚀G2C2 CHATBOT🚀⚡</h2>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="http://www.johnstonnc.com/emerserv/em/emfiles/preparednessinfo/Flooding/Hazardous-Materials-Flooding-ENGLISH.png"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
        <h2>⚡🚀Tips for when you are in flood</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.cdc.gov/cpr/infographics/00_images/infographics-br-floods.jpg"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>STAY SAFE 💖 !</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
