import React from 'react';

import imgSrc from '../../../public/images/service-section3.png';
import Shield from '../../../public/svgIcons/shield-icon.js';

export default () => (<div className="section_3">
  <div className="content">
    <div className="left">
      <img src={imgSrc} alt="" title="" />
    </div>
    <div className="right">
      <Shield />
      <h3>Security</h3>
      <h2>Advanced fraud prevention</h2>
      <p>Kwebbl continuously monitors all call flows using her intelligent and self-learning algorithms that detect and eliminate fraud behaviour. </p>
      <p>Combined with hard call limits and destination whitelists for customers, worrying about fraud incidents becomes a thing of the past.</p>
    </div>
  </div>
</div>)