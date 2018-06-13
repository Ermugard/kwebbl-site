import React from 'react';

import { NavLink } from "react-router-dom";

import Distributors from '../../public/images/footer/for-it-distributors.png';
import Providers from '../../public/images/footer/for-service-providers.png';
import AboutUs from '../../public/images/footer/more-about-us.png';

const LIST_FOR_BE_SURE = [
  {
    imgSrc: Providers,
    name: "For Service Providers",
    text: "Check the advantages for Service Providers",
    button: "For Service Providers",
    link: "/distributors"
  },
  {
    imgSrc: Distributors,
    name: "For IT Distributors",
    text: "Check the advantages for IT Providers",
    button: "For IT Distributors",
    link: "/service"
  },
  {
    imgSrc: AboutUs,
    name: "More About Us",
    text: "Learn how our culture creates unique and fantastic partnership and business opportunities",
    button: "Read Success Stories",
    link: "/culture"
  }
];

export default ({ close }) => (<div className="notSure">
    <a className="close" >
      <svg className="styles_closeIcon__1QwbI" onClick={close} xmlns="http://www.w3.org/2000/svg" width="28" height="28"
           viewBox="0 0 36 36">
        <path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path>
      </svg>
    </a>
    <div className="header-orange">Not sure yet?</div>
    <div className="header-tt-black">Let us convenience you</div>

    <div className="notSureModal-blocks">
      {LIST_FOR_BE_SURE.map(item => (
        <div className="item" key={item.name}>
          <div className="one">
            <div className="img">
              <img src={item.imgSrc} alt=""/>
            </div>

            <div className="name">{item.name}</div>
            <div className="text">{item.text}</div>
            <NavLink to={item.link} className="btn btn-orange" onClick={close}>{item.button}</NavLink>
          </div>
          <div className="two">
            <div className="img tablet">
              <img src={item.imgSrc} alt=""/>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);