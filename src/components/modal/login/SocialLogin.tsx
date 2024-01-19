import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getKakaoCode,
  getKakaoAccessToken,
  getKakaoUserData,
  authLoginService,
} from "../../../api/services/kakaoOAuthService";

const SocialLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const code = getKakaoCode();
        console.log("Kakao Code:", code);
        if (code) {
          const accessToken = await getKakaoAccessToken(code);
          console.log("Kakao Access Token:", accessToken);

          const userData = await getKakaoUserData(accessToken);
          console.log("Kakao User Data:", userData);

          authLoginService(userData);
        }
        navigate("/");
      } catch (error) {}
    })();
  }, []);
  return <div>SocialLogin</div>;
};

export default SocialLogin;
