import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  text-align: center;
  padding: 2rem 2rem; 
  background-color: #bbb;
  margin: 2rem 0;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  /* Background decoration */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1) 10px,
      rgba(255, 255, 255, 0) 10px,
      rgba(255, 255, 255, 0) 20px
    );
    z-index: 0; /* Lower than content */
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 130%;
    height: 130%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent 70%);
    transform: translate(-50%, -50%);
    z-index: 0; /* Lower than content */
    pointer-events: none;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2; /* Above background */
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const SubTitle = styled.h2`
  order: -1;
  font-size: 1.2rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #555;
  margin-bottom: 0.8rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  margin: 0.8rem 0;
  color: #444;
  line-height: 1.6;
  position: relative;
  z-index: 2; /* Above background */
  max-width: 600px;
  font-weight: bold;
`;

const TickParagraph = styled.p`
  font-size: 1.1rem;
  margin: 0.8rem 0;
  color: #444;
  line-height: 1.6;
  position: relative;
  padding-left: 2rem; /* Space for the icon */
  z-index: 2; /* Above background */
  max-width: 600px;

  &::before {
    content: '✔️';
    font-size: 1.2rem;
    color: #28a745; /* Green color for the tick */
    position: absolute;
    left: 0;
    top: 0;
    transform: translateY(0.2rem);
  }
`;

const MiddleDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  z-index: 2; /* Above background */
`;

const Button = styled.button`
  padding: 0.9rem 2.2rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #4b6cb7, #182848); /* Unique gradient */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 6px 12px rgba(0, 105, 217, 0.3);
  z-index: 3; /* Ensures it pops above background decorations */

  /* Adding a subtle glow effect */
  &:hover {
    background: linear-gradient(135deg, #355f95, #0c1b34);
    box-shadow: 0 8px 16px rgba(75, 108, 183, 0.5); /* Enhanced glow */
    transform: translateY(-3px);
  }

  &:active {
    background: linear-gradient(135deg, #2e4a71, #0a1629);
    transform: translateY(0);
  }
`;

function SellAction() {
  return (
    <Section>
      <TitleWrapper>
        <Title>Post a Sale Offer on Retail Auto</Title>
        <SubTitle>Sell My Car</SubTitle>
      </TitleWrapper>
      
      <MiddleDesc>
        <Paragraph>Follow these 3 simple steps to get your advert live and start attracting buyers!</Paragraph>
        <TickParagraph>Receive a free, instant online valuation to kickstart your listing.</TickParagraph>
        <TickParagraph>Gain access to millions of potential buyers nationwide.</TickParagraph>
        <TickParagraph>Enjoy support from our dedicated team every step of the way.</TickParagraph>
      </MiddleDesc>
      
      <Button>Create Your Ad</Button>
    </Section>
  )
}

export default SellAction;
