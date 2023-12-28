import React from "react";
import Main from "./pages/Main";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginModalContainer from "./containers/LoginModalContainer";
import SigninModalContainer from "./containers/SigninModalContainer";
import HeaderContainer from "./containers/HeaderContainer";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <HeaderContainer></HeaderContainer>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="login" element={<LoginModalContainer />} />
              <Route path="signin" element={<SigninModalContainer />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
}
export default App;
