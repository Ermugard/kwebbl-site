import React, {Component} from "react";
import Slider from "react-slick";

import imgSrc from '../../public/images/home-section6.png';

import IconActive from '../../public/images/home/icon-grey.png';
import Icon from '../../public/images/home/icon.png';


import PrevArrow from '../../components/SliderArrows/Prev';
import NextArrow from '../../components/SliderArrows/Next';

const dotsData = [{
  number: 1,
  title: 'Work anywhere',
  text: 'Just sign in with your credentials, using any kind of device, at any location wanted and the full communications suite will be at your disposal.'
}, {
  number: 2,
  title: 'Presence',
  text: 'Let your colleagues know if you are busy, available or just fill in your status wanted at any specific time.'
}, {
  number: 3,
  title: 'Conferencing, Video and Chat',
  text: 'Use your preferred communications solution to communicate to specific people or groups with the possibility of video, chat or conferencing with your mobile telephone, desktop or even the old fashioned phone.'
}];

const dotsCreator = (item) => (<div>
  <div className={`number number_` + item.number}>{item.number}</div>
  <h3>{item.title}</h3>
  <p>{item.text}</p>
</div>);

class HomeCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      adaptiveHeight: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      appendDots: dots => (<div className="thumbs">
        <h3>Work from Anywhere with any Device</h3>
        <ul>{dots}</ul>
      </div>),
      customPaging: i => (dotsCreator(dotsData[i]))
    };

    return (
      <div className="home-main-carousel">
        <Slider {...settings}>
          <div key="carousel-item-1"><img src={imgSrc}/></div>
          <div key="carousel-item-2"><img src={imgSrc}/></div>
          <div key="carousel-item-3"><img src={imgSrc}/></div>
        </Slider>
      </div>);
  }
}

export default HomeCarousel;