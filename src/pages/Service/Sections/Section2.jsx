import React from 'react';
import DollarSvg from '../../../public/svgIcons/dollar-icon.js';
import img from '../../../public/images/service-section2.png';

export default () => (<div className="section_2">
  <div className="content">
    <div className="left">
      <DollarSvg />
      <h3>Opex Pricing</h3>
      <h2>No more huge
        upfront expenses</h2>
      <p>Kwebbl is a fully OPEX based service, we offer you all the required tools and services without requiring investment in expensive technical equipment and software.</p>
      <p>You can start selling our multi-tenant “pay-as-you-go” communications solution right away.</p>
    </div>
    <div className="right">
      <img src={img} alt="opex" title="opex" />
    </div>
  </div>
</div>)