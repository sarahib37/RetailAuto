import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPen, faSearch, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const Section = styled.section`
  padding: 2rem;
  background-color: #444;
  text-align: center;
  margin: 2rem 0; 
`;

const Title = styled.h2`
  font-size: 2rem; /* Smaller font size for mobile */
  color: #fff;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px #111;

  @media (min-width: 768px) {
    font-size: 2.5rem; /* Larger font size for tablets */
  }

  @media (min-width: 1080px) {
    font-size: 3rem; /* Full size for desktops */
    width: 100%;
  }
`;

const StepList = styled.div`
  display: flex;
  flex-direction: column; /* Stacks items on mobile */
  gap: 2rem;
  width: 90%;
  margin: 2em auto;

  @media (min-width: 768px) {
    flex-direction: row; /* Aligns items in a row for tablets and desktops */
    flex-wrap: wrap;
    
    margin-left: 4em;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  padding: 1rem;
  background-color: #111;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: box-shadow 0.3s ease;
  width: 100%; /* Full width on mobile */

  &:hover {
    box-shadow: 4px 4px 15px rgba(255, 255, 255, 0.2);
  }

  @media (min-width: 768px) {
    width: 45%; /* Two items per row on tablets */
  }

  @media (min-width: 1080px) {
    width: 40%; /* Slightly smaller width for desktops */
  }
`;

const IconWrapper = styled.div`
  font-size: 1.8rem; /* Larger icons for better visibility */
  color: #4b6cb7;
  margin-right: 1rem;

  @media (min-width: 768px) {
    font-size: 2rem; /* Larger icons for tablets */
  }

  @media (min-width: 1080px) {
    font-size: 2.2rem; /* Full size for desktops */
  }
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StepTitle = styled.h3`
  font-size: 1.2rem; /* Smaller font size for mobile */
  color: #4b6cb7;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.4rem; /* Larger font size for tablets */
  }

  @media (min-width: 1080px) {
    font-size: 1.6rem; /* Full size for desktops */
  }
`;

const StepDescription = styled.p`
  font-size: 0.9rem; /* Smaller font size for mobile */
  color: #ccc;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 1rem; /* Larger font size for tablets */
  }

  @media (min-width: 1080px) {
    font-size: 1.1rem; /* Full size for desktops */
  }
`;

const Guide1 = [
  {
    icon: faCamera,
    title: "Capture Quality Photos",
    description: "Take good-quality photos to make your ad stand out. Buyers expect to see multiple, clear images showcasing all angles of your vehicle."
  },
  {
    icon: faPen,
    title: "Keep Descriptions Brief but Detailed",
    description: "Keep your vehicle description short and focused, highlighting any unique features. Don’t forget to mention if it has a full-service history."
  }
]

const Guide2 = [
  {
    icon: faSearch,
    title: "Be Transparent",
    description: "Ensure your description is accurate. Mention any imperfections up front to avoid unnecessary viewings and save time for serious buyers."
  },
  {
    icon: faDollarSign,
    title: "Set a Competitive Price",
    description: "Research similar listings to set a fair price that attracts buyers and helps your car sell faster."
  }
]

function SellGuide(){
  return (
    <Section>
      <Title>How to Sell Your Car, Fast</Title>
      
      <StepList>
        {Guide1.map((guide) => (
          <Step>
          <IconWrapper>
            <FontAwesomeIcon icon={guide.icon} />
          </IconWrapper>
          <StepContent>
            <StepTitle>{guide.title}</StepTitle>
            <StepDescription>{guide.description}</StepDescription>
          </StepContent>
        </Step>
        ))}
      </StepList>  

      <StepList>
        {Guide2.map((guide) => (
          <Step>
          <IconWrapper>
            <FontAwesomeIcon icon={guide.icon} />
          </IconWrapper>
          <StepContent>
            <StepTitle>{guide.title}</StepTitle>
            <StepDescription>{guide.description}</StepDescription>
          </StepContent>
        </Step>
        ))}
      </StepList>  
      
    </Section>
  );
};

export default SellGuide;
