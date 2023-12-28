import React from "react";
import { RecoilRoot } from "recoil";
import Router from "./routes/Router";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <>
      <RecoilRoot>
        <ToastProvider
          placement="top-center"
          autoDismiss
          autoDismissTimeout={5000}
        >
          <GlobalStyle />
          <Router />
        </ToastProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
