import React, { Component } from "react";

import IconActive from '../../public/images/home/icon-grey.png';
import Icon from '../../public/images/home/icon.png';

export default class SampleNextArrow extends Component {
  state = {
    hover: false
  };

  render() {
    const { className, style, onClick } = this.props;

    return (
      <div
        onMouseEnter={e => {
          this.setState({
            hover: true
          })
        }}
        onMouseLeave={e => {
          this.setState({
            hover: false
          })
        }}
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        <img src={this.state.hover ? IconActive : Icon} alt=""/>
      </div>
    );
  }
}