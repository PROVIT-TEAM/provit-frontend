import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Modal } from "../Modal";
import kakaoIcon from "../../../assets/img/button/kakao_icon.png";
import naverIcon from "../../../assets/img/button/naver_icon.png";
import googleIcon from "../../../assets/img/button/google_icon.png";
import { useEffect } from "react";

const Title = styled.p`
  text-align: center;
  font-size: 1rem;
  margin-left: 5%;
  margin-top: 10px;
  margin-bottom: 40px;
  color: #fff;
  @media (max-width: 1600px) {
    margin-top: 10px;
    margin-bottom: 40px;
  }
`;

const LoginContainer = styled.p`
  width: 100%;
  height: auto;
`;
const CheckMessage = styled.p`
  /* text-align: center; */
  font-size: 1.1rem;
  margin-bottom: 15px;
  margin-left: 5.3%;
`;
const GoLogin = styled(Link)`
  color: blue;
`;
const LoginDiv = styled.div`
  width: 95%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 20px;
`;
const InputTitle = styled.p`
  color: #8e8e93;
  margin-bottom: 5px;
`;
const LoginInput = styled.input`
  height: 48px;
  width: 95%;
  font-size: 0.9rem;
  margin-bottom: 25px;
  border-radius: 8px;
  border: 1px solid #666;
  background-color: #3a3a3c;
  padding-left: 5%;
  border: none;
  color: #fff;
  ::placeholder {
    color: #3a3a3c;
  }
`;
const SelectBoxDiv = styled.div`
  :nth-of-type(2) {
    margin: 0 3.5%;
  }
`;
const Select = styled.select`
  width: 31%;
  height: 45px;
  margin: 0 auto;
  display: inline-block;
  border-radius: 8px;
  border: none;
  background-color: #3a3a3c;
  color: #8e8e93;
  margin-bottom: 20px;
  padding-left: 4%;
  /* margin-right: 3%; */
`;
const LoginBtn = styled.button`
  width: 100%;
  height: 56px;
  background-color: #4529fc;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    transition: all 0.3s;
    background-color: #3221a3;
  }
`;

const OtherLogin = styled.div`
  width: 50%;
  margin: 0 auto;
  @media (max-width: 1600px) {
    width: 54%;
  }
`;

const Other = styled.p`
  float: left;
  color: #8e8e93;
  margin: 10px 9px;
  cursor: pointer;
`;

const EasyLogin = styled.div`
  width: 98%;
  height: auto;
  margin: 100px auto;
`;

const EasyText = styled.p`
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

const Bar = styled.span`
  width: 100%;
  height: 1px;
  display: block;
  background-color: #636366;
`;

const LogoDiv = styled.div`
  width: 100%;
  height: 50px;
  margin-top: -10px;
  float: left;
`;

const LoginLogo = styled.div`
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

interface props {
  setIsOpenEmailLoginModal: Dispatch<SetStateAction<boolean>>;
}
export function EmailLoginModal({ setIsOpenEmailLoginModal }: props) {
  const currentYear = new Date().getFullYear();
  const [yearOption, setYearOption] = useState<number[]>([]);

  const closeModal = () => {
    setIsOpenEmailLoginModal(false);
  };

  useEffect(() => {
    getYear();
  }, []);

  const getYear = () => {
    let year = [];
    for (let i = 1900; i <= currentYear; i++) {
      year.push(i);
    }
    setYearOption(year);
  };

  console.log(yearOption);

  return (
    <>
      <Modal
        width="18.75%"
        minwidth="22.5%"
        height="640px"
        minheight="620px"
        top="13%"
        left="39%"
        minleft="36%"
        onClose={closeModal}
      >
        <Title>회원가입</Title>
        <LoginContainer>
          <LoginDiv>
            <InputTitle>이메일</InputTitle>
            <LoginInput
              type="text"
              placeholder="이메일을 입력해주세요."
            ></LoginInput>
            <InputTitle>비밀번호</InputTitle>
            <LoginInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
            ></LoginInput>
            <InputTitle>이름</InputTitle>
            <LoginInput type="text" placeholder="홍길동"></LoginInput>
            <InputTitle>생년월일</InputTitle>
            <SelectBoxDiv>
              <Select>
                {yearOption.map((item: number) => (
                  <option>{item}</option>
                ))}
              </Select>
              <Select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Select>
              <Select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Select>
            </SelectBoxDiv>
            <LoginBtn>가입하기</LoginBtn>
          </LoginDiv>
        </LoginContainer>
      </Modal>
    </>
  );
}
