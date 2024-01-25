import { BrowserRouter, Route, Routes } from "react-router-dom";
import SocialLogin from "../components/modal/login/SocialLogin";
import EmailContainer from "../containers/loginContainer/EmailContainer";
import FindPwModalContainer from "../containers/loginContainer/FindPwModalContainer";
import SignInModalContainer from "../containers/loginContainer/SignInModalContainer";
import SignUpModalContainer from "../containers/loginContainer/SignUpModalContainer";
import SignUpEmailModalContainer from "../containers/loginContainer/SignUpEmailModalContainer";
import { Main } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="signin" element={<SignInModalContainer />} />
          <Route path="signup" element={<SignUpModalContainer />} />
          <Route path="signup-email" element={<SignUpEmailModalContainer />} />
          <Route path="find-password" element={<FindPwModalContainer />} />
          <Route path="find-account" element={<SignUpModalContainer />} />
        </Route>
        <Route path="/email/:email/:code" element={<EmailContainer />} />
        <Route path="/oauth" element={<SocialLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
