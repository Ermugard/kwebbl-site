import React from 'react';

export default ({ onClick }) => (
  <div className="burger-button" onClick={onClick}>
    <div className="line_1"></div>
    <div className="line_2"></div>
    <div className="line_3"></div>
  </div>
);