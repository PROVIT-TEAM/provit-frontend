import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
  // timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * GET 요청을 담당하는 함수
 */
const getData = async (endpoint: any) => {
  try {
    const response = await instance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("GET 요청 중 에러 발생:", error);
    throw error;
  }
};

/**
 * POST 요청을 담당하는 함수
 */
const postData = async (endpoint: any, data: any) => {
  try {
    const response = await instance.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("POST 요청 중 에러 발생:", error);
  }
};

/**
 * PUT 요청을 담당하는 함수
 */
const putData = async (endpoin: any, data: any) => {
  try {
    const response = await instance.put(endpoin, data);
    return response.data;
  } catch (error) {
    console.error("PUT 요청 중 에러 발생:", error);
    throw error;
  }
};

/**
 * DELETE 요청을 담당하는 함수
 */
const deleteData = async (endpoint: any) => {
  try {
    const response = await instance.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("DELETE 요청 중 에러 발생:", error);
    throw error;
  }
};

export { getData, postData, putData, deleteData };
