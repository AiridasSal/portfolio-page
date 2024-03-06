import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeroSectionWrapper = styled.section`
  background-size: cover;
  background-position: center;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  color: var(--white-color);
`;

const HeroTitle = styled.h1`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem;
  margin: 5px 0 0 0;
  padding: 0;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;
const HeroSubtitle = styled.h2`
  font-size: 1rem;
  margin: 0;
  padding: 0;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
const HeroButton = styled.button`
  /* Existing styles */
  font-size: 1.5rem;
  padding: var(--spacing-md) var(--spacing-xxl);
  background-color: var(--primary-color);
  color: var(--white-color);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 40px;

 

  &:hover {
    animation: myAnim 0.5s ease 0s 1 normal forwards; 
    color: var(--warning-color);

  }
`;


const HeroSectionComponent = () => {
  return (
    <HeroSectionWrapper>
      <HeroOverlay />
      <HeroContent>
        <TitleContainer>
          <HeroTitle>Precision. Innovation. Digital Triumphs </HeroTitle>
          <HeroSubtitle>Crafting digital triumphs through Websites and Web Applications. Result-Oriented Web Developement<br></br> Dedicated to driving product success with precision and innovation</HeroSubtitle>        </TitleContainer>
        <NavLink to="/questions/new">
          <HeroButton>CONTACT</HeroButton>
        </NavLink>
      </HeroContent>
    </HeroSectionWrapper>
  );
};

export default HeroSectionComponent;
