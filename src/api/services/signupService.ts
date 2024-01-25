import axios from "../axios";
import apis from "../apis";

export type SignupParams = {
  /**
   * 사용자 아이디
   */
  email: string;

  /**
   * 사용자 식별 키
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

export type EmailParams = {
  /**
   * 사용자 아이디
   */
  email: string;
};

export type UsernameParams = {
  /**
   * 사용자 식별 키
   */
  username: string;
};

export type EmailVerifyParams = {
  /**
   * 사용자 아이디
   */
  email: string;
  code: string;
};

/**
 * 회원가입 API
 * @param params 파라미터
 */

export const signupService = async (params: SignupParams) => {
  try {
    const response = await axios.post(`${apis.signup}`, params);
    return response;
  } catch (error) {
    console.error("Error Signup users:", error);
    throw error;
  }
};

export const usernameVerifyService = async (params: UsernameParams) => {
  try {
    const response = await axios.get(
      `${apis.usernameVerify} / ${params.username}}`
    );
    return response;
  } catch (error) {
    console.error("Error Username Varify users:", error);
    throw error;
  }
};

export const emailService = async (params: EmailParams) => {
  try {
    const response = await axios.post(`${apis.email}`, params);
    return response;
  } catch (error) {
    console.error("Error Email users:", error);
    throw error;
  }
};

export const emailVerifyService = async (params: EmailVerifyParams) => {
  try {
    const response = await axios.get(
      `${apis.emailVerify} / ${params.email} / ${params.code}}`
    );
    return response;
  } catch (error) {
    console.error("Error Email Varify users:", error);
    throw error;
  }
};
