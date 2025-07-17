import React from 'react'
import styled from 'styled-components'
import carBG from '../assets/carBG3.webp'
import Login from './Login2'

const BannerDiv = styled.div`
    background-image: url(${carBG});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: auto;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding: 1em;
    padding-bottom: 3em;

    h1 {
        font-size: .8em;
        margin: 0;
    }

    h2 {
        font-size: 1em;
        margin: 0;
    }

    p {
        font-size: .7em;
        line-height: 1.5;
        text-shadow: 1px 1px 1px black;
        margin-bottom: 3em;
    }

    button {
        padding: 0.8em 2em;
        border-radius: 50px;
        border: none;
        background-color: black;
        color: white;
        font-weight: bold;
        font-size: .5em;
        cursor: pointer;
        transition: transform 0.2s ease, background-color 0.2s ease;

        &:hover {
            transform: scale(1.05);
            background-color: white;
            color: black;
        }
    }

    /* Tablet and larger screens */
    @media (min-width: 768px) {
        h1 {
            font-size: 2em;
        }

        h2 {
            font-size: 2em;
        }

        p {
            font-size: 1.2em;
        }

        button {
            padding: 1em 3em;
            font-size: 1.2em;
        }
    }

    /* Desktop screens */
    @media (min-width: 1024px) {

        h1 {
            font-size: 2.3em;
            
        }

        h2 {
            font-size: 1.5em;
            padding-top: 2em;
        }

        p {
            font-size: 1em;
            // max-width: 350px; /* Restrict text width for readability */
            // max-width: 8em;
            width: 26%;
            padding: 3em;
            padding-top: 3.5em;
            margin-bottom: -2.7em;
        }

        button {
            font-size: 1.3em;
            margin-top: 2em;
        }
    }
`

function Banner3({loggedIn, userProfile, handleLogin, handleLogout}) {
  return (
    <BannerDiv>
            {loggedIn ? (
                <>
                    <h2>Your Wishlist Awaits</h2>
                    <h1>Check out your dream cars and take the next step!</h1>
                    <p>Explore your wishlist, compare your favorite cars, and make your dream a reality with Retail Auto.</p>
                    <button onClick={() => window.location.href = '/wishlist'}>Go to Wishlist</button>
                </>
            ) : (
                <>
                    <h2>Create Your Wishlist Today</h2>
                    <h1>Save your dream cars and never lose track!</h1>
                    <p>Log in to start building your personalized wishlist and explore the cars you’ve always wanted.</p>
                    <Login 
                        loggedIn={loggedIn} 
                        userProfile={userProfile} 
                        handleLogin={handleLogin}
                        handleLogout={handleLogout} 
                    />
                </>
            )}
        </BannerDiv>
  )
}

export default Banner3