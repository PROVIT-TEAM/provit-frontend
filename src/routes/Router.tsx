import { BrowserRouter, Route, Routes } from "react-router-dom";
import SocialLogin from "../components/modal/login/SocialLogin";
import { Main } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/oauth" element={<SocialLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
