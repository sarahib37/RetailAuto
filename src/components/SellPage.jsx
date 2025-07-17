import React from 'react'
import Banner6 from './Banner6'
import SellDesc from './SellDesc'
import Article from './Article';
import articles from '../articles3';
import faq2 from '../faq3';
import HomeFaq from './HomeFaq';
import SellGuide from './SellGuide';

function BuyPage() {

  return (
    <div>
        <Banner6/>
        <SellDesc/>
        <SellGuide/>
        <Article title={"Tips for Selling Your Car"} articles={articles}/>
        <HomeFaq faq={faq2}/> 
    </div>

  )
}

export default BuyPage