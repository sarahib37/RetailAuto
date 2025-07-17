import React from 'react'
import styled from 'styled-components'
import carBG from '../assets/carBG2.webp'

const BannerDiv = styled.div`
    background-image: url(${carBG});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 90vh;
    margin: 0;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Center horizontally and vertically */
    color: white;
    gap: 1em;
    text-shadow: 1px 1px rgb(73, 73, 235);

    /* Mobile styles */
    h1 {
        font-size: 2.5em;
        text-align: center;
        margin: 0;
        padding: 0;
    }

    h2 {
        font-size: 1.5em;
        padding: 0.5em 0;
        margin: 0;
        text-align: center;
    }

    p {
        font-size: 1.1em;
        text-align: center;
        padding: 0 1em; /* Padding for small screens */
    }

    /* Button styling */
    Button {
        display: inline-block;
        padding: 1em;
        border: none;
        background-color: rgb(73, 73, 235);
        color: white;
        font-size: 1em;
        cursor: pointer;
        text-align: center;
        font-weight: bold;
        width: 50%; /* Make the button more prominent on mobile */
        border-radius: 69px;
        margin-top: 1em; /* Margin to space out the button */
    }

    Button:hover {
        color: rgb(73, 73, 235);
        background-color: white;
    }

    @media (min-width: 768px) {
        /* Tablet and larger screens */
        padding: 3em;

        h1 {
            font-size: 3.5em;
        }

        h2 {
            font-size: 2em;
        }

        p {
            font-size: 1.3em;
        }

        Button {
            width: 30%;
            margin-top: 2em; /* More space for the button */
        }
    }

    @media (min-width: 1024px) {
        /* Desktop and larger screens */
        height: 80vh; /* Adjust height on large screens */
        padding: 4em;
        align-items: flex-start; /* Align left for tablets and larger screens */
        text-align: left; /* Text aligned left on larger screens */
        h1 {
            font-size: 4em;
        }

        h2 {
            font-size: 2.5em;
        }

        p {
            font-size: 1.5em;
        }

        Button {
            width: 25%; /* Smaller button on large screens */
        }
    }
`

const BoldText = styled.span`
    font-weight: bold;
`

const Button = styled.button`
  display: inline-block;
  width: auto;
  padding: 1em;
  border: none;
  background-color: rgb(73, 73, 235);
  color: white;
  font-size: 1em;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  width: 30%;
  border-radius: 69px;

  &:hover{
    color: rgb(73, 73, 235);
    background-color: white;
  }
`
function Banner2() {
  return (
    <BannerDiv>
      <h2>Place an advert on Retail Auto!</h2>
      <h1>Get the price you deserve!</h1>
      <p>Place an advert now for the chance to sell your car at the <BoldText>RIGHT</BoldText> price.</p>
      <Button onClick={() => window.location.href = '/sell'}>PLACE AN ADVERT</Button>
    </BannerDiv>
  )
}

export default Banner2