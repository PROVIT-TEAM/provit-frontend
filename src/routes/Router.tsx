import { Route, Routes } from "react-router-dom";
import SocialLogin from "../components/modal/login/SocialLogin";
import EmailContainer from "../containers/loginContainer/EmailContainer";
import FindPwModalContainer from "../containers/loginContainer/FindPwModalContainer";
import SignInModalContainer from "../containers/loginContainer/SigninModalContainer";
import SignUpModalContainer from "../containers/loginContainer/SignUpModalContainer";
import SignUpEmailModalContainer from "../containers/loginContainer/SignUpEmailModalContainer";
import { Main } from "../pages";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";

const Router = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route element={<PublicRouter isAuthenticated={isAuthenticated} />}>
          <Route path="signin" element={<SignInModalContainer />} />
          <Route path="signup" element={<SignUpModalContainer />} />
          <Route path="signup-email" element={<SignUpEmailModalContainer />} />
          <Route path="find-password" element={<FindPwModalContainer />} />
          <Route path="find-account" element={<SignUpModalContainer />} />
          <Route path="/email/:email/:code" element={<EmailContainer />} />
          <Route path="/oauth" element={<SocialLogin />} />
        </Route>
        <Route
          element={<PrivateRouter isAuthenticated={isAuthenticated} />}
        ></Route>
      </Route>
    </Routes>
  );
};

export default Router;
