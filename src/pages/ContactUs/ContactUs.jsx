import React from 'react';
import Slider from "react-slick";

import Header from '../../components/Header/Header';
import ContactForm from './ContactForm';

import Amsterdam from '../../public/images/contactUs/amsterdam.png';
import Baar from '../../public/images/contactUs/baar.png';
import Berlin from '../../public/images/contactUs/berlin.png';
import Kiev from '../../public/images/contactUs/kiev.png';
import Nordic from '../../public/images/contactUs/nordic-baltic.png';

import './ContactUs.css';

const CONTACTS_LIST = [
  {
    imgSrc: Amsterdam,
    city: "Netherlands",
    country: "Amsterdam",
    street: "Modemstraat 1",
    address: "1033 RW Amsterdam",
    phone: "+31 20 3080 700"
  },
  {
    imgSrc: Baar,
    city: "Switzerland",
    country: "BAAR",
    street: "Haldenstrasse 5",
    address: "6340 Baar",
    phone: ""
  },
  {
    imgSrc: Berlin,
    city: "German",
    country: "Berlin",
    street: "Moskovsky",
    address: "Prospekt 11a",
    phone: "04073"
  },
  {
    imgSrc: Kiev,
    city: "Ukraine",
    country: "Kiev",
    street: "Moskovsky",
    address: "Prospekt 11a",
    phone: "04073"
  },
  {
    imgSrc: Nordic,
    city: "Nordic &",
    country: "Baltic",
    street: "Moskovsky",
    address: "Prospekt 11a",
    phone: "04073"
  }
];

const SLIDER_SETTINGS = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  rows: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        rows: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1,
        rows: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
};

export default () => (<div className="contact-us">
  <Header />
  <div className="content">
    <div className="inside">

      <h3 className="header-orange">VISIT</h3>
      <h2 className="header-tt-black">our offices</h2>

      <div className="contact-offices">
        <Slider {...SLIDER_SETTINGS}>
          {CONTACTS_LIST.map(contact => (
            <div className="contact-item" key="AMSTERDAM">
              <div className="contact-item-img">
                <img src={contact.imgSrc} alt=""/>
              </div>

              <div className="header-orange">{contact.city}</div>
              <div className="header-tt-black">{contact.country}</div>

              <div className="contact-item-address">
                <div>{contact.street}</div>
                <div>{contact.address}</div>
                <div>{contact.phone}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <ContactForm/>

    </div>
  </div>
</div>);