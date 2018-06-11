import React from 'react';

import imgSrc from '../../../public/images/service-section7.png';
import SvgIcon from '../../../public/svgIcons/phome-mobile-icon.js';

export default () => (<div className="section_8">
  <div className="content">
    <div className="left">
      <SvgIcon />
      <h2>Integrate your mobile
        network with Kwebbl</h2>
      <p>Especially for M(V)NO’s we offer an easy solution to integrate your mobile subscribers with their business phone system. With our full Forced-on-PBX connector you can offer your customers a true Fixed-Mobile experience.</p>
    </div>
    <div className="right"><img src={imgSrc} alt="" title="" /></div>
  </div>
</div>)