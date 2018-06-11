import React from 'react';

import imgSrc from '../../../public/images/service-section6.png';
import PhoneIcon from '../../../public/svgIcons/phone-circle-icon.js';

export default () => (<div className="section_7">
  <div className="content">
    <div className="left">
      <img src={imgSrc} alt="" title="" />
    </div>
    <div className="right">
      <PhoneIcon />
      <h2>Upgrade your existing
        business with Kwebbl</h2>
      <p>Although Kwebbl can offer carrier services, as a service provider you are likely to already have your own carrier network. It is easy to interconnect Kwebbl with your own network, ensuring that you stay in control of all incoming and outgoing calls.</p>
    </div>
  </div>
</div>)