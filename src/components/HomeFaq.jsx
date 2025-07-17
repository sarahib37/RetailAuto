import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const HomeFaqCtn = styled.div`
    color: #fff;
    line-height: 1.5;
    max-width: 90%; /* Default for mobile */
    margin: 0 auto;
    padding: 1em;

    @media (min-width: 768px) {
        max-width: 70%;
    }

    @media (min-width: 1024px) {
        max-width: 60%;
    }
`;

const HomeFaqTitle = styled.h2`
    text-align: center;
    text-transform: uppercase;  
    font-size: 1.8em; /* Mobile default */

    @media (min-width: 768px) {
        font-size: 2.2em;
    }

    @media (min-width: 1024px) {
        font-size: 2.5em;
    }
`;

const FaqCtn = styled.div`
    
    border-top: 2px solid grey;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    overflow: hidden;

    &:last-child{
        border-bottom: 2px solid grey;
        margin-bottom: 1em;
    }

    .faq-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out, padding 0.3s ease-out;
    }

    .faq-content.open {
        max-height: 500px; /* Adjust this value based on the content size */
        padding: 1em 0;
    }
`


const FaqTopicCtn = styled.div`
    padding: 0.5em;
    display: flex;
    gap: 1em; /* Adjusted for mobile */
    align-items: center;

    &:hover {
        border-left: 5px solid #fff;
    }

    @media (min-width: 768px) {
        gap: 1.5em; /* Increased for larger screens */
    }
`;

const FaqQuestion = styled.span`
    line-height: 1.2;
    font-size: 1.2em; /* Default for mobile */
    padding: 0.5em 0;

    @media (min-width: 768px) {
        font-size: 1.4em;
    }

    @media (min-width: 1024px) {
        font-size: 1.5em;
    }
`;  

const FaqAnswer = styled.p`
    padding-left: 2em; /* Default for mobile */
    font-size: 1em;

    @media (min-width: 768px) {
        padding-left: 2.5em;
        font-size: 1.1em;
    }

    @media (min-width: 1024px) {
        padding-left: 3em;
        font-size: 1.2em;
    }
`;

const IconWrapper = styled.div`
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
`


function HomeFaq({faq}) {
    const [openFaq, setOpenFaq] = useState(false)

    function toggleOpen(id){
        setOpenFaq((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

  return (
    <HomeFaqCtn>
        <HomeFaqTitle>Your Questions Answered</HomeFaqTitle>

        {faq.map((faq) => {
            return(
            <FaqCtn key={faq.id}>

                <FaqTopicCtn onClick={() => toggleOpen(faq.id)}>
                    <IconWrapper open={openFaq[faq.id]}>
                        <FontAwesomeIcon icon={!openFaq[faq.id] ? faPlus : faX}/>
                    </IconWrapper>
                    <FaqQuestion>{faq.question}</FaqQuestion>
                </FaqTopicCtn>

                {
                    <div className={`faq-content ${openFaq[faq.id] ? 'open' : ''}`}>
                        {openFaq[faq.id] && <FaqAnswer>{faq.answer}</FaqAnswer>}
                    </div>
                }
            </FaqCtn>
        )   })}
    </HomeFaqCtn>
  )
}

export default HomeFaq