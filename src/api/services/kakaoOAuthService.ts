import axios from "axios";
import axiosInstance from "../axios";
import apis from "../apis";

const KAKAO_CLIENT_ID = "e736da8e5142cb5f83ca4b119ccadce9";
const KAKAO_CLIENT_SECRET = "9lt7yOsjsayLqWyJYW8W1468otgpyBSo";
const KAKAO_REDIRECT_URI = "http://localhost:3000/oauth";

const NAVER_CLIENT_ID = "Oe_3Q2yQxIU56xUhKhh5";
const NAVER_CLIENT_SECRET = "9YGOZyfyHL";
const NAVER_REDIRECT_URI = "http://localhost:3000/oauth";

const getKakaoAuthUrl = () => {
  return `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
};

export const handleKakaoLogin = () => {
  const authUrl = getKakaoAuthUrl();
  window.location.href = authUrl;
};

export const getKakaoCode = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  return code;
};

export const getKakaoAccessToken = async (code: any) => {
  try {
    const sendObject: any = {
      grant_type: "authorization_code",
      client_id: KAKAO_CLIENT_ID,
      code,
      redirect_uri: KAKAO_REDIRECT_URI,
      client_secret: KAKAO_CLIENT_SECRET,
    };
    const queryStr = new URLSearchParams(sendObject).toString();

    const response = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      queryStr
    );

    const accessToken = response.data.access_token;
    //localStorage.setItem("kakaoAccessToken", accessToken);
    return accessToken;
  } catch (error) {
    console.error("Error getting Kakao access token:", error);
    throw error;
  }
};

export const getKakaoUserData = async (accessToken: any) => {
  //const accessToken = localStorage.getItem("githubAccessToken");

  if (!accessToken) {
    throw new Error("Kakao access token not found.");
  }

  try {
    const response = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response;
  } catch (error) {
    console.error("Error getting Kakao user data:", error);
    throw error;
  }
};

export const authLoginService = async (data: any) => {
  try {
    const response = await axiosInstance.post(
      `${apis.kakao}`,
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );

    if (response.status === 200) {
      console.log(response);
      //const accessToken = response.headers["authorization"];
      //const refreshToken = response.headers["authorization-refresh"];

      //localStorage.setItem("accessToken", accessToken);
      //localStorage.setItem("refreshToken", refreshToken);
    } else {
      throw new Error(`Login failed. Status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error("Error Login users:", error);
    throw error;
  }
};
