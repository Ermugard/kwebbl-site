import React from 'react';

import imgSrc from '../../../public/images/service-section1.png';

export default () => (<div className="section_1">
  <div className="content">
    <div className="left">
      <h3>Growing with you</h3>
      <h2>We can satisfy any appetite</h2>
      <p>From Regional ISP to National Telecom Operator, we are ready and able to upgrade your service portfolio to the next level.</p>
    </div>
    <div className="right">
      <img src={imgSrc} alt="service" title="service" />
    </div>
  </div>
</div>)