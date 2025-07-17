import React, { useState } from 'react'
import styled from 'styled-components'
import brands from '../brands'
import useCarSearch from './useCarSearch'
import Hero from './Hero'

const BrandsCtn = styled.div`
    display: flex;
    flex-direction: column; /* Stack brands vertically by default */
    gap: 2em;
    justify-content: center;
    width: 100%;
    text-align: center;
    color: #eeeeee;
    padding: 1em;

    @media (min-width: 768px) {
        flex-direction: row; /* Change to row layout on tablet and larger screens */
        justify-content: space-between;
    }
`

const BrandTitle = styled.h1`
    text-align: center;
    color: #eeeeee;
    font-size: 1.8em;
    margin-bottom: 1em;

    @media (min-width: 768px) {
        font-size: 2.4em; /* Increase font size on larger screens */
    }
`

const Brand = styled.div`
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;
    text-align: center;

    &:hover {
        transform: scale(1.05);
        background-color: #333;
    }

    img {
        width: 60%; /* Smaller image size on mobile */
        border-radius: 50%;
        height: auto;
    }

    h1 {
        font-size: 1.5em;
        margin-top: 0.5em;
    }

    @media (min-width: 712px) {

        h1 {
            font-size: 3em;
        }
    }

    @media (min-width: 768px) {
        img {
            width: 70%; /* Larger image size on tablet and larger screens */
        }

        h1 {
            font-size: 1.3em;
        }
    }
`

const More = styled.p`
    color: #eeeeee;
    text-align: center;
    cursor: pointer;
    font-size: 1.5em;
    margin-top: 2em;
    margin-bottom: 2em;

    &:hover {
        text-decoration: underline;
        text-underline-offset: 0.6em;
        text-decoration-color: rgb(73, 73, 235);
        transition: text-decoration-color 0.3s ease;
    }

    @media (min-width: 768px) {
        font-size: 1.8em; /* Larger font size for larger screens */
    }
`

const BrandsMoreCtn = styled.div`
    display: flex;
    gap: 1em;
    justify-content: space-between;
    width: 100%;
    text-align: center;
    color: #eeeeee;
    flex-wrap: wrap;
    margin-top: 1em;
    font-size: .5em;
    overflow-x: auto;
    padding: 0 1em;    
`

const BrandsMore = styled.div`
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;
    width: 45%; /* Default to 45% width on mobile (2 columns) */
    text-align: center;

    &:hover {
        transform: scale(1.05);
        background-color: #333;
    }

    img {
        width: 40%;
        border-radius: 50%;
        height: auto;
    }

    @media (min-width: 768px) {
        width: 20%;
        overflow-x: hidden;
    }
`

const famousBrands = [
    {
        id: 1,
        name: "Audi",
        image: "https://m.atcdn.co.uk/ect/media/226b3dbffe2b4155a69702dc9d547f4d.jpg"
    },

    {
        id: 2,
        name: "BMW",
        image: "https://m.atcdn.co.uk/ect/media/74deb1191aeb438eb9764aef4b52665a.jpg"
    },
    {
            id: 3,
        name: "Ford",
        image: "https://m.atcdn.co.uk/ect/media/03156d35774a4e0bb86272a4ddf7dc8a.jpg"
    },

    {
        id: 4,
        name: "Mercedes-Benz",
        image: "https://m.atcdn.co.uk/ect/media/1758ab59de774da2933aef4d5e8d15f1.jpg"
    },
]

function Brands({onBrandSelect, userProfile}) {
    const [viewMore, setViewMore] = useState(false);
    const { handleBrandSelect, carListing } = useCarSearch();

    function handleMore(){
        setViewMore(!viewMore)
    }
  return (
    <div>
        {carListing.length > 0 && userProfile && <Hero carListing={carListing} userId={userProfile.id}/>}
        <BrandTitle>Browse by brand</BrandTitle>
        <BrandsCtn>
            {famousBrands.map((brand) => {
                return(
                    <Brand key={brand.id} onClick={() => {handleBrandSelect(brand.name)}}>
                        <img src={brand.image} alt={brand.name}/>
                        <h1>{brand.name}</h1>
                    </Brand>
                )
            })}
        </BrandsCtn>
        
        <More onClick={handleMore}>View {!viewMore ? "More" : "Less"} Brands &#8594;</More>
        {viewMore && (
            <BrandsMoreCtn>
                {brands.map((brand) => {
                    return(
                        <BrandsMore key={brand.id} onClick={() => {handleBrandSelect(brand.name)}}>
                            <img src={brand.image} alt={brand.name}/>
                            <h1>{brand.name}</h1>
                        </BrandsMore>
                    )
                })}
            </BrandsMoreCtn>
            
        )}
    </div>
    
  )
}

export default Brands 