import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import carBG from '../assets/carBG.webp'
import axios from 'axios'

const BannerDiv = styled.div`
  background-image: url(${carBG});
  background-size: cover;
  background-position: center;
  width: 100vw; /* Ensures full width */
  max-width: 100vw; /* Prevents parent constraints */
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4em;

  @media (min-width: 1080px) {
    margin-top: -1em;
    width: auto;
    height: auto; /* Adjusted for larger screens */
    background-size: cover; /* Scale the image without cropping */
    background-repeat: no-repeat; /* Avoid tiling on smaller screens */
    gap: 7em;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column; /* Form remains in a column layout */
  gap: 1.5em; /* Spacing between the rows */
  background-color: #111;
  margin: 2em auto; /* Center the form horizontally */
  padding: 2em; /* Padding inside the form */
  box-shadow: 1px 1px 15px 2px #fff;
  border-radius: 10px;
  width: 90%; /* Default width for small screens */
  max-width: 800px; /* Allows larger width for medium and large screens */

  @media (min-width: 768px) {
    width: 80%; 
  }

  @media (min-width: 1024px) {
    width: 70%; /* Even narrower for laptops */
  }
`;

const Slogan = styled.h3`
  color: #fff;
  text-shadow: 3px 3px 4px #222;
  font-size: 2em;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 4em; /* Larger font for larger screens */
  }

  @media (min-width: 712px) and (max-width: 1138px) {
    font-size: 3.5em; /* Adjust font size for this screen size */
    margin-bottom: 3em; /* More space for the specified resolution */
  }

  @media (min-width: 1024px) {
    font-size: 4.5em;
  }
`;

const FormInputs = styled.div`
  display: flex;
  flex-wrap: nowrap; /* Keep all inputs on a single line */
  gap: 1em; /* Spacing between the inputs */
  justify-content: space-between;

  select,
  input {
    padding: 0.8em; /* Comfortable padding */
    font-size: 1em;
    flex: 1; /* Ensure inputs take equal space */
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #ddd;
    min-width: 0; /* Prevent inputs from growing excessively */
  }

  @media (max-width: 768px) {
    flex-wrap: wrap; /* Allow inputs to wrap on smaller screens */
    select,
    input {
      flex: 1 1 calc(50% - 1em); /* Adjust width to fit two in a row */
    }
  }
`;


const SubmitButton = styled.button`
  color: #fff;
  background-color: rgb(73, 73, 235);
  border: none;
  border-radius: 5px;
  padding: 0.7em;
  font-size: 1em;
  align-self: center;
  cursor: pointer;

  &:hover {
    background-color: rgb(60, 60, 200);
  }

  @media (min-width: 768px) {
    padding: 0.8em 1.5em;
  }
`;

function Banner({onFormSubmit, selectedBrand}) {
    const [carMakes, setCarMakes] = useState([])
    const [selectedMake, setSelectedMake] = useState(selectedBrand || '')
    const [carModels, setCarModels] = useState([])
    const [selectedModel, setSelectedModel] = useState('')
    const [minAmount, setMinAmount] = useState('')
    const [maxAmount, setMaxAmount] = useState('')
    

    useEffect(() => {
        async function fetchMakes(){            
                const options = {
                    method: 'GET',
                    url: 'https://car-api2.p.rapidapi.com/api/makes',
                    params: {
                    direction: 'asc',
                    sort: 'id'
                    },
                    headers: {
                    'x-rapidapi-key': 'e52016e78emsheafc59345cced25p18c645jsn3c841c5b5c22',
                    'x-rapidapi-host': 'car-api2.p.rapidapi.com'
                    }
                };
                
                try {
                    const response = await axios.request(options);
                    setCarMakes(response.data.data || []);
                } catch (error) {
                    console.error(error);
                }
        }
        fetchMakes()

    }, [])

    useEffect(() => {

        async function fetchModels(){
            const options = {
                method: 'GET',
                url: 'https://car-api2.p.rapidapi.com/api/models',
                params: {
                    make: selectedMake,
                    sort: 'id',
                    direction: 'asc',
                    year: '2020',
                    verbose: 'yes'
                },
                headers: {
                    'x-rapidapi-key': 'e52016e78emsheafc59345cced25p18c645jsn3c841c5b5c22',
                    'x-rapidapi-host': 'car-api2.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setCarModels(response.data.data || []);
            } catch (error) {
                console.error(error);
            }
        }

        fetchModels()
    }, [selectedMake])

    useEffect(() => {
        if (selectedBrand) {
            setSelectedMake(selectedBrand);
        }
    }, [selectedBrand]);

    useEffect(() => {
        if (selectedMake) {
            const formDetails = {
                make: selectedMake,
                model: selectedModel,
                minAmount,
                maxAmount
            };
            onFormSubmit(formDetails);
        }
    }, [selectedMake, selectedModel, minAmount, maxAmount, onFormSubmit]);

    useEffect(() => {
        if (selectedBrand) {
            setSelectedMake(selectedBrand)
            onFormSubmit({ make: selectedBrand, model: '', minAmount: '', maxAmount: '' });
        }
    }, [selectedBrand, onFormSubmit]);


    function handleSubmit(e){
        e.preventDefault()

        const formDetails = {
            make: selectedMake,
            model: selectedModel,
            minAmount,
            maxAmount
        }

        onFormSubmit(formDetails)

        setSelectedMake('')
        setSelectedModel('')
        setMinAmount('')
        setMaxAmount('')
        
    }

    return (
        <BannerDiv>
            <Slogan>Find Your Perfect Car Today!</Slogan>

            <Form onSubmit={handleSubmit}>

                <FormInputs>
                    <select value={selectedMake} onChange={(e) => setSelectedMake(e.target.value)}>
                        <option value=''>Select Make</option>
                        {carMakes.map((make) => (
                            <option key={make.id} value={make.name}>
                                {make.name}
                            </option>
                        ))}
                    </select>

                    <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} disabled={!selectedMake}>
                        <option value=''>Select Model</option>
                        {carModels.map((model) => (
                            <option key={model.id} value={model.name}>
                                {model.name}
                            </option>
                        ))}
                    </select>
                    <input 
                        placeholder='Min Amount' 
                        type='number' 
                        step={100}
                        value={minAmount}
                        onChange={(e) => {setMinAmount(e.target.value)}}
                    ></input>
                    <input 
                        placeholder='Max Amount' 
                        type='number' 
                        step={100}
                        value={maxAmount}
                        onChange={(e) => {setMaxAmount(e.target.value)}}
                    ></input>
                </FormInputs>
        
                

                <SubmitButton type='submit'>Search</SubmitButton>
            </Form> 

            
        </BannerDiv>
    )
  }
  
  export default Banner