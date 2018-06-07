import React, {Component} from 'react';
import Menu from '../Menu/Menu';
import Logo from '../Logo';
import ContactButton from '../ContactButton';

import './HeaderStyles.css';

export default class Header extends Component {
  state = {
    open: false
  };

  toggleMenu() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (<header className={`header ${this.state.open ? 'open' : ''}`} >
        <Logo />
        <Menu
          open={this.state.open}
          toggleMenu={this.toggleMenu.bind(this)}
        />
        <ContactButton />
        <div
          className="delimiter"
          onClick={this.toggleMenu.bind(this)}></div>
      </header>
    )
  }
}