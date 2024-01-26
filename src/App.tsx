import React, { Suspense, useEffect } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import Router from "./routes/Router";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ToastProvider } from "react-toast-notifications";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes";
import { getUserIsLogin } from "./recoil/UserInfoAtom";

function App() {
  const isLogin = useRecoilValue(getUserIsLogin);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastProvider
          placement="top-center"
          autoDismiss
          autoDismissTimeout={5000}
        >
          <GlobalStyle />

          <Router isAuthenticated={isLogin} />
        </ToastProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
