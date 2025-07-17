import React from 'react'
import styled from 'styled-components'
import SellAction from './SellAction'
import plainBG from '../assets/plainBG.webp'

const DescTitle = styled.h2`
  color: #eeeeee;
  font-size: 2em;
  text-align: center;
  margin: 2rem 1rem;

  @media (min-width: 768px) {
    font-size: 2.5em;
    margin: 4rem;
    margin-bottom: 5rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column; /* Stack items on smaller screens */
  margin: 1rem;
  max-width: 100%;

  @media (min-width: 768px) {
    flex-direction: row; /* Side-by-side on larger screens */
    margin: 2rem auto;
    min-width: 1000px;
  }
`;


const WideDiv = styled.div`
  flex: 2;
  background: url(${plainBG}) no-repeat center center;
  background-size: cover;
  padding: 2rem;
  font-size: 1rem;
  color: #fff;
  text-align: justify;
  text-shadow: 1px 1px 2px #111;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;


function SellDesc() {
  return (
    <>
      <SellAction/>
      <DescTitle>Retail Auto makes it easy and stress-free</DescTitle>

      <Container>
        <WideDiv>
          <h2>Advertise to Millions!!</h2>
          <p>
            We have the largest audience of people looking to buy cars, making us the top choice for selling cars. With an average sale time of three days, popular models often sell in less than 24 hours.
          </p>

          <h2>Free Online Valuation</h2>
          <p>
            Our free valuation tool ensures you’re selling at a fair price. We'll guide you through the valuation process, help your car stand out, and get it ready for sale.
          </p>
        </WideDiv>
      </Container>
    </>
  )
}

export default SellDesc;
