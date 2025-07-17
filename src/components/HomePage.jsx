import React from 'react';
import Banner from './Banner';
import Hero from './Hero';
import Brands from './Brands';
import Banner2 from './Banner2';
import Article from './Article';
import Banner3 from './Banner3';
import HomeFaq from './HomeFaq';
import faq1 from '../faq1';
import articles from '../articles1'
import useCarSearch from './useCarSearch';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 1.5em;

  @media (min-width: 768px) {
    gap: 2em;
    margin-top: 4em;
  }
`;

function Homepage({ loggedIn, userProfile, handleLogin, handleLogout }) {
  
  const {
    carListing,
    selectedBrand,
    handleSubmit,
    handleBrandSelect
  } = useCarSearch();

  return (
    <Container>
      <Banner onFormSubmit={handleSubmit} selectedBrand={selectedBrand}/>
      {carListing.length > 0 && userProfile && <Hero carListing={carListing} userId={userProfile.id}/>}
      <Brands onBrandSelect={handleBrandSelect}/>
      <Banner2/>
      <Article title={"Buying Essentials"} articles={articles}/>
      <Banner3 
        loggedIn={loggedIn} 
        userProfile={userProfile} 
        handleLogin={handleLogin}
        handleLogout={handleLogout}   />

      <HomeFaq faq={faq1}/> 
    </Container>
  )
}

export default Homepage
