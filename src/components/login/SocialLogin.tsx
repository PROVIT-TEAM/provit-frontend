import styled from "styled-components";
import kakaoIcon from "../../assets/img/button/kakao_icon.png";
import naverIcon from "../../assets/img/button/naver_icon.png";
import googleIcon from "../../assets/img/button/google_icon.png";

const StyledLogoDiv = styled.div`
  width: 100%;
  height: 50px;
  margin-top: -10px;
  float: left;
`;

const StyledLoginLogo = styled.div`
  width: 60%;
  height: 50px;
  margin: 0 auto;
  img {
    margin-right: 8%;
    cursor: pointer;
  }
  :first-of-type {
    margin-left: 7%;
  }
  @media (max-width: 1600px) {
    width: 64%;
  }
`;

const StyledEasyLogin = styled.div`
  width: 98%;
  height: auto;
  margin: 100px auto;
`;

const StyledEasyText = styled.p`
  width: 22%;
  padding: 3%;
  text-align: center;
  color: #636366;
  position: relative;
  left: 35.5%;
  top: -20px;
  background-color: #2c2c2e;
  @media (max-width: 1600px) {
    width: 24%;
    left: 34.5%;
  }
`;

const StyledBar = styled.span`
  width: 100%;
  height: 1px;
  display: block;
  background-color: #636366;
`;

export function SocialLogin() {
  return (
    <StyledEasyLogin>
      <StyledBar></StyledBar>
      <StyledEasyText>간편 로그인</StyledEasyText>
      <StyledLogoDiv>
        <StyledLoginLogo>
          <img src={kakaoIcon} />
          <img src={naverIcon} />
          <img src={googleIcon} />
        </StyledLoginLogo>
      </StyledLogoDiv>
    </StyledEasyLogin>
  );
}
