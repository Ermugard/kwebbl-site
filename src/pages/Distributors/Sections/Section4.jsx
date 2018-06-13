import React from 'react';

import imgSrc from '../../../public/images/distributors-section4.png';

export default () => (<div className="section_4">
  <div className="content">
    <div className="left text-block">
      <h3>Upgrade your sales</h3>
      <h2>Upgrade your existing sales with Plug-and-Play provisioning</h2>
      <p>If you already distribute SIP hardware, the Kwebbl platform is an excellent added value. Whilst ordering hardware, your resellers can easily pre-provision the phones using the Kwebbl platform. </p>
      <p>Hardware can be drop shipped to the end-user without requiring additional manual configuration by the reseller.</p>
      <p>The user simply plugs in the phone, and all configuration will be provisioned automatically giving him direct access to all the features the Kwebbl platform has to offer.</p>
    </div>
    <div className="right image-block">
      <img src={imgSrc} alt="" title="" />
    </div>
  </div>
</div>);