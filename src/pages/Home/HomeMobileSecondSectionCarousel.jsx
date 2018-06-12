import React, { Component } from "react";
import Slider from "react-slick";

import CheckedCircle from '../../public/svgIcons/checked-circle.js';

const scrollData = [{
  title: 'Language Support',
  text: 'The user interface supports many European languages and there are many languages to come.'
}, {
  title: 'Drag & Drop Dial plans',
  text: 'Managing dialplan has never been this easy, simply drag and drop call apps in the dialplan.'
}, {
  title: 'User First',
  text: 'When designing our interfaces we always put the user first, this makes our interfaces not just beautiful but also very user friendly.'
}, {
  title: 'Quick insight',
  text: 'Our interface gives users quick insight in what is happening in their company. Easily browse the CDR’s, dive into Queue statistics or overview all active calls using the Operator Console.'
}];
const dotsCreator = (i) => (<div className="dot">{i + 1}</div>);
const DataBlock = ({ item }) => (<div className="carousel-item">
  <CheckedCircle />
  <h4>{item.title}</h4>
  <p>{item.text}</p>
</div>);

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
      variableWidth: false,
      appendDots: dots => (<div className="thumbs">
        <ul>{dots}</ul>
      </div>),
      customPaging: i => (dotsCreator(i))
    };

    return (<Slider {...settings}>
      {scrollData.map((item, i) => (<DataBlock item={item} key={`home-mobile-carousel-item-${i}`} />))}
    </Slider>);
  }
}

export default HomeCarousel;