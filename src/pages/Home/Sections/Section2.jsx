import React from 'react';

import Carousel from '../../../pages/Home/HomeMobileSecondSectionCarousel';

import imgSrc from '../../../public/images/home-section2.png';
import CheckedCircle from '../../../public/svgIcons/checked-circle.js';


export default () => (<section className="section_2">
  <div className="content">
    <div className="section-title">
      <h3>Kwebbl Smart Cloud Communications</h3>
      <h2>More than just world’s most
        lovable business phone system</h2>
    </div>
    <div className="content-main">
      <div className="left">
        <h3>Intuitive</h3>
        <h2>User Interface</h2>
        <ul>
          <li>
            <CheckedCircle />
            <h4>Language Support</h4>
            <p>The user interface supports many European languages and there are many languages to come.</p>
          </li>
          <li>
            <CheckedCircle />
            <h4>Drag & Drop Dial plans</h4>
            <p>Managing dialplan has never been this easy, simply drag and drop call apps in the dialplan.</p>
          </li>
          <li>
            <CheckedCircle />
            <h4>User First</h4>
            <p>When designing our interfaces we always put the user first, this makes our interfaces not just beautiful but also very user friendly.</p>
          </li>
          <li>
            <CheckedCircle />
            <h4>Quick insight</h4>
            <p>Our interface gives users quick insight in what is happening in their company. Easily browse the CDR’s, dive into Queue statistics or overview all active calls using the Operator Console.</p>
          </li>
        </ul>

        <Carousel />
      </div>
      <div className="right">
        <img src={imgSrc} alt="dialplan" title="dialplan" />
      </div>
    </div>
  </div>
</section>);
