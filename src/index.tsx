import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import FallbackErrorBoundary from "./components/helper/FallbackErrorBoundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <FallbackErrorBoundary serverErrorFallback={<div>Error</div>}>
          <App />
        </FallbackErrorBoundary>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
