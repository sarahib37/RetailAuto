import React from 'react'
import carBG from '../assets/carBG4.webp'
import styled from 'styled-components'

const BannerDiv = styled.div`
  background-image: url(${carBG});
  background-size: cover;
  background-position: center;
  width: 100vw; /* Ensure the div spans the full width */
  height: 60vh; /* Default height for mobile */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content vertically */
  text-align: center; /* Center text alignment */
  padding: 2em; /* Add padding for content spacing */
  margin: 0;
  margin-bottom: 2em;

  @media (min-width: 712px) {
    height: 70vh; /* Increase height for tablets */
    padding: 4em;
    font-size: 1.5em;
    white-space: nowrap; 
  }

  @media (min-width: 760px) {
    font-size: 1.1em; 
  }

  @media (min-width: 1080px) {
    height: 80vh; /* Increase height for larger screens */
    padding: 6em;
    font-size: 1em;
  }
`;

const Slogan = styled.h3`
  color: rgb(73, 73, 235);
  text-shadow: 2px 2px 4px black;
  font-size: 2em; /* Default font size for mobile */
  margin: 0; /* Remove unnecessary margin */
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3em; /* Adjust font size for tablets */
  }

  @media (min-width: 1080px) {
    font-size: 4.5em; /* Larger font size for desktops */
  }
`;

function Banner4() {
  return (
    <BannerDiv>
        <Slogan>Drive Your Dream Car Today!</Slogan> 
    </BannerDiv>
  )
}

export default Banner4