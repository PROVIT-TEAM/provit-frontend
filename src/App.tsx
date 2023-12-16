import React from "react";
import Main from "./pages/Main";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./styles/GlobalStyle";

import "./styles/App.css";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <div className="App">
        <Main></Main>
      </div>
    </RecoilRoot>
  );
}

export default App;
