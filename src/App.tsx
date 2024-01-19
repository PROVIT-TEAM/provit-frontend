import React from "react";
import { RecoilRoot } from "recoil";
import Router from "./routes/Router";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ToastProvider } from "react-toast-notifications";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes";

function App() {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <ToastProvider
            placement="top-center"
            autoDismiss
            autoDismissTimeout={5000}
          >
            <GlobalStyle />
            <Router />
          </ToastProvider>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
