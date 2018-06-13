import React from 'react';

import imgSrc from '../../../public/images/distributors-section4.png';
import TagIcon from '../../../public/svgIcons/tag-icon.js';

export default () => (<div className="section_5">
  <div className="content with-bg">
    <div className="left image-block">
      <img src={imgSrc} alt="" title="" />
    </div>
    <div className="right text-block">
      <TagIcon />
      <h2>Integrate Kwebbl into
        your existing services</h2>
      <p>As a cloud software distributor you can add extra value to your offering by integrating the different software platforms you offer. Using our Realtime API you can easily integrate the Kwebbl platform in your other services, for instance a CRM or ERP. At the same time our Single Sign On API can ensure that your resellers and end-users log in to all your services using 1 converged identity.</p>
    </div>
  </div>
</div>);