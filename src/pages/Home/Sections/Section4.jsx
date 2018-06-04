import React from 'react';
import PhoneIcon from '../../../public/svgIcons/phone-icon.js';

import imgSrc from '../../../public/images/home-section4.png';

export default () => (<section className="section_4">
  <div className="content">
    <div className="left">
      <img src={imgSrc} alt="schema" title="schema" />
    </div>
    <div className="right">
      <PhoneIcon />
      <h2>Fixed-Mobile Convergence
        using the Qaller App</h2>
      <p>
        With the Qaller App (IOS and Android) your mobile phone becomes an integrated part of your office telephony solution, without requiring a specific mobile carrier.
      </p>
      <p>
        The fixed-mobile convergence creates the possibility to use many mobile functionalities, to call in and out with your office DID and to manage the call flows.
      </p>
    </div>
  </div>
</section>);
