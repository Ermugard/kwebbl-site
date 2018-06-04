import React from 'react';
import FooterMenu from '../Menu/Menu';
import Social from './Social';
import './FooterStyles.css';
import logo from '../../public/images/small-logo-icon.png';

export default () => (<footer className="footer">
  <div className="top">
    <p>Join Kwebbl in the new Era of Communications!</p>
  </div>
  <div className="center">
    <div className="left">
      <p className="top-text">not sure yet?</p>
      <p className="bottom-text">Let us convince you</p>
    </div>
    <div className="right">
      <p className="top-text">Ready to get the ball rolling?</p>
      <p className="bottom-text">Get in touch with us today</p>
    </div>
  </div>
  <div className="bottom">
    <div>
      <img src={logo} alt="Kwebbl" title="Kwebbl"/>
      <FooterMenu />
      <Social />
    </div>
  </div>
</footer>);
