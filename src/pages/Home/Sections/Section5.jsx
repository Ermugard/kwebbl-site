import React from 'react';
import ShieldIcon from '../../../public/svgIcons/shield-icon.js';

import imgSrc from '../../../public/images/home-section5.png';

export default () => (<section className="section_5">
  <div className="content">
    <ShieldIcon />
    <h2>Distributed and Geo-Redundant</h2>
    <p>The Kwebbl platform is a highly distributed and geo-redundant platform, running in a private cloud spread over multiple data centers throughout Europe.</p>
    <p>All these data centers function as one to handle the communication load for all users, but whenever an incident occurs the affected location canquickly be isolated whilst services continue.</p>
    <img src={imgSrc} alt="schema" title="schema" />
  </div>
</section>);
