/**
 * component 설명 : 회원가입 컨테이너
 * 작업자 : 김연정
 * 수정일 : 2024/1/10
 */
import { useNavigate } from "react-router-dom";
import { SignUpModal } from "../../components";

const SignUpModalContainer = () => {
  const navigate = useNavigate();

  const signUpClose = () => {
    navigate("/");
  };

  const signUpEmail = () => {
    navigate("/signup-email");
  };
  const signIn = () => {
    navigate("/signin");
  };

  return (
    <>
      <SignUpModal
        signUpClose={signUpClose}
        signUpEmail={signUpEmail}
        signIn={signIn}
      ></SignUpModal>
    </>
  );
};

export default SignUpModalContainer;
