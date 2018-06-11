import React from 'react';
import Header from '../../../components/Header/Header';

import './StoryListItem.css';

export default () => (<div className="story-list-item">
  <Header />
  <div className="content">
    <aside>
      <div className="goto-press">
        {/*svg*/}
        Back to press
      </div>
      <div className="company-logo">
        <img src="" alt="" title="" />
      </div>
      <div className="about">
        <h3>Organization</h3>
        <p>Vayama</p>
        <h3>Location</h3>
        <p>United States</p>
        <h3>Location</h3>
        <p>A major US Travel Agency</p>
        <h3>URL</h3>
        <p>
          <a href="https://www.vayama.com">https://www.vayama.com</a>
        </p>
      </div>
    </aside>
    <section>
      <h2>The era of new technologies</h2>
      <p>Kwebbl, the Smart Cloud Communications platform, and Gigaset pro, provider of innovative unified communications solutions for businesses are teaming up to create full service hosted PBX telecom solutions with multiple type of high-end DECT and desktop phones, smoothly integrated in one combined solution. After multiple tests, Gigaset pro has certified all of their IP phones on Kwebbl’s platform while Kwebbl’s engineering team created a “Drop Shipment” provisioning solution within their panels, making it possible for thousands of European resellers and end-users to easily connect a Gigaset pro device onto the hosted PBX platform.</p>
      <blockquote>
        “I’m proud that an international high end business phone manufacturer as Gigaset pro is choosing Kwebbl to be her innovative business partner so that our European Provider and Reseller partners do have an enormous competitive advantage in the market of hosted telephony solutions.” -
        Ivo de Vries, CCO Kwebbl
        <span>- Ivo de Vries, CCO Kwebbl</span>
      </blockquote>
      <h3>About Kwebbl and Vayama Communications</h3>
      <p>Kwebbl was founded early 2013 as part of the Digifoon Group with offices in Amsterdam, Berlin, Switzerland and Ukraine. In Ukraine a development team set out to develop a brand new cloud communications platform. Using the latest internet and cloud technologies a scalable and secure system was built with an all-important focus on the user experience of the end-users. Kwebbl operates this platform from multiple data centers and ensures continuous innovation, allowing hosted voice and other service providers to focus on customers instead of technology.</p>
      <img src="" alt="" title="" />
      <h3>About Win-to-Win strategy</h3>
      <p>Gigaset pro, part of the Gigaset Group, caters for business customers all over the world with its wide range of premium products and offers professional communication solutions customised for the needs of each company. Gigaset pro products are designed to excel in every area, including user-friendliness, flexibility and compatibility. Gigaset distributes its pro portfolio through a network of certified partners with a focus on EMEA.</p>
    </section>
    <div className="goto-block">
      <div className="left">
        {/* left arrow svg */}
        <h3>Prev</h3>
        <h2>KFC</h2>
        <p>Fast food restaurants</p>
      </div>
      <div className="right">
        {/* right arrow svg */}
        <h3>Next</h3>
        <h2>BudgetAir</h2>
        <p>A major global travel agency</p>
      </div>
    </div>
  </div>
</div>);