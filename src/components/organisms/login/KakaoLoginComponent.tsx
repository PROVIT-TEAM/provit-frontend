import React from "react";
import { handleKakaoLogin } from "../../../api/services/kakaoOAuthService";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import Box from "../../layouts/Box";
import Flex from "../../layouts/Flex";

const KakaoLoginComponent = ({ type }: any) => {
  const kakaoLogin = async () => {
    handleKakaoLogin();
  };

  if (type) {
    return (
      <Button variant="kakao" width="100%" onClick={kakaoLogin}>
        <Flex $alignItems="center" $justifyContent="center" $gap="-10px">
          카카오톡으로 시작하기
        </Flex>
      </Button>
    );
  } else {
    return (
      <Box onClick={kakaoLogin}>
        <Icon iconName="kakao" />
      </Box>
    );
  }
};

export default KakaoLoginComponent;
