import axiosInstance from "../axios";
import axios from "axios";
import apis from "../apis";

export const kakaoInfo = async () => {
  //const response = await axios.post(`${apis.kakao}`);
  //const { rest_api_key, redirect_url } = response.data;
  const REST_API_KEY = "f6e94fddbc6acce52133329e8133f512";
  const REDIRECT_URI = "http://localhost:3000/auth/kakao";
  const KAKAOURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return KAKAOURL;
};

export const KakaoLogin = (token: any) => {
  sessionStorage.setItem("token", token);
};

export const getToken = async () => {
  const grant_type = "authorization_code";
  const client_id = `f6e94fddbc6acce52133329e8133f512`;
  const REDIRECT_URI = "http://localhost:3000/auth/kakao";
  const AUTHORIZE_CODE = sessionStorage.getItem("token");

  const res = await axios.post(
    `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZE_CODE}`,
    {
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }
  );

  const token = res.data.access_token;
  sessionStorage.setItem("access_token", token);
};
export const getKakaoUserData = async () => {
  const token = sessionStorage.getItem("access_token");
  const kakaoUser = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await kakaoUser.data;
};
