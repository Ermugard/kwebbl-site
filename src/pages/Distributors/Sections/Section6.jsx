import React from 'react';

import imgSrc from '../../../public/images/distributors-section6.png';
import DollarIcon from '../../../public/svgIcons/dollar-icon.js';

export default () => (<div className="section_6">
  <div className="content">
    <div className="left text-block">
      <DollarIcon />
      <h3>Opex Pricing</h3>
      <h2>No more huge
        upfront expenses</h2>
      <p>Kwebbl is a fully OPEX based service, we offer you all the required tools and services without requiring investment in expensive technical equipment and software. </p>
      <p>You can start selling our multi-tenant “pay-as-you-go” communications solution right away.</p>
    </div>
    <div className="right image-block">
      <img src={imgSrc} alt="" title="" />
    </div>
  </div>
</div>);