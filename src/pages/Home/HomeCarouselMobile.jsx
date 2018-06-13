import React, { Component } from "react";
import Slider from "react-slick";

import imgSrc from '../../public/images/home-section6.png';

const carouselData = [{
  title: 'Work anywhere',
  text: 'Just sign in with your credentials, using any kind of device, at any location wanted and the full communications suite will be at your disposal.'
}, {
  title: 'Presence',
  text: 'Let your colleagues know if you are busy, available or just fill in your status wanted at any specific time.'
}, {
  title: 'Conferencing, Video and Chat',
  text: 'Use your preferred communications solution to communicate to specific people or groups with the possibility of video, chat or conferencing with your mobile telephone, desktop or even the old fashioned phone.'
}];
const CarouselBlock = ({ item }) => (<div className="home-main-mobile-carousel-item">
  <h3>{item.title}</h3>
  <p>{item.text}</p>
</div>);
const dotsCreator = (i) => (<div className="number">{i + 1}</div>);

class HomeCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      className: "center",
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      appendDots: dots => (<div className="thumbs">
        <ul>{dots}</ul>
      </div>),
      customPaging: i => (dotsCreator(i))
    };

    return (
      <div className="home-main-mobile-carousel">
        <h3>Work from Anywhere with any Device</h3>
        <Slider {...settings}>
          {carouselData.map((item, i) => (<CarouselBlock key={`home-carousel-block-${i}`} item={item} />))}
        </Slider>
      </div>);
  }
}

export default HomeCarousel;