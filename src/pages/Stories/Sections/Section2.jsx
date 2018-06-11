import React from 'react';
import {Link} from "react-router-dom";

import imgSrc from '../../../public/images/vayama.png';

const storyDataList = [{
  imgSrc: imgSrc,
  position: 'United States',
  title: 'Vayama',
  text: 'Vayama.com is an online travel agency uniquely focused on international air travel. Since 2007, Vayama has been committed to offering comprehensive airline flight schedules and fares allowing our customers to book air travel to popular destinations as well as some of the most remote corners of the world.',
  linkTo: '/story/vayama'
},{
  imgSrc: imgSrc,
  position: 'GLobal',
  title: 'BudgetAir',
  text: 'Vayama.com is an online travel agency uniquely focused on international air travel. Since 2007, Vayama has been committed to offering comprehensive airline flight schedules and fares allowing our customers to book air travel to popular destinations as well as some of the most remote corners of the world.',
  linkTo: '/story/budgetair'
},{
  imgSrc: imgSrc,
  position: 'European Union',
  title: 'Fashion Club 70',
  text: 'Vayama.com is an online travel agency uniquely focused on international air travel. Since 2007, Vayama has been committed to offering comprehensive airline flight schedules and fares allowing our customers to book air travel to popular destinations as well as some of the most remote corners of the world.',
  linkTo: '/story/fashionclub'
},{
  imgSrc: imgSrc,
  position: 'Netherland',
  title: 'KFC ',
  text: 'Vayama.com is an online travel agency uniquely focused on international air travel. Since 2007, Vayama has been committed to offering comprehensive airline flight schedules and fares allowing our customers to book air travel to popular destinations as well as some of the most remote corners of the world.',
  linkTo: '/story/kfc'
}];

const StoryBlock = ({ item, i }) => (<div className={`story block-${i}`}>
  <div className="left">
    <img src={item.imgSrc} alt="" title="" />
  </div>
  <div className="right">
    <h3>{item.position}</h3>
    <h2>{item.title}</h2>
    <p>{item.text}</p>
    <Link className="link-button" exatc to={item.linkTo}>Continue reading &#8594;</Link>
  </div>
</div>);

export default () => (<section className="section_2">
  <div className="content">
    {storyDataList.map((item, i) => (<StoryBlock item={item} i={i}/>))}
    <div className="load-more-block">
      <div className="load-more">Load more <span>&#8595;</span></div>
    </div>
  </div>
</section>);
