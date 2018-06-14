import React from 'react';
import Modal from 'react-responsive-modal';

import FooterMenu from '../Menu/Menu';
import Social from './Social';
import './FooterStyles.css';
import './NotSure.css';
import logo from '../../public/images/small-logo-icon.png';

import { NavLink } from "react-router-dom";

import NotSureModal from './NotSureModal';

export default class Footer extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    window.scrollTo(0,0);

    this.setState({ open: true });
  };

  onCloseModal = () => {
    console.log("close");
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;

    return (<footer className="footer">
        <div className="top">
          <p>Join Kwebbl in the new Era of Communications!</p>
        </div>
        <div className="center">
          <div className="left" onClick={this.onOpenModal}>
            <p className="top-text">not sure yet?</p>
            <p className="bottom-text">Let us convince you</p>

            <Modal showCloseIcon={false} open={open} onClose={this.onCloseModal} center classNames={{ modal: "notSureModal" }}>
              <NotSureModal close={e => {
                this.setState({
                  open: false
                });

                e && e.stopPropagation();
                window.scrollTo(0,0);
              }} />
            </Modal>
          </div>
          <NavLink to="/contactUs" className="right">
            <p className="top-text">Ready to get the ball rolling?</p>
            <p className="bottom-text">Get in touch with us today</p>
          </NavLink>
        </div>
        <div className="bottom">
          <div>
            <NavLink to="/">
              <img src={logo} alt="Kwebbl" title="Kwebbl"/>
            </NavLink>
            <FooterMenu />
            <Social />
          </div>
        </div>
      </footer>);
  }
}