import React from "react";
import Main from "./pages/Main";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Main></Main>
      </div>
    </RecoilRoot>
  );
}

export default App;
