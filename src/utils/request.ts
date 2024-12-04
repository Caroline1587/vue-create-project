import axios from "axios";
import { getAccessToken } from "@/utils/auth";
import type { IResponse } from "@/types";
import { successMessage, warningMessage } from "./message";

const service = axios.create({
  baseURL: "/api",
  // timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    // 在请求发送之前对请求数据进行处理
    const token = getAccessToken();
    // if (token) {
    //   config.headers["Authorization"] = `Bearer ${token}`; // 携带token
    // }

    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: IResponse) => {
    const { code, msg, data } = response.json();
    if (20001 == code) warningMessage(msg); //异常信息提示
    if (20000 == code) successMessage(msg); //任务创建成功、获取所有任务成功、任务取消成功
    return data;
  },
  (error) => {
    // 对响应错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
