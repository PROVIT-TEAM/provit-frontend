/**
 * component 설명 : 이메일 회원가입 동의 체크박스
 * 작업자 : 김연정
 * 수정일 : 2024/1/14
 */

import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const StyledRadiobox = styled.input`
  margin-right: 3%;
  margin-top: 13px;
`;

const StyledCheckText = styled.span`
  color: #fff;
  line-height: 150%;
  font-weight: lighter;
  span {
    color: #446ff6;
  }
`;

interface props {
  setSelectRadioValue: Dispatch<SetStateAction<string[]>>;
}

export function AgreeCheckBox({ setSelectRadioValue }: props) {
  const handleRadioChange = (value: string) => {
    setSelectRadioValue((prevValues) =>
      prevValues.includes(value)
        ? prevValues.filter((val) => val !== value)
        : [...prevValues, value]
    );
  };
  return (
    <>
      <StyledRadiobox
        type="checkbox"
        onChange={() => handleRadioChange("1")}
        value="1"
      />
      <StyledCheckText>
        프루빗의 <span>서비스 이용 약관</span>에 동의합니다.
      </StyledCheckText>
      <br></br>
      <StyledRadiobox
        type="checkbox"
        onChange={() => handleRadioChange("2")}
        value="2"
      />
      <StyledCheckText>
        프루빗의 <span>개인정보 보호 정책</span>에 동의합니다.
      </StyledCheckText>
      <br></br>
      <StyledRadiobox
        type="checkbox"
        onChange={() => handleRadioChange("3")}
        value="3"
      />
      <StyledCheckText>
        프루빗의 <span>마케팅 수신 동의</span>에 동의합니다.
      </StyledCheckText>
    </>
  );
}
