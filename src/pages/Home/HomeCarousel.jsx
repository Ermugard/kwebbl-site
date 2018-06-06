import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

import imgSrc from '../../public/images/home-section6.png';

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
const dotsCreator = (i) => (<div>
  <div className={`number number_` + dotsData[i].number}>{dotsData[i].number}</div>
  <h3>{dotsData[i].title}</h3>
  <p>{dotsData[i].text}</p>
</div>);

class HomeCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      className: "center",
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      appendDots: dots => (<div className="thumbs">
        <h3>Work from Anywhere with any Device</h3>
        <ul>{dots}</ul>
      </div>),
      customPaging: i => (dotsCreator(i))
    };

    return (<Slider {...settings}>
      <div><img src={imgSrc} /></div>
      <div><img src={imgSrc} /></div>
      <div><img src={imgSrc} /></div>
    </Slider>);
  }
}

export default HomeCarousel;