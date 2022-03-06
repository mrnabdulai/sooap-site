import Container from "@mui/material/Container";
import React from "react";
import styled from "styled-components";
import SignupForm from "../Forms/SignupForm/SignupForm";
import { BlueHeart } from "./BlueHeart";

const StyledHeroSection = styled.section`
margin: 50px 0px 200px ;
`


const HeroWrapper = styled.div`
  display: flex;
  align-items: center;

 
  & > * {
    flex: 1;
  }

  @media screen and (max-width: 991px){
      flex-direction: column;
  }
`;

const HeroText = styled.h1`
  font-weight: 700;
  font-size: 2.5rem;

  @media screen and (max-width: 991px){
    max-width: 95%;
    text-align: center;
    margin-bottom: 50px;
    font-size: 2.2rem;

    & svg{
        width: 27px;
        height: 27px;
    }
  }
  
  @media screen and (max-width: 600px){
    max-width: 100%;
    margin-bottom: 30px;
    font-size: 2.0rem;


    & svg{
        width: 24px;
        height: 24px;
    }
  }

  & > svg{
  }
`;

const HeroCta = styled.div`
display: flex;
align-items : center;
justify-content: center;
`;

// your clothes clean without you leaving the house
function HeroSection() {
  return (
    <StyledHeroSection>
      <Container>
        <HeroWrapper>
          <HeroText>
            Your clothes clean without you leaving the house <BlueHeart />
          </HeroText>
          <HeroCta>
            <SignupForm />
          </HeroCta>
        </HeroWrapper>
      </Container>
    </StyledHeroSection>
  );
}

export default HeroSection;
