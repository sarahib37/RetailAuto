import React from 'react'
import carBG from '../assets/carBG7.webp'
import styled from 'styled-components'

const BannerDiv = styled.div`
  background-image: url(${carBG});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50vh; /* Optimized for mobile */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    height: 65vh; /* Increased height for tablets */
  }

  @media (min-width: 1080px) {
    height: 80vh; /* Full height for desktops */
  }
`;

const Slogan = styled.h3`
  color: #fff;
  text-shadow: 4px 4px 5px black;
  font-size: 2em; /* Smaller font size for mobile */
  text-align: center;
  padding: 1em;

  @media (min-width: 768px) {
    font-size: 3.5em; /* Larger font size for tablets */
    padding: 1.5em;
  }

  @media (min-width: 1080px) {
    font-size: 4.5em; /* Full size for desktops */
    padding: 2em;
  }
`;


function Banner6() {
  return (
    <BannerDiv>
        <Slogan>Get The Best Value For Your Car Today!!</Slogan> 
    </BannerDiv>
  )
}

export default Banner6