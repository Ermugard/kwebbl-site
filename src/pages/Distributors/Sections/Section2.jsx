import React from 'react';

import imgSrc from '../../../public/images/distributors-section2.png';
import LikeIcon from '../../../public/svgIcons/like-icon.js';

export default () => (<div className="section_2">
  <div className="content with-bg">
    <div className="left text-block">
      <LikeIcon />
      <h3>Hands off</h3>
      <h2>Hands off</h2>
      <p>Running your own SaaS communication platform can be a stressful undertaking. We prevent headaches by taking care of all operations, our NOC team monitors the platform 24/7, our development team continues developing new exciting features whilst our operations team takes care of carrier relations and lawful requirements. This means you can focus on what you do best: selling to and supporting your resellers.</p>
    </div>
    <div className="right image-block">
      <img src={imgSrc} alt="" title="" />
    </div>
  </div>
</div>);