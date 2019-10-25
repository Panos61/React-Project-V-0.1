import React, { Component } from 'react';
import { Carousel } from 'antd';
import './Carousel.css';
import BtnPopular from './BtnPopular';
//import img1 from '../img/music.png';
//import img2 from '../img/cinema.png';
//import img3 from '../img/cinema.png';

class CarouselMain extends Component {
  render() {
    return (
      <Carousel effect='fade' autoplay className='shadow'>
        <div>
          <BtnPopular />
        </div>
        <div>
          <BtnPopular />
        </div>
        <div>
          <BtnPopular />
        </div>
        <div>
          <BtnPopular />
        </div>
      </Carousel>
    );
  }
}

export default CarouselMain;
