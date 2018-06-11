import React from 'react';

import TagIcon from '../../../public/svgIcons/tag-icon.js';
import img from '../../../public/images/service-section5.png';

export default () => (<div className="section_6">
  <div className="content">
    <div className="left">
      <TagIcon />
      <h2>Create added value
        integrations using our
        Realtime API</h2>
      <p>Our Realtime API can be used to integrate with all kinds of third party software, like CRMs or ERPs. It can also be used to develop additional software that caters to the wishes of your clients, whilst being fully integrated with the Kwebbl platform.</p>
    </div>
    <div className="right">
      <img src={img} alt="" title="" />
    </div>
  </div>
</div>)