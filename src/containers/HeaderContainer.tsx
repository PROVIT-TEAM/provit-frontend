import { Link } from "react-router-dom";
import Header from "../components/organisms/Header";

const HeaderContainer = () => {
  return (
    <Header>
      <nav>
        <Link to="/login">로그인</Link>
        <Link to="/signin">회원가입</Link>
      </nav>
    </Header>
  );
};

export default HeaderContainer;
