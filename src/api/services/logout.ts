import axios from "../axios";
import apis from "../apis";

/**
 * 로그아웃 API
 */

const logout = async () => {
  try {
    const response = await axios.get(`${apis.logout}`);
    sessionStorage.removeItem("token");
  } catch (error) {
    console.log(error);
  }
};

export default logout;
