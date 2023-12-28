import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Text = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes[2]};
  margin: ${(props) => props.theme.space[2]};
`;

const Main = () => {
  return (
    <>
      <StyledContainer>
        <Outlet />
      </StyledContainer>
    </>
  );
};

//<HeaderContainer></HeaderContainer>
export default Main;
