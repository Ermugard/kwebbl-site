import React, { Component } from "react";
import Slider from "react-slick";

import imageSrc from '../../public/images/culture-section4.png';

import PrevArrow from '../../components/SliderArrows/Prev';
import NextArrow from '../../components/SliderArrows/Next';

const sliderData = [{
  imgSrc: imageSrc,
  title: 'Julien Marguerite, Director Business Customers - Sales EMEA at Gigaset Communications Group:',
  text: 'Besides the powerful End users oriented communications solutions of the Kwebbl platform, which is in addition Gigaset Co-Branded - Powered by Kwebbl, meeting the Kwebbl guys always gives us a lot of energy and opportunities to successfully expand our partnership and boosts our own international sales strategy.'
},{
  imgSrc: imageSrc,
  title: 'Julien Marguerite, Director Business Customers - Sales EMEA at Gigaset Communications Group:',
  text: 'Besides the powerful End users oriented communications solutions of the Kwebbl platform, which is in addition Gigaset Co-Branded - Powered by Kwebbl, meeting the Kwebbl guys always gives us a lot of energy and opportunities to successfully expand our partnership and boosts our own international sales strategy.'
},{
  imgSrc: imageSrc,
  title: 'Julien Marguerite, Director Business Customers - Sales EMEA at Gigaset Communications Group:',
  text: 'Besides the powerful End users oriented communications solutions of the Kwebbl platform, which is in addition Gigaset Co-Branded - Powered by Kwebbl, meeting the Kwebbl guys always gives us a lot of energy and opportunities to successfully expand our partnership and boosts our own international sales strategy.'
}];


const dotsCreator = (item) => (<div>
  <div className={`number number_` + item.number}>{item.number}</div>
  <h3>{item.title}</h3>
  <p>{item.text}</p>
</div>);

const CustomSlideBlock = ({ item }) => {
  return (<div className="culture-slider-item">
  <img src={item.imgSrc} title="" alt="" />
  <h3>{item.title}</h3>
  <p>{item.text}</p>
</div>)
};

class CultureCarousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      className: "center",
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      dots: true
    };

    return (<Slider {...settings}>
      {sliderData.map((item, i) => (<CustomSlideBlock item={item} key={`cultere-carusel-item-${i}`} />))}
    </Slider>);
  }
}

export default CultureCarousel;