import axios from "../axios";
import apis from "../apis";

export type LoginParams = {
  /**
   * 사용자 명
   */
  username: string;

  /**
   * 비밀번호
   */
  password: string;
};

/**
 * 로그인 API
 * @param params 파라미터
 */

const loginService = async (params: LoginParams) => {
  try {
    const response = await axios.post(`${apis.login}`, params);

    if (response.status === 200) {
      const accessToken = response.headers["authorization"];
      const refreshToken = response.headers["authorization-refresh"];

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    } else {
      throw new Error(`Login failed. Status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error("Error Login users:", error);
    throw error;
  }
};

export default loginService;
