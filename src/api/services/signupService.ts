import axios from "../axios";
import apis from "../apis";

export type SignupParams = {
  /**
   * 사용자 아이디
   */
  username: string;

  /**
   * 비밀번호
   */
  password: string;

  /**
   * 사용자 이름
   */
  name: string;
};

/**
 * 회원가입 API
 * @param params 파라미터
 */

const signupService = async (params: SignupParams) => {
  try {
    const response = await axios.post(`${apis.signup}`, params);
    return response;
  } catch (error) {
    console.error("Error Signup users:", error);
    throw error;
  }
};

export default signupService;
