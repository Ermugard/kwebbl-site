import React from 'react';

import img1 from '../../../public/images/culture-section2-1.png';
import img2 from '../../../public/images/culture-section2-2.png';
import img3 from '../../../public/images/culture-section2-3.png';

export default () => (<div className="section_2">
  <div className="content">
    <h3>Our Values</h3>
    <h2>Partnership & innovation</h2>
    <p>We believe in long-term and honest partnerships, where we can provide our partners with the latest innovations in communication so that they can focus on their service to customers. All of this whilst remaining independent from large carriers or vendors.</p>
    <div className="images-block">
      <img src={img1} alt="" title="" />
      <img src={img2} alt="" title="" />
      <img src={img3} alt="" title="" />
    </div>
  </div>
</div>)