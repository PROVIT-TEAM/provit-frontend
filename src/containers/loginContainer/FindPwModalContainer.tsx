/**
 * component 설명 : 비밀번호찾기 컨테이너
 * 작업자 : 김연정
 * 수정일 : 2024/1/9
 */

import { useEffect, useState } from "react";
import { FindPwModal } from "../../components";

interface props {
  setIsOpenFindPasswordModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const FindPwModalContainer = ({ setIsOpenFindPasswordModal }: props) => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [btnState, setBtnState] = useState<boolean>(false);

  useEffect(() => {
    if (emailValue !== "") {
      setBtnState(true);
    } else {
      setBtnState(false);
    }
  }, [emailValue]);

  const closeModal = () => {
    if (setIsOpenFindPasswordModal) setIsOpenFindPasswordModal(false);
  };

  const handleEmail = (event: any) => {
    setEmailValue(event.target.value);
  };

  const clickButton = () => {
    alert("인증코드 발송");
  };

  return (
    <>
      <FindPwModal
        closeModal={closeModal}
        handleEmail={handleEmail}
        clickButton={clickButton}
        emailValue={emailValue}
        btnState={btnState}
      ></FindPwModal>
    </>
  );
};

export default FindPwModalContainer;
