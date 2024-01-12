import axios from "../axios";
import apis from "../apis";

export type LoginParams = {
  /**
   * 사용자 명
   */
  email: string;

  /**
   * 비밀번호
   */
  password: string;
};

/**
 * 로그인 API
 * @param params 파라미터
 */

const login = async (params: LoginParams) => {
  const response = await axios.post(`${apis.login}`, params);
  const { email } = response.data;
  const token = email;
  sessionStorage.setItem("token", token);
  return { email };
};

export default login;
