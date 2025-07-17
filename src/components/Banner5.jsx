import React from 'react'
import styled from 'styled-components'
import carBG from '../assets/carBG6.webp'

const BannerDiv = styled.div`
  position: relative;
  width: 100%;
  height: 60vh; /* Smaller height for mobile */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center text vertically */
  overflow: hidden;

  h1,
  h2,
  p {
    color: black;
    text-shadow: 1px 1px 5px white;
    position: relative;
    z-index: 1;
    margin: 0.2em 0; /* Consistent spacing */
  }

  h1 {
    font-size: 3em; /* Smaller font size for mobile */
  }

  h2 {
    font-size: 2em;
  }

  p {
    font-size: 1em;
    letter-spacing: 0.1em;
    text-align: center;
    padding: 0 1em; 
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${carBG});
    background-size: cover;
    background-position: center;
    filter: blur(2px); /* Adjust blur amount as needed */
    z-index: 0; /* Behind the text */
  }

  @media (min-width: 768px) {
    height: 70vh; /* Adjust height for tablets */

    h1 {
      font-size: 6em; /* Larger font size for tablets */
    }

    h2 {
      font-size: 3em;
    }

    p {
      font-size: 1.2em;
    }
  }

  @media (min-width: 1080px) {
    height: 80vh; /* Adjust height for larger screens */

    h1 {
      font-size: 12em; /* Larger font size for desktops */
    }

    h2 {
      font-size: 6em;
    }

    p {
      font-size: 2em;
    }
  }
`;

function Banner5() {
  return (
    <BannerDiv>
        <h1>100,000</h1>
        <h2>CARS</h2>
        <p>waiting for you to pick from</p>
    </BannerDiv>
  )
}

export default Banner5