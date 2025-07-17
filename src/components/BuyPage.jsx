import React from 'react'
import Banner4 from './Banner4'
import BuyDesc from './BuyDesc'
import Article from './Article';
import articles from '../articles2';
import Banner5 from './Banner5';
import faq2 from '../faq2';
import HomeFaq from './HomeFaq';

function BuyPage({userProfile}) {

  return (
    <div>
        <Banner4/>
        <BuyDesc userProfile={userProfile}/>
        <Article title={"Tips for Buying a Car"} articles={articles}/>
        <Banner5/>
        <HomeFaq faq={faq2}/> 
    </div>

  )
}

export default BuyPage