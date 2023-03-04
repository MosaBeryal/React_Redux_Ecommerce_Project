import React from 'react';
import styles from './HomeCarousel.module.css'
import {Carousel} from 'react-bootstrap';
import fashiongirl from './Assets/fashiongirl.jpg'
import fashiongirl2 from './Assets/fashiongirl2.jpg'
import fashiongirl3 from './Assets/fashiongirl3.jpg'

function HomeCarousel() {
  return (
    <Carousel>
    "
      <Carousel.Item interval={1000}>
      <span aria-hidden="false"  />
        <img
          className="d-block w-100"
          src={fashiongirl3}
          alt="First slide"
          width="400px"
          height="350"
          style={{borderRadius:"20px"}}
          
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={fashiongirl}
          alt="Second slide"
          width="400px"
          height="350"
          style={{borderRadius:"20px"}}

        
                />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fashiongirl2}
          alt="Third slide"
          width="400px"
          height="350"
          style={{borderRadius:"20px"}}

        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel