import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import carBG from '../assets/carBG5.webp'
import Brands from './Brands'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const DescTitle = styled.h2`
  color: #eeeeee;
  font-size: 1.5em; /* Smaller font size for mobile */
  text-align: center;
  margin: 1em 0;

  @media (min-width: 768px) {
    font-size: 2em; /* Larger font size for tablets and desktops */
  }
`;

const BannerDiv = styled.div`
  background-image: url(${carBG});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 60vh; /* Smaller height for mobile */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content vertically */
  color: white;
  position: relative;

  @media (min-width: 768px) {
    height: 70vh; /* Increase height for tablets */
  }

  @media (min-width: 1080px) {
    height: 80vh; /* Maximum height for larger screens */
  }
`;

const NavBullets = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: 20px;
`

const Bullet = styled.span`
  width: 10px; /* Smaller size for mobile */
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#fff' : '#888')};
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (min-width: 768px) {
    width: 15px; /* Larger bullets for tablets and desktops */
    height: 15px;
  }
`;

const DescriptionWrapper = styled.div`
  animation: ${fadeIn} 0.3s ease-out forwards;
  text-align: center;
  padding: 0 1em; /* Add padding for better text alignment */

  h3 {
    font-size: 1.8em; /* Optimized for mobile */
    text-transform: uppercase;
    margin: 1em 0;
    color: black;
    text-shadow: 1px 1px 5px #fff;

    @media (min-width: 768px) {
      font-size: 2.2em; /* Larger font size for tablets */
    }

    @media (min-width: 1080px) {
      font-size: 2.5em; /* Largest font size for desktops */
    }
  }

  p {
    font-size: 1em; /* Smaller font size for mobile */
    text-shadow: 1px 1px 3px black;
    width: 90%; /* Adjust for mobile view */
    margin: 0 auto;

    @media (min-width: 768px) {
      font-size: 1.2em; /* Larger font size for tablets */
      width: 80%; /* Reduce width */
    }

    @media (min-width: 1080px) {
      font-size: 1.5em; /* Largest font size for desktops */
    }
  }
`;

const descriptions = [
    { title: 'Pay the right Price', text: 'We make it easy for you to find a great deal by showing you how the price compares to similar cars on the market.' },
    { title: 'Find the Best Deal', text: 'We compare offers from top sellers to help you find the best car that fits your budget and needs.' },
    { title: 'Hassle-Free Experience', text: 'Our platform ensures a seamless buying experience, providing all the tools you need to make the right choice.' }
]

function BuyDesc({userProfile}) {
    const [activeIndex, setActiveIndex] = useState(0);

  return (
  <>
    <Brands userProfile={userProfile}/>
    <DescTitle>Confidence and ease at every turn</DescTitle>
    <BannerDiv>
        <DescriptionWrapper>
            <h3>{descriptions[activeIndex].title}</h3>
            <p>{descriptions[activeIndex].text}</p>
        </DescriptionWrapper>
        
        <NavBullets>
          {descriptions.map((_, index) => (
            <Bullet
              key={index}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </NavBullets>
    </BannerDiv>

    
  </>
  )
}

export default BuyDesc