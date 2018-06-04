import React from 'react';
import LockIcon from '../../../public/svgIcons/lock-icon.js';

import imgSrc from '../../../public/images/home-section3.png';

export default () => (<section className="section_3">
  <div className="content">
    <div className="left">
      <img src={imgSrc} alt="schema" title="schema" />
    </div>
    <div className="right">
      <LockIcon />
      <h2>Fraud and Data Security</h2>
      <p>
        Fraud and Data Security are hot topics in the world of cloud communications. Kwebbl has a multitude of build-in features to reduce these risks, from intelligent and self-learning intrusion detection algorithms to encryption of phone calls and data.
      </p>
    </div>
  </div>
</section>);
