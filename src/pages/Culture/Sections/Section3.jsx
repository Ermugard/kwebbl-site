import React from 'react';

import img1 from '../../../public/images/culture-section3-1.png';
import img2 from '../../../public/images/culture-section3-2.png';
import img3 from '../../../public/images/culture-section3-3.png';

export default () => (<div className="section_3">
  <div className="content">
    <h3>Our Team</h3>
    <h2>We love to innovate and serve you</h2>
    <p>Within the Kwebbl family, work and fun are going hand in hand. But only with the purpose to make the most innovative and solid communications service to our partners for the long term.</p>
    <div className="images-block">
      <img className="img1" src={img1} alt="" title="" />
      <img className="img2" src={img2} alt="" title="" />
      <img className="img3" src={img3} alt="" title="" />
    </div>
  </div>
</div>)