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
    city: "Amsterdam",
    country: "Netherlands",
    street: "Modemstraat 1",
    address: "1033 RW Amsterdam",
    phone: "+31 20 30 80 700"
  },
  {
    imgSrc: Baar,
    city: "BAAR",
    country: "Switzerland",
    street: "Haldenstrasse 5",
    address: "6340 Baar",
    phone: ""
  },
  {
    imgSrc: Berlin,
    city: "Berlin",
    country: "Germany",
    street: "Straβe der Pariser Kommune 12-16",
    address: "D-10243 Berlin",
    phone: "Kwebbl Deutschland GmbH"
  },
  {
    imgSrc: Kiev,
    city: "Kyiv",
    country: "Ukraine",
    street: "Kurenivskiy Lane 12KA",
    address: "04073 Kyiv",
    phone: "Kwebbl Kyiv"
  },
  {
    imgSrc: Nordic,
    city: "Amsterdam",
    country: "Netherlands",
    street: "Modemstraat 1",
    address: "1033 RW Amsterdam",
    phone: "Kwebbl Nordic-Baltic BV"
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

              <div className="header-orange">{contact.country}</div>
              <div className="header-tt-black">{contact.city}</div>

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