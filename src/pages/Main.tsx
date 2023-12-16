import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import { styled } from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Main = () => {
  return (
    <StyledContainer>
      <HeaderContainer></HeaderContainer>
    </StyledContainer>
  );
};

export default Main;
