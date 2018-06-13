import React from 'react';
import Modal from 'react-responsive-modal';

import FooterMenu from '../Menu/Menu';
import Social from './Social';
import './FooterStyles.css';
import './NotSure.css';
import logo from '../../public/images/small-logo-icon.png';

import NotSureModal from './NotSureModal';

export default class Footer extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
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
              <NotSureModal close={() => this.onCloseModal()} />
            </Modal>
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
  }
}