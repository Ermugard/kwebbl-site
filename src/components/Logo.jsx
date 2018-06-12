import React from 'react';
import logo from '../public/images/logo.png';
import logoMob from '../public/images/logo-mob.png';
import {Link} from "react-router-dom";

export default () => <div className="logo">
  <Link to="/">
    <img src={logo} alt="Kwebbl" className="desktop" />
    <img src={logo} alt="Kwebbl" className="tab" />
    <img src={logoMob} alt="Kwebbl" className="mobile" />
  </Link>
</div>;